import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import Link from "next/link";
import { marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, ArticleStructuredData, FAQStructuredData } from "@/lib/schema";
import { CheckCircle2, AlertTriangle, BookOpen, Smartphone } from "lucide-react";

const canonical = marketingAbsoluteUrl("/neet-preparation-strategy");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "NEET Preparation Strategy 2026: Complete Guide for Medical Students",
  description: "Master NEET with proven preparation strategies for Biology, Physics, and Chemistry. Includes study plan, NCERT mastery tips, and mistakes to avoid for NEET UG success.",
  alternates: { canonical },
  keywords: [
    "NEET preparation strategy",
    "how to prepare for NEET",
    "NEET study plan",
    "NEET preparation tips",
    "NEET UG preparation",
    "best NEET preparation strategy",
    "NEET Biology preparation",
    "NEET preparation for class 12",
  ],
  openGraph: {
    title: "NEET Preparation Strategy 2026: Complete Guide",
    description: "Proven strategies for NEET success covering Biology, Physics, and Chemistry preparation.",
    url: canonical,
    siteName: "NomoExam",
    type: "article",
    images: [{ url: og, width: 1200, height: 630, alt: "NEET Preparation Strategy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEET Preparation Strategy: Complete Guide",
    description: "Master Biology, Physics, and Chemistry for NEET UG.",
    images: [og],
  },
};

const faqs = [
  {
    question: "Is 6 months enough for NEET preparation?",
    answer: "6 months is possible for students with strong 11th and 12th basics, but it requires 10-12 hours daily study. Ideally, start 18-24 months ahead (from Class 11) for stress-free preparation and better concept retention.",
  },
  {
    question: "Is NCERT enough for NEET?",
    answer: "NCERT is mandatory—90% of Biology and 40% of Chemistry questions come directly from NCERT. However, you need additional practice for Physics numericals and tough Chemistry questions. NCERT + quality test series is the winning formula.",
  },
  {
    question: "How many mock tests should I take for NEET?",
    answer: "Take 40-50 full-length mock tests in the last 4 months. Start with easier mocks to build confidence, then move to tougher ones. Analyze every mock thoroughly—this is where score improvement happens.",
  },
  {
    question: "Which subject should I focus on more in NEET?",
    answer: "Biology (50% weightage) is most important. Master NCERT Biology completely—it's the easiest way to score 340+/360. Then focus on Chemistry (easier to score than Physics). Physics requires strong numericals practice.",
  },
];

export default function NEETPreparationStrategyPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "NEET Preparation Strategy", url: canonical },
        ]}
      />
      <ArticleStructuredData
        title="NEET Preparation Strategy 2026: Complete Guide for Medical Students"
        description="Comprehensive NEET preparation strategy for Indian students targeting medical colleges."
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
                <span>NEET Preparation Guide</span>
              </div>
              <h1 className={`${MKT.h1OnLight} mb-4`}>NEET Preparation Strategy 2026: Complete Guide</h1>
              <p className="text-base font-medium text-neutral-600 md:text-lg">
                Last updated: April 17, 2026 • 14 min read • For Medical Aspirants
              </p>
            </div>

            <div className="prose prose-neutral prose-lg max-w-none">
              <p className="lead text-lg font-medium leading-relaxed text-neutral-700">
                NEET (National Eligibility cum Entrance Test) is India's most competitive medical entrance exam. With over 18 lakh candidates competing for 1 lakh seats, having the right preparation strategy is crucial. This guide covers proven strategies used by top NEET rankers to secure admission in premier medical colleges.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Understanding NEET Exam Pattern
              </h2>
              <p>
                NEET consists of <strong>180 MCQs</strong> divided equally across three subjects:
              </p>
              <ul>
                <li><strong>Biology:</strong> 90 questions (Botany 45 + Zoology 45) = 360 marks (50% weightage)</li>
                <li><strong>Physics:</strong> 45 questions = 180 marks (25% weightage)</li>
                <li><strong>Chemistry:</strong> 45 questions = 180 marks (25% weightage)</li>
              </ul>
              <p>
                <strong>Duration:</strong> 3 hours 20 minutes<br />
                <strong>Marking Scheme:</strong> +4 for correct, -1 for incorrect (no negative for unattempted)
              </p>
              <p>
                The exam tests Class 11 and 12 NCERT syllabus. Unlike JEE, NEET questions are more factual and memory-based rather than conceptual problem-solving.
              </p>

              <div className="not-prose my-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">Target Score for Top Medical Colleges</h3>
                    <ul className="mt-2 space-y-1 text-sm font-medium leading-relaxed text-neutral-700">
                      <li><strong>AIIMS Delhi, MAMC:</strong> 680-700/720 (99.99+ percentile)</li>
                      <li><strong>Top Government Colleges:</strong> 640-680/720 (99.5+ percentile)</li>
                      <li><strong>State Government Colleges:</strong> 550-640/720 (varies by state)</li>
                      <li><strong>MBBS Admission (General):</strong> 450-500/720 minimum</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                18-Month NEET Preparation Strategy (Class 11-12)
              </h2>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Class 11 (Foundation Phase)</h3>
              <p><strong>April-September (6 months):</strong></p>
              <ul className="space-y-2">
                <li>Complete Class 11 NCERT for all three subjects. Read every line, every example, every diagram.</li>
                <li>Biology: Make chapter-wise notes. Biology is pure memory—write to remember.</li>
                <li>Physics & Chemistry: Solve all NCERT exercises + exemplar problems.</li>
                <li>Study 4-5 hours daily alongside school. No mock tests yet—focus on concepts.</li>
              </ul>

              <p><strong>October-March (6 months):</strong></p>
              <ul className="space-y-2">
                <li>Revise Class 11 syllabus completely. This is critical—many students skip 11th revision and regret it.</li>
                <li>Solve topic-wise questions from previous year NEET papers (Class 11 topics only).</li>
                <li>Biology: Read NCERT again. Yes, second reading is mandatory.</li>
                <li>Take chapter-wise tests to identify weak topics.</li>
              </ul>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Class 12 (Intensive Phase)</h3>
              <p><strong>April-October (7 months):</strong></p>
              <ul className="space-y-2">
                <li>Complete Class 12 NCERT. Same approach: every line, every diagram, every example.</li>
                <li>Study 6-7 hours daily. Balance board preparation with NEET.</li>
                <li>Make short notes for quick revision. You'll thank yourself later.</li>
                <li>Solve NCERT Fingertips (Arihant) for additional practice.</li>
              </ul>

              <p><strong>November-January (3 months):</strong></p>
              <ul className="space-y-2">
                <li>First complete revision of Class 11 + 12 syllabus.</li>
                <li>Read NCERT Biology third time. Top rankers read NCERT 5-7 times.</li>
                <li>Start solving previous year NEET papers (2015-2025).</li>
              </ul>

              <p><strong>February-May (4 months - Final Push):</strong></p>
              <ul className="space-y-2">
                <li>February: Board exams focus (but don't stop NEET prep completely).</li>
                <li>March-May: Intensive mock test phase. Take 2-3 full-length mocks per week.</li>
                <li>Daily formula and fact revision (Biology facts, Chemistry reactions, Physics formulas).</li>
                <li>Solve all NEET PYQs one more time. Mark difficult questions for revision.</li>
              </ul>

              <div className="not-prose my-8 rounded-xl border border-accent-lime/30 bg-accent-lime/10 p-6">
                <div className="flex items-start gap-4">
                  <Smartphone className="h-6 w-6 shrink-0 text-accent-lime" />
                  <div>
                    <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">
                      Get NEET Study Plan on Your Phone
                    </h3>
                    <p className="mb-3 text-sm font-medium leading-relaxed text-neutral-700">
                      NomoExam's <Link href="/neet-prep-app" className="font-semibold text-primary hover:underline">NEET prep app</Link> provides personalized study schedules, 5000+ NCERT-based practice questions, and unlimited AI doubt solving. Designed specifically for Indian medical students.
                    </p>
                    <Link href="/download-exam-app" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-neutral-800">
                      Download Free NEET App
                    </Link>
                  </div>
                </div>
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Subject-Wise NEET Preparation Strategy
              </h2>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Biology Strategy (50% weightage)</h3>
              <p>Biology is the most scoring subject in NEET. Master it, and you're halfway to success.</p>
              
              <p><strong>NCERT is Everything:</strong></p>
              <ul>
                <li>90% of Biology questions come word-to-word from NCERT. Read textbooks 5-7 times.</li>
                <li>Don't just read—visualize diagrams, understand flowcharts, memorize scientific names.</li>
                <li>Make chapter-wise notes with diagrams. Biology requires active recall, not passive reading.</li>
              </ul>

              <p><strong>High-Weightage Topics:</strong></p>
              <ul>
                <li><strong>Botany:</strong> Plant Physiology, Reproduction, Genetics & Evolution</li>
                <li><strong>Zoology:</strong> Human Physiology (largest chapter), Genetics, Ecology</li>
              </ul>

              <p><strong>Mnemonics & Memory Techniques:</strong></p>
              <ul>
                <li>Use mnemonics for cycles (Krebs, Calvin, nitrogen), taxonomic classifications, and hormone functions.</li>
                <li>Revise Biology daily—even 30 minutes keeps facts fresh.</li>
              </ul>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Physics Strategy (25% weightage)</h3>
              <p>Physics is the toughest subject for NEET students. It requires strong numericals practice.</p>
              
              <p><strong>High-Weightage Topics:</strong> Modern Physics, Optics, Current Electricity, Magnetism, Mechanics</p>
              
              <ul>
                <li><strong>NCERT First:</strong> Solve all NCERT exercises and examples. Many questions are NCERT-level.</li>
                <li><strong>Practice Numericals:</strong> Solve DC Pandey or Pradeep's problems. Do 30-40 numericals per chapter.</li>
                <li><strong>Derivations:</strong> Understand derivations—NEET sometimes asks conceptual questions from derivations.</li>
                <li><strong>Formula Sheet:</strong> Make a one-page formula sheet per chapter. Revise daily.</li>
              </ul>

              <p><strong>Time Management:</strong> Don't spend more than 1.5 minutes per Physics question in exam. If stuck, move on.</p>

              <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">Chemistry Strategy (25% weightage)</h3>
              <p>Chemistry is divided into Physical, Organic, and Inorganic—each requires a different strategy.</p>
              
              <p><strong>Physical Chemistry (40% of Chemistry questions):</strong></p>
              <ul>
                <li>Most scoring if you practice numericals. Mole concept, equilibrium, electrochemistry are high-weightage.</li>
                <li>NCERT + OP Tandon for practice.</li>
              </ul>

              <p><strong>Organic Chemistry (35%):</strong></p>
              <ul>
                <li>Understand reaction mechanisms. Don't just memorize reactions.</li>
                <li>Name reactions, reagents, and products are heavily tested.</li>
                <li>MS Chauhan or Himanshu Pandey for practice.</li>
              </ul>

              <p><strong>Inorganic Chemistry (25%):</strong></p>
              <ul>
                <li>Pure memorization: d-block, f-block, coordination compounds, qualitative analysis.</li>
                <li>NCERT is enough for inorganic—read 4-5 times. Make colored charts for visual memory.</li>
              </ul>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Common NEET Preparation Mistakes
              </h2>

              <div className="not-prose space-y-4">
                {[
                  {
                    title: "Not Reading NCERT Enough",
                    desc: "This is the #1 mistake. Students jump to reference books without mastering NCERT. For NEET, NCERT is 70-80% of the paper. Read it multiple times until you can recall content from memory.",
                  },
                  {
                    title: "Ignoring Class 11 Syllabus",
                    desc: "50% of NEET is Class 11. Many students focus only on Class 12 in the final year. Revise Class 11 thoroughly in Class 12—especially Biology and Chemistry.",
                  },
                  {
                    title: "Not Taking Enough Mock Tests",
                    desc: "Mock tests simulate exam pressure and reveal weak areas. Take 40-50 full-length mocks. Many students score well in practice but fail in the actual exam due to lack of test-taking experience.",
                  },
                  {
                    title: "Poor Time Management in Exam",
                    desc: "NEET requires speed. Solve Biology first (easiest, 90 questions in 90 minutes), then Chemistry (40 minutes), then Physics (40 minutes). Leave 10 minutes for revision and OMR filling.",
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
                NEET Mock Test Strategy
              </h2>
              <p>Mock tests are where preparation meets performance. Here's the optimal strategy:</p>

              <p><strong>When to Start:</strong> 4 months before NEET (February if exam in May)</p>
              
              <p><strong>How Many:</strong> 40-50 full-length mocks</p>

              <p><strong>Frequency:</strong></p>
              <ul>
                <li>February: 1-2 per week (easier mocks to build confidence)</li>
                <li>March-April: 2-3 per week (mix of easy, moderate, tough)</li>
                <li>Final month: 3-4 per week (toughest mocks for over-preparation)</li>
              </ul>

              <p><strong>Mock Analysis (Critical):</strong></p>
              <ul>
                <li>Spend 4 hours analyzing each mock. Yes, 4 hours.</li>
                <li>Mark questions you got wrong—revise those topics immediately.</li>
                <li>Track silly mistakes separately (misreading, calculation errors). These cost 20-30 marks.</li>
                <li>Maintain an error log: topic, question type, reason for error.</li>
              </ul>

              <p>Use <Link href="/free-mock-test-app" className="font-semibold text-primary hover:underline">NomoExam's NEET mock test app</Link> for realistic practice with instant score reports and AI-powered explanations.</p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Daily Study Schedule for NEET
              </h2>
              <p><strong>For Class 12 Students (Alongside School):</strong></p>
              <ul>
                <li>5:00 AM - 7:00 AM: Biology NCERT reading (2 hours)</li>
                <li>School: 8:00 AM - 3:00 PM</li>
                <li>4:00 PM - 6:00 PM: Physics numericals (2 hours)</li>
                <li>6:00 PM - 7:00 PM: Break</li>
                <li>7:00 PM - 9:00 PM: Chemistry (2 hours)</li>
                <li>9:00 PM - 10:00 PM: Revision + doubt clearing</li>
              </ul>
              <p><strong>Sunday:</strong> Full-length mock test (3 hours) + analysis (4 hours)</p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Best Resources for NEET Preparation
              </h2>
              <ul>
                <li><strong>NCERT (Class 11 & 12):</strong> Mandatory. Read 5-7 times.</li>
                <li><strong>NCERT Fingertips (Arihant):</strong> Additional MCQs based on NCERT</li>
                <li><strong>Physics:</strong> DC Pandey, Pradeep's Fundamental Physics</li>
                <li><strong>Chemistry:</strong> OP Tandon, MS Chauhan</li>
                <li><strong>Biology:</strong> NCERT is enough. Trueman's Biology for extra practice.</li>
                <li><strong>NomoExam NEET App:</strong> Personalized plans, 5000+ NCERT-based questions, unlimited AI tutoring. <Link href="/neet-prep-app" className="font-semibold text-primary hover:underline">Download for free</Link>.</li>
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

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">Final Tips for NEET Success</h2>
              <div className="not-prose space-y-3">
                {[
                  "Read NCERT Biology 5-7 times. This alone guarantees 320+/360 in Biology",
                  "Attempt 160-165 questions in the exam. Don't try to solve all 180",
                  "Solve Biology first (easiest 90 questions) to build confidence",
                  "Make short notes for quick revision in the final month",
                  "Sleep 7-8 hours daily. NEET tests memory—sleep is critical for memory consolidation",
                  "Don't compare yourself to others. Everyone's journey is different",
                ].map((tip) => (
                  <div key={tip} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-lime" />
                    <span className="text-sm font-medium text-neutral-700">{tip}</span>
                  </div>
                ))}
              </div>

              <div className="not-prose mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/neet-prep-app" className={`${MKT.btnPrimary} px-8 py-4 text-center text-base`}>
                  Get NEET Prep App
                </Link>
                <Link href="/free-mock-test-app" className={`${MKT.btnOutlineLight} px-8 py-4 text-center text-base`}>
                  Try Free NEET Mock
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </MarketingPageShell>
  );
}
