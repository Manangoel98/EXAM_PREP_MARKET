import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle,
  LineChart,
  MessageSquare,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nomo AI: Your Personal AI Study Coach | NomoExam",
  description: "Meet Nomo AI, your intelligent study companion with real-time access to your complete performance data. Get instant personalized insights, recommendations, and 24/7 study assistance powered by advanced AI.",
  alternates: { canonical: "https://nomoexam.com/features/nomo-ai" },
  keywords: [
    "Nomo AI",
    "AI study coach",
    "AI tutor",
    "personalized learning AI",
    "AI test prep",
    "intelligent tutoring system",
    "adaptive learning AI",
    "study assistant"
  ],
  openGraph: {
    title: "Nomo AI: AI-Powered Study Coach with Real-Time Performance Data",
    description: "Unlike generic AI assistants, Nomo AI understands YOUR learning journey. Personalized recommendations, instant answers, strategic guidance.",
    url: "https://nomoexam.com/features/nomo-ai",
    siteName: "NomoExam",
    type: "website",
  },
};

const features = [
  {
    icon: Brain,
    title: "Real-Time Data Access",
    description: "Nomo AI has complete access to your performance history, practice patterns, and progress across all subjects. It knows exactly where you struggle and where you excel."
  },
  {
    icon: LineChart,
    title: "Personalized Insights",
    description: "Get analysis based on YOUR actual performance, not generic advice. Nomo AI identifies patterns in your mistakes and suggests targeted improvements."
  },
  {
    icon: MessageSquare,
    title: "Instant Answers, Anytime",
    description: "Ask questions about concepts, strategies, or specific problems 24/7. Get contextual responses that reference your learning history and current goals."
  },
  {
    icon: Zap,
    title: "Strategic Guidance",
    description: "Nomo AI doesn't just answer questions—it guides your entire study strategy. Focus on high-impact topics, optimize your time, and maximize score improvements."
  }
];

const capabilities = [
  "Explain why you got a question wrong (with context from similar past mistakes)",
  "Recommend which topics to study next based on exam weightage and your weak areas",
  "Predict your score and show what you need to improve to reach your target",
  "Answer concept questions (\"How does photosynthesis work?\")",
  "Provide test-taking strategies (\"When should I guess vs skip?\")",
  "Create custom practice sets based on your needs",
  "Analyze your time management and suggest pacing improvements",
  "Compare your progress to students with similar starting points"
];

