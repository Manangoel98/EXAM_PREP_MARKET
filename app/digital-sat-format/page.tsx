import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { RelatedContent, RELATED_CONTENT_GROUPS } from "@/components/landing/RelatedContent";
import { GuideH2, GuideH3, GuideTable, InLink, OfficialLink } from "@/components/guides/GuideBits";
import { MKT } from "@/lib/marketing-ui";
import { COLLEGE_BOARD } from "@/lib/sat-guides";
import type { Metadata } from "next";
import { marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, ArticleStructuredData, FAQStructuredData } from "@/lib/schema";
import { Timer } from "lucide-react";

const canonical = marketingAbsoluteUrl("/digital-sat-format");
const og = marketingAbsoluteUrl("/opengraph-image");

export const metadata: Metadata = {
  title: "Digital SAT Format: Modules, Timing, and Scoring (2026) | NomoExam",
  description:
    "The digital SAT is 2 hours 14 minutes and 98 questions in four modules. See the timing, adaptive scoring, calculator rules, and what changed from the paper test.",
  alternates: { canonical },
  keywords: [
    "digital SAT format",
    "how long is the SAT",
    "how many questions on the SAT",
    "digital SAT adaptive",
    "SAT modules",
    "Bluebook SAT",
  ],
  openGraph: {
    title: "Digital SAT Format: Modules, Timing, and Scoring",
    description: "Question counts, module timing, and how adaptive scoring works on the only SAT students take now.",
    url: canonical,
    siteName: "NomoExam",
    type: "article",
    images: [{ url: og, width: 1200, height: 630, alt: "Digital SAT format and timing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital SAT Format: Modules, Timing, and Scoring",
    description: "2 hours 14 minutes, 98 questions, two adaptive sections.",
    images: [og],
  },
};

const faqs = [
  {
    question: "How long is the digital SAT?",
    answer:
      "The digital SAT takes 2 hours and 14 minutes of testing time. That is 64 minutes for Reading and Writing and 70 minutes for Math, plus a short break between the sections.",
  },
  {
    question: "How many questions are on the digital SAT?",
    answer:
      "There are 98 questions: 54 in Reading and Writing and 44 in Math. Each section is two modules.",
  },
  {
    question: "Is the paper SAT still offered?",
    answer:
      "No. The SAT students take now is digital, in the Bluebook app. The paper test was retired. Scores are still reported on the same 400 to 1600 scale.",
  },
  {
    question: "Is the digital SAT harder than the paper SAT?",
    answer:
      "It is shorter, and each question has a bit more time than on the old test, but you have fewer chances to recover from a miss. Easier to sit through is not the same as easier to score high on. The scale is still 400 to 1600.",
  },
  {
    question: "Can you use a calculator on the entire SAT?",
    answer:
      "You can use a calculator on every Math question. Reading and Writing has no calculator. Desmos is built into Bluebook for Math.",
  },
  {
    question: "Does adaptive scoring lower your score?",
    answer:
      "No. Module 1 performance chooses the difficulty of Module 2. The harder Module 2 is how the test reaches the top scores. Your section scores are still 200 to 800.",
  },
  {
    question: "Are SAT scores still out of 1600?",
    answer:
      "Yes. The total is 400 to 1600. Reading and Writing is 200 to 800. Math is 200 to 800. There is no guessing penalty.",
  },
  {
    question: "What app do you use to take the SAT?",
    answer:
      "College Board's Bluebook app. You need it for practice in the same interface as test day, including the timer, the reference sheet, and Desmos on Math.",
  },
];

export default function DigitalSatFormatPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "SAT Guides", url: marketingAbsoluteUrl("/guides") },
          { name: "Digital SAT Format", url: canonical },
        ]}
      />
      <ArticleStructuredData
        title="Digital SAT Format: Modules, Timing, and Scoring (2026)"
        description="How the digital SAT is built: modules, timing, adaptive scoring, and the 400–1600 scale."
        datePublished="2026-10-01"
        dateModified="2026-10-01"
      />
      <FAQStructuredData faqs={faqs} />
      <main>
        <article className={`${MKT.pageSection} pb-20 pt-28 md:pb-32 md:pt-36`}>
          <div className={`${MKT.container} mx-auto max-w-4xl`}>
            <div className="mb-8">
              <div className={`${MKT.badgeLight} mb-4`}>
                <Timer className="h-4 w-4" />
                <span>Digital SAT</span>
              </div>
              <h1 className={`${MKT.h1OnLight} mb-4`}>Digital SAT Format: Modules, Timing, and Scoring</h1>
              <p className="text-base font-medium text-neutral-600 md:text-lg">Last updated: October 1, 2026</p>
            </div>
            <div className="space-y-6 text-base font-medium leading-relaxed text-neutral-800 md:text-lg">
              <p>
                The digital SAT is 2 hours and 14 minutes long and has 98 questions. There are two sections, Reading and Writing and Math. Each section has two modules. Reading and Writing is 54 questions in 64 minutes. Math is 44 questions in 70 minutes. The score is still 400 to 1600, with each section worth 200 to 800. A calculator is allowed on every Math question. The test is adaptive: Module 1 decides whether Module 2 is the harder or the easier route.
              </p>
              <p>
                That is the whole skeleton. The rest of this page is what the skeleton means when you are studying, and what people still get wrong because they are remembering the retired paper test. College Board publishes the structure on its{" "}
                <OfficialLink href={COLLEGE_BOARD.digital}>digital SAT</OfficialLink> pages. Question types live in the{" "}
                <InLink href="/sat-reading-and-writing">Reading and Writing</InLink> guide and the{" "}
                <InLink href="/sat-math">SAT Math</InLink> guide. This page stays on the format.
              </p>

              <GuideH2>The four modules</GuideH2>
              <GuideTable
                headers={["Module", "Questions", "Time", "What happens next"]}
                rows={[
                  ["Reading and Writing, Module 1", "27", "32 minutes", "Your performance routes Module 2"],
                  ["Reading and Writing, Module 2", "27", "32 minutes", "Section score, 200–800"],
                  ["Math, Module 1", "22", "35 minutes", "Your performance routes Module 2"],
                  ["Math, Module 2", "22", "35 minutes", "Section score, 200–800"],
                ]}
              />
              <p>
                You cannot move backward into a finished module. Within a module you can move around, mark questions, and return, until the module timer ends. When the timer ends, that module is done. This is different from a paper booklet, where the whole section sat in front of you at once. Practice has to include that lock. A student who &quot;goes back at the end&quot; on paper is practicing a test that is no longer given.
              </p>
              <p>
                There is a break between Reading and Writing and Math. It is short. It is not a study hall. Use it to stand up, not to cram a formula you will not remember in four minutes. College Board&apos;s{" "}
                <OfficialLink href={COLLEGE_BOARD.sat}>SAT overview</OfficialLink> is the place to confirm break rules for your administration, because test-day instructions are theirs, not a blog&apos;s.
              </p>

              <GuideH2>Reading and Writing, as a format</GuideH2>
              <p>
                One section. Short texts. One question per text in almost every case. Grammar and reading are mixed in the same module, so you might punctuate a sentence and then read a science note. There is no essay. There is no long passage with a stack of questions that reward a single careful read.
              </p>
              <p>
                The format consequence is stamina of a different kind. You are not holding a 700-word article in your head. You are resetting your attention 27 times in 32 minutes. Students who were good at the old reading section sometimes under-prepare, because the texts look easy. The difficulty is the speed of the reset and the precision of the question, not the length of the prose.
              </p>
              <p>
                How those questions are built, domain by domain, is the{" "}
                <InLink href="/sat-reading-and-writing">Reading and Writing guide</InLink>. For format, remember only this: you will not see a separate writing test, and you will not get ten questions from one passage.
              </p>

              <GuideH2>Math, as a format</GuideH2>
              <p>
                Two modules, 22 questions, 35 minutes. Multiple choice and student-produced responses are mixed. A reference sheet of geometry formulas is in the app. Desmos is in the app. An approved handheld calculator is also allowed, but you do not need one if you have practiced Desmos.
              </p>
              <p>
                The no-calculator section from the paper SAT does not exist. Every Math question is a calculator question. That does not mean every question should be a calculator question in your hands. The tool is available. The minute and a half is not. When to open Desmos is part of Math skill, and it is written out in the{" "}
                <InLink href="/sat-math">SAT Math guide</InLink>.
              </p>

              <GuideH2>How adaptive scoring works</GuideH2>
              <p>
                Each section is adaptive by module. Everyone&apos;s Module 1 is a mix of difficulties. After Module 1, the test gives you a Module 2 that is either more difficult or less difficult. The test is not adapting after every question. You will not feel a question get harder because you just missed one. You finish the module. Then the route is chosen.
              </p>
              <p>
                The score is not &quot;points times difficulty&quot; in a way you can compute at your desk. College Board equates the forms so that a 650 means a 650. What you should understand as a student is narrower, and it is the part people panic about:
              </p>
              <p>
                A harder Module 2 does not lower your score. It is the route that contains the questions needed to distinguish high scores. If you are routed to the easier Module 2, the ceiling of that section is lower, because the form does not include the hardest items. Routing is not a grade. It is how the scale gets built. Your report will show 200 to 800 either way. College Board explains the scale on its{" "}
                <OfficialLink href={COLLEGE_BOARD.scores}>scores page</OfficialLink>.
              </p>
              <GuideH3>What this means while you are in Module 1</GuideH3>
              <p>
                Take Module 1 seriously. Careless misses on easy items are how students who know the material get the lower route and then cannot reach the score they wanted. It does not mean you should spend four minutes on the first hard item. It means you should collect the straightforward points cleanly, mark the one that is stuck, and finish the module. You cannot see your route. You can see whether you left easy questions blank.
              </p>
              <p>
                Do not try to &quot;game&quot; the route by missing questions on purpose. That rumor shows up every year. A lower route lowers the scores available to you. There is no strategic miss.
              </p>

              <GuideH2>The score you take home</GuideH2>
              <p>
                Two section scores, added together. Reading and Writing, 200 to 800. Math, 200 to 800. Total, 400 to 1600. No penalty for a wrong answer, so a guess is better than a blank on multiple choice. Colleges that superscore will say so on their own sites. The SAT itself does not combine your best sections for you. Whether 1400 is &quot;good&quot; is not a format question. It is a college-list question, answered on{" "}
                <InLink href="/what-is-a-good-sat-score">what is a good SAT score</InLink>, with the national average and percentiles on the{" "}
                <InLink href="/average-sat-scores-percentiles">averages page</InLink>.
              </p>
              <p>
                Score release is a calendar fact, not a format fact. Weekend tests in the current cycle return scores on a published date, generally about two weeks later. The dates are on the{" "}
                <InLink href="/sat-test-dates">SAT test dates</InLink> page, taken from College Board&apos;s deadline table.
              </p>

              <GuideH2>What changed from the paper SAT</GuideH2>
              <p>
                The paper SAT is retired. A comparison is useful once, so you can ignore advice written for the old test. It is not a second exam you can choose.
              </p>
              <GuideTable
                headers={["", "Paper SAT, retired", "Digital SAT, current"]}
                rows={[
                  ["Testing time", "About 3 hours", "2 hours 14 minutes"],
                  ["Questions", "154", "98"],
                  ["Sections", "Reading, Writing and Language, two Math sections", "Reading and Writing, Math"],
                  ["Passages", "Long, several questions each", "Short, usually one question each"],
                  ["Calculator", "Only on part of Math", "Every Math question, Desmos included"],
                  ["Adaptive", "No", "Module 2 depends on Module 1"],
                  ["Score scale", "400–1600", "400–1600"],
                  ["Delivery", "Booklet and answer sheet", "Bluebook on a device"],
                ]}
              />
              <p>
                If a tip assumes a bubble sheet, a no-calculator math block, or a 700-word passage, it is a tip for a test you will not take. The scale did not change. The day did.
              </p>

              <GuideH2>Bluebook and test day</GuideH2>
              <p>
                You take the SAT in College Board&apos;s Bluebook app, on a laptop or tablet that meets their rules, or on a device the test center provides if you arranged that. Practice tests that matter are the ones you take in that app, or in a replica of it, because the timer, the highlight tool, the option eliminator, the reference sheet, and Desmos are part of the task. A PDF on the kitchen table is a content check. It is not a dress rehearsal.
              </p>
              <p>
                Before test day, College Board wants the app installed and a practice run completed so the device is approved. Do that the week you register, not the night before. The deadline to borrow a device is earlier than the regular registration deadline. Those deadlines are listed with the{" "}
                <InLink href="/sat-test-dates">test dates</InLink>, and the authoritative table is College Board&apos;s{" "}
                <OfficialLink href={COLLEGE_BOARD.dates}>dates and deadlines</OfficialLink> page.
              </p>
              <GuideH3>What to ignore about &quot;the computer&quot;</GuideH3>
              <p>
                The test is not a coding test and it is not a typing test. You click choices. You type a few math answers. Students who blame the screen are often students who never practiced on a screen. Two timed modules in Bluebook will tell you whether the interface is actually your problem. For almost everyone, the problem is still the question.
              </p>

              <GuideH2>How to practice the format</GuideH2>
              <p>
                Once a week, take a full module under the real timer, on a device, with the tool you will use. Review it the same day. Once every two or three weeks, take a full test: both Reading and Writing modules, the break, both Math modules. A pile of untimed questions does not teach you that Module 2 locks when the timer hits zero.
              </p>
              <p>
                The{" "}
                <InLink href="/how-to-prepare-for-sat">preparation guide</InLink> and the{" "}
                <InLink href="/sat-study-plan">study plan</InLink> turn that rhythm into weeks. The{" "}
                <InLink href="/how-to-improve-sat-score-200-points">200-point guide</InLink> is what to do with the misses. Format practice without review is just endurance. Review without the timer is just homework.
              </p>

              <GuideH2>How the time actually splits</GuideH2>
              <p>
                Reading and Writing gives you 32 minutes for 27 questions. That is about 71 seconds each if you spend the time evenly, which you should not. A punctuation item is often 30 seconds. A two-text item can take two minutes. Math gives you 35 minutes for 22 questions, about 95 seconds each on an even split. The same rule applies: a one-step linear equation should be gone in well under a minute, and a student-produced response with a graph can take two.
              </p>
              <p>
                The break sits between the sections, not between the modules. You do not get a pause to regroup in the middle of Reading and Writing. When Module 1 ends, Module 2 starts. Students who practice the two modules as one continuous 64 minutes are practicing the real section. Students who take a ten-minute break at question 27 are practicing a kindness the test will not offer.
              </p>
              <p>
                Inside a live module you can flag a question, cross out choices, and go back, until that module&apos;s timer hits zero. You cannot open the next module early, and you cannot return once it has closed. If you finish Module 1 with four minutes left, spend them on the flags in Module 1. Those minutes do not carry over.
              </p>

              <GuideH2>What test morning is for</GuideH2>
              <p>
                The admission ticket has the arrival time, the center, and the ID rules. Follow that ticket. The useful preparation on the morning itself is small: the device charged, Bluebook already installed, the admission ticket saved, and a photo ID that matches the name on the registration. A calculator is optional because Desmos is in the app. Bring one only if you have been using that exact calculator in practice. A new calculator on Saturday morning is a new interface, and you do not have time to learn it.
              </p>
              <p>
                Eat something ordinary. Do not run a practice set in the parking lot. The score moves in the weeks before, not in the twenty minutes before check-in. If you want a last look, look at the three error types you wrote down after your last full test, then put the phone away. The{" "}
                <InLink href="/sat-test-dates">dates page</InLink> is where you confirm that this Saturday&apos;s scores return before the application that made you pick it.
              </p>
              <p>
                After the test, the score report shows the total and the two section scores, each 200 to 800. Use the section split to decide what the next eight weeks are for. A 700 in Reading and Writing with a 560 in Math is a Math problem. It is not a &quot;study more&quot; problem. The domains inside Math, and which ones to open first, are in the{" "}
                <InLink href="/sat-math">Math guide</InLink>. The same split for the other section is in the{" "}
                <InLink href="/sat-reading-and-writing">Reading and Writing guide</InLink>.
              </p>

              <GuideH2>Format questions</GuideH2>
              <div className="not-prose space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-xl border border-neutral-200 bg-white p-5">
                    <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">{faq.question}</h3>
                    <p className="text-base font-medium leading-relaxed text-neutral-700">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <GuideH2>Sources</GuideH2>
              <p>
                Timing, question counts, the two-module adaptive design, the calculator policy, and the 400 to 1600 scale are College Board&apos;s. The pages to trust are the{" "}
                <OfficialLink href={COLLEGE_BOARD.digital}>digital SAT</OfficialLink> overview, the{" "}
                <OfficialLink href={COLLEGE_BOARD.sat}>SAT Suite</OfficialLink> page, and the{" "}
                <OfficialLink href={COLLEGE_BOARD.scores}>scores</OfficialLink> explanation. This guide does not link to other test-prep companies.
              </p>
              <p>
                If the next step is a timed test in this format, start from{" "}
                <InLink href="/pricing">pricing</InLink>. If the next step is a date, use the{" "}
                <InLink href="/sat-test-dates">2026–27 calendar</InLink>.
              </p>
              <RelatedContent links={RELATED_CONTENT_GROUPS.satPrep.filter((link) => link.href !== "/digital-sat-format")} />
            </div>
          </div>
        </article>
      </main>
    </MarketingPageShell>
  );
}
