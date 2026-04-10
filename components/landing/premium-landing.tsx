"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Layers, MessageSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LANDING_DURATION, LANDING_EASE, LANDING_VIEWPORT } from "@/lib/landing-motion";
import { getAppUrl } from "@/lib/config";

const HERO_VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

const chipListVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.055, delayChildren: 0.2 },
  },
};

const chipItemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: LANDING_EASE },
  },
};

const examChips = [
  { label: "SAT", href: getAppUrl("/exams/sat"), status: "live" as const, external: true },
  { label: "ACT", href: "/pricing", status: "live" as const, external: false },
  { label: "AP", href: "/exams", status: "soon" as const, external: false },
  { label: "GRE", href: getAppUrl("/exams/gre"), status: "soon" as const, external: true },
  { label: "MCAT", href: getAppUrl("/exams/mcat"), status: "soon" as const, external: true },
  { label: "NEET", href: "/exams", status: "soon" as const, external: false },
  { label: "JEE", href: getAppUrl("/exams/jee"), status: "soon" as const, external: true },
  { label: "CAT", href: "/exams", status: "soon" as const, external: false },
  { label: "CA (India)", href: "/exams", status: "soon" as const, external: false },
];

export function PremiumHero() {
  return (
    <section className="relative flex min-h-[100dvh] min-h-screen flex-col overflow-hidden bg-black font-barlow">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <video
          className="absolute left-1/2 top-1/2 h-[120%] w-[120%] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover blur-[3px] sm:blur-[5px] md:blur-md"
          style={{ willChange: "transform" }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-black/50" aria-hidden />
      {/* Bottom vignette only — stay dark; never fade to white here (that caused the "white layer" band). */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-48 bg-gradient-to-t from-black via-black/70 to-transparent md:h-56"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 pb-32 pt-28 text-center md:px-6 md:pb-40 md:pt-32">
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: LANDING_DURATION, ease: LANDING_EASE }}
            className="mb-8"
          >
          <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-2 py-1.5 pr-4">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-900">Live</span>
            <span className="text-sm text-white/90">
              SAT & ACT — Official-style prep — Fresh drops every 2 weeks
            </span>
          </div>
        </motion.div>

        <div className="relative mx-auto max-w-4xl px-2 md:px-8">
          <span className="pointer-events-none absolute -left-2 -top-2 z-20 h-[7px] w-[7px] bg-white md:-left-3 md:-top-3" aria-hidden />
          <span className="pointer-events-none absolute -right-2 -top-2 z-20 h-[7px] w-[7px] bg-white md:-right-3 md:-top-3" aria-hidden />
          <span className="pointer-events-none absolute -bottom-2 -left-2 z-20 h-[7px] w-[7px] bg-white md:-bottom-3 md:-left-3" aria-hidden />
          <span className="pointer-events-none absolute -bottom-2 -right-2 z-20 h-[7px] w-[7px] bg-white md:-bottom-3 md:-right-3" aria-hidden />

          <motion.h1
            className="font-barlow text-[2rem] font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-[4rem]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: LANDING_DURATION, delay: 0.06, ease: LANDING_EASE }}
          >
            Serious prep, modern tools
            <br />
            <span className="font-heading text-[2.35rem] italic sm:text-6xl md:text-7xl lg:text-[5.25rem] lg:leading-[0.95]">
              for exams that matter
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/75 md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: LANDING_DURATION, delay: 0.12, ease: LANDING_EASE }}
          >
            Practice, flashcards, learning paths, and an unlimited AI tutor—including help on your own uploads.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
            variants={chipListVariants}
            initial="hidden"
            animate="show"
          >
            {examChips.map((chip) =>
              chip.status === "live" ? (
                <motion.div key={chip.label} variants={chipItemVariants}>
                  {chip.external ? (
                    <a
                      href={chip.href}
                      className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/15"
                    >
                      {chip.label}
                    </a>
                  ) : (
                    <Link
                      href={chip.href}
                      className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/15"
                    >
                      {chip.label}
                    </Link>
                  )}
                </motion.div>
              ) : (
                <motion.span
                  key={chip.label}
                  variants={chipItemVariants}
                  className="inline-block rounded-full border border-white/15 bg-black/20 px-4 py-2 text-sm text-white/55"
                >
                  {chip.label}
                  <span className="ml-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/40">Soon</span>
                </motion.span>
              ),
            )}
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: LANDING_DURATION, delay: 0.32, ease: LANDING_EASE }}
          >
            <a href={getAppUrl("/auth")}>
              <Button
                size="lg"
                className="h-14 rounded-full bg-[#f8f8f8] px-8 font-barlow text-base font-semibold text-[#171717] shadow-lg transition-colors hover:bg-white"
              >
                Start at $9/mo per exam
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href={getAppUrl("/exams/sat")}>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-white/35 bg-transparent font-barlow text-base font-medium text-white transition-colors hover:bg-white/10 hover:text-white"
              >
                <Play className="mr-2 h-4 w-4 fill-current" />
                Explore SAT prep
              </Button>
            </a>
          </motion.div>

          <motion.p
            className="mt-6 text-sm text-white/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.42, ease: LANDING_EASE }}
          >
            $9/month per exam (USD) · Cancel anytime · For students and parents
          </motion.p>

          <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-white/45">
            Nomoexam is for practice and learning—follow your school’s rules and each test program’s policies, including
            what’s allowed on exam day.
          </p>
        </div>
      </div>
    </section>
  );
}

