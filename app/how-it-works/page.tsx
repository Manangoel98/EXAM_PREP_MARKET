import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";
import { marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData } from "@/lib/schema";

const canonical = marketingAbsoluteUrl("/how-it-works");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "How NomoExam Works: AI-Powered Test Prep in 4 Simple Steps",
  description: "Learn how NomoExam's AI-powered platform helps you ace your exams. Take assessment, get personalized study plan, practice daily, and track improvement. Start in 5 minutes.",
  alternates: { canonical },
  keywords: [
    "how NomoExam works",
    "AI study plan",
    "personalized test prep",
    "adaptive learning",
    "exam preparation process",
    "study plan generator"
  ],
  openGraph: {
    title: "How NomoExam Works: From Sign-Up to Success in 4 Steps",
    description: "AI-powered test prep that adapts to your learning style. Personalized plans, adaptive practice, real-time analytics.",
    url: canonical,
    siteName: "NomoExam",
    type: "website",
    images: [{ url: og, width: 1200, height: 630, alt: "NomoExam — How it works" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How NomoExam Works",
    description: "Personalized plans, adaptive practice, real-time analytics.",
    images: [og],
  },
};

export default function HowItWorksPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "How it works", url: marketingAbsoluteUrl("/how-it-works") },
        ]}
      />
      <main>
        <HowItWorks />

        <section className={`${MKT.container} border-t border-black/[0.06] bg-zinc-50 py-12 md:py-20`}>
          <div className="mx-auto max-w-4xl">
            <h2 className={`${MKT.h2Section} mb-10 text-center`}>Common questions</h2>

            <div className="space-y-4 md:space-y-5">
              <div className={MKT.card}>
                <h3 className="mb-2 font-barlow text-lg font-semibold text-neutral-900">Do I need an account?</h3>
                <p className="text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                  Yes—so we can save progress, plans, and analytics to your profile. Sign-up is quick.
                </p>
              </div>

              <div className={MKT.card}>
                <h3 className="mb-2 font-barlow text-lg font-semibold text-neutral-900">How long is the initial assessment?</h3>
                <p className="text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                  Most students finish the diagnostic in about 15–20 minutes. It helps calibrate difficulty and your plan.
                </p>
              </div>

              <div className={MKT.card}>
                <h3 className="mb-2 font-barlow text-lg font-semibold text-neutral-900">Can I change my study plan?</h3>
                <p className="text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                  Yes. Adjust schedule, exam date, or daily time when life changes—the plan should flex with you.
                </p>
              </div>

              <div className={MKT.card}>
                <h3 className="mb-2 font-barlow text-lg font-semibold text-neutral-900">What if I miss a day?</h3>
                <p className="text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                  Your plan can redistribute focus across the days you have left so you stay on track without guilt-spirals.
                </p>
              </div>

              <div className={MKT.card}>
                <h3 className="mb-2 font-barlow text-lg font-semibold text-neutral-900">How should I read score estimates?</h3>
                <p className="text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                  Estimates reflect your practice performance—they’re a compass, not a guarantee. More consistent practice usually means tighter, more useful estimates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
