import React from 'react';
import { notFound } from 'next/navigation';
import { getGiftById } from '@/data/mockGifts';
import { getStoredGift } from '@/lib/giftStore';
import { RecipientExperience } from '@/components/recipient/RecipientExperience';
import { THEME_PRESETS } from '@/components/presentation/SafeThemePresets';
import type { Metadata } from 'next';
import type { ThemeId } from '@/types/gift';

interface GiftPageProps {
  params: { giftId: string };
  searchParams: { template?: string; name?: string };
}

export async function generateMetadata({ params }: GiftPageProps): Promise<Metadata> {
  const gift = (await getStoredGift(params.giftId)) || getGiftById(params.giftId);
  if (!gift) return { title: 'A Little Something' };
  return { title: 'A Little Something', description: 'A personal digital gift experience.', robots: { index: false, follow: false } };
}

export default async function GiftPage({ params, searchParams }: GiftPageProps) {
  const baseGift = (await getStoredGift(params.giftId)) || getGiftById(params.giftId);
  if (!baseGift) notFound();

  const requestedTemplate = searchParams?.template as ThemeId | undefined;
  const selectedTheme = requestedTemplate && THEME_PRESETS[requestedTemplate] ? requestedTemplate : baseGift.presentation.themeId;
  const selectedName = searchParams?.name?.trim();

  // The prototype content contains a sample name in multiple places (title,
  // attribution, birthday headline, etc.). Replace that sample name across
  // the entire content tree so the creator's nickname follows the recipient
  // through every stage rather than only changing content.recipient.name.
  const replaceName = (value: unknown): unknown => {
    if (!selectedName) return value;
    if (typeof value === 'string') return value.replace(/Alex/g, selectedName);
    if (Array.isArray(value)) return value.map(replaceName);
    if (value && typeof value === 'object') {
      return Object.fromEntries(Object.entries(value as Record<string, unknown>).map(([key, child]) => [key, replaceName(child)]));
    }
    return value;
  };

  const personalizedContent = selectedName
    ? (replaceName(baseGift.content) as typeof baseGift.content)
    : baseGift.content;

  const { responseToken: _creatorOnlyToken, ...recipientSafeGift } = baseGift;
  const spotifyFromAudio = baseGift.presentation.audio?.src?.match(/open\.spotify\.com\/track\/([A-Za-z0-9]+)/i)?.[1];
const safePresentation = spotifyFromAudio && !baseGift.presentation.spotifyFallback
  ? { ...baseGift.presentation, audio: undefined, spotifyFallback: { provider: 'spotify' as const, trackId: spotifyFromAudio, title: baseGift.presentation.audio?.title || 'Spotify soundtrack', artist: baseGift.presentation.audio?.artist || 'Spotify', spotifyUrl: baseGift.presentation.audio?.src || '' } }
  : { ...baseGift.presentation };
  const gift = {
    ...recipientSafeGift,
    presentation: { ...safePresentation, themeId: selectedTheme, templateId: selectedTheme },
    content: personalizedContent,
  };

  return <RecipientExperience gift={gift} />;
}
