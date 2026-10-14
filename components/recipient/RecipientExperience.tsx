'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';
import { GiftData } from '@/types/gift';
import { ThemeProvider } from '../presentation/ThemeProvider';
import { StageNavigation } from './StageNavigation';
import { Stage1Invitation } from './stages/Stage1Invitation';
import type { PersonalityAnswer } from './stages/Stage3Playful';

// Load later chapters only when needed so the recipient's opening screen compiles sooner.
const Stage2Introduction = dynamic(() => import('./stages/Stage2Introduction').then(m => m.Stage2Introduction));
const Stage3Playful = dynamic(() => import('./stages/Stage3Playful').then(m => m.Stage3Playful));
const Stage4Moments = dynamic(() => import('./stages/Stage4Moments').then(m => m.Stage4Moments));
const Stage5Realization = dynamic(() => import('./stages/Stage5Realization').then(m => m.Stage5Realization));
const Stage6Appreciation = dynamic(() => import('./stages/Stage6Appreciation').then(m => m.Stage6Appreciation));
const Stage7Ending = dynamic(() => import('./stages/Stage7Ending').then(m => m.Stage7Ending));
import { PersistentMusic } from './PersistentMusic';

interface RecipientExperienceProps { gift: GiftData; }

function RecipientAmbient() {
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const items = useMemo(() => ({
    specks: Array.from({ length: 18 }, (_, i) => ({ id: i, left: `${(i * 17 + 7) % 96}%`, top: `${(i * 29 + 11) % 92}%`, depth: 8 + (i % 5) * 5 })),
    stars: Array.from({ length: 9 }, (_, i) => ({ id: i, left: `${(i * 31 + 9) % 94}%`, top: `${(i * 19 + 14) % 88}%`, depth: 12 + (i % 4) * 6 })),
    balloons: Array.from({ length: 5 }, (_, i) => ({ id: i, left: `${(i * 23 + 5) % 90}%`, top: `${(i * 37 + 8) % 84}%`, depth: 16 + (i % 3) * 7 })),
  }), []);

  useEffect(() => {
    const onPointer = (event: PointerEvent) => {
      setPointer({ x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight });
    };
    window.addEventListener('pointermove', onPointer, { passive: true });

    const onOrientation = (event: DeviceOrientationEvent) => {
      if (typeof event.gamma === 'number' && typeof event.beta === 'number') {
        setTilt({ x: Math.max(-1, Math.min(1, event.gamma / 35)), y: Math.max(-1, Math.min(1, (event.beta - 45) / 35)) });
      }
    };
    window.addEventListener('deviceorientation', onOrientation, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('deviceorientation', onOrientation);
    };
  }, []);

  const px = (pointer.x - 0.5) * 2 + tilt.x;
  const py = (pointer.y - 0.5) * 2 + tilt.y;

  return (
    <div className="recipient-ambient" aria-hidden="true">
      <motion.div className="ambient-orb ambient-orb-a" animate={{ x: px * -18, y: py * -14 }} transition={{ type: 'spring', stiffness: 35, damping: 20 }} />
      <motion.div className="ambient-orb ambient-orb-b" animate={{ x: px * 24, y: py * 18 }} transition={{ type: 'spring', stiffness: 28, damping: 19 }} />
      <motion.div className="ambient-orb ambient-orb-c" animate={{ x: px * -12, y: py * 22 }} transition={{ type: 'spring', stiffness: 30, damping: 21 }} />
      {items.specks.map(item => (
        <motion.i key={`s-${item.id}`} className="ambient-speck" style={{ left: item.left, top: item.top }} animate={{ x: px * item.depth, y: py * item.depth }} transition={{ type: 'spring', stiffness: 20, damping: 18 }} />
      ))}
      {items.stars.map(item => (
        <motion.span key={`st-${item.id}`} className="ambient-star" style={{ left: item.left, top: item.top }} animate={{ x: px * item.depth, y: py * item.depth, rotate: px * 8 }} transition={{ type: 'spring', stiffness: 18, damping: 17 }}>
          {item.id % 2 ? '✦' : '·'}
        </motion.span>
      ))}
      {items.balloons.map(item => (
        <motion.span key={`b-${item.id}`} className={`ambient-balloon ambient-balloon-${item.id % 4}`} style={{ left: item.left, top: item.top }} animate={{ x: px * item.depth, y: py * item.depth - 8 }} transition={{ type: 'spring', stiffness: 15, damping: 17 }} />
      ))}
    </div>
  );
}

