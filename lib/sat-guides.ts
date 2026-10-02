export type GuideLink = {
  title: string;
  href: string;
  description: string;
};

/** Official College Board pages. These are the only external citations on the SAT guides. */
export const COLLEGE_BOARD = {
  sat: "https://satsuite.collegeboard.org/sat",
  digital: "https://satsuite.collegeboard.org/digital",
  dates: "https://satsuite.collegeboard.org/sat/dates-deadlines",
  scoreRelease: "https://satsuite.collegeboard.org/scores/score-release-dates",
  scores: "https://satsuite.collegeboard.org/sat/scores",
  results: "https://reports.collegeboard.org/sat-suite-program-results",
} as const;

export const SAT_GUIDES: GuideLink[] = [
  {
    title: "SAT Math",
    href: "/sat-math",
    description: "The four math domains, Desmos, and how to pace both modules.",
  },
  {
    title: "SAT Reading and Writing",
    href: "/sat-reading-and-writing",
    description: "Every Reading and Writing question type on the digital SAT.",
  },
  {
    title: "Digital SAT Format",
    href: "/digital-sat-format",
    description: "Modules, timing, question counts, and adaptive scoring.",
  },
  {
    title: "SAT Test Dates 2026–27",
    href: "/sat-test-dates",
    description: "Registration deadlines, score release, and when to sit.",
  },
  {
    title: "What Is a Good SAT Score?",
    href: "/what-is-a-good-sat-score",
    description: "Score bands and how to set a target from your college list.",
  },
  {
    title: "Average SAT Scores and Percentiles",
    href: "/average-sat-scores-percentiles",
    description: "The Class of 2025 average and where a score ranks.",
  },
  {
    title: "How to Prepare for the SAT",
    href: "/how-to-prepare-for-sat",
    description: "A full preparation guide for the digital SAT.",
  },
  {
    title: "SAT Study Plan",
    href: "/sat-study-plan",
    description: "A three-month plan aimed at a high score.",
  },
  {
    title: "Best SAT Study Schedule",
    href: "/best-sat-study-schedule",
    description: "One-month, three-month, and six-month schedules.",
  },
  {
    title: "Improve Your SAT Score by 200 Points",
    href: "/how-to-improve-sat-score-200-points",
    description: "How a large score gain is actually built.",
  },
  {
    title: "Best SAT Prep Apps",
    href: "/best-apps-for-sat-prep",
    description: "How the main SAT prep apps compare in 2026.",
  },
  {
    title: "SAT vs ACT",
    href: "/act-vs-sat-which-test-should-you-take",
    description: "Which college admissions test fits you.",
  },
];

export const OTHER_GUIDES: GuideLink[] = [
  {
    title: "How to Prepare for the GRE",
    href: "/how-to-prepare-for-gre",
    description: "GRE format and a study approach.",
  },
  {
    title: "How to Prepare for JEE",
    href: "/how-to-prepare-for-jee",
    description: "JEE Main and Advanced preparation.",
  },
  {
    title: "NEET Preparation Strategy",
    href: "/neet-preparation-strategy",
    description: "A long-range NEET study strategy.",
  },
  {
    title: "Mock Test Strategy",
    href: "/mock-test-strategy",
    description: "How to use full-length practice tests.",
  },
  {
    title: "AI Tutor for Exam Prep",
    href: "/ai-tutor-for-exam-prep",
    description: "How an AI tutor fits a study plan.",
  },
];

export const ALL_GUIDES: GuideLink[] = [...SAT_GUIDES, ...OTHER_GUIDES];
