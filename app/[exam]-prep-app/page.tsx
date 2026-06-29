import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import Link from "next/link";
import { ANDROID_APP, getAppUrl, marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, AndroidAppStructuredData, FAQStructuredData } from "@/lib/schema";
import {
  Download,
  Smartphone,
  BookOpen,
  Brain,
  Target,
  Zap,
  TrendingUp,
  Clock,
  Star,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { getMarketingExam, MARKETING_EXAMS, type MarketingExamDefinition } from "@/lib/exams-marketing-data";
import { notFound } from "next/navigation";

// Generate static params for all exams
export function generateStaticParams() {
  return MARKETING_EXAMS.map((exam) => ({
    exam: exam.slug,
  }));
}

// Generate metadata for each exam-specific app page
export async function generateMetadata({ params }: { params: Promise<{ exam: string }> }): Promise<Metadata> {
  const { exam: examSlug } = await params;
  const exam = getMarketingExam(examSlug);
  if (!exam) return {};

  const title = `${exam.shortName} Prep App for Android — Practice Tests & AI Tutor | NomoExam`;
  const description = `Download the best ${exam.shortName} prep app for Android. Full-length practice tests, AI tutor, flashcards, personalized study plans. ${exam.description}. Free to try.`;
  const canonical = marketingAbsoluteUrl(`/${examSlug}-prep-app`);
  const og = marketingAbsoluteUrl("/og-image.svg");

  return {
    title,
    description,
    keywords: [
      `${exam.shortName} prep app`,
      `${exam.shortName} app`,
      `${exam.shortName} preparation app`,
      `${exam.shortName} practice app`,
      `${exam.shortName} mock test app`,
      `best ${exam.shortName} app`,
      `${exam.shortName} app for Android`,
      `${exam.shortName} study app`,
      `${exam.fullName} app`,
      "exam preparation app",
      "study app for students",
      ...(exam.slug === "jee" || exam.slug === "neet" || exam.slug === "cat"
        ? ["for Indian students", "India exam prep"]
        : []),
    ],
    alternates: { canonical },
    openGraph: {
      title: `${exam.shortName} Prep App — Download on Android`,
      description: `AI-powered ${exam.shortName} preparation app with practice tests, flashcards & personalized plans.`,
      url: canonical,
      siteName: "NomoExam",
      type: "website",
      images: [{ url: og, width: 1200, height: 630, alt: `NomoExam ${exam.shortName} Prep App` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${exam.shortName} Prep App for Android`,
      description: `Practice tests, AI tutor, flashcards. Download the best ${exam.shortName} prep app.`,
      images: [og],
    },
  };
}

function ExamPrepAppPage({ exam }: { exam: MarketingExamDefinition }) {
  const appExamUrl = getAppUrl(`/exams/${exam.slug}`);
  const isIndianExam = ["jee", "neet", "cat"].includes(exam.slug);

  const faqs = [
    {
      question: `Is the ${exam.shortName} prep app free to download?`,
      answer: `Yes, the NomoExam ${exam.shortName} prep app is free to download from the Google Play Store. You can access sample questions and features. Full access requires a subscription.`,
    },
    {
      question: `What features does the ${exam.shortName} app include?`,
      answer: `The ${exam.shortName} prep app includes full-length practice tests, topic-wise drills, unlimited AI tutor, smart flashcards, personalized study plans, progress tracking, and offline study mode.`,
    },
    {
      question: `Can I use the ${exam.shortName} app offline?`,
      answer: `Yes, you can download practice tests and flashcards for offline study. The AI tutor requires an internet connection for real-time explanations.`,
    },
    {
      question: `How does the ${exam.shortName} app compare to other prep apps?`,
      answer: `NomoExam combines unlimited AI tutoring, adaptive practice tests, and comprehensive analytics at an affordable price. Most competitors charge per question or require expensive packages.`,
    },
    ...(isIndianExam
      ? [
          {
            question: `Is this ${exam.shortName} app designed for Indian students?`,
            answer: `Yes, our ${exam.shortName} prep app is specifically designed for Indian students with content aligned to the latest ${exam.shortName} syllabus and exam pattern.`,
          },
        ]
      : []),
  ];

  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "Exams", url: marketingAbsoluteUrl("/exams") },
          { name: `${exam.shortName} Prep App`, url: marketingAbsoluteUrl(`/${exam.slug}-prep-app`) },
        ]}
      />
      <AndroidAppStructuredData />
      <FAQStructuredData faqs={faqs} />

      <main>
        {/* Hero Section */}
        <section className={`${MKT.darkHero} pt-20 md:pt-28`}>
          <div className={`${MKT.container} py-16 md:py-20`}>
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <div className={`${MKT.badgeDark} mx-auto mb-6`}>
                  <Smartphone className="h-4 w-4 text-accent-lime" />
                  <span>Android App</span>
                </div>
                <h1 className={`${MKT.h1Hero} mb-6`}>
                  {exam.shortName} Prep App
                  <br />
                  <span className="text-white/85">
                    for {isIndianExam ? "Indian Students" : "Android"}
                  </span>
                </h1>
                <p className={`${MKT.leadOnDark} mx-auto mb-8 max-w-3xl`}>
                  Download the best {exam.shortName} preparation app with AI-powered tutoring, 1000+ practice
                  questions, personalized study plans, and real-time analytics. {exam.description}. Study smarter on
                  your Android device.
                </p>

                <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={ANDROID_APP.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${MKT.btnPrimary} group px-8 py-4 text-base`}
                  >
                    <Download className="h-5 w-5" />
                    Download {exam.shortName} Prep App
                  </a>
                  {exam.availability === "live" && (
                    <a href={appExamUrl} className={`${MKT.btnOutlineDark} px-8 py-4 text-base`}>
                      Open in Web App
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                  {[
                    { value: "4.8", label: "App Rating" },
                    { value: "1000+", label: "Questions" },
                    { value: "Unlimited", label: "AI Help" },
                    { value: "Affordable", label: "Subscription" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <div className="font-barlow text-2xl font-bold text-white md:text-3xl">{stat.value}</div>
                      <p className="mt-1 text-xs font-medium text-white/70 md:text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Use App Section */}
        <section className="border-t border-black/[0.06] bg-white py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-4xl">
              <h2 className={`${MKT.h2Section} mb-10 text-center`}>
                Why use the {exam.shortName} prep app on your phone?
              </h2>

              <div className="space-y-6">
                <div className={MKT.card}>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-full bg-accent-lime/20 p-2">
                      <CheckCircle2 className="h-6 w-6 text-accent-lime" />
                    </div>
                    <div>
                      <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">
                        Study Anytime, Anywhere
                      </h3>
                      <p className="text-sm font-medium leading-relaxed text-neutral-600">
                        Turn every spare moment into {exam.shortName} prep time. Practice on the bus, during breaks, or
                        before bed. Download content for offline access and study without internet.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={MKT.card}>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-full bg-accent-lime/20 p-2">
                      <CheckCircle2 className="h-6 w-6 text-accent-lime" />
                    </div>
                    <div>
                      <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">
                        Personalized Study Plans
                      </h3>
                      <p className="text-sm font-medium leading-relaxed text-neutral-600">
                        The app analyzes your {exam.shortName} performance and creates a custom study schedule. Focus on
                        weak topics, maintain strengths, and stay on track to your target score.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={MKT.card}>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-full bg-accent-lime/20 p-2">
                      <CheckCircle2 className="h-6 w-6 text-accent-lime" />
                    </div>
                    <div>
                      <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">
                        Instant Progress Tracking
                      </h3>
                      <p className="text-sm font-medium leading-relaxed text-neutral-600">
                        Watch your {exam.shortName} scores improve in real-time. The app tracks every practice session,
                        shows detailed analytics, and predicts your exam score based on current performance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={MKT.card}>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-full bg-accent-lime/20 p-2">
                      <CheckCircle2 className="h-6 w-6 text-accent-lime" />
                    </div>
                    <div>
                      <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">
                        More Affordable Than Coaching
                      </h3>
                      <p className="text-sm font-medium leading-relaxed text-neutral-600">
                        Get comprehensive {exam.shortName} preparation at a fraction of the cost of
                        traditional coaching classes or expensive course packages. Cancel anytime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t border-black/[0.06] bg-zinc-50 py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mb-12 text-center">
              <h2 className={`${MKT.h2Section} mb-4`}>
                Complete {exam.shortName} prep app features
              </h2>
              <p className={`${MKT.leadOnLight} mx-auto max-w-3xl`}>
                Everything you need to master the {exam.shortName} exam in one powerful Android app.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: BookOpen,
                  title: "Full-Length Practice Tests",
                  desc: `Realistic ${exam.shortName} mock tests matching official format and difficulty`,
                },
                {
                  icon: Brain,
                  title: "Unlimited AI Tutor",
                  desc: `Ask any ${exam.shortName} question, get instant step-by-step explanations 24/7`,
                },
                {
                  icon: Target,
                  title: "Personalized Study Plans",
                  desc: `Adaptive ${exam.shortName} schedule based on your exam date and performance`,
                },
                {
                  icon: Zap,
                  title: "Smart Flashcards",
                  desc: `Spaced repetition for ${exam.shortName} concepts—study efficiently, remember longer`,
                },
                {
                  icon: TrendingUp,
                  title: "Progress Analytics",
                  desc: `Track ${exam.shortName} improvement with detailed performance insights and score predictions`,
                },
                {
                  icon: Clock,
                  title: "Timed Practice Mode",
                  desc: `Build speed for ${exam.shortName} with realistic timers and pacing guides`,
                },
              ].map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className={MKT.card}>
                    <div className={`${MKT.iconTile} ${MKT.iconTileMd} mb-4`}>
                      <Icon className="h-7 w-7" strokeWidth={2} />
                    </div>
                    <h3 className="font-barlow mb-3 text-xl font-bold text-neutral-900">{feature.title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-600">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mobile Benefits */}
        <section className="border-t border-black/[0.06] bg-white py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className={`${MKT.h2Section} mb-6`}>
                Mobile advantages for {exam.shortName} preparation
              </h2>
              <p className={`${MKT.leadOnLight} mb-10`}>
                Preparing for {exam.shortName} on your phone isn't just convenient—it's scientifically proven to
                improve retention through spaced repetition and microlearning.
              </p>

              <div className="grid gap-6 text-left md:grid-cols-2">
                <div className="rounded-xl border border-black/10 bg-zinc-50 p-6">
                  <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">Quick Review Sessions</h3>
                  <p className="text-sm font-medium text-neutral-600">
                    Spend 10-15 minutes reviewing {exam.shortName} flashcards between classes. Small sessions add up to
                    mastery.
                  </p>
                </div>
                <div className="rounded-xl border border-black/10 bg-zinc-50 p-6">
                  <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">No Laptop Required</h3>
                  <p className="text-sm font-medium text-neutral-600">
                    Practice {exam.shortName} questions anywhere without carrying books or a computer. Your entire prep
                    in your pocket.
                  </p>
                </div>
                <div className="rounded-xl border border-black/10 bg-zinc-50 p-6">
                  <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">Push Notifications</h3>
                  <p className="text-sm font-medium text-neutral-600">
                    Get daily {exam.shortName} study reminders and streak tracking to build consistent habits.
                  </p>
                </div>
                <div className="rounded-xl border border-black/10 bg-zinc-50 p-6">
                  <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">Seamless Sync</h3>
                  <p className="text-sm font-medium text-neutral-600">
                    Start on mobile, continue on web. Your {exam.shortName} progress syncs across all devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-black/[0.06] bg-zinc-50 py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-3xl">
              <h2 className={`${MKT.h2Section} mb-10 text-center`}>
                {exam.shortName} prep app — frequently asked questions
              </h2>

              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question} className={MKT.card}>
                    <h3 className="font-barlow mb-3 text-lg font-bold text-neutral-900">{faq.question}</h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="border-t border-black/[0.06] bg-white py-16 md:py-20">
          <div className={MKT.container}>
            <div className="mx-auto max-w-4xl">
              <h2 className={`${MKT.h2Section} mb-8 text-center`}>
                More {exam.shortName} resources
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Link
                  href={`/exams/${exam.slug}`}
                  className="rounded-lg border border-black/10 bg-zinc-50 p-4 transition-all hover:border-primary/30 hover:bg-white hover:shadow-md"
                >
                  <h3 className="font-barlow mb-1 text-base font-bold text-neutral-900">
                    {exam.shortName} Exam Guide
                  </h3>
                  <p className="text-sm font-medium text-neutral-600">Complete preparation guide</p>
                </Link>
                <Link
                  href="/exam-preparation-app"
                  className="rounded-lg border border-black/10 bg-zinc-50 p-4 transition-all hover:border-primary/30 hover:bg-white hover:shadow-md"
                >
                  <h3 className="font-barlow mb-1 text-base font-bold text-neutral-900">All Exam Prep App</h3>
                  <p className="text-sm font-medium text-neutral-600">Multi-exam preparation</p>
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-lg border border-black/10 bg-zinc-50 p-4 transition-all hover:border-primary/30 hover:bg-white hover:shadow-md"
                >
                  <h3 className="font-barlow mb-1 text-base font-bold text-neutral-900">Pricing</h3>
                  <p className="text-sm font-medium text-neutral-600">View plans</p>
                </Link>
                <Link
                  href="/mock-test-app"
                  className="rounded-lg border border-black/10 bg-zinc-50 p-4 transition-all hover:border-primary/30 hover:bg-white hover:shadow-md"
                >
                  <h3 className="font-barlow mb-1 text-base font-bold text-neutral-900">Mock Test App</h3>
                  <p className="text-sm font-medium text-neutral-600">Full-length practice tests</p>
                </Link>
                <Link
                  href="/features"
                  className="rounded-lg border border-black/10 bg-zinc-50 p-4 transition-all hover:border-primary/30 hover:bg-white hover:shadow-md"
                >
                  <h3 className="font-barlow mb-1 text-base font-bold text-neutral-900">All Features</h3>
                  <p className="text-sm font-medium text-neutral-600">AI tutor, flashcards & more</p>
                </Link>
                <Link
                  href="/exams"
                  className="rounded-lg border border-black/10 bg-zinc-50 p-4 transition-all hover:border-primary/30 hover:bg-white hover:shadow-md"
                >
                  <h3 className="font-barlow mb-1 text-base font-bold text-neutral-900">All Exams</h3>
                  <p className="text-sm font-medium text-neutral-600">SAT, ACT, GRE & more</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-black/[0.06] bg-neutral-dark py-16 text-white md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-3xl text-center">
              <Star className="mx-auto mb-6 h-16 w-16 text-accent-lime" />
              <h2 className="font-barlow mb-4 text-3xl font-bold md:text-4xl">
                Download the best {exam.shortName} prep app and ace your exam
              </h2>
              <p className="mb-8 text-base font-medium text-white/80 md:text-lg">
                Join thousands of students using NomoExam to reach their target {exam.shortName} scores. Start your
                free trial today.
              </p>
              <a
                href={ANDROID_APP.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent-lime px-8 py-4 text-base font-bold text-black transition-all hover:bg-accent-lime/90"
              >
                <Download className="h-5 w-5" />
                Download {exam.shortName} App Free
              </a>
              <p className="mt-6 text-sm font-medium text-white/60">
                Free to download · Subscription for full access · Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}

export default async function DynamicExamPrepAppPage({ params }: { params: Promise<{ exam: string }> }) {
  const { exam: examSlug } = await params;
  const exam = getMarketingExam(examSlug);

  if (!exam) {
    notFound();
  }

  return <ExamPrepAppPage exam={exam} />;
}
