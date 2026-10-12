import fs from 'node:fs/promises';
import path from 'node:path';
import type { GiftData } from '@/types/gift';

const STORE_DIR = path.join(process.cwd(), 'data', 'gifts');

async function ensureStore() {
  await fs.mkdir(STORE_DIR, { recursive: true });
}

function fileFor(id: string) {
  return path.join(STORE_DIR, `${id}.json`);
}

export async function saveGift(gift: GiftData) {
  await ensureStore();
  await fs.writeFile(fileFor(gift.id), JSON.stringify(gift), 'utf8');
  return gift;
}

export async function getStoredGift(id: string): Promise<GiftData | null> {
  try {
    const raw = await fs.readFile(fileFor(id), 'utf8');
    return JSON.parse(raw) as GiftData;
  } catch {
    return null;
  }
}
