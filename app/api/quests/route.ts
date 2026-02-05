import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { quests, userProfiles } from '@/lib/schema';
import { authServer } from '@/lib/auth/server';
import { eq } from 'drizzle-orm';

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

    // Fetch quests related to the user
    const userQuests = await db
      .select()
      .from(quests)
      .where(eq(quests.userId, userId));

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

    // 1. Fetch the quest to check its current status and reward points
    const existingQuests = await db
      .select()
      .from(quests)
      .where(eq(quests.id, parseInt(questId)))
      .limit(1);

    const quest = existingQuests[0];

    if (!quest) {
      return NextResponse.json(
        { error: 'Quest not found' },
        { status: 404 }
      );
    }

    // 2. Security check: Ensure the quest belongs to the authenticated user
    if (quest.userId !== userId) {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    // 3. Prevent double-claiming
    if (quest.status === 'completed') {
      return NextResponse.json(
        { error: 'Quest already completed' },
        { status: 400 }
      );
    }

    // 4. Update quest status and increment fossil points in a transaction
    await db.transaction(async (tx) => {
      // Update quest status
      await tx
        .update(quests)
        .set({ status: 'completed' })
        .where(eq(quests.id, parseInt(questId)));

      // Fetch user profile or create if it doesn't exist
      const profiles = await tx
        .select()
        .from(userProfiles)
        .where(eq(userProfiles.userId, userId))
        .limit(1);

      if (profiles.length === 0) {
        // Create profile if missing
        await tx.insert(userProfiles).values({
          userId: userId,
          fossilPoints: quest.rewardPoints,
          explorerLevel: 1,
        });
      } else {
        // Increment fossil points
        const currentPoints = profiles[0].fossilPoints;
        await tx
          .update(userProfiles)
          .set({ 
            fossilPoints: currentPoints + quest.rewardPoints,
            updatedAt: new Date()
          })
          .where(eq(userProfiles.userId, userId));
      }
    });

    return NextResponse.json({
      success: true,
      message: `Quest completed! You earned ${quest.rewardPoints} Fossil Points.`,
      rewardPoints: quest.rewardPoints
    });

  } catch (error) {
    console.error('Error updating quest status:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

