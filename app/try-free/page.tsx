"use client";

import Link from "next/link";
import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import { InteractiveDemo } from "@/components/landing/InteractiveDemo";
import { ScoreCalculator } from "@/components/landing/ScoreCalculator";
import { FeaturedSuccess } from "@/components/landing/FeaturedSuccess";
import { HowToStructuredData } from "@/lib/schema";

export default function TryFreePage() {
  return (
    <MarketingPageShell>
      <HowToStructuredData
        name="How to Practice SAT Questions with AI Explanations"
        description="Sample how Nomoexam explains SAT-style questions with structured reasoning—then unlock the full bank with a per-exam subscription."
        totalTime="PT5M"
        steps={[
          {
            name: "Answer the question",
            text: "Try a short SAT-style item. Tap the answer you think is right.",
          },
          {
            name: "Read the walkthrough",
            text: "See the correct answer with a step-by-step explanation and pattern notes.",
          },
          {
            name: "Decide your next step",
            text: "Explore the full SAT hub or pricing when you want unlimited practice and AI tutor access.",
          },
        ]}
      />

      <main>
        <section className="border-b border-black/[0.06] bg-neutral-dark py-16 pt-20 text-white md:py-24 md:pt-28">
          <div className={MKT.container}>
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <p className={`${MKT.badgeDark} mx-auto mb-6`}>Sample experience</p>
              <h1 className={`${MKT.h1Hero} mb-6`}>
                Try a few SAT-style questions
                <br />
                <span className="text-white/85">See how explanations feel in the app</span>
              </h1>
              <p className={`${MKT.leadOnDark} mx-auto max-w-3xl`}>
                This page is a quick demo. Full practice, flashcards, paths, and unlimited AI are included when you
                subscribe— <strong className="text-white">affordable subscription per exam</strong>, cancel anytime.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-black/[0.06] bg-white py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className={`${MKT.h2Section} mb-3`}>Three sample questions</h2>
                <p className={MKT.leadOnLight}>No account needed for this teaser—just tap and learn.</p>
              </div>
              <InteractiveDemo />
            </div>
          </div>
        </section>

        <section className="border-t border-black/[0.06] bg-zinc-50 py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-2xl">
              <div className="mb-12 text-center">
                <h2 className={`${MKT.h2Section} mb-3`}>Plan toward a target score</h2>
                <p className={MKT.leadOnLight}>Rough pacing calculator—your real plan lives in the subscribed product.</p>
              </div>
              <ScoreCalculator />
            </div>
          </div>
        </section>

        <FeaturedSuccess />

        <section className="border-t border-black/[0.06] bg-white py-16 md:py-24">
          <div className={MKT.container}>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className={`${MKT.h2Section} mb-4`}>Want the full product?</h2>
              <p className={`${MKT.leadOnLight} mb-8`}>
                10,000+ questions, full papers, flashcards, paths, and Nomo AI for the exam you subscribe to.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <Link href="/pricing" className={MKT.btnPrimary}>
                  View pricing
                </Link>
                <Link href="/exams/sat" className={MKT.btnOutlineLight}>
                  SAT guide
                </Link>
              </div>
              <p className="mt-6 text-sm font-medium text-neutral-500">
                Paid subscription · Cancel anytime · No refunds on charges (see Terms)
              </p>
            </div>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
