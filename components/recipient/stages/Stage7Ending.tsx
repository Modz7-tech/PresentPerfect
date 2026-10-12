'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { StageEndingContent, GiftMoment } from '@/types/gift';
import { Constellation } from './Stage4Moments';

export function Stage7Ending({ content, onReplay, recipientName, moments }: { content: StageEndingContent; onReplay: () => void; recipientName: string; moments: GiftMoment[] }) {
  return <section className="stage-seven constellation-ending-stage">
    <div className="constellation-page-stars" aria-hidden="true" />
    <div className="constellation-shooting-star" aria-hidden="true"><i /></div>
    <motion.div className="ending-universe-kicker" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>✦ A LITTLE UNIVERSE, JUST FOR YOU ✦</motion.div>
    <motion.h2 className="ending-universe-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3, duration: 1.4 }}>{content.birthdayWish}</motion.h2>
    <p className="ending-universe-thought">{content.closingThought}</p>
    <Constellation items={moments} recipientName={recipientName} standalone nameInsideSky birthdayWish="You make the world a little brighter just by being in it." />
    <p className="ending-universe-note">{content.pressureFreeNote}</p>
    <button className="replay-button" onClick={onReplay}>↺ see it all again</button>
  </section>;
}
