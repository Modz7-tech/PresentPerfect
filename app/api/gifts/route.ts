import { NextResponse } from 'next/server';
import { saveGift } from '@/lib/giftStore';
import type { GiftData } from '@/types/gift';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const gift = (await request.json()) as GiftData;

    if (!gift?.id || !gift?.content?.recipient || !gift?.presentation) {
      return NextResponse.json(
        { error: 'Invalid gift payload: missing id, recipient, or presentation.' }, 
        { status: 400 }
      );
    }

    await saveGift(gift);
    return NextResponse.json({ success: true, giftId: gift.id, recipientUrl: `/g/${gift.id}` });
  } catch (error) {
    console.error('Gift save failed', error);
    const message = error instanceof Error ? error.message : 'Could not save the gift.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}