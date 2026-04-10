import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import { 
  ComparisonHero, 
  ComparisonTable,
  ExpandableSection,
  ExpertTip,
  SampleQuestion,
  StudentStory,
  ScoreChart
} from "@/components/comparison";
import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BookOpen,
  Calculator,
  Calendar,
  CheckCircle,
  Landmark,
  Lightbulb,
  Microscope,
  XCircle,
} from "lucide-react";
import { BreadcrumbStructuredData, FAQStructuredData } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SAT vs ACT: Which Test Should You Take? (2025 Comparison)",
  description: "Detailed comparison of SAT vs ACT for college admissions. Compare test format, duration, scoring, difficulty, and which test is best for you. Updated for 2025 digital SAT.",
  alternates: { canonical: "https://nomoexam.com/compare/sat-vs-act" },
  keywords: [
    "SAT vs ACT",
    "difference between SAT and ACT",
    "SAT or ACT which is easier",
    "SAT vs ACT 2025",
    "digital SAT vs ACT",
    "college admission test comparison"
  ],
  openGraph: {
    title: "SAT vs ACT: Complete Comparison for College Admissions (2025)",
    description: "Compare SAT and ACT side-by-side. Test format, scoring, difficulty, and expert recommendations.",
    url: "https://nomoexam.com/compare/sat-vs-act",
    siteName: "NomoExam",
    type: "article",
  },
};

const comparisonData = [
  { feature: "Test Duration", option1: "2 hours 14 minutes", option2: "2 hours 55 minutes (with writing: 3 hours 35 minutes)" },
  { feature: "Number of Sections", option1: "2 sections", option2: "4 sections (5 with writing)" },
  { feature: "Test Format", option1: "100% digital", option2: "Paper-based (digital coming 2024)" },
  { feature: "Adaptive Testing", option1: true, option2: false },
  { feature: "Reading & Writing", option1: "Combined (54 questions, 64 min)", option2: "Separate (75 questions, 80 min total)" },
  { feature: "Math Section", option1: "44 questions, 70 minutes", option2: "60 questions, 60 minutes" },
  { feature: "Science Section", option1: false, option2: true },
  { feature: "Calculator for Math", option1: "Allowed for entire section", option2: "Allowed for one section only" },
  { feature: "Score Range", option1: "400-1600", option2: "1-36 composite" },
  { feature: "Wrong Answer Penalty", option1: "No penalty", option2: "No penalty" },
  { feature: "Test Dates per Year", option1: "7 (March, May, June, Aug, Oct, Nov, Dec)", option2: "7 (Feb, Apr, June, July, Sept, Oct, Dec)" },
  { feature: "Registration Fee", option1: "$60 (US) / $101 (International)", option2: "$63 (US) / $116 (International)" },
  { feature: "College Acceptance", option1: true, option2: true },
];

const scoreConversionData = [
  { sat: 1600, act: 36, percentile: 99.9 },
  { sat: 1550, act: 35, percentile: 99 },
  { sat: 1500, act: 34, percentile: 98 },
  { sat: 1450, act: 32, percentile: 96 },
  { sat: 1400, act: 31, percentile: 94 },
  { sat: 1350, act: 29, percentile: 91 },
  { sat: 1300, act: 28, percentile: 87 },
  { sat: 1250, act: 26, percentile: 82 },
  { sat: 1200, act: 24, percentile: 74 },
  { sat: 1150, act: 22, percentile: 66 },
  { sat: 1100, act: 21, percentile: 58 },
  { sat: 1050, act: 19, percentile: 49 },
  { sat: 1000, act: 18, percentile: 40 },
  { sat: 950, act: 16, percentile: 31 },
  { sat: 900, act: 15, percentile: 23 },
];

