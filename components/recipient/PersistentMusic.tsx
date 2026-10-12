'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ExternalLink, Music2, Volume2, VolumeX, Play, Pause, Disc3, X } from 'lucide-react';
import type { GiftData, MomentMusic } from '@/types/gift';

function getLinkedMusic(gift: GiftData): MomentMusic | undefined {
  return gift.presentation.spotifyFallback
    || gift.content.stages.moments.items.find(item => item.attachments?.music)?.attachments?.music;
}

export function PersistentMusic({
  gift,
  activated,
  audioRef,
}: {
  gift: GiftData;
  activated: boolean;
  audioRef?: React.MutableRefObject<HTMLAudioElement | null>;
}) {
  const linkedMusic = useMemo(() => getLinkedMusic(gift), [gift]);
  const directAudio = useMemo(() => {
    const src = gift.presentation.audio?.src || '';
    if (!src || /spotify\.com|youtube\.com|youtu\.be/i.test(src)) return undefined;
    return gift.presentation.audio;
  }, [gift.presentation.audio]);
  const localRef = useRef<HTMLAudioElement | null>(null);
  const ref = audioRef || localRef;
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [musicPanelOpen, setMusicPanelOpen] = useState(false);

  useEffect(() => {
    const audio = ref.current;
    if (!audio || !directAudio) return;
    audio.loop = directAudio.loop !== false;
    audio.volume = Math.min(1, Math.max(0, directAudio.volume ?? 0.55));
    const onPlay = () => { setPlaying(true); setFailed(false); };
    const onPause = () => setPlaying(false);
    const onError = () => { setPlaying(false); setFailed(true); };
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('error', onError);
    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('error', onError);
    };
  }, [directAudio, ref]);

  if (!directAudio && !linkedMusic) return null;
  const youtube = linkedMusic?.provider === 'youtube' ? linkedMusic : undefined;
  const spotify = linkedMusic?.provider === 'spotify' ? linkedMusic : undefined;
  const externalUrl = linkedMusic?.spotifyUrl || '';
  const embedUrl = youtube
    ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtube.trackId)}?autoplay=1&mute=0&controls=1&playsinline=1&rel=0`
    : spotify
      ? `https://open.spotify.com/embed/track/${encodeURIComponent(spotify.trackId)}?utm_source=generator&theme=0`
      : '';
  const hiddenYoutubeUrl = youtube
    ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtube.trackId)}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${encodeURIComponent(youtube.trackId)}&rel=0`
    : '';

  const toggleMute = () => {
    const audio = ref.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };
  const togglePlayback = () => {
    const audio = ref.current;
    if (!audio) return;
    if (audio.paused) {
      audio.muted = false;
      void audio.play().then(() => setFailed(false)).catch(() => setFailed(true));
    } else audio.pause();
  };

  return (
    <>
      {directAudio && <audio ref={ref} src={directAudio.src} preload="auto" loop={directAudio.loop !== false} playsInline onCanPlay={() => setFailed(false)} aria-label={directAudio.title || 'Background soundtrack'} />}

      {/* Warm the YouTube player before the gift opens. Muted autoplay is allowed more
          often than audible autoplay; the visible player remains available as a fallback. */}
      {youtube && <iframe className="youtube-audio-quiet" title="Background music preload" src={hiddenYoutubeUrl} allow="autoplay; encrypted-media; picture-in-picture" tabIndex={-1} aria-hidden="true" loading="eager" /> }

      {activated && (linkedMusic || directAudio) && (
        <div className={`soundtrack-dock ${musicPanelOpen ? 'music-panel-open' : ''}`} aria-label="Soundtrack controls">
          <button type="button" className={`soundtrack-disc-button ${playing ? 'is-playing' : ''}`} onClick={() => setMusicPanelOpen(v => !v)} aria-label={musicPanelOpen ? 'Close music player' : 'Open music player'} aria-expanded={musicPanelOpen}>
            {musicPanelOpen ? <X size={18} /> : <Disc3 size={21} />}
          </button>
          {(linkedMusic || directAudio) && (
            <div className={`soundtrack-panel soundtrack-floating-panel ${musicPanelOpen ? 'is-open' : 'is-closed'}`} aria-hidden={!musicPanelOpen}>
              <div className="soundtrack-panel-title"><span><Music2 size={13} /> {linkedMusic?.title || directAudio?.title || 'Soundtrack'}</span><button type="button" onClick={() => setMusicPanelOpen(false)} aria-label="Close music panel"><X size={14} /></button></div>
              {linkedMusic && <iframe title={`${youtube ? 'YouTube' : 'Spotify'} — ${linkedMusic.title}`} src={embedUrl} width="100%" height={youtube ? 90 : 80} frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager" />}
              {directAudio && <div className="soundtrack-actions soundtrack-inline-actions">
                <button type="button" onClick={togglePlayback} aria-label={playing ? 'Pause soundtrack' : 'Play soundtrack'}>{playing ? <Pause size={13} /> : <Play size={13} />}</button>
                <button type="button" onClick={toggleMute} aria-label={muted ? 'Unmute soundtrack' : 'Mute soundtrack'}>{muted ? <VolumeX size={13} /> : <Volume2 size={13} />}</button>
              </div>}
              {linkedMusic && <a className="soundtrack-external-link" href={externalUrl} target="_blank" rel="noreferrer">Open in {youtube ? 'YouTube' : 'Spotify'} <ExternalLink size={11} /></a>}
              {youtube && <p className="soundtrack-hint">If sound did not start automatically, press play above. Browsers may block autoplay with sound.</p>}
              {failed && <p className="soundtrack-hint">This audio file could not be played. Check the uploaded MP3/WAV file.</p>}
            </div>
          )}
        </div>
      )}
    </>
  );
}
