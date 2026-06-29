import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import Link from "next/link";
import { marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, ArticleStructuredData, FAQStructuredData } from "@/lib/schema";
import { CheckCircle2, AlertTriangle, Clock, BookOpen, Smartphone } from "lucide-react";

const canonical = marketingAbsoluteUrl("/how-to-prepare-for-jee");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "How to Prepare for JEE: Complete Strategy for JEE Main & Advanced 2026",
  description: "Master JEE preparation with proven strategies for Physics, Chemistry, and Mathematics. Includes study plan, time management tips, and mistakes to avoid for JEE Main and Advanced.",
  alternates: { canonical },
  keywords: [
    "how to prepare for JEE",
    "JEE preparation",
    "JEE study plan",
    "JEE preparation strategy",
    "JEE Main preparation",
    "JEE Advanced preparation",
    "how to crack JEE",
    "JEE preparation tips",
    "JEE preparation for class 12",
  ],
  openGraph: {
    title: "How to Prepare for JEE: Complete Strategy for Main & Advanced",
    description: "Proven JEE preparation strategies for Indian students targeting IITs and NITs.",
    url: canonical,
    siteName: "NomoExam",
    type: "article",
    images: [{ url: og, width: 1200, height: 630, alt: "JEE Preparation Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Prepare for JEE: Complete Strategy Guide",
    description: "Master Physics, Chemistry, and Maths for JEE Main & Advanced.",
    images: [og],
  },
};

const faqs = [
  {
    question: "Is 1 year enough to prepare for JEE?",
    answer: "Yes, but it requires intense focus. Students who start in Class 12 need 6-8 hours of daily study alongside school. Ideally, start JEE preparation in Class 11 for better concept building and less pressure.",
  },
  {
    question: "Which is harder: JEE Main or JEE Advanced?",
    answer: "JEE Advanced is significantly harder. It requires deeper conceptual understanding, multi-step problem solving, and tests application skills. Only top 2.5 lakh JEE Main rankers qualify for Advanced.",
  },
  {
    question: "How many mock tests should I take for JEE?",
    answer: "Take 30-40 full-length mocks for JEE Main and 15-20 for JEE Advanced. Start mocks 4 months before the exam, taking 2-3 per week in the final 2 months.",
  },
  {
    question: "Should I join coaching or is self-study enough for JEE?",
    answer: "Both work. Coaching provides structure and peer competition. Self-study with quality resources (like NomoExam app) works if you're disciplined. Many top rankers use a hybrid approach: coaching for concept clarity + app for practice.",
  },
];

export default function HowToPrepareForJEEPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "How to Prepare for JEE", url: canonical },
        ]}
      />
      <ArticleStructuredData
        title="How to Prepare for JEE: Complete Strategy for JEE Main & Advanced 2026"
        description="Comprehensive JEE preparation guide for Indian students targeting IITs and NITs."
        datePublished="2026-04-17"
        dateModified="2026-04-17"
      />
      <FAQStructuredData faqs={faqs} />

      <main>
        <article className={`${MKT.pageSection} pb-20 pt-28 md:pb-32 md:pt-36`}>
          <div className={`${MKT.container} mx-auto max-w-4xl`}>
            <div className="mb-8">
              <div className={`${MKT.badgeLight} mb-4`}>
                <BookOpen className="h-4 w-4" />
                <span>JEE Preparation Guide</span>
              </div>
              <h1 className={`${MKT.h1OnLight} mb-4`}>How to Prepare for JEE: Complete 2026 Strategy</h1>
              <p className="text-base font-medium text-neutral-600 md:text-lg">
                Last updated: April 17, 2026 • 15 min read • For Indian Students
              </p>
            </div>

            <div className="prose prose-neutral prose-lg max-w-none">
              <p className="lead text-lg font-medium leading-relaxed text-neutral-700">
                Cracking JEE Main and Advanced requires strategic preparation across Physics, Chemistry, and Mathematics. This guide covers proven strategies, optimal study plans, and critical mistakes to avoid—based on insights from IIT toppers and successful JEE candidates.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Understanding JEE: Main vs Advanced
              </h2>
              <p>
                <strong>JEE Main</strong> is the gateway exam for NITs, IIITs, and CFTIs. It has 90 questions (30 each
                in Physics, Chemistry, Maths) with a mix of MCQs and numerical value questions. Total duration: 3 hours.
              </p>
              <p>
                <strong>JEE Advanced</strong> is for IIT admissions. Only top 2.5 lakh JEE Main rankers qualify. It's
                significantly tougher, testing deep conceptual understanding with two 3-hour papers.
              </p>
              <p>
                Your preparation strategy must account for both exams. JEE Main requires speed and accuracy across all topics. JEE Advanced demands conceptual depth and problem-solving creativity.
              </p>

              <div className="not-prose my-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">When to Start JEE Preparation</h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-700">
                      <strong>Ideal:</strong> Start in Class 11 (2-year preparation). <strong>Minimum:</strong> Start by July of Class 12 (1-year preparation). Starting late requires 8-10 hours daily study, which is extremely difficult alongside board exams.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                2-Year JEE Preparation Plan (Class 11-12)
              </h2>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Class 11 (Foundation Year)</h3>
              <p><strong>Goal:</strong> Build strong fundamentals in all three subjects. This year determines your success.</p>
              <ul className="space-y-2">
                <li><strong>April-July:</strong> Focus on school syllabus + NCERT mastery. Don't jump to advanced problems yet.</li>
                <li><strong>August-December:</strong> Complete Class 11 JEE syllabus. Study 4-5 hours daily alongside school. Solve HC Verma (Physics), Cengage (Maths), NCERT + Modern's ABC (Chemistry).</li>
                <li><strong>January-March:</strong> Revise Class 11 topics. Take 5-10 topic-wise tests. Identify weak areas before Class 12 starts.</li>
              </ul>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Class 12 (Intensive Year)</h3>
              <p><strong>Goal:</strong> Complete syllabus + intensive practice + mock tests.</p>
              <ul className="space-y-2">
                <li><strong>April-September:</strong> Complete Class 12 JEE syllabus. Study 6-7 hours daily. Balance board exam prep with JEE.</li>
                <li><strong>October-December:</strong> First revision of entire syllabus. Start solving previous year questions (PYQs) from 2010 onwards.</li>
                <li><strong>January:</strong> Board exam focus (but don't stop JEE completely—1 hour daily minimum).</li>
                <li><strong>March-April (JEE Main):</strong> Intensive mock tests (2-3 per week). Revise formulae daily. Time management practice.</li>
                <li><strong>May (JEE Advanced):</strong> Advanced-level problems. Focus on multi-concept questions. Practice both papers.</li>
              </ul>

              <div className="not-prose my-8 rounded-xl border border-accent-lime/30 bg-accent-lime/10 p-6">
                <div className="flex items-start gap-4">
                  <Smartphone className="h-6 w-6 shrink-0 text-accent-lime" />
                  <div>
                    <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">
                      Get Personalized JEE Study Plan
                    </h3>
                    <p className="mb-3 text-sm font-medium leading-relaxed text-neutral-700">
                      NomoExam's <Link href="/jee-prep-app" className="font-semibold text-primary hover:underline">JEE prep app</Link> provides AI-powered study plans tailored to your current level, weak topics, and exam date. Track progress across Physics, Chemistry, and Maths with detailed analytics.
                    </p>
                    <Link href="/download-exam-app" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-neutral-800">
                      Download Free for Indian Students
                    </Link>
                  </div>
                </div>
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Subject-Wise JEE Preparation Strategies
              </h2>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Physics Strategy</h3>
              <p><strong>High-Weightage Topics:</strong> Mechanics (30%), Electromagnetism (25%), Modern Physics (15%), Thermodynamics (10%).</p>
              <ul>
                <li><strong>Theory + Numericals:</strong> Physics requires equal focus on concepts and problem-solving. Don't skip theory—Advanced tests conceptual depth.</li>
                <li><strong>Best Resources:</strong> HC Verma for concepts, DC Pandey for practice, previous year papers for exam patterns.</li>
                <li><strong>Mistake to Avoid:</strong> Memorizing formulas without understanding derivations. JEE Advanced often asks WHY, not just HOW.</li>
              </ul>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Chemistry Strategy</h3>
              <p><strong>Three Sections:</strong> Physical (40%), Organic (35%), Inorganic (25%).</p>
              <ul>
                <li><strong>Physical Chemistry:</strong> Most scoring if you master numerical problems. Practice 50+ problems per chapter.</li>
                <li><strong>Organic Chemistry:</strong> Understand reaction mechanisms, not just reactions. Make reaction charts for quick revision.</li>
                <li><strong>Inorganic Chemistry:</strong> Requires memorization. Use mnemonics. NCERT is must for inorganic—many Main questions are direct NCERT lifts.</li>
                <li><strong>Best Resources:</strong> NCERT (read 3 times), OP Tandon, MS Chauhan (organic), JD Lee (inorganic).</li>
              </ul>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Mathematics Strategy</h3>
              <p><strong>High-Weightage Topics:</strong> Calculus (40%), Algebra (25%), Coordinate Geometry (20%), Vectors & 3D (15%).</p>
              <ul>
                <li><strong>Practice Volume:</strong> Maths requires the most practice. Solve 2000+ problems across all topics.</li>
                <li><strong>Speed Development:</strong> Practice timed chapter tests. Many students know concepts but run out of time.</li>
                <li><strong>Integration Tricks:</strong> Master LIATE rule, substitution methods, and standard forms. These save critical time.</li>
                <li><strong>Best Resources:</strong> Cengage series, Arihant Problem Book, previous year questions.</li>
              </ul>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Critical JEE Preparation Mistakes
              </h2>

              <div className="not-prose space-y-4">
                {[
                  {
                    title: "Ignoring NCERT",
                    desc: "40-50% of JEE Main questions come directly from NCERT, especially in Chemistry. Many students skip NCERT for 'advanced' books and miss easy marks. Read NCERT thoroughly—not just examples, but theory too.",
                  },
                  {
                    title: "Not Solving Previous Year Papers",
                    desc: "PYQs reveal exam patterns, frequently tested concepts, and difficulty levels. Solve JEE Main papers from last 10 years and Advanced papers from last 5 years. Many questions repeat conceptually.",
                  },
                  {
                    title: "Weak Revision Strategy",
                    desc: "Students study chapters once and move on. JEE tests retention across 2 years of syllabus. Revise each chapter 3-4 times. Make short notes for quick revision in the last month.",
                  },
                  {
                    title: "Neglecting Board Exams",
                    desc: "75% in boards is mandatory for JEE Advanced. Don't sacrifice boards completely. Study smart: most Class 12 board syllabus overlaps with JEE. Use board prep time for JEE basics.",
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
                Mock Test Strategy for JEE
              </h2>
              <p>Mock tests are where preparation translates to performance. Here's the optimal strategy:</p>
              
              <h3 className="font-barlow mt-6 text-lg font-bold text-neutral-900">When to Start Mocks</h3>
              <ul>
                <li><strong>JEE Main:</strong> Start 4 months before the exam (December for April attempt)</li>
                <li><strong>JEE Advanced:</strong> Start after JEE Main (May onwards)</li>
              </ul>

              <h3 className="font-barlow mt-6 text-lg font-bold text-neutral-900">How Many Mocks to Take</h3>
              <ul>
                <li><strong>JEE Main:</strong> 30-40 full-length mocks (mix of easy, moderate, tough)</li>
                <li><strong>JEE Advanced:</strong> 15-20 full-length mocks (both papers)</li>
              </ul>

              <h3 className="font-barlow mt-6 text-lg font-bold text-neutral-900">Mock Analysis is Key</h3>
              <p>Spend 3 hours analyzing each mock test:</p>
              <ul>
                <li>Review every wrong answer—why did you make that mistake?</li>
                <li>Identify silly mistakes (calculation errors, negative marking traps)</li>
                <li>Track weak topics across mocks—these need extra practice</li>
                <li>Analyze time spent per question—are you too slow anywhere?</li>
              </ul>

              <p>Use <Link href="/free-mock-test-app" className="font-semibold text-primary hover:underline">NomoExam's free mock test app</Link> for realistic JEE practice with instant analytics and AI explanations for every question.</p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Daily Study Schedule for JEE
              </h2>
              <p><strong>Class 12 Student (Alongside School):</strong> 6-7 hours daily</p>
              <ul>
                <li>5:30 AM - 7:00 AM: Physics numericals (1.5 hours)</li>
                <li>7:00 AM - 8:00 AM: Breakfast + revision of previous day</li>
                <li>School: 8:00 AM - 3:00 PM</li>
                <li>4:00 PM - 6:00 PM: Chemistry (2 hours)</li>
                <li>6:00 PM - 7:00 PM: Break</li>
                <li>7:00 PM - 9:30 PM: Mathematics (2.5 hours)</li>
                <li>9:30 PM - 10:00 PM: Formula revision + doubt clearing</li>
              </ul>
              <p><strong>Sunday:</strong> Full-length mock test + analysis (5-6 hours)</p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Best Resources for JEE Preparation
              </h2>
              <ul>
                <li><strong>NCERT Textbooks:</strong> Must-read for all subjects, especially Chemistry</li>
                <li><strong>Physics:</strong> HC Verma, DC Pandey, Resnick Halliday (for Advanced)</li>
                <li><strong>Chemistry:</strong> OP Tandon, MS Chauhan, JD Lee</li>
                <li><strong>Mathematics:</strong> Cengage, Arihant Skills in Mathematics</li>
                <li><strong>NomoExam JEE App:</strong> Personalized study plans, 5000+ practice questions, unlimited AI doubt solving. Designed specifically for Indian students preparing for JEE. <Link href="/jee-prep-app" className="font-semibold text-primary hover:underline">Download now</Link>.</li>
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

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">Final Tips for JEE Success</h2>
              <div className="not-prose space-y-3">
                {[
                  "Consistency beats intensity. Study 6 hours daily for 2 years > 12 hours daily for 6 months",
                  "Solve NCERT exemplar problems—they bridge the gap between school and JEE",
                  "Don't chase too many books. Master one good book per subject",
                  "Physical health matters: sleep 7 hours, exercise 30 min daily, eat proper meals",
                  "Attempt 75-80 questions in JEE Main (don't rush for 90/90)",
                  "For Advanced, accuracy > speed. 50% correct answers can get you into IIT",
                ].map((tip) => (
                  <div key={tip} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-lime" />
                    <span className="text-sm font-medium text-neutral-700">{tip}</span>
                  </div>
                ))}
              </div>

              <div className="not-prose mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/jee-prep-app" className={`${MKT.btnPrimary} px-8 py-4 text-center text-base`}>
                  Get JEE Prep App
                </Link>
                <Link href="/free-mock-test-app" className={`${MKT.btnOutlineLight} px-8 py-4 text-center text-base`}>
                  Try Free Mock Test
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </MarketingPageShell>
  );
}
