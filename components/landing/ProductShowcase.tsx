"use client";

import { motion } from "framer-motion";
import { MKT } from "@/lib/marketing-ui";
import {
  BarChart3,
  Brain,
  BookOpen,
  Timer,
  Target,
  Sparkles,
  CalendarDays,
  TrendingUp,
  Layers,
} from "lucide-react";
import { type ReactNode } from "react";

interface FeatureCard {
  id: string;
  icon: ReactNode;
  label: string;
  title: string;
  description: string;
  accent: string;
  span?: string;
}

const features: FeatureCard[] = [
  {
    id: "ai-tutor",
    icon: <Brain className="h-6 w-6" />,
    label: "Nomo AI",
    title: "24/7 AI Tutor That Knows Your Weak Spots",
    description:
      "Ask anything. Get instant step-by-step explanations tailored to your level. Upload your own problems — our AI breaks them down for you.",
    accent: "from-violet-500/20 to-purple-600/10",
    span: "md:col-span-2",
  },
  {
    id: "practice-tests",
    icon: <BookOpen className="h-6 w-6" />,
    label: "Practice Tests",
    title: "Full-Length Exam Simulations",
    description:
      "Hundreds of practice tests mirroring real exam conditions. Timed, scored, and analyzed — so you know exactly where you stand.",
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    id: "analytics",
    icon: <BarChart3 className="h-6 w-6" />,
    label: "Analytics",
    title: "Data-Driven Insights",
    description:
      "Score trends, accuracy heatmaps, time analysis. See your growth over weeks and months with clear visual dashboards.",
    accent: "from-emerald-500/20 to-green-500/10",
  },
  {
    id: "study-plan",
    icon: <CalendarDays className="h-6 w-6" />,
    label: "Study Plans",
    title: "AI-Generated Personalized Roadmap",
    description:
      "Tell us your exam date and target score. Get a daily study schedule that adapts as you improve — never study blind again.",
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    id: "realistic-testing",
    icon: <Timer className="h-6 w-6" />,
    label: "Real Conditions",
    title: "Test Under Pressure",
    description:
      "Authentic timer, question navigator, flagging system. Build exam-day confidence by practicing exactly how the real test feels.",
    accent: "from-rose-500/20 to-pink-500/10",
  },
  {
    id: "instant-feedback",
    icon: <Target className="h-6 w-6" />,
    label: "Instant Results",
    title: "Know Your Score in Seconds",
    description:
      "Detailed breakdowns the moment you finish. Section scores, percentile estimates, and specific question-level feedback.",
    accent: "from-sky-500/20 to-blue-500/10",
    span: "md:col-span-2",
  },
  {
    id: "multi-exam",
    icon: <Layers className="h-6 w-6" />,
    label: "10+ Exams",
    title: "SAT, ACT, GRE, MCAT & More",
    description:
      "Dedicated content for every major standardized test. Switch between exams, track progress separately, prepare for multiple tests at once.",
    accent: "from-indigo-500/20 to-violet-500/10",
  },
  {
    id: "smart-recs",
    icon: <Sparkles className="h-6 w-6" />,
    label: "Smart Recommendations",
    title: "Know What to Study Next",
    description:
      "Our algorithm identifies your weakest topics and serves the right practice at the right time. No more guessing what to review.",
    accent: "from-fuchsia-500/20 to-purple-500/10",
  },
  {
    id: "progress",
    icon: <TrendingUp className="h-6 w-6" />,
    label: "Progress Tracking",
    title: "Watch Your Score Climb",
    description:
      "Visual streak calendars, milestone badges, and weekly reports keep you motivated. See how far you've come at a glance.",
    accent: "from-teal-500/20 to-emerald-500/10",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ProductShowcase() {
  return (
    <section
      id="product-tour"
      aria-labelledby="product-tour-heading"
      className={`relative scroll-mt-44 py-24 md:scroll-mt-52 md:py-32 ${MKT.pageSection}`}
    >
      {/* Subtle grain texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="mb-16 text-center md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="liquid-glass-light mx-auto mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-medium text-neutral-700"
          >
            Why Students Choose NomoExam
          </motion.p>
          <motion.h2
            id="product-tour-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl italic tracking-tight text-neutral-900 md:text-5xl"
          >
            The complete SAT prep toolkit
            <br />
            <span className="text-neutral-600">to improve your score 200+ points</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base font-medium text-neutral-600 md:text-lg"
          >
            AI tutor, practice tests, flashcards, study plans — everything students need for SAT, ACT, GRE prep in one app.
          </motion.p>
        </div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm transition-all duration-300 hover:border-black/[0.12] hover:shadow-lg md:p-8 ${feature.span ?? ""}`}
            >
              {/* Gradient glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon + label row */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.06] bg-zinc-50 text-neutral-800 transition-colors group-hover:border-black/[0.1] group-hover:bg-white">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {feature.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 font-barlow text-lg font-semibold tracking-tight text-neutral-900 md:text-xl">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                  {feature.description}
                </p>
              </div>

              {/* Subtle corner decoration */}
              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br from-accent-lime/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center md:mt-20"
        >
          <a
            href="/try-free"
            className={MKT.btnPrimary}
          >
            Try Free SAT Practice Test
          </a>
          <p className="mt-3 text-xs font-medium text-neutral-500">
            No credit card required · $4.99/month after free trial · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
