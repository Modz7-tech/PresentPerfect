'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, ImagePlus, Link2, Music2, Sparkles, X } from 'lucide-react';
import { THEME_PRESETS } from '@/components/presentation/SafeThemePresets';
import type { GiftData, MomentMusic, MomentPhoto, ThemeId } from '@/types/gift';

const FEATURED: { id: ThemeId; note: string; motion: string }[] = [
  { id: 'sunbeam-pop', note: 'bright / playful / hand-cut', motion: 'bouncing shapes + paper layers' },
  { id: 'candy-collage', note: 'quirky / tactile / scrapbook', motion: 'stickers + cut-outs + drift' },
  { id: 'garden-party', note: 'organic / fresh / illustrated', motion: 'petal-like movement + soft reveals' },
  { id: 'retro-picnic', note: 'warm / graphic / nostalgic', motion: 'print textures + stamped transitions' },
  { id: 'electric-daydream', note: 'bold / kinetic / unexpected', motion: 'geometry + kinetic type' },
  { id: 'paper-confetti', note: 'celebratory / tactile / bright', motion: 'folds + fragments + confetti' },
  { id: 'midnight-cinema', note: 'dark / luminous / cinematic', motion: 'glow + slow reveals' },
  { id: 'warm-sand', note: 'quiet / editorial / minimal', motion: 'ink lines + restrained motion' },
];

const MESSAGE_SUGGESTIONS = [
  { label: 'From the heart', text: "Some people make ordinary days feel a little more special just by being around. I'm really grateful you're one of those people." },
  { label: 'Sincere', text: "I don't always say it, but having you in my life has meant more to me than I probably realize. I hope you know how genuinely appreciated you are." },
  { label: 'Nostalgic', text: "It's funny how the smallest moments sometimes become the ones you remember. I'm really glad we got to collect a few of those together." },
  { label: 'Warm', text: "You're someone I genuinely care about, and I hope this little thing reminds you that your presence makes a difference." },
  { label: 'Birthday', text: "Another year of you being you. I hope this year gives you plenty of reasons to smile, a few unexpected adventures, and lots of moments worth remembering." },
  { label: 'A little deeper', text: "There are things that are probably easier to feel than to explain, but this much is simple: I'm really glad you're in my life." },
];


// Accept only common YouTube video URL formats.
function parseYouTube(value: string): MomentMusic | undefined {
  const input = value.trim();
  if (!input) return undefined;
  try {
    const url = new URL(input);
    const host = url.hostname.toLowerCase().replace(/^(www|m)\./, '');
    let videoId = '';
    if (host === 'youtu.be') videoId = url.pathname.split('/').filter(Boolean)[0] || '';
    else if (host === 'youtube.com' || host === 'music.youtube.com') {
      if (url.pathname === '/watch') videoId = url.searchParams.get('v') || '';
      else videoId = url.pathname.match(/^\/(?:embed|shorts|live)\/([A-Za-z0-9_-]{6,})/)?.[1] || '';
    }
    if (/^[A-Za-z0-9_-]{6,}$/.test(videoId)) {
      return { provider: 'youtube', trackId: videoId, title: 'YouTube soundtrack', artist: 'YouTube', spotifyUrl: `https://www.youtube.com/watch?v=${videoId}` };
    }
  } catch {
    // Invalid URLs are explained inline in the creator.
  }
  return undefined;
}

