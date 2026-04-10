import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import {
  ComparisonHero,
  ComparisonTable,
  ExpandableSection,
  ExpertTip,
  SampleQuestion,
  StudentStory,
  SimpleScoreTable
} from "@/components/comparison";
import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BookOpen,
  BookText,
  Calendar,
  CheckCircle,
  Landmark,
  Lightbulb,
  Target,
  XCircle,
} from "lucide-react";
import { BreadcrumbStructuredData, FAQStructuredData } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GRE vs GMAT: Which Test for MBA & Graduate School? (2025 Guide)",
  description: "Complete comparison of GRE vs GMAT for MBA and graduate programs. Compare test format, scoring, difficulty, and which business schools accept each test. Expert recommendations included.",
  alternates: { canonical: "https://nomoexam.com/compare/gre-vs-gmat" },
  keywords: [
    "GRE vs GMAT",
    "GRE or GMAT for MBA",
    "difference between GRE and GMAT",
    "GMAT vs GRE which is easier",
    "business school admission test",
    "MBA entrance exam comparison"
  ],
  openGraph: {
    title: "GRE vs GMAT: Which Test Should You Take for MBA? (2025)",
    description: "Expert comparison of GRE and GMAT for business school admissions. Test format, difficulty, and acceptance.",
    url: "https://nomoexam.com/compare/gre-vs-gmat",
    siteName: "NomoExam",
    type: "article",
  },
};

const comparisonData = [
  { feature: "Test Duration", option1: "3 hours 45 minutes", option2: "3 hours 7 minutes" },
  { feature: "Test Format", option1: "Computer-adaptive by section", option2: "Computer-adaptive by question" },
  { feature: "Sections", option1: "Verbal, Quantitative, Analytical Writing", option2: "Verbal, Quantitative, Data Insights" },
  { feature: "Math Difficulty", option1: "Broader, includes geometry", option2: "Deeper, more word problems" },
  { feature: "Verbal Focus", option1: "Vocabulary-heavy", option2: "Grammar and logic-heavy" },
  { feature: "Calculator", option1: "Allowed for Quant section", option2: "Allowed for Quant section" },
  { feature: "Score Range", option1: "260-340 (1-point increments)", option2: "205-805 (10-point increments)" },
  { feature: "Analytical Writing", option1: "1 essay (30 minutes)", option2: false },
  { feature: "Data Insights Section", option1: false, option2: true },
  { feature: "Test Frequency", option1: "Every 21 days", option2: "Every 16 days" },
  { feature: "Score Validity", option1: "5 years", option2: "5 years" },
  { feature: "Registration Fee", option1: "$220", option2: "$275" },
  { feature: "MBA Acceptance", option1: "Accepted by 1,300+ programs", option2: "Preferred by top 25 MBA programs" },
  { feature: "Non-MBA Programs", option1: "Accepted widely", option2: "Limited acceptance" },
];

