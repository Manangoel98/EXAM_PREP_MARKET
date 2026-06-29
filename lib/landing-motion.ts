/** Shared Framer Motion tuning for the marketing homepage — smooth, minimal, consistent. */
export const LANDING_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const LANDING_DURATION = 0.55;

/** Trigger slightly before the section enters view so motion feels early but smooth */
export const LANDING_VIEWPORT = {
  once: true,
  margin: "-14% 0px -10% 0px",
  amount: 0.15,
} as const;

export const landingFadeUp = (delay = 0) =>
  ({
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: LANDING_VIEWPORT,
    transition: { duration: LANDING_DURATION, delay, ease: LANDING_EASE },
  }) as const;
