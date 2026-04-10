"use client";

import {
  Brain,
  Layers,
  Zap,
  TrendingUp,
  Users,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MKT } from "@/lib/marketing-ui";

const flashcardStats = [
  {
    icon: Layers,
    number: "10,000+",
    label: "Cards in the library",
    description: "Across major exams and subjects",
  },
  {
    icon: Users,
    number: "Spaced repetition",
    label: "Built-in scheduling",
    description: "Review at the right intervals",
  },
  {
    icon: BookOpen,
    number: "25+",
    label: "Topic areas",
    description: "Aligned to real exam blueprints",
  },
  {
    icon: TrendingUp,
    number: "Progress",
    label: "Mastery tracking",
    description: "See weak spots improve over time",
  },
];

const examCategories = [
  { name: "SAT Prep", flashcards: "2,500+", topics: "Math, Reading, Writing" },
  { name: "ACT Prep", flashcards: "2,200+", topics: "Math, English, Science" },
  { name: "GRE Prep", flashcards: "1,800+", topics: "Verbal, Quant, Writing" },
  { name: "GMAT Prep", flashcards: "1,600+", topics: "Quant, Verbal, IR, AWA" },
  { name: "MCAT Prep", flashcards: "1,500+", topics: "Biology, Chemistry, Physics" },
  { name: "LSAT Prep", flashcards: "900+", topics: "Logic, Reading, Writing" },
];

const benefits = [
  {
    icon: Brain,
    title: "Spaced repetition",
    description:
      "Cards surface when you need them—so concepts stick without cramming.",
  },
  {
    icon: Zap,
    title: "Fast sessions",
    description: "Jump in from the app, pick an exam, and practice in focused bursts.",
  },
  {
    icon: CheckCircle,
    title: "Exam-aligned content",
    description: "Decks mirror the skills and topics your test actually measures.",
  },
  {
    icon: TrendingUp,
    title: "Clear progress",
    description: "Mastery and history help you spend time where it moves the needle.",
  },
];

export function FlashcardsShowcase() {
  return (
    <section className="bg-zinc-50 py-12 md:py-20" id="flashcards">
      <div className={MKT.container}>
        <motion.div
          className="mb-12 space-y-6 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={MKT.badgeLight}>Flashcards</span>
          <h1 className={`${MKT.h1OnLight} mx-auto max-w-4xl`}>
            Study smarter with flashcards
          </h1>
          <p className={`${MKT.leadOnLight} mx-auto max-w-3xl`}>
            Large, curated decks for SAT, ACT, GRE, GMAT, MCAT, LSAT, and more—built into NomoExam so
            practice stays next to your tests and analytics.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/pricing" className={MKT.btnPrimary}>
              View pricing
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/dashboard" className={MKT.btnOutlineLight}>
              Go to dashboard
            </Link>
          </div>
        </motion.div>

        <div className="mb-16 grid grid-cols-2 gap-4 md:mb-20 md:grid-cols-4 md:gap-6">
          {flashcardStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className={`${MKT.card} ${MKT.cardHover} text-center`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Icon className="mx-auto mb-3 h-8 w-8 text-neutral-700" aria-hidden />
                <div className="mb-1 text-xl font-bold text-neutral-900 md:text-2xl">{stat.number}</div>
                <div className="mb-1 text-sm font-semibold text-neutral-900 md:text-base">{stat.label}</div>
                <div className="text-xs font-medium text-neutral-600">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="mb-16 md:mb-20" id="exam-categories">
          <motion.div
            className="mb-10 text-center md:mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`${MKT.h2Section} mb-4`}>Decks by exam</h2>
            <p className={`${MKT.leadOnLight} mx-auto max-w-2xl`}>
              Pick your test—content is organized the way you already think about prep.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {examCategories.map((exam, index) => (
              <motion.div
                key={index}
                className={`${MKT.card} ${MKT.cardHover}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-neutral-900">{exam.name}</h3>
                  <span className="shrink-0 rounded-full border border-black/[0.08] bg-zinc-100 px-3 py-1 text-xs font-semibold text-neutral-900">
                    {exam.flashcards}
                  </span>
                </div>
                <p className="mb-4 text-sm font-medium text-neutral-600">{exam.topics}</p>
                <Link
                  href="/practice"
                  className="inline-flex items-center text-sm font-semibold text-neutral-900 underline decoration-accent-lime/70 underline-offset-4 hover:decoration-accent-lime"
                >
                  Start in practice
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className={`mb-16 overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm md:mb-20`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 items-center gap-8 p-6 md:grid-cols-2 md:gap-10 md:p-12">
            <div className="space-y-5">
              <h2 className={MKT.h2Section}>How it works in the app</h2>
              <p className="text-base font-medium leading-relaxed text-neutral-600 md:text-lg">
                Open flashcards from your study flow. The app tracks what you miss and brings it back on
                a smart schedule—without you managing spreadsheets or third-party decks.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-neutral-800" aria-hidden />
                  <span className="font-medium text-neutral-700">
                    <strong className="text-neutral-900">Adaptive review</strong> based on your answers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-neutral-800" aria-hidden />
                  <span className="font-medium text-neutral-700">
                    <strong className="text-neutral-900">Filter by subject</strong> to drill weak areas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-neutral-800" aria-hidden />
                  <span className="font-medium text-neutral-700">
                    <strong className="text-neutral-900">History and mastery</strong> stay with your account
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl border border-black/[0.08] shadow-lg">
                <Image
                  src="/images/Dashboard.png"
                  alt="NomoExam dashboard showing study and flashcard access"
                  width={600}
                  height={400}
                  className="h-auto w-full"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-3 -right-2 rounded-lg border border-black/[0.08] bg-white px-4 py-2 shadow-md md:-bottom-4 md:-right-4 md:px-5 md:py-2.5">
                <p className="text-xs font-semibold text-neutral-900 md:text-sm">Part of full exam prep</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mb-16 md:mb-20">
          <motion.div
            className="mb-10 text-center md:mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`${MKT.h2Section} mb-4`}>Why students use them</h2>
            <p className={`${MKT.leadOnLight} mx-auto max-w-2xl`}>
              Short, repeatable practice that complements full-length tests and lessons.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className={`${MKT.card} ${MKT.cardHover}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <Icon className="mb-4 h-10 w-10 text-neutral-800" aria-hidden />
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900">{benefit.title}</h3>
                  <p className="font-medium leading-relaxed text-neutral-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="rounded-2xl bg-neutral-dark px-6 py-12 text-center text-white shadow-lg md:px-12 md:py-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-2xl italic tracking-tight md:text-4xl">Ready to study?</h2>
          <p className="mx-auto mt-4 max-w-2xl font-barlow text-base font-medium text-white/80 md:text-lg">
            Subscribe per exam for full access to practice, analytics, AI help, and flashcards—one coherent
            workflow.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/pricing" className={MKT.btnPrimary}>
              See plans
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/dashboard" className={MKT.btnSecondary}>
              Dashboard
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-4xl md:mt-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={`${MKT.card}`}>
            <h3 className="mb-4 font-heading text-xl italic text-neutral-900 md:text-2xl">
              Flashcards and your prep stack
            </h3>
            <p className="mb-4 font-medium leading-relaxed text-neutral-600">
              NomoExam combines timed practice, explanations, and flashcards so you are not juggling five
              tools. Decks reinforce what you miss on practice tests and lessons—where your data already
              lives.
            </p>
            <p className="font-medium leading-relaxed text-neutral-600">
              For current coverage and pricing by exam, see{" "}
              <Link href="/pricing" className={MKT.linkInline}>
                Pricing
              </Link>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
