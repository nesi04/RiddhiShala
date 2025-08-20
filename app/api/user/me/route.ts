import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    if (typeof payload === 'object' && payload !== null && 'sub' in payload) {
      const userId = typeof payload.sub === 'string' ? parseInt(payload.sub) : payload.sub;

      if (!userId) 
        return NextResponse.json({ message: 'Invalid token payload' }, { status: 401 });

      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          role: true,
          assignedSchools: { include: { school: true } }
        },
      });

      if (!user) 
        return NextResponse.json({ message: 'User not found' }, { status: 404 });

      return NextResponse.json(user);
    } else {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }
  } catch {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
}

export async function PUT(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    if (typeof payload !== 'object' || payload === null || !('sub' in payload)) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    const userId = typeof payload.sub === 'string' ? parseInt(payload.sub) : payload.sub;
    if (!userId) {
      return NextResponse.json({ message: 'Invalid token payload' }, { status: 401 });
    }

    const body = await req.json();
    const { name, phoneNumber, address, bio, district } = body;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { name, phoneNumber, address, bio, district },
      include: {
        role: true,
        assignedSchools: { include: { school: true } }
      },
    });

    return NextResponse.json(updatedUser);
  } catch {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
}