export default function GreVsGmatPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: '/' },
          { name: 'Compare', url: '/compare' },
          { name: 'GRE vs GMAT', url: '/compare/gre-vs-gmat' }
        ]}
      />
      <FAQStructuredData
        faqs={[
          { question: "Which is easier, GRE or GMAT?", answer: "Neither test is objectively easier—it depends on your strengths. The GRE may be easier if you have strong vocabulary skills, are comfortable with geometry, and prefer section-level adaptive testing. The GMAT may be easier if you excel at data interpretation, logical reasoning, and work well under time pressure with question-level adaptation." },
          { question: "Do business schools prefer GMAT over GRE?", answer: "All major MBA programs now accept both GRE and GMAT scores equally. However, GMAT is still the traditional standard for top MBA programs, with 70-90% of admitted students submitting GMAT scores. Check your target school's class profile to see which test is more commonly submitted." },
          { question: "Can I use GRE scores for MBA applications?", answer: "Yes! Over 1,300 business schools worldwide accept GRE scores for MBA admissions. The GRE is especially popular for dual-degree programs (MBA + JD, MBA + MPP) since it's accepted by multiple graduate programs." },
          { question: "What is GMAT Data Sufficiency?", answer: "Data Sufficiency is a unique GMAT question type that represents 50% of the Quantitative section. Instead of solving for a value, you determine whether given information is sufficient to answer a question. It tests logical reasoning rather than pure calculation skills." },
          { question: "How long should I study for GRE vs GMAT?", answer: "Most students need 2-4 months of preparation for either test. GRE requires significant vocabulary building (1,000+ words), while GMAT requires mastering data sufficiency and critical reasoning. Both require consistent practice with full-length tests." },
          { question: "Can I switch from GRE to GMAT (or vice versa)?", answer: "Yes! Many students take diagnostic tests for both and choose the test where they score higher. You can retake the GRE every 21 days and the GMAT every 16 days, giving you flexibility to switch if needed." },
          { question: "What is a good GRE score for top MBA programs?", answer: "For top 10 MBA programs, aim for a GRE score of 325+ (about 95th percentile), with Quant 165+ and Verbal 160+. For top 25 programs, 320+ is competitive. Check your target school's class profile for specific data." },
          { question: "What is a good GMAT score for top MBA programs?", answer: "For top 10 MBA programs, aim for a GMAT score of 720+ (about 94th percentile). Stanford GSB and Harvard's median GMAT scores are around 730-740. For top 25 programs, 700+ is competitive." }
        ]}
      />
      <main>
        <ComparisonHero
          title="GRE vs GMAT: Which Test for Graduate School?"
          description="Choosing between GRE and GMAT for your MBA or graduate program? Both tests are widely accepted, but each has unique strengths. Here's your complete guide."
          option1={{ name: "GRE", tagline: "Flexible, vocabulary-focused" }}
          option2={{ name: "GMAT", tagline: "MBA-focused, logic-heavy" }}
        />

        {/* Quick Recommendation */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto bg-zinc-50 border-2 border-neutral-900/12 p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Quick Recommendation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/90 border-2 border-neutral-900/15 p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Choose GRE if you:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Are applying to multiple graduate programs (not just MBA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Have strong vocabulary skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Prefer section-level adaptive testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Want more time per question</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Need flexibility to skip and return to questions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 border-2 border-accent/30 p-6">
                <h3 className="text-xl font-bold text-accent mb-3">Choose GMAT if you:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Are targeting top 25 MBA programs exclusively</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Excel at data analysis and interpretation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Prefer business-focused content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Are strong at logical reasoning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Want a shorter overall test time</span>
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
              GRE vs GMAT: Side-by-Side Comparison
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Detailed breakdown of all key differences between GRE and GMAT for graduate school admissions.
            </p>
            <div className="max-w-5xl mx-auto">
              <ComparisonTable
                option1Name="GRE"
                option2Name="GMAT"
                rows={comparisonData}
              />
            </div>
          </div>
        </section>

        {/* Top MBA Program Scores */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Top MBA Programs: Median Scores
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-8">
              Target scores for top 25 business schools (Class of 2026)
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-2 border-black/[0.08] text-sm">
                <thead className="bg-zinc-100">
                  <tr>
                    <th className="p-3 text-left border-r border-b-2 border-black/[0.08]">Business School</th>
                    <th className="p-3 text-left border-r border-b-2 border-black/[0.08]">GMAT Median</th>
                    <th className="p-3 text-left border-r border-b-2 border-black/[0.08]">GRE Equivalent</th>
                    <th className="p-3 text-left border-b-2 border-black/[0.08]">Acceptance Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { school: "Stanford GSB", gmat: 738, gre: "328-330", rate: "6.1%" },
                    { school: "Harvard Business School", gmat: 730, gre: "326-328", rate: "11.5%" },
                    { school: "Wharton (UPenn)", gmat: 733, gre: "327-329", rate: "20.7%" },
                    { school: "MIT Sloan", gmat: 728, gre: "326-328", rate: "14.6%" },
                    { school: "Northwestern (Kellogg)", gmat: 730, gre: "326-328", rate: "24.2%" },
                    { school: "Chicago Booth", gmat: 730, gre: "326-328", rate: "24.3%" },
                    { school: "Columbia Business School", gmat: 729, gre: "326-328", rate: "17.9%" },
                    { school: "Berkeley Haas", gmat: 726, gre: "325-327", rate: "18.4%" },
                    { school: "Yale SOM", gmat: 723, gre: "324-326", rate: "23.7%" },
                    { school: "Dartmouth Tuck", gmat: 722, gre: "324-326", rate: "23.8%" },
                    { school: "Duke Fuqua", gmat: 715, gre: "322-324", rate: "25.0%" },
                    { school: "NYU Stern", gmat: 720, gre: "323-325", rate: "26.4%" },
                  ].map((row, index) => (
                    <tr key={index} className={`border-b border-black/[0.08] ${index % 2 === 0 ? '' : 'bg-zinc-50'}`}>
                      <td className="p-3 border-r border-black/[0.08] font-medium">{row.school}</td>
                      <td className="p-3 border-r border-black/[0.08]">{row.gmat}</td>
                      <td className="p-3 border-r border-black/[0.08]">{row.gre}</td>
                      <td className="p-3">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-lg border-2 border-black/[0.08] bg-zinc-50 p-6">
              <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
                <BarChart3 className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                What this data tells you
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Most top MBA programs have GMAT medians of 720-740 (about 95th percentile)</li>
                <li>• Equivalent GRE scores are typically 324-330 (about 95th percentile)</li>
                <li>• Both tests are equally accepted, but GMAT data is more widely reported</li>
                <li>• Aim for at or above median to be competitive for scholarships</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Student Success Stories */}
        <section className="bg-zinc-50 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Career Changer Success Stories
              </h2>
              <p className="text-center text-lg text-muted-foreground mb-12">
                See how professionals prepared for top MBA programs
              </p>

              <div className="space-y-8">
                <StudentStory
                  title="From 305 GRE to 330 - Admitted to Wharton"
                  studentName="Alex Thompson"
                  studentType="Software Engineer → MBA"
                  startScore="GRE 305 (V: 152, Q: 153)"
                  endScore="GRE 330 (V: 163, Q: 167)"
                  timeframe="4 months"
                  strategy={[
                    "Diagnosed weak areas with full-length diagnostic test",
                    "Focused heavily on GRE vocabulary (learned 1,000+ words)",
                    "Practiced quantitative reasoning daily (30 minutes)",
                    "Used NomoExam's adaptive quant practice to master geometry",
                    "Took 10 full-length practice tests over 16 weeks"
                  ]}
                  keyTakeaways={[
                    "GRE was perfect for dual-degree plans (also applied to MS programs)",
                    "Vocabulary flashcards were essential - made my own Anki deck",
                    "Section-adaptive format let me skip hard questions and return",
                    "Geometry review was crucial (hadn't touched it since high school)"
                  ]}
                  featuresUsed={["Vocabulary Builder", "Adaptive Quant Practice", "Analytics Dashboard", "Full-Length Tests"]}
                />

                <StudentStory
                  title="Switched from GRE to GMAT - Scored 740"
                  studentName="Priya Kapoor"
                  studentType="Finance Analyst → MBA"
                  startScore="GRE 318 (GMAT 690 equivalent)"
                  endScore="GMAT 740"
                  timeframe="3 months"
                  strategy={[
                    "Took both diagnostic tests - realized GMAT suited my skills better",
                    "Mastered data sufficiency (unique GMAT question type)",
                    "Practiced critical reasoning with business contexts",
                    "Focused on Data Insights section (new to GMAT Focus)",
                    "Used NomoExam to simulate question-adaptive format"
                  ]}
                  keyTakeaways={[
                    "GMAT's business focus aligned perfectly with my career goals",
                    "Data sufficiency questions rewarded logical thinking over calculations",
                    "Shorter test time (3 hours vs 3.75 hours) reduced fatigue",
                    "Top MBA programs still report GMAT scores more prominently"
                  ]}
                  featuresUsed={["Data Sufficiency Practice", "Critical Reasoning", "Business Scenarios", "Mock Tests"]}
                />

                <StudentStory
                  title="Non-Traditional Background: 160 GRE Quant to 167"
                  studentName="Marcus Johnson"
                  studentType="Non-Profit Director → MBA"
                  startScore="GRE 315 (V: 155, Q: 160)"
                  endScore="GRE 328 (V: 161, Q: 167)"
                  timeframe="5 months"
                  strategy={[
                    "Started with quant fundamentals (algebra, fractions, ratios)",
                    "Used spaced repetition for 800+ GRE vocabulary words",
                    "Practiced reading comprehension with dense academic passages",
                    "Leveraged NomoExam's AI to explain every mistake",
                    "Joined study group for accountability and motivation"
                  ]}
                  keyTakeaways={[
                    "GRE's broader acceptance helped me apply to dual-degree programs (MBA + MPA)",
                    "Non-quant background required longer prep, but GRE math is very learnable",
                    "Writing section helped showcase communication skills for top programs",
                    "Consistent daily practice (90 minutes) was more effective than cramming"
                  ]}
                  featuresUsed={["Quant Foundations", "Vocabulary Flashcards", "AI Explanations", "Progress Tracking"]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sample Questions */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Sample Questions: GRE vs GMAT
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12">
              See actual question styles and difficulty from each test
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Quantitative Reasoning Comparison</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <SampleQuestion
                    testName="GRE"
                    question="If x² - 9 = 0 and x > 0, what is the value of x³?"
                    options={["A) -27", "B) -3", "C) 3", "D) 9", "E) 27"]}
                    solution="First solve x² - 9 = 0: x² = 9, so x = ±3. Since x > 0, we have x = 3. Then x³ = 3³ = 27."
                    answer="E) 27"
                    tip="GRE quant tests straightforward algebra and arithmetic. Always check constraints (like x > 0) to eliminate impossible answers."
                    variant="primary"
                  />

                  <SampleQuestion
                    testName="GMAT"
                    question="Is x > y? (1) x² > y² (2) x > 0"
                    options={[
                      "A) Statement (1) ALONE is sufficient",
                      "B) Statement (2) ALONE is sufficient",
                      "C) BOTH statements TOGETHER are sufficient, but NEITHER alone",
                      "D) EACH statement ALONE is sufficient",
                      "E) Statements (1) and (2) TOGETHER are NOT sufficient"
                    ]}
                    solution="Statement (1): x² > y² doesn't guarantee x > y. For example, if x = -5 and y = 2, then x² = 25 > y² = 4, but x < y. NOT sufficient. Statement (2): Knowing x > 0 tells us nothing about y. NOT sufficient. Together: If x > 0 and x² > y², then |x| > |y|. Since x is positive, this means x > |y| ≥ y. SUFFICIENT."
                    answer="C) BOTH statements TOGETHER are sufficient"
                    tip="Data Sufficiency is unique to GMAT. You're not solving for the value—you're determining whether you CAN solve it. Test extreme cases to eliminate options."
                    variant="accent"
                  />
                </div>

                <div className="mt-6 rounded-lg border-2 border-neutral-900/12 bg-zinc-50 p-6">
                  <p className="mb-3 flex items-center gap-2 font-semibold text-neutral-900">
                    <Target className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                    Key difference in quant
                  </p>
                  <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
                    <div>
                      <p className="mb-2 font-semibold text-neutral-900">GRE Quant:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Broader topics (includes more geometry)</li>
                        <li>• Straightforward problem-solving</li>
                        <li>• Calculator allowed</li>
                        <li>• Quantitative Comparison questions (unique to GRE)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 font-semibold text-neutral-900">GMAT Quant:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Fewer topics but deeper reasoning</li>
                        <li>• Data Sufficiency questions (unique to GMAT)</li>
                        <li>• More word problems and logic</li>
                        <li>• Business contexts in many problems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Verbal Reasoning Comparison</h3>
                <div className="space-y-6">
                  <div className="border-2 border-neutral-900/12 bg-zinc-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-neutral-900">GRE Verbal: Sentence Equivalence Example</h4>
                    <p className="text-sm mb-4">
                      <strong>Directions:</strong> Select TWO answer choices that (1) complete the sentence and (2) produce sentences that are similar in meaning.
                    </p>
                    <p className="text-sm italic mb-4 text-muted-foreground">
                      "Despite the scientist's _____ explanation, the committee remained skeptical of the experimental results."
                    </p>
                    <div className="space-y-1 text-sm mb-4">
                      <p>A) cursory</p>
                      <p>B) lucid</p>
                      <p>C) comprehensive</p>
                      <p>D) superficial</p>
                      <p>E) thorough</p>
                      <p>F) meticulous</p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-sm mb-2">Answer: C (comprehensive) and E (thorough)</p>
                      <p className="text-sm text-muted-foreground">
                        Both words convey completeness and detail. The "Despite" indicates contrast—even though 
                        the explanation was comprehensive/thorough, the committee was still skeptical.
                      </p>
                    </div>
                    <div className="mt-4 rounded border border-black/[0.08] bg-accent-lime/10 p-3">
                      <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-neutral-900">
                        <Lightbulb className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                        GRE verbal strategy
                      </p>
                      <p className="text-sm text-muted-foreground">
                        GRE heavily tests vocabulary. For Sentence Equivalence, look for synonyms that create similar meanings. 
                        Build a strong vocabulary foundation (1,000+ words).
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border-2 border-black/[0.08] bg-zinc-50 p-6">
                    <h4 className="mb-3 font-semibold text-neutral-900">GMAT Verbal: Critical Reasoning Example</h4>
                    <p className="text-sm italic mb-4 text-muted-foreground">
                      "A company introduced a new employee wellness program last year. Since then, employee sick days 
                      have decreased by 15%. The company concludes that the wellness program caused this reduction."
                    </p>
                    <p className="font-semibold text-sm mb-3">Which of the following, if true, most weakens the company's conclusion?</p>
                    <div className="space-y-2 text-sm mb-4">
                      <p>A) The wellness program included free gym memberships and health screenings</p>
                      <p>B) Employee morale improved after the wellness program was introduced</p>
                      <p>C) A regional flu outbreak that occurred the previous year did not reoccur this year</p>
                      <p>D) The company's competitors also saw decreases in sick days</p>
                      <p>E) Participation in the wellness program was voluntary</p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-sm mb-2">Answer: C</p>
                      <p className="text-sm text-muted-foreground">
                        This provides an alternative explanation for the decrease in sick days (absence of flu outbreak), 
                        which weakens the conclusion that the wellness program caused the reduction.
                      </p>
                    </div>
                    <div className="mt-4 rounded border border-black/[0.08] bg-zinc-100/80 p-3">
                      <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-neutral-900">
                        <Lightbulb className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                        GMAT verbal strategy
                      </p>
                      <p className="text-sm text-muted-foreground">
                        GMAT tests logical reasoning and argument analysis. Focus on identifying assumptions, 
                        finding alternative explanations, and evaluating evidence. Vocabulary is less emphasized.
                      </p>
                    </div>
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
                Expert Tips for GRE vs GMAT
              </h2>
              <p className="text-center text-lg text-muted-foreground mb-12">
                Actionable strategies from test prep experts and admissions consultants
              </p>

              <div className="space-y-4">
                <ExpertTip title="Take Both Diagnostic Tests Before Committing" variant="primary">
                  The best way to choose is empirical data. Take a full-length diagnostic test for both 
                  GRE and GMAT (available free from ETS and GMAC). Compare your percentile scores—the test 
                  where you score higher is usually the right choice.
                </ExpertTip>

                <ExpertTip title="Check Your Target School's Class Profile" variant="warning">
                  While schools accept both tests, look at the data. If 95% of admitted students submitted 
                  GMAT scores, it's still the implicit standard for that program. Conversely, if a school 
                  shows strong GRE acceptance, you're safe choosing either.
                </ExpertTip>

                <ExpertTip title="Master GMAT Data Sufficiency Early" variant="success">
                  Data sufficiency is 50% of GMAT quant and unlike anything you've seen in school. Start 
                  practicing this question type early—it requires a completely different mindset from 
                  traditional problem-solving. Don't try to solve; evaluate sufficiency.
                </ExpertTip>

                <ExpertTip title="Build Your GRE Vocabulary Systematically" variant="default">
                  If choosing GRE, vocabulary is non-negotiable. Use spaced repetition tools (Anki, Quizlet) 
                  to learn 1,000-1,500 high-frequency GRE words. Focus on word roots, prefixes, and suffixes 
                  to decode unfamiliar words on test day.
                </ExpertTip>

                <ExpertTip title="Understand Adaptive Differences" variant="primary">
                  GRE adapts by section (your second section difficulty depends on first section performance). 
                  GMAT adapts by question (each question difficulty changes based on your previous answer). 
                  This affects pacing strategy—you can't skip around on GMAT.
                </ExpertTip>

                <ExpertTip title="Consider Your Target Program Type" variant="default">
                  Applying only to MBA programs? GMAT is safe. Considering dual degrees (MBA + JD, MBA + MPP) 
                  or unsure about MBA? GRE offers more flexibility for other graduate programs.
                </ExpertTip>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">In-Depth Content Breakdowns</h2>
              
              <div className="space-y-4">
                <ExpandableSection 
                  title="GMAT Data Sufficiency: Complete Guide" 
                  icon="target"
                  defaultOpen={false}
                >
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Data Sufficiency is the most unique and challenging aspect of the GMAT. It represents 
                      50% of the Quantitative section and tests your ability to evaluate whether given 
                      information is sufficient to answer a question.
                    </p>

                    <div className="bg-accent/5 border-2 border-accent/20 rounded-lg p-6">
                      <h4 className="font-semibold mb-3">The 5 Answer Choices (Always the Same)</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>A)</strong> Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient</p>
                        <p><strong>B)</strong> Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient</p>
                        <p><strong>C)</strong> BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient</p>
                        <p><strong>D)</strong> EACH statement ALONE is sufficient</p>
                        <p><strong>E)</strong> Statements (1) and (2) TOGETHER are NOT sufficient</p>
                      </div>
                    </div>

                    <div className="rounded-lg border-2 border-black/[0.08] bg-zinc-50 p-4">
                      <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
                        <Lightbulb className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                        Strategy for Data Sufficiency
                      </p>
                      <ol className="text-sm space-y-2 text-muted-foreground list-decimal list-inside">
                        <li><strong>Never solve completely</strong> - Your job is to determine if you CAN solve, not to solve</li>
                        <li><strong>Evaluate (1) alone first</strong> - Ignore statement (2) completely</li>
                        <li><strong>Evaluate (2) alone second</strong> - Ignore statement (1) completely</li>
                        <li><strong>Only combine if needed</strong> - If neither alone works, try both together</li>
                        <li><strong>Test extreme cases</strong> - Try different values to see if the answer changes</li>
                      </ol>
                    </div>

                    <div className="border-l-4 border-neutral-900 pl-4 mt-4">
                      <p className="font-semibold mb-2">Common Mistakes:</p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Trying to solve for exact values instead of checking sufficiency</li>
                        <li>• Using information from statement (2) while evaluating statement (1)</li>
                        <li>• Assuming positive numbers when none are specified</li>
                        <li>• Forgetting to consider negative numbers, zero, or fractions</li>
                      </ul>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="GRE Verbal: Vocabulary Mastery Guide" 
                  icon="book"
                >
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      GRE Verbal Reasoning heavily emphasizes vocabulary through Text Completion and Sentence 
                      Equivalence questions. Here's how to build the vocabulary you need for a high score.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-2 border-neutral-900/12 bg-zinc-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">High-Priority Word Categories</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• <strong>Academic words:</strong> erudite, pedantic, didactic</li>
                          <li>• <strong>Tone/attitude:</strong> sanguine, sardonic, contentious</li>
                          <li>• <strong>Descriptive:</strong> ubiquitous, ephemeral, tenuous</li>
                          <li>• <strong>Action verbs:</strong> mitigate, exacerbate, corroborate</li>
                        </ul>
                      </div>
                      
                      <div className="border-2 border-neutral-900/12 bg-zinc-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Essential Word Roots</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• <strong>bene:</strong> good (benevolent, benefactor)</li>
                          <li>• <strong>mal:</strong> bad (malevolent, malicious)</li>
                          <li>• <strong>ante:</strong> before (antecedent, antebellum)</li>
                          <li>• <strong>post:</strong> after (posthumous, posterior)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-lg border-2 border-black/[0.08] bg-zinc-50 p-4">
                      <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
                        <BookText className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                        Vocabulary study plan
                      </p>
                      <div className="text-sm space-y-2 text-muted-foreground">
                        <p><strong>Weeks 1-4:</strong> Learn 25 new words per day (700 total). Use spaced repetition.</p>
                        <p><strong>Weeks 5-8:</strong> Learn 15 new words per day, review previous 700 (420 new + review).</p>
                        <p><strong>Weeks 9-12:</strong> Learn 10 new words per day, heavy review (280 new + review).</p>
                        <p><strong>Weeks 13-16:</strong> Focus on difficult words, practice in context with questions.</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-neutral-900 pl-4 mt-4">
                      <p className="font-semibold mb-1">Pro Tip: Context Over Definitions</p>
                      <p className="text-sm text-muted-foreground">
                        Don't just memorize definitions. Learn words in sentences and understand their connotations 
                        (positive/negative). GRE tests your ability to use words appropriately in context, not just 
                        recall dictionary meanings.
                      </p>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="GMAT Data Insights Section: What to Expect" 
                  icon="chart"
                >
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      The Data Insights section is new to GMAT Focus Edition (2023). It replaced Integrated 
                      Reasoning and includes questions that test your ability to analyze complex data sets.
                    </p>

                    <div className="bg-accent/5 border-2 border-accent/20 rounded-lg p-6">
                      <h4 className="font-semibold mb-3">Question Types (20 questions, 45 minutes)</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium">1. Multi-Source Reasoning (30%)</p>
                          <p className="text-sm text-muted-foreground">
                            Analyze information from multiple tabs (text, tables, graphs) to answer questions. 
                            Tests your ability to synthesize data from different sources.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">2. Graphics Interpretation (25%)</p>
                          <p className="text-sm text-muted-foreground">
                            Interpret graphs, charts, and scatter plots. Fill in blanks with dropdown selections 
                            based on visual data analysis.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">3. Table Analysis (25%)</p>
                          <p className="text-sm text-muted-foreground">
                            Sortable tables with data. Determine whether statements are true/false based on 
                            data analysis and calculations.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">4. Two-Part Analysis (20%)</p>
                          <p className="text-sm text-muted-foreground">
                            Solve problems requiring two related answers (e.g., find two unknowns that satisfy 
                            conditions).
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border-2 border-black/[0.08] bg-zinc-50 p-4">
                      <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
                        <Lightbulb className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                        Data Insights strategy
                      </p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Don't spend time fully understanding all data upfront—read the question first</li>
                        <li>• Use the on-screen calculator for complex calculations</li>
                        <li>• For sortable tables, sort by relevant columns to find patterns</li>
                        <li>• Practice with spreadsheet-like interfaces to get comfortable</li>
                        <li>• Time management is critical—don't spend more than 2.5 minutes per question</li>
                      </ul>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="School-by-School Test Preferences" 
                  icon="landmark"
                >
                  <div className="space-y-4">
                    <div className="bg-zinc-50 border-2 border-neutral-900/12 rounded-lg p-6">
                      <p className="font-semibold mb-2">The Official Answer:</p>
                      <p className="text-muted-foreground">
                        <strong>All top business schools accept both GRE and GMAT scores equally.</strong> Admissions 
                        committees use concordance tables to compare scores fairly, and there is no advantage to 
                        submitting one test over the other.
                      </p>
                    </div>

                    <h4 className="font-semibold text-lg mt-6 mb-3">The Nuanced Reality:</h4>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-accent pl-4">
                        <p className="font-semibold mb-1">Top 10 MBA Programs</p>
                        <p className="text-sm text-muted-foreground">
                          <strong>GMAT still dominates:</strong> 70-90% of admitted students submit GMAT scores. 
                          While GRE is accepted, GMAT is the traditional standard and median GMAT scores are 
                          more prominently reported in rankings.
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          <strong>Recommendation:</strong> If targeting only M7 or Top 10, GMAT is the safer choice 
                          unless you have a compelling reason for GRE (dual-degree, significantly higher GRE score).
                        </p>
                      </div>

                      <div className="border-l-4 border-neutral-900 pl-4">
                        <p className="font-semibold mb-1">Top 11-25 MBA Programs</p>
                        <p className="text-sm text-muted-foreground">
                          <strong>More balanced acceptance:</strong> 40-60% submit GRE. Schools like Yale SOM, 
                          Haas, and Ross show strong GRE acceptance and explicitly encourage it.
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          <strong>Recommendation:</strong> Either test is equally viable. Choose based on your strengths.
                        </p>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4">
                        <p className="font-semibold mb-1">Dual-Degree and Part-Time Programs</p>
                        <p className="text-sm text-muted-foreground">
                          <strong>GRE is often preferred:</strong> If applying to MBA + JD, MBA + MPP, or other 
                          dual degrees, GRE offers flexibility since law schools and policy schools don't accept GMAT.
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          <strong>Recommendation:</strong> GRE is the clear choice for dual-degree applicants.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-lg border-2 border-black/[0.08] bg-zinc-50 p-4">
                      <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
                        <BarChart3 className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                        How to research your target schools
                      </p>
                      <ol className="text-sm space-y-1 text-muted-foreground list-decimal list-inside">
                        <li>Check the school's class profile for % of students who submitted each test</li>
                        <li>Look at median/average scores—are both GRE and GMAT reported?</li>
                        <li>Read admissions blog posts about test preferences</li>
                        <li>Contact current students or admissions office directly</li>
                      </ol>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Common Mistakes MBA Applicants Make" 
                  icon="alert"
                >
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Avoid these costly errors that hurt your MBA chances:
                    </p>

                    <div className="space-y-3">
                      {[
                        {
                          mistake: "Choosing a test based on rumors, not data",
                          fix: "Take diagnostic tests for BOTH GRE and GMAT. Your actual scores (converted to percentiles) will tell you which test you're naturally better at."
                        },
                        {
                          mistake: "Underestimating GMAT Data Sufficiency",
                          fix: "Data sufficiency represents 50% of GMAT quant and requires completely different thinking. Start practicing this question type in week 1 of your prep."
                        },
                        {
                          mistake: "Ignoring GRE vocabulary prep",
                          fix: "If choosing GRE, vocabulary is non-negotiable. Allocate 30 minutes daily for flashcard review. You need 1,000+ words for a competitive score."
                        },
                        {
                          mistake: "Taking the test without checking school-specific data",
                          fix: "Research your target schools' class profiles. If 95% submitted GMAT, that's a signal. Reach out to admissions offices if unclear."
                        },
                        {
                          mistake: "Not practicing with official materials",
                          fix: "Third-party materials can be helpful, but official practice tests from ETS (GRE) and GMAC (GMAT) are essential. Take at least 4-5 official tests."
                        },
                        {
                          mistake: "Rushing to take the test too soon",
                          fix: "Most successful applicants prep for 2-4 months. Don't rush just to meet deadlines. A 20-30 point improvement can make a huge difference."
                        },
                        {
                          mistake: "Ignoring the Data Insights section (GMAT Focus)",
                          fix: "Data Insights is 1/3 of your GMAT score. Many test-takers focus only on quant and verbal. Practice multi-source reasoning early."
                        },
                        {
                          mistake: "Not understanding score reporting policies",
                          fix: "GRE: You choose which scores to send (ScoreSelect). GMAT: You can cancel scores immediately after the test. Know your options before test day."
                        },
                        {
                          mistake: "Taking the test only once 'to see how you do'",
                          fix: "Most admitted students take the test 2-3 times. Plan for this from the start. Space tests 4-6 weeks apart for meaningful improvement."
                        },
                        {
                          mistake: "Neglecting the GRE Analytical Writing section",
                          fix: "While not heavily weighted, a very low writing score (<3.0) can raise red flags. Spend 2-3 weeks practicing argument analysis essays."
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
                  title="4-Month Study Plan: GRE vs GMAT" 
                  icon="calendar"
                >
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border-2 border-neutral-900/12 rounded-lg p-6">
                        <h4 className="font-semibold mb-4 text-neutral-900 text-lg">GRE Prep Timeline</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="font-semibold text-sm">Month 1: Foundation</p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-4 mt-1">
                              <li>• Take diagnostic test (official ETS)</li>
                              <li>• Start vocabulary (25 words/day)</li>
                              <li>• Review quant fundamentals (algebra, geometry)</li>
                              <li>• Practice text completion questions</li>
                            </ul>
                          </div>

                          <div>
                            <p className="font-semibold text-sm">Month 2: Skill Building</p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-4 mt-1">
                              <li>• Continue vocabulary (1,000 total by end of month)</li>
                              <li>• Topic-specific quant practice</li>
                              <li>• Reading comprehension strategies</li>
                              <li>• Sentence equivalence practice</li>
                            </ul>
                          </div>

                          <div>
                            <p className="font-semibold text-sm">Month 3: Test Practice</p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-4 mt-1">
                              <li>• Full-length practice tests (every 2 weeks)</li>
                              <li>• Vocabulary review and maintenance</li>
                              <li>• Analytical writing practice (3-4 essays)</li>
                              <li>• Focus on weak areas from tests</li>
                            </ul>
                          </div>

                          <div>
                            <p className="font-semibold text-sm">Month 4: Test Mastery</p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-4 mt-1">
                              <li>• Weekly full-length tests</li>
                              <li>• Time management refinement</li>
                              <li>• Review all mistakes systematically</li>
                              <li>• Test day simulation</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-2 border-accent/20 rounded-lg p-6">
                        <h4 className="font-semibold mb-4 text-accent text-lg">GMAT Prep Timeline</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="font-semibold text-sm">Month 1: Foundation</p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-4 mt-1">
                              <li>• Take diagnostic test (official GMAC)</li>
                              <li>• Learn data sufficiency strategy</li>
                              <li>• Review quant fundamentals</li>
                              <li>• Practice critical reasoning</li>
                            </ul>
                          </div>

                          <div>
                            <p className="font-semibold text-sm">Month 2: Skill Building</p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-4 mt-1">
                              <li>• Heavy data sufficiency practice</li>
                              <li>• Sentence correction rules</li>
                              <li>• Data Insights section practice</li>
                              <li>• Reading comprehension strategies</li>
                            </ul>
                          </div>

                          <div>
                            <p className="font-semibold text-sm">Month 3: Test Practice</p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-4 mt-1">
                              <li>• Full-length practice tests (every 2 weeks)</li>
                              <li>• Focus on adaptive test strategy</li>
                              <li>• Multi-source reasoning practice</li>
                              <li>• Analyze mistake patterns</li>
                            </ul>
                          </div>

                          <div>
                            <p className="font-semibold text-sm">Month 4: Test Mastery</p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-4 mt-1">
                              <li>• Weekly full-length tests</li>
                              <li>• Question-level pacing practice</li>
                              <li>• Final weak area review</li>
                              <li>• Test day simulation</li>
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
                          <p className="mb-2 font-semibold">By End of Month 1:</p>
                          <ul className="space-y-1 text-muted-foreground">
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Baseline score established</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Weak areas identified</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Study schedule locked in</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="mb-2 font-semibold">By End of Month 2:</p>
                          <ul className="space-y-1 text-muted-foreground">
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Core skills mastered</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>30–50 point improvement</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Consistent practice routine</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="mb-2 font-semibold">By End of Month 4:</p>
                          <ul className="space-y-1 text-muted-foreground">
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Target score achieved</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Test-ready confidence</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                              <span>Backup date scheduled</span>
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
                  <h3 className="text-xl font-semibold mb-2 text-neutral-900">GRE Structure</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    The GRE consists of three main sections:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• <strong>Verbal Reasoning:</strong> 2 sections, 27 questions total, 41 minutes (reading comprehension, text completion, sentence equivalence)</li>
                    <li>• <strong>Quantitative Reasoning:</strong> 2 sections, 27 questions total, 47 minutes (arithmetic, algebra, geometry, data analysis)</li>
                    <li>• <strong>Analytical Writing:</strong> 1 essay task, 30 minutes (analyze an issue or argument)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-accent">GMAT Structure</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    The GMAT Focus Edition consists of three main sections:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• <strong>Verbal Reasoning:</strong> 23 questions, 45 minutes (reading comprehension, critical reasoning)</li>
                    <li>• <strong>Quantitative Reasoning:</strong> 21 questions, 45 minutes (problem solving, data sufficiency)</li>
                    <li>• <strong>Data Insights:</strong> 20 questions, 45 minutes (data analysis, multi-source reasoning, graphics interpretation)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Scoring Differences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-neutral-900/12 p-6 bg-zinc-50">
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900">GRE Scoring</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Total Score:</strong> 260-340</li>
                    <li>• <strong>Verbal:</strong> 130-170 (1-point increments)</li>
                    <li>• <strong>Quant:</strong> 130-170 (1-point increments)</li>
                    <li>• <strong>Writing:</strong> 0-6 (0.5-point increments)</li>
                    <li>• <strong>Average Score:</strong> ~306 (V: 150, Q: 156)</li>
                    <li>• <strong>Top Schools:</strong> 325+ (V: 160+, Q: 165+)</li>
                  </ul>
                </div>

                <div className="border-2 border-accent/20 p-6 bg-accent/5">
                  <h3 className="text-xl font-semibold mb-3 text-accent">GMAT Scoring</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Total Score:</strong> 205-805 (10-point increments)</li>
                    <li>• <strong>Verbal:</strong> 60-90</li>
                    <li>• <strong>Quant:</strong> 60-90</li>
                    <li>• <strong>Data Insights:</strong> 60-90</li>
                    <li>• <strong>Average Score:</strong> ~550</li>
                    <li>• <strong>Top Schools:</strong> 700+ (85th percentile)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Business School Acceptance</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>The truth:</strong> All major MBA programs now accept both GRE and GMAT scores. However, there are some nuances:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-neutral-900 pl-4">
                  <p className="text-sm"><strong>GRE Acceptance:</strong> Over 1,300 business schools worldwide accept GRE scores. It's especially popular for dual-degree programs (MBA + another graduate degree) and students applying to multiple types of graduate programs.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p className="text-sm"><strong>GMAT Preference:</strong> While schools accept both, GMAT is still the traditional standard for MBA programs. Some top programs report median GMAT scores more prominently than GRE scores in their class profiles.</p>
                </div>
                <div className="bg-zinc-100/90 p-4 rounded">
                  <p className="text-sm text-muted-foreground"><strong>Important:</strong> Check your target schools' class profiles. If 90%+ of admitted students submitted GMAT scores, it may be the safer choice for that specific program.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Which Test is Easier?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Neither test is objectively "easier" – it depends on your strengths:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-50 border-l-4 border-neutral-900 p-4">
                  <h4 className="font-semibold mb-2">GRE May Be Easier If:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• You have a strong vocabulary</li>
                    <li>• You're comfortable with geometry</li>
                    <li>• You prefer more time to think</li>
                    <li>• You like skipping and returning to questions</li>
                  </ul>
                </div>
                <div className="bg-accent/5 border-l-4 border-accent p-4">
                  <h4 className="font-semibold mb-2">GMAT May Be Easier If:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• You excel at data interpretation</li>
                    <li>• You're strong in logical reasoning</li>
                    <li>• You work well under time pressure</li>
                    <li>• You prefer business-context problems</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Key Differences in Content</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Math Content</h3>
                  <p className="text-sm text-muted-foreground"><strong>GRE:</strong> Broader range including geometry, but less emphasis on advanced problem-solving. Allows calculator.</p>
                  <p className="text-sm text-muted-foreground mt-2"><strong>GMAT:</strong> Fewer topics but deeper reasoning required. Heavy focus on data sufficiency (unique question type). Allows calculator.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Verbal Content</h3>
                  <p className="text-sm text-muted-foreground"><strong>GRE:</strong> Vocabulary-focused with text completion and sentence equivalence questions. Tests breadth of vocabulary knowledge.</p>
                  <p className="text-sm text-muted-foreground mt-2"><strong>GMAT:</strong> Grammar and logic-focused. Critical reasoning questions test argument analysis and evaluation skills.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Preparation Timeline</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Both tests typically require 2-4 months of preparation:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 font-bold">1-2 months:</span>
                  <span>If you have strong quantitative and verbal skills, or are retaking with a previous foundation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 font-bold">2-3 months:</span>
                  <span>Average preparation time for most students starting from scratch</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 font-bold">3-4 months:</span>
                  <span>If you need to strengthen fundamentals or are targeting top schools (330+ GRE, 700+ GMAT)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-zinc-50 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center font-barlow">
              <h2 className="font-heading text-3xl italic tracking-tight text-neutral-900 md:text-4xl mb-4">
                Prepare for GRE or GMAT with NomoExam
              </h2>
              <p className="text-lg font-medium text-neutral-600 mb-8">
                Get AI-powered practice, personalized study plans, and thousands of realistic questions for both GRE and GMAT.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/exams/gre"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 font-barlow text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
                >
                  Prepare for GRE
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/exams/gmat"
                  className={MKT.btnOutlineLight}
                >
                  Prepare for GMAT
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
              Quick answers to common GRE vs GMAT questions
            </p>

            <div className="space-y-4">
              <ExpandableSection title="Which is easier, GRE or GMAT?" icon="help" defaultOpen={false}>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Neither test is objectively easier—it depends on your strengths. The GRE may be easier if you have strong vocabulary skills, are comfortable with geometry, and prefer section-level adaptive testing. The GMAT may be easier if you excel at data interpretation, logical reasoning, and work well under time pressure with question-level adaptation.
                </p>
              </ExpandableSection>

              <ExpandableSection title="Do business schools prefer GMAT over GRE?" icon="school">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All major MBA programs now accept both GRE and GMAT scores equally. However, GMAT is still the traditional standard for top MBA programs, with 70-90% of admitted students submitting GMAT scores. Check your target school's class profile to see which test is more commonly submitted.
                </p>
              </ExpandableSection>

              <ExpandableSection title="Can I use GRE scores for MBA applications?" icon="check">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Yes! Over 1,300 business schools worldwide accept GRE scores for MBA admissions. The GRE is especially popular for dual-degree programs (MBA + JD, MBA + MPP) since it's accepted by multiple graduate programs.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What is GMAT Data Sufficiency?" icon="target">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Data Sufficiency is a unique GMAT question type that represents 50% of the Quantitative section. Instead of solving for a value, you determine whether given information is sufficient to answer a question. It tests logical reasoning rather than pure calculation skills.
                </p>
              </ExpandableSection>

              <ExpandableSection title="How long should I study for GRE vs GMAT?" icon="book">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Most students need 2-4 months of preparation for either test. GRE requires significant vocabulary building (1,000+ words), while GMAT requires mastering data sufficiency and critical reasoning. Both require consistent practice with full-length tests.
                </p>
              </ExpandableSection>

              <ExpandableSection title="Can I switch from GRE to GMAT (or vice versa)?" icon="refresh">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Yes! Many students take diagnostic tests for both and choose the test where they score higher. You can retake the GRE every 21 days and the GMAT every 16 days, giving you flexibility to switch if needed.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What is a good GRE score for top MBA programs?" icon="chart">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For top 10 MBA programs, aim for a GRE score of 325+ (about 95th percentile), with Quant 165+ and Verbal 160+. For top 25 programs, 320+ is competitive. Check your target school's class profile for specific data.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What is a good GMAT score for top MBA programs?" icon="graduation">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For top 10 MBA programs, aim for a GMAT score of 720+ (about 94th percentile). Stanford GSB and Harvard's median GMAT scores are around 730-740. For top 25 programs, 700+ is competitive.
                </p>
              </ExpandableSection>
            </div>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
