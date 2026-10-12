import { ThemeId, FontPairing, PacingSpeed } from '@/types/gift';

export interface ThemeProperties {
  id: ThemeId;
  name: string;
  tagline: string;
  colors: string[];
  cssVars: Record<string, string>;
}

const common = {
  '--gift-text': '#201b26',
  '--gift-muted': '#655f6c',
  '--gift-accent-hover': '#201b26',
};

export const THEME_PRESETS: Record<ThemeId, ThemeProperties> = {
  'sunbeam-pop': {
    id: 'sunbeam-pop', name: 'Sunbeam Pop', tagline: 'Sunny, cheeky & joyful', colors: ['#FFD65A','#FF7A59','#4E67FF','#63D6C2'],
    cssVars: { ...common, '--gift-bg':'#FFF8DF','--gift-surface':'#FFFDF4','--gift-surface-alt':'#FFEFB2','--gift-border':'#E8C95C','--gift-accent':'#FF5E4D','--gift-highlight':'#CDEFF0','--gift-accent-2':'#4E67FF','--gift-accent-3':'#63D6C2','--gift-bg-2':'#FFE7C8' }
  },
  'garden-party': {
    id: 'garden-party', name: 'Garden Party', tagline: 'Fresh, playful & organic', colors: ['#B9E4C9','#5E9F6B','#F59B8B','#8A78D8'],
    cssVars: { ...common, '--gift-bg':'#F2F8EA','--gift-surface':'#FFFEF8','--gift-surface-alt':'#DFF0D9','--gift-border':'#B9D7B4','--gift-accent':'#4F8A5B','--gift-highlight':'#F7C5B9','--gift-accent-2':'#8A78D8','--gift-accent-3':'#F59B8B','--gift-bg-2':'#E4F1FF' }
  },
  'candy-collage': {
    id: 'candy-collage', name: 'Candy Collage', tagline: 'Colorful, quirky & scrapbooky', colors: ['#FFB5D5','#A8E6CF','#8DB9FF','#FFD166'],
    cssVars: { ...common, '--gift-bg':'#FFF1F7','--gift-surface':'#FFFDFE','--gift-surface-alt':'#FFE0ED','--gift-border':'#F4B6D0','--gift-accent':'#D94F8A','--gift-highlight':'#BDEFE1','--gift-accent-2':'#6A63D8','--gift-accent-3':'#F2B84B','--gift-bg-2':'#E7F8FF' }
  },
  'electric-daydream': {
    id: 'electric-daydream', name: 'Electric Daydream', tagline: 'Bold, kinetic & unexpected', colors: ['#5B5FF0','#FF4FA3','#B6F35B','#56D9FF'],
    cssVars: { ...common, '--gift-bg':'#EEF0FF','--gift-surface':'#FBFBFF','--gift-surface-alt':'#D9DCFF','--gift-border':'#AEB4FF','--gift-accent':'#5B5FF0','--gift-highlight':'#FFD1EA','--gift-accent-2':'#FF4FA3','--gift-accent-3':'#B6F35B','--gift-bg-2':'#DDF8FF' }
  },
  'retro-picnic': {
    id: 'retro-picnic', name: 'Retro Picnic', tagline: 'Sunny, nostalgic & graphic', colors: ['#F4C95D','#E96A5F','#4D9DE0','#4E7D5B'],
    cssVars: { ...common, '--gift-bg':'#FFF5D9','--gift-surface':'#FFFCF0','--gift-surface-alt':'#F9E4A7','--gift-border':'#E4C66D','--gift-accent':'#D8564E','--gift-highlight':'#BFDDF2','--gift-accent-2':'#4D9DE0','--gift-accent-3':'#4E7D5B','--gift-bg-2':'#FFE3D7' }
  },
  'paper-confetti': {
    id: 'paper-confetti', name: 'Paper Confetti', tagline: 'Bright, tactile & celebratory', colors: ['#FF8066','#3BB7A7','#FFC857','#7B6CF6'],
    cssVars: { ...common, '--gift-bg':'#FFF9F2','--gift-surface':'#FFFFFF','--gift-surface-alt':'#FFE9D8','--gift-border':'#F1C6A8','--gift-accent':'#E65B47','--gift-highlight':'#BFECE4','--gift-accent-2':'#7B6CF6','--gift-accent-3':'#FFC857','--gift-bg-2':'#E9F5FF' }
  },
  'midnight-cinema': {
    id: 'midnight-cinema', name: 'Midnight Cinema', tagline: 'Moody, luminous & cinematic', colors: ['#18243A','#FFD166','#7C6FF2','#63E6BE'],
    cssVars: { ...common, '--gift-bg':'#101827','--gift-surface':'#172238','--gift-surface-alt':'#202F4A','--gift-border':'#33486B','--gift-text':'#F7F3EA','--gift-muted':'#A7B3C8','--gift-accent':'#FFD166','--gift-accent-hover':'#FFFFFF','--gift-highlight':'#293A5A','--gift-accent-2':'#7C6FF2','--gift-accent-3':'#63E6BE','--gift-bg-2':'#1B1735' }
  },
  'warm-sand': {
    id: 'warm-sand', name: 'Warm Linen & Sand', tagline: 'Quiet & editorial', colors: ['#F3ECE1','#8A5A36','#D8B07A','#C9D8C0'],
    cssVars: { ...common, '--gift-bg':'#F9F6F0','--gift-surface':'#FFFFFF','--gift-surface-alt':'#F3ECE1','--gift-border':'#E2D7C7','--gift-accent':'#8A5A36','--gift-highlight':'#ECE2D2','--gift-accent-2':'#A4B98C','--gift-accent-3':'#D8B07A','--gift-bg-2':'#F2E8DA' }
  },
  'sage-paper': {
    id: 'sage-paper', name: 'Sage & Parchment', tagline: 'Calm & natural', colors: ['#DCE8D9','#3F5E4C','#D69B7B','#8AA4A8'],
    cssVars: { ...common, '--gift-bg':'#F5F7F3','--gift-surface':'#FFFFFF','--gift-surface-alt':'#E8EFE6','--gift-border':'#D4DED2','--gift-accent':'#3F5E4C','--gift-highlight':'#DCE8D9','--gift-accent-2':'#8AA4A8','--gift-accent-3':'#D69B7B','--gift-bg-2':'#EAF0E6' }
  },
  'midnight-ink': {
    id: 'midnight-ink', name: 'Midnight Ink & Brass', tagline: 'Classic & dramatic', colors: ['#12151B','#CDA34F','#6B7EA5','#D77C6A'],
    cssVars: { ...common, '--gift-bg':'#12151B','--gift-surface':'#181E28','--gift-surface-alt':'#202836','--gift-border':'#2D384B','--gift-text':'#F3F5F8','--gift-muted':'#8C9CB0','--gift-accent':'#CDA34F','--gift-highlight':'#253245','--gift-accent-2':'#667AA6','--gift-accent-3':'#D77C6A','--gift-bg-2':'#191A2A' }
  },
  'terracotta-editorial': {
    id: 'terracotta-editorial', name: 'Terracotta & Oatmeal', tagline: 'Warm & artistic', colors: ['#A24F38','#E4A15C','#6E8B74','#D7B4A1'],
    cssVars: { ...common, '--gift-bg':'#F9F5F1','--gift-surface':'#FFFFFF','--gift-surface-alt':'#F1E7DF','--gift-border':'#E0D1C5','--gift-accent':'#A24F38','--gift-highlight':'#EEE0D6','--gift-accent-2':'#6E8B74','--gift-accent-3':'#E4A15C','--gift-bg-2':'#F5DFD0' }
  },
};

export const FONT_PAIRING_CLASSES: Record<FontPairing, { heading: string; body: string; mono: string; hand: string }> = {
  'classic-serif': { heading: 'font-serif font-normal tracking-tight', body: 'font-serif leading-relaxed', mono: 'font-mono text-xs tracking-wider uppercase', hand: 'font-hand text-lg' },
  'modern-sans': { heading: 'font-sans font-medium tracking-tight', body: 'font-sans leading-relaxed text-[15px]', mono: 'font-mono text-xs tracking-wider uppercase', hand: 'font-hand text-lg' },
  'editorial-mix': { heading: 'font-serif font-light tracking-tight', body: 'font-sans leading-relaxed text-[15px]', mono: 'font-mono text-xs tracking-wider uppercase', hand: 'font-hand text-lg' },
};

export const PACING_DURATIONS: Record<PacingSpeed, { transition: number; delay: number }> = {
  gentle: { transition: 0.7, delay: 0.15 },
  standard: { transition: 0.45, delay: 0.08 },
  contemplative: { transition: 0.9, delay: 0.25 },
};
