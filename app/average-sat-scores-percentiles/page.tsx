import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import Link from "next/link";
import { marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, ArticleStructuredData, FAQStructuredData } from "@/lib/schema";
import { TrendingUp, Target, AlertTriangle, CheckCircle2, BookOpen } from "lucide-react";

const canonical = marketingAbsoluteUrl("/average-sat-scores-percentiles");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "What Are Average Scores for SAT? Percentiles & Targets | NomoExam",
  description: "Learn the average SAT score (1029 for Class of 2025), SAT percentiles, and how to set your target score based on your college list. Includes score ranges for top universities.",
  alternates: { canonical },
  keywords: [
    "average SAT score",
    "SAT percentiles",
    "SAT score ranges",
    "average SAT scores by section",
    "SAT target score",
    "good SAT score",
    "SAT score percentile",
    "Class of 2025 SAT average",
    "SAT middle 50%",
  ],
  openGraph: {
    title: "What Are Average Scores for SAT? Percentiles & Targets",
    description: "Official average SAT scores, percentile rankings, and how to set your target based on your colleges.",
    url: canonical,
    siteName: "NomoExam",
    type: "article",
    images: [{ url: og, width: 1200, height: 630, alt: "SAT Average Scores and Percentiles" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Are Average Scores for SAT? Percentiles & Targets",
    description: "Official SAT averages, percentiles, and college-specific score targets.",
    images: [og],
  },
};

const faqs = [
  {
    question: "Is 1029 a good SAT score?",
    answer: "It's exactly average. Whether it's 'good' depends on your target schools. At a regional public university, sure. At a top-50 national university, you'd want 1300+.",
  },
  {
    question: "Is 900 a good SAT score?",
    answer: "It's around the 25th percentile. Below average, but it won't disqualify you everywhere, especially at test-optional schools or less selective programs. With focused prep, most students can push well past this.",
  },
  {
    question: "What's a top 1% SAT score?",
    answer: "Roughly 1500-1520 and above. Scores in the 1550+ range put you in the top fraction of a percent.",
  },
  {
    question: "Why is the national average lower than scores at good colleges?",
    answer: "Two reasons. The scale starts at 400, so low scores pull the mean down hard, and the test-taking pool includes many students applying only to open-enrollment colleges. Selective schools admit far above the average, which is why their middle 50% ranges start around 1300 or higher.",
  },
  {
    question: "Should I retake a 1030?",
    answer: "If the middle 50% at your target schools starts above 1100, yes. Give it six to eight weeks of focused prep first; retaking with no new preparation rarely moves the number much. Many colleges also superscore, meaning they combine your best section scores across attempts, so a second sitting is almost pure upside if you prep properly.",
  },
  {
    question: "Do colleges see the national average?",
    answer: "No. They compare your score to their own admitted class, not to the country. That's why middle 50% ranges are the number that actually matters.",
  },
];

export default function AverageSATScoresPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "Average SAT Scores & Percentiles", url: canonical },
        ]}
      />
      <ArticleStructuredData
        title="What Are Average Scores for SAT? Percentiles & Targets"
        description="Official average SAT scores, percentile rankings, and college-specific score targets for 2026."
        datePublished="2026-09-07"
        dateModified="2026-09-07"
      />
      <FAQStructuredData faqs={faqs} />

      <main>
        <article className={`${MKT.pageSection} pb-20 pt-28 md:pb-32 md:pt-36`}>
          <div className={`${MKT.container} mx-auto max-w-4xl`}>
            <div className="mb-8">
              <div className={`${MKT.badgeLight} mb-4`}>
                <TrendingUp className="h-4 w-4" />
                <span>SAT Scoring Guide</span>
              </div>
              <h1 className={`${MKT.h1OnLight} mb-4`}>What Are Average Scores for SAT? Percentiles & Targets</h1>
              <p className="text-base font-medium text-neutral-600 md:text-lg">
                Last updated: September 7, 2026 • 10 min read
              </p>
            </div>

            <div className="prose prose-neutral prose-lg max-w-none">
              <p className="lead text-lg font-medium leading-relaxed text-neutral-700">
                The average SAT score is 1029 out of 1600. That's the official mean for the Class of 2025, straight from College Board's annual report, based on roughly 2.0 million test-takers. Students averaged 521 in Reading and Writing and 508 in Math.
              </p>

              <p>
                If you've been googling "what are average scores for the SAT," you've probably noticed the number shifts a little depending on the site. Some say 1024, some quote 1050. Here's the straight version: 1029 is the official figure, and anything meaningfully higher usually comes from secondary summaries rather than College Board's own data.
              </p>

              <p>
                So if you scored above 1029, you did better than the typical SAT taker. Below it? You're in the same boat as a lot of smart people, because the average is dragged down by a wide spread of scores, and colleges don't actually care about the national average. They care about how you compare to their admitted students.
              </p>

              <p>
                Let's get into the numbers, then figure out what score you should actually be aiming for.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                What Are Average Scores for SAT by Section? (Class of 2025)
              </h2>

              <p>
                College Board's most recent annual report gives us these figures, and they form the backbone of any solid "what are average scores for SAT" answer for 2025:
              </p>

              <div className="not-prose my-8 overflow-x-auto rounded-lg border border-neutral-200">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200 bg-neutral-50">
                      <th className="px-6 py-3 text-left text-sm font-bold text-neutral-900">Section</th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-neutral-900">Average Score (2025)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200">
                      <td className="px-6 py-3 text-sm font-medium text-neutral-700">Evidence-Based Reading and Writing (ERW)</td>
                      <td className="px-6 py-3 text-sm font-medium text-neutral-700">521</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="px-6 py-3 text-sm font-medium text-neutral-700">Math</td>
                      <td className="px-6 py-3 text-sm font-medium text-neutral-700">508</td>
                    </tr>
                    <tr className="bg-primary/5">
                      <td className="px-6 py-3 text-sm font-bold text-neutral-900">Total</td>
                      <td className="px-6 py-3 text-sm font-bold text-neutral-900">1029</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                A couple of things worth pulling out of that report. The single most common score band was 1000 to 1190, which contained 554,819 test-takers. In other words, more than a quarter of everyone who took the SAT landed in that one band. If you're sitting at 1100, you're not unusual. You're the median American SAT taker, give or take.
              </p>

              <p>
                You'll also see some 2026 prep sites quote "typical" scores around 1050 or 1060. Those come from secondary summaries, not the official data. Stick with College Board's 1029 if you want the real benchmark. (The same is true of the 1024 figure you might see floating around, which was the Class of 2024 average. The number moved up slightly year over year.)
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                SAT Percentiles: Where Your Score Actually Ranks
              </h2>

              <p>
                The average tells you about the middle of the distribution. Percentile tables answer a question the average can't: not "what are average scores for SAT" but "where do I personally stand?"
              </p>

              <p>
                Percentiles work like this: if your score is in the 75th percentile, you scored higher than 75% of test-takers. Here's the rough landscape based on College Board's percentile tables:
              </p>

              <div className="not-prose space-y-3">
                {[
                  { score: "1500 or above", percentile: "Top 1-2%", desc: "This is what people mean when they ask about a 'top 1%' SAT score." },
                  { score: "1350-1400", percentile: "Top 10%", desc: "Generally considered a genuinely strong score at the national level." },
                  { score: "1200-1300", percentile: "Top 25% to top 15%", desc: "Competitive at many solid state schools." },
                  { score: "1029", percentile: "50th percentile", desc: "Dead average." },
                  { score: "900", percentile: "Around 25th percentile", desc: "Below average nationally, but not disqualifying everywhere." },
                  { score: "800 or below", percentile: "Bottom quarter", desc: "" },
                ].map((item) => (
                  <div key={item.score} className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-barlow mb-1 text-base font-bold text-neutral-900">{item.score}</h4>
                        <p className="text-sm font-medium text-neutral-600">{item.percentile}</p>
                      </div>
                    </div>
                    {item.desc && <p className="mt-2 text-sm font-medium text-neutral-700">{item.desc}</p>}
                  </div>
                ))}
              </div>

              <p className="mt-6">
                One thing I'd tell any student staring at these numbers: the spread is enormous. Someone at 1500 isn't a bit better than someone at 1050. They're in a completely different league of applicants, at least as far as selective admissions go. That's why "is a 900 good?" has no national answer. It depends entirely on where you're applying.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Picking Your Target: The Middle 50% Rule
              </h2>

              <p>
                When students ask "what are average scores for SAT," there's usually a different question hiding underneath: "is my score good enough?" Here's the answer nobody puts in bold text: a good SAT score is one that's at or above the middle 50% of admitted students at the colleges you actually want to attend.
              </p>

              <p>
                Not the national average. Not your friend's score. Not some generic number a prep company invented.
              </p>

              <p>
                Most colleges publish their middle 50% range, meaning the 25th to 75th percentile scores of their admitted class. If a school's middle 50% is 1280-1450, then scoring 1300 puts you comfortably in range, while a 1150 makes admission an uphill fight (though not impossible, because admissions is holistic).
              </p>

              <p>
                A few reference points so you can calibrate:
              </p>

              <div className="not-prose space-y-3">
                {[
                  { school: "Ivy League and top-tier privates (Harvard, Princeton, Stanford, MIT)", range: "1490-1560", note: "You basically need a 1500+ to be on solid ground." },
                  { school: "Strong national universities (Michigan, Georgia Tech, UVA)", range: "~1350-1520", note: "Depends on the school and major." },
                  { school: "Solid state flagships (Arizona State, Ohio State, most regional publics)", range: "1100-1300", note: "" },
                  { school: "Open-enrollment and test-optional-friendly schools", range: "Varies", note: "Many accept students well below 1000, or don't require the SAT at all." },
                ].map((item) => (
                  <div key={item.school} className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                    <h4 className="font-barlow mb-1 text-base font-bold text-neutral-900">{item.school}</h4>
                    <p className="text-sm font-medium text-neutral-700">
                      <strong>Middle 50%:</strong> {item.range}
                    </p>
                    {item.note && <p className="mt-1 text-sm font-medium text-neutral-600">{item.note}</p>}
                  </div>
                ))}
              </div>

              <p className="mt-6">
                My honest opinion after watching a lot of students sweat this: chasing a round number like "1400" in the abstract is a waste of energy. Pick three to five real colleges, look up their published ranges, and build your target from there. A 1250 might be a fantastic score for one student and a problem for another, and both can be true at the same time.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Score-Optional Admissions: When to Withhold a Score
              </h2>

              <p>
                Hundreds of colleges remain test-optional in 2026, and the policy changes the calculus. It also changes how much the answer to "what are average scores for SAT" should matter to you personally. If your score lands below a school's middle 50%, you can apply without it and let your GPA, course rigor, and essays carry the application. At schools that admit a majority of applicants, that's often the smarter play.
              </p>

              <p>
                The blanket advice hides some exceptions, though. MIT reinstated its testing requirement in 2022, and Dartmouth, Yale, Harvard, and Brown have since restored it as well. Merit money is another wrinkle: several state flagships auto-award scholarships at fixed GPA and score thresholds, so a score you'd rather not show one school might pay tuition at another. Direct-admit programs in engineering and nursing frequently expect scores even at universities that are test-optional for everyone else. Check the policy at each school on your list for your specific application year, because these rules keep moving.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Below Average? Here's the Actual Comeback Plan
              </h2>

              <p>
                First: don't spiral. A sub-1000 score usually reflects one of three things: not enough practice, weak fundamentals in one section, or test-day execution problems. All three are fixable.
              </p>

              <p>
                Here's the approach I'd recommend:
              </p>

              <div className="not-prose space-y-4">
                {[
                  {
                    num: "1",
                    title: "Diagnose which section is dragging you down.",
                    desc: "If Math is 80+ points lower than Reading and Writing, that's your lowest-hanging fruit. Section scores move faster than people expect with targeted practice.",
                  },
                  {
                    num: "2",
                    title: "Take full-length practice tests under real conditions.",
                    desc: "Timed, no phone, one sitting. Score improvement comes from simulating the real thing and reviewing every miss.",
                  },
                  {
                    num: "3",
                    title: "Review mistakes properly.",
                    desc: "Not just reading the right answer. Figuring out why your answer was wrong and what pattern of thinking led you there.",
                  },
                  {
                    num: "4",
                    title: "Repeat.",
                    desc: "Most students who put in 6-8 weeks of focused prep see meaningful gains, often 100+ points total.",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4 rounded-lg border border-accent-lime/30 bg-accent-lime/10 p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-lime text-sm font-bold text-neutral-900">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-barlow mb-1 text-base font-bold text-neutral-900">{item.title}</h4>
                      <p className="text-sm font-medium text-neutral-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6">
                A realistic six-week version of that looks like two 45-minute weekday sessions on your weak section, one full practice test every second weekend, and 20 minutes of flashcard review on the days you don't feel like doing anything. Boring? Yes. Effective? Also yes.
              </p>

              <p>
                This is exactly the loop NomoExam is built around: full-length digital SAT practice tests, smart flashcards that drill your specific weak spots, and an <Link href="/ai-tutor-for-exam-prep" className="font-semibold text-primary hover:underline">AI tutor that explains every wrong answer on the spot</Link> instead of just flashing the correct letter. It costs $4.99/month per exam, a fraction of what a typical tutor or big prep course charges.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                How Scoring Actually Works on the Digital SAT
              </h2>

              <p>
                Quick primer, since the scoring confuses people:
              </p>

              <ul className="space-y-2">
                <li>
                  The SAT is scored on a <strong>400-1600 scale</strong>. Two sections, each worth 200-800: Reading and Writing, and Math.
                </li>
                <li>
                  There's no penalty for guessing. Always answer every question.
                </li>
                <li>
                  The digital SAT is <strong>adaptive</strong>: your performance on the first module of each section determines the difficulty of your second module. Harder second modules give you access to higher score ceilings.
                </li>
                <li>
                  You get section scores, plus subscores and cross-test scores that break down skills like "Command of Evidence" or "Problem Solving."
                </li>
                <li>
                  Scores typically come out about 2-3 weeks after test day.
                </li>
              </ul>

              <p>
                One common misconception: because the test is adaptive, missing early questions can matter more than missing later ones, since early misses can knock you into the easier module. Worth knowing when you're budgeting your time per question.
              </p>

              <p>
                None of that changes the headline number, but it does explain why answers to "what are average scores for SAT" occasionally differ by a few points between sources: the cohort changes every year.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Scores for a 14-Year-Old (or Any Younger Test-Taker)
              </h2>

              <p>
                Searching "what are average scores for SAT" gets a wrinkle when the test-taker is 14. If you're asking "what's a good SAT score for a 14-year-old?" you're probably thinking about talent searches, early SAT attempts, or programs like Duke TIP's successors. Here's the short version: the SAT is normed for 11th and 12th graders, so any score a 14-year-old earns gets compared against that older cohort.
              </p>

              <p>
                A 14-year-old scoring 1000-1100 is performing at or above the national average for high school juniors and seniors, which is genuinely impressive at that age. Programs for gifted younger students often look for scores in the 1100-1300 range depending on grade. If you're a younger student, don't panic about percentiles the way older students do. Scoring above 1029 already puts you ahead of the typical test-taker.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                SAT Score Questions Students Actually Ask
              </h2>

              <p>
                Most of these come up because people search "what are average scores for SAT," stop at the headline number, and never connect it to their own situation. The average is only half the story, so let's go deeper.
              </p>

              <div className="not-prose space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">{faq.question}</h3>
                    <p className="text-base font-medium leading-relaxed text-neutral-700">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">Your Next Step</h2>

              <p>
                You now know the answer to "what are average scores for SAT," where the percentiles sit, and the only number that genuinely matters: the middle 50% range at the schools on your list. Here's how to turn that into movement this week.
              </p>

              <p>
                Day one, pull up the middle 50% range for three colleges you're seriously considering and write the numbers down. Day two or three, sit for one full-length practice test under real conditions, timed, phone in another room, to find your baseline. The gap between those two numbers is your entire prep plan, and it's usually smaller and more fixable than the dread suggests.
              </p>

              <p>
                If you want a head start, <Link href="/" className="font-semibold text-primary hover:underline">NomoExam</Link> runs full digital SAT practice tests, then builds a personalized weekly plan from your misses, with the AI tutor explaining each error as you review. At $4.99/month per exam, it costs less than a single hour with most tutors. Either way, stop asking whether 1029 is "good" and start closing the distance to your number. That's the shift that actually moves admissions odds.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">Why You Can Trust This Data</h2>

              <p>
                Every average and percentile figure in this article comes from College Board's official annual report on the Class of 2025, which is the most current data available as of 2026. That matters if you're cross-checking answers to "what are average scores for SAT" across different sites. We've cross-checked against 2026 summaries from Magoosh, OntoCollege, Empowerly, and CollegeHelpGuide, which all land in the same 1028-1029 range. Where secondary sources diverge from official numbers, we've flagged it and stuck with the official data.
              </p>

              <div className="not-prose mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/exams/sat" className={`${MKT.btnPrimary} px-8 py-4 text-center text-base`}>
                  Start SAT Prep
                </Link>
                <Link href="/free-mock-test-app" className={`${MKT.btnOutlineLight} px-8 py-4 text-center text-base`}>
                  Try Free Practice Test
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </MarketingPageShell>
  );
}
