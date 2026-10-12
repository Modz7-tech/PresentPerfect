import fs from 'node:fs/promises';
import path from 'node:path';
import type { GiftData } from '@/types/gift';

// In-memory fallback for serverless environments (like Vercel) where the file system is read-only
const memoryStore = (globalThis as any).__giftStore || ((globalThis as any).__giftStore = new Map<string, GiftData>());

const STORE_DIR = path.join(process.cwd(), 'data', 'gifts');
const isVercel = process.env.VERCEL === '1' || process.env.NODE_ENV === 'production';

async function ensureStore() {
  if (isVercel) return;
  try {
    await fs.mkdir(STORE_DIR, { recursive: true });
  } catch {
    // Ignore if read-only
  }
}

function fileFor(id: string) {
  return path.join(STORE_DIR, `${id}.json`);
}

export async function saveGift(gift: GiftData) {
  // Always save to memory store so it works instantly on Vercel
  memoryStore.set(gift.id, gift);

  // Try saving to disk if running locally
  if (!isVercel) {
    try {
      await ensureStore();
      await fs.writeFile(fileFor(gift.id), JSON.stringify(gift), 'utf8');
    } catch (err) {
      console.warn('Filesystem write failed, relying on memory store:', err);
    }
  }

  return gift;
}

export async function getStoredGift(id: string): Promise<GiftData | null> {
  // 1. Check memory store first
  if (memoryStore.has(id)) {
    return memoryStore.get(id)!;
  }

  // 2. Fall back to reading from disk (for local dev)
  try {
    const raw = await fs.readFile(fileFor(id), 'utf8');
    const gift = JSON.parse(raw) as GiftData;
    memoryStore.set(id, gift); // Cache it in memory
    return gift;
  } catch {
    return null;
  }
}