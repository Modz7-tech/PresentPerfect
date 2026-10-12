import { NextResponse } from 'next/server';
import { getStoredGift } from '@/lib/giftStore';
import { getGiftById } from '@/data/mockGifts';

export const runtime = 'nodejs';

export async function GET(_request: Request, { params }: { params: { giftId: string } }) {
  const stored = await getStoredGift(params.giftId);
  if (stored) return NextResponse.json(stored, { headers: { 'Cache-Control': 'no-store' } });

  const sample = getGiftById(params.giftId);
  if (!sample) return NextResponse.json({ error: 'Gift not found.' }, { status: 404 });
  return NextResponse.json(sample, { headers: { 'Cache-Control': 'no-store' } });
}
