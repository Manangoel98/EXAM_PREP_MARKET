import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import Link from "next/link";
import { marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, ArticleStructuredData, FAQStructuredData } from "@/lib/schema";
import { Clock, Target, Calendar, BookOpen, Brain, CheckCircle2, AlertTriangle } from "lucide-react";

const canonical = marketingAbsoluteUrl("/best-sat-study-schedule");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "Best SAT Study Schedule 2026: 1-Month, 3-Month & 6-Month Plans | NomoExam",
  description:
    "Find the best SAT study schedule for your timeline. Get detailed 1-month, 3-month, and 6-month study plans with daily breakdowns, practice test timing, and score improvement milestones.",
  alternates: { canonical },
  keywords: [
    "SAT study schedule",
    "best SAT study plan",
    "SAT study schedule 3 months",
    "SAT study plan 1 month",
    "SAT daily study schedule",
    "how to schedule SAT prep",
    "SAT study timeline",
    "SAT preparation schedule",
    "SAT study calendar",
    "SAT test prep schedule",
  ],
  openGraph: {
    title: "Best SAT Study Schedule 2026: Detailed Plans for Every Timeline",
    description: "Complete SAT study schedules for 1-month, 3-month, and 6-month timelines with daily breakdowns.",
    url: canonical,
    siteName: "NomoExam",
    type: "article",
    images: [{ url: og, width: 1200, height: 630, alt: "SAT Study Schedule Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best SAT Study Schedule 2026: Plans for Every Timeline",
    description: "Detailed SAT study schedules with daily breakdowns and milestone tracking.",
    images: [og],
  },
};

const faqs = [
  {
    question: "How many hours a day should I study for the SAT?",
    answer:
      "Most students should study 1.5-2.5 hours per day during weekdays and 3-4 hours on weekends. This totals 12-18 hours per week, which is optimal for consistent improvement without burnout. Cramming 5+ hours daily is counterproductive.",
  },
  {
    question: "Can I improve my SAT score in 1 month?",
    answer:
      "Yes, a 50-100 point improvement is realistic in 1 month with intensive daily study (2-3 hours/day). For larger gains (150+), you typically need 3+ months. Focus on your weakest areas and take 2-3 full-length practice tests.",
  },
  {
    question: "When should I start studying for the SAT?",
    answer:
      "Start at least 3 months before your test date for the best results. If you're targeting a 200+ point improvement or a score above 1500, start 5-6 months early. Many students begin sophomore year with light prep and intensify junior year.",
  },
  {
    question: "Is it better to study SAT every day or take days off?",
    answer:
      "Study 5-6 days per week and take 1-2 rest days. Your brain consolidates learning during rest. However, never take more than 2 consecutive days off—momentum matters. Active rest days (light vocabulary review or reading) are fine.",
  },
];

export default function BestSATStudySchedulePage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "Best SAT Study Schedule", url: canonical },
        ]}
      />
      <ArticleStructuredData
        title="Best SAT Study Schedule 2026: 1-Month, 3-Month & 6-Month Plans"
        description="Complete SAT study schedules for every timeline with daily breakdowns and milestones."
        datePublished="2026-06-20"
        dateModified="2026-07-05"
      />
      <FAQStructuredData faqs={faqs} />

      <main>
        <article className={`${MKT.pageSection} pb-20 pt-28 md:pb-32 md:pt-36`}>
          <div className={`${MKT.container} mx-auto max-w-4xl`}>
            {/* Header */}
            <div className="mb-8">
              <div className={`${MKT.badgeLight} mb-4`}>
                <Calendar className="h-4 w-4" />
                <span>SAT Study Schedule</span>
              </div>
              <h1 className={`${MKT.h1OnLight} mb-4`}>
                Best SAT Study Schedule 2026: Plans for Every Timeline
              </h1>
              <p className="text-base font-medium text-neutral-600 md:text-lg">
                Last updated: July 5, 2026 • 14 min read
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-neutral prose-lg max-w-none">
              <p className="lead text-lg font-medium leading-relaxed text-neutral-700">
                The difference between a mediocre SAT score and a great one often comes down to how you schedule your
                prep — not just how much you study. This guide gives you battle-tested study schedules for 1-month,
                3-month, and 6-month timelines, so you can pick the plan that matches your test date and stick to it.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                How to Choose Your Study Timeline
              </h2>
              <p>
                Your ideal timeline depends on three factors: your current score, your target score, and your available
                hours per week. Here's a quick framework:
              </p>
              <ul>
                <li><strong>1-month plan:</strong> You need a 50-100 point boost, already have a solid foundation, and can commit 20+ hours/week.</li>
                <li><strong>3-month plan:</strong> You want 100-200 point improvement, have moderate prep time (12-15 hours/week). This is the most popular timeline.</li>
                <li><strong>6-month plan:</strong> You're targeting 200+ point gains, starting from scratch, or aiming for 1500+. Allows 8-12 hours/week without burnout.</li>
              </ul>

              <div className="not-prose my-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">Know Your Baseline First</h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-700">
                      Before choosing a schedule, take a full diagnostic test. Your gap between current and target score
                      determines how long you need. A 100-point gap needs ~100 hours of focused prep. A 200-point gap
                      needs ~200 hours.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                The 6-Month SAT Study Schedule (Relaxed Pace)
              </h2>
              <p>
                Best for: Sophomores starting early, students with busy extracurriculars, or anyone targeting 1500+.
                This schedule requires only 8-12 hours per week.
              </p>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Months 1-2: Foundation Building</h3>
              <ul className="space-y-2">
                <li><strong>Week 1:</strong> Take diagnostic test. Analyze results by section and topic. Set target score.</li>
                <li><strong>Weeks 2-4:</strong> Math fundamentals — algebra, linear equations, systems. 30 min/day + 2 hours on weekends.</li>
                <li><strong>Weeks 5-8:</strong> Reading & Writing foundations — grammar rules, evidence-based reading strategies. Continue math practice.</li>
              </ul>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Months 3-4: Skill Development</h3>
              <ul className="space-y-2">
                <li><strong>Weeks 9-12:</strong> Advanced math topics (geometry, trigonometry, advanced algebra). Take practice test #2 at end of month 3.</li>
                <li><strong>Weeks 13-16:</strong> Deep reading comprehension practice (10 passages/week). Learn test-taking strategies. Practice test #3.</li>
              </ul>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Months 5-6: Testing Phase</h3>
              <ul className="space-y-2">
                <li><strong>Weeks 17-20:</strong> Weekly full-length practice tests. Review every mistake thoroughly. Target weak areas between tests.</li>
                <li><strong>Weeks 21-24:</strong> Final tests + light review. Taper intensity in last week. Build confidence, not stress.</li>
              </ul>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                The 3-Month SAT Study Schedule (Standard)
              </h2>
              <p>
                The goldilocks timeline. Most students achieve their best score-per-hour-invested with this schedule.
                Requires 12-15 hours per week — roughly 2 hours on weekdays and 3-4 on weekends.
              </p>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Month 1: Diagnose & Build</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left font-bold">Week</th>
                    <th className="text-left font-bold">Focus</th>
                    <th className="text-left font-bold">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Week 1</td><td>Diagnostic test + review + goal setting</td><td>12</td></tr>
                  <tr><td>Week 2</td><td>Math: Algebra & linear equations deep dive</td><td>14</td></tr>
                  <tr><td>Week 3</td><td>R&W: Grammar rules + evidence questions</td><td>14</td></tr>
                  <tr><td>Week 4</td><td>Practice test #2 + full review + gap analysis</td><td>15</td></tr>
                </tbody>
              </table>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Month 2: Intensify & Strategize</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left font-bold">Week</th>
                    <th className="text-left font-bold">Focus</th>
                    <th className="text-left font-bold">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Week 5</td><td>Targeted weak-area drills (50+ problems per topic)</td><td>15</td></tr>
                  <tr><td>Week 6</td><td>Advanced math + reading passage strategies</td><td>15</td></tr>
                  <tr><td>Week 7</td><td>Test-taking strategies: timing, elimination, flagging</td><td>14</td></tr>
                  <tr><td>Week 8</td><td>Practice test #3 + comprehensive review</td><td>15</td></tr>
                </tbody>
              </table>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Month 3: Test & Polish</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left font-bold">Week</th>
                    <th className="text-left font-bold">Focus</th>
                    <th className="text-left font-bold">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Week 9</td><td>Full test + review + remaining weak areas</td><td>14</td></tr>
                  <tr><td>Week 10</td><td>Full test + speed drills + confidence building</td><td>14</td></tr>
                  <tr><td>Week 11</td><td>Final full test + polish any remaining gaps</td><td>12</td></tr>
                  <tr><td>Week 12</td><td>Light review + rest. No new content. Confidence mode.</td><td>6</td></tr>
                </tbody>
              </table>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                The 1-Month SAT Study Schedule (Intensive)
              </h2>
              <p>
                For students who procrastinated or got a surprise score they need to improve. This requires 3-4 hours
                daily and high discipline. Realistic improvement: 50-100 points.
              </p>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Week 1: Crash Diagnostic</h3>
              <ul>
                <li><strong>Day 1:</strong> Full diagnostic test under real conditions. Score it immediately.</li>
                <li><strong>Day 2-3:</strong> Deep error analysis. Categorize every wrong answer. Identify your top 3 weak areas.</li>
                <li><strong>Day 4-7:</strong> Intensive study on your #1 weak area. 40-50 targeted problems per day.</li>
              </ul>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Week 2: Targeted Drilling</h3>
              <ul>
                <li><strong>Day 8-10:</strong> Attack weak area #2 intensively.</li>
                <li><strong>Day 11-12:</strong> Attack weak area #3.</li>
                <li><strong>Day 13-14:</strong> Practice test #2. Measure improvement. Reassess priorities.</li>
              </ul>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Week 3: Strategy & Speed</h3>
              <ul>
                <li><strong>Day 15-17:</strong> Learn and practice elimination strategies, time management, question flagging.</li>
                <li><strong>Day 18-19:</strong> Timed section practice (not full tests). Build speed without sacrificing accuracy.</li>
                <li><strong>Day 20-21:</strong> Practice test #3. This should be close to your target.</li>
              </ul>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Week 4: Peak & Taper</h3>
              <ul>
                <li><strong>Day 22-24:</strong> Final targeted drills on remaining weak areas.</li>
                <li><strong>Day 25-26:</strong> Last full practice test. Build confidence.</li>
                <li><strong>Day 27-28:</strong> Light review only. Formula sheet review. Get proper sleep.</li>
              </ul>

              <div className="not-prose my-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 shrink-0 text-amber-600" />
                  <div>
                    <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">1-Month Warning</h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-700">
                      If your diagnostic shows you need 200+ point improvement, consider postponing your test date.
                      One extra month of prep often yields better results than cramming at an unsustainable pace.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Daily Study Schedule Template
              </h2>
              <p>Here's what an ideal study day looks like regardless of which timeline you choose:</p>

              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left font-bold">Time Block</th>
                    <th className="text-left font-bold">Activity</th>
                    <th className="text-left font-bold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Block 1</td><td>Review yesterday's mistakes (spaced repetition)</td><td>20 min</td></tr>
                  <tr><td>Block 2</td><td>New concept learning or strategy study</td><td>30 min</td></tr>
                  <tr><td>Block 3</td><td>Targeted practice problems</td><td>45 min</td></tr>
                  <tr><td>Break</td><td>Walk, snack, rest eyes</td><td>10 min</td></tr>
                  <tr><td>Block 4</td><td>Timed section drill or mixed practice set</td><td>35 min</td></tr>
                  <tr><td>Block 5</td><td>Review and log errors</td><td>15 min</td></tr>
                </tbody>
              </table>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                How to Track Your Progress
              </h2>
              <p>
                Without tracking, you can't know if your schedule is working. Every week, log:
              </p>
              <ul>
                <li>Hours studied (actual, not planned)</li>
                <li>Practice test scores and section breakdowns</li>
                <li>Accuracy rates by topic area</li>
                <li>Questions completed and error rates</li>
              </ul>
              <p>
                If your score plateaus for 2+ weeks, it's time to adjust your approach — not just study more hours.
                Change what you study, not how long.
              </p>

              <div className="not-prose my-8 rounded-xl border border-accent-lime/30 bg-accent-lime/10 p-6">
                <div className="flex items-start gap-4">
                  <Brain className="h-6 w-6 shrink-0 text-neutral-800" />
                  <div>
                    <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">
                      Let NomoExam Build Your Schedule
                    </h3>
                    <p className="mb-3 text-sm font-medium leading-relaxed text-neutral-700">
                      Our AI creates a personalized daily study plan based on your diagnostic score, target score, and
                      exam date. It adapts every week based on your performance. No more guessing what to study next.
                    </p>
                    <Link
                      href="/try-free"
                      className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-neutral-800"
                    >
                      Get Your Free Study Plan
                    </Link>
                  </div>
                </div>
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Common Scheduling Mistakes
              </h2>
              <ul>
                <li><strong>Studying too much on Day 1:</strong> Enthusiasm fades. Start sustainable and increase gradually.</li>
                <li><strong>Skipping practice tests:</strong> Tests ARE the most effective study tool. Don't delay them.</li>
                <li><strong>Not scheduling rest days:</strong> Your brain needs downtime to consolidate. Build rest into the plan.</li>
                <li><strong>Ignoring weaknesses:</strong> It's tempting to practice what you're good at. Force yourself to work on weak areas 60% of the time.</li>
                <li><strong>Cramming the night before:</strong> Sleep is more important than last-minute review. Set a cutoff time of 6 PM the day before your test.</li>
              </ul>

              {/* FAQ Section */}
              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Frequently Asked Questions
              </h2>
              <div className="not-prose mt-6 space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-xl border border-black/[0.06] bg-white p-6">
                    <h3 className="font-barlow mb-2 text-base font-bold text-neutral-900">{faq.question}</h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* Final CTA */}
              <div className="not-prose mt-12 text-center">
                <h2 className="font-barlow mb-4 text-2xl font-bold text-neutral-900">
                  Ready to Start Your SAT Prep Schedule?
                </h2>
                <p className="mx-auto mb-6 max-w-lg text-sm font-medium text-neutral-600">
                  NomoExam builds your personalized study schedule in seconds. Take a diagnostic, set your target, and
                  get a day-by-day plan that adapts to your progress.
                </p>
                <Link
                  href="/try-free"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-neutral-800"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </MarketingPageShell>
  );
}
