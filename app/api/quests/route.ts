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

