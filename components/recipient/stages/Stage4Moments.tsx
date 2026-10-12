'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { StageMomentsContent, GiftMoment, MomentPhoto } from '@/types/gift';
import { usePresentation } from '../../presentation/ThemeProvider';


const constellationPositions = [
  { x: 12, y: 62 }, { x: 28, y: 30 }, { x: 43, y: 58 },
  { x: 58, y: 23 }, { x: 72, y: 53 }, { x: 88, y: 32 },
  { x: 83, y: 76 }, { x: 53, y: 82 }, { x: 24, y: 82 }, { x: 8, y: 24 },
];

const constellationFragments = [
  { x: 9, y: 43, title: 'You are deeply loved', note: 'Even on the days you forget your own magic, there are people whose world is warmer because you are in it.' },
  { x: 91, y: 43, title: 'You belong, always', note: 'You never have to earn your place with the people who truly care for you. You are already part of their story.' },
  { x: 12, y: 91, title: 'Your light matters', note: 'The kindness you give travels farther than you can see. Little things you do can become someone else’s favourite memory.' },
  { x: 88, y: 91, title: 'You can begin again', note: 'Every sunrise gives you another page. Take your time, grow at your own pace, and trust the person you are becoming.' },
  { x: 31, y: 76, title: 'You are more than enough', note: 'You do not have to be perfect, productive, or cheerful every day to deserve tenderness and good things.' },
  { x: 69, y: 76, title: 'Keep a little wonder', note: 'May life keep surprising you with kind people, unexpected joy, brave new beginnings, and reasons to laugh until your cheeks hurt.' },
] as const;

function getMomentTitle(moment: GiftMoment) {
  if ('title' in moment && moment.title) return moment.title;
  if ('songTitle' in moment) return moment.songTitle;
  if ('placeName' in moment) return moment.placeName;
  if ('heading' in moment && moment.heading) return moment.heading;
  if ('quoteText' in moment) return moment.quoteText;
  if ('setup' in moment) return moment.setup;
  if ('caption' in moment && moment.caption) return moment.caption;
  return 'A little thing worth keeping';
}

function getMomentPreview(moment: GiftMoment) {
  if (moment.type === 'story') return moment.narrative.join(' ');
  if (moment.type === 'inside_joke') return `${moment.setup} — ${moment.punchline}`;
  if (moment.type === 'song') return moment.associatedMemory;
  if (moment.type === 'place') return moment.memoryDescription;
  if (moment.type === 'quote') return `“${moment.quoteText}” — ${moment.attribution}. ${moment.context}`;
  if (moment.type === 'message') return moment.body;
  return moment.caption;
}

