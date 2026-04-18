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
    longHtml: `<p>The SAT is a widely used college admissions test. NomoExam offers official-style practice, full-length tests, flashcards, and an AI tutor focused on the skills the SAT measures—so you can build pacing, accuracy, and confidence.</p>`,
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
    longHtml: `<p>The ACT covers English, mathematics, reading, science, and an optional writing section. Prepare with realistic timing, section drills, and explanations that mirror how the test flows on exam day.</p>`,
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
