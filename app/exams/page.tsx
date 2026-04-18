import Link from "next/link";
import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import type { Metadata } from "next";
import { getAppUrl, marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData } from "@/lib/schema";
import { EXAM_HUB_CATEGORY_ORDER, MARKETING_EXAMS } from "@/lib/exams-marketing-data";
import { MKT } from "@/lib/marketing-ui";
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Brain,
  Stethoscope,
  Scale,
  Trophy,
  Languages,
  Calculator,
  ChevronRight,
} from "lucide-react";

const iconMap = {
  GraduationCap,
  BookOpen,
  Brain,
  Briefcase,
  Stethoscope,
  Scale,
  Trophy,
  Languages,
  Calculator,
} as const;

const canonical = marketingAbsoluteUrl("/exams");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "Exam Prep for SAT, ACT, GRE, GMAT, MCAT, LSAT & More | NomoExam",
  description:
    "Prepare for standardized tests with NomoExam. Practice tests, AI tutoring, flashcards, and study plans for SAT, ACT, GRE, GMAT, MCAT, LSAT, TOEFL, NEET, JEE, CAT, and more.",
  alternates: { canonical },
  keywords: [
    "exam preparation",
    "SAT prep",
    "ACT prep",
    "GRE prep",
    "GMAT prep",
    "MCAT prep",
    "LSAT prep",
    "NEET prep",
    "JEE prep",
    "CAT prep",
    "standardized test prep",
    "test preparation platform",
    "online test prep",
    "NomoExam",
  ],
  openGraph: {
    title: "Prepare for Any Exam | NomoExam",
    description:
      "All-in-one platform for SAT, ACT, GRE, GMAT, MCAT, LSAT, and more. Practice tests, AI tutor, and personalized study plans.",
    url: canonical,
    siteName: "NomoExam",
    type: "website",
    images: [{ url: og, width: 1200, height: 630, alt: "NomoExam Exams" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prepare for Any Exam | NomoExam",
    description: "SAT, ACT, GRE, GMAT, MCAT, LSAT & more. One platform for all your test prep needs.",
    images: [og],
  },
};

const examsByCategory = EXAM_HUB_CATEGORY_ORDER.map((category) => ({
  category,
  exams: MARKETING_EXAMS.filter((e) => e.category === category),
})).filter((g) => g.exams.length > 0);

export default function ExamsPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "Exams", url: marketingAbsoluteUrl("/exams") },
        ]}
      />
      <div className={`${MKT.pageSection} py-20 md:py-32`}>
        <div className={`${MKT.container} relative`}>
          <div className="mb-16 text-center">
            <p className={`${MKT.badgeLight} mx-auto mb-5`}>All Exams</p>
            <h1 className={`${MKT.h1OnLight} mb-6 max-w-4xl mx-auto`}>
              Prepare for any exam
              <br />
              <span className="text-neutral-600">with one platform</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base font-medium text-neutral-600 md:text-lg">
              Deep pages per exam—what&apos;s live, what&apos;s next, and how NomoExam fits. Full practice and AI are included in your
              subscription.
            </p>
          </div>

          <div className="space-y-14 md:space-y-20">
            {examsByCategory.map(({ category, exams }) => (
              <div key={category}>
                <h2 className="font-barlow mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">{category}</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {exams.map((exam) => {
                    const Icon = iconMap[exam.icon];
                    return (
                      <Link
                        key={exam.slug}
                        href={`/exams/${exam.slug}`}
                        className={`${MKT.card} ${MKT.cardHover} group relative flex min-h-[280px] flex-col overflow-hidden p-6 transition-all hover:-translate-y-1`}
                      >
                        {exam.popular && (
                          <div className="absolute right-4 top-4">
                            <span className="rounded-full bg-accent-lime px-2.5 py-1 text-xs font-semibold text-black">Popular</span>
                          </div>
                        )}

                        <div className="mb-3">
                          <div className={`${MKT.iconTile} ${MKT.iconTileSm} mb-4`}>
                            <Icon className="h-6 w-6" strokeWidth={2} />
                          </div>
                          <h3 className="font-barlow text-2xl font-bold text-neutral-900">{exam.shortName}</h3>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">{exam.fullName}</p>
                        </div>

                        <p className="mb-6 flex-1 text-sm font-medium leading-relaxed text-neutral-600">{exam.description}</p>

                        <span className={`${MKT.btnPrimary} mt-auto w-full justify-center px-4 py-2.5 text-sm transition-transform group-hover:translate-x-0.5 sm:w-auto`}>
                          View {exam.shortName} guide
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center md:mt-24">
            <div className={`${MKT.card} mx-auto max-w-3xl text-left md:p-12 md:text-center`}>
              <h2 className={`${MKT.h2Section} mb-2`}>Why NomoExam</h2>
              <p className="mb-8 text-sm font-medium text-neutral-600 md:text-base">
                One subscription per exam (USD)—practice, flashcards, paths, and unlimited AI.
              </p>
              <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
                <div>
                  <div className="font-barlow text-3xl font-bold text-neutral-900">12+</div>
                  <p className="mt-1 text-sm font-medium text-neutral-600">Exam hubs with guides and status</p>
                </div>
                <div>
                  <div className="font-barlow text-3xl font-bold text-neutral-900">AI</div>
                  <p className="mt-1 text-sm font-medium text-neutral-600">Explanations and tutor in the full app</p>
                </div>
                <div>
                  <div className="font-barlow text-3xl font-bold text-neutral-900">Simple Pricing</div>
                  <p className="mt-1 text-sm font-medium text-neutral-600">Per exam / month, cancel anytime</p>
                </div>
              </div>
              <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Link href="/download-exam-app" className={`${MKT.btnPrimary} px-8 py-4 text-base`}>
                  Download Exam App
                  <ChevronRight className="h-5 w-5" />
                </Link>
                <Link href="/pricing" className={`${MKT.btnOutlineLight} px-8 py-4 text-base`}>
                  View pricing
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-neutral-600">
                <Link href="/free-mock-test-app" className="transition-colors hover:text-primary">
                  Free Mock Tests
                </Link>
                <span className="text-neutral-300">·</span>
                <Link href="/study-app-for-students" className="transition-colors hover:text-primary">
                  Study App for Students
                </Link>
                <span className="text-neutral-300">·</span>
                <a href={getAppUrl("/auth")} className="transition-colors hover:text-primary">
                  Sign in / Sign up
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Exam Preparation Guides */}
        <div className={`${MKT.container} py-12 md:py-16`}>
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <h2 className={`${MKT.h2Section} mb-3`}>Exam Preparation Guides</h2>
              <p className={MKT.leadOnLight}>
                Expert strategies and study plans to help you succeed
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/how-to-prepare-for-sat"
                className={`group ${MKT.card} ${MKT.cardHover} block hover:border-primary/30`}
              >
                <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900 transition-colors group-hover:text-primary">
                  How to Prepare for SAT
                </h3>
                <p className="text-sm font-medium text-neutral-600">
                  Complete 2026 guide with proven strategies and study plans
                </p>
              </Link>

              <Link
                href="/sat-study-plan"
                className={`group ${MKT.card} ${MKT.cardHover} block hover:border-primary/30`}
              >
                <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900 transition-colors group-hover:text-primary">
                  SAT Study Plan
                </h3>
                <p className="text-sm font-medium text-neutral-600">
                  3-month schedule with daily routines to reach 1500+
                </p>
              </Link>

              <Link
                href="/mock-test-strategy"
                className={`group ${MKT.card} ${MKT.cardHover} block hover:border-primary/30`}
              >
                <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900 transition-colors group-hover:text-primary">
                  Mock Test Strategy
                </h3>
                <p className="text-sm font-medium text-neutral-600">
                  Master practice tests with expert analysis techniques
                </p>
              </Link>

              <Link
                href="/how-to-prepare-for-jee"
                className={`group ${MKT.card} ${MKT.cardHover} block hover:border-primary/30`}
              >
                <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900 transition-colors group-hover:text-primary">
                  How to Prepare for JEE
                </h3>
                <p className="text-sm font-medium text-neutral-600">
                  2-year strategy for JEE Main & Advanced success
                </p>
              </Link>

              <Link
                href="/neet-preparation-strategy"
                className={`group ${MKT.card} ${MKT.cardHover} block hover:border-primary/30`}
              >
                <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900 transition-colors group-hover:text-primary">
                  NEET Preparation Strategy
                </h3>
                <p className="text-sm font-medium text-neutral-600">
                  18-month guide for medical exam aspirants
                </p>
              </Link>

              <Link
                href="/exam-preparation-app"
                className={`group ${MKT.card} ${MKT.cardHover} block hover:border-primary/30`}
              >
                <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900 transition-colors group-hover:text-primary">
                  Get the App
                </h3>
                <p className="text-sm font-medium text-neutral-600">
                  Download for Android with AI tutor and unlimited practice
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MarketingPageShell>
  );
}
