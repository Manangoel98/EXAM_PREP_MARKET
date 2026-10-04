import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { RelatedContent, RELATED_CONTENT_GROUPS } from "@/components/landing/RelatedContent";
import { GuideH2, GuideH3, GuideTable, InLink, OfficialLink } from "@/components/guides/GuideBits";
import { MKT } from "@/lib/marketing-ui";
import { COLLEGE_BOARD } from "@/lib/sat-guides";
import type { Metadata } from "next";
import Link from "next/link";
import { marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, ArticleStructuredData, FAQStructuredData } from "@/lib/schema";
import { Calculator } from "lucide-react";

const canonical = marketingAbsoluteUrl("/sat-math");
const og = marketingAbsoluteUrl("/opengraph-image");

export const metadata: Metadata = {
  title: "SAT Math: Topics, Desmos, and Pacing (2026) | NomoExam",
  description:
    "SAT Math on the digital test: Algebra, Advanced Math, data, geometry, the built-in Desmos calculator, and how to pace 22 questions in 35 minutes.",
  alternates: { canonical },
  keywords: [
    "SAT math",
    "digital SAT math",
    "SAT math topics",
    "Desmos SAT",
    "SAT math practice",
    "SAT math formulas",
  ],
  openGraph: {
    title: "SAT Math: Topics, Desmos, and How to Pace Both Modules",
    description: "What the digital SAT Math section tests, and how to use the calculator without wasting time.",
    url: canonical,
    siteName: "NomoExam",
    type: "article",
    images: [{ url: og, width: 1200, height: 630, alt: "SAT Math guide for the digital SAT" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAT Math: Topics, Desmos, and Pacing",
    description: "The four math domains, Desmos, and module pacing on the digital SAT.",
    images: [og],
  },
};

const faqs = [
  {
    question: "How many questions are on SAT Math?",
    answer:
      "SAT Math has 44 questions in two modules. Each module has 22 questions and a 35-minute limit. That is 70 minutes for the section.",
  },
  {
    question: "Can you use a calculator on the whole SAT Math section?",
    answer:
      "Yes. The digital SAT allows a calculator on every math question. Bluebook includes Desmos. The old no-calculator section is gone.",
  },
  {
    question: "What are the SAT Math topics?",
    answer:
      "College Board groups SAT Math into Algebra, Advanced Math, Problem-Solving and Data Analysis, and Geometry and Trigonometry. Algebra and Advanced Math make up most of the section.",
  },
  {
    question: "Is Desmos allowed on the SAT?",
    answer:
      "Yes. The Desmos graphing calculator is built into the Bluebook testing app and can be used on every Math question. You do not need to bring a separate calculator, though an approved handheld calculator is still allowed.",
  },
  {
    question: "Are there grid-in questions on the digital SAT?",
    answer:
      "Yes. Some Math questions are student-produced responses. You type the answer instead of choosing A, B, C, or D. There is no penalty for a wrong answer, so you should still enter your best value.",
  },
  {
    question: "Does a harder second module lower your SAT Math score?",
    answer:
      "No. A harder Module 2 is how the section reaches the top of the 200–800 scale. The score is still 200 to 800 for Math. Routing you to the harder module is not a penalty.",
  },
  {
    question: "What math should I study first?",
    answer:
      "If your Math score is not already high, start with linear equations, systems, and functions. Those ideas show up across Algebra and Advanced Math, which carry most of the questions. Geometry is real, but it is a smaller share.",
  },
  {
    question: "How much time do I get per SAT Math question?",
    answer:
      "Each module gives 35 minutes for 22 questions, about 95 seconds per question if you spend the time evenly. Some questions should take less so the longer ones have room.",
  },
];

export default function SatMathPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "SAT Guides", url: marketingAbsoluteUrl("/guides") },
          { name: "SAT Math", url: canonical },
        ]}
      />
      <ArticleStructuredData
        title="SAT Math: Topics, Desmos, and How to Pace Both Modules (2026)"
        description="What digital SAT Math tests, how Desmos fits, and how to pace both modules."
        datePublished="2026-10-01"
        dateModified="2026-10-01"
      />
      <FAQStructuredData faqs={faqs} />
      <main>
        <article className={`${MKT.pageSection} pb-20 pt-28 md:pb-32 md:pt-36`}>
          <div className={`${MKT.container} mx-auto max-w-4xl`}>
            <div className="mb-8">
              <div className={`${MKT.badgeLight} mb-4`}>
                <Calculator className="h-4 w-4" />
                <span>SAT Math</span>
              </div>
              <h1 className={`${MKT.h1OnLight} mb-4`}>SAT Math: Topics, Desmos, and How to Pace Both Modules</h1>
              <p className="text-base font-medium text-neutral-600 md:text-lg">Last updated: October 1, 2026</p>
            </div>
            <div className="space-y-6 text-base font-medium leading-relaxed text-neutral-800 md:text-lg">
              <p>
                SAT Math is 44 questions in 70 minutes, split into two modules of 22 questions and 35 minutes each. Every question allows a calculator, including the Desmos graphing calculator built into Bluebook. The section score is 200 to 800. College Board sorts the questions into four domains: Algebra, Advanced Math, Problem-Solving and Data Analysis, and Geometry and Trigonometry. Algebra and Advanced Math are where most of the points are.
              </p>
              <p>
                The timing, the two-module structure, and how Module 2 changes difficulty are explained on the{" "}
                <InLink href="/digital-sat-format">digital SAT format</InLink> page. This page is about the math itself: what a question is asking, when Desmos helps, and how to move through a module without stalling on one item.
              </p>

              <GuideH2>What SAT Math actually tests</GuideH2>
              <p>
                The digital SAT does not ask you to recall a rare formula from a textbook chapter you have not opened since ninth grade. It asks whether you can set up a relationship, solve it, and read the result. A line, a system, a quadratic, a percent, a table, a triangle: the objects are familiar. The trap is usually the setup, not the arithmetic.
              </p>
              <p>
                College Board&apos;s own description of the section, on the{" "}
                <OfficialLink href={COLLEGE_BOARD.digital}>digital SAT overview</OfficialLink>, is the source for the structure below. Specification ranges move a question or two from form to form. They do not move the priority. If you are choosing what to study this week, Algebra and Advanced Math come first.
              </p>
              <GuideTable
                headers={["Domain", "What it looks like", "Rough share of the section"]}
                rows={[
                  ["Algebra", "Linear equations, systems, inequalities, linear functions", "About a third of the questions"],
                  ["Advanced Math", "Quadratics, polynomials, exponentials, nonlinear functions", "About a third of the questions"],
                  ["Problem-Solving and Data Analysis", "Ratios, percents, units, statistics, probability", "A smaller share"],
                  ["Geometry and Trigonometry", "Area, volume, lines, angles, triangles, right-triangle trig", "A smaller share"],
                ]}
              />
              <p>
                Those shares are why a student who &quot;does not like geometry&quot; can still raise a Math score a lot without living in a trig review. Geometry is on the test. It is not most of the test. A student whose Algebra is shaky will feel that on both modules, because linear reasoning shows up inside word problems that look like data questions.
              </p>

              <GuideH2>Algebra</GuideH2>
              <p>
                Algebra on the SAT is mostly lines. Solve a linear equation. Solve a system. Match a description to slope and intercept. Turn a sentence about a rate into an equation and then into a number. The arithmetic is usually short once the equation exists. Students lose the point while they are still translating.
              </p>
              <p>
                Take a sentence like this: a phone plan charges a fixed monthly fee plus a constant amount per gigabyte, and two different months are given as totals. That is a system, not a puzzle. One equation is the first month. The second equation is the second month. Subtract, and the fee drops out. If you instead plug both numbers into Desmos before you name the variables, you will graph something, but you will not know which intersection is the fee.
              </p>
              <GuideH3>How to work a linear question</GuideH3>
              <p>
                Name the unknown in words before you write a symbol. &quot;Fee&quot; and &quot;price per gigabyte&quot; are harder to mix up than x and y. Write the equation the way the sentence is ordered, then check units. Dollars on the left, dollars on the right. If one side is months and the other side is dollars, the equation is wrong even if the algebra that follows is clean.
              </p>
              <p>
                Inequalities use the same setup. The extra step is the direction of the sign when you multiply or divide by a negative, and the reading of the answer. &quot;At least&quot; includes the boundary. &quot;Fewer than&quot; does not. The SAT likes to offer the boundary value as a trap choice on multiple-choice items, so the last look is at the words, not at the algebra.
              </p>

              <GuideH2>Advanced Math</GuideH2>
              <p>
                Advanced Math is the nonlinear half: quadratics, factoring, the vertex, exponential growth, and functions defined by a rule or a graph. A lot of it is still Algebra wearing a curve. If you can solve a linear equation without freezing, a quadratic is the same discipline plus one extra tool, usually factoring or the quadratic formula, or a graph.
              </p>
              <p>
                A typical question gives a parabola in standard form and asks for the x-coordinate of the vertex, or for a value of a constant that makes the equation have one solution. You can complete the square. You can also graph it. Both are legitimate. The mistake is starting a five-line derivation when the question only asked which of four graphs matches the equation. Read the ask before you pick the method.
              </p>
              <p>
                Equivalent expressions are the quiet point-loser in this domain. The question shows an expression and four rewrites. You are not solving. You are matching. Expand or factor one piece and compare, or substitute a simple number for the variable in the original and in each choice. If only one choice gives the same number, that choice is the equivalent form. Pick a number that is not 0 or 1, because those hide multiplication errors.
              </p>

              <GuideH2>Problem-Solving and Data Analysis</GuideH2>
              <p>
                This domain is percents, ratios, unit conversion, mean and median, and the occasional probability. The math is middle-school math. The SAT version is longer in the reading. A table has four columns and the question wants a conditional percent: not &quot;what percent of everyone,&quot; but &quot;what percent of the people who already did X.&quot; The denominator is the smaller group. Most wrong answers use the grand total.
              </p>
              <p>
                Mean and median questions are the same kind of reading. If a set has an outlier, the mean moves and the median may not. If the question says the mean increased after one new value, you do not need a speech about averages. Write the old sum, add the new value, divide by the new count, and set that equal to the new mean. That is an equation. Solve it.
              </p>
              <p>
                Unit conversion is where rushed students donate points. Miles per hour into feet per second has two conversions, not one. Write the units in a chain and cancel. If the units that remain are not the units the question asked for, the number is not the answer yet, even if it is one of the choices.
              </p>

              <GuideH2>Geometry and Trigonometry</GuideH2>
              <p>
                Lines, angles, triangles, circles, area, volume, and right-triangle trigonometry. The formulas you are expected to know are the standard ones: area of a triangle, circumference, the Pythagorean theorem, sine, cosine, tangent for acute angles in a right triangle. The test also gives a reference sheet inside the section for a set of geometry formulas. Use it. Memorizing the volume of a cone on test day is a worse use of attention than reading which radius the diagram actually labels.
              </p>
              <p>
                Similar triangles and parallel lines produce the multi-step geometry items. Mark the diagram. If two angles are equal, write the same tick on both before you chase a side length. A lot of &quot;hard&quot; geometry is one similar triangle that nobody marked.
              </p>
              <p>
                Trigonometry on this test is mostly a ratio in a right triangle, or an angle relationship, not a unit-circle identity marathon. If you know opposite, adjacent, and hypotenuse, and you know which angle you are standing at, you can answer the item. Label the angle the question names. The wrong ratio is the usual miss, not the wrong decimal.
              </p>

              <GuideH2>Desmos on the SAT</GuideH2>
              <p>
                Desmos is part of the test, not a hack. Bluebook opens a graphing calculator on Math. You can plot a line, plot a parabola, trace an intersection, and evaluate a function. For a system, graphing both equations and clicking the intersection is often faster than elimination, and it is fully allowed. For a quadratic, the vertex and the roots are visible if you set a sensible window.
              </p>
              <p>
                It is slower when the question is not a graph. A percent increase, a mean, or a one-step linear solve does not need a coordinate plane. Opening Desmos, typing the equation, and adjusting the window can cost most of the 90 seconds that question was worth. The skill is knowing which questions are graph questions.
              </p>
              <GuideTable
                headers={["Use Desmos", "Skip Desmos"]}
                rows={[
                  ["Systems: graph both lines and read the intersection", "One-step or two-step linear equations"],
                  ["Quadratics: roots, vertex, number of solutions", "Percent, ratio, and unit conversions"],
                  ["Checking which expression matches a graph", "Mean, median, and a short table percent"],
                  ["Testing a constant by sliding a value", "A right triangle you can finish with one ratio"],
                ]}
              />
              <p>
                Practice Desmos inside a timed module, not as a separate toy. The buttons you need are the ones you can find in five seconds. If you only meet Desmos on test day, you will spend Module 1 learning the tool and Module 2 paying for it. A walkthrough of the full testing app belongs with the{" "}
                <InLink href="/digital-sat-format">format guide</InLink>, because the calculator sits inside Bluebook next to the timer and the reference sheet.
              </p>

              <GuideH2>Multiple choice and student-produced responses</GuideH2>
              <p>
                Most Math questions are multiple choice. Some ask you to type the answer. Those student-produced responses have no choices to reverse-engineer. You either produce the value or you do not. There is no penalty for a wrong entry, so a blank box is the only answer that cannot be right. If you have a value and ten seconds, enter it.
              </p>
              <p>
                On multiple choice, the choices are information. If they are spread far apart, estimation is enough. If they are close, you need the exact path. Plug a choice back in when the algebra has already gotten messy and the question is &quot;which value works.&quot; That is not cheating the test. It is using the form the test gave you.
              </p>
              <p>
                Watch the form of the answer the question requests. A fraction in lowest terms, a decimal, an integer degree, a rounded percent. A correct quantity in the wrong form is a wrong answer on a student-produced item. Before you leave the box, read the stem one more time and check the units.
              </p>

              <GuideH2>Pacing both modules</GuideH2>
              <p>
                Thirty-five minutes and twenty-two questions is about a minute and a half each if you spend the clock evenly. You should not. The first dozen questions in a module are often the faster ones. Do them cleanly and bank time. When a question has already taken two minutes and you do not have a next step, mark it and move. A marked question can be right later. A blank stretch at the end of the module cannot.
              </p>
              <p>
                Module 2 is a different mix if Module 1 went well. The harder module has more items that need a setup, not more items that need a clever trick. The pace is the same 35 minutes. Students who &quot;save energy&quot; in Module 1 and rush the easy points often get the harder module anyway and then have no time in it. Accuracy on Module 1 is the route. Speed on Module 1 is how you create that accuracy, by not donating two minutes to a single early item.
              </p>
              <p>
                The section is adaptive between modules, not between questions. You will not be punished mid-module for one miss. Finish the module. Then the test chooses the next one. A plain-language account of that routing is in the format guide, and it matters here because students sometimes stop trying in Module 1 once they think they have &quot;already missed too many.&quot; You cannot see the route. You can see the question in front of you.
              </p>

              <GuideH2>What to study first</GuideH2>
              <p>
                If a practice Math score is below about 600, the fastest points are linear equations, systems, percents, and the meaning of slope. Those show up constantly, and they are finite skills. If the score is already in the mid-600s, the next block is quadratics and functions: vertex, equivalent forms, and exponential rules. Geometry is a targeted review after those, not the opening week, unless a diagnostic says triangles are the actual hole.
              </p>
              <p>
                A diagnostic only helps if you sort the misses. &quot;I got a 580&quot; is not a plan. &quot;I missed four linear word problems and two percent questions&quot; is a plan. The{" "}
                <InLink href="/how-to-improve-sat-score-200-points">guide to a 200-point gain</InLink> is about that loop for the whole test. For Math alone, the loop is the same: one timed module, a list of miss types, then drills on two types, then another timed module.
              </p>
              <p>
                Do not build the week from a random worksheet. Build it from the domain you actually miss. Then take the questions under the module clock at least twice a week. Untimed accuracy and timed accuracy are different skills, and the SAT only pays for the second one.
              </p>

              <GuideH2>Mistakes that cost a Math score</GuideH2>
              <p>
                Solving for the wrong variable. The stem asks for the fee, and the last line of the work is the price per gigabyte, which is also a choice. Circle the noun in the question before you start.
              </p>
              <p>
                Sign errors on inequalities, and forgetting to flip the sign. If the choice you want is there and so is its opposite, the sign is the thing to recheck, not the arithmetic from scratch.
              </p>
              <p>
                Using the wrong denominator on a percent in a table. Say the group out loud: &quot;percent of the juniors,&quot; not &quot;percent of the school.&quot;
              </p>
              <p>
                Opening Desmos for a question that was one line of algebra, then running out of time on the questions that actually needed a graph.
              </p>
              <p>
                Leaving student-produced responses blank. A guessed integer that might be right is worth more than an empty box, because empty is certainly wrong and there is no penalty.
              </p>

              <GuideH2>A week of SAT Math, in practice</GuideH2>
              <p>
                Four sessions is enough if they are specific. Two sessions are content: one domain, a small set of questions, and a written note on the miss. Two sessions are timing: a 22-question module with the calculator you will actually use, then a review the same day. Review means rewriting the setup of each miss, not glancing at the answer key and nodding.
              </p>
              <p>
                Put the timed module on a device, not on paper, if the real test is digital. The scroll, the mark-for-review button, and Desmos are part of the task. A perfect paper set that you cannot finish inside Bluebook is a different exam. The{" "}
                <InLink href="/sat-study-plan">SAT study plan</InLink> shows how those Math sessions sit next to Reading and Writing across a longer calendar, and the{" "}
                <InLink href="/how-to-prepare-for-sat">preparation guide</InLink> covers the rest of the week.
              </p>

              <GuideH2>SAT Math questions</GuideH2>
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
                Section length, module counts, calculator policy, and the four domains come from College Board&apos;s{" "}
                <OfficialLink href={COLLEGE_BOARD.digital}>digital SAT</OfficialLink> description and the{" "}
                <OfficialLink href={COLLEGE_BOARD.sat}>SAT Suite</OfficialLink> pages. Scoring is still 200 to 800 for Math and 400 to 1600 overall, which College Board explains on its{" "}
                <OfficialLink href={COLLEGE_BOARD.scores}>scores</OfficialLink> page. This guide does not cite prep companies. If a number is not on College Board, it is not here.
              </p>
              <p>
                When you know which domain is costing points, the{" "}
                <InLink href="/what-is-a-good-sat-score">good SAT score</InLink> page is how you decide whether the Math number is high enough for your colleges, and{" "}
                <InLink href="/pricing">pricing</InLink> is where a full-length digital practice test lives if you want the modules timed for real.
              </p>
              <RelatedContent links={RELATED_CONTENT_GROUPS.satPrep.filter((link) => link.href !== "/sat-math")} />
            </div>
          </div>
        </article>
      </main>
    </MarketingPageShell>
  );
}
