import React from 'react';
import { notFound } from 'next/navigation';
import fs from 'node:fs/promises';
import path from 'node:path';
import { getStoredGift } from '@/lib/giftStore';

export const dynamic = 'force-dynamic';

export default async function ResponsesPage({ params, searchParams }: { params: { giftId: string }; searchParams: { token?: string } }) {
  const gift = await getStoredGift(params.giftId);
  if (!gift || !searchParams?.token || searchParams.token !== gift.responseToken) notFound();
  let data: { submittedAt?: string; answers?: { questionId: string; optionId: string; label: string }[] } | null = null;
  try {
    const raw = await fs.readFile(path.join(process.cwd(), 'data', 'gifts', `${params.giftId}.responses.json`), 'utf8');
    data = JSON.parse(raw);
  } catch { data = null; }
  return <main style={{ minHeight:'100vh', background:'#f7f3eb', color:'#211d25', padding:'8vh 7vw', fontFamily:'system-ui' }}>
    <p style={{ fontFamily:'monospace', fontSize:11, letterSpacing:'.16em', opacity:.45 }}>A LITTLE SOMETHING / PRIVATE RESPONSES</p>
    <h1 style={{ fontFamily:'Georgia,serif', fontSize:'clamp(48px,8vw,100px)', lineHeight:.88, fontWeight:400, maxWidth:900 }}>A tiny window<br/><i>into their world.</i></h1>
    {!data ? <p style={{ marginTop:40, maxWidth:600, fontSize:18, opacity:.6 }}>No answers have been shared yet. If they choose to send them, they will appear here.</p> : <section style={{ marginTop:50, maxWidth:800, display:'grid', gap:16 }}>
      <p style={{ fontFamily:'monospace', fontSize:10, opacity:.45 }}>SHARED {data.submittedAt ? new Date(data.submittedAt).toLocaleString() : ''}</p>
      {data.answers?.map((answer, i) => <article key={`${answer.questionId}-${i}`} style={{ padding:'22px 0', borderTop:'1px solid rgba(0,0,0,.12)' }}><span style={{ fontFamily:'monospace', fontSize:10, opacity:.4 }}>QUESTION {String(i+1).padStart(2,'0')}</span><p style={{ marginTop:8, fontFamily:'Georgia,serif', fontSize:24 }}>{answer.label}</p></article>)}
    </section>}
  </main>;
}
