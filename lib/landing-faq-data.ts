/** Shared landing FAQ copy — single source for UI + FAQPage JSON-LD (avoids drift). */
export interface LandingFaqItem {
  question: string;
  answer: string;
}

export const LANDING_FAQS: LandingFaqItem[] = [
  {
    question: "How is NomoExam different from other test prep platforms?",
    answer:
      "Unlike generic platforms, NomoExam uses AI to create personalized study plans based on your current level, exam date, and performance patterns. Our questions are verified by subject experts and updated monthly to match latest exam patterns. Plus, you get real-time analytics showing exactly where you need to improve.",
  },
  {
    question: "Which exams does NomoExam support?",
    answer:
      "SAT and ACT are available today with full practice, flashcards, learning paths, and the AI tutor. AP, GRE, MCAT, NEET, JEE, CAT, CA (India), and more are on the roadmap—see exam pages for current status.",
  },
  {
    question: "Can I really see improvement in just 7 days?",
    answer:
      "Yes! Most students notice improvement in accuracy and speed within the first week. Our AI identifies your weak areas on day 1 and gives you targeted practice. The analytics dashboard shows your progress daily, so you can track improvement in real-time.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "We do not offer a free trial. You subscribe per exam at a flat rate (USD), get full access for that exam, and can cancel your subscription at any time from your account.",
  },
  {
    question: "How does the AI study plan work?",
    answer:
      "You start with a 15-minute diagnostic test. Our AI analyzes your results to understand your strengths and weaknesses. Then it creates a day-by-day study schedule based on your exam date, available study time, and learning pace. The plan adapts weekly based on your test scores.",
  },
  {
    question: "Can I use NomoExam on my mobile phone?",
    answer:
      "Yes! NomoExam is fully responsive and works seamlessly on mobile, tablet, and desktop. Many students use their phones for quick practice sessions during commute or breaks, then switch to desktop for full mock tests.",
  },
  {
    question: "What if I'm not satisfied with the platform?",
    answer:
      "We do not offer refunds on subscription charges. You can cancel anytime so you are not billed for future periods—see our Terms of Service for details.",
  },
  {
    question: "How often are questions updated?",
    answer:
      "We add new questions every month and update existing ones based on latest exam patterns. Our team of subject experts reviews all questions quarterly to ensure accuracy and relevance. You'll always have access to the most current exam-style questions.",
  },
];
