import { ScrollTriggeredShowcase } from "@/components/landing/ScrollTriggeredShowcase";

/**
 * Configuration for the scroll-triggered screenshot showcase
 * INSTRUCTIONS: Replace screenshot paths with actual paths once screenshots are ready
 * Place screenshots in: /public/screenshots/
 */

export const showcaseItems = [
  {
    id: "dashboard",
    badge: "Command Center",
    stepLabel: "Dashboard",
    title: "Your Personal Study Dashboard",
    description:
      "Get a complete overview of your progress, upcoming tests, and study goals. Track your performance across all subjects and see exactly where you stand.",
    highlights: [
      "Real-time progress tracking across all exams",
      "Visual study streak calendar to maintain consistency",
      "Quick access to recent activities and achievements",
      "Smart recommendations based on your learning patterns",
    ],
    screenshotPath: "/screenshots/dashboard-overview.png",
    screenshotAlt: "NomoExam dashboard showing progress tracking and study streaks",
  },
  {
    id: "ai-tutor",
    badge: "AI Powered",
    stepLabel: "Nomo AI",
    title: "Nomo AI - Your 24/7 Study Coach",
    description:
      "Ask questions, get instant explanations, and receive personalized guidance from our advanced AI tutor. It's like having a private tutor available anytime, anywhere.",
    highlights: [
      "Instant answers to any exam-related question",
      "Step-by-step problem breakdowns with visual explanations",
      "Context-aware responses based on your current topic",
      "Conversational interface that adapts to your learning style",
    ],
    screenshotPath: "/screenshots/ai-tutor-chat.png",
    screenshotAlt: "Nomo AI tutor providing detailed step-by-step explanations",
  },
  {
    id: "practice-test-list",
    badge: "Practice Tests",
    stepLabel: "Test library",
    title: "Full-Length Exam Simulations",
    description:
      "Access hundreds of authentic practice tests that mirror real exam conditions. Filter by difficulty, topic, or previous performance to find the perfect practice session.",
    highlights: [
      "Extensive library of official and custom practice tests",
      "Smart filtering by difficulty level and completion status",
      "Performance badges showing your mastery level",
      "Time estimates and question counts for each test",
    ],
    screenshotPath: "/screenshots/practice-test-list.png",
    screenshotAlt: "Practice tests library with filters and performance indicators",
  },
  {
    id: "practice-test-active",
    badge: "Realistic Testing",
    stepLabel: "In-test UI",
    title: "Test Like It's the Real Thing",
    description:
      "Experience realistic exam conditions with our timer, question navigator, and intuitive interface. Practice under pressure to build confidence for test day.",
    highlights: [
      "Authentic exam timer with pause/resume functionality",
      "Multi-step math input with equation editor",
      "Question flagging and review before submission",
      "Clean, distraction-free testing environment",
    ],
    screenshotPath: "/screenshots/practice-test-active.png",
    screenshotAlt: "Active practice test interface with timer and question navigation",
  },
  {
    id: "test-results-summary",
    badge: "Instant Feedback",
    stepLabel: "Score summary",
    title: "Detailed Performance Analysis",
    description:
      "Get comprehensive breakdowns of your test performance immediately after submission. Understand exactly where you excel and where you need more practice.",
    highlights: [
      "Overall score with percentile ranking",
      "Section-by-section performance breakdown",
      "Time management analysis per question",
      "Historical score trends to track improvement",
    ],
    screenshotPath: "/screenshots/test-results-summary.png",
    screenshotAlt: "Test results showing score breakdown and performance metrics",
  },
  {
    id: "study-plan",
    badge: "Smart Planning",
    stepLabel: "Study plan",
    title: "Personalized Study Roadmap",
    description:
      "Let AI create a custom study plan based on your target exam date, current level, and available study time. Stay on track with daily tasks and milestones.",
    highlights: [
      "AI-generated study schedule tailored to your goals",
      "Daily task breakdown with time estimates",
      "Automatic adjustments based on your progress",
      "Visual timeline showing path to test day",
    ],
    screenshotPath: "/screenshots/study-plan-overview.png",
    screenshotAlt: "Personalized study plan with daily tasks and progress timeline",
  },
  {
    id: "analytics",
    badge: "Performance Insights",
    stepLabel: "Analytics",
    title: "Track Your Growth Over Time",
    description:
      "Visualize your improvement with detailed analytics charts. Identify strengths, weaknesses, and trends to optimize your study strategy.",
    highlights: [
      "Score progression graphs across multiple practice tests",
      "Subject-wise accuracy heatmaps",
      "Time management analysis showing speed improvements",
      "Comparative analysis against average scores",
    ],
    screenshotPath: "/screenshots/analytics-performance.png",
    screenshotAlt: "Analytics dashboard with score trends and performance charts",
  },
  {
    id: "exam-selection",
    badge: "Multiple Exams",
    stepLabel: "Exam picker",
    title: "Prepare for Any Standardized Test",
    description:
      "Choose from SAT, ACT, GRE, GMAT, MCAT, LSAT, and more. Switch between exams seamlessly with dedicated content for each.",
    highlights: [
      "Support for 10+ major standardized exams",
      "Exam-specific content and practice materials",
      "Separate progress tracking for each exam",
      "Easy switching between multiple active preparations",
    ],
    screenshotPath: "/screenshots/exam-selection.png",
    screenshotAlt: "Exam selection interface showing available standardized tests",
  },
  {
    id: "profile-settings",
    badge: "Your Account",
    stepLabel: "Profile",
    title: "Customize Your Experience",
    description:
      "Manage your profile, preferences, and subscription. Control notifications, study reminders, and accessibility settings to make NomoExam work for you.",
    highlights: [
      "Personalized profile with study statistics",
      "Flexible notification and reminder settings",
      "Subscription management and billing history",
      "Accessibility options including dark mode and text size",
    ],
    screenshotPath: "/screenshots/profile-settings.png",
    screenshotAlt: "User profile and settings page with customization options",
  },
];

/**
 * Showcase Component (ready to use)
 * Import this into your landing page:
 * 
 * import { ProductShowcase } from '@/components/landing/ProductShowcase';
 * 
 * Then add to your page:
 * <ProductShowcase />
 */
export function ProductShowcase() {
  return <ScrollTriggeredShowcase items={showcaseItems} />;
}
