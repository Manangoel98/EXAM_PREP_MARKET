/**
 * Tailwind class bundles for public marketing pages — matches landing (premium-landing, SiteHeader).
 */
export const MKT = {
  shell: "min-h-screen bg-zinc-50 font-barlow text-neutral-900 antialiased",
  container: "container mx-auto px-4 md:px-6",
  darkHero: "bg-neutral-dark text-white",
  h1Hero: "font-heading text-3xl italic tracking-tight md:text-5xl md:leading-[1.08]",
  h1OnLight: "font-heading text-3xl italic tracking-tight text-neutral-900 md:text-5xl",
  h2Section: "font-heading text-2xl italic tracking-tight text-neutral-900 md:text-3xl",
  leadOnDark: "font-barlow text-base font-medium text-white/80 md:text-xl",
  leadOnLight: "font-barlow text-base font-medium text-neutral-600 md:text-lg",
  /** Pill on dark hero (glass) */
  badgeDark:
    "liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white/90",
  /** Pill on light background */
  badgeLight:
    "liquid-glass-light inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-neutral-700",
  card: "rounded-2xl border border-black/[0.08] bg-white/90 p-6 shadow-sm md:p-8",
  cardHover: "transition-shadow hover:shadow-md",
  btnPrimary:
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 font-barlow text-sm font-semibold text-white transition-colors hover:bg-neutral-800",
  btnSecondary:
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-transparent px-6 py-3 font-barlow text-sm font-semibold text-white transition-colors hover:bg-white/10",
  btnOutlineLight:
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-neutral-900/20 bg-white px-6 py-3 font-barlow text-sm font-semibold text-neutral-900 transition-colors hover:bg-black/[0.04]",
  linkInline: "font-semibold text-neutral-900 underline decoration-accent-lime/75 underline-offset-4 hover:decoration-accent-lime",
  /** Standard vertical padding between major sections */
  section: "border-t border-black/[0.06] bg-white py-10 md:py-14",
  sectionZinc: "border-t border-black/[0.06] bg-zinc-50 py-10 md:py-14",
  /** Tables: outer chrome */
  tableShell: "overflow-x-auto rounded-2xl border border-black/[0.08] shadow-sm",
} as const;
