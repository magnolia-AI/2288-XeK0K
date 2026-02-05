import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { quests, userProfiles } from '@/lib/schema';
import { authServer } from '@/lib/auth/server';
import { eq, and, sql } from 'drizzle-orm';

/**
 * GET /api/quests
 * Fetches user profile stats and active/completed quests.
 * Seeds initial "Welcome Quests" if none exist for the user.
 */
export async function GET() {
  try {
    const session = await authServer.getSession();
    
    // Using a more flexible check to handle the Neon Auth session type
    const sessionAny = session as any;
    
    if (!sessionAny || sessionAny.error || !sessionAny.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const userId = sessionAny.user.id;

    // Fetch user profile for Fossil Points and Explorer Level
    const profiles = await db
      .select()
      .from(userProfiles)
      .where(eq(userProfiles.userId, userId))
      .limit(1);

    // Provide baseline values if the profile hasn't been created yet
    const profile = profiles[0] || {
      fossilPoints: 0,
      explorerLevel: 1,
    };

    // Fetch existing quests
    let userQuests = await db
      .select()
      .from(quests)
      .where(eq(quests.userId, userId));

    // Dynamic Seeding for new users: Seed "Welcome Quests" if no quests exist
    if (userQuests.length === 0) {
      const welcomeQuests = [
        {
          userId,
          title: 'Make your first purchase',
          rewardPoints: 500,
          status: 'active',
        },
        {
          userId,
          title: 'Browse 5 products',
          rewardPoints: 100,
          status: 'active',
        },
        {
          userId,
          title: 'Join the Explorer Club',
          rewardPoints: 250,
          status: 'active',
        }
      ];

      await db.insert(quests).values(welcomeQuests);
      
      // Re-fetch now that they've been created
      userQuests = await db
        .select()
        .from(quests)
        .where(eq(quests.userId, userId));
    }

    const completedQuestsSize = userQuests.filter(q => q.status === 'completed').length;
    const activeQuestsSize = userQuests.filter(q => q.status === 'active').length;

    return NextResponse.json({
      profile: {
        fossilPoints: profile.fossilPoints,
        explorerLevel: profile.explorerLevel,
      },
      quests: userQuests,
      stats: {
        total: userQuests.length,
        completed: completedQuestsSize,
        active: activeQuestsSize,
      }
    });
  } catch (error) {
    console.error('Error fetching quest progress:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/quests
 * Completes a quest and awards points.
 * Ensures transaction safety when incrementing fossilPoints.
 */
export async function POST(request: Request) {
  try {
    const session = await authServer.getSession();
    const sessionAny = session as any;

    if (!sessionAny || sessionAny.error || !sessionAny.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const userId = sessionAny.user.id;
    const { questId, status } = await request.json();

    if (!questId || status !== 'completed') {
      return NextResponse.json(
        { error: 'Invalid request. Quest ID and "completed" status required.' },
        { status: 400 }
      );
    }

    const questIdInt = parseInt(questId);

    // Update quest status and increment fossil points in a single transaction
    const result = await db.transaction(async (tx) => {
      // 1. Fetch the quest within the transaction to ensure data consistency
      const existingQuests = await tx
        .select()
        .from(quests)
        .where(and(eq(quests.id, questIdInt), eq(quests.userId, userId)))
        .limit(1);

      const quest = existingQuests[0];

      if (!quest) {
        throw new Error('QUEST_NOT_FOUND');
      }

      // 2. Prevent double-claiming
      if (quest.status === 'completed') {
        throw new Error('QUEST_ALREADY_COMPLETED');
      }

      // 3. Update quest status
      await tx
        .update(quests)
        .set({ status: 'completed' })
        .where(eq(quests.id, questIdInt));

      // 4. Update or create user profile with incremented points
      // We use SQL fragment for atomic increment if profile exists
      const profiles = await tx
        .select()
        .from(userProfiles)
        .where(eq(userProfiles.userId, userId))
        .limit(1);

      if (profiles.length === 0) {
        await tx.insert(userProfiles).values({
          userId: userId,
          fossilPoints: quest.rewardPoints,
          explorerLevel: 1,
          updatedAt: new Date(),
        });
      } else {
        await tx
          .update(userProfiles)
          .set({ 
            fossilPoints: sql`${userProfiles.fossilPoints} + ${quest.rewardPoints}`,
            updatedAt: new Date()
          })
          .where(eq(userProfiles.userId, userId));
      }

      return quest;
    });

    return NextResponse.json({
      success: true,
      message: `Quest completed! You earned ${result.rewardPoints} Fossil Points.`,
      rewardPoints: result.rewardPoints
    });

  } catch (error: any) {
    if (error.message === 'QUEST_NOT_FOUND') {
      return NextResponse.json({ error: 'Quest not found' }, { status: 404 });
    }
    if (error.message === 'QUEST_ALREADY_COMPLETED') {
      return NextResponse.json({ error: 'Quest already completed' }, { status: 400 });
    }

    console.error('Error updating quest status:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

