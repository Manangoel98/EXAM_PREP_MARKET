"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MKT } from "@/lib/marketing-ui";

interface ShowcaseItem {
  id: string;
  badge: string;
  /** Short label for step rail (optional; falls back to badge) */
  stepLabel?: string;
  title: string;
  description: string;
  highlights: string[];
  screenshotPath: string;
  screenshotAlt: string;
}

interface ScrollTriggeredShowcaseProps {
  items: ShowcaseItem[];
}

const screenshotVariants = {
  enter: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    filter: "blur(10px)",
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.95,
    filter: "blur(10px)",
    transition: {
      duration: 0.4,
    },
  },
};

export function ScrollTriggeredShowcase({ items }: ScrollTriggeredShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const skipObserver = useRef(false);

  const focusStep = useCallback(
    (index: number) => {
      if (index < 0 || index >= items.length) return;
      skipObserver.current = true;
      setActiveIndex(index);
      requestAnimationFrame(() => {
        sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      window.setTimeout(() => {
        skipObserver.current = false;
      }, 850);
    },
    [items.length],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (skipObserver.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: "-18% 0px -18% 0px",
      },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [items.length]);

  return (
    <section
      id="product-tour"
      aria-labelledby="product-tour-heading"
      className={`relative scroll-mt-44 pt-24 pb-20 md:scroll-mt-52 md:pt-32 md:pb-32 ${MKT.pageSection}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center md:mb-20">
          <p className="liquid-glass-light mx-auto mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-medium text-neutral-700">
            Product Tour
          </p>
          <h2
            id="product-tour-heading"
            className="font-heading text-3xl italic tracking-tight text-neutral-900 md:text-5xl"
          >
            Everything you need
            <br />
            <span className="text-neutral-600">in one powerful platform</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-neutral-600 md:text-lg">
            Scroll the page, or use the steps below to jump—each screen pairs with the copy on the right.
          </p>
        </div>

        <div className="relative grid gap-10 pt-2 lg:grid-cols-2 lg:gap-16 lg:pt-4">
          {/* Sticky visual + step rail (desktop) — top-* must clear fixed header + safe area */}
          <div className="relative hidden lg:block">
            <div className="sticky top-32 flex flex-col gap-6 lg:top-36">
              <div className="relative aspect-[4/3] w-full max-h-[min(520px,52vh)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    variants={screenshotVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-black/10 bg-white shadow-2xl">
                      <Image
                        src={items[activeIndex].screenshotPath}
                        alt={items[activeIndex].screenshotAlt}
                        fill
                        className="object-cover object-top"
                        priority={activeIndex === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="space-y-4 rounded-2xl border border-black/[0.08] bg-white/90 p-4 shadow-sm backdrop-blur-sm">
                <div className="flex items-center justify-between gap-3 text-xs text-neutral-500">
                  <span className="shrink-0 tabular-nums">
                    Step {activeIndex + 1} of {items.length}
                  </span>
                  <span className="min-w-0 truncate text-right font-semibold text-neutral-800">
                    {items[activeIndex].stepLabel ?? items[activeIndex].badge}
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
                  <motion.div
                    className="h-full rounded-full bg-accent-lime"
                    initial={false}
                    animate={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
                    transition={{ type: "spring", stiffness: 280, damping: 32 }}
                  />
                </div>
                <div
                  className="scrollbar-hide -mx-1 flex max-w-full gap-1.5 overflow-x-auto px-1 pb-1"
                  role="tablist"
                  aria-label="Product tour steps"
                >
                  {items.map((item, index) => {
                    const label = item.stepLabel ?? item.badge;
                    const active = index === activeIndex;
                    return (
                      <button
                        key={item.id}
                        id={`showcase-tab-${item.id}`}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        aria-controls={`showcase-panel-${item.id}`}
                        onClick={() => focusStep(index)}
                        className={`flex min-w-0 shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-left text-[11px] font-semibold transition-colors ${
                          active
                            ? "border-accent-lime bg-accent-lime/20 text-neutral-900"
                            : "border-transparent bg-neutral-100/80 text-neutral-600 hover:bg-neutral-200/80"
                        }`}
                      >
                        <span className="tabular-nums text-neutral-400">{String(index + 1).padStart(2, "0")}</span>
                        <span className="max-w-[6.5rem] truncate">{label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable copy */}
          <div className="space-y-24 md:space-y-32">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                id={`showcase-panel-${item.id}`}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                role="tabpanel"
                aria-labelledby={`showcase-tab-${item.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="min-h-[min(520px,70vh)] scroll-mt-44 md:scroll-mt-52"
              >
                <div className="mb-8 lg:hidden">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border-2 border-black/10 bg-white shadow-xl">
                    <Image
                      src={item.screenshotPath}
                      alt={item.screenshotAlt}
                      fill
                      className="object-cover object-top"
                      sizes="100vw"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <p className="text-xs font-medium text-neutral-500">
                      Step {index + 1} of {items.length}
                    </p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-800 disabled:opacity-40"
                        disabled={index === 0}
                        onClick={() => focusStep(index - 1)}
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-800 disabled:opacity-40"
                        disabled={index === items.length - 1}
                        onClick={() => focusStep(index + 1)}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="liquid-glass-light mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium text-neutral-700">
                      {item.badge}
                    </p>
                    <h3 className="font-barlow text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl lg:text-4xl">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-base font-medium leading-relaxed text-neutral-600 md:text-lg">{item.description}</p>

                  <ul className="space-y-3">
                    {item.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-lime/20">
                          <svg
                            className="h-3 w-3 text-accent-lime"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-neutral-700 md:text-base">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