export function Constellation({ items, recipientName, standalone = false, nameInsideSky = false, birthdayWish = '' }: { items: GiftMoment[]; recipientName?: string; standalone?: boolean; nameInsideSky?: boolean; birthdayWish?: string }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedFragment, setSelectedFragment] = useState<number | null>(null);
  const safeItems = items.slice(0, 10);
  const points = safeItems.map((_, index) => constellationPositions[index]);
  const activeMoment = selected === null ? null : safeItems[selected];
  const activeFragment = selectedFragment === null ? null : constellationFragments[selectedFragment];
  const name = (recipientName || 'You').trim();
  const traits: Record<string, string> = { A: 'Authentic', B: 'Bright', C: 'Creative', D: 'Delightful', E: 'Extraordinary', F: 'Fearless', G: 'Genuine', H: 'Heartwarming', I: 'Inspiring', J: 'Joyful', K: 'Kind', L: 'Lovely', M: 'Marvellous', N: 'Naturally wonderful', O: 'Original', P: 'Perceptive', Q: 'Quite unforgettable', R: 'Radiant', S: 'Special', T: 'Thoughtful', U: 'Unique', V: 'Vibrant', W: 'Warm-hearted', X: 'X-traordinary', Y: 'You-shaped magic', Z: 'Zealous' };

  return (
    <section className={`little-constellation ${standalone ? 'constellation-full-page' : ''}`} aria-labelledby="constellation-title">
      {standalone && !nameInsideSky && <div className="constellation-name-portrait"><span>THIS LITTLE UNIVERSE IS YOURS</span><h1>{name}</h1><div className="constellation-acrostic">{Array.from(name).filter(char => /[a-z]/i.test(char)).map((char, i) => <p key={`${char}-${i}`}><b>{char.toUpperCase()}</b><span>{traits[char.toUpperCase()] || 'One of a kind'}</span></p>)}</div></div>}
      <div className="constellation-heading">
        <span className="constellation-eyebrow">A LITTLE MAP OF US</span>
        <h2 id="constellation-title">A constellation of little things.</h2>
        <p>Every star holds a small thing worth remembering. Pick one and see where it takes you.</p>
      </div>
      <div className={`constellation-sky ${nameInsideSky ? 'constellation-sky-with-name' : ''}`}>
        {nameInsideSky && <div className="constellation-name-in-sky"><span>THIS LITTLE UNIVERSE IS YOURS</span><h1>{name}</h1>{birthdayWish && <p className="constellation-birthday-wish">{birthdayWish}</p>}<div className="constellation-acrostic">{Array.from(name).filter(char => /[a-z]/i.test(char)).map((char, i) => <p key={`${char}-${i}`}><b>{char.toUpperCase()}</b><span>{traits[char.toUpperCase()] || 'One of a kind'}</span></p>)}</div></div>}
        <div className="constellation-nebula constellation-nebula-one" />
        <div className="constellation-nebula constellation-nebula-two" />
        <svg className="constellation-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {points.slice(0, -1).map((point, index) => {
            const nextPoint = points[index + 1];
            return <line key={`line-${index}`} x1={point.x} y1={point.y} x2={nextPoint.x} y2={nextPoint.y} />;
          })}
          {points.length > 4 && <line x1={points[1].x} y1={points[1].y} x2={points[4].x} y2={points[4].y} />}
          {points.length > 7 && <line x1={points[2].x} y1={points[2].y} x2={points[7].x} y2={points[7].y} />}
        </svg>
        {Array.from({ length: 6 }, (_, index) => (
          <i key={`dust-${index}`} className={`constellation-dust constellation-dust-${index % 4}`} style={{ left: `${(index * 37 + 11) % 97}%`, top: `${(index * 53 + 7) % 91}%`, animationDelay: `${(index % 9) * -0.7}s` }} />
        ))}
        {constellationFragments.map((fragment, index) => (
          <button key={`fragment-${index}`} type="button" className={`constellation-fragment ${selectedFragment === index ? 'is-selected' : ''}`} style={{ left: `${fragment.x}%`, top: `${fragment.y}%` }} onClick={() => { setSelectedFragment(index); setSelected(null); }} aria-pressed={selectedFragment === index} aria-label={`Open a little reminder: ${fragment.title}`}><span>✧</span><small>FRAGMENT</small></button>
        ))}
        {safeItems.map((item, index) => {
          const point = points[index];
          return (
            <button
              key={item.id}
              type="button"
              className={`constellation-star ${selected === index ? 'is-selected' : ''}`}
              style={{ left: `${point.x}%`, top: `${point.y}%`, animationDelay: `${(index % 5) * -0.55}s` }}
              onClick={() => { setSelected(index); setSelectedFragment(null); }}
              aria-label={`Reveal memory ${index + 1}: ${getMomentTitle(item)}`}
              aria-pressed={selected === index}
            >
              <span className="constellation-star-core">✦</span>
              <span className="constellation-star-label">{String(index + 1).padStart(2, '0')}</span>
            </button>
          );
        })}
        <span className="constellation-sky-caption">{String(safeItems.length).padStart(2, '0')} little lights · tap to discover</span>
      </div>
      <div className="constellation-reveal" aria-live="polite">
        {activeFragment ? (
          <div key={`fragment-reveal-${selectedFragment}`} className="constellation-memory constellation-fragment-memory"><span className="constellation-reveal-kicker">A LITTLE NOTE FOR YOUR HEART</span><h3>{activeFragment.title}</h3><p>{activeFragment.note}</p></div>
        ) : activeMoment ? (
          <div key={activeMoment.id} className="constellation-memory">
            <span className="constellation-reveal-kicker">A LITTLE THING, KEPT</span>
            <h3>{getMomentTitle(activeMoment)}</h3>
            <p>{getMomentPreview(activeMoment)}</p>
            {activeMoment.dateOrEra && <span className="constellation-era">{activeMoment.dateOrEra}</span>}
          </div>
        ) : (
          <p className="constellation-empty-prompt">{safeItems.length ? "Choose a star or a glowing fragment. There's a little story tucked inside each one." : 'Tap a glowing fragment for a small reminder to keep close.'}</p>
        )}
      </div>
    </section>
  );
}