/** Soft blend from full-bleed hero into light page (reduces a hard black → white edge). */
export function HeroToContentBridge() {
  return (
    <div
      aria-hidden
      className="pointer-events-none h-20 w-full bg-gradient-to-b from-black via-zinc-900 to-zinc-50 sm:h-24 md:h-28"
    />
  );
}

const examMarqueeContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.08 },
  },
};

const examMarqueeItem = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: LANDING_DURATION, ease: LANDING_EASE },
  },
};

export function ExamsMarqueeStrip() {
  const names = [
    "SAT",
    "ACT",
    "AP",
    "GRE",
    "MCAT",
    "NEET",
    "JEE",
    "CAT",
    "CA Foundation",
    "GMAT",
    "LSAT",
  ];
  return (
    <section className="border-y border-black/[0.06] bg-zinc-50 py-14 font-barlow md:py-16">
      <div className="container mx-auto px-4 text-center md:px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={LANDING_VIEWPORT}
          transition={{ duration: LANDING_DURATION, ease: LANDING_EASE }}
          className="liquid-glass-light mx-auto mb-8 inline-block rounded-full px-4 py-1.5 text-xs font-medium text-neutral-700"
        >
          One platform · Many exams
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={LANDING_VIEWPORT}
          transition={{ duration: LANDING_DURATION, delay: 0.05, ease: LANDING_EASE }}
          className="font-heading mb-10 text-3xl italic tracking-tight text-neutral-900 md:text-4xl"
        >
          The tests we&apos;re built for
        </motion.h2>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-14"
          variants={examMarqueeContainer}
          initial="hidden"
          whileInView="show"
          viewport={LANDING_VIEWPORT}
        >
          {names.map((name) => (
            <motion.span
              key={name}
              variants={examMarqueeItem}
              className="font-heading text-2xl italic text-neutral-800 md:text-3xl"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const capabilityBlocks = [
  {
    icon: FileText,
    title: "Practice tests & drills",
    body: "Full-length and section work aligned to official-style frameworks—pace and format that feel like test day.",
  },
  {
    icon: Layers,
    title: "Flashcards",
    body: "High-yield review between longer sessions—built for retention, not endless re-reads.",
  },
  {
    icon: MessageSquare,
    title: "Paths, tutor & uploads",
    body: "A guided path from where you are to test day, plus unlimited AI help—including on your own pages and drills.",
  },
];

const linkUnderline =
  "font-semibold text-neutral-900 underline decoration-accent-lime/75 underline-offset-[5px] transition-colors hover:decoration-accent-lime";

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-28 border-t border-black/[0.06] bg-gradient-to-b from-white to-zinc-50 py-20 font-barlow md:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={LANDING_VIEWPORT}
          transition={{ duration: LANDING_DURATION, ease: LANDING_EASE }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={LANDING_VIEWPORT}
            transition={{ duration: LANDING_DURATION, ease: LANDING_EASE }}
            className="liquid-glass-light mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-medium text-neutral-700"
          >
            What you get
          </motion.p>
          <h2 className="font-heading text-3xl italic tracking-tight text-neutral-900 md:text-5xl md:leading-[1.05]">
            One subscription per exam.
            <br />
            <span className="text-neutral-600">The whole product—not a stripped tier.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-neutral-600 md:text-lg">
            Practice, flashcards, paths, and unlimited AI. <strong className="text-neutral-900">$9/month per exam (USD)</strong>, cancel
            anytime.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {capabilityBlocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={LANDING_VIEWPORT}
              transition={{ duration: LANDING_DURATION, delay: i * 0.07, ease: LANDING_EASE }}
              whileHover={{ y: -3, transition: { duration: 0.28, ease: LANDING_EASE } }}
              className="rounded-2xl border border-black/[0.08] bg-white/90 p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-lime/25 text-neutral-900">
                <block.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="font-barlow text-lg font-semibold text-neutral-900 md:text-xl">{block.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 md:text-base">{block.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.article
          className="landing-seo-article mx-auto mt-16 max-w-2xl rounded-2xl border border-black/[0.08] bg-white/85 px-6 py-9 text-center shadow-sm backdrop-blur-[2px] md:px-10 md:py-10"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={LANDING_VIEWPORT}
          transition={{ duration: LANDING_DURATION, delay: 0.06, ease: LANDING_EASE }}
        >
          <h2 className="sr-only">Nomoexam SAT ACT GRE MCAT online exam preparation</h2>
          <p className="text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
            Live for <strong className="text-neutral-900">SAT</strong> and <strong className="text-neutral-900">ACT</strong> today. More
            exams are on the roadmap.{" "}
            <Link href="/compare" className={linkUnderline}>
              Compare tests
            </Link>
            {" · "}
            <Link href="/how-it-works" className={linkUnderline}>
              How it works
            </Link>
            {" · "}
            <Link href="/features/nomo-ai" className={linkUnderline}>
              Nomo AI
            </Link>
            .
          </p>
        </motion.article>
      </div>
    </section>
  );
}

