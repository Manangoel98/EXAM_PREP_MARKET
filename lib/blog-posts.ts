/**
 * Blog content for the NomoExam SAT blog.
 * Topics are chosen from real student search demand on r/SAT and r/digitalSATs
 * (Bluebook score gaps, hard Module 2 questions, one-month plans, vocab, hard
 * practice material, and Desmos technique).
 *
 * Body blocks render in app/blog/[slug]/page.tsx. Paragraph text supports
 * inline markdown links, rendered with react-markdown.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "cta"; text: string; href: string; label: string };

export type BlogFaq = { question: string; answer: string };

export type BlogPost = {
  slug: string;
  /** On-page H1 */
  title: string;
  /** <title> tag value (before the automatic " | NomoExam" suffix) */
  metaTitle: string;
  /** Meta description (~150-160 chars) */
  description: string;
  /** Short excerpt shown on the blog index card */
  excerpt: string;
  keywords: string[];
  /** ISO publish date */
  date: string;
  /** ISO last-updated date, when later than publish */
  updated?: string;
  author: string;
  category: string;
  readingTime: number;
  faqs: BlogFaq[];
  body: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-bluebook-practice-scores-are-higher-than-real-sat",
    title: "Why Your Bluebook Practice Score Is Higher Than Your Real SAT Score",
    metaTitle: "Bluebook vs Real SAT: Why Practice Scores Run High (2026)",
    description:
      "Scoring high on Bluebook practice tests but lower on the real SAT? Learn why practice scores run 50–120 points above test day and the fixes that close the gap.",
    excerpt:
      "Bluebook practice tests routinely run 50–120 points above real results. Here is what actually causes the drop — and the four fixes that close it.",
    keywords: [
      "bluebook practice test vs real sat",
      "why is my sat score lower than practice",
      "bluebook practice test accuracy",
      "sat practice test score drop",
      "digital sat score discrepancy",
    ],
    date: "2026-09-28",
    author: "NomoExam Team",
    category: "SAT Scores",
    readingTime: 9,
    faqs: [
      {
        question: "Are Bluebook practice tests accurate predictors of the real SAT?",
        answer:
          "They are directionally accurate but run somewhat easy. Most students see their real score land between 20 and 120 points below their Bluebook average, depending on which practice tests they used and how realistic their practice conditions were. Bluebook is still the best free predictor available — the fix is not to distrust it, but to practice under stricter conditions than the test requires.",
      },
      {
        question: "Which Bluebook practice tests are closest to the real SAT?",
        answer:
          "Student consensus in 2026 points to the later tests in the set — 6, 7, and 11 — as the closest in difficulty to recent real exams. The earlier tests tend to be the most generous. Whichever you use, average at least three tests before treating the number as your baseline.",
      },
      {
        question: "How many points lower is the real SAT than practice tests?",
        answer:
          "There is no official number, but the pattern reported by students and tutors is a 50–100 point drop for typical test-takers, and up to 120 points for students who practiced with untimed sections, paused timers, or took tests at home in one comfortable sitting. Students who took every practice test fully timed, in one sitting, on the Bluebook app itself see the smallest gaps.",
      },
      {
        question: "Does the adaptive module format make the real SAT harder?",
        answer:
          "The format is identical in Bluebook, so the mechanics are not the surprise. What changes on test day is that Module 2 feels harder because you are solving it under real pressure, and the last few questions in each module are designed to be inaccessible to most students. If you have never practiced recovering from a string of hard questions, that experience alone costs points.",
      },
    ],
    body: [
      {
        type: "p",
        text: "You scored 1520 on Bluebook practice test 5. Then 1550 on test 6. You walked into the test center reasonably confident, and walked out with a 1440. If this is you, you are not an outlier — you are the most common story on r/SAT. Threads titled some version of [\"are the Bluebook practice tests easier than the real test?\"](https://www.reddit.com/r/Sat/comments/1rqfuy3/) appear weekly, and the answers converge on the same pattern: practice scores run high, the real score comes in lower, and most students never find out why.",
      },
      {
        type: "p",
        text: "This guide breaks down the five actual causes of the gap, in order of how many points each one typically costs, and then gives you the four fixes. None of them involve buying anything. All of them involve changing how you practice, starting now.",
      },
      { type: "h2", text: "Cause 1: Your practice conditions were softer than test day" },
      {
        type: "p",
        text: "This is the biggest cause, and the one nobody wants to hear. Most students take Bluebook tests at home, at their desk, with their phone face-down (or not), water within reach, a bathroom two doors away, and — critically — the option to take the two sections at slightly different times. Every one of those comforts is free points.",
      },
      {
        type: "p",
        text: "The real test gives you a proctor, a hard start time, an unfamiliar chair, other people typing and coughing, a check-in process that burns adrenaline before you answer a single question, and a timer that does not care that you want a break. Students who took all eight practice tests in one uninterrupted sitting on the Bluebook app see the smallest practice-to-real gaps. Students who paused, split sessions, or tested at midnight see the largest. The test content did not change; the conditions did.",
      },
      { type: "h3", text: "What to do about it" },
      {
        type: "ul",
        items: [
          "Take every remaining practice test in one sitting, timed, on the actual Bluebook app — not a printed PDF or a third-party site.",
          "Start at 8 a.m. on a weekend at least once, because your real test almost certainly starts in the morning.",
          "Do the full check-in ritual: no phone during breaks, only the approved calculator and snacks.",
          "If you have scored yourself on paused tests, throw those scores out of your average. They are not data.",
        ],
      },
      { type: "h2", text: "Cause 2: Selection effect — you remember the tests that went well" },
      {
        type: "p",
        text: "Ask a student what they score on practice tests and they will usually quote their best test, not their average. If you took tests 1 through 7 and scored 1380, 1420, 1470, 1450, 1520, 1550, 1530, your honest practice level is around 1480 — not the 1550 you have been telling people, and not the number your brain uses when it sets expectations.",
      },
      {
        type: "p",
        text: "The same selection effect applies to which questions you remember. You remember the ones you got right. On test day, the last five questions of each module are genuinely hard, and if your practice routine quietly let you skip or rush them, test day is the first time you have ever had to face them with the clock running.",
      },
      { type: "h2", text: "Cause 3: The last questions in each module are doing their job" },
      {
        type: "p",
        text: "The digital SAT is module-adaptive: Module 1 routes you into an easier or harder Module 2, and within every module the final questions are calibrated so that most students miss them. This is by design — those questions separate a 1500 from a 1550. On the Math side, the last five questions of a harder Module 2 routinely involve multi-step setup, quadratic reasoning, or dense word problems that are slow even when you know the method.",
      },
      {
        type: "p",
        text: "If your practice routine drilled medium questions and reviewed answers, you have trained for the first 17 questions of each module. The gap opens in the last five. Our guide to the [hardest Digital SAT Math Module 2 questions](/blog/hardest-digital-sat-math-module-2-questions) walks through those question types specifically.",
      },
      { type: "h2", text: "Cause 4: Pacing fatigue in the second half of each section" },
      {
        type: "p",
        text: "Reading and Writing is 54 questions in 64 minutes and Math is 44 in 70, but the fatigue cost is not linear — accuracy in the back half of each module drops faster than in the front half, because you are solving progressively harder questions with progressively less energy. At home you barely notice this. In a test center, after a 5:30 a.m. alarm and a check-in line, question 20 of Module 2 arrives with your tank already low.",
      },
      {
        type: "p",
        text: "The fix is boring: full-length practice, always. Section-by-section practice, which feels efficient, trains exactly the wrong energy profile. If you only have three weekends left, do three full tests rather than six half tests.",
      },
      { type: "h2", text: "Cause 5: Test-day execution — misreads and the compounding effect" },
      {
        type: "p",
        text: "Finally, there is plain execution noise. Misreading one word in a question stem, answering the question you expected instead of the one asked, or losing 40 seconds to a panic spiral costs points that never show up at home. On an adaptive test these errors compound: too many wrong answers early in Module 1 route you to the easier Module 2, which caps your ceiling for the whole section. That is why one bad Reading module can drag a Math-strong student's composite down by 40 points.",
      },
      { type: "h2", text: "The four fixes, in order of impact" },
      {
        type: "ol",
        items: [
          "Recalibrate your baseline. Average your last three full, timed, uninterrupted Bluebook tests. That average — not your best score — is your real number. Everything downstream depends on planning against it.",
          "Harden your conditions for the remaining tests. One sitting, morning start, Bluebook app, no pauses. If your score holds under those rules, the gap was conditions, and it will mostly disappear.",
          "Drill the back of the module. Spend your last two weeks on hard-question sets — the final five questions of each module, plus [harder-than-Bluebook practice material](/blog/where-to-find-sat-practice-questions-harder-than-bluebook) — so test-day difficulty feels familiar rather than alarming.",
          "Manage the miss-streak. Practice a recovery script: when you hit two hard questions in a row, take a breath, guess strategically, flag it, and move. Protecting the rest of the module from a spiral is worth more than any single hard question is worth answering.",
        ],
      },
      {
        type: "p",
        text: "One more framing that helps: the drop is not evidence that the practice tests lied to you. It is evidence that your preparation environment was gentler than the exam environment, and that is fixable in a way that content gaps are not. Students who close the gap almost always do it by making practice harder than the test — never the other way around.",
      },
      {
        type: "cta",
        text: "NomoExam's full-length practice tests are timed, module-adaptive, and scored against your real baseline — so test day is the easier environment.",
        href: "/try-free",
        label: "Try a full-length test free",
      },
      { type: "h2", text: "What a realistic score expectation looks like" },
      {
        type: "p",
        text: "After the fixes above, here is a fair rule of thumb for the weeks before your test: your expected real score is your strict-conditions practice average, minus 0 to 30 points for execution noise. If your strict average is 1450, planning for a 1420–1450 outcome is realistic and a 1490 outcome is a good-luck bonus. Planning around your best casual practice score is how students end up devastated by an objectively good result — a 1380 real score after a soft-conditions 1500 average is a 100-point gap, but a 1380 after a strict 1420 average is right on the line, and worth knowing in advance.",
      },
      {
        type: "p",
        text: "If you are deciding whether to retake, the decision rule is simple: if your real score came in below your strict-conditions average minus 40 points, something went wrong on test day and a retake is likely to recover it. If it landed inside the expected band, a retake needs new preparation — not just another attempt. Our guides on [what makes a good SAT score](/what-is-a-good-sat-score) and [improving your score by 200 points](/how-to-improve-sat-score-200-points) cover what that preparation should look like.",
      },
    ],
  },
  {
    slug: "hardest-digital-sat-math-module-2-questions",
    title: "The Hardest Digital SAT Math Module 2 Questions — and How to Attack Them",
    metaTitle: "Hardest Digital SAT Math Module 2 Questions (2026)",
    description:
      "The final questions of SAT Math Module 2 are built to be missed. See the hardest question types on the digital SAT, worked strategies, and how to drill them.",
    excerpt:
      "Every module ends with a wall of questions designed to separate a 1450 from a 1550. Here are the question types behind that wall and the setups that beat them.",
    keywords: [
      "hardest digital sat math questions",
      "sat math module 2 hard questions",
      "difficult sat math problems",
      "sat math last 5 questions",
      "digital sat math question bank hard",
    ],
    date: "2026-09-24",
    author: "NomoExam Team",
    category: "SAT Math",
    readingTime: 10,
    faqs: [
      {
        question: "Why are the last questions of SAT Math Module 2 so hard?",
        answer:
          "The digital SAT orders questions roughly by difficulty within each module, and the final questions are calibrated so most test-takers miss them. They exist to separate top scores, so they combine multiple concepts in one stem, require careful setup before any math happens, and are written to be time-expensive even for students who know the method.",
      },
      {
        question: "Do I need to get the hardest Module 2 questions right?",
        answer:
          "No. A 1500 leaves several of the hardest questions on the table. The strategic goal is to secure everything up to the final few questions, take disciplined shots at the last ones, and never let one hard question eat time that belongs to easier ones. Chasing perfection on the last five questions costs more points in pacing errors than it recovers.",
      },
      {
        question: "Is Desmos allowed on the hard SAT Math questions?",
        answer:
          "Yes — the built-in Desmos calculator is available on every Math question, including the hardest ones. Many of the hardest questions (systems with nonlinear terms, absolute-value equations, exponential growth comparisons) are dramatically faster when you translate the algebra into a graph and read intersections off the screen.",
      },
      {
        question: "Where can I practice questions as hard as the real Module 2?",
        answer:
          "The College Board question bank lets you filter by domain and difficulty, and the harder tier of its questions matches real Module 2 endings. Past-paper SAT math sections, question collections shared in student communities, and prep platforms that tag difficulty explicitly are the other main sources. A full rundown is in our guide to finding harder-than-Bluebook practice questions.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Every digital SAT Math section ends the same way: a cluster of questions at the back of Module 2 where the correct answer feels like a rumor. Students who post their tests online — including a [1600-scorer's AMA](https://www.reddit.com/r/Sat/comments/1faomtb/i_got_a_1600_ask_me_anything) that specifically called out \"the last 5 questions of Math Module 2\" — all describe the same experience. These questions are not buggy or unfair. They are doing exactly what they were built to do: separate a 1450 from a 1550.",
      },
      {
        type: "p",
        text: "The good news is that the wall is made of a small number of recurring question types. Once you can name them, you can drill them, and a question that took four panicked minutes in March takes ninety calm seconds in May. Here are the six types that dominate the back of the module.",
      },
      { type: "h2", text: "Type 1: The dense word problem with a hidden two-step setup" },
      {
        type: "p",
        text: "These look like story problems about cell populations, ant colonies, tank volumes, or savings accounts, and the difficulty is not the math — it is the translation. A representative example from a real test administration: an ant colony grows by a percentage each week while a percentage is removed weekly, and the question asks for the net change after several weeks. Students who jump straight to computing get lost; students who spend thirty seconds writing the recurrence get an easy problem.",
      },
      { type: "h3", text: "The attack" },
      {
        type: "ul",
        items: [
          "Before computing anything, write down the model: what the quantity is at time 0, and what operation happens each step.",
          "Translate percentage language carefully: 'grows by 12%' is multiply by 1.12; '12% is removed' is multiply by 0.88. Mixing these up is the single most common error.",
          "For 'after n steps' questions, look for a pattern after computing two or three steps rather than brute-forcing all of them.",
        ],
      },
      { type: "h2", text: "Type 2: Systems mixing linear and nonlinear equations" },
      {
        type: "p",
        text: "A line and a parabola, a line and an absolute value, or two quadratics, with a question about how many solutions exist or where they intersect. The algebraic route — substitution into a quadratic, then the discriminant — works but is slow and error-prone. This is the question type where [Desmos mastery](/blog/desmos-calculator-tricks-for-sat-math) pays for the entire prep period: type both equations, count intersections, done.",
      },
      {
        type: "p",
        text: "When the question instead tells you a point like (k, 0) lies on the graph, plot the curve and slide k — or use the discriminant logic: a tangent line means the discriminant of the combined equation is exactly zero. Recognizing that 'touches at exactly one point' means 'discriminant = 0' turns a two-minute algebra problem into a ten-second one.",
      },
      { type: "h2", text: "Type 3: Functions defined by tables, recursion, or composition" },
      {
        type: "p",
        text: "The stem defines a function through a table, defines f and g and asks about f(g(x)) or g(f(x)), or defines a function recursively (each term built from the previous one). The trap is working backwards: students try to solve for x abstractly when the fastest route is often to evaluate the few candidate answers directly. On a multiple-choice test with concrete options, plugging in is not a cop-out — it is the intended fast path.",
      },
      { type: "h2", text: "Type 4: Exponential growth and decay comparisons" },
      {
        type: "p",
        text: "Two populations modeled by different exponential expressions, and the question asks when one exceeds the other, or by how much they differ at a given time. Algebraically this can mean logarithms, which the SAT keeps off-syllabus as a solving tool — which is the hint. If the question is answerable without logs, it is answerable by evaluating both models at the answer choices, or by graphing both curves in Desmos and reading the crossover point.",
      },
      { type: "h2", text: "Type 5: Geometry with an unhelpful diagram or no diagram at all" },
      {
        type: "p",
        text: "Circle theorems, similar triangles embedded inside other figures, or three-dimensional problems where the key move is drawing the cross-section yourself. The common thread is that the figure, if provided, is deliberately not drawn to scale, and if not provided, the first step is to draw it. Students lose these questions by reasoning about the picture in their head instead of putting a marked-up sketch on paper.",
      },
      { type: "h2", text: "Type 6: The absolute-value or inequality with a twist" },
      {
        type: "p",
        text: "Absolute value equations with parameters (for how many values of k does the equation have exactly two solutions?), or inequalities where the answer is a range and the choices are ranges. The parameterized versions are best handled graphically: plot both sides as functions and slide the parameter. Counting solutions becomes counting intersections, which is visual and fast.",
      },
      { type: "h2", text: "The time budget that makes the wall survivable" },
      {
        type: "p",
        text: "Math Module 2 gives you 35 minutes for 22 questions — about 95 seconds each on average. The front of the module should run well under that pace, banking time for the back. A practical budget: questions 1–15 at 60–75 seconds each, questions 16–20 at 90–110 seconds, and the final 2–3 questions get whatever remains, with a hard rule that no single question owns more than three minutes. Mark, skip, and return is not a defeat; it is the tactic.",
      },
      {
        type: "p",
        text: "One more thing students miss: a harder Module 2 does not hurt your score. The [adaptive scoring](/digital-sat-format) scales a hard Module 2 more generously — you can miss more questions there and still land a top score than you could on the easier routing. So the correct emotional response to a brutal Module 2 is relief: it means Module 1 went well, and the ceiling is still high.",
      },
      {
        type: "cta",
        text: "NomoExam drills are tagged by difficulty and domain, so you can train exactly the back-of-module question types — with step-by-step explanations when you miss.",
        href: "/try-free",
        label: "Drill hard Math questions free",
      },
      { type: "h2", text: "A two-week drill plan for the hard questions" },
      {
        type: "ol",
        items: [
          "Days 1–3: Take one full-length test and log every miss from the back half of each Math module. Sort your misses into the six types above. Your personal wall is usually two types, not six.",
          "Days 4–8: Drill only your top two types, 10 questions per day, untimed at first. Write the attack pattern for each type on one card and read it before each session.",
          "Days 9–12: Same drills, now timed — 95 seconds per question, no exceptions. The skill you are building is recognition speed: seeing the type within the first read of the stem.",
          "Days 13–14: One more full-length test under strict conditions. Compare your back-of-module accuracy to the first test. That delta, not the total score, is the number that tells you whether the wall is down.",
        ],
      },
      {
        type: "p",
        text: "For the underlying content — every domain, Desmos technique, and pacing rule — the full [SAT Math guide](/sat-math) covers the section from the ground up, and our guide on [finding harder-than-Bluebook practice material](/blog/where-to-find-sat-practice-questions-harder-than-bluebook) covers where to get unlimited questions at this difficulty.",
      },
    ],
  },
  {
    slug: "one-month-digital-sat-study-plan",
    title: "The One-Month Digital SAT Study Plan That Actually Works",
    metaTitle: "One-Month Digital SAT Study Plan That Works (2026)",
    description:
      "A realistic 4-week digital SAT study plan built from what 1550+ scorers actually did: baseline testing, grammar and Desmos fast wins, weak-point drilling, and full-length tests.",
    excerpt:
      "\"Can I improve my SAT score in one month?\" — yes, if you spend the month on the right things. A week-by-week plan built from what top scorers actually did.",
    keywords: [
      "one month sat study plan",
      "sat study plan 4 weeks",
      "how to study for sat in a month",
      "digital sat study schedule",
      "sat cram plan",
    ],
    date: "2026-09-20",
    author: "NomoExam Team",
    category: "SAT Strategy",
    readingTime: 9,
    faqs: [
      {
        question: "Can you realistically improve your SAT score in one month?",
        answer:
          "Yes, with focus. Students routinely report 100–150 point improvements in a month, because one month is enough time to fix pacing, grammar, and calculator technique — the fastest-scoring levers. What one month is not enough for is rebuilding reading comprehension from scratch, so the plan prioritizes the highest-yield work rather than trying to cover everything.",
      },
      {
        question: "How many hours a week should I study for the SAT in one month?",
        answer:
          "Plan for 10–15 focused hours per week: roughly 90 minutes on weekdays and one full-length practice test each weekend. More hours help only if they are drilling weak areas — rereading notes or passively watching videos does not count toward the number.",
      },
      {
        question: "What should I study first with only a month left?",
        answer:
          "Start with a full-length diagnostic test, then spend the first week on the two consensus fast wins: SAT grammar rules (which are a short, finite list) and Desmos calculator technique. Both reliably convert to points within days, which buys confidence and score room for the harder reading and algebra work in weeks two and three.",
      },
      {
        question: "How many practice tests should I take in the last month?",
        answer:
          "Three to four full-length tests — roughly one per week — each taken in one sitting under strict timed conditions, each followed by a review session longer than the test itself. Reviewing your misses is where the improvement happens; the test only locates it.",
      },
    ],
    body: [
      {
        type: "p",
        text: "The one-month SAT question shows up constantly — [\"timetable for one month prep\"](https://www.reddit.com/r/Sat/comments/1s9wjfg/), [\"one month study plan\"](https://www.reddit.com/r/Sat/comments/1fxg33h/) — and the honest answer is that one month is enough for a real gain, but only if you refuse to study everything. A month spent evenly across all SAT content produces a small bump. A month spent ruthlessly on the highest-yield items produces the 100–150 point jumps that students like the [June 2026 test-taker who went 1340 → 1470](https://www.reddit.com/r/Sat/comments/1ty7xxq/) report.",
      },
      {
        type: "p",
        text: "This plan is built from what 1550+ scorers consistently say they did: official practice tests every two weeks ramping to weekly, grammar and Desmos as fast wins, and weak-point drilling instead of content review. It assumes 10–15 hours a week. If you have more, add drilling, not reading.",
      },
      { type: "h2", text: "Before Week 1: Take a real diagnostic" },
      {
        type: "p",
        text: "Take one full-length Bluebook test, in one sitting, timed, before you study anything. You need a true baseline and a miss list — the actual questions you got wrong, sorted by section and domain. Every decision in the four weeks below flows from that miss list. Skipping the diagnostic is the single most common way students waste a month.",
      },
      { type: "h2", text: "Week 1: The fast wins — grammar and Desmos" },
      {
        type: "p",
        text: "The digital SAT's two fastest point-conversions are both mechanical, and both are learnable in days:",
      },
      {
        type: "ul",
        items: [
          "SAT grammar is a short, closed rule set: subject-verb agreement, verb tense, pronouns, modifiers, punctuation (especially the semicolon and comma-splice rules), and boundaries between clauses. It is the only part of the SAT where the entire rulebook fits on one page, and grammar questions are a large, reliable share of the Writing section. Learn the rules, drill 20–30 questions a day, and watch the Writing score move within the week.",
          "Desmos technique is the Math equivalent. Most students use the calculator as a checking tool when it should be a solving tool: solving equations by graphing both sides, counting system solutions visually, evaluating functions from a table, using sliders for parameter questions. Two or three hours of deliberate Desmos practice converts directly into time saved on every subsequent Math question — the techniques are in our [Desmos tricks guide](/blog/desmos-calculator-tricks-for-sat-math).",
        ],
      },
      {
        type: "p",
        text: "Alongside these, do your first set of mixed Reading drills — not for score, just to re-engage the comprehension muscle. The point of Week 1 is to bank points fast; Reading is a slower compounding asset and gets its own weeks.",
      },
      { type: "h2", text: "Week 2: Your weak domain, attacked" },
      {
        type: "p",
        text: "Open the diagnostic miss list and pick your single weakest domain — for most students it is one of: algebraic word problems, craft and structure in Reading (words-in-context and inference), or expression of ideas beyond basic grammar. Spend the week there: learn the underlying approach, then drill 15–20 questions a day from that domain only, reviewing every miss until you can articulate why the right answer is right and why your wrong answer was designed to tempt you.",
      },
      {
        type: "p",
        text: "That last sentence is the actual method. Review is the workout; the questions are just the weights. A missed question you fully understand is worth five questions you got right on autopilot.",
      },
      { type: "h2", text: "Week 3: Second practice test, then adapt" },
      {
        type: "p",
        text: "Take your second full-length test under strict conditions — one sitting, morning, no pauses (see our guide on [why practice scores run high](/blog/why-bluebook-practice-scores-are-higher-than-real-sat) for why strict conditions matter). Compare against the diagnostic. Two outcomes are common:",
      },
      {
        type: "ul",
        items: [
          "The weak domain improved and something else is now the bottleneck — great, Week 3's second half targets the new bottleneck the same way Week 2 did.",
          "The score barely moved despite better drilling accuracy — this almost always means pacing, not knowledge. You are getting questions right in practice but running out of time. Spend the rest of the week on timed sets at 90 seconds per question.",
        ],
      },
      { type: "h2", text: "Week 4: Taper, test, tune" },
      {
        type: "p",
        text: "Take your third full-length test early in the week. Then three light days: redo your logged misses (not new questions), reread your own error log, and rehearse your pacing plan for each module. The day before the test, do nothing harder than a few easy questions for confidence, prepare your admission ticket and calculator, and sleep. Cramming the night before trades real consolidation for fake productivity.",
      },
      { type: "h2", text: "What NOT to do with one month" },
      {
        type: "ul",
        items: [
          "Do not memorize vocabulary lists. The digital SAT tests words-in-context — see our guide on [whether vocabulary still matters](/blog/does-the-digital-sat-have-vocabulary) — and rote lists are the lowest-yield hour you can spend.",
          "Do not buy three new prep books. One good question source drilled thoroughly beats three skimmed.",
          "Do not take practice tests without reviewing them. A test plus zero review is entertainment.",
          "Do not study section-by-section only. Full-length tests train the fatigue profile you will actually face on test day.",
        ],
      },
      {
        type: "cta",
        text: "NomoExam builds this exact structure for you — a daily plan from your test date, difficulty-tagged drills, and full-length adaptive tests.",
        href: "/try-free",
        label: "Start the free plan",
      },
      { type: "h2", text: "If you have less than a month" },
      {
        type: "p",
        text: "With two weeks, keep the same skeleton: diagnostic, then Week 1's fast wins compressed into four days, one weak-domain week, and one test-plus-taper week. With one week, do a diagnostic, one fast-win push (grammar plus Desmos), one full test with a long review, and rest. The priorities never change — only how many priorities fit. The longer versions of this schedule are in our [best SAT study schedule](/best-sat-study-schedule) and [three-month study plan](/sat-study-plan) guides.",
      },
    ],
  },
  {
    slug: "does-the-digital-sat-have-vocabulary",
    title: "Do You Still Need to Study Vocabulary for the Digital SAT?",
    metaTitle: "Does the Digital SAT Have Vocabulary? (2026 Guide)",
    description:
      "The digital SAT dropped obscure vocabulary lists but still tests words in context. Here's what changed, which words still matter, and how to study vocab efficiently.",
    excerpt:
      "Rote vocab lists are dead on the digital SAT — but words-in-context questions still reward a smarter kind of vocabulary prep. Here's the difference.",
    keywords: [
      "does the digital sat have vocabulary",
      "digital sat vocabulary",
      "sat words in context",
      "sat vocab 2026",
      "how to study sat vocabulary",
    ],
    date: "2026-09-16",
    author: "NomoExam Team",
    category: "SAT Reading and Writing",
    readingTime: 7,
    faqs: [
      {
        question: "Does the digital SAT still test vocabulary?",
        answer:
          "Yes, but differently. The old SAT tested obscure words in isolation (sentence completions); the digital SAT tests common-but-tricky academic words inside short reading passages. You will not be asked for a definition out of context — you will be asked which word best completes a sentence whose surrounding text determines the meaning.",
      },
      {
        question: "Should I memorize vocabulary lists for the 2026 SAT?",
        answer:
          "Long lists of rare words are the lowest-yield SAT prep there is now. What does work: learning the meanings and connotations of mid-level academic words that appear across news and nonfiction writing (words like 'undercut,' 'novel' as an adjective, 'temper' as a verb), and practicing the skill of predicting a blank's meaning from context before looking at the choices.",
      },
      {
        question: "How many vocabulary questions are on the digital SAT?",
        answer:
          "Words-in-context questions make up a meaningful share of the Craft and Structure domain in Reading and Writing — typically several questions per module out of 27. They are one of the more improveable question types because both the underlying word knowledge and the context-prediction technique respond quickly to practice.",
      },
      {
        question: "What is the best way to learn SAT vocabulary words in context?",
        answer:
          "Read challenging nonfiction and look up unknown words in the moment, keep the lookups in a spaced-repetition deck with the original sentence attached, and drill words-in-context question types where you must predict the answer before reading the choices. The prediction habit matters more than the word count: it converts partial knowledge into correct answers.",
      },
    ],
    body: [
      {
        type: "p",
        text: "One of the most persistent myths carried over from the old SAT is that vocabulary prep means a stack of flashcards with words like \"perspicacious\" and \"obsequious.\" The digital SAT killed that genre — and simultaneously kept vocabulary as a live, scoreable skill. Understanding exactly what survived is the difference between students who waste weeks on dead prep and students who bank easy Reading and Writing points.",
      },
      { type: "h2", text: "What changed with the digital SAT" },
      {
        type: "p",
        text: "The old SAT's sentence-completion questions directly tested whether you knew a rare word's definition. The digital SAT has no such question. Instead, the Craft and Structure domain includes words-in-context items: you read a short passage (one to a few sentences) with a blank or a highlighted word, and choose the option that fits the meaning and tone the surrounding text establishes.",
      },
      {
        type: "p",
        text: "The vocabulary involved shifted down in rarity and up in trickiness. The tested words are usually ones you have seen — but often with meanings you have not. \"Novel\" as an adjective meaning innovative. \"Temper\" as a verb meaning to soften or moderate. \"Undercut\" meaning to weaken rather than to slice. The test exploits the gap between having-seen-a-word and knowing-a-word's-range-of-meanings, which is why students who claim to \"never study vocab\" still miss these questions.",
      },
      { type: "h2", text: "Why the context skill matters more than the word count" },
      {
        type: "p",
        text: "Words-in-context is a two-skill question type. Skill one is vocabulary knowledge — real, but broad and shallow rather than deep and rare. Skill two, the more coachable one, is prediction: strong test-takers cover the blank, read the surrounding sentence, articulate in their own words what the blank must mean, and only then look at the answer choices. Weak test-takers read the sentence, glance at four choices, and pick the one that \"sounds smart.\"",
      },
      {
        type: "p",
        text: "The prediction habit converts partial knowledge into correct answers. Even when you only vaguely know two of the four options, knowing what the blank must mean usually eliminates the two that contradict the context. That is why this question type improves faster than almost anything else in the Reading and Writing section — you are training a procedure, not acquiring a lexicon. The full section map is in our [SAT Reading and Writing guide](/sat-reading-and-writing).",
      },
      { type: "h2", text: "The 80/20 vocabulary study plan" },
      {
        type: "ol",
        items: [
          "Drill words-in-context questions directly — 10 per day is plenty — using the predict-before-looking procedure every single time. The procedure is the training stimulus.",
          "Keep a lookup habit: any unknown or fuzzy word you meet in practice or in reading gets looked up immediately and dropped into a spaced-repetition deck with the sentence you found it in. Context-anchored cards stick; bare definitions do not.",
          "Prioritize mid-level academic vocabulary — the register of news articles, science writing, and humanities prose — over rare literary words. If a word appears in serious journalism but not on an old SAT list, it is more likely to appear on your test than the reverse.",
          "Spend any leftover time on transitions and logical connectives (however, moreover, notwithstanding, by contrast), which the test probes constantly and which follow learnable patterns.",
        ],
      },
      {
        type: "cta",
        text: "NomoExam's spaced-repetition flashcards anchor every word to the sentence it came from — and the AI tutor explains any words-in-context miss line by line.",
        href: "/try-free",
        label: "Try it free",
      },
      { type: "h2", text: "What this means for your one-month plan" },
      {
        type: "p",
        text: "If you are on a compressed timeline — see our [one-month study plan](/blog/one-month-digital-sat-study-plan) — vocabulary should occupy at most the 15 minutes a day of deck review described above, never a dedicated study block. The Writing section's grammar rules and the Reading section's evidence and inference skills are both higher-yield uses of the same hour. Vocabulary on the digital SAT is a compounding background asset, not a front-line campaign.",
      },
    ],
  },
  {
    slug: "where-to-find-sat-practice-questions-harder-than-bluebook",
    title: "Where to Find SAT Practice Questions Harder Than Bluebook",
    metaTitle: "SAT Practice Questions Harder Than Bluebook (2026)",
    description:
      "Ran out of Bluebook tests or finding them too easy? The six best sources of harder-than-real digital SAT practice questions, and how to use each one.",
    excerpt:
      "Bluebook's tests run out fast — and run easy. The six question sources students use to train above test difficulty, ranked by how well each matches the real thing.",
    keywords: [
      "hard sat practice questions",
      "harder than bluebook",
      "sat practice questions hard",
      "digital sat question bank",
      "sat math hard problems practice",
    ],
    date: "2026-09-12",
    author: "NomoExam Team",
    category: "SAT Resources",
    readingTime: 8,
    faqs: [
      {
        question: "Are Bluebook practice tests easier than the real SAT?",
        answer:
          "Slightly, on average. Student consensus puts most Bluebook tests 20–50 points generous relative to recent real exams, with individual tests varying more. They remain the essential baseline because they use the official interface and scoring, but students aiming above 1450 usually supplement with harder material — see our full guide on why practice scores run high.",
      },
      {
        question: "What is the College Board question bank and is it worth using?",
        answer:
          "It is College Board's official online bank of real digital SAT questions, filterable by exam domain and difficulty. Its hard tier is the closest thing to real Module 2 endings, and it is free. Its limitations are volume (you will exhaust relevant filters quickly) and that it does not assemble questions into timed modules, so it is a drilling tool rather than a test simulator.",
      },
      {
        question: "Is it useful to practice with old paper SAT questions?",
        answer:
          "Selectively. Pre-2023 paper SAT math sections remain a good source of hard algebra and geometry problems, since difficulty survives the format change. But Reading and Writing should come from digital-format sources, because the short-passage format and question types differ enough that paper-era verbal prep teaches the wrong rhythm.",
      },
      {
        question: "Should I practice on questions harder than the real test?",
        answer:
          "Yes, late in prep. Over-difficulty training builds the recognition speed and composure that make real Module 2 endings feel familiar, and it inoculates against test-day panic. But it is a finishing tool, not a foundation: students below target on core content should drill at real difficulty first, or they will practice feeling lost.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Every serious SAT student hits the same two walls. First, Bluebook has a limited number of full tests, and you burn through them. Second — the complaint in threads like [\"where can I find really hard and complex math problems?\"](https://www.reddit.com/r/Sat/comments/1cp3quy/) and [\"biggest problems with SAT prep\"](https://www.reddit.com/r/Sat/comments/1urqptl/) — is that the official material feels easier than the real test, and everything harder is scattered across a dozen places of uneven quality. This guide is the organized answer: six sources, ranked by how closely each matches real digital SAT questions, with notes on how to use each.",
      },
      { type: "h2", text: "1. The College Board question bank (hard tier) — start here" },
      {
        type: "p",
        text: "College Board publishes an official online question bank with real digital SAT questions, and it has a difficulty filter. Set it to hard, pick your weakest domains, and drill. This is the closest publicly available material to the back of a hard Module 2, because it is the actual item style from the actual test maker. Use it as your calibration standard: when a third-party source feels much harder or much easier than this, adjust your trust in that source accordingly.",
      },
      {
        type: "p",
        text: "The limitation is volume and structure — there are not hundreds of hard items per domain, and the bank does not assemble timed modules. Treat it as the yardstick, not the whole workout.",
      },
      { type: "h2", text: "2. Old paper SAT Math sections (for Math only)" },
      {
        type: "p",
        text: "The pre-digital paper SATs are a legitimately good source of hard math problems. The content overlap — algebra, advanced math, problem solving — survives the format change, and the hardest paper-era questions are comparable to hard Module 2 items. Two cautions: skip the no-calculator sections' pacing assumptions (you get a calculator on everything now), and do not use paper material for Reading and Writing, where the short-passage digital format changed too much.",
      },
      { type: "h2", text: "3. Community-curated hard-question collections" },
      {
        type: "p",
        text: "Student communities maintain crowdsourced collections of the hardest questions from real administrations and official material — threads like [\"drop the absolute hardest math questions\"](https://www.reddit.com/r/Sat/comments/1eqezi6/) and the compiled banks referenced in [\"where to find a bunch of hard SAT practice questions\"](https://www.reddit.com/r/Sat/comments/1mnhlm9/). Quality varies and some items are mislabeled, but the crowd has done real filtering work. Use these after you have a calibration standard from source 1, and verify any solution that looks wrong — community solutions occasionally are.",
      },
      { type: "h2", text: "4. Prep platforms with explicit difficulty tagging" },
      {
        type: "p",
        text: "The practical answer to volume is a prep platform whose questions are tagged by difficulty and domain, so you can pull twenty hard algebra word problems on demand and review them with explanations. This is what we built [NomoExam's practice system](/features) around: adaptive full-length tests for the official-feel experience, plus difficulty-tagged drilling for the hard-question workout, with step-by-step explanations on every miss. The advantage over scattered sources is consistency — the difficulty labels mean something because they are applied systematically.",
      },
      {
        type: "cta",
        text: "Full-length adaptive tests plus unlimited difficulty-tagged drills, with explanations for every question.",
        href: "/try-free",
        label: "Try NomoExam free",
      },
      { type: "h2", text: "5. Precalculus and competition-adjacent problem sets (for the very top scores)" },
      {
        type: "p",
        text: "Students chasing a 1550+ occasionally need material above even the hard SAT tier: precalculus textbook problem sets, and light math-competition material for multi-step reasoning under time pressure. This is over-difficulty training — the point is not that such questions appear on the SAT (they do not), but that after doing them, real Module 2 endings feel comfortable. Use sparingly: an hour of this per week at most, and only in the final stretch, per the strategy in our [hard Module 2 guide](/blog/hardest-digital-sat-math-module-2-questions).",
      },
      { type: "h2", text: "6. Third-party question banks — with a calibration warning" },
      {
        type: "p",
        text: "Commercial prep books and sites offer large banks, and the good ones are useful for volume. The standing warning from the community applies: many third-party questions — especially verbal — do not match the official style, and drilling off-style questions can actively teach wrong instincts. The way to use any third-party source safely is to calibrate it first: do a mixed set of 20 of its questions side-by-side with official material, and if the reasoning styles diverge sharply, restrict that source to Math drilling only.",
      },
      { type: "h2", text: "How to combine them: a simple rule" },
      {
        type: "ul",
        items: [
          "Full-length tests: official Bluebook only, strict conditions, roughly one per week (see the [one-month plan](/blog/one-month-digital-sat-study-plan)).",
          "Domain drilling at real difficulty: the College Board question bank, hard tier.",
          "Volume drilling above real difficulty: a tagged platform or vetted community collections.",
          "Reading and Writing: digital-format sources only — official bank first, then calibrated third-party material.",
        ],
      },
      {
        type: "p",
        text: "One closing note: harder material is a tool for the last phase of prep, not a substitute for fundamentals. If your misses are concentrated in core algebra or basic grammar, drilling competition math will feel productive and change nothing. Match the source to the bottleneck — that discipline, more than any particular question bank, is what the 1550+ scorers actually have in common.",
      },
    ],
  },
  {
    slug: "desmos-calculator-tricks-for-sat-math",
    title: "Desmos Calculator Tricks That Save Minutes on SAT Math",
    metaTitle: "Desmos SAT Math Tricks That Save Minutes (2026)",
    description:
      "Most students barely use the Desmos calculator built into the digital SAT. These 8 techniques turn slow algebra questions into 10-second graphing questions.",
    excerpt:
      "The digital SAT has a full graphing calculator on every Math question, and most students use it like a four-function one. Eight techniques that pay for themselves immediately.",
    keywords: [
      "desmos sat math tricks",
      "desmos calculator sat",
      "digital sat calculator tips",
      "desmos sat techniques",
      "sat math calculator strategy",
    ],
    date: "2026-09-08",
    author: "NomoExam Team",
    category: "SAT Math",
    readingTime: 8,
    faqs: [
      {
        question: "Is Desmos built into the digital SAT?",
        answer:
          "Yes. The Bluebook app includes a full Desmos graphing calculator available on every Math question — no separate device needed. You can also bring your own approved calculator, but most students should learn the built-in Desmos because it is always there, always the same, and more powerful than most handhelds.",
      },
      {
        question: "Can Desmos solve every SAT Math question?",
        answer:
          "No, and trying to graph everything is its own trap. Desmos excels at equations and systems, intersections, inequalities, regression, and function evaluation — and is slower than mental math for simple arithmetic and single-step algebra. The skill is knowing which questions to hand to Desmos and which to solve directly; the tricks below are the hand-off list.",
      },
      {
        question: "What is the single most useful Desmos trick for the SAT?",
        answer:
          "Graphing both sides of an equation as two functions and reading the intersection. Any 'what value of x satisfies...' question becomes a point-reading exercise: type y = left side, y = right side, and click the intersection point. It works on linear, quadratic, absolute value, and exponential equations alike, and it sidesteps algebraic slips entirely.",
      },
      {
        question: "How long does it take to learn Desmos for the SAT?",
        answer:
          "The core techniques take two to three hours of deliberate practice to become automatic — which is why they are the consensus fast win in one-month study plans. The investment pays back on almost every Math question thereafter, in time saved and in algebra errors avoided.",
      },
    ],
    body: [
      {
        type: "p",
        text: "The digital SAT hands every student a professional-grade graphing calculator on every Math question — the full Desmos — and most students respond by using it to check arithmetic. That is like being given a power drill and using the handle. The students who report Math sections feeling easy are almost uniformly the ones who internalized a short list of Desmos techniques, and every one of them is learnable in an afternoon.",
      },
      { type: "h2", text: "Trick 1: Solve any equation by graphing both sides" },
      {
        type: "p",
        text: "For any 'solve for x' question — linear, quadratic, absolute value, exponential — type the left side as y₁ and the right side as y₂, and read the x-coordinate of the intersection. No rearranging, no sign errors, no wasted algebra. An equation like 3|x − 4| + 2 = 5x − 7 that would take two minutes of careful casework takes fifteen seconds. This is the highest-value single technique on the test.",
      },
      { type: "h2", text: "Trick 2: Count system solutions by counting intersections" },
      {
        type: "p",
        text: "'How many solutions does this system have?' is a counting question in disguise. Graph both equations and count where the curves cross: zero intersections means no solution, one means exactly one, infinitely many shows as the curves lying on top of each other (Desmos renders this distinctly). This handles line-with-parabola, line-with-absolute-value, and any mixed system without touching a discriminant — the technique behind the hardest systems questions in our [Module 2 guide](/blog/hardest-digital-sat-math-module-2-questions).",
      },
      { type: "h2", text: "Trick 3: Use sliders for parameter questions" },
      {
        type: "p",
        text: "When a question asks 'for how many values of k does the equation have exactly two solutions?', do not reason abstractly. Type the equation with k as a variable, add a slider for k, and drag it while watching the graph. You can see the solution count change as k moves, and the critical values of k — the boundaries where the count flips — become visually obvious. Parameter questions go from the hardest on the test to nearly automatic.",
      },
      { type: "h2", text: "Trick 4: Regression when a table of points appears" },
      {
        type: "p",
        text: "If a question gives a table of x and y values and asks for a model — linear, quadratic, exponential — enter the points as a table in Desmos and run the matching regression in one line. You get the exact coefficients the answer choices are quoting, with zero curve-fitting by hand. This is the intended use of a tool most students never discover.",
      },
      { type: "h2", text: "Trick 5: Evaluate functions from the function list" },
      {
        type: "p",
        text: "Define f(x) once in Desmos's function list and then evaluate f(anything) instantly — including compositions like f(g(3)) if you define both. Function notation questions, average-rate-of-change setups, and 'which value satisfies f(x) = 0' items all collapse into one-line evaluations.",
      },
      { type: "h2", text: "Trick 6: Mean and median from a list" },
      {
        type: "p",
        text: "Desmos computes statistics on entered data lists: mean, median, and standard deviation in one command. Data-analysis questions that would take a minute of careful arithmetic become five-second lookups, which matters more than it sounds because statistics questions cluster in the Problem Solving domain and appear on nearly every test.",
      },
      { type: "h2", text: "Trick 7: Inequalities as shaded regions" },
      {
        type: "p",
        text: "Graph an inequality and Desmos shades the solution region; graph a system of inequalities and the overlap is where both shadings coincide. Questions asking whether a point satisfies a system become visual: is the point inside the doubly-shaded region or not? This eliminates the sign-flip errors that manual inequality solving invites.",
      },
      { type: "h2", text: "Trick 8: Exact arithmetic when you should not do it in your head" },
      {
        type: "p",
        text: "Below the graphing features, remember that Desmos is also a flawless arithmetic engine: it handles fractions exactly (it displays 1/3 + 1/6 as 1/2, not 0.5), large numbers, radicals, and multi-step computations without dropped signs. For any computation you would rather not do in your head under time pressure, outsource it. The time you save is real; the errors you avoid are the silent kind that never get reviewed.",
      },
      { type: "h2", text: "When NOT to use Desmos" },
      {
        type: "p",
        text: "The calculator is not a default. Single-step algebra, mental percentages, and simple slope questions are faster by hand, and opening the calculator for them costs seconds that add up across 22 questions. The skill being trained in your drill sessions — per the [one-month plan](/blog/one-month-digital-sat-study-plan) — is the hand-off decision: which questions go to Desmos, which go to paper, which go to instinct. Two to three hours of deliberate practice on that decision is one of the best investments available in SAT Math, and it is why Desmos technique leads every serious [SAT Math guide](/sat-math)'s pacing section.",
      },
      {
        type: "cta",
        text: "Every NomoExam Math drill runs against the real test format — calculator available, difficulty tagged, explanations on every miss.",
        href: "/try-free",
        label: "Practice with Desmos-ready drills",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== slug).slice(0, count);
}

export function formatBlogDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function getBlogUrl(slug: string): string {
  return `/blog/${slug}`;
}
