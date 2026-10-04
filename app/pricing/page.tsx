import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import PricingSection from "@/components/landing/PricingSection";
import type { Metadata } from "next";
import { marketingAbsoluteUrl } from "@/lib/config";
import { getPublicStripePrice } from "@/lib/stripe-public-price";

const canonical = marketingAbsoluteUrl("/pricing");
const og = marketingAbsoluteUrl("/opengraph-image");

export async function generateMetadata(): Promise<Metadata> {
  const price = await getPublicStripePrice();
  const priceLabel = price?.label ?? "per exam";
  return {
    title: `Pricing — ${priceLabel} | NomoExam`,
    description: `Simple, transparent SAT & ACT prep pricing. ${priceLabel} with full access to practice tests, AI tutor, and study plans. Cancel anytime.`,
    alternates: { canonical },
    keywords: [
      "NomoExam pricing",
      "SAT prep cost",
      "ACT prep pricing",
      "GRE prep price",
      "exam prep subscription",
      "test prep pricing",
      "affordable test prep",
    ],
    openGraph: {
      title: `NomoExam Pricing — ${priceLabel}`,
      description: "Full access to practice tests, flashcards, AI tutor, and personalized study plans. One price per exam, cancel anytime.",
      url: canonical,
      siteName: "NomoExam",
      type: "website",
      images: [{ url: og, width: 1200, height: 630, alt: "NomoExam Pricing" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `NomoExam Pricing — ${priceLabel}`,
      description: `Everything you need for exam prep in one subscription. ${priceLabel}.`,
      images: [og],
    },
  };
}

export default function PricingPage() {
  return (
    <MarketingPageShell>
      <PricingSection />
    </MarketingPageShell>
  );
}