export default function SatVsActPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: '/' },
          { name: 'Compare', url: '/compare' },
          { name: 'SAT vs ACT', url: '/compare/sat-vs-act' }
        ]}
      />
      <FAQStructuredData
        faqs={[
          { question: "Which test is easier, SAT or ACT?", answer: "Neither test is objectively easier—it depends on your individual strengths. The SAT may be easier if you need more time per question, struggle with science, or prefer using a calculator for all math problems. The ACT may be easier if you're strong in science, work quickly under pressure, and prefer straightforward questions. Take a practice test for each to see which suits you better." },
          { question: "Do colleges prefer SAT or ACT?", answer: "All U.S. colleges and universities accept both SAT and ACT scores equally. There is no preference for one test over the other in the admissions process. Admissions officers use concordance tables to compare scores fairly." },
          { question: "Can I take both SAT and ACT?", answer: "Yes! Many students take both tests to see which one they score higher on. You can submit your best score from either test (or both) to colleges via score choice." },
          { question: "How long is the SAT vs ACT?", answer: "The SAT is 2 hours and 14 minutes long (digital version). The ACT is 2 hours and 55 minutes without writing, or 3 hours and 35 minutes with the optional writing section." },
          { question: "Does the ACT have a science section?", answer: "Yes, the ACT has a dedicated Science section (35 minutes, 40 questions) that tests scientific reasoning and data interpretation. The SAT does not have a science section." },
          { question: "How is SAT scoring different from ACT?", answer: "The SAT is scored on a scale of 400-1600, combining Reading/Writing (200-800) and Math (200-800). The ACT is scored on a scale of 1-36, which is the average of four section scores: English, Math, Reading, and Science (each scored 1-36)." },
          { question: "Is the SAT or ACT better for math?", answer: "The SAT allows calculator use for the entire math section and gives more time per question (95 seconds average). The ACT requires faster pacing (60 seconds per question) and includes more geometry and trigonometry. Choose based on whether you prefer more time (SAT) or are strong in geometry/trig (ACT)." },
          { question: "How many times can I take the SAT or ACT?", answer: "You can take both tests as many times as you want. Most students take each test 2-3 times. Both tests offer score choice, allowing you to submit only your best scores to colleges." }
        ]}
      />
      <main>
        <ComparisonHero
          title="SAT vs ACT: Which Test Should You Take?"
          description="Comprehensive comparison of the two most popular college admission tests. Both are accepted by all US colleges, but which one is right for you?"
          option1={{ name: "SAT", tagline: "Shorter, digital, adaptive" }}
          option2={{ name: "ACT", tagline: "More sections, includes science" }}
        />

        {/* Quick Recommendation */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto bg-zinc-50 border-2 border-neutral-900/12 p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Quick Recommendation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/90 border-2 border-neutral-900/15 p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Choose SAT if you:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Prefer shorter test duration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Want to use calculator for all math</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Are comfortable with digital testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Struggle with science reasoning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Prefer evidence-based questions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 border-2 border-accent/30 p-6">
                <h3 className="text-xl font-bold text-accent mb-3">Choose ACT if you:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Excel at science reasoning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Work well under time pressure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Prefer straightforward questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Like paper-based tests (for now)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Want more grammar questions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="bg-zinc-50 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              SAT vs ACT: Side-by-Side Comparison
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Here's a detailed breakdown of all the key differences between the SAT and ACT.
            </p>
            <div className="max-w-5xl mx-auto">
              <ComparisonTable
                option1Name="SAT"
                option2Name="ACT"
                rows={comparisonData}
              />
            </div>
          </div>
        </section>

        {/* Score Conversion Chart */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              SAT to ACT Score Conversion Chart
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-8">
              Use this official concordance table to compare SAT and ACT scores
            </p>
            
            <ScoreChart data={scoreConversionData} />
            
            <div className="mt-6 rounded-lg border-2 border-black/[0.08] bg-zinc-50 p-6">
              <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
                <BarChart3 className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                How to use this chart
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Take practice tests for both SAT and ACT</li>
                <li>• Convert scores using this table to see which test you perform better on</li>
                <li>• Focus your prep on the test where you score higher</li>
                <li>• Remember: percentiles matter more than raw scores for college admissions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Student Success Stories */}
        <section className="bg-zinc-50 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Real Student Success Stories
              </h2>
              <p className="text-center text-lg text-muted-foreground mb-12">
                See how students improved their scores and which test worked best for them
              </p>

              <div className="space-y-8">
                <StudentStory
                  title="From SAT 1200 to 1480 in 3 Months"
                  studentName="Sarah Martinez"
                  studentType="High School Junior"
                  startScore="SAT 1200"
                  endScore="SAT 1480"
                  timeframe="3 months"
                  strategy={[
                    "Focused on math fundamentals first (algebra and data analysis)",
                    "Used NomoExam's adaptive practice to identify weak areas",
                    "Took 8 full-length practice tests over 12 weeks",
                    "Reviewed every single mistake with AI explanations",
                    "Created flashcards for vocabulary in context"
                  ]}
                  keyTakeaways={[
                    "SAT's calculator-allowed math section was perfect for me",
                    "The adaptive digital format helped me finish faster without fatigue",
                    "Evidence-based reading questions matched my analytical thinking style",
                    "Not having a science section saved me time and stress"
                  ]}
                  featuresUsed={["Adaptive Practice", "AI Explanations", "Progress Analytics", "Study Plan"]}
                />

                <StudentStory
                  title="Switched from SAT to ACT - Score Jumped to 34"
                  studentName="Michael Chen"
                  studentType="High School Senior"
                  startScore="SAT 1350 (ACT 29 equivalent)"
                  endScore="ACT 34"
                  timeframe="2 months"
                  strategy={[
                    "Took both SAT and ACT diagnostic tests",
                    "Realized ACT science section played to my strengths",
                    "Practiced time management - ACT requires faster pacing",
                    "Mastered the straightforward question style of ACT",
                    "Used NomoExam to focus on ACT-specific strategies"
                  ]}
                  keyTakeaways={[
                    "ACT's science section boosted my composite score significantly",
                    "I preferred the predictable, non-adaptive format",
                    "Straightforward questions suited my test-taking style better",
                    "Faster pacing kept me engaged and focused"
                  ]}
                  featuresUsed={["Topic Practice", "Full-Length Tests", "Time Management Tools", "Mistake Review"]}
                />

                <StudentStory
                  title="Tried Both Tests - SAT Was the Winner"
                  studentName="Emily Rodriguez"
                  studentType="High School Junior"
                  startScore="ACT 24 / SAT 1180"
                  endScore="SAT 1520"
                  timeframe="4 months"
                  strategy={[
                    "Started with ACT but struggled with time pressure",
                    "Switched to SAT and immediately felt more comfortable",
                    "Used the extra time per question to double-check answers",
                    "Calculator-allowed math section reduced mental arithmetic errors",
                    "No science section meant more time to strengthen reading and math"
                  ]}
                  keyTakeaways={[
                    "Don't commit to one test without trying both",
                    "SAT's longer time per question was crucial for my accuracy",
                    "Digital format with built-in tools was more comfortable than paper",
                    "Evidence-based questions rewarded careful reading"
                  ]}
                  featuresUsed={["Diagnostic Tests", "Adaptive Learning", "AI Study Coach", "Performance Predictions"]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sample Questions */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Sample Questions: SAT vs ACT
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12">
              Compare actual question styles from each test
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Math Section Comparison</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <SampleQuestion
                    testName="SAT"
                    question="If 3x + 5 = 20, what is the value of 6x + 10?"
                    options={["A) 20", "B) 30", "C) 40", "D) 50"]}
                    solution="Instead of solving for x first, notice that 6x + 10 = 2(3x + 5). Since 3x + 5 = 20, then 6x + 10 = 2(20) = 40."
                    answer="C) 40"
                    tip="SAT Math rewards pattern recognition. Always look for shortcuts before solving algebraically. This question tests whether you can see relationships between expressions."
                    variant="primary"
                  />

                  <SampleQuestion
                    testName="ACT"
                    question="In a right triangle, if one angle is 30° and the hypotenuse is 10, what is the length of the side opposite the 30° angle?"
                    options={["A) 5", "B) 5√3", "C) 10", "D) 10√3", "E) 15"]}
                    solution="In a 30-60-90 triangle, the sides are in the ratio 1:√3:2. If the hypotenuse is 10 (which corresponds to '2' in the ratio), then the side opposite 30° is 10÷2 = 5."
                    answer="A) 5"
                    tip="ACT Math tests more geometry. Memorize special right triangle ratios (30-60-90 and 45-45-90) before test day. Also note ACT often has 5 answer choices instead of 4."
                    variant="accent"
                  />
                </div>

                <div className="mt-6 bg-zinc-50 border-2 border-neutral-900/12 rounded-lg p-6">
                  <p className="mb-3 flex items-center gap-2 font-semibold text-neutral-900">
                    <BarChart3 className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                    What this tells you
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-neutral-900 mb-2">SAT Math:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Tests algebraic thinking and pattern recognition</li>
                        <li>• Rewards clever problem-solving</li>
                        <li>• Calculator allowed = less mental math</li>
                        <li>• More time per question (95 seconds avg)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-accent mb-2">ACT Math:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Tests geometric knowledge more heavily</li>
                        <li>• Requires memorization of formulas</li>
                        <li>• Faster pacing (60 seconds per question)</li>
                        <li>• More straightforward calculations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Reading Section Comparison</h3>
                <div className="space-y-6">
                  <div className="border-2 border-neutral-900/12 bg-zinc-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-neutral-900">SAT Reading Example (Evidence-Based)</h4>
                    <p className="text-sm italic mb-4 text-muted-foreground">
                      "The study revealed that students who practiced retrieval (testing themselves) 
                      outperformed those who only re-read material, suggesting that active recall strengthens memory."
                    </p>
                    <p className="font-medium mb-2">Question:</p>
                    <p className="text-sm mb-3">
                      Which choice provides the best evidence that testing yourself is more effective than passive review?
                    </p>
                    <p className="text-sm font-semibold">Why SAT asks this:</p>
                    <p className="text-sm text-muted-foreground">
                      SAT emphasizes finding evidence in the passage to support your answers. You must cite specific lines or sentences.
                    </p>
                  </div>

                  <div className="border-2 border-accent/20 bg-accent/5 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-accent">ACT Reading Example (Direct Comprehension)</h4>
                    <p className="text-sm italic mb-4 text-muted-foreground">
                      "The artist completed the mural in 1972, depicting scenes from local history that 
                      celebrated the community's resilience during difficult times."
                    </p>
                    <p className="font-medium mb-2">Question:</p>
                    <p className="text-sm mb-3">
                      According to the passage, when was the mural completed?
                    </p>
                    <p className="text-sm font-semibold">Why ACT asks this:</p>
                    <p className="text-sm text-muted-foreground">
                      ACT focuses on straightforward comprehension. Questions often ask for specific facts or details directly stated in the passage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Tips */}
        <section className="bg-zinc-50 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Expert Tips & Strategies
              </h2>
              <p className="text-center text-lg text-muted-foreground mb-12">
                Actionable advice from test prep experts
              </p>

              <div className="space-y-4">
                <ExpertTip title="Take Both Practice Tests First" variant="primary">
                  Don't commit to SAT or ACT based on assumptions. Take a full-length practice test 
                  for each (under timed conditions) and compare your scores using the conversion chart. 
                  Many students are surprised by which test they perform better on.
                </ExpertTip>

                <ExpertTip title="Calculator Strategy Matters" variant="default">
                  On the SAT, you can use your calculator for all math questions, so take advantage of this. 
                  Set up complex equations, store values in memory, and use it to check your work. On ACT, 
                  practice mental math for the no-calculator section.
                </ExpertTip>

                <ExpertTip title="Time Management is Different" variant="warning">
                  SAT gives you ~95 seconds per question. ACT gives you ~60 seconds per question. 
                  If you tend to work slowly and carefully, SAT's pacing may suit you better. 
                  If you work quickly and efficiently, ACT's faster pace might keep you engaged.
                </ExpertTip>

                <ExpertTip title="Science Section: Advantage or Disadvantage?" variant="success">
                  ACT's science section is 25% of your score. If you're strong in data interpretation, 
                  graphs, and experimental design, this can boost your composite score significantly. 
                  If science isn't your strength, SAT's lack of a science section might be better.
                </ExpertTip>

                <ExpertTip title="Digital SAT Advantages" variant="primary">
                  The digital SAT has built-in tools: a calculator, annotation features, and the ability 
                  to mark questions for review. Practice with these tools before test day. The adaptive 
                  format also means you'll see fewer questions than on paper-based tests.
                </ExpertTip>

                <ExpertTip title="Process of Elimination Works Differently" variant="default">
                  On SAT, wrong answers often contain subtle errors that reward careful reading. 
                  On ACT, wrong answers tend to be more clearly incorrect, but time pressure 
                  makes it harder to evaluate all options. Adjust your strategy accordingly.
                </ExpertTip>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">In-Depth Section Breakdowns</h2>
              
              <div className="space-y-4">
                <ExpandableSection 
                  title="SAT Math: Complete Content Breakdown" 
                  icon="drafting"
                  defaultOpen={false}
                >
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      The SAT Math section consists of 44 questions across 70 minutes, divided into two modules. 
                      Here's the exact content distribution:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-2 border-neutral-900/12 bg-zinc-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Heart of Algebra (33%)</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Linear equations and inequalities</li>
                          <li>• Systems of equations</li>
                          <li>• Graphing linear functions</li>
                          <li>• Word problems involving linear relationships</li>
                        </ul>
                      </div>
                      
                      <div className="border-2 border-neutral-900/12 bg-zinc-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Problem Solving & Data Analysis (29%)</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Ratios, proportions, percentages</li>
                          <li>• Unit conversion and rates</li>
                          <li>• Data interpretation (tables, graphs)</li>
                          <li>• Statistics and probability</li>
                        </ul>
                      </div>
                      
                      <div className="border-2 border-neutral-900/12 bg-zinc-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Passport to Advanced Math (28%)</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Quadratic equations and functions</li>
                          <li>• Exponential functions</li>
                          <li>• Polynomial operations</li>
                          <li>• Radical and rational expressions</li>
                        </ul>
                      </div>
                      
                      <div className="border-2 border-neutral-900/12 bg-zinc-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Additional Topics (10%)</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Geometry (area, volume, angles)</li>
                          <li>• Trigonometry (basic ratios)</li>
                          <li>• Complex numbers</li>
                          <li>• Circle equations</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 rounded-lg border-2 border-black/[0.08] bg-accent-lime/10 p-4">
                      <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
                        <Lightbulb className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                        Key strategy
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Focus your prep time on Heart of Algebra and Problem Solving & Data Analysis—these 
                        two categories make up 62% of the test. Master these, and you're already two-thirds 
                        of the way to your target score.
                      </p>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="ACT Math: Complete Content Breakdown" 
                  icon="chart"
                >
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      The ACT Math section has 60 questions in 60 minutes—exactly one minute per question. 
                      The content breakdown is more diverse than SAT:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-2 border-accent/20 bg-accent/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Pre-Algebra & Elementary Algebra (24%)</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Basic operations and number concepts</li>
                          <li>• Fractions, decimals, percentages</li>
                          <li>• Simple equations and inequalities</li>
                          <li>• Word problems</li>
                        </ul>
                      </div>
                      
                      <div className="border-2 border-accent/20 bg-accent/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Intermediate Algebra (17%)</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Quadratic equations and formulas</li>
                          <li>• Rational and radical expressions</li>
                          <li>• Absolute value and inequalities</li>
                          <li>• Sequences and patterns</li>
                        </ul>
                      </div>
                      
                      <div className="border-2 border-accent/20 bg-accent/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Coordinate Geometry (15%)</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Graphing equations and inequalities</li>
                          <li>• Slope and distance formulas</li>
                          <li>• Midpoint and transformations</li>
                          <li>• Conic sections</li>
                        </ul>
                      </div>
                      
                      <div className="border-2 border-accent/20 bg-accent/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Plane Geometry (23%)</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Properties of shapes (triangles, circles, polygons)</li>
                          <li>• Area, perimeter, volume</li>
                          <li>• Angle relationships</li>
                          <li>• Similar and congruent figures</li>
                        </ul>
                      </div>
                      
                      <div className="border-2 border-accent/20 bg-accent/5 p-4 rounded-lg col-span-1 md:col-span-2">
                        <h4 className="font-semibold mb-2">Trigonometry (7%)</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Basic trig functions (sin, cos, tan)</li>
                          <li>• Trig identities and equations</li>
                          <li>• Graphing trig functions</li>
                          <li>• Applications of trig to triangles</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 rounded-lg border-2 border-black/[0.08] bg-zinc-50 p-4">
                      <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
                        <Lightbulb className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                        Key strategy
                      </p>
                      <p className="text-sm text-muted-foreground">
                        ACT tests significantly more geometry than SAT (38% vs 10%). If geometry is your weakness, 
                        this could be a red flag for choosing ACT. However, if you excel at geometric visualization 
                        and have trigonometry knowledge, ACT might boost your score.
                      </p>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Reading Strategies: SAT vs ACT" 
                  icon="book"
                >
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-neutral-900">SAT Reading Strategy</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          SAT Reading & Writing is combined into one section with 54 questions in 64 minutes 
                          (~71 seconds per question). Passages are shorter (150-250 words).
                        </p>
                        <ul className="text-sm space-y-2 text-muted-foreground">
                          <li><strong>1. Read the passage first</strong> - Don't skim; you'll need specific details</li>
                          <li><strong>2. Annotate as you go</strong> - Use digital highlighting tools</li>
                          <li><strong>3. Find evidence</strong> - Many questions ask you to cite supporting lines</li>
                          <li><strong>4. Eliminate wrong answers</strong> - SAT includes subtle distractors</li>
                          <li><strong>5. Trust the passage</strong> - Answers are always directly stated or implied</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-3 font-semibold text-neutral-900">ACT Reading Strategy</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          ACT Reading is 40 questions in 35 minutes (~52 seconds per question). 
                          Passages are longer (750+ words), requiring faster reading.
                        </p>
                        <ul className="text-sm space-y-2 text-muted-foreground">
                          <li><strong>1. Skim first OR questions first</strong> - Find your preferred approach</li>
                          <li><strong>2. Focus on main ideas</strong> - Don't get lost in details initially</li>
                          <li><strong>3. Underline key points</strong> - First/last sentences of paragraphs</li>
                          <li><strong>4. Manage time strictly</strong> - 8-9 minutes per passage maximum</li>
                          <li><strong>5. Skip and return</strong> - Don't waste time on hard questions</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 rounded-lg border-2 border-black/[0.08] bg-zinc-50 p-4">
                      <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
                        <BarChart3 className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                        Which reading style fits you?
                      </p>
                      <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
                        <div>
                          <p className="mb-1 font-semibold text-neutral-900">Choose SAT Reading if:</p>
                          <ul className="space-y-1 text-muted-foreground">
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>You read carefully and analyze details</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>You prefer shorter passages</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>You excel at finding evidence</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>You need slightly more time per question</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="mb-1 font-semibold text-neutral-900">Choose ACT Reading if:</p>
                          <ul className="space-y-1 text-muted-foreground">
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>You&apos;re a fast reader</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>You can quickly grasp main ideas</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>You don&apos;t get bogged down in details</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Time pressure helps you focus</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="The ACT Science Section: What You Need to Know" 
                  icon="microscope"
                >
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      The ACT Science section is unique and often the most misunderstood. It's not actually a test 
                      of science knowledge—it's a test of <strong>data interpretation and scientific reasoning</strong>.
                    </p>

                    <div className="bg-accent/5 border-2 border-accent/20 rounded-lg p-6">
                      <h4 className="font-semibold mb-3">Content Breakdown (40 questions, 35 minutes)</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium">1. Data Representation (30-40%)</p>
                          <p className="text-sm text-muted-foreground">
                            Interpreting graphs, tables, and charts. Questions ask you to read values, 
                            identify trends, and draw conclusions from visual data.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">2. Research Summaries (50-60%)</p>
                          <p className="text-sm text-muted-foreground">
                            Understanding experimental design and results. You'll analyze 2-3 related experiments, 
                            compare methodologies, and predict outcomes.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">3. Conflicting Viewpoints (10-15%)</p>
                          <p className="text-sm text-muted-foreground">
                            Comparing opposing theories or hypotheses. Typically one passage where 2-3 scientists 
                            present different explanations for the same phenomenon.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border-2 border-black/[0.08] bg-zinc-50 p-4">
                      <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
                        <Lightbulb className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                        Science section strategy
                      </p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Don't read passages thoroughly—go straight to graphs and questions</li>
                        <li>• Look for trends: increasing, decreasing, constant, or variable relationships</li>
                        <li>• Focus on axis labels, units, and legends in graphs</li>
                        <li>• You don't need prior science knowledge (except very basic concepts)</li>
                        <li>• Practice is key—the format is unusual but highly learnable</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-neutral-900 pl-4 mt-4">
                      <p className="font-semibold mb-1">Should You Choose ACT Because of Science?</p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Yes, if:</strong> You're comfortable with graphs, enjoy STEM subjects, and can quickly 
                        spot patterns in data. Science can be your highest-scoring section.<br/>
                        <strong>No, if:</strong> Visual data interpretation stresses you out, or you prefer purely 
                        verbal reasoning. The SAT's lack of a science section removes this variable entirely.
                      </p>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="College Preferences: Which Test Do Schools Favor?" 
                  icon="landmark"
                >
                  <div className="space-y-4">
                    <div className="bg-zinc-50 border-2 border-neutral-900/12 rounded-lg p-6">
                      <p className="font-semibold mb-2">The Short Answer:</p>
                      <p className="text-muted-foreground">
                        <strong>All U.S. colleges accept both SAT and ACT equally.</strong> There is no advantage 
                        to submitting one test over the other. Admissions officers use concordance tables to 
                        compare scores fairly.
                      </p>
                    </div>

                    <h4 className="font-semibold text-lg mt-6 mb-3">Top University Score Ranges (75th Percentile)</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-2 border-black/[0.08] text-sm">
                        <thead className="bg-zinc-100">
                          <tr>
                            <th className="p-3 text-left border-r border-b-2 border-black/[0.08]">University</th>
                            <th className="p-3 text-left border-r border-b-2 border-black/[0.08]">SAT Score</th>
                            <th className="p-3 text-left border-b-2 border-black/[0.08]">ACT Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-black/[0.08]">
                            <td className="p-3 border-r border-black/[0.08]">Harvard</td>
                            <td className="p-3 border-r border-black/[0.08]">1570</td>
                            <td className="p-3">35</td>
                          </tr>
                          <tr className="border-b border-black/[0.08] bg-zinc-50">
                            <td className="p-3 border-r border-black/[0.08]">MIT</td>
                            <td className="p-3 border-r border-black/[0.08]">1570</td>
                            <td className="p-3">36</td>
                          </tr>
                          <tr className="border-b border-black/[0.08]">
                            <td className="p-3 border-r border-black/[0.08]">Stanford</td>
                            <td className="p-3 border-r border-black/[0.08]">1550</td>
                            <td className="p-3">35</td>
                          </tr>
                          <tr className="border-b border-black/[0.08] bg-zinc-50">
                            <td className="p-3 border-r border-black/[0.08]">Yale</td>
                            <td className="p-3 border-r border-black/[0.08]">1560</td>
                            <td className="p-3">35</td>
                          </tr>
                          <tr className="border-b border-black/[0.08]">
                            <td className="p-3 border-r border-black/[0.08]">Princeton</td>
                            <td className="p-3 border-r border-black/[0.08]">1560</td>
                            <td className="p-3">35</td>
                          </tr>
                          <tr className="border-b border-black/[0.08] bg-zinc-50">
                            <td className="p-3 border-r border-black/[0.08]">UC Berkeley</td>
                            <td className="p-3 border-r border-black/[0.08]">1530</td>
                            <td className="p-3">34</td>
                          </tr>
                          <tr className="border-b border-black/[0.08]">
                            <td className="p-3 border-r border-black/[0.08]">Duke</td>
                            <td className="p-3 border-r border-black/[0.08]">1560</td>
                            <td className="p-3">35</td>
                          </tr>
                          <tr className="bg-zinc-50">
                            <td className="p-3 border-r border-black/[0.08]">Northwestern</td>
                            <td className="p-3 border-r border-black/[0.08]">1540</td>
                            <td className="p-3">35</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6 rounded-lg border-2 border-black/[0.08] bg-zinc-50 p-4">
                      <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
                        <BarChart3 className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                        What this means for you
                      </p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Target scores vary by school, but both tests are equally accepted</li>
                        <li>• Focus on achieving the highest score on whichever test suits you better</li>
                        <li>• Test-optional policies are expanding, but strong scores still help significantly</li>
                        <li>• For scholarships, check specific requirements—some have test score thresholds</li>
                      </ul>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Common Mistakes Students Make" 
                  icon="alert"
                >
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Avoid these frequent pitfalls that cost students points and time:
                    </p>

                    <div className="space-y-3">
                      {[
                        {
                          mistake: "Committing to one test without trying both",
                          fix: "Take a full-length practice test for SAT and ACT before deciding. You might be surprised which one you score higher on."
                        },
                        {
                          mistake: "Not practicing with digital SAT format",
                          fix: "The digital SAT has a unique interface with tools and features. Practice on College Board's Bluebook app to get comfortable."
                        },
                        {
                          mistake: "Ignoring the ACT science section in prep",
                          fix: "Science is 25% of your ACT composite. Even if you're strong in other sections, neglecting science hurts your overall score."
                        },
                        {
                          mistake: "Using the same study strategy for both tests",
                          fix: "SAT rewards deep analysis; ACT rewards speed and efficiency. Tailor your prep strategy to the test format."
                        },
                        {
                          mistake: "Not timing practice tests strictly",
                          fix: "Test day time pressure is real. Always use a timer during practice to build pacing instincts."
                        },
                        {
                          mistake: "Skipping calculator practice for ACT",
                          fix: "ACT's no-calculator math section requires strong mental math. Practice arithmetic, fractions, and basic algebra without tools."
                        },
                        {
                          mistake: "Focusing only on practice tests without reviewing mistakes",
                          fix: "Taking tests is not enough. Spend 2x the time reviewing every mistake, understanding why you got it wrong."
                        },
                        {
                          mistake: "Assuming SAT is easier because it's shorter",
                          fix: "Shorter doesn't mean easier. SAT's adaptive format and evidence-based questions can be just as challenging."
                        },
                        {
                          mistake: "Neglecting reading speed for ACT",
                          fix: "ACT reading requires ~750+ words per passage in under 9 minutes. Practice speed reading techniques."
                        },
                        {
                          mistake: "Not using score choice strategically",
                          fix: "Both tests allow you to choose which scores to send. Take the test multiple times and submit only your best scores."
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-red-500/90 bg-red-50/80 py-3 pl-4"
                        >
                          <p className="mb-1 flex items-start gap-2 text-sm font-semibold text-neutral-900">
                            <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden />
                            <span>{item.mistake}</span>
                          </p>
                          <p className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                            <span>{item.fix}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="6-Month Study Plan Comparison" 
                  icon="calendar"
                >
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border-2 border-neutral-900/12 rounded-lg p-6">
                        <h4 className="font-semibold mb-4 text-neutral-900 text-lg">SAT Prep Timeline</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="font-semibold text-sm">Month 1-2: Foundation</p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-4 mt-1">
                              <li>• Take diagnostic test</li>
                              <li>• Master algebra fundamentals</li>
                              <li>• Practice evidence-based reading</li>
                              <li>• Learn digital SAT interface</li>
                            </ul>
                          </div>

                          <div>
                            <p className="font-semibold text-sm">Month 3-4: Skill Building</p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-4 mt-1">
                              <li>• Topic-specific practice</li>
                              <li>• Advanced math concepts</li>
                              <li>• Reading comprehension strategies</li>
                              <li>• Grammar rules mastery</li>
                            </ul>
                          </div>

                          <div>
                            <p className="font-semibold text-sm">Month 5-6: Test Mastery</p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-4 mt-1">
                              <li>• Full-length practice tests weekly</li>
                              <li>• Detailed mistake review</li>
                              <li>• Time management refinement</li>
                              <li>• Test day simulation</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-2 border-accent/20 rounded-lg p-6">
                        <h4 className="font-semibold mb-4 text-accent text-lg">ACT Prep Timeline</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="font-semibold text-sm">Month 1-2: Foundation</p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-4 mt-1">
                              <li>• Take diagnostic test</li>
                              <li>• Work on pacing and speed</li>
                              <li>• Review grammar rules</li>
                              <li>• Start science data interpretation</li>
                            </ul>
                          </div>

                          <div>
                            <p className="font-semibold text-sm">Month 3-4: Skill Building</p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-4 mt-1">
                              <li>• Geometry and trigonometry review</li>
                              <li>• Science passage strategies</li>
                              <li>• Reading speed improvement</li>
                              <li>• Mental math practice</li>
                            </ul>
                          </div>

                          <div>
                            <p className="font-semibold text-sm">Month 5-6: Test Mastery</p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-4 mt-1">
                              <li>• Full-length practice tests weekly</li>
                              <li>• Focus on time management</li>
                              <li>• Mistake pattern analysis</li>
                              <li>• Simulate test day conditions</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border-2 border-neutral-900/12 bg-zinc-50 p-6">
                      <p className="mb-3 flex items-center gap-2 font-semibold text-neutral-900">
                        <BookOpen className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                        Key milestones for both tests
                      </p>
                      <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
                        <div>
                          <p className="mb-2 font-semibold">By Month 2:</p>
                          <ul className="space-y-1 text-muted-foreground">
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Identified weak areas</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Baseline score established</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Study schedule created</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="mb-2 font-semibold">By Month 4:</p>
                          <ul className="space-y-1 text-muted-foreground">
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Score improved by 50–100 points</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Core skills mastered</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Consistent practice routine</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="mb-2 font-semibold">By Month 6:</p>
                          <ul className="space-y-1 text-muted-foreground">
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Target score achieved</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Test-day ready confidence</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Backup test date planned</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Test Structure & Content</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-900">SAT Structure</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The SAT consists of two main sections: <strong>Reading and Writing</strong> (combined into one 64-minute section with 54 questions) and <strong>Math</strong> (70 minutes with 44 questions). The digital SAT is adaptive, meaning the difficulty of the second module in each section adapts based on your performance in the first module.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-accent">ACT Structure</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The ACT has four required sections: <strong>English</strong> (45 minutes, 75 questions), <strong>Math</strong> (60 minutes, 60 questions), <strong>Reading</strong> (35 minutes, 40 questions), and <strong>Science</strong> (35 minutes, 40 questions). An optional <strong>Writing</strong> section (40 minutes) is available but not required by most colleges.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Scoring Differences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-neutral-900/12 p-6 bg-zinc-50">
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900">SAT Scoring</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Total Score:</strong> 400-1600</li>
                    <li>• <strong>Reading & Writing:</strong> 200-800</li>
                    <li>• <strong>Math:</strong> 200-800</li>
                    <li>• <strong>National Average:</strong> ~1050</li>
                    <li>• <strong>Top Schools:</strong> 1450+</li>
                  </ul>
                </div>

                <div className="border-2 border-accent/20 p-6 bg-accent/5">
                  <h3 className="text-xl font-semibold mb-3 text-accent">ACT Scoring</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Composite Score:</strong> 1-36 (average of 4 sections)</li>
                    <li>• <strong>English:</strong> 1-36</li>
                    <li>• <strong>Math:</strong> 1-36</li>
                    <li>• <strong>Reading:</strong> 1-36</li>
                    <li>• <strong>Science:</strong> 1-36</li>
                    <li>• <strong>National Average:</strong> ~20</li>
                    <li>• <strong>Top Schools:</strong> 32+</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Which Test is Easier?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                There's no universal answer – it depends on your individual strengths:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 font-bold text-lg">•</span>
                  <span><strong>SAT may be easier if</strong> you need more time per question, struggle with science, or prefer using a calculator for all math problems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg">•</span>
                  <span><strong>ACT may be easier if</strong> you're strong in science, work quickly under pressure, and prefer straightforward questions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 font-bold text-lg">•</span>
                  <span><strong>Try both!</strong> Take a practice test for each and see which score is closer to your target.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Can You Take Both Tests?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Yes! Many students take both the SAT and ACT to see which one they score higher on. Colleges accept either test equally, and some students find they naturally perform better on one format over the other. You can submit your best score from either test (or both) to colleges via score choice.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">How to Prepare for Each Test</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900">SAT Prep Strategy</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>1. Practice with digital format (get comfortable with the interface)</li>
                    <li>2. Focus on evidence-based reading strategies</li>
                    <li>3. Master algebra and data analysis (60% of math)</li>
                    <li>4. Learn to use the built-in calculator efficiently</li>
                    <li>5. Take adaptive practice tests to simulate real conditions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-accent">ACT Prep Strategy</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>1. Work on speed and time management</li>
                    <li>2. Practice science data interpretation and analysis</li>
                    <li>3. Review grammar rules for English section</li>
                    <li>4. Strengthen trigonometry skills for math</li>
                    <li>5. Practice without calculator for first math section</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-zinc-50 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center font-barlow">
              <h2 className="font-heading text-3xl italic tracking-tight text-neutral-900 md:text-4xl mb-4">
                Prepare for SAT or ACT with NomoExam
              </h2>
              <p className="text-lg font-medium text-neutral-600 mb-8">
                Get AI-powered practice, personalized study plans, and thousands of realistic questions for both SAT and ACT.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/exams/sat"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 font-barlow text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
                >
                  Prepare for SAT
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/exams/act"
                  className={MKT.btnOutlineLight}
                >
                  Prepare for ACT
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12">
              Quick answers to common SAT vs ACT questions
            </p>

            <div className="space-y-4">
              <ExpandableSection title="Which test is easier, SAT or ACT?" icon="help" defaultOpen={false}>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Neither test is objectively easier—it depends on your individual strengths. The SAT may be easier if you need more time per question, struggle with science, or prefer using a calculator for all math problems. The ACT may be easier if you're strong in science, work quickly under pressure, and prefer straightforward questions. Take a practice test for each to see which suits you better.
                </p>
              </ExpandableSection>

              <ExpandableSection title="Do colleges prefer SAT or ACT?" icon="school">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All U.S. colleges and universities accept both SAT and ACT scores equally. There is no preference for one test over the other in the admissions process. Admissions officers use concordance tables to compare scores fairly.
                </p>
              </ExpandableSection>

              <ExpandableSection title="Can I take both SAT and ACT?" icon="check">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Yes! Many students take both tests to see which one they score higher on. You can submit your best score from either test (or both) to colleges via score choice.
                </p>
              </ExpandableSection>

              <ExpandableSection title="How long is the SAT vs ACT?" icon="timer">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The SAT is 2 hours and 14 minutes long (digital version). The ACT is 2 hours and 55 minutes without writing, or 3 hours and 35 minutes with the optional writing section.
                </p>
              </ExpandableSection>

              <ExpandableSection title="Does the ACT have a science section?" icon="microscope">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Yes, the ACT has a dedicated Science section (35 minutes, 40 questions) that tests scientific reasoning and data interpretation. The SAT does not have a science section.
                </p>
              </ExpandableSection>

              <ExpandableSection title="How is SAT scoring different from ACT?" icon="chart">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The SAT is scored on a scale of 400-1600, combining Reading/Writing (200-800) and Math (200-800). The ACT is scored on a scale of 1-36, which is the average of four section scores: English, Math, Reading, and Science (each scored 1-36).
                </p>
              </ExpandableSection>

              <ExpandableSection title="Is the SAT or ACT better for math?" icon="calculator">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The SAT allows calculator use for the entire math section and gives more time per question (95 seconds average). The ACT requires faster pacing (60 seconds per question) and includes more geometry and trigonometry. Choose based on whether you prefer more time (SAT) or are strong in geometry/trig (ACT).
                </p>
              </ExpandableSection>

              <ExpandableSection title="How many times can I take the SAT or ACT?" icon="refresh">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You can take both tests as many times as you want. Most students take each test 2-3 times. Both tests offer score choice, allowing you to submit only your best scores to colleges.
                </p>
              </ExpandableSection>
            </div>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
