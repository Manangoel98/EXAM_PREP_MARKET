import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import Link from "next/link";
import { ANDROID_APP, marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, AndroidAppStructuredData } from "@/lib/schema";
import { Download, Smartphone, CheckCircle2, Trophy, Zap } from "lucide-react";

const canonical = marketingAbsoluteUrl("/free-mock-test-app");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "Free Mock Test App — Practice Tests for SAT, ACT, GRE & More | NomoExam",
  description: "Download free mock test app for Android. Full-length practice tests for SAT, ACT, GRE, GMAT, JEE, NEET with instant scoring & AI explanations. Start practicing today.",
  alternates: { canonical },
  keywords: [
    "free mock test app",
    "free practice test app",
    "free exam app",
    "mock test app free download",
    "free SAT mock test",
    "free ACT practice test",
    "free GRE mock test",
    "free JEE mock test",
    "free NEET mock test",
    "practice test app free",
  ],
  openGraph: {
    title: "Free Mock Test App — NomoExam Practice Tests",
    description: "Free full-length mock tests for all major exams. Instant scoring, detailed analytics, AI explanations.",
    url: canonical,
    siteName: "NomoExam",
    type: "website",
    images: [{ url: og, width: 1200, height: 630, alt: "NomoExam Free Mock Test App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Mock Test App — Download Now",
    description: "Free practice tests for SAT, ACT, GRE, GMAT, JEE, NEET & more. Download on Android.",
    images: [og],
  },
};

export default function FreeMockTestAppPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "Free Mock Test App", url: canonical },
        ]}
      />
      <AndroidAppStructuredData />

      <main>
        {/* Hero Section */}
        <section className={`${MKT.darkHero} pt-20 md:pt-28`}>
          <div className={`${MKT.container} py-16 md:py-24`}>
            <div className="mx-auto max-w-4xl text-center">
              <div className={`${MKT.badgeDark} mx-auto mb-6`}>
                <Trophy className="h-4 w-4 text-accent-lime" />
                <span>Free to Try</span>
              </div>
              <h1 className={`${MKT.h1Hero} mb-6`}>
                Free Mock Test App
                <br />
                <span className="text-white/85">for SAT, ACT, GRE, JEE, NEET & More</span>
              </h1>
              <p className={`${MKT.leadOnDark} mx-auto mb-8 max-w-3xl`}>
                Download NomoExam for free and access sample mock tests for all major exams. Full-length practice
                tests with instant scoring, detailed analytics, and AI explanations—absolutely free to try before
                subscribing.
              </p>

              <div className="mb-10">
                <a
                  href={ANDROID_APP.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent-lime px-10 py-5 text-lg font-bold text-black shadow-xl transition-all hover:scale-105 hover:bg-accent-lime/90"
                >
                  <Download className="h-6 w-6" />
                  Download Free Mock Test App
                </a>
                <p className="mt-4 text-sm font-medium text-white/70">
                  Free sample tests · No credit card · Start immediately
                </p>
              </div>

              <div className="mx-auto grid max-w-3xl grid-cols-3 gap-4 md:gap-6">
                {[
                  { value: "Free", label: "Sample Tests" },
                  { value: "Instant", label: "Scoring" },
                  { value: "AI", label: "Explanations" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="font-barlow text-2xl font-bold text-white md:text-3xl">{stat.value}</div>
                    <p className="mt-1 text-xs font-medium text-white/70 md:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's Free Section */}
        <section className="border-t border-black/[0.06] bg-white py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-4xl">
              <h2 className={`${MKT.h2Section} mb-10 text-center`}>
                What's included in the free mock test app?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Sample Full-Length Mock Tests",
                    desc: "Get free access to sample full-length practice tests for SAT, ACT, GRE, GMAT, JEE, NEET, and more. Experience the complete test format and difficulty level before subscribing.",
                  },
                  {
                    title: "Instant Score Reports",
                    desc: "See your results immediately after completing a mock test. Get section-by-section breakdowns, percentile rankings, and predicted scores—all for free.",
                  },
                  {
                    title: "AI-Powered Explanations",
                    desc: "Every question in the free mock tests includes detailed AI explanations. Understand why you got questions wrong and learn the correct approach.",
                  },
                  {
                    title: "Topic-Wise Practice Questions",
                    desc: "Access free practice questions organized by topic. Try questions from each subject area before deciding to upgrade for unlimited access.",
                  },
                  {
                    title: "No Credit Card Required",
                    desc: "Download the app and start taking free mock tests immediately—no payment details needed. Only subscribe when you're ready for full access.",
                  },
                ].map((item) => (
                  <div key={item.title} className={MKT.card}>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 rounded-full bg-accent-lime/20 p-2">
                        <CheckCircle2 className="h-6 w-6 text-accent-lime" />
                      </div>
                      <div>
                        <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">{item.title}</h3>
                        <p className="text-sm font-medium leading-relaxed text-neutral-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Free vs Paid */}
        <section className="border-t border-black/[0.06] bg-zinc-50 py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-4xl">
              <h2 className={`${MKT.h2Section} mb-10 text-center`}>Free vs full access</h2>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Free Column */}
                <div className="rounded-2xl border-2 border-black/10 bg-white p-8">
                  <div className="mb-6">
                    <h3 className="font-barlow mb-2 text-2xl font-bold text-neutral-900">Free</h3>
                    <p className="text-sm font-medium text-neutral-600">Perfect for trying the app</p>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Sample mock tests for all exams",
                      "50+ free practice questions",
                      "Instant scoring & reports",
                      "Basic AI explanations",
                      "Access to app features demo",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-lime" />
                        <span className="text-sm font-medium text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Paid Column */}
                <div className="rounded-2xl border-2 border-primary bg-white p-8 shadow-lg">
                  <div className="mb-6">
                    <h3 className="font-barlow mb-2 text-2xl font-bold text-neutral-900">Full Access</h3>
                    <p className="text-sm font-medium text-neutral-600">View pricing</p>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "10,000+ practice questions",
                      "Unlimited full-length mock tests",
                      "Unlimited AI tutor access",
                      "Personalized study plans",
                      "Advanced analytics & predictions",
                      "Smart flashcards (spaced repetition)",
                      "Offline study mode",
                      "Priority support",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-lime" />
                        <span className="text-sm font-medium text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="/pricing" className={`${MKT.btnPrimary} w-full text-center`}>
                      View Pricing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exams Supported */}
        <section className="border-t border-black/[0.06] bg-white py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className={`${MKT.h2Section} mb-6`}>
                Free mock tests available for all major exams
              </h2>
              <p className={`${MKT.leadOnLight} mb-10`}>
                Try sample mock tests for any of these exams before subscribing:
              </p>
              <div className="grid grid-cols-2 gap-4 text-left md:grid-cols-3 lg:grid-cols-4">
                {[
                  { name: "SAT", link: "/sat-prep-app" },
                  { name: "ACT", link: "/act-prep-app" },
                  { name: "GRE", link: "/gre-prep-app" },
                  { name: "GMAT", link: "/gmat-prep-app" },
                  { name: "JEE", link: "/jee-prep-app" },
                  { name: "NEET", link: "/neet-prep-app" },
                  { name: "MCAT", link: "/mcat-prep-app" },
                  { name: "LSAT", link: "/lsat-prep-app" },
                ].map((exam) => (
                  <Link
                    key={exam.name}
                    href={exam.link}
                    className="flex items-center gap-3 rounded-lg border border-black/10 bg-zinc-50 p-4 transition-all hover:border-primary/30 hover:bg-white hover:shadow-md"
                  >
                    <Zap className="h-5 w-5 text-accent-lime" />
                    <span className="font-barlow font-semibold text-neutral-900">{exam.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/exams" className={`${MKT.btnPrimary} px-8 py-4 text-base`}>
                  View All Exam Guides
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Start Free */}
        <section className="border-t border-black/[0.06] bg-zinc-50 py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-3xl">
              <h2 className={`${MKT.h2Section} mb-8 text-center`}>
                Why start with free mock tests?
              </h2>
              <div className="space-y-4">
                <div className={MKT.card}>
                  <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">Test the App Experience</h3>
                  <p className="text-sm font-medium leading-relaxed text-neutral-600">
                    See how NomoExam works before committing. Try the interface, practice questions, and scoring system
                    to make sure it fits your study style.
                  </p>
                </div>
                <div className={MKT.card}>
                  <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">Assess Your Current Level</h3>
                  <p className="text-sm font-medium leading-relaxed text-neutral-600">
                    Take a free mock test to understand your baseline score. This helps you set realistic goals and
                    track your improvement over time.
                  </p>
                </div>
                <div className={MKT.card}>
                  <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">Risk-Free Trial</h3>
                  <p className="text-sm font-medium leading-relaxed text-neutral-600">
                    No payment information required. Download, try the free features, and only subscribe if you find
                    value in the full content library.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-black/[0.06] bg-neutral-dark py-16 text-white md:py-24">
          <div className={`${MKT.container} text-center`}>
            <Trophy className="mx-auto mb-6 h-16 w-16 text-accent-lime" />
            <h2 className="font-barlow mb-4 text-3xl font-bold md:text-4xl">
              Download the free mock test app and start practicing today
            </h2>
            <p className="mb-8 text-base font-medium text-white/80 md:text-lg">
              Try before you buy. Free sample tests, instant scoring, AI explanations—no credit card required.
            </p>
            <a
              href={ANDROID_APP.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent-lime px-8 py-4 text-base font-bold text-black transition-all hover:bg-accent-lime/90"
            >
              <Download className="h-5 w-5" />
              Download Free Now
            </a>
            <p className="mt-6 text-sm font-medium text-white/60">
              Free forever · Upgrade anytime · Cancel anytime
            </p>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
