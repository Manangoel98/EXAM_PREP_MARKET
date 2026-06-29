import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import Link from "next/link";
import { marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, ArticleStructuredData, FAQStructuredData } from "@/lib/schema";
import { CheckCircle2, AlertTriangle, Target, BookOpen, Smartphone } from "lucide-react";

const canonical = marketingAbsoluteUrl("/mock-test-strategy");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "Mock Test Strategy: How to Use Practice Tests to Maximize Your Score",
  description: "Master mock test strategy for SAT, ACT, JEE, NEET. Learn when to take tests, how to analyze mistakes, time management tactics, and how many mocks you need for top scores.",
  alternates: { canonical },
  keywords: [
    "mock test strategy",
    "practice test strategy",
    "how to use mock tests",
    "mock test analysis",
    "exam test strategy",
    "practice test tips",
  ],
  openGraph: {
    title: "Mock Test Strategy: Maximize Your Exam Score",
    description: "Expert strategies on using mock tests effectively for SAT, ACT, JEE, NEET preparation.",
    url: canonical,
    siteName: "NomoExam",
    type: "article",
    images: [{ url: og, width: 1200, height: 630, alt: "Mock Test Strategy" }],
  },
};

const faqs = [
  {
    question: "How many mock tests should I take before my exam?",
    answer: "Take 6-8 mocks for SAT/ACT, 30-40 for JEE Main, 40-50 for NEET. More tests help for competitive exams with millions of candidates. Quality analysis matters more than quantity.",
  },
  {
    question: "When should I start taking mock tests?",
    answer: "Start 3-4 months before your exam. Taking mocks too early (before content review) wastes tests and demotivates. Complete 70% of syllabus before your first mock.",
  },
  {
    question: "Should I take tougher or easier mock tests?",
    answer: "Start with easier mocks to build confidence, progress to exam-level difficulty, then take tougher mocks in the final month for over-preparation. Mix all three types.",
  },
];

