"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAppUrl } from "@/lib/config";
import { MARKETING_EXAMS } from "@/lib/exams-marketing-data";

/**
 * Marketing Site Header - Links to student app for auth/dashboard
 */
export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { scrollY } = useScroll();
  const scrollBlend = useTransform(scrollY, [8, 140], [0, 1], { clamp: true });
  const navBlend = useTransform(scrollBlend, (v) => (isHome ? v : 1));

  const shellBg = useTransform(navBlend, (p) => `rgba(255,255,255,${0.03 + p * 0.65})`);
  const shellBorder = useTransform(navBlend, (p) =>
    p < 0.5 ? `rgba(255,255,255,${0.2 + p * 0.15})` : `rgba(0,0,0,${0.08 + (p - 0.5) * 0.08})`,
  );
  const shellShadow = useTransform(navBlend, (p) => {
    const y = 12 + p * 10;
    const blur = 40 + p * 20;
    const alpha = 0.4 - p * 0.2;
    return `0 ${y}px ${blur}px -12px rgba(0,0,0,${alpha})`;
  });
  const labelColor = useTransform(navBlend, [0, 1], ["rgba(255,255,255,0.95)", "rgba(23,23,23,0.88)"]);

  const [lightChrome, setLightChrome] = useState(!isHome);
  useMotionValueEvent(navBlend, "change", (v) => {
    setLightChrome(v > 0.52);
  });

  const [open, setOpen] = useState(false);
  const [examsOpen, setExamsOpen] = useState(false);

  const linkHoverBg = lightChrome ? "hover:bg-black/[0.06]" : "hover:bg-white/10";

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[100] flex justify-center px-3 pt-3 sm:px-4 md:top-4 md:px-6">
        <motion.div
          className="flex w-full max-w-5xl items-center justify-between gap-2 rounded-2xl border px-3 py-2.5 md:px-5 md:py-3 shadow-2xl"
          style={{
            backgroundColor: shellBg,
            borderColor: shellBorder,
            boxShadow: shellShadow,
            backdropFilter: "saturate(150%) blur(50px)",
            WebkitBackdropFilter: "saturate(150%) blur(50px)",
          }}
        >
          <Link href="/" className="flex min-h-11 min-w-0 shrink-0 items-center gap-2.5 py-1">
            <Image
              src="/logo-icon.png"
              alt="Nomoexam"
              width={40}
              height={40}
              className="h-9 w-9 rounded-xl object-cover shadow-sm md:h-10 md:w-10"
              unoptimized
              priority
            />
            <motion.span
              className="font-barlow text-base font-semibold tracking-tight md:text-lg"
              style={{ color: labelColor }}
            >
              Nomoexam
            </motion.span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            <div
              className="relative"
              onMouseEnter={() => setExamsOpen(true)}
              onMouseLeave={() => setExamsOpen(false)}
            >
              <motion.button
                type="button"
                className={`inline-flex min-h-10 items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  pathname.startsWith('/exams') 
                    ? lightChrome ? 'bg-black/[0.08]' : 'bg-white/15'
                    : linkHoverBg
                }`}
                style={{ color: labelColor }}
                aria-expanded={examsOpen}
              >
                Exams
                <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />
              </motion.button>
              {examsOpen && (
                <div
                  className={`absolute left-0 top-full z-50 mt-2 w-[min(100vw-1.5rem,28rem)] overflow-hidden rounded-xl border shadow-xl ${
                    lightChrome ? "border-black/10 bg-white" : "border-white/20 bg-black/90 backdrop-blur-xl"
                  }`}
                >
                  <Link
                    href="/exams"
                    className={`block border-b px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                      lightChrome
                        ? "border-black/[0.06] text-neutral-900 hover:bg-black/[0.04]"
                        : "border-white/10 text-white hover:bg-white/10"
                    }`}
                  >
                    All exams overview
                  </Link>
                  <div
                    className={`scrollbar-hide max-h-[min(70vh,22rem)] overflow-y-auto px-2 py-2 ${
                      lightChrome ? "" : ""
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-0.5">
                      {MARKETING_EXAMS.map((exam) => (
                        <Link
                          key={exam.slug}
                          href={`/exams/${exam.slug}`}
                          className={`flex min-h-10 items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
                            lightChrome
                              ? "text-neutral-800 hover:bg-black/[0.04]"
                              : "text-white/90 hover:bg-white/10"
                          }`}
                        >
                          <span className="min-w-0 truncate font-medium">{exam.shortName}</span>
                          {exam.availability === "soon" && (
                            <span
                              className={`shrink-0 text-[10px] font-semibold uppercase tracking-wide ${
                                lightChrome ? "text-neutral-400" : "text-white/45"
                              }`}
                            >
                              Soon
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/compare"
                    className={`block border-t px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                      lightChrome
                        ? "border-black/[0.06] text-neutral-900 hover:bg-black/[0.04]"
                        : "border-white/10 text-white hover:bg-white/10"
                    }`}
                  >
                    Compare tests &amp; global prep platforms
                  </Link>
                </div>
              )}
            </div>
            <motion.div style={{ color: labelColor }}>
              <Link
                href="/#product-tour"
                className={`flex min-h-10 items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  pathname === '/' && typeof window !== 'undefined' && window.location.hash === '#product-tour'
                    ? lightChrome ? 'bg-black/[0.08]' : 'bg-white/15'
                    : linkHoverBg
                }`}
              >
                Product
              </Link>
            </motion.div>
            <motion.div style={{ color: labelColor }}>
              <Link
                href="/how-it-works"
                className={`flex min-h-10 items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  pathname === '/how-it-works'
                    ? lightChrome ? 'bg-black/[0.08]' : 'bg-white/15'
                    : linkHoverBg
                }`}
              >
                How it works
              </Link>
            </motion.div>
            <motion.div style={{ color: labelColor }}>
              <Link
                href="/compare"
                className={`flex min-h-10 items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  pathname.startsWith('/compare')
                    ? lightChrome ? 'bg-black/[0.08]' : 'bg-white/15'
                    : linkHoverBg
                }`}
              >
                Compare
              </Link>
            </motion.div>
            <motion.div style={{ color: labelColor }}>
              <Link
                href="/pricing"
                className={`flex min-h-10 items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  pathname === '/pricing'
                    ? lightChrome ? 'bg-black/[0.08]' : 'bg-white/15'
                    : linkHoverBg
                }`}
              >
                Pricing
              </Link>
            </motion.div>
            <motion.div style={{ color: labelColor }}>
              <Link
                href="/contact"
                className={`flex min-h-10 items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  pathname === '/contact'
                    ? lightChrome ? 'bg-black/[0.08]' : 'bg-white/15'
                    : linkHoverBg
                }`}
              >
                Contact
              </Link>
            </motion.div>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a href={getAppUrl("/auth")}>
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-full font-barlow font-medium transition-all duration-500 ease-out ${
                  lightChrome ? "text-neutral-800 hover:bg-black/[0.06]" : "text-white hover:bg-white/10"
                }`}
              >
                Sign in
              </Button>
            </a>
            <Link href="/pricing">
              <Button
                size="sm"
                className={`rounded-full px-4 font-barlow font-semibold transition-all duration-500 ease-out ${
                  lightChrome
                    ? "bg-neutral-900 text-white hover:bg-neutral-800"
                    : "bg-white text-neutral-900 hover:bg-white/90"
                }`}
              >
                Get access
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <motion.button
            type="button"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg lg:hidden"
            style={{ color: labelColor }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </motion.div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 top-[4.75rem] z-[99] max-h-[min(70vh,calc(100dvh-6rem))] overflow-y-auto rounded-2xl border border-black/10 bg-white/95 p-4 shadow-xl backdrop-blur-xl sm:inset-x-4 sm:top-[5.25rem] lg:hidden"
          >
            <div className="flex flex-col gap-1 font-barlow">
              <Link
                href="/exams"
                className="rounded-lg px-3 py-3 text-base font-medium text-neutral-900"
                onClick={() => setOpen(false)}
              >
                All exams overview
              </Link>
              <div className="rounded-xl border border-black/[0.06] bg-zinc-50/80 px-2 py-2">
                <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">Exam guides</p>
                <div className="scrollbar-hide grid max-h-52 grid-cols-2 gap-1 overflow-y-auto">
                  {MARKETING_EXAMS.map((exam) => (
                    <Link
                      key={exam.slug}
                      href={`/exams/${exam.slug}`}
                      className="rounded-lg px-2.5 py-2 text-sm font-medium text-neutral-800 hover:bg-white"
                      onClick={() => setOpen(false)}
                    >
                      {exam.shortName}
                      {exam.availability === "soon" ? (
                        <span className="ml-1 text-[10px] font-semibold uppercase text-neutral-400">Soon</span>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/compare"
                className="rounded-lg px-3 py-3 text-base font-semibold text-neutral-900"
                onClick={() => setOpen(false)}
              >
                Compare tests &amp; platforms
              </Link>
              <Link
                href="/#product-tour"
                className="rounded-lg px-3 py-3 text-base text-neutral-800"
                onClick={() => setOpen(false)}
              >
                Product
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-lg px-3 py-3 text-base text-neutral-800"
                onClick={() => setOpen(false)}
              >
                How it works
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg px-3 py-3 text-base text-neutral-800"
                onClick={() => setOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="rounded-lg px-3 py-3 text-base text-neutral-800"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/features/nomo-ai"
                className="rounded-lg px-3 py-3 text-base text-neutral-800"
                onClick={() => setOpen(false)}
              >
                Nomo AI
              </Link>
              <hr className="my-2 border-black/10" />
              <a href={getAppUrl("/auth")} onClick={() => setOpen(false)}>
                <Button variant="outline" className="mt-1 w-full rounded-full" size="lg">
                  Sign in
                </Button>
              </a>
              <Link href="/pricing" onClick={() => setOpen(false)}>
                <Button className="mt-2 w-full rounded-full" size="lg">
                  Get access
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
