import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { RelatedContent, RELATED_CONTENT_GROUPS } from "@/components/landing/RelatedContent";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import Link from "next/link";
import { marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, ArticleStructuredData, FAQStructuredData } from "@/lib/schema";
import { Target } from "lucide-react";

const canonical = marketingAbsoluteUrl("/what-is-a-good-sat-score");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "What Is a Good SAT Score in 2026? | NomoExam",
  description:
    "A good SAT score is at or above the middle 50% at your colleges. See 2026 score bands, from under 1000 to 1500+, and how to set your target.",
  alternates: { canonical },
  keywords: [
    "what is a good SAT score",
    "good SAT score",
    "good SAT score 2026",
    "is 1200 a good SAT score",
    "is 1400 a good SAT score",
    "is 1500 a good SAT score",
    "SAT score for college",
  ],
  openGraph: {
    title: "What Is a Good SAT Score in 2026?",
    description: "Score bands, college targets, and what 'good' actually means on the SAT.",
    url: canonical,
    siteName: "NomoExam",
    type: "article",
    images: [{ url: og, width: 1200, height: 630, alt: "What is a good SAT score in 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is a Good SAT Score in 2026?",
    description: "A good SAT score is the one that clears the middle 50% at your colleges.",
    images: [og],
  },
};

const faqs = [
  {
    question: "What is a good SAT score in 2026?",
    answer:
      "A good SAT score is one at or above the middle 50% of enrolled students at the colleges on your list. Nationally, the College Board Class of 2025 average is 1029, so anything above that is above average. The number that matters for admission is the 75th percentile at your hardest realistic school.",
  },
  {
    question: "Is 1000 a good SAT score?",
    answer:
      "1000 is below the Class of 2025 average of 1029 and sits in the most common score band, 1000 to 1190. It can be enough at broad-access colleges. It is short of the middle 50% at selective universities.",
  },
  {
    question: "Is 1100 a good SAT score?",
    answer:
      "1100 is a bit above the national average and still inside the most common band. It is competitive at many regional public universities. Check the middle 50% at your schools before you treat it as a final score.",
  },
  {
    question: "Is 1200 a good SAT score?",
    answer:
      "1200 is around the top quarter of test-takers and is a solid score at many state universities. Highly selective colleges usually enroll students well above 1200, so compare it with each school's published range.",
  },
  {
    question: "Is 1300 a good SAT score?",
    answer:
      "1300 sits between the top quarter and the top 10% nationally. It is a real asset at many flagship universities. At the most selective schools it is often below the middle of the enrolled class.",
  },
  {
    question: "Is 1400 a good SAT score?",
    answer:
      "1400 is about the top 10% of SAT takers. It is strong at most universities. Selective colleges often publish middle-50% ranges that start in the mid-1400s, so 1400 can be inside the range at some and below it at others.",
  },
  {
    question: "Is 1500 a good SAT score?",
    answer:
      "1500 or above is roughly the top 1–2% of test-takers. It is competitive at highly selective colleges. It does not guarantee admission, because grades, course rigor, and essays still decide the file.",
  },
  {
    question: "What SAT score do Ivy League schools expect?",
    answer:
      "There is no single Ivy League cutoff. Enrolled students at those schools cluster in the high 1400s to high 1500s. Look up each school's latest Common Data Set, section C9, and aim at or above that school's 75th percentile.",
  },
];

const bands = [
  {
    band: "Under 1000",
    standing: "Below the Class of 2025 average of 1029",
    meaning: "Broad-access and many test-optional colleges. A retake with real prep usually moves this.",
  },
  {
    band: "1000–1190",
    standing: "The most common band in the Class of 2025 report",
    meaning: "Many regional public universities. Still short of selective middle-50% ranges.",
  },
  {
    band: "1200–1340",
    standing: "About the top quarter, moving toward the top 10%",
    meaning: "Competitive at a lot of state flagships. Compare with each school's 25th percentile.",
  },
  {
    band: "1350–1440",
    standing: "Around the top 10%",
    meaning: "Strong at most universities. Selective schools may still want the mid-1400s.",
  },
  {
    band: "1450–1600",
    standing: "Top few percent. 1500+ is about the top 1–2%",
    meaning: "In range at highly selective colleges. Not an offer letter by itself.",
  },
];

export default function GoodSatScorePage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "What Is a Good SAT Score?", url: canonical },
        ]}
      />
      <ArticleStructuredData
        title="What Is a Good SAT Score in 2026?"
        description="A good SAT score matches the middle 50% at your colleges. National context, score bands, and how to set a target."
        datePublished="2026-10-01"
        dateModified="2026-10-01"
      />
      <FAQStructuredData faqs={faqs} />

      <main>
        <article className={`${MKT.pageSection} pb-20 pt-28 md:pb-32 md:pt-36`}>
          <div className={`${MKT.container} mx-auto max-w-4xl`}>
            <div className="mb-8">
              <div className={`${MKT.badgeLight} mb-4`}>
                <Target className="h-4 w-4" />
                <span>SAT Scores</span>
              </div>
              <h1 className={`${MKT.h1OnLight} mb-4`}>What Is a Good SAT Score in 2026?</h1>
              <p className="text-base font-medium text-neutral-600 md:text-lg">
                Last updated: October 1, 2026
              </p>
            </div>

            <div className="prose-sat space-y-6 text-base font-medium leading-relaxed text-neutral-800 md:text-lg">
              <p>
                A good SAT score is one at or above the middle 50% of enrolled students at the colleges on your list. Nationally, the College Board average for the Class of 2025 is 1029 out of 1600, so a score above 1029 is above average. About 1200 is the top quarter, about 1350–1400 is the top 10%, and 1500 or above is roughly the top 1–2%. The score to chase is the 75th percentile at your hardest realistic school, not the national average.
              </p>

              <p>
                The percentile chart, section averages (521 Reading and Writing, 508 Math), and the Class of 2025 report live on our{" "}
                <Link href="/average-sat-scores-percentiles" className="font-semibold text-primary hover:underline">
                  average SAT score
                </Link>{" "}
                page. This page answers the decision those numbers are for: is this score good for you?
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                SAT Score Bands
              </h2>

              <p>
                These bands use College Board&apos;s Class of 2025 average and the percentile landscape published with that report. They describe where a score sits in the country. They are not admission cutoffs.
              </p>

              <div className="not-prose overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead className="bg-neutral-50 text-neutral-900">
                    <tr>
                      <th className="p-3 font-semibold">Score</th>
                      <th className="p-3 font-semibold">National standing</th>
                      <th className="p-3 font-semibold">What it usually means</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bands.map((row) => (
                      <tr key={row.band} className="border-t border-neutral-200">
                        <td className="p-3 font-semibold text-neutral-900">{row.band}</td>
                        <td className="p-3 text-neutral-700">{row.standing}</td>
                        <td className="p-3 text-neutral-700">{row.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                Good SAT Score by College
              </h2>

              <p>
                Colleges do not use the national average. They publish a middle 50% range: the 25th to 75th percentile of enrolled students. A score inside that range is in the mix. A score at or above the 75th percentile is a strength in the file. A score under the 25th percentile is a gap the rest of the application has to carry.
              </p>

              <p>
                Do not use a blog&apos;s guessed range for Harvard or Michigan. Search &quot;[school name] Common Data Set&quot; and open section C9, or use College Board BigFuture. Use the most recent year the school has posted. Policies also change: some colleges require a score again for the 2026–27 cycle, and others stay test-optional. Check the school&apos;s current admissions page before you decide whether to send the score.
              </p>

              <div className="not-prose overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead className="bg-neutral-50 text-neutral-900">
                    <tr>
                      <th className="p-3 font-semibold">Where you are applying</th>
                      <th className="p-3 font-semibold">How to read &quot;good&quot;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-neutral-200">
                      <td className="p-3 font-semibold text-neutral-900">Highly selective colleges</td>
                      <td className="p-3 text-neutral-700">Enrolled scores cluster in the high 1400s to high 1500s. Aim at that school&apos;s own 75th percentile.</td>
                    </tr>
                    <tr className="border-t border-neutral-200">
                      <td className="p-3 font-semibold text-neutral-900">Selective national universities</td>
                      <td className="p-3 text-neutral-700">Middle 50% ranges often start in the 1300s. 1400 can be inside the range at one school and short at the next.</td>
                    </tr>
                    <tr className="border-t border-neutral-200">
                      <td className="p-3 font-semibold text-neutral-900">State flagships and regional publics</td>
                      <td className="p-3 text-neutral-700">Many competitive ranges sit from the low 1100s through the 1300s. Look up the campus, not the state system.</td>
                    </tr>
                    <tr className="border-t border-neutral-200">
                      <td className="p-3 font-semibold text-neutral-900">Broad-access colleges</td>
                      <td className="p-3 text-neutral-700">Scores near or below the national average are often enough, and some schools do not require the SAT.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                How to Set Your SAT Target
              </h2>

              <p>
                Write down the colleges you would actually attend. Drop the dream school you have not researched and the safety you already know you can get into. For each remaining school, record the 25th and 75th percentile SAT from its latest Common Data Set. Your target is the highest 75th percentile on that list.
              </p>

              <p>
                Then take one full-length digital practice test. The gap between that score and the target is the prep plan. If the gap is mostly one section, spend the weeks there. A{" "}
                <Link href="/sat-study-plan" className="font-semibold text-primary hover:underline">
                  SAT study plan
                </Link>{" "}
                and the{" "}
                <Link href="/how-to-improve-sat-score-200-points" className="font-semibold text-primary hover:underline">
                  guide to gaining about 200 points
                </Link>{" "}
                are the next pages if the gap is large. Some colleges superscore, combining your best Reading and Writing with your best Math across dates. Only count on that if the school says it does.
              </p>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">
                SAT Score Questions
              </h2>

              <div className="not-prose space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-xl border border-neutral-200 bg-white p-5">
                    <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">{faq.question}</h3>
                    <p className="text-base font-medium leading-relaxed text-neutral-700">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">Sources</h2>
              <p>
                The national average of 1029, and the section averages of 521 and 508, come from College Board&apos;s SAT Suite annual report for the Class of 2025. Percentile bands on this page match that report&apos;s published landscape and are spelled out on the{" "}
                <Link href="/average-sat-scores-percentiles" className="font-semibold text-primary hover:underline">
                  SAT percentiles
                </Link>{" "}
                page. College ranges are not reprinted here, because they change every year and belong to each school&apos;s Common Data Set.
              </p>

              <p>
                If the target is higher than today&apos;s score,{" "}
                <Link href="/exams/sat" className="font-semibold text-primary hover:underline">
                  SAT prep
                </Link>{" "}
                on NomoExam is full-length digital practice plus an explanation for each miss. The live plan price is on{" "}
                <Link href="/pricing" className="font-semibold text-primary hover:underline">
                  pricing
                </Link>
                .
              </p>

              <RelatedContent links={RELATED_CONTENT_GROUPS.satPrep.filter((link) => link.href !== "/what-is-a-good-sat-score")} />
            </div>
          </div>
        </article>
      </main>
    </MarketingPageShell>
  );
}
