import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import Link from "next/link";
import { ANDROID_APP, marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, AndroidAppStructuredData } from "@/lib/schema";
import { Download, Smartphone, CheckCircle2, Star, Zap, Shield } from "lucide-react";

const canonical = marketingAbsoluteUrl("/download-exam-app");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "Download Exam Preparation App — Free on Android | NomoExam",
  description: "Download NomoExam exam preparation app for free on Android. SAT, ACT, GRE, GMAT, JEE, NEET prep with AI tutor, practice tests, flashcards. Start studying today.",
  alternates: { canonical },
  keywords: [
    "download exam app",
    "download exam preparation app",
    "free exam prep app",
    "exam app download",
    "download study app",
    "exam preparation app download",
    "download SAT app",
    "download ACT app",
    "download JEE app",
    "download NEET app",
    "Android exam app",
  ],
  openGraph: {
    title: "Download NomoExam — Best Exam Preparation App",
    description: "Free download. SAT, ACT, GRE, GMAT, JEE, NEET & more. AI tutor, practice tests, personalized plans.",
    url: canonical,
    siteName: "NomoExam",
    type: "website",
    images: [{ url: og, width: 1200, height: 630, alt: "Download NomoExam Exam App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download NomoExam Exam Preparation App",
    description: "Free on Android. AI tutor, 10,000+ practice questions, personalized study plans.",
    images: [og],
  },
};

export default function DownloadExamAppPage() {
  const popularExams = [
    { slug: "sat", name: "SAT", link: "/sat-prep-app" },
    { slug: "act", name: "ACT", link: "/act-prep-app" },
    { slug: "gre", name: "GRE", link: "/gre-prep-app" },
    { slug: "gmat", name: "GMAT", link: "/gmat-prep-app" },
    { slug: "jee", name: "JEE", link: "/jee-prep-app" },
    { slug: "neet", name: "NEET", link: "/neet-prep-app" },
    { slug: "mcat", name: "MCAT", link: "/mcat-prep-app" },
    { slug: "lsat", name: "LSAT", link: "/lsat-prep-app" },
  ];

  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "Download Exam App", url: canonical },
        ]}
      />
      <AndroidAppStructuredData />

      <main>
        {/* Hero Section */}
        <section className={`${MKT.darkHero} pt-20 md:pt-28`}>
          <div className={`${MKT.container} py-16 md:py-24`}>
            <div className="mx-auto max-w-4xl text-center">
              <div className={`${MKT.badgeDark} mx-auto mb-6`}>
                <Download className="h-4 w-4 text-accent-lime" />
                <span>Free Download</span>
              </div>
              <h1 className={`${MKT.h1Hero} mb-6`}>
                Download Exam Preparation App
                <br />
                <span className="text-white/85">Free on Android</span>
              </h1>
              <p className={`${MKT.leadOnDark} mx-auto mb-8 max-w-2xl`}>
                Get NomoExam for free and start preparing for SAT, ACT, GRE, GMAT, JEE, NEET, and more. AI tutor,
                10,000+ practice questions, personalized study plans—all in one app.
              </p>

              <div className="mb-10">
                <a
                  href={ANDROID_APP.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent-lime px-10 py-5 text-lg font-bold text-black shadow-xl transition-all hover:scale-105 hover:bg-accent-lime/90"
                >
                  <Download className="h-6 w-6" />
                  Download Free on Google Play
                </a>
                <p className="mt-4 text-sm font-medium text-white/70">
                  Free to download · No credit card required · Start instantly
                </p>
              </div>

              <div className="mx-auto grid max-w-3xl grid-cols-3 gap-4 md:gap-6">
                {[
                  { icon: Star, value: "4.8/5", label: "Rating" },
                  { icon: Zap, value: "10,000+", label: "Questions" },
                  { icon: Shield, value: "Free", label: "To Try" },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <Icon className="mx-auto mb-2 h-8 w-8 text-accent-lime" />
                      <div className="font-barlow text-xl font-bold text-white md:text-2xl">{stat.value}</div>
                      <p className="mt-1 text-xs font-medium text-white/70 md:text-sm">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Download Section */}
        <section className="border-t border-black/[0.06] bg-white py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-4xl">
              <h2 className={`${MKT.h2Section} mb-10 text-center`}>
                Why download NomoExam exam preparation app?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Free to Download & Try",
                    desc: "Get the app for free with no credit card required. Try sample questions, explore features, and decide if it's right for you before subscribing.",
                  },
                  {
                    title: "All Exams in One App",
                    desc: "SAT, ACT, GRE, GMAT, JEE, NEET, MCAT, LSAT—every major exam in one download. Switch between exams anytime without installing separate apps.",
                  },
                  {
                    title: "Affordable & Transparent Pricing",
                    desc: "Affordable per exam pricing with full access to practice tests, AI tutor, and analytics. No hidden fees, no expensive packages. Cancel anytime.",
                  },
                  {
                    title: "Study Anywhere, Anytime",
                    desc: "Download content for offline access. Practice on the bus, in the library, or anywhere you have spare time. Your entire exam prep fits in your pocket.",
                  },
                  {
                    title: "Instant Setup",
                    desc: "Create an account in 30 seconds and start practicing immediately. No lengthy onboarding, no complicated setup—just download and begin.",
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

        {/* Download by Exam */}
        <section className="border-t border-black/[0.06] bg-zinc-50 py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-5xl">
              <h2 className={`${MKT.h2Section} mb-10 text-center`}>
                Download exam-specific prep apps
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {popularExams.map((exam) => (
                  <Link
                    key={exam.slug}
                    href={exam.link}
                    className="group rounded-xl border border-black/10 bg-white p-6 text-center transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <Smartphone className="mx-auto mb-3 h-10 w-10 text-neutral-900 transition-transform group-hover:scale-110" />
                    <h3 className="font-barlow mb-1 text-lg font-bold text-neutral-900">{exam.name} Prep App</h3>
                    <p className="text-sm font-medium text-neutral-600">Download for {exam.name}</p>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/exams" className={`${MKT.btnPrimary} px-8 py-4 text-base`}>
                  View All Exams
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How to Download */}
        <section className="border-t border-black/[0.06] bg-white py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-3xl">
              <h2 className={`${MKT.h2Section} mb-10 text-center`}>
                How to download the exam preparation app
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-900 font-barlow text-xl font-bold text-white">
                    1
                  </div>
                  <div>
                    <h3 className="font-barlow mb-2 text-xl font-bold text-neutral-900">
                      Visit Google Play Store
                    </h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                      Open the Google Play Store app on your Android device and search for "NomoExam" or tap the
                      download button above.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-900 font-barlow text-xl font-bold text-white">
                    2
                  </div>
                  <div>
                    <h3 className="font-barlow mb-2 text-xl font-bold text-neutral-900">
                      Install & Create Account
                    </h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                      Tap "Install" and wait for the download to complete. Open the app and create your free account
                      with email or Google sign-in.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-900 font-barlow text-xl font-bold text-white">
                    3
                  </div>
                  <div>
                    <h3 className="font-barlow mb-2 text-xl font-bold text-neutral-900">
                      Choose Exam & Start Practicing
                    </h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                      Select your exam (SAT, ACT, GRE, etc.), set your target test date, and begin with the
                      diagnostic. The app will create your personalized study plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-black/[0.06] bg-neutral-dark py-16 text-white md:py-24">
          <div className={`${MKT.container} text-center`}>
            <Download className="mx-auto mb-6 h-16 w-16 text-accent-lime" />
            <h2 className="font-barlow mb-4 text-3xl font-bold md:text-4xl">
              Ready to download the best exam preparation app?
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
              Download Free Now
            </a>
            <p className="mt-6 text-sm font-medium text-white/60">
              No credit card · Instant access · Cancel anytime
            </p>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
