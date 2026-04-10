import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Compare Exams & Test Prep Platforms | NomoExam",
  description: "Compare SAT vs ACT, GRE vs GMAT, and other standardized tests. Find the right exam for your goals and compare NomoExam with other test prep platforms.",
  alternates: { canonical: "https://nomoexam.com/compare" },
  keywords: [
    "compare exams",
    "SAT vs ACT",
    "GRE vs GMAT",
    "test comparison",
    "NomoExam vs competitors",
    "exam prep comparison"
  ],
  openGraph: {
    title: "Compare Exams & Test Prep Platforms | NomoExam",
    description:
      "Side-by-side guides for SAT vs ACT, GRE vs GMAT, and how NomoExam compares to other prep platforms.",
    url: "https://nomoexam.com/compare",
    siteName: "NomoExam",
    type: "website",
    images: [{ url: "https://nomoexam.com/og-image.svg", width: 1200, height: 630, alt: "NomoExam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare Exams & Test Prep Platforms | NomoExam",
    description:
      "Choose the right test and prep stack with NomoExam comparison guides.",
    images: ["https://nomoexam.com/og-image.svg"],
  },
};

type ExamComparisonCard = {
  title: string;
  description: string;
  href: string;
  category: string;
  popularity?: string;
  /** Avoid linking to routes that do not exist yet (SEO: no 404s from internal links). */
  comingSoon?: boolean;
};

const examComparisons: ExamComparisonCard[] = [
  {
    title: "SAT vs ACT",
    description: "Comparing the two most popular college admission tests. Which one is right for you?",
    href: "/compare/sat-vs-act",
    category: "Undergraduate",
    popularity: "Most Popular",
  },
  {
    title: "GRE vs GMAT",
    description: "Graduate school admission tests compared. MBA vs other graduate programs.",
    href: "/compare/gre-vs-gmat",
    category: "Graduate",
    popularity: "High Demand",
  },
  {
    title: "IELTS vs TOEFL",
    description: "English language proficiency tests for international students and immigration.",
    href: "/compare/ielts-vs-toefl",
    category: "Language",
    popularity: "Coming Soon",
    comingSoon: true,
  },
];

type PlatformComparisonCard = {
  title: string;
  description: string;
  href: string;
  category: string;
  comingSoon?: boolean;
};

const platformComparisons: PlatformComparisonCard[] = [
  {
    title: "NomoExam vs Khan Academy",
    description: "How NomoExam's AI-powered prep compares to Khan Academy's free resources.",
    href: "/compare/nomoexam-vs-khan-academy",
    category: "Platforms",
  },
  {
    title: "NomoExam vs Magoosh",
    description: "Feature-by-feature comparison of two popular online test prep platforms.",
    href: "/compare/nomoexam-vs-magoosh",
    category: "Platforms",
    comingSoon: true,
  },
];

export default function ComparePage() {
  return (
    <MarketingPageShell>
      <main>
        {/* Hero Section */}
        <section className={MKT.darkHero}>
          <div className={`${MKT.container} pt-20 md:pt-28 py-16 md:py-20`}>
            <div className="mx-auto max-w-4xl text-center">
              <div className={`${MKT.badgeDark} mx-auto mb-6`}>
                <Scale className="h-4 w-4 text-accent-lime" aria-hidden />
                <span>Guides &amp; tradeoffs</span>
              </div>
              <h1 className={`${MKT.h1Hero} mb-6`}>Compare exams &amp; prep platforms</h1>
              <p className={`${MKT.leadOnDark} mx-auto max-w-3xl`}>
                Side-by-side comparisons to help you choose the right test and how Nomoexam fits your prep.
              </p>
            </div>
          </div>
        </section>

        {/* Exam Comparisons */}
        <section className={`${MKT.container} py-12 md:py-16`}>
          <div className="mb-10">
            <h2 className={`${MKT.h2Section} mb-3`}>Compare exams</h2>
            <p className={MKT.leadOnLight}>
              Not sure which standardized test to take? We break down the key differences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examComparisons.map((comparison) =>
              comparison.comingSoon ? (
                <div
                  key={comparison.href}
                  className="rounded-2xl border-2 border-dashed border-black/15 bg-zinc-100/80 p-6 text-neutral-600"
                  role="status"
                  aria-label={`${comparison.title} — coming soon`}
                >
                  <div className="mb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="liquid-glass-light inline-block rounded-full px-3 py-1 text-xs font-semibold text-neutral-700">
                        {comparison.category}
                      </span>
                      {comparison.popularity && (
                        <span className="text-xs font-semibold text-accent-lime">{comparison.popularity}</span>
                      )}
                    </div>
                    <h3 className="font-barlow text-xl font-semibold text-neutral-900">{comparison.title}</h3>
                  </div>
                  <p className="mb-4 min-h-[48px] text-sm">{comparison.description}</p>
                  <p className="text-sm font-medium text-neutral-500">Guide coming soon</p>
                </div>
              ) : (
                <Link
                  key={comparison.href}
                  href={comparison.href}
                  className={`group ${MKT.card} ${MKT.cardHover} block hover:border-accent-lime/35`}
                >
                  <div className="mb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="liquid-glass-light inline-block rounded-full px-3 py-1 text-xs font-semibold text-neutral-700">
                        {comparison.category}
                      </span>
                      {comparison.popularity && (
                        <span className="text-xs font-semibold text-accent-lime">
                          {comparison.popularity}
                        </span>
                      )}
                    </div>
                    <h3 className="font-barlow text-xl font-semibold text-neutral-900 transition-colors group-hover:text-neutral-950">
                      {comparison.title}
                    </h3>
                  </div>
                  <p className="mb-4 min-h-[48px] text-sm text-neutral-600">{comparison.description}</p>
                  <div className="flex items-center text-sm font-semibold text-neutral-900">
                    View comparison
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            )}
          </div>
        </section>

        {/* Platform Comparisons */}
        <section className="border-t border-black/[0.06] bg-white py-12 md:py-16">
          <div className={MKT.container}>
            <div className="mb-10">
              <h2 className={`${MKT.h2Section} mb-3`}>Compare prep platforms</h2>
              <p className={MKT.leadOnLight}>
                See how Nomoexam stacks up against other test preparation platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {platformComparisons.map((comparison) =>
                comparison.comingSoon ? (
                  <div
                    key={comparison.href}
                    className="rounded-2xl border-2 border-dashed border-black/15 bg-zinc-50 p-6 text-neutral-600"
                    role="status"
                    aria-label={`${comparison.title} — coming soon`}
                  >
                    <div className="mb-4">
                      <span className="mb-2 inline-block rounded-full bg-accent-lime/20 px-3 py-1 text-xs font-semibold text-neutral-800">
                        {comparison.category}
                      </span>
                      <h3 className="font-barlow text-xl font-semibold text-neutral-900">{comparison.title}</h3>
                    </div>
                    <p className="mb-4 text-sm">{comparison.description}</p>
                    <p className="text-sm font-medium text-neutral-500">Comparison coming soon</p>
                  </div>
                ) : (
                  <Link
                    key={comparison.href}
                    href={comparison.href}
                    className={`group ${MKT.card} ${MKT.cardHover} block hover:border-accent-lime/35`}
                  >
                    <div className="mb-4">
                      <span className="mb-2 inline-block rounded-full bg-accent-lime/20 px-3 py-1 text-xs font-semibold text-neutral-800">
                        {comparison.category}
                      </span>
                      <h3 className="font-barlow text-xl font-semibold text-neutral-900 transition-colors group-hover:text-neutral-950">
                        {comparison.title}
                      </h3>
                    </div>
                    <p className="mb-4 text-sm text-neutral-600">{comparison.description}</p>
                    <div className="flex items-center text-sm font-semibold text-neutral-900">
                      Read comparison
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`${MKT.container} py-12 md:py-16`}>
          <div className={`mx-auto max-w-3xl rounded-2xl border border-black/[0.08] bg-white/90 p-8 text-center shadow-sm md:p-12`}>
            <h2 className={`${MKT.h2Section} mb-4`}>Ready to start?</h2>
            <p className={`${MKT.leadOnLight} mb-8`}>
              <strong className="text-neutral-900">$9/month per exam (USD)</strong>, full access for that test. Cancel anytime.
            </p>
            <Link href="/pricing" className={MKT.btnPrimary}>
              View pricing
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
