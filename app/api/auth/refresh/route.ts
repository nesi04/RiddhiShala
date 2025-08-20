import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../lib/prisma';
import { isBefore, addMinutes } from 'date-fns';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';

const JWT_SECRET = process.env.JWT_SECRET!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { refreshToken } = req.body;

  if (!refreshToken || typeof refreshToken !== 'string') {
    return res.status(400).json({ message: 'Refresh token required' });
  }

  const stored = await prisma.refreshToken.findUnique({ where: { token: refreshToken } });

  if (!stored || isBefore(stored.expiresAt, new Date())) {
    return res.status(401).json({ message: 'Invalid refresh token' });
  }

  const user = await prisma.user.findUnique({ where: { id: stored.userId } });
  if (!user) return res.status(401).json({ message: 'User not found' });

  const payload = { sub: user.id, email: user.email };
  const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' });
  const newRefreshToken = uuid();
  const expiresAt = addMinutes(new Date(), 60 * 24 * 7);

  await prisma.refreshToken.create({
    data: { token: newRefreshToken, userId: user.id, expiresAt },
  });

  return res.status(200).json({ accessToken, refreshToken: newRefreshToken });
}
