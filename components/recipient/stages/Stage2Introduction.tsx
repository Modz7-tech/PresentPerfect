'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { StageIntroductionContent } from '@/types/gift';
import { usePresentation } from '../../presentation/ThemeProvider';

export function Stage2Introduction({ content, onNext }: { content: StageIntroductionContent; onNext: () => void }) {
  const { headingClass, monoClass, handClass } = usePresentation();
  return (
    <section className="stage-two">
      <div className="editorial-margin"><span>02</span><span>INTRODUCTION</span><span>FIELD NOTES</span></div>
      <div className="intro-grid">
        <motion.div className="intro-number" initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .8 }}>A<br/>L</motion.div>
        <div className="intro-main">
          <p className={`${monoClass} eyebrow`}>before another year gets too loud...</p>
          <motion.h1 className={headingClass} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>{content.headline}</motion.h1>
          <div className="intro-rule"><span /><span>small things / big meaning</span><span /></div>
          <div className="intro-body">
            {content.body.map((p, i) => <motion.p key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 + i * .12 }}>{p}</motion.p>)}
          </div>
          <button className="artifact-action dark-action" onClick={onNext}><span>{content.actionText}</span><span className="action-arrow">→</span></button>
        </div>
        <div className="intro-sketch">
          <div className="sketch-circle" /><div className="sketch-line" /><div className="sketch-dot" />
          <span className={`${handClass} sketch-note`}>nothing here is accidental.</span>
          <span className={`${monoClass} sketch-code`}>ARCHIVE / 002</span>
        </div>
      </div>
    </section>
  );
}
