'use client';
import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Link2 } from 'lucide-react';
import { StageRealizationContent } from '@/types/gift';
import { usePresentation } from '../../presentation/ThemeProvider';

const POSITIONS = [
  { x: 12, y: 62 },
  { x: 39, y: 22 },
  { x: 67, y: 68 },
  { x: 89, y: 34 },
];

export function Stage5Realization({ content, onNext }: { content: StageRealizationContent; onNext: () => void }) {
  const { headingClass, monoClass, handClass } = usePresentation();
  const [revealed, setRevealed] = useState<number[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const fragments = content.threads.slice(0, 4);
  const all = fragments.length > 0 && revealed.length === fragments.length;
  const connectedPairs = useMemo(() => revealed.slice(1).map((to, i) => ({ from: revealed[i], to })), [revealed]);
  const reveal = (i: number) => setRevealed(current => current.includes(i) ? current : [...current, i]);

  return <section className="stage-five">
    <div className="realization-sky"><div className="constellation c1" /><div className="constellation c2" /><div className="constellation c3" /></div>
    <div className="realization-content">
      <span className={monoClass}>05 / CONNECT THE FRAGMENTS</span>
      <motion.h1 className={headingClass} initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>{content.headline}</motion.h1>
      <div className="fragment-instruction"><span className="fragment-pulse" />Touch each fragment. Watch the pattern appear.</div>
      <div className="thread-field fragment-field">
        <svg className="thread-lines fragment-lines" viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="threadGlow" x1="0" x2="1"><stop offset="0"/><stop offset=".5"/><stop offset="1"/></linearGradient></defs>
          {connectedPairs.map(({ from, to }, i) => {
            const a = POSITIONS[from] || POSITIONS[0]; const b = POSITIONS[to] || POSITIONS[1];
            const x1=a.x*10, y1=a.y*4.2, x2=b.x*10, y2=b.y*4.2;
            const dx=(x2-x1)*.38;
            return <motion.path key={`${from}-${to}`} d={`M ${x1} ${y1} C ${x1+dx} ${y1-70}, ${x2-dx} ${y2+70}, ${x2} ${y2}`} initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:1}} transition={{duration:.8,delay:i*.08,ease:[.16,1,.3,1]}} />;
          })}
        </svg>
        {fragments.map((thread, i) => {
          const p=POSITIONS[i] || {x:50,y:50};
          const active=revealed.includes(i); const isNext=!active && (i===0 || revealed.includes(i-1));
          return <motion.button key={i} className={`thread-node fragment-node node-${i+1} ${active?'revealed':''} ${isNext?'is-next':''}`} style={{left:`${p.x}%`,top:`${p.y}%`}} onClick={()=>reveal(i)} onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(null)} whileHover={{scale:1.12}} whileTap={{scale:.92}} aria-label={`Connect fragment ${i+1}`}>
            <span className="fragment-ring"/><span>{String(i+1).padStart(2,'0')}</span>{active && <i>✓</i>}
            {hovered===i && <motion.em initial={{opacity:0,y:4}} animate={{opacity:1,y:0}}>touch</motion.em>}
          </motion.button>;
        })}
        <div className="fragment-center" aria-hidden="true"><Link2 size={18}/><span>{revealed.length}/{fragments.length}</span></div>
      </div>
      <div className="fragment-status"><span>{revealed.length === 0 ? 'The pieces are deliberately out of place.' : `${revealed.length} fragment${revealed.length>1?'s':''} connected.`}</span><span>{all ? 'Pattern complete.' : 'Follow the line.'}</span></div>
      <AnimatePresence mode="popLayout">
        {revealed.map(i => <motion.div key={i} className="thread-note fragment-note" initial={{ opacity: 0, y: 14, x: i%2 ? 12 : -12 }} animate={{ opacity: 1, y: 0, x: 0 }} layout><span className={monoClass}>FRAGMENT 0{i + 1}</span><strong>{fragments[i].clue}</strong><p>{fragments[i].subtext}</p></motion.div>)}
      </AnimatePresence>
      {all && <motion.div className="realization-reveal" initial={{ opacity: 0, y: 30, filter:'blur(7px)' }} animate={{ opacity: 1, y: 0, filter:'blur(0px)' }} transition={{duration:.8}}><p>{content.realizationMessage}</p><button className="artifact-action" onClick={onNext}><span>now you see it</span><ArrowRight size={14}/></button><span className={handClass}>the little things were never little.</span></motion.div>}
    </div>
  </section>;
}
