import { NextResponse } from 'next/server';
import { saveGift } from '@/lib/giftStore';
import type { GiftData } from '@/types/gift';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const gift = (await request.json()) as GiftData;

    if (!gift?.id || !gift?.content?.recipient || !gift?.presentation) {
      return NextResponse.json(
        { error: `Invalid payload. Missing: ${!gift?.id ? 'id ' : ''}${!gift?.content?.recipient ? 'recipient ' : ''}${!gift?.presentation ? 'presentation' : ''}` }, 
        { status: 400 }
      );
    }

    await saveGift(gift);
    return NextResponse.json({ success: true, giftId: gift.id, recipientUrl: `/g/${gift.id}` });
  } catch (error: any) {
    console.error('Gift save failed detail:', error);
    // Send the actual error message back in the JSON response for debugging
    return NextResponse.json({ 
      error: error?.message || 'Unknown save error', 
      stack: error?.stack 
    }, { status: 500 });
  }
}