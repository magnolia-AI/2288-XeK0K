import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { orders } from '@/lib/schema';
import { authServer } from '@/lib/auth/server';

export async function GET() {
  const result = await authServer.getSession();
  
  // Type Guard for Neon Auth result structure
  if (!result || 'error' in result) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Neon Auth data is typically inside the 'data' property if using standard result types,
  // but looking at the TSC error, it seems 'user' is actually expected but TS is confused
  // about the Data | Error union.
  
  const session = result as any; // Temporary escape to bypass the conflicting Data|Error union
  
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const userOrders = await db.query.orders.findMany({
      where: (orders, { eq }) => eq(orders.userId, session.user.id),
      with: {
        orderItems: {
          with: {
            product: true,
          },
        },
      },
      orderBy: (orders, { desc }) => [desc(orders.createdAt)],
    });

    return NextResponse.json(userOrders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

