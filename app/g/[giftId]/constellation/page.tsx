import React from 'react';
import { notFound } from 'next/navigation';
import { getGiftById } from '@/data/mockGifts';
import { getStoredGift } from '@/lib/giftStore';
import { ConstellationPage } from '@/components/recipient/ConstellationPage';
export default async function GiftConstellationRoute({ params }: { params: { giftId: string } }) { const gift = (await getStoredGift(params.giftId)) || getGiftById(params.giftId); if (!gift) notFound(); return <ConstellationPage gift={gift} />; }
