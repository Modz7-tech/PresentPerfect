'use client';

import React, { useState } from 'react';
import {
  StoryMoment as IStoryMoment,
  InsideJokeMoment as IInsideJokeMoment,
  SongMoment as ISongMoment,
  PlaceMoment as IPlaceMoment,
  QuoteMoment as IQuoteMoment,
  MessageMoment as IMessageMoment,
  PhotoMoment as IPhotoMoment,
} from '@/types/gift';
import { MapPin, Disc, Sparkles, Volume2, CornerDownRight } from 'lucide-react';
import { usePresentation } from '../presentation/ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * 1. STORY: Editorial Magazine Spread
 * Asymmetric typography, drop cap, pull-quote styling, archival classification stamp.
 */
export function StoryMomentView({ moment }: { moment: IStoryMoment }) {
  const { headingClass, bodyClass, monoClass, handClass } = usePresentation();
  return (
    <div className="space-y-6 relative">
      {/* Archival Classification Header */}
      <div className="flex items-center justify-between border-b border-gift-border/70 pb-3">
        <div className="flex items-center gap-3">
          <span className={`${monoClass} text-[10px] text-gift-accent px-2 py-0.5 rounded bg-gift-surface-alt border border-gift-border`}>
            FOLIO // STORY
          </span>
          {moment.dateOrEra && (
            <span className={`${monoClass} text-[11px] text-gift-muted`}>
              PERIOD: {moment.dateOrEra}
            </span>
          )}
        </div>
        <span className={`${monoClass} text-[10px] text-gift-muted/60`}>
          DOC. REF: 01
        </span>
      </div>

      {/* Main Headline */}
      <h3 className={`text-2xl sm:text-3xl font-light text-gift-text tracking-tight leading-snug ${headingClass}`}>
        {moment.title}
      </h3>

      {/* Editorial Body with Drop Cap on first paragraph */}
      <div className={`space-y-4 text-gift-text/90 leading-relaxed text-[15px] sm:text-base ${bodyClass}`}>
        {moment.narrative.map((paragraph, idx) => (
          <p key={idx} className={idx === 0 ? 'drop-cap' : ''}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* Pull quote / Takeaway as an editorial highlight box */}
      {moment.takeaway && (
        <div className="mt-6 pt-4 border-t-2 border-gift-accent/30 flex items-start gap-3 bg-gift-surface-alt/40 p-4 rounded-lg">
          <CornerDownRight className="w-4 h-4 text-gift-accent shrink-0 mt-0.5" />
          <p className={`${handClass} text-xl text-gift-accent leading-snug`}>
            {moment.takeaway}
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * 2. INSIDE JOKE: Taped Archival Memo / Scrapbook Artifact
 * Subtle tilt, washi tape anchor, interactive reveal, handwritten annotation.
 */
export function InsideJokeMomentView({ moment }: { moment: IInsideJokeMoment }) {
  const { headingClass, bodyClass, monoClass, handClass } = usePresentation();
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="relative pt-4">
      {/* Washi Tape Strip */}
      <div className="washi-tape -top-2 left-1/2 -translate-x-1/2" />

      <div className="bg-gift-surface-alt/90 border border-gift-border rounded-lg p-6 sm:p-8 shadow-sm space-y-5 -rotate-[0.75deg] transition-transform hover:rotate-0">
        <div className="flex items-center justify-between border-b border-gift-border/60 pb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gift-accent" />
            <span className={`${monoClass} text-[10px] text-gift-accent`}>
              VERIFIED MEMO // {moment.tag || 'INSIDE PHENOMENON'}
            </span>
          </div>
          <span className={`${handClass} text-gift-muted text-sm`}>
            unfiltered truth
          </span>
        </div>

        {/* Setup */}
        <div className="space-y-1">
          <p className={`${monoClass} text-[10px] text-gift-muted`}>OBSERVED PROMPT:</p>
          <p className={`text-lg sm:text-xl text-gift-text font-serif italic ${headingClass}`}>
            "{moment.setup}"
          </p>
        </div>

        {/* Punchline Card / Stamp */}
        <div className="space-y-2 pt-2">
          <p className={`${monoClass} text-[10px] text-gift-muted`}>ACTUAL MEANING:</p>
          <div
            onClick={() => setIsRevealed(true)}
            className={`p-4 rounded border cursor-pointer transition-all duration-300 relative overflow-hidden ${
              isRevealed
                ? 'bg-gift-surface border-gift-accent/40 shadow-sm'
                : 'bg-gift-surface/70 border-dashed border-gift-accent/60 hover:bg-gift-surface'
            }`}
          >
            <p className={`text-sm sm:text-base font-medium text-gift-accent leading-relaxed ${headingClass}`}>
              "{moment.punchline}"
            </p>
            {!isRevealed && (
              <span className={`${monoClass} text-[9px] text-gift-muted/70 block mt-2`}>
                [Tap to confirm observation]
              </span>
            )}
          </div>
        </div>

        {/* Handwritten Annotation */}
        {moment.contextNote && (
          <div className="pt-2 flex items-center gap-2">
            <span className={`${handClass} text-xl text-gift-muted/90`}>
              ↳ {moment.contextNote}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * 3. SONG: Designed Vinyl / Record Object
 * Vinyl sleeve aesthetic, spinning grooves hint, catalog tags, ambient waveform snippet.
 */
export function SongMomentView({ moment }: { moment: ISongMoment }) {
  const { headingClass, bodyClass, monoClass } = usePresentation();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gift-border/70 pb-3">
        <span className={`${monoClass} text-[10px] text-gift-accent`}>
          AUDIO ARTIFACT // STEREO
        </span>
        <span className={`${monoClass} text-[10px] text-gift-muted`}>
          33⅓ RPM • SPEED
        </span>
      </div>

      {/* Vinyl & Sleeve Composition */}
      <div className="flex flex-col sm:flex-row items-center gap-6 p-5 rounded-xl bg-gift-surface-alt/70 border border-gift-border">
        {/* Vinyl Disc Container */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0">
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            className="w-full h-full rounded-full bg-[#181a1f] p-2 flex items-center justify-center shadow-md relative overflow-hidden"
          >
            {/* Grooves */}
            <div className="w-full h-full rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
                {/* Center Label */}
                <div className="w-10 h-10 rounded-full bg-gift-accent flex items-center justify-center text-white">
                  <Disc className="w-5 h-5 text-white/90" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Track Metadata */}
        <div className="space-y-2 text-center sm:text-left flex-1">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className={`${monoClass} text-[9px] px-1.5 py-0.5 rounded bg-gift-highlight text-gift-accent`}>
              SIDE A
            </span>
            {moment.dateOrEra && (
              <span className={`${monoClass} text-[10px] text-gift-muted`}>
                {moment.dateOrEra}
              </span>
            )}
          </div>
          <h4 className={`text-xl sm:text-2xl font-light text-gift-text ${headingClass}`}>
            {moment.songTitle}
          </h4>
          <p className="text-xs sm:text-sm text-gift-muted font-medium">
            {moment.artist}
          </p>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full border border-gift-border hover:border-gift-accent text-xs text-gift-text transition-colors bg-gift-surface"
          >
            <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'text-gift-accent animate-pulse' : 'text-gift-muted'}`} />
            <span className={monoClass}>{isPlaying ? 'SPINNING VINYL' : 'PLAY CUE'}</span>
          </button>
        </div>
      </div>

      {/* Lyric Snippet in Book Italics */}
      {moment.lyricSnippet && (
        <div className="relative pl-5 border-l-2 border-gift-accent/60 py-1">
          <p className={`text-base sm:text-lg text-gift-text font-serif italic ${headingClass}`}>
            "{moment.lyricSnippet}"
          </p>
        </div>
      )}

      {/* Memory context */}
      <p className={`text-sm text-gift-text/80 leading-relaxed ${bodyClass}`}>
        {moment.associatedMemory}
      </p>
    </div>
  );
}

/**
 * 4. PLACE: Field Notebook / Map Composition
 * Coordinate markings, compass emblem, field notation, topographic aesthetic.
 */
export function PlaceMomentView({ moment }: { moment: IPlaceMoment }) {
  const { headingClass, bodyClass, monoClass, handClass } = usePresentation();
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between border-b border-gift-border/70 pb-3">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-gift-accent" />
          <span className={`${monoClass} text-[10px] text-gift-accent`}>
            FIELD RECORD // LOCATION
          </span>
        </div>
        <span className={`${monoClass} text-[10px] text-gift-muted`}>
          ELEV. / COORD
        </span>
      </div>

      {/* Location Placard */}
      <div className="relative p-6 rounded-xl bg-gift-surface-alt/60 border border-gift-border space-y-3 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#221e1a_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

        <div className="relative z-10">
          <h3 className={`text-2xl sm:text-3xl font-light text-gift-text leading-tight ${headingClass}`}>
            {moment.placeName}
          </h3>
          {moment.coordinatesOrArea && (
            <p className={`${monoClass} text-xs text-gift-accent mt-1 tracking-wider`}>
              📍 {moment.coordinatesOrArea}
            </p>
          )}
        </div>

        <p className={`relative z-10 text-[15px] sm:text-base text-gift-text/90 leading-relaxed pt-2 ${bodyClass}`}>
          {moment.memoryDescription}
        </p>

        {moment.tag && (
          <div className="pt-3 border-t border-gift-border/50 flex justify-end">
            <span className={`${handClass} text-xl text-gift-accent`}>
              {moment.tag}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * 5. QUOTE: Typographic Poster / Exhibition Placard
 * Oversized serif quotation mark, gallery placard borders, museum footnote.
 */
export function QuoteMomentView({ moment }: { moment: IQuoteMoment }) {
  const { headingClass, bodyClass, monoClass } = usePresentation();
  return (
    <div className="space-y-6 registration-corner">
      <div className="flex items-center justify-between border-b border-gift-border/70 pb-3">
        <span className={`${monoClass} text-[10px] text-gift-accent`}>
          TRANSCRIPTION // VERBATIM
        </span>
        <span className={`${monoClass} text-[10px] text-gift-muted`}>
          CATALOG NO. 05
        </span>
      </div>

      <div className="relative py-4 px-2">
        <span className="font-serif text-6xl sm:text-7xl text-gift-accent/25 absolute -top-4 -left-2 select-none pointer-events-none">
          “
        </span>
        <blockquote className={`text-xl sm:text-2xl font-light text-gift-text italic leading-snug relative z-10 ${headingClass}`}>
          "{moment.quoteText}"
        </blockquote>
      </div>

      <div className="p-4 rounded-lg bg-gift-surface-alt/70 border border-gift-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div>
          <p className={`${monoClass} text-[10px] text-gift-muted`}>SPOKEN BY:</p>
          <p className={`text-sm sm:text-base font-medium text-gift-accent ${headingClass}`}>
            {moment.attribution}
          </p>
        </div>
        <p className={`text-xs text-gift-muted italic sm:text-right ${bodyClass}`}>
          {moment.context}
        </p>
      </div>
    </div>
  );
}

/**
 * 6. MESSAGE: Personal Letterhead / Stationery Treatment
 * Elegant deckle border, intimate typesetting, postal aesthetic.
 */
export function MessageMomentView({ moment }: { moment: IMessageMoment }) {
  const { headingClass, bodyClass, monoClass, handClass } = usePresentation();
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between border-b border-gift-border/70 pb-3">
        <span className={`${monoClass} text-[10px] text-gift-accent`}>
          PERSONAL CORRESPONDENCE
        </span>
        <span className={`${monoClass} text-[10px] text-gift-muted`}>
          CONFIDENTIAL & WARM
        </span>
      </div>

      <div className="p-6 sm:p-8 rounded-lg bg-gift-surface-alt/40 border border-gift-border space-y-4 relative">
        {moment.heading && (
          <h4 className={`text-xl font-light text-gift-text tracking-tight ${headingClass}`}>
            {moment.heading}
          </h4>
        )}
        <p className={`text-[15px] sm:text-base text-gift-text/90 leading-relaxed ${bodyClass}`}>
          {moment.body}
        </p>
        <div className="pt-4 flex justify-end">
          <span className={`${handClass} text-xl text-gift-muted`}>
            — in good company
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * 7. PHOTO: Archival Photographic Print / Polaroid
 * Offset border, paperclip/tape anchor, museum caption strip.
 */
export function PhotoMomentView({ moment }: { moment: IPhotoMoment }) {
  const { headingClass, bodyClass, monoClass, handClass } = usePresentation();
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-gift-border/70 pb-3">
        <span className={`${monoClass} text-[10px] text-gift-accent`}>
          PHOTOGRAPHIC PLATE
        </span>
        <span className={`${monoClass} text-[10px] text-gift-muted`}>
          PRINT NO. 01
        </span>
      </div>

      <div className="p-4 sm:p-5 bg-gift-surface border border-gift-border rounded-lg shadow-sm space-y-4 rotate-[0.5deg]">
        {moment.title && (
          <h4 className={`text-base font-medium text-gift-text ${headingClass}`}>{moment.title}</h4>
        )}
        {moment.imageUrl ? (
          <div className="rounded overflow-hidden border border-gift-border">
            <img
              src={moment.imageUrl}
              alt={moment.imageAlt || 'Archival image'}
              className="w-full h-auto object-cover max-h-72"
            />
          </div>
        ) : (
          <div className="h-48 rounded border border-dashed border-gift-border flex flex-col items-center justify-center text-gift-muted bg-gift-surface-alt/50 gap-2">
            <span className={`${monoClass} text-xs`}>[ARCHIVAL PLATE PLACEHOLDER]</span>
          </div>
        )}
        <p className={`${handClass} text-xl text-gift-text/80 text-center pt-1`}>
          "{moment.caption}"
        </p>
      </div>
    </div>
  );
}
