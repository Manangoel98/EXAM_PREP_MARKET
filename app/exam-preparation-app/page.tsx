import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ANDROID_APP, marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, AndroidAppStructuredData, FAQStructuredData } from "@/lib/schema";
import { 
  Smartphone, 
  Download, 
  Star, 
  Users, 
  CheckCircle2, 
  BookOpen, 
  Brain, 
  Trophy,
  Zap,
  TrendingUp,
  Clock,
  Target,
} from "lucide-react";

const canonical = marketingAbsoluteUrl("/exam-preparation-app");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "Exam Preparation App for Android — SAT, ACT, GRE & More | NomoExam",
  description: "Download NomoExam exam preparation app for Android. Practice tests, AI tutor, flashcards for SAT, ACT, GRE, GMAT, MCAT. 10,000+ questions, personalized study plans. Free to try.",
  alternates: { canonical },
  keywords: [
    "exam preparation app",
    "exam prep app for Android",
    "SAT prep app",
    "ACT prep app",
    "GRE prep app",
    "study app for students",
    "test preparation app",
    "exam app download",
    "best exam prep app",
    "Android exam app",
    "mobile exam prep",
    "practice test app",
    "AI tutor app",
  ],
  openGraph: {
    title: "NomoExam - Best Exam Preparation App for Android",
    description: "Download the #1 exam prep app: SAT, ACT, GRE & more. AI tutor, 10,000+ practice questions, personalized plans.",
    url: canonical,
    siteName: "NomoExam",
    type: "website",
    images: [{ url: og, width: 1200, height: 630, alt: "NomoExam Exam Preparation App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download NomoExam Exam Preparation App for Android",
    description: "AI-powered exam prep: SAT, ACT, GRE, GMAT, MCAT. 10,000+ questions, personalized study plans.",
    images: [og],
  },
};

const appFaqs = [
  {
    question: "Is the NomoExam exam preparation app free to download?",
    answer: "Yes, the NomoExam app is free to download from the Google Play Store. You can access sample questions and features. Full access requires a subscription per exam.",
  },
  {
    question: "Which exams does the app support?",
    answer: "The NomoExam app supports SAT, ACT, GRE, GMAT, MCAT, LSAT, NEET, JEE, CAT, TOEFL, and more. Each exam has dedicated content including practice tests, flashcards, and AI explanations.",
  },
  {
    question: "Can I use the exam prep app offline?",
    answer: "Yes, you can download practice tests and flashcards for offline study. The AI tutor requires an internet connection for real-time explanations.",
  },
  {
    question: "What makes NomoExam better than other exam prep apps?",
    answer: "NomoExam combines unlimited AI tutoring, adaptive practice tests, personalized study plans, and comprehensive performance analytics—all in one app. Our AI explains every answer step-by-step and adapts to your learning pace.",
  },
  {
    question: "How do I get started with the exam preparation app?",
    answer: "Download NomoExam from the Google Play Store, create your free account, select your exam, and take a quick diagnostic. The app will generate a personalized study plan based on your current level and target score.",
  },
  {
    question: "Does the app work on tablets?",
    answer: "Yes, the NomoExam exam preparation app is optimized for both Android phones and tablets, providing a great study experience on any screen size.",
  },
];

const appFeatures = [
  {
    icon: BookOpen,
    title: "10,000+ Practice Questions",
    description: "Full-length tests, topic drills, and section practice for every exam format",
  },
  {
    icon: Brain,
    title: "AI Tutor (Unlimited)",
    description: "Ask any question, get instant explanations, and receive personalized study recommendations",
  },
  {
    icon: Target,
    title: "Personalized Study Plans",
    description: "Adaptive schedules based on your exam date, current level, and daily study time",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Analytics",
    description: "Track progress, identify weak areas, and see score predictions as you improve",
  },
  {
    icon: Zap,
    title: "Smart Flashcards",
    description: "Spaced repetition algorithm ensures you remember concepts for test day",
  },
  {
    icon: Clock,
    title: "Timed Practice Mode",
    description: "Build speed and stamina with realistic exam conditions and timers",
  },
];

const appStats = [
  { value: "2,847+", label: "Active Students" },
  { value: "4.8", label: "Play Store Rating" },
  { value: "10,000+", label: "Practice Questions" },
  { value: "Affordable", label: "Per Exam" },
];

export default function ExamPreparationAppPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "Exam Preparation App", url: canonical },
        ]}
      />
      <AndroidAppStructuredData />
      <FAQStructuredData faqs={appFaqs} />

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
                  Best Exam Preparation App
                  <br />
                  <span className="text-white/85">for SAT, ACT, GRE & More</span>
                </h1>
                <p className={`${MKT.leadOnDark} mx-auto mb-8 max-w-3xl`}>
                  Download NomoExam on Android and ace your exam with AI-powered tutoring, 10,000+ practice questions,
                  personalized study plans, and real-time analytics. Study smarter, score higher.
                </p>

                {/* CTA Buttons */}
                <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={ANDROID_APP.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${MKT.btnPrimary} group px-8 py-4 text-base`}
                  >
                    <Download className="h-5 w-5" />
                    Download on Google Play
                  </a>
                  <Link href="/exams" className={`${MKT.btnOutlineDark} px-8 py-4 text-base`}>
                    View All Exams
                  </Link>
                </div>

                {/* Stats */}
                <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                  {appStats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                      <div className="font-barlow text-2xl font-bold text-white md:text-3xl">{stat.value}</div>
                      <p className="mt-1 text-xs font-medium text-white/70 md:text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="border-t border-black/[0.06] bg-white py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mb-12 text-center">
              <h2 className={`${MKT.h2Section} mb-4`}>Everything you need in one exam preparation app</h2>
              <p className={`${MKT.leadOnLight} mx-auto max-w-3xl`}>
                NomoExam is the most comprehensive exam prep app for Android—combining AI technology with proven study
                methods.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {appFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className={MKT.card}>
                    <div className={`${MKT.iconTile} ${MKT.iconTileMd} mb-4`}>
                      <Icon className="h-7 w-7" strokeWidth={2} />
                    </div>
                    <h3 className="font-barlow mb-3 text-xl font-bold text-neutral-900">{feature.title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="border-t border-black/[0.06] bg-zinc-50 py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-4xl">
              <h2 className={`${MKT.h2Section} mb-10 text-center`}>
                Why NomoExam is the #1 exam preparation app for students
              </h2>

              <div className="space-y-6">
                <div className={MKT.card}>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-full bg-accent-lime/20 p-2">
                      <CheckCircle2 className="h-6 w-6 text-accent-lime" />
                    </div>
                    <div>
                      <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">
                        Comprehensive Content Library
                      </h3>
                      <p className="text-sm font-medium leading-relaxed text-neutral-600">
                        Access 10,000+ expertly crafted practice questions across all exam sections. Every question
                        includes detailed explanations, concept tags, and difficulty ratings to guide your study.
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
                        Unlimited AI Tutor Access
                      </h3>
                      <p className="text-sm font-medium leading-relaxed text-neutral-600">
                        Unlike other exam prep apps that charge per question, NomoExam includes unlimited AI tutoring.
                        Ask anything, get instant explanations, and receive personalized learning strategies 24/7.
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
                        Adaptive Study Plans
                      </h3>
                      <p className="text-sm font-medium leading-relaxed text-neutral-600">
                        The app learns from your performance and automatically adjusts your study plan. Focus on weak
                        areas, maintain strengths, and stay on track to reach your target score by test day.
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
                      <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">Affordable Per-Exam Pricing</h3>
                      <p className="text-sm font-medium leading-relaxed text-neutral-600">
                        Pay only for the exam you're preparing for at an affordable rate. No expensive course packages or
                        hidden fees. Cancel anytime with full access to all features during your subscription.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-t border-black/[0.06] bg-white py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-4xl">
              <h2 className={`${MKT.h2Section} mb-12 text-center`}>
                Get started with the exam preparation app in 3 simple steps
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-900 font-barlow text-xl font-bold text-white">
                    1
                  </div>
                  <div>
                    <h3 className="font-barlow mb-2 text-xl font-bold text-neutral-900">
                      Download & Create Account
                    </h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                      Get NomoExam from the Google Play Store and sign up with your email. Choose your exam (SAT, ACT,
                      GRE, etc.) and set your target test date.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-900 font-barlow text-xl font-bold text-white">
                    2
                  </div>
                  <div>
                    <h3 className="font-barlow mb-2 text-xl font-bold text-neutral-900">Take Diagnostic Test</h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                      Complete a quick 15-minute diagnostic to assess your current level. The app uses your results to
                      create a personalized study plan tailored to your strengths and weaknesses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-900 font-barlow text-xl font-bold text-white">
                    3
                  </div>
                  <div>
                    <h3 className="font-barlow mb-2 text-xl font-bold text-neutral-900">
                      Practice Daily & Track Progress
                    </h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                      Follow your daily study plan, practice with AI-powered feedback, review flashcards, and watch your
                      score predictions improve. The app keeps you motivated with streaks, badges, and progress insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Exams */}
        <section className="border-t border-black/[0.06] bg-zinc-50 py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className={`${MKT.h2Section} mb-4`}>One exam preparation app for all major tests</h2>
              <p className={`${MKT.leadOnLight} mb-12`}>
                NomoExam supports comprehensive prep for undergraduate, graduate, medical, law, and professional exams.
              </p>

              <div className="grid grid-cols-2 gap-4 text-left md:grid-cols-3 lg:grid-cols-4">
                {[
                  "SAT",
                  "ACT",
                  "GRE",
                  "GMAT",
                  "MCAT",
                  "LSAT",
                  "TOEFL",
                  "IELTS",
                  "AP Exams",
                  "NEET",
                  "JEE",
                  "CAT",
                ].map((exam) => (
                  <div key={exam} className="flex items-center gap-3 rounded-lg border border-black/10 bg-white p-4">
                    <Trophy className="h-5 w-5 text-accent-lime" />
                    <span className="font-barlow font-semibold text-neutral-900">{exam}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link href="/exams" className={`${MKT.btnPrimary} px-8 py-4 text-base`}>
                  View All Exam Guides
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-black/[0.06] bg-white py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-3xl">
              <h2 className={`${MKT.h2Section} mb-10 text-center`}>
                Frequently asked questions about the exam preparation app
              </h2>

              <div className="space-y-6">
                {appFaqs.map((faq) => (
                  <div key={faq.question} className={MKT.card}>
                    <h3 className="font-barlow mb-3 text-lg font-bold text-neutral-900">{faq.question}</h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-600">{faq.answer}</p>
                  </div>
                ))}
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
                Ready to ace your exam with the best preparation app?
              </h2>
              <p className="mb-8 text-base font-medium text-white/80 md:text-lg">
                Join 2,847+ students using NomoExam to reach their target scores. Download now and start your free trial.
              </p>
              <a
                href={ANDROID_APP.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent-lime px-8 py-4 text-base font-bold text-black transition-all hover:bg-accent-lime/90"
              >
                <Download className="h-5 w-5" />
                Download Free on Google Play
              </a>
              <p className="mt-6 text-sm font-medium text-white/60">
                Affordable subscription per exam · Cancel anytime · No hidden fees
              </p>
            </div>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
