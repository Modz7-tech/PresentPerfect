'use client';
import React from 'react';
import { ArrowLeft } from 'lucide-react';

export function StageNavigation({ currentStage, totalStages, onPrev, onJumpToStage, canGoBack }: { currentStage:number; totalStages:number; onPrev:()=>void; onJumpToStage:(stage:number)=>void; canGoBack:boolean }) {
  return <nav className="fixed top-0 left-0 right-0 z-50 px-5 py-4 flex items-center justify-between pointer-events-none" aria-label="Gift navigation">
    <button onClick={onPrev} disabled={!canGoBack} className="pointer-events-auto w-9 h-9 rounded-full border border-gift-text/15 bg-gift-surface/70 backdrop-blur-md grid place-items-center disabled:opacity-20 hover:-translate-x-0.5 transition-transform" aria-label="Previous stage"><ArrowLeft className="w-4 h-4" /></button>
    <div className="flex items-center gap-1.5 pointer-events-auto rounded-full bg-gift-surface/65 backdrop-blur-md px-3 py-2 border border-gift-text/10">
      {Array.from({length:totalStages}).map((_,i)=><button key={i} onClick={()=>onJumpToStage(i+1)} aria-label={`Go to stage ${i+1}`} className={`h-1.5 rounded-full transition-all ${currentStage===i+1?'w-7 bg-gift-text':'w-1.5 bg-gift-text/20'}`} />)}
    </div>
    <span className="font-mono text-[9px] tracking-[.16em] opacity-45">{String(currentStage).padStart(2,'0')} / {String(totalStages).padStart(2,'0')}</span>
  </nav>;
}
