'use client';

import React from 'react';
import { GiftMoment } from '@/types/gift';
import {
  StoryMomentView,
  InsideJokeMomentView,
  SongMomentView,
  PlaceMomentView,
  QuoteMomentView,
  MessageMomentView,
  PhotoMomentView,
} from './MomentTypeViews';

interface MomentCardProps {
  moment: GiftMoment;
  isActive?: boolean;
}

export function MomentCard({ moment }: MomentCardProps) {
  return (
    <article className="w-full bg-gift-surface rounded-xl border border-gift-border shadow-sm p-6 sm:p-10 transition-all duration-300 relative overflow-hidden">
      {/* Subtle fine corner mark */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-gift-accent/40" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-gift-accent/40" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-gift-accent/40" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-gift-accent/40" />

      {(() => {
        switch (moment.type) {
          case 'story':
            return <StoryMomentView moment={moment} />;
          case 'inside_joke':
            return <InsideJokeMomentView moment={moment} />;
          case 'song':
            return <SongMomentView moment={moment} />;
          case 'place':
            return <PlaceMomentView moment={moment} />;
          case 'quote':
            return <QuoteMomentView moment={moment} />;
          case 'message':
            return <MessageMomentView moment={moment} />;
          case 'photo':
            return <PhotoMomentView moment={moment} />;
          default:
            return null;
        }
      })()}
    </article>
  );
}