function Artifact({ moment, index, active, onClick }: { moment: GiftMoment; index: number; active: boolean; onClick: () => void }) {
  const { headingClass, monoClass, handClass } = usePresentation();
  const labels: Record<string, string> = { story: 'FIELD NOTE', inside_joke: 'PRIVATE JOKE', song: 'SOUNDTRACK', place: 'LOCATION', quote: 'FOUND WORDS', message: 'SMALL OBSERVATION', photo: 'IMAGE' };
  return <motion.button className={`memory-artifact artifact-${moment.type} ${active ? 'memory-active' : ''}`} onClick={onClick} whileHover={{ y: -7, rotate: index % 2 ? -1.5 : 1.5 }} layout>
    <div className="artifact-meta"><span className={monoClass}>0{index + 1}</span><span>{labels[moment.type]}</span></div>
    {moment.type === 'photo' && <div className="photo-window"><div className="photo-sun" /><div className="photo-mountain" /><div className="photo-scribble">✦</div></div>}
    {moment.type === 'song' && <div className="record-object"><div className="record-label" /><div className="record-hole" /></div>}
    {moment.type === 'place' && <div className="map-object"><div className="map-path" /><div className="map-pin">●</div></div>}
    {moment.type === 'quote' && <div className="quote-object">“</div>}
    {moment.type === 'inside_joke' && <div className="joke-object"><span>HAHA</span><i>↗</i></div>}
    {moment.type === 'story' && <div className="story-object"><span /><span /><span /><b>✎</b></div>}
    {moment.type === 'message' && <div className="message-object">hello.</div>}
    <div className="memory-copy">
      <h3 className={headingClass}>{'title' in moment ? moment.title : 'songTitle' in moment ? moment.songTitle : 'placeName' in moment ? moment.placeName : 'heading' in moment && moment.heading ? moment.heading : 'quoteText' in moment ? moment.quoteText : 'setup' in moment ? moment.setup : 'caption' in moment ? moment.caption : 'A small thing'}</h3>
      <p className={handClass}>{active ? 'open artifact ↗' : 'tap to inspect'}</p>
    </div>
  </motion.button>;
}

