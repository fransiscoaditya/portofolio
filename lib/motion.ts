/**
 * Motion configuration — centralized animation values
 * All animation primitives pull from here for consistency
 */

// ─── Durations ────────────────────────────────────────────────────────────────
export const duration = {
  fast: 0.2,
  base: 0.4,
  slow: 0.7,
  slower: 1.0,
  crawl: 1.4,
} as const;

// ─── Easings ──────────────────────────────────────────────────────────────────
export const ease = {
  /** Editorial — slow in, fast out */
  editorial: [0.25, 0.1, 0.0, 1.0] as [number, number, number, number],
  /** Smooth deceleration */
  out: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number],
  /** Smooth acceleration */
  in: [0.4, 0.0, 1.0, 1.0] as [number, number, number, number],
  /** Standard ease-in-out */
  inOut: [0.4, 0.0, 0.2, 1.0] as [number, number, number, number],
  /** Expo out — fast settle */
  expo: [0.16, 1, 0.3, 1] as [number, number, number, number],
} as const;

// ─── Variants ─────────────────────────────────────────────────────────────────
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.slow, ease: ease.editorial },
  },
} as const;

export const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.expo },
  },
} as const;

export const revealLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.slow, ease: ease.expo },
  },
} as const;

export const clipReveal = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: duration.crawl, ease: ease.expo },
  },
} as const;

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// ─── Scroll viewport margin ───────────────────────────────────────────────────
export const VIEWPORT_ONCE = {
  once: true,
  margin: "-10% 0px -10% 0px",
} as const;

// ─── Magnetic effect config ───────────────────────────────────────────────────
export const MAGNETIC_STRENGTH = 0.3;
export const MAGNETIC_MAX = 12; // px
