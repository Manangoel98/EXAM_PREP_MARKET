/**
 * Marketing-site exam catalog: SEO copy and slugs.
 * Links into the student app use getAppUrl() only — never hardcode app hostnames.
 */

export type ExamAvailability = "live" | "soon";

export type MarketingExamDefinition = {
  slug: string;
  shortName: string;
  fullName: string;
  /** Hub grouping (matches student-frontend-style navigation) */
  category: string;
  /** Card + meta description */
  description: string;
  /** Longer body copy for /exams/[slug] */
  longHtml: string;
  popular: boolean;
  icon: "GraduationCap" | "BookOpen" | "Brain" | "Briefcase" | "Stethoscope" | "Scale" | "Trophy" | "Languages" | "Calculator";
  availability: ExamAvailability;
};

export const MARKETING_EXAMS: MarketingExamDefinition[] = [
  {
    slug: "sat",
    shortName: "SAT",
    fullName: "Scholastic Assessment Test",
    category: "Undergraduate admission",
    description: "College entrance exam covering Math, Reading, and Writing & Language",
    longHtml: `
      <p>The <strong>SAT</strong> is the most widely recognized college admissions test in the United States, accepted by virtually all U.S. colleges and universities. The digital SAT (introduced in 2024) takes 2 hours and 14 minutes and consists of two main sections: <strong>Reading & Writing</strong> (54 questions, 64 minutes) and <strong>Math</strong> (44 questions, 70 minutes).</p>

      <h2>What NomoExam Offers for SAT Prep</h2>
      <p>NomoExam provides comprehensive SAT preparation with features designed to maximize your score improvement:</p>
      <ul>
        <li><strong>Full-length practice tests</strong> that match the official digital SAT format and difficulty</li>
        <li><strong>Unlimited AI tutoring</strong> — ask any question about any problem and get instant, step-by-step explanations</li>
        <li><strong>Personalized study plans</strong> generated based on your diagnostic score, target score, and exam date</li>
        <li><strong>Smart flashcards</strong> with spaced repetition for vocabulary and concept mastery</li>
        <li><strong>Topic-wise practice</strong> to target your specific weak areas in algebra, geometry, grammar, and reading</li>
        <li><strong>Progress analytics</strong> showing score trends, accuracy by topic, and time management insights</li>
      </ul>

      <h2>SAT Score Ranges & What Colleges Expect</h2>
      <p>The SAT is scored on a scale of 400-1600, with each section (Reading & Writing and Math) scored 200-800. Here's what different score ranges typically mean for college admissions:</p>
      <ul>
        <li><strong>1500+:</strong> Competitive for Ivy League and top 20 universities</li>
        <li><strong>1400-1500:</strong> Strong for most selective colleges (top 50)</li>
        <li><strong>1200-1400:</strong> Competitive for many state universities and liberal arts colleges</li>
        <li><strong>1000-1200:</strong> Meets requirements for most public universities</li>
      </ul>

      <h2>SAT Preparation Tips</h2>
      <p>Students who see the biggest score improvements on the SAT follow these strategies:</p>
      <ul>
        <li><strong>Start with a diagnostic test</strong> to identify your baseline and weak areas</li>
        <li><strong>Focus on high-frequency topics</strong>: linear equations, grammar rules, and evidence-based reading cover 70% of questions</li>
        <li><strong>Take 6-8 full practice tests</strong> throughout your preparation to build stamina and pacing</li>
        <li><strong>Review every mistake thoroughly</strong> — understanding why you got something wrong is more valuable than doing new problems</li>
        <li><strong>Use AI tutoring</strong> to get explanations that match your learning style</li>
      </ul>

      <p>With NomoExam's AI-powered platform, students typically see 100-200 point improvements over 3 months of consistent preparation. Our $4.99/month subscription includes everything you need for SAT success.</p>
    `,
    popular: true,
    icon: "GraduationCap",
    availability: "live",
  },
  {
    slug: "act",
    shortName: "ACT",
    fullName: "American College Testing",
    category: "Undergraduate admission",
    description: "College entrance exam with English, Math, Reading, Science, and optional Writing",
    longHtml: `
      <p>The <strong>ACT</strong> is one of the two major college admissions tests in the United States, accepted by all U.S. colleges and universities. The ACT takes 2 hours and 55 minutes (without the optional Writing section) and covers four subject areas: <strong>English</strong> (75 questions, 45 minutes), <strong>Math</strong> (60 questions, 60 minutes), <strong>Reading</strong> (40 questions, 35 minutes), and <strong>Science</strong> (40 questions, 35 minutes).</p>

      <h2>What NomoExam Offers for ACT Prep</h2>
      <p>NomoExam provides comprehensive ACT preparation designed to help you achieve your target score:</p>
      <ul>
        <li><strong>Full-length practice tests</strong> that accurately simulate the real ACT format and timing</li>
        <li><strong>Unlimited AI tutoring</strong> — get instant help with any question across all four sections</li>
        <li><strong>Personalized study plans</strong> that adapt to your schedule and target score</li>
        <li><strong>Section-specific practice</strong> for English, Math, Reading, and Science</li>
        <li><strong>Science reasoning drills</strong> to master data interpretation and experimental analysis</li>
        <li><strong>Progress tracking</strong> with detailed analytics for each section</li>
      </ul>

      <h2>ACT Score Ranges & College Expectations</h2>
      <p>The ACT is scored on a scale of 1-36, calculated as the average of your four section scores. Here's what different composite scores mean for college admissions:</p>
      <ul>
        <li><strong>34-36:</strong> Competitive for Ivy League and top 20 universities</li>
        <li><strong>30-34:</strong> Strong for most selective colleges (top 50)</li>
        <li><strong>24-30:</strong> Competitive for many state universities and liberal arts colleges</li>
        <li><strong>20-24:</strong> Meets requirements for most public universities</li>
      </ul>

      <h2>ACT vs SAT: Which Should You Take?</h2>
      <p>The ACT differs from the SAT in several key ways:</p>
      <ul>
        <li><strong>Speed vs. depth:</strong> ACT gives less time per question but questions are often more straightforward</li>
        <li><strong>Science section:</strong> ACT includes a dedicated Science section (data interpretation and reasoning)</li>
        <li><strong>Math coverage:</strong> ACT includes more geometry and trigonometry than the SAT</li>
        <li><strong>Reading style:</strong> ACT reading is faster-paced with more straightforward questions</li>
      </ul>
      <p>We recommend taking a practice test of each to see which format suits your strengths. NomoExam offers preparation for both, and you can switch between them anytime.</p>

      <h2>ACT Preparation Strategy</h2>
      <p>Successful ACT preparation focuses on:</p>
      <ul>
        <li><strong>Building speed:</strong> Practice working quickly since ACT time pressure is significant</li>
        <li><strong>Mastering the Science section:</strong> It's not about science knowledge — it's about reading graphs and data quickly</li>
        <li><strong>Learning ACT-specific grammar rules:</strong> The English section tests predictable patterns</li>
        <li><strong>Taking full practice tests weekly</strong> in the final month to build stamina</li>
      </ul>

      <p>With NomoExam's AI-powered platform at just $4.99/month, you get everything needed to improve your ACT score by 3-5 points over 2-3 months of focused preparation.</p>
    `,
    popular: true,
    icon: "BookOpen",
    availability: "live",
  },
  {
    slug: "gre",
    shortName: "GRE",
    fullName: "Graduate Record Examination",
    category: "Graduate & professional",
    description: "Graduate school admission test for master's and doctoral programs",
    longHtml: `<p>The GRE General Test is used for many graduate programs worldwide. Build quantitative and verbal reasoning skills with practice that respects the adaptive format and timing you will see on test day.</p>`,
    popular: true,
    icon: "Brain",
    availability: "soon",
  },
  {
    slug: "gmat",
    shortName: "GMAT",
    fullName: "Graduate Management Admission Test",
    category: "Graduate & professional",
    description: "MBA and business school admission test assessing analytical, writing, and reasoning skills",
    longHtml: `<p>The GMAT focuses on the skills business schools care about: analysis, reasoning, and structured problem solving. Use NomoExam to sharpen those skills with focused practice and AI explanations.</p>`,
    popular: true,
    icon: "Briefcase",
    availability: "soon",
  },
  {
    slug: "mcat",
    shortName: "MCAT",
    fullName: "Medical College Admission Test",
    category: "Medical school",
    description: "Medical school entrance exam testing knowledge of natural, behavioral, and social sciences",
    longHtml: `<p>The MCAT is a high-stakes, long-form exam. NomoExam helps you build stamina, content recall, and passage reasoning—the combination med schools expect.</p>`,
    popular: false,
    icon: "Stethoscope",
    availability: "soon",
  },
  {
    slug: "lsat",
    shortName: "LSAT",
    fullName: "Law School Admission Test",
    category: "Graduate & professional",
    description: "Law school entrance exam measuring reading comprehension, logical, and analytical reasoning",
    longHtml: `<p>The LSAT rewards careful reading and structured thinking. Practice with timed sections and explanations that reinforce the logic skills law programs emphasize.</p>`,
    popular: false,
    icon: "Scale",
    availability: "soon",
  },
  {
    slug: "ap",
    shortName: "AP",
    fullName: "Advanced Placement",
    category: "Undergraduate admission",
    description: "College-level courses and exams in various subjects for high school students",
    longHtml: `<p>AP exams validate college-level work in high school. Use NomoExam to reinforce course concepts, practice free-response style thinking, and review efficiently before test day.</p>`,
    popular: false,
    icon: "Trophy",
    availability: "soon",
  },
  {
    slug: "toefl",
    shortName: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    category: "English proficiency",
    description: "English proficiency test for non-native speakers applying to English-speaking institutions",
    longHtml: `<p>The TOEFL measures academic English skills. Build listening, reading, speaking, and writing fluency with structured practice and feedback-oriented review.</p>`,
    popular: false,
    icon: "Languages",
    availability: "soon",
  },
  {
    slug: "neet",
    shortName: "NEET",
    fullName: "National Eligibility cum Entrance Test (India)",
    category: "Medical school",
    description: "Medical entrance exam in India for MBBS and related programs",
    longHtml: `<p>NEET is a competitive national medical entrance exam in India. NomoExam is expanding coverage—use structured review, drills, and AI help to reinforce PCB concepts and exam-style questions.</p>`,
    popular: false,
    icon: "Stethoscope",
    availability: "soon",
  },
  {
    slug: "jee",
    shortName: "JEE",
    fullName: "Joint Entrance Examination (India)",
    category: "Engineering",
    description: "Engineering entrance exams (Main & Advanced) for IITs and other institutes",
    longHtml: `<p>JEE Main and Advanced demand speed and depth in physics, chemistry, and mathematics. Prepare with problem-heavy practice, error review, and explanations that tighten your approach.</p>`,
    popular: false,
    icon: "Calculator",
    availability: "soon",
  },
  {
    slug: "cat",
    shortName: "CAT",
    fullName: "Common Admission Test (India)",
    category: "Graduate & professional",
    description: "MBA entrance exam in India for IIMs and top business schools",
    longHtml: `<p>CAT tests quantitative aptitude, data interpretation, verbal ability, and logical reasoning under tight time pressure. Practice with timed sets and strategies suited to the format.</p>`,
    popular: false,
    icon: "Brain",
    availability: "soon",
  },
  {
    slug: "reasoning",
    shortName: "Reasoning",
    fullName: "Logical & analytical reasoning",
    category: "General aptitude",
    description:
      "Reasoning sections measure how you analyze information, spot patterns, evaluate arguments, and decide under time pressure—common across many competitive tests.",
    longHtml: `<p>Logical and analytical reasoning appears under many names (verbal reasoning, critical reasoning, etc.). NomoExam helps you build the underlying skills with paced practice, error review, and AI explanations—aligned to how modern tests frame these questions.</p>`,
    popular: false,
    icon: "Brain",
    availability: "soon",
  },
];

