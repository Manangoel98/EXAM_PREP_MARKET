import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import Link from "next/link";
import { marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, ArticleStructuredData, FAQStructuredData } from "@/lib/schema";
import { Brain, Target, BookOpen, Clock, AlertTriangle, CheckCircle2 } from "lucide-react";

const canonical = marketingAbsoluteUrl("/how-to-prepare-for-gre");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "How to Prepare for GRE 2026: Complete Study Guide & Strategy | NomoExam",
  description:
    "Master GRE preparation with our comprehensive 2026 guide. Includes section-by-section strategies for Verbal, Quant, and AWA, plus 3-month study plan, score goals, and expert tips.",
  alternates: { canonical },
  keywords: [
    "how to prepare for GRE",
    "GRE preparation guide",
    "GRE study plan",
    "GRE strategies",
    "GRE verbal tips",
    "GRE quant prep",
    "GRE study schedule",
    "GRE 2026 guide",
    "GRE preparation tips",
    "best way to study for GRE",
  ],
  openGraph: {
    title: "How to Prepare for GRE 2026: Complete Study Guide",
    description: "Comprehensive GRE preparation strategies with section-specific tips and study plans.",
    url: canonical,
    siteName: "NomoExam",
    type: "article",
    images: [{ url: og, width: 1200, height: 630, alt: "GRE Preparation Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Prepare for GRE 2026",
    description: "Complete GRE study guide with strategies for Verbal, Quant, and AWA.",
    images: [og],
  },
};

const faqs = [
  {
    question: "How long should I study for the GRE?",
    answer:
      "Most students need 2-4 months of preparation (8-15 hours/week). If you're targeting a 320+ score from a baseline below 300, plan for 4-5 months. Students with strong math backgrounds may need less time on Quant but should allocate extra time for Verbal vocabulary.",
  },
  {
    question: "What is a good GRE score for top graduate programs?",
    answer:
      "A combined score of 320+ (Verbal + Quant) is competitive for top-50 programs. Top-10 programs typically want 325+. For STEM programs, Quant 165+ matters most. For humanities/social sciences, Verbal 160+ is more important. Always check specific program requirements.",
  },
  {
    question: "Is the GRE harder than the SAT?",
    answer:
      "The GRE tests more advanced vocabulary and reasoning skills, but the math is similar difficulty to the SAT (advanced algebra, geometry, data analysis). The biggest difference is Verbal — GRE vocabulary is much more challenging. If you scored well on the SAT, you have a head start on GRE Quant.",
  },
  {
    question: "Should I use GRE prep books or an app?",
    answer:
      "Use both. Prep books are good for comprehensive content review and official practice problems. Apps like NomoExam provide adaptive practice, AI tutoring for instant help, and progress tracking that books can't match. Start with a book for content, use the app for daily practice.",
  },
];

export default function HowToPrepareForGREPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "How to Prepare for GRE", url: canonical },
        ]}
      />
      <ArticleStructuredData
        title="How to Prepare for GRE 2026: Complete Study Guide & Strategy"
        description="Comprehensive guide to GRE preparation with section-specific strategies."
        datePublished="2026-06-01"
        dateModified="2026-07-03"
      />
      <FAQStructuredData faqs={faqs} />

      <main>
        <article className={`${MKT.pageSection} pb-20 pt-28 md:pb-32 md:pt-36`}>
          <div className={`${MKT.container} mx-auto max-w-4xl`}>
            <div className="mb-8">
              <div className={`${MKT.badgeLight} mb-4`}>
                <BookOpen className="h-4 w-4" />
                <span>GRE Preparation Guide</span>
              </div>
              <h1 className={`${MKT.h1OnLight} mb-4`}>
                How to Prepare for GRE: Complete 2026 Guide
              </h1>
              <p className="text-base font-medium text-neutral-600 md:text-lg">
                Last updated: July 3, 2026 • 18 min read
              </p>
            </div>

            <div className="prose prose-neutral prose-lg max-w-none">
              <p className="lead text-lg font-medium leading-relaxed text-neutral-700">
                The GRE (Graduate Record Examination) is your gateway to graduate school — whether that's a master's
                program, PhD, or MBA. With the right preparation strategy, you can achieve a competitive score
                regardless of your starting point. This guide covers everything from understanding the test structure
                to a detailed 3-month preparation plan.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Understanding the GRE Structure (2026)
              </h2>
              <p>
                The GRE General Test consists of three sections:
              </p>
              <ul>
                <li><strong>Verbal Reasoning (130-170):</strong> Tests vocabulary, reading comprehension, and critical reasoning. Two sections, ~40 questions total.</li>
                <li><strong>Quantitative Reasoning (130-170):</strong> Tests math through arithmetic, algebra, geometry, and data analysis. Two sections, ~40 questions total.</li>
                <li><strong>Analytical Writing (0-6):</strong> One "Analyze an Issue" essay. Tests argument construction and writing clarity.</li>
              </ul>
              <p>
                Total test time is approximately 1 hour 58 minutes. The maximum combined Verbal + Quant score is 340.
                Most graduate programs focus on the combined V+Q score, with some programs weighting one section
                more heavily depending on field.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                GRE Verbal: Strategy for Non-Native & Native Speakers
              </h2>
              <p>
                Verbal Reasoning is where most students lose points. It tests vocabulary depth and reading
                comprehension at a graduate level. Here's how to tackle it:
              </p>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Vocabulary Building (Essential)</h3>
              <ul>
                <li><strong>Learn 800-1000 high-frequency GRE words.</strong> These appear repeatedly across tests. Use spaced repetition (flashcards daily).</li>
                <li><strong>Learn word roots, prefixes, and suffixes.</strong> This lets you decode unfamiliar words. ~100 roots cover thousands of words.</li>
                <li><strong>Read challenging material daily.</strong> The Economist, Atlantic, academic abstracts. Build passive vocabulary.</li>
                <li><strong>Context over memorization.</strong> Learn how words are used, not just definitions. Many GRE answers test nuance.</li>
              </ul>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Reading Comprehension</h3>
              <ul>
                <li><strong>Practice active reading:</strong> Summarize each paragraph's main point as you read.</li>
                <li><strong>Identify passage structure:</strong> Is it argument-counterargument? Cause-effect? Problem-solution?</li>
                <li><strong>Read the questions first:</strong> Know what you're looking for before diving into the passage.</li>
                <li><strong>Eliminate wrong answers:</strong> GRE has subtle distractors — learn to spot answers that are "close but wrong."</li>
              </ul>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                GRE Quant: Math Strategy
              </h2>
              <p>
                GRE Quant tests math concepts up to early college level. The difficulty isn't in advanced math — it's
                in problem-solving under time pressure with tricky wording.
              </p>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Core Topics to Master</h3>
              <ol>
                <li><strong>Number properties</strong> — factors, multiples, primes, even/odd, positive/negative</li>
                <li><strong>Ratios & percentages</strong> — percent change, ratio problems, proportion</li>
                <li><strong>Algebra</strong> — linear equations, inequalities, quadratics, functions</li>
                <li><strong>Geometry</strong> — circles, triangles, coordinate geometry, area/perimeter</li>
                <li><strong>Data analysis</strong> — mean, median, standard deviation, probability, counting</li>
                <li><strong>Word problems</strong> — rate/distance, mixture, work problems</li>
              </ol>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Quant Question Types</h3>
              <ul>
                <li><strong>Quantitative Comparison:</strong> Compare two quantities. Learn to pick smart numbers and test edge cases.</li>
                <li><strong>Multiple Choice:</strong> Standard problem-solving. Backsolving (plugging in answers) saves time.</li>
                <li><strong>Numeric Entry:</strong> Type the exact answer. No answer choices to eliminate — you must solve completely.</li>
                <li><strong>Data Interpretation:</strong> Charts and graphs. Practice reading data quickly and accurately.</li>
              </ul>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                GRE Analytical Writing (AWA)
              </h2>
              <p>
                The AWA section requires one essay in 30 minutes. Here's the formula for a 4.5+ score:
              </p>
              <ul>
                <li><strong>Structure:</strong> Intro → 3 body paragraphs → conclusion. Always.</li>
                <li><strong>Thesis:</strong> Take a clear position in the first paragraph. Don't be wishy-washy.</li>
                <li><strong>Examples:</strong> Use specific, concrete examples to support each point. Vague generalities score low.</li>
                <li><strong>Length:</strong> Aim for 500-600 words. Longer essays (if coherent) tend to score higher.</li>
                <li><strong>Counterargument:</strong> Acknowledge the opposing view briefly, then explain why your position is stronger.</li>
              </ul>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                3-Month GRE Study Plan
              </h2>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Month 1: Foundation</h3>
              <ul>
                <li>Week 1: Diagnostic test + score analysis + goal setting</li>
                <li>Weeks 2-3: Vocabulary building (100 words/week) + Quant concept review</li>
                <li>Week 4: Practice test #2 + reading comprehension drills</li>
              </ul>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Month 2: Skill Building</h3>
              <ul>
                <li>Weeks 5-6: Advanced Quant topics + continued vocabulary + passage practice</li>
                <li>Week 7: Strategy development (question-type-specific approaches)</li>
                <li>Week 8: Practice test #3 + error analysis + AWA practice essays</li>
              </ul>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Month 3: Testing & Polish</h3>
              <ul>
                <li>Weeks 9-10: Weekly full practice tests + review cycles</li>
                <li>Week 11: Final practice test + targeted drilling on remaining weak areas</li>
                <li>Week 12: Light review + confidence building + test logistics prep</li>
              </ul>

              <div className="not-prose my-8 rounded-xl border border-accent-lime/30 bg-accent-lime/10 p-6">
                <div className="flex items-start gap-4">
                  <Brain className="h-6 w-6 shrink-0 text-neutral-800" />
                  <div>
                    <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">
                      GRE Prep on NomoExam
                    </h3>
                    <p className="mb-3 text-sm font-medium leading-relaxed text-neutral-700">
                      NomoExam's GRE prep includes adaptive practice questions, vocabulary flashcards with spaced
                      repetition, full-length practice tests, and an AI tutor for instant help on Quant and Verbal
                      problems.
                    </p>
                    <Link
                      href="/try-free"
                      className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-neutral-800"
                    >
                      Start GRE Prep Free
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

              {/* CTA */}
              <div className="not-prose mt-12 text-center">
                <h2 className="font-barlow mb-4 text-2xl font-bold text-neutral-900">
                  Start Your GRE Preparation Today
                </h2>
                <p className="mx-auto mb-6 max-w-lg text-sm font-medium text-neutral-600">
                  Get a personalized GRE study plan, adaptive practice, and unlimited AI tutoring. Join thousands
                  of students preparing smarter with NomoExam.
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
