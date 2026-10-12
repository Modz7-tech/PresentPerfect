'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { GiftData } from '@/types/gift';
import { Constellation } from './stages/Stage4Moments';
export function ConstellationPage({ gift }: { gift: GiftData }) {
 return <main className="constellation-page-shell"><div className="constellation-page-stars" aria-hidden="true" /><div className="constellation-shooting-star" aria-hidden="true"><i /></div> <nav className="constellation-page-nav"><Link href={`/g/${gift.id}`}><ArrowLeft size={16}/> Back to your little world</Link><span><Sparkles size={14}/> A SKY MADE JUST FOR YOU</span></nav><header className="constellation-page-intro"><p>✦ AN UNIVERSE MADE JUST FOR YOU ✦</p><h1>Some people are<br/><em>their own kind of starlight.</em></h1><span>Every light holds a memory. Every letter holds something lovely about you.</span></header><Constellation items={gift.content.stages.moments.items} recipientName={gift.content.recipient.name} standalone /><footer className="constellation-page-footer">Made with care, and a little bit of stardust ✦</footer></main>
}