/** Stable order for /exams hub section headings */
export const EXAM_HUB_CATEGORY_ORDER: string[] = [
  "Undergraduate admission",
  "Graduate & professional",
  "Medical school",
  "Engineering",
  "English proficiency",
  "General aptitude",
];

export function getMarketingExam(slug: string): MarketingExamDefinition | undefined {
  return MARKETING_EXAMS.find((e) => e.slug === slug);
}

export function examSeoKeywords(exam: MarketingExamDefinition): string[] {
  const n = exam.shortName;
  return [
    `${n} prep`,
    `${n} practice`,
    `${n} practice tests`,
    `${n} online prep`,
    "NomoExam",
    "exam preparation",
    exam.fullName,
  ];
}

export function examFaqsForSlug(exam: MarketingExamDefinition): { question: string; answer: string }[] {
  const appLine =
    exam.availability === "live"
      ? `You can start ${exam.shortName} prep in the NomoExam app: create an account, pick ${exam.shortName}, and begin practice with full access to tools for that exam on your subscription.`
      : `${exam.shortName} is on our roadmap. Join the waitlist by creating an account—we will notify you when ${exam.shortName} goes live, and you can use NomoExam for other exams in the meantime.`;

  return [
    {
      question: `What is the ${exam.shortName} (${exam.fullName})?`,
      answer: exam.description + " NomoExam helps you prepare with practice, review, and AI support tailored to standardized tests.",
    },
    {
      question: `How does NomoExam help with ${exam.shortName} preparation?`,
      answer:
        "NomoExam combines practice tests, flashcards, structured study paths, and an AI tutor so you can learn faster, fix mistakes, and build test-day confidence.",
    },
    {
      question: `How do I start ${exam.shortName} prep on NomoExam?`,
      answer: appLine,
    },
  ];
}
