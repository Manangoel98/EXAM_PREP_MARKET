import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import type { Metadata } from "next";
import { getAppUrl, marketingAbsoluteUrl } from "@/lib/config";
import {
  Brain,
  FileText,
  BarChart3,
  Calendar,
  Zap,
  Target,
  BookOpen,
  TrendingUp,
  Clock,
  Award,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { BreadcrumbStructuredData } from "@/lib/schema";
import { MKT } from "@/lib/marketing-ui";

const canonical = marketingAbsoluteUrl("/features");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "Features — AI Tutor, Practice Tests, Flashcards & More | NomoExam",
  description:
    "Explore NomoExam's powerful features: 24/7 AI tutor, unlimited practice tests, smart flashcards, personalized study plans, performance analytics, and more. Everything you need to ace your exam.",
  alternates: { canonical },
  keywords: [
    "AI tutor",
    "practice tests",
    "flashcards",
    "study plans",
    "exam prep features",
    "performance analytics",
    "test preparation tools",
    "online learning platform",
  ],
  openGraph: {
    title: "NomoExam Features — Everything You Need to Ace Your Exam",
    description:
      "AI tutor, practice tests, flashcards, study plans, and performance analytics. All-in-one exam prep platform.",
    url: canonical,
    siteName: "NomoExam",
    type: "website",
    images: [
      {
        url: og,
        width: 1200,
        height: 630,
        alt: "NomoExam Features",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NomoExam Features — AI Tutor, Practice Tests & More",
    description: "Everything you need in one platform. AI tutor, practice tests, analytics, and personalized learning.",
    images: [og],
  },
};

const mainFeatures = [
  {
    name: "Nomo AI Tutor",
    description:
      "Your personal 24/7 AI study coach. Ask questions, get instant explanations, and receive step-by-step guidance on any concept. It's like having a private tutor available anytime.",
    icon: Brain,
    href: "/features/nomo-ai",
    highlights: [
      "Instant answers to any question",
      "Step-by-step problem breakdowns",
      "Context-aware responses",
      "Conversational learning",
    ],
  },
  {
    name: "Practice Tests",
    description:
      "Hundreds of full-length, authentic practice exams that mirror real test conditions. Practice under pressure with realistic timers and scoring.",
    icon: FileText,
    href: getAppUrl("/practice-papers"),
    highlights: [
      "Full-length official practice tests",
      "Realistic exam conditions",
      "Instant scoring & feedback",
      "Unlimited retakes",
    ],
  },
  {
    name: "Smart Flashcards",
    description:
      "Master concepts efficiently with our intelligent flashcard system. Spaced repetition ensures you remember what matters most.",
    icon: BookOpen,
    href: getAppUrl("/flashcards"),
    highlights: [
      "Thousands of pre-made cards",
      "Spaced repetition algorithm",
      "Create custom decks",
      "Track mastery progress",
    ],
  },
  {
    name: "Personalized Study Plans",
    description:
      "AI-generated study schedules tailored to your exam date, current level, and available study time. Stay on track with daily tasks and milestones.",
    icon: Calendar,
    href: getAppUrl("/study-plan"),
    highlights: [
      "Custom AI-generated plans",
      "Daily task breakdown",
      "Automatic adjustments",
      "Milestone tracking",
    ],
  },
  {
    name: "Performance Analytics",
    description:
      "Visualize your improvement with detailed charts and insights. Identify strengths, weaknesses, and trends to optimize your study strategy.",
    icon: BarChart3,
    href: getAppUrl("/dashboard"),
    highlights: [
      "Score progression tracking",
      "Subject-wise breakdowns",
      "Time management analysis",
      "Comparative benchmarks",
    ],
  },
  {
    name: "Instant Feedback",
    description:
      "Get comprehensive explanations for every question immediately after submission. Learn from mistakes and understand the reasoning behind correct answers.",
    icon: Zap,
    href: getAppUrl("/practice-papers"),
    highlights: [
      "Detailed answer explanations",
      "Concept tagging",
      "Learn from mistakes",
      "Bookmark difficult questions",
    ],
  },
];

const additionalFeatures = [
  {
    name: "Goal Setting",
    description: "Set target scores and track your progress toward your goals",
    icon: Target,
  },
  {
    name: "Study Streaks",
    description: "Build consistent study habits with daily streak tracking",
    icon: TrendingUp,
  },
  {
    name: "Timed Practice",
    description: "Practice with realistic time constraints to build speed",
    icon: Clock,
  },
  {
    name: "Achievement Badges",
    description: "Earn badges and rewards as you hit milestones",
    icon: Award,
  },
];

export default function FeaturesPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "Features", url: marketingAbsoluteUrl("/features") },
        ]}
      />
      <div className={`${MKT.pageSection} py-20 md:py-32`}>
        <div className={`${MKT.container} relative`}>
          {/* Header */}
          <div className="mb-16 text-center">
            <p className={`${MKT.badgeLight} mx-auto mb-5`}>Platform Features</p>
            <h1 className={`${MKT.h1OnLight} mb-6 max-w-4xl mx-auto`}>
              Everything you need
              <br />
              <span className="text-neutral-600">in one platform</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base font-medium text-neutral-600 md:text-lg">
              NomoExam combines AI-powered tutoring, extensive practice materials, and performance
              analytics to help you achieve your target score.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mainFeatures.map((feature) => {
              const Icon = feature.icon;
              const isExternal = feature.href.startsWith("http");
              const Component = isExternal ? "a" : Link;
              const linkProps = isExternal ? { href: feature.href } : { href: feature.href };

              return (
                <Component
                  key={feature.name}
                  {...linkProps}
                  className={`${MKT.card} ${MKT.cardHover} group relative overflow-hidden transition-all hover:-translate-y-1`}
                >
                  <div className={`${MKT.iconTile} ${MKT.iconTileMd} mb-6`}>
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </div>

                  <h3 className="font-barlow mb-3 text-2xl font-bold text-neutral-900">
                    {feature.name}
                  </h3>

                  <p className="mb-6 text-sm font-medium leading-relaxed text-neutral-600">
                    {feature.description}
                  </p>

                  <ul className="mb-6 space-y-2">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                        <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-lime/20">
                          <svg
                            className="h-2.5 w-2.5 text-accent-lime"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-sm font-semibold text-neutral-900 group-hover:translate-x-1 transition-transform">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </Component>
              );
            })}
          </div>

          {/* Additional Features */}
          <div className="mb-20">
            <h2 className="font-barlow mb-8 text-center text-3xl font-semibold text-neutral-900">
              And much more...
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {additionalFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.name}
                    className={`${MKT.card} text-center`}
                  >
                    <div className={`${MKT.iconTile} ${MKT.iconTileSm} mx-auto mb-4`}>
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <h3 className="font-barlow mb-2 text-lg font-semibold text-neutral-900">
                      {feature.name}
                    </h3>
                    <p className="text-sm font-medium text-neutral-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className={`${MKT.card} mx-auto max-w-3xl md:p-12`}>
              <h2 className={`${MKT.h2Section} mb-4`}>
                Experience all features at an affordable price
              </h2>
              <p className="mb-6 text-base font-medium text-neutral-600">
                No hidden fees. Cancel anytime. Start your free trial today.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href={getAppUrl("/auth")} className={`${MKT.btnPrimary} px-8 py-4 text-base`}>
                  Start Free Trial
                  <ChevronRight className="h-5 w-5" />
                </a>
                <Link href="/pricing" className={`${MKT.btnOutlineLight} px-8 py-4 text-base`}>
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MarketingPageShell>
  );
}
