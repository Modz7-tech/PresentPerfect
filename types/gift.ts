export type MomentType =
  | 'story'
  | 'inside_joke'
  | 'song'
  | 'place'
  | 'quote'
  | 'message'
  | 'photo';

export interface MomentMusic {
  provider: 'spotify' | 'youtube';
  trackId: string;
  title: string;
  artist: string;
  spotifyUrl: string; // canonical external URL for Spotify or YouTube
  albumArt?: string;
}

export interface MomentPhoto {
  id: string;
  url: string;
  caption?: string;
  alt?: string;
}

export interface MomentAttachments {
  photos?: MomentPhoto[];
  music?: MomentMusic;
}

export interface BaseMoment {
  id: string;
  type: MomentType;
  tag?: string;
  dateOrEra?: string;
  attachments?: MomentAttachments;
}

export interface StoryMoment extends BaseMoment {
  type: 'story';
  title: string;
  narrative: string[];
  takeaway?: string;
}

export interface InsideJokeMoment extends BaseMoment {
  type: 'inside_joke';
  setup: string;
  punchline: string;
  contextNote?: string;
}

export interface SongMoment extends BaseMoment {
  type: 'song';
  songTitle: string;
  artist: string;
  associatedMemory: string;
  lyricSnippet?: string;
}

export interface PlaceMoment extends BaseMoment {
  type: 'place';
  placeName: string;
  coordinatesOrArea?: string;
  memoryDescription: string;
}

export interface QuoteMoment extends BaseMoment {
  type: 'quote';
  quoteText: string;
  attribution: string;
  context: string;
}

export interface MessageMoment extends BaseMoment {
  type: 'message';
  heading?: string;
  body: string;
}

export interface PhotoMoment extends BaseMoment {
  type: 'photo';
  title?: string;
  caption: string;
  imageUrl?: string;
  imageAlt?: string;
}

export type GiftMoment =
  | StoryMoment
  | InsideJokeMoment
  | SongMoment
  | PlaceMoment
  | QuoteMoment
  | MessageMoment
  | PhotoMoment;

export interface PlayfulOption {
  id: string;
  label: string;
  response: string;
}

export interface StageInvitationContent {
  leadIn: string;
  title: string;
  cue: string;
  actionText: string;
}

export interface StageIntroductionContent {
  headline: string;
  body: string[];
  actionText: string;
}

export interface PlayfulQuestion {
  id: string;
  prompt: string;
  subtitle: string;
  options: PlayfulOption[];
  insight?: string;
}

export interface StagePlayfulContent {
  prompt: string;
  subtitle: string;
  options: PlayfulOption[];
  payoff: string;
  questions?: PlayfulQuestion[];
}

export interface StageMomentsContent {
  sectionTitle: string;
  subtitle: string;
  items: GiftMoment[];
}

export interface StageRealizationContent {
  headline: string;
  threads: {
    clue: string;
    subtext: string;
  }[];
  realizationMessage: string;
}

export interface StageAppreciationContent {
  headline: string;
  paragraphs: string[];
  warmSignoff: string;
}

export interface StageEndingContent {
  birthdayWish: string;
  closingThought: string;
  pressureFreeNote: string;
  allowReplay: boolean;
}

export interface GiftContent {
  recipient: {
    name: string;
  };
  occasion: 'birthday' | 'milestone' | 'appreciation';
  stages: {
    invitation: StageInvitationContent;
    introduction: StageIntroductionContent;
    playful: StagePlayfulContent;
    moments: StageMomentsContent;
    realization: StageRealizationContent;
    appreciation: StageAppreciationContent;
    ending: StageEndingContent;
  };
}

export type ThemeId = 'sunbeam-pop' | 'garden-party' | 'candy-collage' | 'electric-daydream' | 'retro-picnic' | 'paper-confetti' | 'midnight-cinema' | 'warm-sand' | 'sage-paper' | 'midnight-ink' | 'terracotta-editorial';
export type TemplateId = ThemeId;
export type FontPairing = 'classic-serif' | 'modern-sans' | 'editorial-mix';
export type PacingSpeed = 'gentle' | 'standard' | 'contemplative';

export interface BackgroundAudio {
  src: string;
  title?: string;
  artist?: string;
  volume?: number;
  loop?: boolean;
  sourceType?: 'direct-url' | 'uploaded-file';
  storagePath?: string;
}

export interface GiftPresentation {
  themeId: ThemeId;
  templateId?: TemplateId;
  fontPairing: FontPairing;
  pacing: PacingSpeed;
  audio?: BackgroundAudio;
  spotifyFallback?: MomentMusic;
  syncPhotosToMusic?: boolean;
}

export interface GiftData {
  id: string;
  content: GiftContent;
  presentation: GiftPresentation;
  /** Creator-only secret. Never send this field to the recipient client. */
  responseToken?: string;
}
