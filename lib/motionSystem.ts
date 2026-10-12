/**
 * motionSystem.ts
 * 
 * Shared motion vocabulary for A Little Something.
 * Every animation in the experience derives from these tokens.
 * 
 * Philosophy:
 * - Motion is editorial, not decorative
 * - Transitions feel physical: things arrive, settle, breathe, depart
 * - Nothing happens all at once — stagger creates choreography
 * - Ease curves have personality (not generic ease-out)
 */

import { Variants, Transition } from 'framer-motion';

// ─── EASING CURVES ────────────────────────────────────────────────────────────

export const ease = {
  /** Silky entrance — starts fast, settles gently. Editorial. */
  enter: [0.16, 1, 0.3, 1] as [number, number, number, number],
  /** Snap exit — quick departure without feeling rushed */
  exit: [0.4, 0, 1, 1] as [number, number, number, number],
  /** Spring-like settle — for objects landing into position */
  settle: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  /** Slow unfurl — cinematic reveal */
  unfurl: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  /** Elastic snap for playful objects */
  elastic: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number],
  /** Sharp and confident for typographic hits */
  sharp: [0.12, 0, 0.39, 0] as [number, number, number, number],
};

// ─── DURATION TOKENS ──────────────────────────────────────────────────────────

export const dur = {
  instant: 0.15,
  fast: 0.25,
  medium: 0.5,
  slow: 0.9,
  cinematic: 1.4,
  breath: 2.2,
};

// ─── STAGE TRANSITION VARIANTS ────────────────────────────────────────────────

/** Default cross-stage transition — elements drift upward and fade as they leave */
export const stageTransition: Transition = {
  duration: dur.slow,
  ease: ease.unfurl,
};

export const stageVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: stageTransition },
  exit: { opacity: 0, transition: { duration: dur.medium, ease: ease.exit } },
};

// ─── KINETIC TYPOGRAPHY ───────────────────────────────────────────────────────

/**
 * Split a string into individual characters for kinetic animation.
 * Returns array of { char, isSpace } objects.
 */
export function splitChars(text: string) {
  return text.split('').map((char, i) => ({
    char,
    isSpace: char === ' ',
    key: `${char}-${i}`,
  }));
}

/**
 * Split text into words for staggered word entry.
 */
export function splitWords(text: string) {
  return text.split(' ').map((word, i) => ({
    word,
    key: `word-${i}`,
  }));
}

/** Variants for individual character assembly (Stage 1 invitation) */
export const charVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: Math.sin(i * 1.3) * 40 + 30,
    x: Math.cos(i * 0.9) * 25,
    rotate: (Math.random() - 0.5) * 20,
    scale: 0.7,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: dur.slow,
      ease: ease.settle,
    },
  },
};

/** Variants for word-by-word reveal (Stage 2 intro, Stage 4 story) */
export const wordVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: dur.medium,
      delay: i * 0.08,
      ease: ease.enter,
    },
  }),
};

/** Large headline that enters from a specific direction */
export const headlineVariants: Variants = {
  hidden: { opacity: 0, x: -60, skewX: -3 },
  visible: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: { duration: dur.slow, ease: ease.enter },
  },
};

// ─── FLOATING ARTIFACT VARIANTS ───────────────────────────────────────────────

/** For background ambient elements — drift slowly without drawing focus */
export const floatVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: dur.cinematic, delay, ease: ease.unfurl },
  }),
};

/** Continuous drift animation config (use with animate prop directly) */
export function driftAnimation(
  xRange: [number, number],
  yRange: [number, number],
  duration: number,
  delay: number = 0
) {
  return {
    x: xRange,
    y: yRange,
    transition: {
      duration,
      delay,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut',
    },
  };
}

// ─── OBJECT REVEAL VARIANTS ───────────────────────────────────────────────────

/** For folded paper / envelope unfold on tap */
export const unfoldVariants: Variants = {
  folded: {
    scaleY: 0.1,
    rotateX: -80,
    opacity: 0,
    transformOrigin: 'top',
  },
  unfolded: {
    scaleY: 1,
    rotateX: 0,
    opacity: 1,
    transformOrigin: 'top',
    transition: { duration: dur.slow, ease: ease.settle },
  },
};

/** Peel / rotate reveal */
export const peelVariants: Variants = {
  closed: { rotate: -90, scale: 0.6, opacity: 0 },
  open: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: dur.medium, ease: ease.elastic },
  },
};

// ─── STAGGER CONTAINERS ───────────────────────────────────────────────────────

export function staggerContainer(staggerChildren: number, delayChildren: number = 0): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.medium, ease: ease.enter },
  },
};

// ─── PARALLAX UTILITIES ───────────────────────────────────────────────────────

/** Convert a normalized mouse position [-1, 1] to a parallax offset */
export function parallaxOffset(normalizedPos: number, depth: number): number {
  return normalizedPos * depth;
}

// ─── SCROLL PROGRESS UTILITIES ────────────────────────────────────────────────

/** Map a scroll progress value [0, 1] to an output range */
export function mapRange(
  value: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number
): number {
  const ratio = (value - inputMin) / (inputMax - inputMin);
  return outputMin + ratio * (outputMax - outputMin);
}

// ─── CONVERGENCE (Stage 5 Realization) ───────────────────────────────────────

/** Items that converge toward center */
export const convergenceVariants = (index: number, total: number): Variants => {
  const angle = (index / total) * Math.PI * 2;
  const radius = 120;
  return {
    scattered: {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      opacity: 0,
      scale: 0.8,
    },
    converged: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: dur.cinematic,
        delay: index * 0.15,
        ease: ease.enter,
      },
    },
  };
};

// ─── VINYL / SPIN ANIMATION ───────────────────────────────────────────────────

export const vinylSpin = {
  animate: {
    rotate: 360,
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// ─── REDUCED MOTION SAFE VARIANTS ────────────────────────────────────────────

/**
 * Wraps variants with a reduced-motion fallback.
 * If the user has prefers-reduced-motion, we use opacity-only transitions.
 */
export function reducedMotionSafe(variants: Variants): Variants {
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: dur.medium } },
    ...variants,
  };
}