async function resizeImage(file: File): Promise<MomentPhoto> {
  const data = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

  const img = new Image();
  img.src = data;
  await new Promise<void>((resolve, reject) => { img.onload = () => resolve(); img.onerror = reject; });

  const max = 1200;
  const scale = Math.min(1, max / Math.max(img.width, img.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(img.width * scale));
  canvas.height = Math.max(1, Math.round(img.height * scale));
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not process image');
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  const compressed = canvas.toDataURL('image/jpeg', 0.82);
  return { id: crypto.randomUUID(), url: compressed, alt: file.name };
}

export default function CreatePage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selected, setSelected] = useState<ThemeId>('candy-collage');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [photos, setPhotos] = useState<MomentPhoto[]>([]);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [syncPhotos, setSyncPhotos] = useState(true);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [songTitle, setSongTitle] = useState('');
  const [songArtist, setSongArtist] = useState('');
  const [savedId, setSavedId] = useState('');
  const [draftId] = useState(() => crypto.randomUUID().replace(/-/g, '').slice(0, 10));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [responseToken] = useState(() => crypto.randomUUID().replace(/-/g, ''));

  const theme = useMemo(() => THEME_PRESETS[selected], [selected]);
  const chosen = FEATURED.find(x => x.id === selected)!;
  const music = useMemo(() => {
    const parsed = parseYouTube(youtubeUrl);
    if (!parsed) return undefined;
    return { ...parsed, title: songTitle.trim() || parsed.title, artist: songArtist.trim() || parsed.artist };
  }, [youtubeUrl, songTitle, songArtist]);

  // Reset scroll position whenever the creator advances or goes back a step.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [step]);

  const useSuggestion = (text: string) => setMessage(text);

  const reorderPhoto = (from: number, to: number) => {
    if (from === to || from < 0 || to < 0 || from >= photos.length || to >= photos.length) return;
    setPhotos(current => { const next = [...current]; const [moved] = next.splice(from, 1); next.splice(to, 0, moved); return next; });
  };

  const addPhotos = async (files: FileList | null) => {
    if (!files) return;
    setError('');
    const incoming = Array.from(files).slice(0, 4 - photos.length);
    if (!incoming.length) return;
    setBusy(true);
    try {
      const processed = await Promise.all(incoming.map(resizeImage));
      const uploaded = await Promise.all(processed.map(async (photo, index) => {
        const blob = await fetch(photo.url).then(r => r.blob());
        const form = new FormData();
        form.append('file', blob, incoming[index].name.replace(/\.[^.]+$/, '.jpg'));
        form.append('giftId', draftId);
        form.append('kind', 'image');
        const response = await fetch('/api/assets', { method: 'POST', body: form });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Photo upload failed');
        return { ...photo, url: result.url };
      }));
      setPhotos(current => [...current, ...uploaded].slice(0, 4));
    } catch {
      setError('One of the images could not be processed. Try a smaller image.');
    } finally { setBusy(false); }
  };

  const buildGift = (): GiftData => {
    const id = draftId;
    const safeName = recipient.trim() || 'there';
    const note = message.trim() || `Happy birthday, ${safeName}. I hope this little collection makes you smile.`;
    return {
      id,
      responseToken,
      content: {
        recipient: { name: safeName },
        occasion: 'birthday',
        stages: {
          invitation: { leadIn: 'A few things were gathered here on purpose.', title: `A little something for ${safeName}.`, cue: 'open the artifact', actionText: 'let\'s begin' },
          introduction: { headline: 'Made of small things.', body: ['A few memories, a few words, and one soundtrack that felt right.', 'Nothing too complicated. Just something assembled with you in mind.'], actionText: 'keep going' },
          playful: {
            prompt: 'Choose your truth.', subtitle: 'Four tiny questions. No right answers — just little windows into how you see the world.',
            options: [
              { id: 'coffee', label: 'Treating iced coffee as an essential food group', response: 'Correct. Scientific consensus pending.' },
              { id: 'tabs', label: 'Keeping far too many browser tabs open', response: 'There is absolutely a system. Nobody else is allowed to understand it.' },
              { id: 'plans', label: 'Being suspiciously happy when plans get cancelled', response: 'An unexpectedly free evening is a small luxury.' },
            ],
            payoff: 'Good. Baseline established.',
            questions: [
              { id: 'plans', prompt: 'Choose your truth.', subtitle: 'When plans suddenly disappear, what is your first reaction?', options: [
                { id: 'free', label: 'Finally. An evening with absolutely no obligations.', response: 'The cancelled-plan glow is real.' },
                { id: 'prepared', label: 'Wait… but I had already mentally prepared for it.', response: 'A carefully constructed plan deserves its moment.' },
                { id: 'invent', label: 'Depends. I may immediately invent a better plan.', response: 'Spontaneous energy detected.' },
              ]},
              { id: 'compliment', prompt: 'A tiny window into your brain.', subtitle: 'What kind of compliment actually stays with you?', options: [
                { id: 'comfort', label: 'You make people feel comfortable being themselves.', response: 'That says a lot about what you value.' },
                { id: 'skill', label: 'You are ridiculously good at what you do.', response: 'Quiet competence is hard to fake.' },
                { id: 'fun', label: 'You make ordinary things more fun.', response: 'You notice atmosphere, not just outcomes.' },
              ]},
              { id: 'memory', prompt: 'Pick the kind of memory you would keep.', subtitle: 'If you could preserve one ordinary moment forever…', options: [
                { id: 'talk', label: 'A late-night conversation that went nowhere and everywhere.', response: 'You remember connection.' },
                { id: 'laugh', label: 'A completely stupid moment that still makes you laugh.', response: 'You remember joy.' },
                { id: 'peace', label: 'A quiet place where you felt completely at peace.', response: 'You remember feeling.' },
              ]},
              { id: 'future', prompt: 'Last one. No overthinking.', subtitle: 'Which future sounds most like you?', options: [
                { id: 'stories', label: 'A life full of stories I can’t believe actually happened.', response: 'Curiosity wins.' },
                { id: 'meaning', label: 'A life that feels calm, meaningful and very much mine.', response: 'Depth wins.' },
                { id: 'people', label: 'A life where the people I love are doing well too.', response: 'People matter to you.' },
              ]},
            ],
          },
          moments: { sectionTitle: 'A few things worth keeping', subtitle: 'The message, photos and soundtrack you chose live here.', items: [
            { id: 'personal-message', type: 'message', heading: 'Something I wanted to say', body: note, tag: 'FROM THE HEART', attachments: { photos, music } },
          ] },
          realization: { headline: 'None of this was random.', threads: [
            { clue: 'The words, the pictures, the song...', subtext: 'Each one was chosen because it reminded me of you.' },
            { clue: 'The tiny habits are the real clues.', subtext: 'The things you barely notice are often the things other people remember.' },
            { clue: 'The way you make ordinary moments feel.', subtext: 'That feeling is harder to photograph, but impossible to miss.' },
            { clue: 'Put the pieces together.', subtext: 'This is where the little observations become one very specific person.' },
          ], realizationMessage: `This little world was put together for ${safeName}, one choice at a time.` },
          appreciation: { headline: `Happy Birthday, ${safeName}.`, paragraphs: [note, 'I hope the year ahead gives you plenty of reasons to be happy, curious, and completely yourself.'], warmSignoff: 'Made with a lot of thought' },
          ending: { birthdayWish: 'Wishing you a really wonderful year ahead.', closingThought: 'Keep the good moments close.', pressureFreeNote: 'No need to reply. Just enjoy the moment.', allowReplay: true },
        },
      },
      presentation: {
        themeId: selected, templateId: selected, fontPairing: 'editorial-mix', pacing: 'standard',
        // New gifts use YouTube soundtrack links only; legacy audio fields remain unset.
        spotifyFallback: music, syncPhotosToMusic: syncPhotos,
      },
    };
  };

  const saveGift = async () => {
    setBusy(true); setError('');
    try {
      const gift = buildGift();
      const response = await fetch('/api/gifts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gift),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Could not save the gift.');
      setSavedId(result.giftId);
      setStep(3);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save the gift.');
    } finally { setBusy(false); }
  };

  return (
    <main className="creator-studio min-h-screen bg-[#f7f3eb] text-[#211d25] px-4 py-5 sm:px-8 lg:px-12 overflow-hidden">
      <div className="mx-auto max-w-[1500px]">
        <header className="creator-header">
          <div><p className="font-mono text-[10px] tracking-[.25em] uppercase text-black/45">A Little Something / Creator Studio</p><h1 className="font-serif text-[clamp(2.7rem,6vw,6.5rem)] leading-[.82] tracking-[-.06em] mt-4">Make the moment.<br/><i>Make it yours.</i></h1></div>
        </header>

        <div className="creator-progress-wrap" aria-label={`Step ${step} of 3`}>
          <div className="creator-progress" aria-label="Creation steps">
            <span className={step >= 1 ? 'active' : ''}><b>01</b><span>Choose a look</span></span>
            <span className={step >= 2 ? 'active' : ''}><b>02</b><span>Add your message</span></span>
            <span className={step >= 3 ? 'active' : ''}><b>03</b><span>Create link</span></span>
          </div>
          <div className="creator-progress-track"><span style={{ width: `${(step / 3) * 100}%` }} /></div>
          <p className="creator-step-help">Step {step} of 3 · Your choices are kept as you move between steps.</p>
        </div>

        {step === 1 && <section className="creator-step-grid">
          <div>
            <p className="creator-kicker">01 / VISUAL LANGUAGE</p><h2 className="creator-title">Choose the world<br/><i>your story lives in.</i></h2>
            <div className="template-grid cinematic-template-grid">{FEATURED.map((entry,index)=>{const item=THEME_PRESETS[entry.id];const active=selected===entry.id;return <button key={entry.id} onClick={()=>setSelected(entry.id)} className={`template-choice cinematic-template-choice ${active?'selected':''}`}>
              <div className={`template-choice-art world-scene world-${entry.id}`} style={{'--world-a':item.colors[0],'--world-b':item.colors[1],'--world-c':item.colors[2],'--world-d':item.colors[3]} as React.CSSProperties}>
                <span className="world-grid"/><span className="world-orbit world-orbit-1"/><span className="world-orbit world-orbit-2"/><span className="world-plane world-plane-1"/><span className="world-plane world-plane-2"/><span className="world-scan"/><span className="world-core">✦</span>
                <span className="template-number">0{index+1}</span>{active&&<span className="template-check"><Check size={14}/></span>}<span className="template-hand">{entry.id==='midnight-cinema'?'after dark':entry.id==='electric-daydream'?'move this':entry.id==='retro-picnic'?'remember this':'made of little things'}</span>
              </div>
              <div className="p-5"><div className="flex items-start justify-between gap-3"><h3 className="font-serif text-2xl leading-none">{item.name}</h3><span className="font-mono text-[8px] uppercase tracking-wider opacity-40 text-right">{entry.note}</span></div><p className="text-xs text-black/50 mt-3">{entry.motion}</p></div>
            </button>})}</div>
          </div>
          <aside className="creator-side-panel" style={{'--preview-bg':theme.colors[0],'--preview-accent':theme.colors[2],'--preview-accent2':theme.colors[1]} as React.CSSProperties}>
            <div className={`creator-artifact-preview cinematic-preview preview-${selected}`}><div className="preview-film"/><div className="creator-orbit a"/><div className="creator-orbit b"/><div className="creator-core">✦</div><div className="preview-radial"/><div className="preview-caption"><span>LIVE WORLD / {String(FEATURED.findIndex(x=>x.id===selected)+1).padStart(2,'0')}</span><span>{theme.name}</span></div><div className="preview-title"><p>{theme.tagline}</p><h2>A little<br/><i>something.</i></h2><span>{chosen.motion}</span></div><div className="preview-microgrid"/></div>
            <div className="creator-side-copy"><Sparkles size={17}/><h3>{theme.name}</h3><p>{theme.tagline}</p><label className="creator-field"><span>Recipient name or nickname</span><input value={recipient} onChange={e=>setRecipient(e.target.value)} placeholder="e.g. Alex" aria-label="Recipient name or nickname" /><small className="field-help">This name appears inside the gift. You can leave it blank for now.</small></label><button className="creator-primary" onClick={()=>setStep(2)}>Next: add your message <ArrowRight size={15}/></button></div>
          </aside>
        </section>}

        {step === 2 && <section className="moment-builder">
          <div className="builder-main">
            <button className="creator-back" onClick={()=>setStep(1)}><ArrowLeft size={14}/> Back: choose a look</button>
            <p className="creator-kicker">02 / THE MOMENT</p><h2 className="creator-title">Write something<br/><i>they'll keep.</i></h2>
            <div className="message-editor"><div className="editor-label"><span>YOUR NOTE</span><span>{message.length} / 1200</span></div><textarea maxLength={1200} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Write it the way you would actually say it..." /><div className="suggestion-heading">Need a starting point?</div><div className="suggestion-row">{MESSAGE_SUGGESTIONS.map(s=><button key={s.label} onClick={()=>useSuggestion(s.text)}>{s.label}</button>)}</div></div>

            <div className="builder-section"><div className="builder-section-title"><span>PHOTOS</span><small>Optional · up to 4</small></div><label className="photo-drop"><ImagePlus size={22}/><span>{busy?'processing...':'Drop memories here or choose photos'}</span><small>JPG / PNG · compressed for the prototype</small><input type="file" accept="image/*" multiple onChange={e=>addPhotos(e.target.files)} disabled={busy || photos.length >= 4}/></label>{photos.length>0&&<div className="uploaded-photos">{photos.map((p,i)=><div key={p.id} className={`uploaded-photo ${dragIndex===i?'is-dragging':''}`} draggable onDragStart={()=>setDragIndex(i)} onDragOver={e=>e.preventDefault()} onDrop={()=>{ if(dragIndex!==null) reorderPhoto(dragIndex,i); setDragIndex(null); }} onDragEnd={()=>setDragIndex(null)}><span className="photo-order">0{i+1}</span><img src={p.url} alt={p.alt || `Memory ${i+1}`}/><button type="button" onClick={()=>setPhotos(ps=>ps.filter(x=>x.id!==p.id))}><X size={13}/></button></div>)}</div>}<label className="timeline-sync"><input type="checkbox" checked={syncPhotos} onChange={e=>setSyncPhotos(e.target.checked)}/><span><strong>Sync photos to fade dynamically while music plays.</strong><small>ON by default · photo progression can follow the soundtrack.</small></span></label></div>

            <div className="builder-section audio-section">
              <div className="builder-section-title"><span>SOUNDTRACK</span><small>Optional · YouTube only</small></div>
              <div className="audio-mode-card youtube-only-card">
                <div className="audio-mode-head"><Music2/><div><strong>Add a YouTube song</strong><small>Paste a YouTube video, Shorts, live, or youtu.be link.</small></div></div>
                <label className="creator-field">
                  <span>YouTube URL</span>
                  <input type="url" value={youtubeUrl} onChange={e=>{setYoutubeUrl(e.target.value); if (error) setError('');}} placeholder="https://www.youtube.com/watch?v=..." aria-label="YouTube song URL" aria-invalid={!!youtubeUrl.trim() && !music} />
                  <small className="field-help">Only YouTube video links are supported here. Direct MP3/audio links won’t work.</small>
                </label>
                {youtubeUrl.trim() && !music && <p className="creator-error" role="alert">That doesn’t look like a valid YouTube video link. Paste a URL from youtube.com, music.youtube.com, or youtu.be.</p>}
                <div className="grid sm:grid-cols-2 gap-2 mt-3"><input value={songTitle} onChange={e=>setSongTitle(e.target.value)} placeholder="Song title (optional)" aria-label="Song title"/><input value={songArtist} onChange={e=>setSongArtist(e.target.value)} placeholder="Artist (optional)" aria-label="Artist"/></div>
                {music && <div className="music-attached" role="status"><span>✓ YouTube link ready</span><strong>{music.title}</strong><small>{music.artist}</small></div>}
              </div>
              <p className="music-note">The recipient may need to tap the music control before sound starts. Browsers can block autoplay, so playback cannot be guaranteed to start automatically on every device.</p>
            </div>
            {error&&<p className="creator-error" role="alert">{error}</p>}
            <div className="builder-actions"><button className="creator-back" onClick={()=>setStep(1)}>← Back: choose a look</button><button className="creator-primary" onClick={()=>{ if (youtubeUrl.trim() && !music) { setError("Please enter a valid YouTube URL, or clear the field to continue without music."); return; } setError(""); setStep(3); }}>Next: preview & create link <ArrowRight size={15}/></button></div>
          </div>

          <aside className="live-moment-preview"><div className="preview-stamp">LIVE RECIPIENT PREVIEW</div><div className="preview-paper" style={{'--preview-bg':theme.colors[0]} as React.CSSProperties}><div className="preview-scribble">for {recipient || 'someone special'} ↗</div><h3 className="font-serif text-4xl leading-none">{message ? 'Something I wanted to say.' : 'Your words will live here.'}</h3><p className="preview-message">{message || 'Start writing on the left. This preview changes as you create.'}</p>{photos.length>0&&<div className="preview-photo-stack">{photos.slice(0,3).map((p,i)=><img key={p.id} src={p.url} style={{transform:`rotate(${i%2?-4+i*2:3-i}deg) translateY(${i*8}px)`}} alt=""/>)}</div>}{music&&<div className="preview-track"><Music2 size={13}/><span>{music.title} · {music.artist}</span><span>♪</span></div>}</div></aside>
        </section>}

        {step === 3 && <section className="final-preview"><div><button className="creator-back" onClick={()=>setStep(2)}><ArrowLeft size={14}/> Back: edit message</button><p className="creator-kicker">03 / READY</p><h2 className="creator-title">It looks like<br/><i>a little world.</i></h2><p className="final-copy">{recipient || 'Your recipient'} will enter the {theme.name} world, discover your note, see the photos you selected, and meet the soundtrack after their first tap.</p><div className="final-actions"><button className="creator-primary" onClick={saveGift} disabled={busy || !!savedId}>{savedId ? 'Gift link created' : busy ? 'Creating your gift…' : 'Create gift link'} <Sparkles size={15}/></button></div>{savedId&&<div className="created-link"><span>SHAREABLE RECIPIENT LINK</span><code id="recipient-share-url">{typeof window !== 'undefined' ? `${window.location.origin}/g/${savedId}` : `/g/${savedId}`}</code><button type="button" className="creator-secondary" onClick={() => { const url = `${window.location.origin}/g/${savedId}`; void navigator.clipboard.writeText(url); }}><Link2 size={14}/> Copy recipient link</button><small>Send this link directly to the recipient. The creator studio does not open the recipient experience, so you can keep the reveal a surprise. Test the link only if you explicitly choose to; the recipient should be the first to experience the gift.</small><a className="response-room-link" href={`/responses/${savedId}?token=${responseToken}`} target="_blank" rel="noreferrer">Private personality answers →</a></div>}</div><div className="final-artifact" style={{'--preview-bg':theme.colors[0],'--preview-accent':theme.colors[2]} as React.CSSProperties}><div className="final-orbit"/><div className="final-star">✦</div><p>FOR</p><h3>{recipient || 'someone special'}</h3><span>{theme.name}</span></div></section>}
      </div>
    </main>
  );
}
