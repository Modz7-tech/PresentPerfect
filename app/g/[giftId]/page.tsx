
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

export async function generateMetadata({
  params,
}: GiftPageProps): Promise<Metadata> {
  const gift =
    (await getStoredGift(params.giftId)) || getGiftById(params.giftId);

  if (!gift) return { title: 'A Little Something' };

  return {
    title: 'A Little Something',
    description: 'A personal digital gift experience.',
    robots: { index: false, follow: false },
  };
}

export default async function GiftPage({
  params,
  searchParams,
}: GiftPageProps) {
  const baseGift =
    (await getStoredGift(params.giftId)) || getGiftById(params.giftId);

  if (!baseGift) notFound();

  // The saved gift determines the template; URL parameters cannot override it.
  const savedTheme =
    baseGift.presentation.themeId || baseGift.presentation.templateId;

  const selectedTheme =
    savedTheme && THEME_PRESETS[savedTheme as ThemeId]
      ? (savedTheme as ThemeId)
      : 'candy-collage';

  const selectedName = searchParams?.name?.trim();

  // Replace the prototype name throughout the content tree when requested.
  const replaceName = (value: unknown): unknown => {
    if (!selectedName) return value;

    if (typeof value === 'string') {
      return value.replace(/Alex/g, selectedName);
    }

    if (Array.isArray(value)) {
      return value.map(replaceName);
    }

    if (value && typeof value === 'object') {
      return Object.fromEntries(
        Object.entries(value as Record<string, unknown>).map(
          ([key, child]) => [key, replaceName(child)],
        ),
      );
    }

    return value;
  };

  const personalizedContent = selectedName
    ? (replaceName(baseGift.content) as typeof baseGift.content)
    : baseGift.content;

  // Never expose the creator-only response token to the recipient.
  const { responseToken: _creatorOnlyToken, ...recipientSafeGift } = baseGift;

  // Preserve the saved presentation, including YouTube-related settings.
  // Do not convert legacy audio URLs into Spotify fallback data.
  const gift = {
    ...recipientSafeGift,
    presentation: {
      ...baseGift.presentation,
      themeId: selectedTheme,
      templateId: selectedTheme,
    },
    content: personalizedContent,
  };

  return <RecipientExperience gift={gift} />;
}
