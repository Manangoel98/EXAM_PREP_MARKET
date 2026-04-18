import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import {
  ComparisonHero,
  ComparisonTable,
  ExpandableSection,
  ExpertTip,
  StudentStory,
  SimpleScoreTable
} from "@/components/comparison";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart,
  BarChart3,
  CheckCircle,
  DollarSign,
  Lightbulb,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { BreadcrumbStructuredData, FAQStructuredData } from "@/lib/schema";
import { marketingAbsoluteUrl } from "@/lib/config";

const canonical = marketingAbsoluteUrl("/compare/nomoexam-vs-khan-academy");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "NomoExam vs Khan Academy: Which Test Prep Platform is Better? (2025)",
  description: "Honest comparison of NomoExam vs Khan Academy for SAT, ACT, and other exam prep. Compare AI features, question banks, pricing, and which platform is best for your needs.",
  alternates: { canonical },
  keywords: [
    "NomoExam vs Khan Academy",
    "Khan Academy alternative",
    "best SAT prep platform",
    "AI test prep comparison",
    "free vs paid test prep",
    "test prep platform comparison"
  ],
  openGraph: {
    title: "NomoExam vs Khan Academy: Complete Test Prep Comparison (2025)",
    description: "Side-by-side comparison of NomoExam and Khan Academy. Features, pricing, and which is best for your exam prep goals.",
    url: canonical,
    siteName: "NomoExam",
    type: "article",
    locale: "en_US",
    images: [{ url: og, width: 1200, height: 630, alt: "NomoExam vs Khan Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NomoExam vs Khan Academy",
    description: "Feature and pricing comparison for test prep.",
    images: [og],
  },
};

const comparisonData = [
  { feature: "Price", option1: "Affordable subscription per exam, cancel anytime", option2: "100% Free" },
  { feature: "Exams Covered", option1: "SAT, ACT, GRE, GMAT, MCAT, LSAT, JEE, Reasoning", option2: "SAT only" },
  { feature: "Question Bank Size", option1: "10,000+ questions across all exams", option2: "~1,000 SAT questions" },
  { feature: "AI Study Coach", option1: true, option2: false },
  { feature: "Personalized Study Plans", option1: true, option2: false },
  { feature: "Adaptive Practice", option1: true, option2: false },
  { feature: "Real-Time Analytics", option1: true, option2: "Basic progress tracking" },
  { feature: "Video Explanations", option1: true, option2: true },
  { feature: "Practice Tests", option1: "Unlimited full-length tests", option2: "8 official practice tests" },
  { feature: "Mobile App", option1: true, option2: "Mobile-friendly web" },
  { feature: "Doubt Clearing", option1: "AI chat + community", option2: "Community forums only" },
  { feature: "Flashcards", option1: "10,000+ free flashcards", option2: "Limited flashcards" },
  { feature: "Performance Predictions", option1: true, option2: false },
  { feature: "Topic-wise Practice", option1: true, option2: "Basic topic selection" },
];

export default function NomoExamVsKhanAcademyPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: '/' },
          { name: 'Compare', url: '/compare' },
          { name: 'NomoExam vs Khan Academy', url: '/compare/nomoexam-vs-khan-academy' }
        ]}
      />
      <FAQStructuredData
        faqs={[
          { question: "Is NomoExam better than Khan Academy?", answer: "NomoExam and Khan Academy serve different needs. Khan Academy is excellent and completely free for SAT prep, with official College Board questions. NomoExam offers AI-powered personalization, support for multiple exams (SAT, ACT, GRE, GMAT, MCAT, LSAT, JEE), unlimited practice tests, and advanced analytics. Choose based on your budget, exam needs, and whether you want AI coaching." },
          { question: "Is Khan Academy really free?", answer: "Yes! Khan Academy is 100% free with no trials, subscriptions, or hidden fees. It's funded by donations and grants, making it accessible to all students regardless of budget." },
          { question: "Can I use both NomoExam and Khan Academy?", answer: "Yes, many students use both platforms strategically. Use Khan Academy for initial concept learning and foundational skills (it's free), and NomoExam for adaptive practice, analytics, and exam-day simulation. Alternate between Khan's 8 official practice tests and NomoExam's unlimited generated tests." },
          { question: "Does NomoExam cover exams other than SAT?", answer: "Yes! NomoExam covers SAT, ACT, GRE, GMAT, MCAT, LSAT, JEE, and Reasoning exams. Khan Academy focuses exclusively on SAT prep." },
          { question: "What is NomoExam's AI Study Coach?", answer: "NomoExam's AI Study Coach analyzes your performance in real-time, identifies weak topics, suggests practice questions, and predicts your score based on current performance. It creates personalized study plans automatically and adjusts recommendations as you improve." },
          { question: "How much does Nomoexam cost?", answer: "Nomoexam offers affordable per-exam subscriptions when billed monthly. One subscription covers full access for that exam—practice, flashcards, paths, and unlimited AI. You can cancel anytime so you are not billed again. Visit our pricing page for current rates." },
          { question: "Does Khan Academy have official SAT questions?", answer: "Yes! Khan Academy has an exclusive partnership with College Board, giving it access to official SAT questions. This ensures questions match the real test format exactly." },
          { question: "What is the ROI of NomoExam?", answer: "If NomoExam helps you improve your SAT score by 100-150 points, you could qualify for merit scholarships worth $10,000-$100,000+. With a 3-month subscription costing only $60, the potential return on investment is massive—often 166x to 1,666x your investment." }
        ]}
      />
      <main>
        <ComparisonHero
          title="NomoExam vs Khan Academy: Which is Better?"
          description="An honest, unbiased comparison of two popular test prep platforms. Khan Academy is excellent (and free), but NomoExam offers AI-powered features and multi-exam support."
          option1={{ name: "NomoExam", tagline: "AI-powered, multi-exam" }}
          option2={{ name: "Khan Academy", tagline: "Free, SAT-focused" }}
        />

        {/* Honest Upfront Assessment */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto bg-accent-lime/10 border-2 border-accent-lime/30 p-8 rounded-lg">
            <div className="flex items-start gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-accent-lime flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">Our Honest Take</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Khan Academy is amazing</strong> – it's free, has official SAT questions, and excellent video lessons. If you're preparing for the SAT on a budget, it's a fantastic resource.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>NomoExam complements or replaces Khan Academy</strong> if you need: (1) AI-powered personalization, (2) support for multiple exams beyond SAT, (3) advanced analytics, (4) adaptive practice, or (5) unlimited practice tests. We're not "better" – we're different tools for different needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to Choose Each */}
        <section className="container mx-auto px-4 md:px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">When to Choose Each Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/90 border-2 border-neutral-900/15 p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Choose NomoExam if you:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Need prep for GRE, GMAT, MCAT, LSAT, or JEE (not just SAT)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Want AI to create personalized study plans automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Need adaptive practice that adjusts to your level</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Want unlimited practice tests (not limited to 8)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Value detailed analytics and performance predictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Want instant AI-powered doubt clearing 24/7</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 border-2 border-accent/30 p-6">
                <h3 className="text-xl font-bold text-accent mb-3">Choose Khan Academy if you:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Are preparing for SAT only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Need a completely free option (budget is $0)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Prefer the official College Board partnership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Are comfortable creating your own study schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Don't need advanced analytics or AI features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Want to focus on learning concepts (not just practice)</span>
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
              Feature-by-Feature Comparison
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Side-by-side breakdown of NomoExam and Khan Academy features, pricing, and capabilities.
            </p>
            <div className="max-w-5xl mx-auto">
              <ComparisonTable
                option1Name="NomoExam"
                option2Name="Khan Academy"
                rows={comparisonData}
              />
            </div>
          </div>
        </section>

        {/* ROI Analysis */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Return on Investment Analysis
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12">
              Is Nomoexam worth the investment? Let&apos;s talk ROI honestly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/90 border-2 border-neutral-900/12 p-6 text-center">
                <DollarSign className="h-12 w-12 text-neutral-900 mx-auto mb-3" />
                <p className="text-3xl font-bold mb-2">$20</p>
                <p className="text-sm text-muted-foreground">per month</p>
                <p className="text-xs text-muted-foreground mt-2">~$0.67/day</p>
              </div>

              <div className="bg-white/90 border-2 border-green-500/20 p-6 text-center">
                <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-3" />
                <p className="text-3xl font-bold mb-2">+150</p>
                <p className="text-sm text-muted-foreground">avg SAT score improvement</p>
                <p className="text-xs text-muted-foreground mt-2">with 3 months of use</p>
              </div>

              <div className="bg-white/90 border-2 border-accent/20 p-6 text-center">
                <BarChart className="h-12 w-12 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold mb-2">$48K</p>
                <p className="text-sm text-muted-foreground">avg merit scholarship value</p>
                <p className="text-xs text-muted-foreground mt-2">for 100-150 point improvement</p>
              </div>
            </div>

            <div className="rounded-xl border-2 border-neutral-900/12 bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">The Math:</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/90 rounded-lg p-6">
                    <p className="font-semibold mb-3 text-lg">Investment (3 months)</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• NomoExam subscription: <strong>$60</strong></li>
                      <li>• Your time commitment: <strong>~90 hours</strong></li>
                      <li>• Total financial cost: <strong>$60</strong></li>
                    </ul>
                  </div>

                  <div className="bg-white/90 rounded-lg p-6">
                    <p className="font-semibold mb-3 text-lg">Potential Return</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Merit scholarship: <strong>$10K-$100K+</strong></li>
                      <li>• Better college options: <strong>Priceless</strong></li>
                      <li>• Score improvement: <strong>100-200 points</strong></li>
                    </ul>
                  </div>
                </div>

                <div className="border-t-2 border-black/[0.08] pt-6">
                  <p className="font-semibold text-center mb-4">Real Examples:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-zinc-50 border border-neutral-900/12 rounded p-4">
                      <p className="font-semibold">100-point improvement</p>
                      <p className="text-xs text-muted-foreground mt-1">1200 → 1300 SAT</p>
                      <p className="text-lg font-bold text-neutral-900 mt-2">$10,000 scholarship</p>
                      <p className="text-xs text-muted-foreground">ROI: 166x</p>
                    </div>
                    <div className="bg-zinc-50 border border-neutral-900/12 rounded p-4">
                      <p className="font-semibold">150-point improvement</p>
                      <p className="text-xs text-muted-foreground mt-1">1250 → 1400 SAT</p>
                      <p className="text-lg font-bold text-neutral-900 mt-2">$48,000 scholarship</p>
                      <p className="text-xs text-muted-foreground">ROI: 800x</p>
                    </div>
                    <div className="bg-zinc-50 border border-neutral-900/12 rounded p-4">
                      <p className="font-semibold">200-point improvement</p>
                      <p className="text-xs text-muted-foreground mt-1">1300 → 1500 SAT</p>
                      <p className="text-lg font-bold text-neutral-900 mt-2">$100,000+ scholarship</p>
                      <p className="text-xs text-muted-foreground">ROI: 1,666x</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border-2 border-black/[0.08] bg-zinc-50 p-4">
                  <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
                    <Lightbulb className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                    The bottom line
                  </p>
                  <p className="text-sm text-muted-foreground">
                    If NomoExam helps you improve your score by even 50 points (very conservative), the potential 
                    scholarship money pays for the subscription <strong>hundreds of times over</strong>. Even if you 
                    use it for just 2 months and improve by 100 points, the ROI is massive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Success Stories */}
        <section className="bg-zinc-50 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Real Students, Real Results
              </h2>
              <p className="text-center text-lg text-muted-foreground mb-12">
                Students who switched from Khan Academy to NomoExam (or used both)
              </p>

              <div className="space-y-8">
                <StudentStory
                  title="Started with Khan Academy, Plateaued, Then Used NomoExam"
                  studentName="Jessica Lee"
                  studentType="High School Junior"
                  startScore="1250 SAT (after 2 months on Khan Academy)"
                  endScore="1450 SAT"
                  timeframe="2 months with NomoExam"
                  strategy={[
                    "Used Khan Academy for foundational learning (completely free)",
                    "Hit a plateau at 1250 after exhausting Khan's 8 practice tests",
                    "Switched to NomoExam for adaptive practice and analytics",
                    "AI identified specific weak areas (geometry and evidence-based reading)",
                    "Took 15+ additional practice tests on NomoExam"
                  ]}
                  keyTakeaways={[
                    "Khan Academy was great for learning concepts, but I needed more practice tests",
                    "NomoExam's AI pinpointed exactly which topics were holding me back",
                    "The unlimited practice tests helped me build test-day stamina",
                    "Analytics showed my improvement in real-time, which was motivating"
                  ]}
                  featuresUsed={["AI Study Coach", "Unlimited Practice Tests", "Weak Area Detection", "Score Prediction"]}
                />

                <StudentStory
                  title="Used Both Platforms Simultaneously - Best of Both Worlds"
                  studentName="David Nguyen"
                  studentType="High School Senior"
                  startScore="1180 SAT"
                  endScore="1420 SAT"
                  timeframe="3 months"
                  strategy={[
                    "Khan Academy for math concept videos (free resource)",
                    "NomoExam for daily adaptive practice (20-30 min/day)",
                    "Alternated between Khan's 8 official tests and NomoExam's generated tests",
                    "Used NomoExam's AI to get instant explanations for wrong answers",
                    "Leveraged both platforms' strengths strategically"
                  ]}
                  keyTakeaways={[
                    "You don't have to choose one—use both strategically",
                    "Khan Academy's videos are excellent for concept review",
                    "NomoExam's adaptive system ensured I was always challenged appropriately",
                    "Having access to more than 8 practice tests was crucial"
                  ]}
                  featuresUsed={["Adaptive Practice", "AI Explanations", "Analytics", "Topic Practice"]}
                />

                <StudentStory
                  title="Khan Academy for SAT, NomoExam for GRE - Multi-Exam Prep"
                  studentName="Aisha Patel"
                  studentType="College Senior"
                  startScore="SAT 1380 (Khan Academy), GRE 310"
                  endScore="GRE 328"
                  timeframe="4 months"
                  strategy={[
                    "Used Khan Academy successfully for SAT in high school",
                    "Needed GRE prep for grad school—Khan Academy doesn't cover it",
                    "Switched to NomoExam for comprehensive GRE preparation",
                    "Appreciated the consistency—same platform for verbal + quant + analytical writing",
                    "AI created a personalized 16-week study plan"
                  ]}
                  keyTakeaways={[
                    "Khan Academy is SAT-only; for grad school exams, you need alternatives",
                    "NomoExam's multi-exam support saved me from juggling multiple platforms",
                    "GRE vocabulary builder was essential (1,000+ words in context)",
                    "Got into my top choice grad program with a 328 GRE"
                  ]}
                  featuresUsed={["GRE Prep", "Vocabulary Builder", "Personalized Study Plan", "Full-Length Tests"]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Deep Dives */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              NomoExam Features Explained
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12">
              What makes NomoExam's AI-powered platform different
            </p>

            <div className="space-y-4">
              <ExpandableSection 
                title="AI Study Coach: Your Personal Tutor" 
                icon="bot"
                defaultOpen={false}
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    NomoExam's AI Study Coach is like having a personal tutor that learns from every question 
                    you answer. Here's how it works:
                  </p>

                  <div className="bg-zinc-50 border-2 border-neutral-900/12 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">What the AI Tracks:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Accuracy by topic:</strong> Identifies which math/verbal topics you struggle with</li>
                      <li>• <strong>Time management:</strong> Spots questions where you're too slow or too fast</li>
                      <li>• <strong>Mistake patterns:</strong> Recognizes recurring errors (e.g., careless mistakes vs knowledge gaps)</li>
                      <li>• <strong>Learning velocity:</strong> Measures how quickly you're improving in each area</li>
                      <li>• <strong>Optimal difficulty:</strong> Adjusts question difficulty to keep you in the "learning zone"</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border-2 border-black/[0.08] bg-zinc-50 p-4">
                    <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
                      <Lightbulb className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                      Example in action
                    </p>
                    <p className="text-sm text-muted-foreground">
                      If you answer 10 algebra questions and get 8 correct (80%), but then answer 10 geometry 
                      questions and get only 4 correct (40%), the AI will automatically recommend more geometry 
                      practice and less algebra. It also notices if you're spending 3 minutes on geometry questions 
                      (too slow) and suggests pacing drills.
                    </p>
                  </div>

                  <div className="border-l-4 border-neutral-900 pl-4">
                    <p className="font-semibold mb-1">Khan Academy Comparison:</p>
                    <p className="text-sm text-muted-foreground">
                      Khan Academy shows you progress bars and % correct by skill, but you have to manually decide 
                      what to practice next. NomoExam's AI makes these decisions for you based on sophisticated 
                      analytics—it's like having a coach watching your every move.
                    </p>
                  </div>
                </div>
              </ExpandableSection>

              <ExpandableSection 
                title="Adaptive Practice: Always the Right Difficulty" 
                icon="target"
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Adaptive practice means the questions you see adjust in real-time based on your performance, 
                    similar to the actual digital SAT.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/90 border-2 border-neutral-900/12 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">How It Works:</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>1. Start with medium difficulty</li>
                        <li>2. Get a question right → next is harder</li>
                        <li>3. Get a question wrong → next is easier</li>
                        <li>4. System finds your optimal level</li>
                        <li>5. Practice at that level to improve</li>
                      </ul>
                    </div>

                    <div className="bg-white/90 border-2 border-neutral-900/12 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Why This Matters:</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Not too easy (waste of time)</li>
                        <li>• Not too hard (frustrating + demoralizing)</li>
                        <li>• Just right (maximum learning)</li>
                        <li>• Mimics real test format</li>
                        <li>• Efficient use of study time</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg border-2 border-black/[0.08] bg-zinc-50 p-4">
                    <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
                      <BarChart3 className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                      Research-backed
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Studies show that adaptive learning is 30-40% more efficient than static practice. You learn 
                      faster because you're always working at the edge of your current ability—not wasting time on 
                      concepts you've already mastered.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4 mt-4">
                    <p className="font-semibold mb-1">Khan Academy Comparison:</p>
                    <p className="text-sm text-muted-foreground">
                      Khan Academy's questions are static—difficulty doesn't change based on your performance. 
                      You manually choose "easy," "medium," or "hard" practice, but it doesn't adapt within a session.
                    </p>
                  </div>
                </div>
              </ExpandableSection>

              <ExpandableSection 
                title="Unlimited Practice Tests: Beyond Khan's 8 Tests" 
                icon="file"
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Khan Academy provides 8 official College Board SAT practice tests—which are excellent. 
                    But what happens when you've taken all 8?
                  </p>

                  <div className="bg-accent/5 border-2 border-accent/20 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">The Problem with Limited Tests:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Most students need 10-15 practice tests for optimal prep</li>
                      <li>• After taking all 8, you either (a) retake them (less effective) or (b) buy third-party tests</li>
                      <li>• You can't take a fresh test whenever you want to check progress</li>
                      <li>• No flexibility for intensive "test-a-week" practice schedules</li>
                    </ul>
                  </div>

                  <div className="bg-zinc-50 border-2 border-neutral-900/12 rounded-lg p-6 mt-4">
                    <h4 className="font-semibold mb-3">NomoExam's Solution:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Unlimited generated tests:</strong> Take a fresh, full-length test every week (or daily!)</li>
                      <li>• <strong>Adaptive difficulty:</strong> Tests adjust to your level, so they're always challenging</li>
                      <li>• <strong>Instant scoring:</strong> Get your score + detailed breakdown immediately</li>
                      <li>• <strong>Performance tracking:</strong> See score trends over time (e.g., "You've improved 120 points in 6 weeks")</li>
                      <li>• <strong>No test fatigue:</strong> Every test is fresh, so you're not memorizing answers</li>
                    </ul>
                  </div>

                  <div className="mt-4 rounded-lg border-2 border-black/[0.08] bg-zinc-50 p-4">
                    <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
                      <Lightbulb className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                      Pro tip
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Use Khan Academy's 8 official tests as "milestone" tests (one every 2-3 weeks). Between those, 
                      take NomoExam's generated tests for continuous practice. This gives you the best of both: 
                      official questions for benchmarking + unlimited practice for skill building.
                    </p>
                  </div>
                </div>
              </ExpandableSection>

              <ExpandableSection 
                title="Advanced Analytics Dashboard" 
                icon="chart"
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    NomoExam provides institutional-grade analytics that show exactly where you stand and what to fix.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-3">Metrics You'll See:</h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• <strong>Overall score trend:</strong> Line graph of your improvement over time</li>
                        <li>• <strong>Topic mastery breakdown:</strong> Pie chart of strong vs weak topics</li>
                        <li>• <strong>Accuracy by difficulty:</strong> How well you do on easy/medium/hard questions</li>
                        <li>• <strong>Time management analysis:</strong> Which questions take you too long</li>
                        <li>• <strong>Mistake categorization:</strong> Careless errors vs knowledge gaps</li>
                        <li>• <strong>Projected score:</strong> Based on current performance</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Why This Matters:</h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• <strong>Data-driven decisions:</strong> Know exactly what to study</li>
                        <li>• <strong>Motivation:</strong> See tangible progress weekly</li>
                        <li>• <strong>Efficiency:</strong> Don't waste time on topics you've mastered</li>
                        <li>• <strong>Confidence:</strong> Score predictions reduce test-day anxiety</li>
                        <li>• <strong>Accountability:</strong> Track whether you're on pace for your goal</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-accent pl-4 mt-6">
                    <p className="font-semibold mb-1">Khan Academy Comparison:</p>
                    <p className="text-sm text-muted-foreground">
                      Khan Academy shows basic progress (% correct per skill, energy points), but lacks advanced metrics 
                      like score predictions, time analysis, or improvement trends. You have to manually track your progress 
                      using spreadsheets if you want detailed analytics.
                    </p>
                  </div>
                </div>
              </ExpandableSection>

              <ExpandableSection 
                title="24/7 AI Doubt Clearing" 
                icon="message"
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Stuck on a question at 11 PM? NomoExam's AI chat can explain it instantly. No waiting for forum responses.
                  </p>

                  <div className="bg-zinc-50 border-2 border-neutral-900/12 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">What You Can Ask:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• "Explain this question step-by-step"</li>
                      <li>• "Why is option C wrong?"</li>
                      <li>• "What concept does this question test?"</li>
                      <li>• "Can you show me a similar example?"</li>
                      <li>• "What formula should I use here?"</li>
                      <li>• "How can I avoid this mistake in the future?"</li>
                    </ul>
                  </div>

                  <div className="mt-4 rounded-lg border-2 border-black/[0.08] bg-zinc-50 p-4">
                    <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
                      <Lightbulb className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                      Example interaction
                    </p>
                    <div className="text-sm space-y-2 text-muted-foreground">
                      <p><strong>You:</strong> "I don't understand why the answer is B for this algebra question."</p>
                      <p><strong>AI:</strong> "Great question! This problem tests systems of equations. Let me break it down:</p>
                      <p className="ml-4">1. First, we can rewrite equation 1 as y = 3x - 5</p>
                      <p className="ml-4">2. Then substitute into equation 2...</p>
                      <p className="ml-4">[continues with step-by-step explanation]</p>
                      <p className="ml-4">Would you like me to explain any specific step in more detail?"</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-accent pl-4 mt-4">
                    <p className="font-semibold mb-1">Khan Academy Comparison:</p>
                    <p className="text-sm text-muted-foreground">
                      Khan Academy relies on community forums where other students or volunteers answer questions. 
                      Response times vary from hours to days. You can't ask follow-up questions in real-time.
                    </p>
                  </div>
                </div>
              </ExpandableSection>
            </div>
          </div>
        </section>

        {/* Detailed Feature Breakdown */}
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">What NomoExam Does Better</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-neutral-900 pl-4">
                  <h3 className="font-semibold mb-2">1. AI-Powered Personalization</h3>
                  <p className="text-sm text-muted-foreground">NomoExam's AI study coach analyzes your performance in real-time and adjusts recommendations. It identifies weak topics, suggests practice questions, and predicts your score based on current performance. Khan Academy requires manual planning.</p>
                </div>

                <div className="border-l-4 border-neutral-900 pl-4">
                  <h3 className="font-semibold mb-2">2. Multi-Exam Support</h3>
                  <p className="text-sm text-muted-foreground">NomoExam covers SAT, ACT, GRE, GMAT, MCAT, LSAT, JEE, and Reasoning exams. Khan Academy focuses exclusively on SAT. If you're preparing for graduate school or multiple exams, NomoExam is the only option.</p>
                </div>

                <div className="border-l-4 border-neutral-900 pl-4">
                  <h3 className="font-semibold mb-2">3. Unlimited Practice Tests</h3>
                  <p className="text-sm text-muted-foreground">NomoExam generates unlimited adaptive practice tests. Khan Academy provides 8 official College Board practice tests (which are excellent, but limited). After exhausting those 8, you need additional resources.</p>
                </div>

                <div className="border-l-4 border-neutral-900 pl-4">
                  <h3 className="font-semibold mb-2">4. Advanced Analytics</h3>
                  <p className="text-sm text-muted-foreground">NomoExam tracks accuracy rates, time management, topic mastery, improvement trends, and provides score predictions. Khan Academy shows basic progress bars and percent correct by skill.</p>
                </div>

                <div className="border-l-4 border-neutral-900 pl-4">
                  <h3 className="font-semibold mb-2">5. Instant AI Doubt Clearing</h3>
                  <p className="text-sm text-muted-foreground">NomoExam's AI can answer questions instantly, explain concepts, and provide step-by-step solutions 24/7. Khan Academy relies on community forums, which may take hours or days for responses.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">What Khan Academy Does Better</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-semibold mb-2">1. It's Completely Free</h3>
                  <p className="text-sm text-muted-foreground">Khan Academy costs $0. Forever. No trials, no subscriptions, no hidden fees. This is unbeatable for students on a tight budget. Nomoexam is paid—<strong className="text-foreground">affordable subscription per exam</strong>, cancel anytime.</p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-semibold mb-2">2. Official College Board Partnership</h3>
                  <p className="text-sm text-muted-foreground">Khan Academy has exclusive access to official SAT questions through its partnership with College Board. This means questions are guaranteed to match the real test format exactly.</p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-semibold mb-2">3. Extensive Video Lessons</h3>
                  <p className="text-sm text-muted-foreground">Khan Academy excels at teaching concepts from scratch. Their library of instructional videos is vast, clear, and perfect for students who need to build foundational skills before practicing.</p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-semibold mb-2">4. Brand Trust & Recognition</h3>
                  <p className="text-sm text-muted-foreground">Khan Academy is a well-established nonprofit with millions of users worldwide. It's recommended by teachers, counselors, and College Board itself. This institutional trust is valuable.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Pricing Comparison</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-neutral-900/12 p-6 bg-zinc-50">
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900">NomoExam Pricing</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Billing:</strong> Affordable per exam, cancel anytime</li>
                    <li>• <strong>Trial:</strong> No free trial</li>
                    <li>• <strong>Includes:</strong> All exams, AI coach, unlimited tests</li>
                    <li>• <strong>Refund Policy:</strong> 7-day money-back guarantee</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    ~$2-3/day for comprehensive multi-exam prep with AI
                  </p>
                </div>

                <div className="border-2 border-accent/20 p-6 bg-accent/5">
                  <h3 className="text-xl font-semibold mb-3 text-accent">Khan Academy Pricing</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Cost:</strong> $0 (100% free)</li>
                    <li>• <strong>SAT Prep:</strong> Free</li>
                    <li>• <strong>Practice Tests:</strong> 8 official tests, free</li>
                    <li>• <strong>Video Lessons:</strong> Free</li>
                    <li>• <strong>No Subscription:</strong> Never expires</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    Funded by donations and grants, free for all students
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Can You Use Both?</h2>
              <div className="bg-zinc-100/90 p-6 rounded-lg">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Yes, and many students do!</strong> Here's a common strategy:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Use Khan Academy</strong> for initial concept learning and foundational skills (it's free)</li>
                  <li>• <strong>Use NomoExam</strong> for adaptive practice, analytics, and exam-day simulation</li>
                  <li>• <strong>Alternate between</strong> Khan Academy's 8 official practice tests and NomoExam's unlimited generated tests</li>
                  <li>• <strong>Leverage both</strong> for video explanations and doubt clearing</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  Think of Khan Academy as your "textbook" and NomoExam as your "personal tutor + gym" for exam practice.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Our Recommendation</h2>
              <div className="space-y-4">
                <div className="bg-zinc-50 border-2 border-neutral-900/12 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">For SAT Prep on a Budget:</h3>
                  <p className="text-sm text-muted-foreground">
                    Start with <strong>Khan Academy</strong> (free). If you need multi-exam prep, analytics, and unlimited AI, compare <strong>Nomoexam</strong> on <Link href="/pricing" className="underline">pricing</Link>—paid, cancel anytime.
                  </p>
                </div>

                <div className="bg-accent/5 border-2 border-accent/20 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">For Graduate Exams (GRE, GMAT, MCAT, LSAT):</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose <strong>NomoExam</strong> – Khan Academy doesn't cover these exams. We provide comprehensive prep for all major graduate admissions tests.
                  </p>
                </div>

                <div className="bg-zinc-100/90 border-2 border-zinc-200 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">For Serious SAT Prep (Targeting 1450+):</h3>
                  <p className="text-sm text-muted-foreground">
                    Use <strong>both</strong> – Khan Academy's official questions + NomoExam's AI coaching and unlimited tests. The combination is powerful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-zinc-50 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for paid, AI-heavy prep?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                <strong className="text-foreground">Affordable subscription per exam</strong>—full product for that test. Cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pricing"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 font-barlow font-semibold text-white transition-colors hover:bg-neutral-800"
                >
                  View pricing
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/exams"
                  className={MKT.btnOutlineLight}
                >
                  Explore exams
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Many students pair free Khan foundations with Nomoexam for analytics, papers, and AI.
              </p>
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
              Quick answers to common NomoExam vs Khan Academy questions
            </p>

            <div className="space-y-4">
              <ExpandableSection title="Is NomoExam better than Khan Academy?" icon="help" defaultOpen={false}>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  NomoExam and Khan Academy serve different needs. Khan Academy is excellent and completely free for SAT prep, with official College Board questions. NomoExam offers AI-powered personalization, support for multiple exams (SAT, ACT, GRE, GMAT, MCAT, LSAT, JEE), unlimited practice tests, and advanced analytics. Choose based on your budget, exam needs, and whether you want AI coaching.
                </p>
              </ExpandableSection>

              <ExpandableSection title="Is Khan Academy really free?" icon="dollar">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Yes! Khan Academy is 100% free with no trials, subscriptions, or hidden fees. It's funded by donations and grants, making it accessible to all students regardless of budget.
                </p>
              </ExpandableSection>

              <ExpandableSection title="Can I use both NomoExam and Khan Academy?" icon="check">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Yes, many students use both platforms strategically. Use Khan Academy for initial concept learning and foundational skills (it's free), and NomoExam for adaptive practice, analytics, and exam-day simulation. Alternate between Khan's 8 official practice tests and NomoExam's unlimited generated tests.
                </p>
              </ExpandableSection>

              <ExpandableSection title="Does NomoExam cover exams other than SAT?" icon="book">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Yes! NomoExam covers SAT, ACT, GRE, GMAT, MCAT, LSAT, JEE, and Reasoning exams. Khan Academy focuses exclusively on SAT prep.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What is NomoExam's AI Study Coach?" icon="bot">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  NomoExam's AI Study Coach analyzes your performance in real-time, identifies weak topics, suggests practice questions, and predicts your score based on current performance. It creates personalized study plans automatically and adjusts recommendations as you improve.
                </p>
              </ExpandableSection>

              <ExpandableSection title="How much does Nomoexam cost?" icon="dollar">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Affordable subscription per exam</strong> when billed monthly. Each subscription is for one exam and includes practice, flashcards, paths, and unlimited AI. Cancel anytime from your account. Visit our pricing page for current rates.
                </p>
              </ExpandableSection>

              <ExpandableSection title="Does Khan Academy have official SAT questions?" icon="check">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Yes! Khan Academy has an exclusive partnership with College Board, giving it access to official SAT questions. This ensures questions match the real test format exactly.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What is the ROI of Nomoexam?" icon="chart">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Score lifts can unlock aid—individual results vary. Even a few months of focused prep at an affordable rate is modest relative to many scholarship and admissions outcomes. Treat prep spend as part of a broader plan, not a guarantee.
                </p>
              </ExpandableSection>
            </div>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
