/** Shared landing FAQ copy — single source for UI + FAQPage JSON-LD (avoids drift). */
export interface LandingFaqItem {
  question: string;
  answer: string;
}

export const LANDING_FAQS: LandingFaqItem[] = [
  {
    question: "What is the best app for SAT prep in 2026?",
    answer:
      "NomoExam is rated one of the best SAT prep apps in 2026. It combines AI-powered tutoring, full-length practice tests, smart flashcards, and personalized study plans in one platform. Unlike Khan Academy or Magoosh, NomoExam's AI tutor provides unlimited instant help on any question — like having a private tutor available 24/7 for just $4.99/month.",
  },
  {
    question: "How can I improve my SAT score by 200 points?",
    answer:
      "To improve your SAT score by 200+ points: 1) Take a diagnostic test to identify weak areas, 2) Follow a structured study plan (NomoExam creates one automatically), 3) Practice with realistic full-length tests under timed conditions, 4) Review every mistake with detailed explanations, 5) Use flashcards daily for vocabulary. Most NomoExam students see 150-250 point improvements in 8-12 weeks of consistent practice.",
  },
  {
    question: "Is NomoExam better than Khan Academy for SAT prep?",
    answer:
      "NomoExam offers several advantages over Khan Academy: unlimited AI tutoring that explains any question step-by-step, personalized study plans that adapt to your progress, more practice questions with detailed analytics, and mobile-first design. Khan Academy is free but limited — NomoExam's premium features at $4.99/month help students improve faster with targeted practice.",
  },
  {
    question: "How much does SAT prep cost with NomoExam?",
    answer:
      "NomoExam costs $4.99/month per exam — that's less than one coffee per week. You get unlimited access to practice tests, AI tutoring, flashcards, study plans, and progress analytics. Compare that to private tutors ($50-150/hour) or courses like Kaplan ($199-599). Cancel anytime with no hidden fees.",
  },
  {
    question: "Which exams does NomoExam support?",
    answer:
      "SAT and ACT are fully available today with complete practice tests, flashcards, AI tutor, and study plans. GRE, GMAT, MCAT, LSAT, JEE, NEET, CAT, and AP exams are on the roadmap. Each exam has its own subscription, so you only pay for what you need.",
  },
  {
    question: "How long should I study for the SAT?",
    answer:
      "Most students need 2-3 months of consistent SAT prep to see significant improvement. With NomoExam's personalized study plans, you can prepare effectively in as little as 6 weeks if you study 1-2 hours daily. The AI analyzes your diagnostic test and creates a day-by-day schedule based on your exam date and target score.",
  },
  {
    question: "Does NomoExam have an Android app?",
    answer:
      "Yes! NomoExam has a fully-featured Android app available on Google Play. Practice tests, AI tutor, flashcards, and study plans all work on mobile. Many students use the app for quick practice sessions during commute or study breaks, then switch to desktop for full-length mock tests.",
  },
  {
    question: "How does the AI tutor work?",
    answer:
      "NomoExam's AI tutor (Nomo AI) provides instant, step-by-step explanations for any question. Stuck on a math problem? Ask Nomo AI and get a detailed walkthrough. You can even upload photos of your own practice problems for help. It's like having a patient, knowledgeable tutor available 24/7 who never gets tired of explaining.",
  },
  {
    question: "Are NomoExam practice tests like the real SAT?",
    answer:
      "Yes. NomoExam practice tests match the official SAT format exactly — same number of questions, same timing, same difficulty distribution. Our questions are created by SAT experts and updated monthly to reflect current exam patterns. You'll also get the same adaptive testing experience as the digital SAT.",
  },
  {
    question: "Can I get a free SAT practice test?",
    answer:
      "Yes! Visit our Try Free page to access sample SAT questions and see how NomoExam works — no account required. To access full-length practice tests with scoring and AI explanations, subscribe for $4.99/month. We don't offer extended free trials, but you can cancel anytime if it's not right for you.",
  },
];
