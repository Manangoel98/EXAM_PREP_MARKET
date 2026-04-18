import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import PricingSection from "@/components/landing/PricingSection";
import type { Metadata } from "next";
import { marketingAbsoluteUrl, getPriceText } from "@/lib/config";

const canonical = marketingAbsoluteUrl("/pricing");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: `Pricing — ${getPriceText()} | NomoExam`,
  description: `Simple, transparent pricing for exam prep. ${getPriceText()} with full access to practice tests, flashcards, AI tutor, and personalized study plans. Cancel anytime.`,
  alternates: { canonical },
  keywords: [
    "NomoExam pricing",
    "SAT prep cost",
    "ACT prep pricing",
    "GRE prep price",
    "exam prep subscription",
    "test prep pricing",
    "affordable test prep"
  ],
  openGraph: {
    title: `NomoExam Pricing — ${getPriceText()}`,
    description: "Full access to practice tests, flashcards, AI tutor, and personalized study plans. One price per exam, cancel anytime.",
    url: canonical,
    siteName: "NomoExam",
    type: "website",
    images: [{ url: og, width: 1200, height: 630, alt: "NomoExam Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `NomoExam Pricing — ${getPriceText()}`,
    description: `Everything you need for exam prep in one subscription. From ${getPriceText()}.`,
    images: [og],
  },
};

export default function PricingPage() {
  return (
    <MarketingPageShell>
      <PricingSection />
    </MarketingPageShell>
  );
}
