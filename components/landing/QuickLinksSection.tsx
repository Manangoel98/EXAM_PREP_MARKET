"use client";

import { MKT } from "@/lib/marketing-ui";
import Link from "next/link";
import { BookOpen, DollarSign, Sparkles, GitCompare, HelpCircle, MousePointerClick, FileText, Calendar, Target } from "lucide-react";

const quickLinks = [
  {
    href: "/exams",
    label: "Exam Preparation",
    description: "SAT, ACT, GRE, GMAT & more",
    icon: BookOpen,
  },
  {
    href: "/exam-preparation-app",
    label: "Practice Tests",
    description: "Full-length mock exams",
    icon: MousePointerClick,
  },
  {
    href: "/features/nomo-ai",
    label: "AI Tutor",
    description: "Unlimited help 24/7",
    icon: Sparkles,
  },
  {
    href: "/pricing",
    label: "Pricing",
    description: "Pricing per exam",
    icon: DollarSign,
  },
  {
    href: "/compare",
    label: "Compare Exams",
    description: "SAT vs ACT & more",
    icon: GitCompare,
  },
  {
    href: "/download-exam-app",
    label: "Download App",
    description: "Free on Android",
    icon: HelpCircle,
  },
  {
    href: "/how-to-prepare-for-sat",
    label: "SAT Prep Guide",
    description: "Complete preparation strategy",
    icon: FileText,
  },
  {
    href: "/sat-study-plan",
    label: "SAT Study Plan",
    description: "3-month detailed schedule",
    icon: Calendar,
  },
  {
    href: "/mock-test-strategy",
    label: "Mock Test Strategy",
    description: "Maximize your scores",
    icon: Target,
  },
];

export function QuickLinksSection() {
  return (
    <section className="scroll-mt-44 border-t border-black/[0.06] bg-white py-16 md:scroll-mt-52 md:py-20">
      <div className={MKT.container}>
        <div className="mx-auto max-w-5xl">
          <h2 className={`${MKT.h2Section} mb-10 text-center`}>Explore NomoExam</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-xl border border-black/10 bg-zinc-50 p-6 transition-all hover:border-primary/30 hover:bg-white hover:shadow-md"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-900 transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-barlow text-lg font-bold text-neutral-900">{link.label}</h3>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-neutral-600">{link.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
