import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import Link from "next/link";
import { marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, ArticleStructuredData, FAQStructuredData } from "@/lib/schema";
import { CheckCircle2, Clock, Calendar, BookOpen, Smartphone } from "lucide-react";

const canonical = marketingAbsoluteUrl("/sat-study-plan");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "SAT Study Plan: 3-Month Schedule for 1500+ Score | NomoExam",
  description: "Follow our proven SAT study plan with weekly schedules, daily study routines, and practice test timelines. Designed to maximize your score in 3 months with structured preparation.",
  alternates: { canonical },
  keywords: [
    "SAT study plan",
    "SAT study schedule",
    "SAT preparation plan",
    "3 month SAT study plan",
    "SAT study routine",
    "how to make SAT study plan",
  ],
  openGraph: {
    title: "SAT Study Plan: 3-Month Schedule for 1500+ Score",
    description: "Week-by-week SAT study plan with daily schedules and practice test timeline.",
    url: canonical,
    siteName: "NomoExam",
    type: "article",
    images: [{ url: og, width: 1200, height: 630, alt: "SAT Study Plan" }],
  },
};

const faqs = [
  {
    question: "How many hours should I study for SAT per day?",
    answer: "For a 3-month plan, study 2-3 hours on weekdays and 4-5 hours on weekends. This totals 12-15 hours per week, which is optimal for score improvement without burnout.",
  },
  {
    question: "Can I follow this SAT study plan while in school?",
    answer: "Yes, this plan is designed for students in school. Study 2 hours after school on weekdays (4-6 PM) and longer sessions on weekends. Adjust based on your schedule.",
  },
  {
    question: "What if I have less than 3 months?",
    answer: "Compress the plan by studying 4-5 hours daily. Focus on high-weightage topics only. Take 1 practice test per week instead of every 2 weeks.",
  },
];

