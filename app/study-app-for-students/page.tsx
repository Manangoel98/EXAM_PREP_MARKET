import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import Link from "next/link";
import { ANDROID_APP, marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, AndroidAppStructuredData } from "@/lib/schema";
import { Download, Smartphone, BookOpen, Brain, Target, Zap } from "lucide-react";

const canonical = marketingAbsoluteUrl("/study-app-for-students");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "Study App for Students — SAT, ACT, GRE Prep on Android | NomoExam",
  description: "The ultimate study app for students preparing for SAT, ACT, GRE, GMAT, and more. AI tutor, practice tests, flashcards, personalized plans. Download on Android. Affordable subscription.",
  alternates: { canonical },
  keywords: [
    "study app for students",
    "student study app",
    "best study app",
    "exam study app",
    "SAT study app",
    "ACT study app",
    "GRE study app",
    "test prep app for students",
    "college prep app",
    "Android study app",
  ],
  openGraph: {
    title: "NomoExam - Best Study App for Students (Android)",
    description: "AI-powered study app: SAT, ACT, GRE prep with practice tests, flashcards, and personalized plans.",
    url: canonical,
    siteName: "NomoExam",
    type: "website",
    images: [{ url: og, width: 1200, height: 630, alt: "NomoExam Study App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NomoExam - Study App for Students",
    description: "AI tutor, 10,000+ practice questions, personalized study plans. Download on Android.",
    images: [og],
  },
};

export default function StudyAppForStudentsPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "Study App for Students", url: canonical },
        ]}
      />
      <AndroidAppStructuredData />

      <main>
        <section className={`${MKT.darkHero} pt-20 md:pt-28`}>
          <div className={`${MKT.container} py-16 md:py-20`}>
            <div className="mx-auto max-w-4xl text-center">
              <div className={`${MKT.badgeDark} mx-auto mb-6`}>
                <Smartphone className="h-4 w-4 text-accent-lime" />
                <span>For Students</span>
              </div>
              <h1 className={`${MKT.h1Hero} mb-6`}>
                Study App for Students
                <br />
                <span className="text-white/85">Preparing for SAT, ACT, GRE & More</span>
              </h1>
              <p className={`${MKT.leadOnDark} mx-auto mb-8 max-w-2xl`}>
                NomoExam is the all-in-one study app designed specifically for students tackling standardized tests. AI
                tutor, 10,000+ practice questions, personalized study schedules, and real-time progress tracking—all on
                your Android device.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={ANDROID_APP.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${MKT.btnPrimary} px-8 py-4 text-base`}
                >
                  <Download className="h-5 w-5" />
                  Download on Google Play
                </a>
                <Link href="/pricing" className={`${MKT.btnOutlineDark} px-8 py-4 text-base`}>
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-black/[0.06] bg-white py-16 md:py-24">
          <div className={MKT.container}>
            <h2 className={`${MKT.h2Section} mb-12 text-center`}>
              Everything students need in one study app
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: BookOpen,
                  title: "10,000+ Practice Questions",
                  desc: "Full tests, topic drills, and section practice for every exam",
                },
                {
                  icon: Brain,
                  title: "Unlimited AI Tutor",
                  desc: "Ask anything, get instant step-by-step explanations 24/7",
                },
                {
                  icon: Target,
                  title: "Personalized Study Plans",
                  desc: "Adaptive schedules based on your exam date and current level",
                },
                {
                  icon: Zap,
                  title: "Smart Flashcards",
                  desc: "Spaced repetition for long-term retention and quick review",
                },
                {
                  icon: Smartphone,
                  title: "Study On the Go",
                  desc: "Download content for offline study anytime, anywhere",
                },
                {
                  icon: Target,
                  title: "Progress Tracking",
                  desc: "Real-time analytics and score predictions as you improve",
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
            <div className="mx-auto max-w-3xl text-center">
              <h2 className={`${MKT.h2Section} mb-6`}>
                Why students choose NomoExam as their primary study app
              </h2>
              <div className="space-y-4 text-left">
                <div className={MKT.card}>
                  <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">All-in-One Platform</h3>
                  <p className="text-sm font-medium leading-relaxed text-neutral-600">
                    No need for multiple apps. NomoExam combines practice tests, flashcards, AI tutoring, and analytics
                    in one seamless study experience.
                  </p>
                </div>
                <div className={MKT.card}>
                  <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">Affordable for Students</h3>
                  <p className="text-sm font-medium leading-relaxed text-neutral-600">
                    Affordable per exam pricing—far cheaper than traditional tutoring or bulky course packages. Cancel
                    anytime with no hidden fees.
                  </p>
                </div>
                <div className={MKT.card}>
                  <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">Proven Results</h3>
                  <p className="text-sm font-medium leading-relaxed text-neutral-600">
                    Students using NomoExam consistently see score improvements within 4 weeks. Our adaptive AI ensures
                    you focus on what matters most for your target score.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <Link href="/exam-preparation-app" className={`${MKT.btnPrimary} px-8 py-4 text-base`}>
                  Learn More About the App
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-black/[0.06] bg-neutral-dark py-16 text-white md:py-24">
          <div className={`${MKT.container} text-center`}>
            <h2 className="font-barlow mb-4 text-3xl font-bold md:text-4xl">
              Download NomoExam study app today and start improving your scores
            </h2>
            <p className="mb-8 text-base font-medium text-white/80 md:text-lg">
              Join thousands of students using NomoExam to ace their exams. Free to download, affordable subscription per exam.
            </p>
            <a
              href={ANDROID_APP.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent-lime px-8 py-4 text-base font-bold text-black transition-all hover:bg-accent-lime/90"
            >
              <Download className="h-5 w-5" />
              Get NomoExam for Android
            </a>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