export default function NomoAIPage() {
  return (
    <MarketingPageShell>
      <main>
        <section className={`${MKT.darkHero} pt-20 md:pt-28 py-16 md:py-24`}>
          <div className={MKT.container}>
            <div className="mx-auto max-w-4xl text-center">
              <div className={`${MKT.badgeDark} mx-auto mb-6`}>
                <Sparkles className="h-4 w-4 text-accent-lime" aria-hidden />
                <span>Nomo AI</span>
              </div>

              <h1 className={`${MKT.h1Hero} mb-6`}>Your tutor, wired to your real prep data</h1>

              <p className={`${MKT.leadOnDark} mx-auto mb-8 max-w-3xl`}>
                Nomo AI isn&apos;t a generic chatbot—it reads your attempts, timing, and weak topics so answers match{" "}
                <strong className="text-white">your</strong> trajectory. Included in your per-exam subscription (
                <strong className="text-white">$9/month per exam (USD)</strong>, cancel anytime).
              </p>

              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <Link href="/pricing" className={MKT.btnSecondary}>
                  View pricing
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="#how-it-works" className={MKT.btnSecondary}>
                  How it works
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshot Showcase */}
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="rounded-2xl border border-black/[0.08] bg-white/90 p-4 shadow-sm transition-shadow hover:shadow-md">
              <div className="relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/NomoAI.png"
                  alt="Chat with Nomo AI - Get instant answers and personalized study guidance"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
              <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-neutral-900">
                <MessageSquare className="h-5 w-5 shrink-0 text-neutral-700" aria-hidden />
                Chat with Nomo AI
              </h3>
              <p className="text-sm text-muted-foreground">
                Ask anything about your study plan, concepts, or test strategies. Get instant, contextual responses.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.08] bg-white/90 p-4 shadow-sm transition-shadow hover:shadow-md">
              <div className="relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/Solution2.png"
                  alt="Multiple solution formats - Step-by-step solutions with AI insights"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
              <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-neutral-900">
                <BookOpen className="h-5 w-5 shrink-0 text-neutral-700" aria-hidden />
                AI-powered solutions
              </h3>
              <p className="text-sm text-muted-foreground">
                Get detailed explanations for every question, with AI analyzing why you made specific mistakes.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.08] bg-white/90 p-4 shadow-sm transition-shadow hover:shadow-md">
              <div className="relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/Profile.png"
                  alt="Real-time analytics connected to Nomo AI"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
              <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-neutral-900">
                <BarChart3 className="h-5 w-5 shrink-0 text-neutral-700" aria-hidden />
                Connected analytics
              </h3>
              <p className="text-sm text-muted-foreground">
                Nomo AI uses your complete performance data to provide personalized insights and predictions.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="border-t border-black/[0.06] bg-zinc-50 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Makes Nomo AI Different?
              </h2>
              <p className="text-lg text-muted-foreground">
                Nomo AI isn't just another chatbot. It's a study coach that understands YOUR learning journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="rounded-2xl border border-black/[0.08] bg-white/90 p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-lime/25 text-neutral-900">
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What Nomo AI Can Do */}
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What Can Nomo AI Do For You?
            </h2>

            <div className="space-y-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-3 border-l-4 border-accent-lime pl-4 py-2">
                  <CheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-neutral-900" />
                  <span className="text-muted-foreground">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="border-t border-black/[0.06] bg-white py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                How Nomo AI Works
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-xl font-bold text-white">1</div>
                  <h3 className="text-lg font-semibold mb-2">You Practice & Learn</h3>
                  <p className="text-sm text-muted-foreground">
                    Take practice tests, solve questions, and use flashcards. Every interaction is tracked.
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-xl font-bold text-white">2</div>
                  <h3 className="text-lg font-semibold mb-2">AI Analyzes Your Data</h3>
                  <p className="text-sm text-muted-foreground">
                    Nomo AI continuously analyzes your performance, identifies patterns, and tracks improvement.
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-xl font-bold text-white">3</div>
                  <h3 className="text-lg font-semibold mb-2">Get Personalized Guidance</h3>
                  <p className="text-sm text-muted-foreground">
                    Ask questions anytime and get answers tailored to your specific learning needs and history.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Feature Showcase */}
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Nomo AI Understands Your Learning Journey
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Unlike generic AI assistants that treat every user the same, Nomo AI has complete access to your performance data, study patterns, and progress history.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-900" />
                      <span className="text-sm"><strong>Real-time data access:</strong> Connected to your complete learning history</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-900" />
                      <span className="text-sm"><strong>Personalized insights:</strong> Analysis based on YOUR performance patterns</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-900" />
                      <span className="text-sm"><strong>Instant answers:</strong> Get help anytime, anywhere with contextual responses</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-900" />
                      <span className="text-sm"><strong>Strategic guidance:</strong> Focus on topics that matter most for YOUR goals</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <Image
                    src="/images/NomoAI2.png"
                    alt="Nomo AI in action - Personalized study recommendations"
                    width={600}
                    height={500}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 font-barlow text-sm font-semibold text-white shadow-lg">
                  <Sparkles className="h-4 w-4 shrink-0 text-accent-lime" aria-hidden />
                  Available now
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${MKT.darkHero} py-14 md:py-20`}>
          <div className={MKT.container}>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className={`${MKT.h2Section} mb-4 text-white`}>Unlock Nomo AI with your exam plan</h2>
              <p className="mb-8 font-barlow text-base font-medium text-white/80 md:text-lg">
                Subscribe per exam for full practice, flashcards, paths, and unlimited AI. No free trial—cancel anytime so you aren&apos;t billed again.
              </p>
              <Link href="/pricing" className={`${MKT.btnPrimary} bg-white text-neutral-900 hover:bg-white/90`}>
                View pricing
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