export default function MockTestStrategyPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "Mock Test Strategy", url: canonical },
        ]}
      />
      <ArticleStructuredData
        title="Mock Test Strategy: How to Use Practice Tests to Maximize Your Score"
        description="Comprehensive guide on using mock tests effectively for exam preparation"
        datePublished="2026-04-17"
      />
      <FAQStructuredData faqs={faqs} />

      <main>
        <article className={`${MKT.pageSection} pb-20 pt-28 md:pb-32 md:pt-36`}>
          <div className={`${MKT.container} mx-auto max-w-4xl`}>
            <div className="mb-8">
              <div className={`${MKT.badgeLight} mb-4`}>
                <Target className="h-4 w-4" />
                <span>Mock Test Strategy</span>
              </div>
              <h1 className={`${MKT.h1OnLight} mb-4`}>Mock Test Strategy: Maximize Your Score</h1>
              <p className="text-base font-medium text-neutral-600 md:text-lg">
                Expert tactics for SAT, ACT, JEE, NEET & more
              </p>
            </div>

            <div className="prose prose-neutral prose-lg max-w-none">
              <p className="lead text-lg font-medium leading-relaxed text-neutral-700">
                Mock tests are the bridge between preparation and performance. But most students waste their potential by taking tests without proper strategy. This guide covers exactly how to use mock tests to maximize your score—when to take them, how to analyze mistakes, and common pitfalls to avoid.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Why Mock Tests Are Critical
              </h2>
              <p>Mock tests serve four essential purposes that concept learning alone cannot provide:</p>

              <div className="not-prose space-y-4">
                {[
                  {
                    title: "Build Exam Stamina",
                    desc: "Your brain isn't used to 3+ hours of focused problem-solving. Mock tests train mental endurance so you don't fatigue in the real exam.",
                  },
                  {
                    title: "Identify Weak Topics",
                    desc: "You might think you know a topic until you face exam-style questions. Mocks reveal gaps in your understanding that studying alone won't show.",
                  },
                  {
                    title: "Master Time Management",
                    desc: "Knowing content isn't enough—you must solve problems within strict time limits. Mocks teach you pacing and when to skip questions.",
                  },
                  {
                    title: "Reduce Test Anxiety",
                    desc: "The real exam feels less intimidating when you've already taken 20-40 similar tests. Familiarity breeds confidence.",
                  },
                ].map((reason) => (
                  <div key={reason.title} className="flex items-start gap-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h4 className="font-barlow mb-1 text-base font-bold text-neutral-900">{reason.title}</h4>
                      <p className="text-sm font-medium leading-relaxed text-neutral-700">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                How Many Mock Tests Do You Need?
              </h2>
              <p>The optimal number depends on your exam's competitiveness:</p>

              <div className="not-prose overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-neutral-900">
                      <th className="p-3 text-left font-barlow font-bold">Exam</th>
                      <th className="p-3 text-left font-barlow font-bold">Recommended Mocks</th>
                      <th className="p-3 text-left font-barlow font-bold">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    <tr><td className="p-3">SAT / ACT</td><td className="p-3">6-8 tests</td><td className="p-3">3 months</td></tr>
                    <tr><td className="p-3">GRE / GMAT</td><td className="p-3">8-10 tests</td><td className="p-3">3 months</td></tr>
                    <tr><td className="p-3">JEE Main</td><td className="p-3">30-40 tests</td><td className="p-3">4 months</td></tr>
                    <tr><td className="p-3">JEE Advanced</td><td className="p-3">15-20 tests</td><td className="p-3">2 months</td></tr>
                    <tr><td className="p-3">NEET</td><td className="p-3">40-50 tests</td><td className="p-3">4 months</td></tr>
                    <tr><td className="p-3">MCAT</td><td className="p-3">10-12 tests</td><td className="p-3">3 months</td></tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6">
                <strong>Why the difference?</strong> Competitive exams with millions of candidates (JEE, NEET) require more practice to beat the curve. International exams (SAT, GRE) need fewer mocks because they test broader skills.
              </p>

              <div className="not-prose my-8 rounded-xl border border-accent-lime/30 bg-accent-lime/10 p-6">
                <div className="flex items-start gap-4">
                  <Smartphone className="h-6 w-6 shrink-0 text-accent-lime" />
                  <div>
                    <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">
                      Get Unlimited Mock Tests
                    </h3>
                    <p className="mb-3 text-sm font-medium leading-relaxed text-neutral-700">
                      NomoExam's <Link href="/free-mock-test-app" className="font-semibold text-primary hover:underline">mock test app</Link> provides unlimited practice tests for SAT, ACT, JEE, NEET, and more. Get instant scoring, detailed analytics, and AI-powered mistake analysis after every test.
                    </p>
                    <Link href="/download-exam-app" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-neutral-800">
                      Download Free Mock Test App
                    </Link>
                  </div>
                </div>
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                When to Start Taking Mock Tests
              </h2>
              <p><strong>Critical Rule:</strong> Don't take your first mock until you've completed 70% of syllabus.</p>

              <p>Many students take mocks too early and get demotivated by low scores. Follow this timeline:</p>

              <ul>
                <li><strong>Month 1-2 of prep:</strong> No mocks. Focus on concept learning and chapter-wise practice.</li>
                <li><strong>Month 3:</strong> Take diagnostic mock (Week 1) + first official mock (Week 4). Both show your current level.</li>
                <li><strong>Month 4-5:</strong> 2-3 mocks per week. This is the intensive practice phase.</li>
                <li><strong>Final month:</strong> 3-4 mocks per week + daily topic revision.</li>
              </ul>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Mock Test Analysis: The 3-Hour Rule
              </h2>
              <p>
                <strong>Most important rule:</strong> Spend 3 hours analyzing each mock test. Many students skip this and wonder why scores don't improve.
              </p>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Step-by-Step Analysis Process</h3>

              <p><strong>1. Score & Categorize Mistakes (30 minutes)</strong></p>
              <ul>
                <li>Calculate raw score and scaled score</li>
                <li>Mark each wrong answer as: Concept Gap / Silly Mistake / Time Pressure</li>
                <li>Track weak topics (if 3+ wrong in same topic, you need revision)</li>
              </ul>

              <p><strong>2. Review Every Wrong Answer (90 minutes)</strong></p>
              <ul>
                <li>Don't just read the solution—understand WHY you got it wrong</li>
                <li>For concept gaps: Study that topic immediately from textbook/notes</li>
                <li>For silly mistakes: Identify pattern (rushing? misreading? calculation errors?)</li>
                <li>Redo the problem without looking at the solution</li>
              </ul>

              <p><strong>3. Review Correct but Uncertain Answers (30 minutes)</strong></p>
              <ul>
                <li>You guessed correctly—but did you actually know it?</li>
                <li>If you weren't 100% confident, mark it for revision</li>
                <li>These are hidden weak spots that will hurt you in the real exam</li>
              </ul>

              <p><strong>4. Track Patterns (30 minutes)</strong></p>
              <ul>
                <li>Maintain an error log: Date, Question Type, Topic, Reason for Error</li>
                <li>After 5-10 mocks, patterns emerge (e.g., "I always mess up rates questions under time pressure")</li>
                <li>Use these patterns to focus your remaining study time</li>
              </ul>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Time Management During Mock Tests
              </h2>

              <p><strong>Test-Day Strategy (Works for All Exams):</strong></p>

              <div className="not-prose space-y-4">
                {[
                  {
                    title: "First Pass (60-70% of time)",
                    desc: "Answer all questions you know. Skip anything that takes more than 1.5x average time per question. Mark skipped questions for return.",
                  },
                  {
                    title: "Second Pass (20-25% of time)",
                    desc: "Return to skipped questions. Use process of elimination. If still stuck after 2 minutes, make educated guess and move on.",
                  },
                  {
                    title: "Final Pass (10-15% of time)",
                    desc: "Review marked questions, check for silly mistakes (wrong bubble, sign errors), fill remaining blanks with educated guesses.",
                  },
                ].map((strategy) => (
                  <div key={strategy.title} className="rounded-lg border border-black/10 bg-zinc-50 p-4">
                    <h4 className="font-barlow mb-2 text-base font-bold text-neutral-900">{strategy.title}</h4>
                    <p className="text-sm font-medium leading-relaxed text-neutral-700">{strategy.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Common Mock Test Mistakes
              </h2>

              <div className="not-prose space-y-4">
                {[
                  {
                    title: "Taking Mocks Without Time Pressure",
                    desc: "Practice under real exam conditions: strict timing, no breaks, no phone. Untimed practice doesn't build exam skills.",
                  },
                  {
                    title: "Not Simulating Exam Environment",
                    desc: "Take mocks at the same time as your real exam (e.g., SAT is at 8 AM on Saturday). Your brain performs differently at different times.",
                  },
                  {
                    title: "Skipping Mock Analysis",
                    desc: "The test itself teaches you nothing—analysis does. Students who spend 3+ hours on analysis improve 2x faster than those who don't.",
                  },
                  {
                    title: "Always Taking Same Difficulty Mocks",
                    desc: "Mix easy (confidence builders), medium (exam-level), and tough (over-preparation) mocks. Variety prepares you for any difficulty on test day.",
                  },
                ].map((mistake) => (
                  <div key={mistake.title} className="flex items-start gap-4 rounded-lg border border-red-200 bg-red-50 p-4">
                    <AlertTriangle className="h-5 w-5 shrink-0 text-red-600" />
                    <div>
                      <h4 className="font-barlow mb-1 text-base font-bold text-neutral-900">{mistake.title}</h4>
                      <p className="text-sm font-medium leading-relaxed text-neutral-700">{mistake.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Mock Test Difficulty Progression
              </h2>

              <p><strong>Strategic Progression (4-Month Timeline):</strong></p>

              <ul>
                <li><strong>Month 1:</strong> Easy mocks (70-80% difficulty). Build confidence, learn pacing.</li>
                <li><strong>Month 2:</strong> Exam-level mocks (100% difficulty). This is your reality check.</li>
                <li><strong>Month 3:</strong> Mix of exam-level + tough mocks (110-120% difficulty).</li>
                <li><strong>Final Month:</strong> Majority tough mocks. Over-prepare so real exam feels easier.</li>
              </ul>

              <p className="mt-6">
                <strong>Why this works:</strong> Starting with tough mocks demotivates. Ending with easy mocks gives false confidence. This progression builds skills while maintaining motivation.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Exam-Specific Mock Strategies
              </h2>

              <h3 className="font-barlow mt-6 text-lg font-bold text-neutral-900">SAT / ACT Strategy</h3>
              <ul>
                <li>Use official College Board / ACT tests first (most accurate)</li>
                <li>Take 2 mocks in final week to maintain sharpness</li>
                <li>Focus on silly mistake reduction—most score gains come from eliminating careless errors</li>
              </ul>

              <h3 className="font-barlow mt-6 text-lg font-bold text-neutral-900">JEE / NEET Strategy</h3>
              <ul>
                <li>Take 2-3 mocks weekly in final 2 months</li>
                <li>Mix coaching institute mocks (tougher) with previous year papers (exam-level)</li>
                <li>Track negative marking carefully—learn when to skip vs. guess</li>
                <li>For JEE Advanced: Practice both papers back-to-back to build 6-hour stamina</li>
              </ul>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Frequently Asked Questions
              </h2>
              <div className="not-prose space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">{faq.question}</h3>
                    <p className="text-base font-medium leading-relaxed text-neutral-700">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">Final Thoughts</h2>
              <p>
                Mock tests are only as valuable as your analysis. The students who improve fastest spend more time reviewing tests than taking them. Follow the 3-hour analysis rule, track your mistakes, and adjust your study plan based on patterns.
              </p>

              <div className="not-prose mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/free-mock-test-app" className={`${MKT.btnPrimary} px-8 py-4 text-center text-base`}>
                  Get Free Mock Tests
                </Link>
                <Link href="/exam-preparation-app" className={`${MKT.btnOutlineLight} px-8 py-4 text-center text-base`}>
                  See All Features
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </MarketingPageShell>
  );
}
