import { NextResponse } from 'next/server';
import { saveGift } from '@/lib/giftStore';
import type { GiftData } from '@/types/gift';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseErr: any) {
      return NextResponse.json({ error: `JSON Parse Error: ${parseErr?.message}` }, { status: 400 });
    }

    const gift = body as GiftData;

    if (!gift?.id || !gift?.content?.recipient || !gift?.presentation) {
      return NextResponse.json({ 
        error: `Validation failed. Missing fields: ${!gift?.id ? 'id ' : ''}${!gift?.content?.recipient ? 'recipient ' : ''}${!gift?.presentation ? 'presentation' : ''}` 
      }, { status: 400 });
    }

    await saveGift(gift);
    return NextResponse.json({ success: true, giftId: gift.id, recipientUrl: `/g/${gift.id}` });
  } catch (error: any) {
    console.error('CRITICAL GIFT SAVE ERROR:', error);
    return NextResponse.json({ 
      error: error?.message || 'Server error during save',
      name: error?.name,
      stack: error?.stack 
    }, { status: 500 });
  }
}