function PhotoShowcase({ photos, audioRef, syncToMusic }: { photos: MomentPhoto[]; audioRef?: React.MutableRefObject<HTMLAudioElement | null>; syncToMusic: boolean }) {
  const [active, setActive] = useState(0);
  const count = photos.length;

  useEffect(() => {
    if (count < 2) return;
    const audio = audioRef?.current;
    if (syncToMusic && audio) {
      const advance = () => setActive(index => (index + 1) % count);
      const onEnded = () => advance();
      audio.addEventListener('ended', onEnded);
      // Advance on musical phrases without requiring a fixed timer.
      const timer = window.setInterval(() => {
        if (audio.duration && Number.isFinite(audio.duration) && audio.currentTime > 0) {
          const target = Math.min(count - 1, Math.floor((audio.currentTime / audio.duration) * count));
          setActive(current => current === target ? current : target);
        }
      }, 900);
      return () => { window.clearInterval(timer); audio.removeEventListener('ended', onEnded); };
    }
    const timer = window.setInterval(() => setActive(index => (index + 1) % count), 5200);
    return () => window.clearInterval(timer);
  }, [count, audioRef, syncToMusic]);

  if (!photos.length) return null;

  return (
    <div className="memory-photo-showcase" aria-label="Photo memories">
      <div className="photo-showcase-copy">
        <span>VISUAL ARCHIVE / 04</span>
        <strong>A few frames worth keeping.</strong>
        <p>{count > 1 ? 'The soundtrack keeps moving. These little frames do too.' : 'One frame, kept for a reason.'}</p>
      </div>
      <div className="photo-showcase-stage">
        {photos.map((photo, index) => (
          <motion.figure
            key={photo.id}
            className={`showcase-photo showcase-photo-${index % 4} ${index === active ? 'is-current' : ''}`}
            animate={index === active ? { opacity: 1, scale: 1, rotate: index % 2 ? 1.2 : -1.2, x: 0, y: 0 } : { opacity: 0, scale: .94, rotate: index % 2 ? 4 : -4, x: index < active ? -28 : 28, y: 10 }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="showcase-photo-inner">
              <img src={photo.url} alt={photo.alt || photo.caption || 'A saved memory'} />
            </div>
            <figcaption>{photo.caption || 'kept for a reason'}</figcaption>
          </motion.figure>
        ))}
        <div className="showcase-sweep" aria-hidden="true" />
      </div>
      {count > 1 && (
        <div className="photo-showcase-dots" aria-label="Choose photo">
          {photos.map((photo, index) => (
            <button key={photo.id} type="button" className={index === active ? 'is-active' : ''} onClick={() => setActive(index)} aria-label={`Show photo ${index + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Stage4Moments({ content, onNext, audioRef, syncToMusic = true }: { content: StageMomentsContent; onNext: () => void; audioRef?: React.MutableRefObject<HTMLAudioElement | null>; syncToMusic?: boolean }) {
  const { headingClass, monoClass } = usePresentation();
  const [active, setActive] = useState(0);
  const moment = content.items[active];
  const allPhotos = useMemo(() => content.items.flatMap(item => item.attachments?.photos || []), [content.items]);

  return <section className="stage-four">
    <div className="moments-header"><div><span className={monoClass}>04 / ARCHIVE OF SMALL THINGS</span><h1 className={headingClass}>{content.sectionTitle}</h1><p>{content.subtitle}</p></div><span className="moment-count">{String(content.items.length).padStart(2, '0')} artifacts</span></div>

    <PhotoShowcase photos={allPhotos} audioRef={audioRef} syncToMusic={syncToMusic} />

    <div className="memory-board">{content.items.map((m, i) => <Artifact key={m.id} moment={m} index={i} active={i === active} onClick={() => setActive(i)} />)}</div>
    <motion.div className="artifact-inspector" key={moment.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <div className="inspector-line"><span className={monoClass}>NOW INSPECTING / 0{active + 1}</span><span>{moment.dateOrEra || 'undated / but remembered'}</span></div>
      <div className="inspector-content">{moment.type === 'story' && <p>{moment.narrative.join(' ')}</p>}{moment.type === 'inside_joke' && <p><strong>{moment.setup}</strong><br />{moment.punchline}</p>}{moment.type === 'song' && <p>{moment.associatedMemory}</p>}{moment.type === 'place' && <p>{moment.memoryDescription}</p>}{moment.type === 'quote' && <p>“{moment.quoteText}” — {moment.attribution}. {moment.context}</p>}{moment.type === 'message' && <p>{moment.body}</p>}{moment.type === 'photo' && <p>{moment.caption}</p>}</div>
      {moment.attachments?.photos?.length ? <div className="inspector-photos">{moment.attachments.photos.map(photo => <figure key={photo.id}><img src={photo.url} alt={photo.alt || 'A saved memory'} /><figcaption>{photo.caption || 'kept for a reason'}</figcaption></figure>)}</div> : null}
      {moment.attachments?.music ? <div className="inspector-soundtrack"><div className="soundtrack-record"><span>♪</span></div><div><span className={monoClass}>THE SOUNDTRACK</span><h4>{moment.attachments.music.title}</h4><p>{moment.attachments.music.artist}</p><a href={moment.attachments.music.spotifyUrl} target="_blank" rel="noreferrer">open in Spotify ↗</a></div></div> : null}
    </motion.div>
    <button className="artifact-action dark-action" onClick={onNext}><span>there is a reason these were kept</span><span>→</span></button>
  </section>;
}
