import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import Link from "next/link";
import { ANDROID_APP, marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, AndroidAppStructuredData } from "@/lib/schema";
import { Download, CheckCircle2, Clock, FileText, BarChart } from "lucide-react";

const canonical = marketingAbsoluteUrl("/mock-test-app");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "Mock Test App for SAT, ACT, GRE — Full-Length Practice Tests | NomoExam",
  description: "Download NomoExam mock test app for Android. Full-length practice tests with instant scoring, detailed analytics, and AI explanations for SAT, ACT, GRE, GMAT, MCAT. Try free.",
  alternates: { canonical },
  keywords: [
    "mock test app",
    "practice test app",
    "SAT mock test app",
    "ACT practice test app",
    "GRE mock test",
    "full-length practice tests",
    "timed mock tests",
    "exam simulation app",
    "test prep app",
    "Android mock test app",
  ],
  openGraph: {
    title: "NomoExam - Mock Test App with Full-Length Practice Tests",
    description: "Realistic exam simulations, instant scoring, detailed analytics. SAT, ACT, GRE & more.",
    url: canonical,
    siteName: "NomoExam",
    type: "website",
    images: [{ url: og, width: 1200, height: 630, alt: "NomoExam Mock Test App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NomoExam Mock Test App - Full-Length Practice Tests",
    description: "Realistic timed practice tests with instant scoring and AI explanations. Download on Android.",
    images: [og],
  },
};

export default function MockTestAppPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "Mock Test App", url: canonical },
        ]}
      />
      <AndroidAppStructuredData />

      <main>
        <section className={`${MKT.darkHero} pt-20 md:pt-28`}>
          <div className={`${MKT.container} py-16 md:py-20`}>
            <div className="mx-auto max-w-4xl text-center">
              <h1 className={`${MKT.h1Hero} mb-6`}>
                Mock Test App with Full-Length
                <br />
                <span className="text-white/85">Practice Tests for SAT, ACT, GRE & More</span>
              </h1>
              <p className={`${MKT.leadOnDark} mx-auto mb-8 max-w-2xl`}>
                Take realistic, timed mock tests that simulate actual exam conditions. Get instant scoring, detailed
                performance analytics, and AI-powered explanations for every question. Available on Android.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={ANDROID_APP.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${MKT.btnPrimary} px-8 py-4 text-base`}
                >
                  <Download className="h-5 w-5" />
                  Download Mock Test App
                </a>
                <Link href="/exams" className={`${MKT.btnOutlineDark} px-8 py-4 text-base`}>
                  View All Exams
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-black/[0.06] bg-white py-16 md:py-24">
          <div className={MKT.container}>
            <h2 className={`${MKT.h2Section} mb-12 text-center`}>
              What makes NomoExam the best mock test app
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: FileText,
                  title: "Full-Length Tests",
                  desc: "Complete practice exams matching official formats and difficulty",
                },
                {
                  icon: Clock,
                  title: "Realistic Timing",
                  desc: "Built-in timers and pacing guides for authentic test conditions",
                },
                {
                  icon: BarChart,
                  title: "Instant Scoring",
                  desc: "Get your results immediately with section-by-section breakdowns",
                },
                {
                  icon: CheckCircle2,
                  title: "AI Explanations",
                  desc: "Understand every answer with step-by-step AI tutor feedback",
                },
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className={MKT.card}>
                    <div className={`${MKT.iconTile} ${MKT.iconTileMd} mb-4`}>
                      <Icon className="h-7 w-7" strokeWidth={2} />
                    </div>
                    <h3 className="font-barlow mb-3 text-xl font-bold text-neutral-900">{f.title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-600">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-black/[0.06] bg-zinc-50 py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-3xl">
              <h2 className={`${MKT.h2Section} mb-10 text-center`}>
                Why mock tests are essential for exam success
              </h2>
              <div className="space-y-6">
                <div className={MKT.card}>
                  <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">
                    Build Speed and Stamina
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-neutral-600">
                    Mock tests train you to work efficiently under time pressure. Regular practice helps you develop the
                    pacing and endurance needed to maintain focus through long exam sections.
                  </p>
                </div>
                <div className={MKT.card}>
                  <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">
                    Identify Weak Areas
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-neutral-600">
                    Detailed analytics reveal exactly which topics and question types need more work. Focus your study
                    time on the areas that will have the biggest impact on your score.
                  </p>
                </div>
                <div className={MKT.card}>
                  <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">
                    Reduce Test Day Anxiety
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-neutral-600">
                    Familiarity breeds confidence. By simulating real test conditions repeatedly, you'll walk into the
                    actual exam feeling prepared and calm—not nervous and uncertain.
                  </p>
                </div>
                <div className={MKT.card}>
                  <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">
                    Track Score Improvement
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-neutral-600">
                    Watch your scores rise as you practice. NomoExam tracks your progress over time and provides
                    predicted score ranges so you know when you're ready for test day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-black/[0.06] bg-white py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className={`${MKT.h2Section} mb-6`}>Supported Exams in the Mock Test App</h2>
              <p className={`${MKT.leadOnLight} mb-10`}>
                Take full-length practice tests for all major standardized exams:
              </p>
              <div className="grid grid-cols-2 gap-4 text-left md:grid-cols-3">
                {["SAT", "ACT", "GRE", "GMAT", "MCAT", "LSAT", "TOEFL", "IELTS", "AP Exams"].map((exam) => (
                  <div key={exam} className="flex items-center gap-3 rounded-lg border border-black/10 bg-zinc-50 p-4">
                    <CheckCircle2 className="h-5 w-5 text-accent-lime" />
                    <span className="font-barlow font-semibold text-neutral-900">{exam}</span>
                  </div>
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

        <section className="border-t border-black/[0.06] bg-neutral-dark py-16 text-white md:py-24">
          <div className={`${MKT.container} text-center`}>
            <h2 className="font-barlow mb-4 text-3xl font-bold md:text-4xl">
              Download the best mock test app and start practicing today
            </h2>
            <p className="mb-8 text-base font-medium text-white/80 md:text-lg">
              Full-length tests, instant scoring, AI explanations—all at an affordable price per exam. Free to download.
            </p>
            <a
              href={ANDROID_APP.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent-lime px-8 py-4 text-base font-bold text-black transition-all hover:bg-accent-lime/90"
            >
              <Download className="h-5 w-5" />
              Get NomoExam on Google Play
            </a>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
