import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { RelatedContent, RELATED_CONTENT_GROUPS } from "@/components/landing/RelatedContent";
import { GuideH2, GuideH3, GuideTable, InLink, OfficialLink } from "@/components/guides/GuideBits";
import { MKT } from "@/lib/marketing-ui";
import { COLLEGE_BOARD } from "@/lib/sat-guides";
import type { Metadata } from "next";
import { marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, ArticleStructuredData, FAQStructuredData } from "@/lib/schema";
import { BookOpen } from "lucide-react";

const canonical = marketingAbsoluteUrl("/sat-reading-and-writing");
const og = marketingAbsoluteUrl("/opengraph-image");

export const metadata: Metadata = {
  title: "SAT Reading and Writing: Every Question Type (2026) | NomoExam",
  description:
    "Digital SAT Reading and Writing explained: the four domains, short passages, grammar, vocabulary in context, and how to pace 27 questions in 32 minutes.",
  alternates: { canonical },
  keywords: [
    "SAT reading and writing",
    "digital SAT reading",
    "SAT grammar",
    "SAT vocabulary",
    "SAT reading passages",
    "SAT writing questions",
  ],
  openGraph: {
    title: "SAT Reading and Writing: Every Question Type Explained",
    description: "The four domains on the digital SAT Reading and Writing section, and how to work them under the clock.",
    url: canonical,
    siteName: "NomoExam",
    type: "article",
    images: [{ url: og, width: 1200, height: 630, alt: "SAT Reading and Writing guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAT Reading and Writing: Every Question Type",
    description: "Short passages, four domains, and pacing for the digital SAT.",
    images: [og],
  },
};

const faqs = [
  {
    question: "Is there still a separate SAT writing section?",
    answer:
      "No. Reading and Writing is one section. Grammar, punctuation, and passage questions sit in the same two modules. There is no standalone essay on the current SAT.",
  },
  {
    question: "How long are SAT reading passages?",
    answer:
      "They are short. Most items give you one brief passage, often a paragraph or less, and ask one question about it. The old long passages with ten questions each are gone.",
  },
  {
    question: "How many Reading and Writing questions are on the SAT?",
    answer:
      "There are 54 questions across two modules. Each module has 27 questions and a 32-minute limit, so the section is 64 minutes.",
  },
  {
    question: "Does the SAT still test vocabulary?",
    answer:
      "Yes, but in context. A question asks what a word means in that sentence, or which word completes the idea. It is not a list of rare words to memorize in isolation.",
  },
  {
    question: "What grammar is on the SAT?",
    answer:
      "Standard English Conventions covers boundaries between clauses, punctuation, verb agreement, pronoun agreement, and modifiers. The rules are finite. They are also the fastest points for many students.",
  },
  {
    question: "Is the Reading and Writing section adaptive?",
    answer:
      "Yes. Your work on Module 1 determines whether Module 2 is the more or less difficult route. The section score is still 200 to 800 either way. A harder Module 2 is how higher scores are reached.",
  },
  {
    question: "How much time should I spend on one Reading and Writing question?",
    answer:
      "The module gives 32 minutes for 27 questions, a little over a minute each if you split the time evenly. Grammar items should take less. A dense science note can take more. Mark and move when you have reread the same sentence twice.",
  },
  {
    question: "Should I read the question or the passage first?",
    answer:
      "Read the question first when it tells you the job, then the passage. On a one-sentence grammar item, the blank or the underlined spot is the passage. On a main-idea item, you need the whole short text before you trust an answer.",
  },
];

export default function SatReadingWritingPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "SAT Guides", url: marketingAbsoluteUrl("/guides") },
          { name: "SAT Reading and Writing", url: canonical },
        ]}
      />
      <ArticleStructuredData
        title="SAT Reading and Writing: Every Question Type Explained (2026)"
        description="The four Reading and Writing domains on the digital SAT, with pacing and how each question is built."
        datePublished="2026-10-01"
        dateModified="2026-10-01"
      />
      <FAQStructuredData faqs={faqs} />
      <main>
        <article className={`${MKT.pageSection} pb-20 pt-28 md:pb-32 md:pt-36`}>
          <div className={`${MKT.container} mx-auto max-w-4xl`}>
            <div className="mb-8">
              <div className={`${MKT.badgeLight} mb-4`}>
                <BookOpen className="h-4 w-4" />
                <span>SAT Reading and Writing</span>
              </div>
              <h1 className={`${MKT.h1OnLight} mb-4`}>SAT Reading and Writing: Every Question Type Explained</h1>
              <p className="text-base font-medium text-neutral-600 md:text-lg">Last updated: October 1, 2026</p>
            </div>
            <div className="space-y-6 text-base font-medium leading-relaxed text-neutral-800 md:text-lg">
              <p>
                SAT Reading and Writing is one section, not two. It has 54 questions in 64 minutes: two modules, each with 27 questions and 32 minutes. Passages are short, usually a paragraph or a single sentence, and almost every passage has one question. Grammar and reading sit in the same module. The section score is 200 to 800. College Board sorts the questions into four domains: Information and Ideas, Craft and Structure, Expression of Ideas, and Standard English Conventions.
              </p>
              <p>
                Module length and adaptive routing are covered on the{" "}
                <InLink href="/digital-sat-format">digital SAT format</InLink> page. This page is the question types: what each domain is asking you to do, and how to do it before the clock in the corner becomes the whole problem.
              </p>

              <GuideH2>Why the section feels different from older advice</GuideH2>
              <p>
                Older SAT advice assumed a long passage, a pencil in the margin, and ten questions that shared the same text. That test is retired. On the digital SAT you finish a text and you are done with it. There is no payoff for a slow, beautiful reading of a passage you will be asked about five more times. There is a payoff for knowing, in the first ten seconds, which of the four jobs you have.
              </p>
              <p>
                College Board describes the merged section on its{" "}
                <OfficialLink href={COLLEGE_BOARD.digital}>digital SAT</OfficialLink> pages. The practical consequence is pacing. A grammar question that takes 90 seconds has stolen time from a notes question that needed it. The students who improve this section fastest are not the ones who read more novels in April. They are the ones who can name the task.
              </p>
              <GuideTable
                headers={["Domain", "The job", "Where the points move first"]}
                rows={[
                  ["Information and Ideas", "Find a claim, a support, a detail, or the main point", "After you can finish the text without rereading"],
                  ["Craft and Structure", "Words in context, purpose, and how a text is built", "Vocabulary items, once you use the sentence"],
                  ["Expression of Ideas", "Transitions and combining ideas so a paragraph works", "Transition words, which are a short list"],
                  ["Standard English Conventions", "Grammar and punctuation", "The fastest gains for most students"],
                ]}
              />

              <GuideH2>Information and Ideas</GuideH2>
              <p>
                These questions ask what the text says, or what would support it, or what a chart is doing next to a sentence. The text might be a short science note, a history blurb, or a literary paragraph. The question might ask for the main idea, for a detail, for a logical completion, or for which finding would support a claim the author just made.
              </p>
              <p>
                Main idea is not a vibe. Cover the choices and say the point in your own half-sentence. Then pick the choice that matches that half-sentence. Choices that are true but narrow, or true about a different text, are the usual traps. A detail question is the opposite move: the answer is local. Do not pick the choice that sounds like the theme of the whole paragraph if the question pointed at one line.
              </p>
              <GuideH3>Claims and evidence</GuideH3>
              <p>
                A command of evidence item gives you a claim and asks which quotation or which result would support it. Support means the choice makes the claim more believable, not that the choice is interesting. If the claim is &quot;the policy reduced delays,&quot; a choice about how popular the policy was does not support it. A choice with a before-and-after number does.
              </p>
              <p>
                Quantitative evidence is the same skill with a graph. Read the axis labels before the trend. Students describe a chart as &quot;going up&quot; and then pick a choice about the wrong variable. The sentence under the chart often tells you which comparison matters. Use that sentence as the question, and the chart as the evidence, not the other way around.
              </p>
              <p>
                Inferences stay close. The SAT does not want a creative leap. If the text says a species is found only on two islands, you can infer it is not widespread on the mainland. You cannot infer why it evolved that way unless the text said why. When two choices both feel plausible, pick the one that needs fewer extra facts.
              </p>

              <GuideH2>Craft and Structure</GuideH2>
              <p>
                Craft and Structure is words, purpose, and cross-text. Words-in-context items highlight a word and ask what it means there. The dictionary meaning you like most is often a choice, and often wrong. Substitute each answer into the sentence and keep the one that preserves the logic. If the sentence is about a plan falling apart, &quot;compromise&quot; might mean a settlement, or it might mean a weakening. The surrounding verb tells you which.
              </p>
              <p>
                You do not need a notebook of 2,000 obscure words. You do need the words that carry argument: however, underscore, concede, tentative, undermine, illustrate. Learn them inside sentences. A list memorized the night before does not survive a module, because the test never asks for a definition in the abstract.
              </p>
              <GuideH3>Purpose and cross-text</GuideH3>
              <p>
                A purpose question asks why a sentence is there. Not what it says. Why it is present. Common jobs: introduce a study, concede a limit, give an example, contrast with the previous claim. If you can label the sentence with one of those jobs, the choices get easier, because most of them describe a different job.
              </p>
              <p>
                Cross-text items show two short texts. The question is almost always about agreement, disagreement, or how one author would respond to the other. Read Text 1 until you can state its claim in one line. Do the same for Text 2. Then look at the question. Students who read both texts as one blended paragraph miss the disagreement the item is built on.
              </p>

              <GuideH2>Expression of Ideas</GuideH2>
              <p>
                Expression of Ideas is about the paragraph as a piece of writing: transitions, and how a sentence should be phrased so it does the job the notes describe. The notes questions look odd the first time. You get a goal (&quot;emphasize the cost&quot;) and a list of bullet notes, and you choose which sentence uses the relevant notes and hits the goal. Extra true facts that ignore the goal are wrong.
              </p>
              <p>
                Transitions are a closed set. Addition: also, furthermore. Contrast: however, nevertheless. Cause: therefore, thus. Example: for instance. Sequence: then, subsequently. The SAT puts a blank between two sentences and asks for the word. Read sentence two and decide its relationship to sentence one before you look at the choices. If sentence two pushes back, you want contrast, even if a fancy addition word is sitting there.
              </p>
              <p>
                A wrong transition is not a style preference. If the second sentence contradicts the first, &quot;likewise&quot; is false. Students treat these as tone questions. They are logic questions with a short vocabulary.
              </p>

              <GuideH2>Standard English Conventions</GuideH2>
              <p>
                This is the grammar domain, and it is the most coachable part of the section. The rules show up every test. Boundaries between clauses. Commas versus periods versus no punctuation. Subject-verb agreement. Pronoun agreement. Verb tense that matches the timeline. Modifiers sitting next to the thing they modify. Possessives versus plurals.
              </p>
              <p>
                A clause boundary is the one to learn first. An independent clause can stand as a sentence. Two of them cannot be joined by a comma alone. That error, the comma splice, is a favorite. The fixes are a period, a semicolon, or a comma plus a coordinating conjunction such as and, but, or so. A dependent clause, one that starts with because or although or when, is not a sentence on its own, so a period in front of it is wrong.
              </p>
              <GuideH3>A way to check punctuation</GuideH3>
              <p>
                Read the words on each side of the punctuation out loud, without the punctuation. Ask: is each side a full sentence? If both are, you need a period, a semicolon, or a comma plus and/but/or/so. If only one side is a full sentence, you usually need a comma or nothing, not a period. This check takes a few seconds and it catches the items people &quot;feel&quot; their way through.
              </p>
              <p>
                Agreement is the other fast rule. Find the subject, ignore the prepositional phrase in the middle, and match the verb. &quot;The stack of papers is&quot; not &quot;are,&quot; because stack is singular. Pronouns follow the same hunt. &quot;Each of the players forgot their&quot; is the kind of line the test uses to see whether you tracked &quot;each&quot; or &quot;players.&quot;
              </p>
              <p>
                Modifiers: the descriptive phrase wants to sit next to what it describes. &quot;Walking into the lab, the samples were labeled&quot; says the samples walked. The fix puts the person next to the opening phrase. You do not need a grammar textbook chapter for this. You need to ask who is doing the walking.
              </p>

              <GuideH2>Pacing 27 questions in 32 minutes</GuideH2>
              <p>
                A little over a minute per question is the even split. Conventions items should come in under that. A dense notes item or a two-text item can take the extra seconds you saved. If you have read a passage twice and the choices still look the same, mark it. The next question is a new text. Staying does not make the first text clearer. It makes the end of the module rushed.
              </p>
              <p>
                Do not save all the grammar for last on purpose. The module mixes domains. Work in order, and use the mark button for the ones that need a second pass. Module 2 will feel tighter if Module 1 went well, because the harder route has more of the dense items. The score is still 200 to 800. The harder route is not a punishment. It is the path that can reach the top of the scale. That routing is explained with the rest of the{" "}
                <InLink href="/digital-sat-format">test format</InLink>.
              </p>

              <GuideH2>What to study first</GuideH2>
              <p>
                Spend the first Reading and Writing weeks on conventions and transitions. The rules are finite, the questions are short, and a student can see the score move. Then add words in context, using sentences rather than flashcards alone. Then claims and evidence, including one graph item each session, because the graph is where careful readers still miss the axis.
              </p>
              <p>
                A full calendar for mixing this with Math is the{" "}
                <InLink href="/sat-study-plan">SAT study plan</InLink>. If the section is the thing holding a total score down, the{" "}
                <InLink href="/how-to-improve-sat-score-200-points">200-point guide</InLink> is the wider loop: diagnose, drill the actual miss, retest. Reading and Writing misses should be labeled by domain, not by &quot;I am bad at reading.&quot; Those are different problems and they have different fixes.
              </p>

              <GuideH2>Mistakes that repeat</GuideH2>
              <p>
                Picking a choice that is true but does not answer the question. The text mentioned it. The question did not ask for it.
              </p>
              <p>
                Using an outside definition for a word the sentence has already defined. Substitute the choice. If the sentence breaks, the choice is wrong.
              </p>
              <p>
                Treating transitions as decoration. The second sentence either continues, contrasts, or follows as a result. One of those is a fact about the two sentences.
              </p>
              <p>
                Comma splices, and the reverse error: a period between a dependent clause and the clause it depends on.
              </p>
              <p>
                Spending three minutes on one literary paragraph because it feels important. It is one question. The module has twenty-six others.
              </p>

              <GuideH2>How a practice session should look</GuideH2>
              <p>
                One timed set of about a module, or a focused set of fifteen items from a single domain. Then the review, the same day. For every miss, write the domain and the reason in a few words: &quot;comma splice,&quot; &quot;wrong denominator on the chart,&quot; &quot;transition was contrast, I picked addition.&quot; The reason is the thing you drill tomorrow. The letter you missed is not.
              </p>
              <p>
                Take at least some of the work on a screen. Short passages on paper feel easier because you can see the whole text without scrolling, and because there is no timer in the corner. The real section has both. The{" "}
                <InLink href="/how-to-prepare-for-sat">SAT preparation guide</InLink> puts this next to a full-length test so the section practice does not replace the modules.
              </p>

              <GuideH2>Three original examples</GuideH2>
              <p>
                These are not retired SAT items. They are here so the domain names turn into a move you can repeat. On the real test the wording will differ. The job will not.
              </p>
              <GuideH3>A boundary</GuideH3>
              <p>
                Sentence: &quot;The lab published the results, the other team repeated the trial.&quot; Both sides of the comma are full sentences. A comma alone cannot join them. A period works. A semicolon works. &quot;And&quot; with a comma works. &quot;Because&quot; would also work, but only if you mean the second event caused the first, which this line does not say. The punctuation question is settled before you pick a conjunction that changes the meaning.
              </p>
              <GuideH3>A transition</GuideH3>
              <p>
                Sentence one: the city added a bus lane. Sentence two: travel times got longer. The relationship is contrast, or an unexpected result, not addition. &quot;Furthermore&quot; is wrong even though the grammar of the sentence is fine. &quot;However&quot; fits. Read the second sentence against the first before you look at the word list. The word list is short, and the wrong words are the ones from a different relationship.
              </p>
              <GuideH3>A word in context</GuideH3>
              <p>
                &quot;The compromise left the plan weaker than the committee had hoped.&quot; Compromise here is not the friendly settlement you might define first. The next words, &quot;left the plan weaker,&quot; force the meaning toward a loss. Substitute each choice. The one that still means the plan lost strength is the answer. The one that means everyone left happy breaks the sentence.
              </p>
              <p>
                When you miss one of these in practice, label it with the domain and the rule, not with &quot;reading.&quot; &quot;Comma splice,&quot; &quot;contrast transition,&quot; &quot;context killed my first definition.&quot; Those labels are what you drill the next day. A second full module, taken before you have named the misses, mostly produces the same misses again.
              </p>

              <GuideH2>Reading and Writing questions</GuideH2>
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
                The single Reading and Writing section, the short passages, the four domains, and the module timing are College Board&apos;s design for the digital SAT. Read the primary description on the{" "}
                <OfficialLink href={COLLEGE_BOARD.digital}>digital SAT</OfficialLink> page and the{" "}
                <OfficialLink href={COLLEGE_BOARD.sat}>SAT Suite</OfficialLink> overview. Section scores are explained on College Board&apos;s{" "}
                <OfficialLink href={COLLEGE_BOARD.scores}>scores</OfficialLink> page. This article does not send you to other prep sites.
              </p>
              <p>
                If you are deciding whether a Reading and Writing score is high enough, use{" "}
                <InLink href="/what-is-a-good-sat-score">what is a good SAT score</InLink> and the{" "}
                <InLink href="/average-sat-scores-percentiles">percentile chart</InLink>. Timed practice is on{" "}
                <InLink href="/pricing">pricing</InLink>.
              </p>
              <RelatedContent links={RELATED_CONTENT_GROUPS.satPrep.filter((link) => link.href !== "/sat-reading-and-writing")} />
            </div>
          </div>
        </article>
      </main>
    </MarketingPageShell>
  );
}