export default function SATStudyPlanPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "SAT Study Plan", url: canonical },
        ]}
      />
      <ArticleStructuredData
        title="SAT Study Plan: 3-Month Schedule for 1500+ Score"
        description="Comprehensive SAT study plan with weekly schedules and practice test timeline"
        datePublished="2026-04-17"
      />
      <FAQStructuredData faqs={faqs} />

      <main>
        <article className={`${MKT.pageSection} pb-20 pt-28 md:pb-32 md:pt-36`}>
          <div className={`${MKT.container} mx-auto max-w-4xl`}>
            <div className="mb-8">
              <div className={`${MKT.badgeLight} mb-4`}>
                <Calendar className="h-4 w-4" />
                <span>SAT Study Plan</span>
              </div>
              <h1 className={`${MKT.h1OnLight} mb-4`}>SAT Study Plan: 3-Month Schedule</h1>
              <p className="text-base font-medium text-neutral-600 md:text-lg">
                Week-by-week plan to score 1500+ • 12-15 hours/week
              </p>
            </div>

            <div className="prose prose-neutral prose-lg max-w-none">
              <p className="lead text-lg font-medium leading-relaxed text-neutral-700">
                This 3-month SAT study plan breaks down exactly what to study each week, when to take practice tests, and how to maximize your score improvement. Follow this schedule to go from your baseline to 1500+ systematically.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">Month 1: Foundation (Weeks 1-4)</h2>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Week 1: Diagnostic & Planning</h3>
              <div className="not-prose mb-6 rounded-lg border border-black/10 bg-zinc-50 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-barlow text-lg font-bold text-neutral-900">12 hours total</span>
                </div>
                <ul className="space-y-2 text-sm font-medium text-neutral-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Saturday (3 hours):</strong> Take full-length diagnostic test</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Sunday (4 hours):</strong> Score test, analyze mistakes, identify weak areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Mon-Fri (1 hour/day):</strong> Review SAT format, timing strategies, scoring system</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Week 2-3: Core Content Review</h3>
              <div className="not-prose mb-6 rounded-lg border border-black/10 bg-zinc-50 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-barlow text-lg font-bold text-neutral-900">14 hours/week</span>
                </div>
                <ul className="space-y-2 text-sm font-medium text-neutral-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Mon/Wed/Fri (2 hours):</strong> Math - Algebra, linear equations, word problems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Tue/Thu (2 hours):</strong> Reading & Writing - Grammar rules, punctuation, sentence structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Weekend (4 hours):</strong> Practice drills for weakest topics from diagnostic</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Week 4: First Practice Test</h3>
              <div className="not-prose mb-6 rounded-lg border border-black/10 bg-zinc-50 p-6">
                <ul className="space-y-2 text-sm font-medium text-neutral-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Mon-Thu (2 hours):</strong> Continue content review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Saturday:</strong> Practice Test #2 (full-length, timed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Sunday:</strong> Review every mistake - this is critical!</span>
                  </li>
                </ul>
              </div>

              <div className="not-prose my-8 rounded-xl border border-accent-lime/30 bg-accent-lime/10 p-6">
                <div className="flex items-start gap-4">
                  <Smartphone className="h-6 w-6 shrink-0 text-accent-lime" />
                  <div>
                    <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">
                      Get Personalized SAT Study Plan
                    </h3>
                    <p className="mb-3 text-sm font-medium leading-relaxed text-neutral-700">
                      NomoExam's <Link href="/sat-prep-app" className="font-semibold text-primary hover:underline">SAT prep app</Link> creates a custom study schedule based on your diagnostic score, target score, and exam date. Adjust weekly as you improve.
                    </p>
                    <Link href="/download-exam-app" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-neutral-800">
                      Download Free App
                    </Link>
                  </div>
                </div>
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">Month 2: Skill Building (Weeks 5-8)</h2>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Week 5-6: Advanced Topics + Strategy</h3>
              <div className="not-prose mb-6 rounded-lg border border-black/10 bg-zinc-50 p-6">
                <ul className="space-y-2 text-sm font-medium text-neutral-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Math:</strong> Quadratics, exponentials, data analysis, geometry proofs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Reading:</strong> Evidence-based questions, graph interpretation, paired passages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Strategy Focus:</strong> Process of elimination, time management per section</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Week 7: Mid-Point Practice Test</h3>
              <div className="not-prose mb-6 rounded-lg border border-black/10 bg-zinc-50 p-6">
                <ul className="space-y-2 text-sm font-medium text-neutral-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Saturday:</strong> Practice Test #3 (expect 60-80 point improvement)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Sunday:</strong> Deep analysis - track patterns in your mistakes</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Week 8: Targeted Weak Area Practice</h3>
              <p>Focus entire week on your 2-3 weakest topics. Do 50+ problems per weak topic. Use <Link href="/free-mock-test-app" className="font-semibold text-primary hover:underline">NomoExam's practice drills</Link> for targeted practice.</p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">Month 3: Testing & Refinement (Weeks 9-12)</h2>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Week 9-10: Weekly Practice Tests</h3>
              <div className="not-prose mb-6 rounded-lg border border-black/10 bg-zinc-50 p-6">
                <ul className="space-y-2 text-sm font-medium text-neutral-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Each Saturday:</strong> Full-length practice test (Tests #4, #5)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Each Sunday:</strong> 4-hour deep review session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Weekdays:</strong> Light review of formulas, grammar rules, vocab</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Week 11: Final Push</h3>
              <div className="not-prose mb-6 rounded-lg border border-black/10 bg-zinc-50 p-6">
                <ul className="space-y-2 text-sm font-medium text-neutral-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Monday:</strong> Practice Test #6 (should be near target score)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Tuesday-Thursday:</strong> Fix remaining weak spots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Saturday:</strong> Final practice test #7</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Week 12: Test Week</h3>
              <div className="not-prose mb-6 rounded-lg border border-black/10 bg-zinc-50 p-6">
                <ul className="space-y-2 text-sm font-medium text-neutral-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Mon-Wed:</strong> Light review only - formulas, grammar rules (1 hour/day)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Thursday:</strong> No studying - relax and rest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Friday:</strong> Early sleep, prepare materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-lime" />
                    <span><strong>Saturday:</strong> TEST DAY - you're ready!</span>
                  </li>
                </ul>
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">Daily Study Routine</h2>
              <p><strong>Weekday Schedule (2 hours):</strong></p>
              <ul>
                <li>4:00-4:15 PM: Review yesterday's work</li>
                <li>4:15-5:30 PM: New content or practice (75 min)</li>
                <li>5:30-6:00 PM: Error review and notes (30 min)</li>
              </ul>

              <p className="mt-6"><strong>Weekend Schedule (4-5 hours):</strong></p>
              <ul>
                <li>9:00 AM-12:00 PM: Practice test OR intensive topic study</li>
                <li>12:00-1:00 PM: Break</li>
                <li>1:00-3:00 PM: Review mistakes OR additional practice</li>
              </ul>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">Practice Test Schedule</h2>
              <div className="not-prose overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-neutral-900">
                      <th className="p-3 text-left font-barlow font-bold">Week</th>
                      <th className="p-3 text-left font-barlow font-bold">Test</th>
                      <th className="p-3 text-left font-barlow font-bold">Expected Score Gain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    <tr><td className="p-3">1</td><td className="p-3">Diagnostic</td><td className="p-3">Baseline</td></tr>
                    <tr><td className="p-3">4</td><td className="p-3">Test #2</td><td className="p-3">+20-40 points</td></tr>
                    <tr><td className="p-3">7</td><td className="p-3">Test #3</td><td className="p-3">+60-80 points total</td></tr>
                    <tr><td className="p-3">9</td><td className="p-3">Test #4</td><td className="p-3">+80-100 points total</td></tr>
                    <tr><td className="p-3">10</td><td className="p-3">Test #5</td><td className="p-3">+100-130 points total</td></tr>
                    <tr><td className="p-3">11</td><td className="p-3">Tests #6-7</td><td className="p-3">+120-150 points total</td></tr>
                  </tbody>
                </table>
              </div>

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

              <div className="not-prose mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/sat-prep-app" className={`${MKT.btnPrimary} px-8 py-4 text-center text-base`}>
                  Get SAT Prep App
                </Link>
                <Link href="/how-to-prepare-for-sat" className={`${MKT.btnOutlineLight} px-8 py-4 text-center text-base`}>
                  Read SAT Preparation Guide
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </MarketingPageShell>
  );
}
