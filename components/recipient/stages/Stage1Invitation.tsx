'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StageInvitationContent } from '@/types/gift';

export function Stage1Invitation({
  content,
  onNext,
  onActivate,
}: {
  content: StageInvitationContent;
  onNext: () => void;
  onActivate?: () => void;
}) {
  const [opened, setOpened] = useState(false);
  const [burst, setBurst] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  const name = content.title.replace(/^A little something for\s+/i, '').replace(/^For\s+/i, '').replace(/[.!]+$/, '').trim() || 'you';

  const openGift = () => {
    if (opened) return;
    setOpened(true);
    setBurst(true);
    onActivate?.();
    const orientationApi = window.DeviceOrientationEvent as typeof DeviceOrientationEvent & { requestPermission?: () => Promise<string> };
    if (typeof orientationApi.requestPermission === 'function') {
      orientationApi.requestPermission().catch(() => undefined);
    }
    window.setTimeout(() => setShowReveal(true), 620);
    window.setTimeout(() => setBurst(false), 1800);
  };


  return (
    <section className={`stage-one opening-screen ${opened ? 'is-opened' : ''}`} aria-label="Opening gift">
      <div className="opening-backdrop" aria-hidden="true" />

      <motion.div
        className={`premium-gift ${opened ? 'is-opened' : ''}`}
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={
          opened
            ? { opacity: 1, scale: 1.02, y: -12 }
            : { opacity: 1, scale: [1, 1.018, 1], y: [0, -9, 0], rotate: [0, 0.35, -0.35, 0] }
        }
        transition={
          opened
            ? { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
            : { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
        }
        onClick={openGift}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openGift();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Open the birthday gift for ${name}`}
      >
        <div className="premium-gift-glow" />
        <div className="premium-gift-shadow" />

        <div className="premium-gift-body">
          <div className="premium-gift-side" />
          <div className="premium-gift-front" />
          <div className="premium-ribbon-v" />
          <div className="premium-ribbon-h" />
        </div>

        <motion.div
          className="premium-gift-lid"
          animate={
            opened
              ? { y: -170, rotateZ: -9, rotateX: -22, opacity: 0 }
              : { y: 0, rotateZ: 0, rotateX: 0, opacity: 1 }
          }
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="premium-ribbon-v" />
          <i className="bow-loop bow-left" />
          <i className="bow-loop bow-right" />
          <i className="bow-knot" />
        </motion.div>

        <motion.div
          className="gift-tag"
          animate={
            opened
              ? { y: -180, x: 26, rotateZ: 20, opacity: 0 }
              : { y: 0, x: 0, rotateZ: -3, opacity: 1 }
          }
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="gift-tag-hole" />
          <span className="gift-tag-name">{name}</span>
          <small>FOR YOU</small>
        </motion.div>

        {burst && (
          <div className="opening-burst" aria-hidden="true">
            <span className="burst-ring" />
            {Array.from({ length: 34 }).map((_, index) => (
              <motion.i
                key={index}
                className={`burst-piece burst-piece-${index % 5}`}
                initial={{ x: 0, y: 0, opacity: 1, scale: 0.35, rotate: 0 }}
                animate={{
                  x: Math.cos(index * 1.91) * (110 + (index % 6) * 38),
                  y: Math.sin(index * 1.47) * (95 + (index % 5) * 45),
                  opacity: 0,
                  scale: 1 + (index % 4) * 0.22,
                  rotate: 180 + index * 47,
                }}
                transition={{ duration: 1.05 + (index % 5) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
            {Array.from({ length: 7 }).map((_, index) => (
              <motion.span
                key={`balloon-${index}`}
                className={`reveal-balloon balloon-${index % 4}`}
                initial={{ x: 0, y: 35, scale: 0.2, opacity: 0 }}
                animate={{
                  x: (index - 3) * 105,
                  y: -170 - (index % 3) * 55,
                  scale: 1,
                  opacity: 1,
                }}
                transition={{ duration: 1.15, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
          </div>
        )}
      </motion.div>


      {showReveal && (
        <motion.div
          className="opening-reveal"
          initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="opening-reveal-kicker">A little something, made carefully.</span>
          <h1>This is exclusively for you.</h1>
          <button type="button" onClick={onNext} className="opening-scroll-cue" aria-label="Continue">
            <span>continue</span>
            <motion.span
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >↓</motion.span>
          </button>
        </motion.div>
      )}
    </section>
  );
}
