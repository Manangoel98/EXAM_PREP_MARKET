import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import Link from "next/link";
import { marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, ArticleStructuredData, FAQStructuredData } from "@/lib/schema";
import { BookOpen, Clock, Target, Brain, CheckCircle2, AlertTriangle } from "lucide-react";

const canonical = marketingAbsoluteUrl("/act-vs-sat-which-test-should-you-take");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "ACT vs SAT 2026: Which Test Should You Take? Complete Comparison | NomoExam",
  description:
    "ACT vs SAT: understand the key differences in format, scoring, timing, and content. Take our quiz to find which test is better for your strengths. Complete 2026 comparison guide.",
  alternates: { canonical },
  keywords: [
    "ACT vs SAT",
    "SAT vs ACT which is easier",
    "should I take ACT or SAT",
    "ACT vs SAT differences",
    "ACT vs SAT comparison 2026",
    "ACT or SAT for college",
    "which test is easier ACT or SAT",
    "ACT vs SAT scoring",
    "SAT vs ACT format",
    "ACT vs SAT for math students",
  ],
  openGraph: {
    title: "ACT vs SAT 2026: Which Test Should You Take?",
    description: "Complete comparison of ACT and SAT. Find which test matches your strengths.",
    url: canonical,
    siteName: "NomoExam",
    type: "article",
    images: [{ url: og, width: 1200, height: 630, alt: "ACT vs SAT Comparison" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACT vs SAT: Which Test Is Right for You?",
    description: "Complete 2026 comparison guide for ACT and SAT.",
    images: [og],
  },
};

const faqs = [
  {
    question: "Do colleges prefer ACT or SAT?",
    answer:
      "No — all U.S. colleges accept both tests equally. There is zero admissions advantage to either test. Choose whichever test better suits your strengths. Some students even take both and submit the higher score.",
  },
  {
    question: "Is the ACT easier than the SAT?",
    answer:
      "Neither is objectively easier. The ACT has more questions in less time (requires speed), while the SAT gives more time per question but tests deeper reasoning. If you're fast but not meticulous, the ACT may feel easier. If you're careful and analytical, the SAT may feel easier.",
  },
  {
    question: "Can I take both the ACT and SAT?",
    answer:
      "Yes, and many students do. Take a practice test of each to see where you score higher. You can submit either score (or both) to colleges. Most advisors recommend choosing one to focus on after comparing diagnostic scores.",
  },
  {
    question: "When should I decide between ACT and SAT?",
    answer:
      "Take a practice test of each by spring of sophomore year or fall of junior year. Compare your percentile scores (not raw scores, since the scales differ). Focus your prep on whichever test puts you in a higher percentile.",
  },
];

export default function ACTvsSATPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "ACT vs SAT", url: canonical },
        ]}
      />
      <ArticleStructuredData
        title="ACT vs SAT 2026: Which Test Should You Take?"
        description="Complete comparison of ACT and SAT with format, scoring, and content differences."
        datePublished="2026-06-10"
        dateModified="2026-07-02"
      />
      <FAQStructuredData faqs={faqs} />

      <main>
        <article className={`${MKT.pageSection} pb-20 pt-28 md:pb-32 md:pt-36`}>
          <div className={`${MKT.container} mx-auto max-w-4xl`}>
            <div className="mb-8">
              <div className={`${MKT.badgeLight} mb-4`}>
                <BookOpen className="h-4 w-4" />
                <span>Test Comparison</span>
              </div>
              <h1 className={`${MKT.h1OnLight} mb-4`}>
                ACT vs SAT 2026: Which Test Should You Take?
              </h1>
              <p className="text-base font-medium text-neutral-600 md:text-lg">
                Last updated: July 2, 2026 • 13 min read
              </p>
            </div>

            <div className="prose prose-neutral prose-lg max-w-none">
              <p className="lead text-lg font-medium leading-relaxed text-neutral-700">
                The ACT vs. SAT decision is one of the most important choices in your college prep journey. The wrong
                choice can cost you 100+ equivalent points. This guide breaks down every meaningful difference so you
                can pick the test that plays to your strengths.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Quick Comparison Table
              </h2>
              <div className="not-prose my-6 overflow-x-auto rounded-xl border border-black/[0.08] shadow-sm">
                <table className="w-full text-sm">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="p-4 text-left font-bold text-neutral-900">Feature</th>
                      <th className="p-4 text-left font-bold text-neutral-900">SAT</th>
                      <th className="p-4 text-left font-bold text-neutral-900">ACT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/[0.04]">
                    <tr><td className="p-4 font-medium">Total Time</td><td className="p-4">2 hours 14 min</td><td className="p-4">2 hours 55 min (no essay)</td></tr>
                    <tr><td className="p-4 font-medium">Sections</td><td className="p-4">2 (R&W + Math)</td><td className="p-4">4 (English, Math, Reading, Science)</td></tr>
                    <tr><td className="p-4 font-medium">Total Questions</td><td className="p-4">98</td><td className="p-4">215</td></tr>
                    <tr><td className="p-4 font-medium">Time per Question</td><td className="p-4">~1.4 min</td><td className="p-4">~49 sec</td></tr>
                    <tr><td className="p-4 font-medium">Score Range</td><td className="p-4">400-1600</td><td className="p-4">1-36 composite</td></tr>
                    <tr><td className="p-4 font-medium">Science Section?</td><td className="p-4">No (data in math)</td><td className="p-4">Yes (40 questions)</td></tr>
                    <tr><td className="p-4 font-medium">Calculator</td><td className="p-4">Allowed throughout</td><td className="p-4">Allowed throughout</td></tr>
                    <tr><td className="p-4 font-medium">Guessing Penalty</td><td className="p-4">None</td><td className="p-4">None</td></tr>
                    <tr><td className="p-4 font-medium">Reading Style</td><td className="p-4">Evidence-based, analytical</td><td className="p-4">Straightforward, faster pace</td></tr>
                    <tr><td className="p-4 font-medium">Math Focus</td><td className="p-4">Algebra-heavy, word problems</td><td className="p-4">Broader range, geometry-heavy</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Key Differences That Actually Matter
              </h2>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">1. Time Pressure</h3>
              <p>
                This is the single biggest difference. The ACT gives you about 49 seconds per question; the SAT gives
                about 1.4 minutes. If you're a fast worker who thrives under time pressure, the ACT may suit you
                better. If you need more time to think carefully, the SAT is more forgiving.
              </p>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">2. Science Section (ACT Only)</h3>
              <p>
                The ACT has a dedicated Science section — but it's not really "science." It's data interpretation
                and scientific reasoning using charts, graphs, and experiment descriptions. If you're comfortable
                reading data and drawing conclusions quickly, this is a scoring opportunity. If charts confuse you,
                it's a liability.
              </p>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">3. Math Content</h3>
              <p>
                The SAT focuses heavily on algebra, linear equations, and data analysis (about 70% of math questions).
                The ACT covers a broader range including more geometry, trigonometry, and matrices. If you're an
                algebra star, SAT is your test. If you're well-rounded in math including geometry, ACT works better.
              </p>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">4. Reading Approach</h3>
              <p>
                SAT reading passages require more analytical thinking — you often need to find evidence for your
                answer from specific lines. ACT reading is more straightforward: read the passage, answer questions
                about what it says. ACT rewards speed-reading; SAT rewards careful, close reading.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                The ACT Is Better For You If...
              </h2>
              <ul>
                <li>You work quickly and accurately under time pressure</li>
                <li>You're strong in science/data interpretation</li>
                <li>You have a broad math background including geometry</li>
                <li>You prefer straightforward questions over tricky wording</li>
                <li>You're a fast reader who can process passages quickly</li>
              </ul>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                The SAT Is Better For You If...
              </h2>
              <ul>
                <li>You prefer more time per question to think carefully</li>
                <li>You're strong in algebra and word problems</li>
                <li>You excel at evidence-based analytical reading</li>
                <li>You don't enjoy science/data interpretation under pressure</li>
                <li>You're a careful, methodical worker rather than a speed worker</li>
              </ul>

              <div className="not-prose my-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">The Only Way to Know: Take Both</h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-700">
                      Take one full practice SAT and one full practice ACT under real conditions. Compare your percentile
                      scores (not raw scores). The test where you score a higher percentile is your test. This is the
                      only reliable method — gut feeling is unreliable.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Score Conversion: ACT to SAT
              </h2>
              <p>
                Since the tests use different scales, you need a concordance table to compare. Here are key benchmarks:
              </p>
              <div className="not-prose my-6 overflow-x-auto rounded-xl border border-black/[0.08] shadow-sm">
                <table className="w-full text-sm">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="p-4 text-left font-bold">SAT Score</th>
                      <th className="p-4 text-left font-bold">ACT Score</th>
                      <th className="p-4 text-left font-bold">Percentile</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/[0.04]">
                    <tr><td className="p-4">1600</td><td className="p-4">36</td><td className="p-4">99+</td></tr>
                    <tr><td className="p-4">1500</td><td className="p-4">34</td><td className="p-4">99</td></tr>
                    <tr><td className="p-4">1400</td><td className="p-4">31</td><td className="p-4">95-96</td></tr>
                    <tr><td className="p-4">1300</td><td className="p-4">28</td><td className="p-4">88-90</td></tr>
                    <tr><td className="p-4">1200</td><td className="p-4">25</td><td className="p-4">75-78</td></tr>
                    <tr><td className="p-4">1100</td><td className="p-4">22</td><td className="p-4">60-63</td></tr>
                    <tr><td className="p-4">1000</td><td className="p-4">19</td><td className="p-4">40-43</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Preparing for Both? Here's Your Strategy
              </h2>
              <p>
                If you haven't decided yet, there's significant overlap between ACT and SAT content. Start your prep
                with shared skills (algebra, grammar, reading comprehension) for the first month. Then take a practice
                test of each, pick your stronger test, and specialize for the remaining prep time.
              </p>

              <div className="not-prose my-8 rounded-xl border border-accent-lime/30 bg-accent-lime/10 p-6">
                <div className="flex items-start gap-4">
                  <Brain className="h-6 w-6 shrink-0 text-neutral-800" />
                  <div>
                    <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">
                      Prep for Both on NomoExam
                    </h3>
                    <p className="mb-3 text-sm font-medium leading-relaxed text-neutral-700">
                      NomoExam has dedicated content for both SAT and ACT — separate practice tests, study plans, and
                      AI tutoring for each exam. Switch between them anytime and track your progress separately.
                    </p>
                    <Link
                      href="/try-free"
                      className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-neutral-800"
                    >
                      Try Both Free
                    </Link>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">Frequently Asked Questions</h2>
              <div className="not-prose mt-6 space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-xl border border-black/[0.06] bg-white p-6">
                    <h3 className="font-barlow mb-2 text-base font-bold text-neutral-900">{faq.question}</h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
    </MarketingPageShell>
  );
}
