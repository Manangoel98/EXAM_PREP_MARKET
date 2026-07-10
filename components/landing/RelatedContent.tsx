import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedLink {
  title: string;
  href: string;
  description?: string;
}

interface RelatedContentProps {
  title?: string;
  links: RelatedLink[];
  variant?: "default" | "compact";
}

export function RelatedContent({
  title = "Related guides",
  links,
  variant = "default",
}: RelatedContentProps) {
  if (variant === "compact") {
    return (
      <div className="rounded-xl border border-black/[0.06] bg-white/80 p-6">
        <h3 className="font-barlow text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">
          {title}
        </h3>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex items-center gap-2 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
              >
                <ArrowRight className="h-3.5 w-3.5 text-accent-lime transition-transform group-hover:translate-x-0.5" />
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <section className="mt-12 rounded-2xl border border-black/[0.06] bg-gradient-to-br from-white to-zinc-50/50 p-8">
      <h2 className="font-barlow text-xl font-bold text-neutral-900 mb-6">
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group rounded-xl border border-black/[0.04] bg-white p-5 transition-all hover:border-accent-lime/30 hover:shadow-sm"
          >
            <h3 className="font-barlow font-semibold text-neutral-900 group-hover:text-neutral-800 mb-1">
              {link.title}
            </h3>
            {link.description && (
              <p className="text-sm text-neutral-500 line-clamp-2">
                {link.description}
              </p>
            )}
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent-lime">
              Read more
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export const RELATED_CONTENT_GROUPS = {
  satPrep: [
    { title: "How to Prepare for SAT", href: "/how-to-prepare-for-sat", description: "Complete guide to SAT preparation strategies" },
    { title: "Best SAT Study Schedule", href: "/best-sat-study-schedule", description: "Optimize your study time with proven schedules" },
    { title: "Best Apps for SAT Prep", href: "/best-apps-for-sat-prep", description: "Compare top SAT prep apps in 2026" },
    { title: "Improve SAT Score 200 Points", href: "/how-to-improve-sat-score-200-points", description: "Proven strategies to boost your score" },
  ],
  examComparison: [
    { title: "SAT vs ACT", href: "/act-vs-sat-which-test-should-you-take", description: "Which test is right for you?" },
    { title: "Compare All Exams", href: "/compare", description: "See how different tests compare" },
    { title: "NomoExam vs Khan Academy", href: "/compare/nomoexam-vs-khan-academy", description: "Which platform fits your needs?" },
    { title: "GRE vs GMAT", href: "/compare/gre-vs-gmat", description: "Graduate school test comparison" },
  ],
  gradSchool: [
    { title: "How to Prepare for GRE", href: "/how-to-prepare-for-gre", description: "Master the GRE with expert strategies" },
    { title: "GRE vs GMAT", href: "/compare/gre-vs-gmat", description: "Choose the right grad school test" },
    { title: "GRE Prep", href: "/exams/gre", description: "Complete GRE exam guide" },
    { title: "GMAT Prep", href: "/exams/gmat", description: "Everything about GMAT preparation" },
  ],
  indianExams: [
    { title: "How to Prepare for JEE", href: "/how-to-prepare-for-jee", description: "JEE Main and Advanced strategies" },
    { title: "NEET Preparation Strategy", href: "/neet-preparation-strategy", description: "Complete NEET prep guide" },
    { title: "JEE Prep", href: "/exams/jee", description: "JEE exam overview and tips" },
    { title: "NEET Prep", href: "/exams/neet", description: "NEET exam guide" },
  ],
  aiTutor: [
    { title: "AI Tutor for Exam Prep", href: "/ai-tutor-for-exam-prep", description: "How AI can accelerate your learning" },
    { title: "Nomo AI Features", href: "/features/nomo-ai", description: "Meet your unlimited AI tutor" },
    { title: "How It Works", href: "/how-it-works", description: "See NomoExam in action" },
    { title: "Try Free", href: "/try-free", description: "Experience the platform free" },
  ],
};