export function RecipientExperience({ gift }: RecipientExperienceProps) {
  const [activeGift, setActiveGift] = useState<GiftData>(gift);
  const [currentStage, setCurrentStage] = useState(1);
  const [audioActivated, setAudioActivated] = useState(false);
  const [quizShared, setQuizShared] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activateAudio = () => {
    // Keep this synchronous with the gift-box click: browsers only permit audible
    // autoplay when play() is called inside a real user gesture.
    setAudioActivated(true);
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio.volume = Math.min(1, Math.max(0, activeGift.presentation.audio?.volume ?? 0.55));
      const playAttempt = audio.play();
      if (playAttempt && typeof playAttempt.catch === 'function') {
        void playAttempt.catch(() => {
          // Browser policy or an unavailable media URL may still require manual play.
        });
      }
    }
  };

  const shareQuizAnswers = async (answers: PersonalityAnswer[]) => {
    if (quizShared) return;
    const response = await fetch(`/api/gifts/${encodeURIComponent(activeGift.id)}/responses`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers }),
    });
    if (!response.ok) throw new Error('Could not save answers');
    setQuizShared(true);
  };

  const totalStages = 7;
  const { content, presentation } = activeGift;

  // Keep each new recipient chapter in view instead of leaving the visitor at the previous scroll position.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentStage]);

  // The recipient is server-backed. Never replace the server gift with creator-browser localStorage.


  const next = () => setCurrentStage(s => Math.min(totalStages, s + 1));
  const prev = () => setCurrentStage(s => Math.max(1, s - 1));
  const jump = (stage: number) => setCurrentStage(Math.max(1, Math.min(totalStages, stage)));
  const replay = () => setCurrentStage(1);

  return (
    <ThemeProvider presentation={presentation}>
      <main className="artifact-shell min-h-screen selection:bg-gift-highlight selection:text-gift-text">
        {currentStage > 1 && <RecipientAmbient />}
        <PersistentMusic gift={activeGift} activated={audioActivated} audioRef={audioRef} />
        {currentStage > 1 && (
          <StageNavigation
            currentStage={currentStage}
            totalStages={totalStages}
            onPrev={prev}
            onJumpToStage={jump}
            canGoBack={currentStage > 1}
          />
        )}

        <AnimatePresence mode="wait">
          {currentStage === 1 && <motion.div key="1" className="artifact-stage" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: .985 }} transition={{ duration: .7 }}><Stage1Invitation content={content.stages.invitation} onNext={next} onActivate={activateAudio} /></motion.div>}
          {currentStage === 2 && <motion.div key="2" className="artifact-stage" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: .7 }}><Stage2Introduction content={content.stages.introduction} onNext={next} /></motion.div>}
          {currentStage === 3 && <motion.div key="3" className="artifact-stage" initial={{ opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.015 }} transition={{ duration: .65 }}><Stage3Playful content={content.stages.playful} onNext={next} onShareAnswers={shareQuizAnswers} /></motion.div>}
          {currentStage === 4 && <motion.div key="4" className="artifact-stage" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: .65 }}><Stage4Moments content={content.stages.moments} onNext={next} audioRef={audioRef} syncToMusic={presentation.syncPhotosToMusic !== false} /></motion.div>}
          {currentStage === 5 && <motion.div key="5" className="artifact-stage" initial={{ opacity: 0, filter: 'blur(8px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} exit={{ opacity: 0 }} transition={{ duration: .9 }}><Stage5Realization content={content.stages.realization} onNext={next} /></motion.div>}
          {currentStage === 6 && <motion.div key="6" className="artifact-stage" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}><Stage6Appreciation content={content.stages.appreciation} onNext={next} /></motion.div>}
          {currentStage === 7 && <motion.div key="7" className="artifact-stage" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .8 }}><Stage7Ending content={content.stages.ending} onReplay={replay} recipientName={content.recipient.name} moments={content.stages.moments.items} /></motion.div>}
        </AnimatePresence>
      </main>
    </ThemeProvider>
  );
}
