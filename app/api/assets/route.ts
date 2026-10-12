import { NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

export const runtime = 'nodejs';

const MAX_AUDIO = 10 * 1024 * 1024;
const MAX_IMAGE = 4 * 1024 * 1024;
const AUDIO_EXT = new Set(['mp3', 'wav', 'ogg', 'm4a', 'aac', 'webm']);
const IMAGE_EXT = new Set(['jpg', 'jpeg', 'png', 'webp', 'gif']);

function extension(name: string) {
  const ext = name.toLowerCase().split('.').pop() || '';
  return ext.replace(/[^a-z0-9]/g, '');
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const file = form.get('file');
    const giftId = String(form.get('giftId') || 'draft');
    const kind = String(form.get('kind') || 'audio');

    if (!(file instanceof File)) return NextResponse.json({ error: 'No file supplied.' }, { status: 400 });

    const ext = extension(file.name);
    const allowed = kind === 'image' ? IMAGE_EXT : AUDIO_EXT;
    const max = kind === 'image' ? MAX_IMAGE : MAX_AUDIO;
    if (!allowed.has(ext)) return NextResponse.json({ error: `Unsupported ${kind} format.` }, { status: 400 });
    if (file.size > max) return NextResponse.json({ error: `${kind === 'image' ? 'Image' : 'Audio'} is too large.` }, { status: 413 });

    const safeGiftId = giftId.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 64) || 'draft';
    const id = crypto.randomUUID();
    const relative = `/uploads/gifts/${safeGiftId}/${id}.${ext}`;
    const absolute = path.join(process.cwd(), 'public', relative);
    await fs.mkdir(path.dirname(absolute), { recursive: true });
    await fs.writeFile(absolute, Buffer.from(await file.arrayBuffer()));

    return NextResponse.json({ url: relative, name: file.name, size: file.size, type: file.type });
  } catch (error) {
    console.error('Asset upload failed', error);
    return NextResponse.json({ error: 'Upload failed.' }, { status: 500 });
  }
}
