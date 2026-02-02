import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { orders, orderItems } from '@/lib/schema';
import { authServer } from '@/lib/auth/server';

export async function GET() {
  const result = await authServer.getSession();
  
  if (!result || 'error' in result || !result.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const session = result;

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
