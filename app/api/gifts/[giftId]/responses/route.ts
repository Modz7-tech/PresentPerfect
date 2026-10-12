import { NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';
import { getStoredGift } from '@/lib/giftStore';

export const runtime = 'nodejs';

export async function POST(request: Request, { params }: { params: { giftId: string } }) {
  try {
    const gift = await getStoredGift(params.giftId);
    if (!gift) return NextResponse.json({ error: 'Gift not found' }, { status: 404 });
    const body = await request.json();
    const answers = Array.isArray(body?.answers) ? body.answers.slice(0, 12) : [];
    if (!answers.length) return NextResponse.json({ error: 'No answers supplied' }, { status: 400 });

    const dir = path.join(process.cwd(), 'data', 'gifts');
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, `${params.giftId}.responses.json`), JSON.stringify({
      submittedAt: new Date().toISOString(),
      answers,
    }), 'utf8');
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Could not save responses' }, { status: 500 });
  }
}
