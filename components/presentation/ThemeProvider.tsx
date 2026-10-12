'use client';

import React, { createContext, useContext } from 'react';
import { GiftPresentation } from '@/types/gift';
import { THEME_PRESETS, FONT_PAIRING_CLASSES, PACING_DURATIONS } from './SafeThemePresets';
import { motion } from 'framer-motion';

interface PresentationContextType {
  presentation: GiftPresentation;
  headingClass: string;
  bodyClass: string;
  monoClass: string;
  handClass: string;
  pacingConfig: { transition: number; delay: number };
}

const PresentationContext = createContext<PresentationContextType | null>(null);

export function usePresentation() {
  const context = useContext(PresentationContext);
  if (!context) throw new Error('usePresentation must be used within a ThemeProvider');
  return context;
}

interface ThemeProviderProps {
  presentation: GiftPresentation;
  children: React.ReactNode;
}

export function ThemeProvider({ presentation, children }: ThemeProviderProps) {
  const activeTheme = THEME_PRESETS[presentation.themeId] || THEME_PRESETS['sunbeam-pop'];
  const fontStyles = FONT_PAIRING_CLASSES[presentation.fontPairing] || FONT_PAIRING_CLASSES['editorial-mix'];
  const pacingConfig = PACING_DURATIONS[presentation.pacing] || PACING_DURATIONS.standard;

  return (
    <PresentationContext.Provider value={{ presentation, headingClass: fontStyles.heading, bodyClass: fontStyles.body, monoClass: fontStyles.mono, handClass: fontStyles.hand, pacingConfig }}>
      <div
        className="gift-experience min-h-screen w-full transition-colors duration-700 ease-out bg-gift-bg text-gift-text relative overflow-hidden"
        data-template={presentation.templateId || presentation.themeId}
        style={activeTheme.cssVars as React.CSSProperties}
      >
        <div className="template-atmosphere" aria-hidden="true">
          <motion.div className="template-orb template-orb-a" animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="template-orb template-orb-b" animate={{ y: [0, 16, 0], rotate: [0, -6, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
          <div className="template-ribbon" />
          <div className="template-spark-grid" />
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    </PresentationContext.Provider>
  );
}
