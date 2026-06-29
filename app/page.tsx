import type { Metadata } from "next";
import { FAQ } from "@/components/landing/FAQ";
import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { getMarketingSiteOrigin } from "@/lib/config";
import PricingSection from "@/components/landing/PricingSection";
import { LANDING_FAQS } from "@/lib/landing-faq-data";
import { FAQStructuredData, HomePageWebStructuredData, SiteNavigationStructuredData } from "@/lib/schema";
import {
  PremiumHero,
  ExamsMarqueeStrip,
  CapabilitiesSection,
  HeroToContentBridge,
} from "@/components/landing/premium-landing";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { AndroidAppSection } from "@/components/landing/AndroidAppSection";
import { QuickLinksSection } from "@/components/landing/QuickLinksSection";

const homeCanonical = getMarketingSiteOrigin();

export const metadata: Metadata = {
  title: "Nomoexam — SAT & ACT Prep | Practice Tests, Flashcards & AI Tutor",
  description:
    "Paid exam prep for SAT and ACT: full-length practice, flashcards, learning paths, and unlimited AI tutor—including help on your own uploads. Download on Android. GRE, AP, MCAT, and more coming soon.",
  keywords: [
    "SAT prep",
    "ACT prep",
    "practice tests",
    "exam flashcards",
    "AI tutor SAT",
    "AI tutor ACT",
    "GRE prep",
    "MCAT prep",
    "NEET prep",
    "JEE prep",
    "online test prep",
    "exam preparation app",
    "study app for students",
    "mock test app",
    "exam prep app Android",
    "test preparation platform",
  ],
  alternates: { canonical: homeCanonical },
  openGraph: {
    title: "Nomoexam — SAT & ACT Prep | Tests, Flashcards, AI Tutor",
    description:
      "Structured practice, flashcards, paths, and unlimited AI help. Download on Android. Built for students and parents.",
    url: homeCanonical,
    siteName: "Nomoexam",
    type: "website",
    locale: "en_US",
    // Next.js will automatically use opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomoexam — SAT & ACT Prep | Tests, Flashcards, AI Tutor",
    description: "Practice, flashcards, learning paths, unlimited AI tutor. Download on Android.",
    // Next.js will automatically use twitter-image.tsx
  },
};

export default function LandingPage() {
  return (
    <MarketingPageShell>
      <main>
        <HomePageWebStructuredData />
        <SiteNavigationStructuredData />
        <FAQStructuredData faqs={LANDING_FAQS} />
        <div className="bg-black">
          <PremiumHero />
        </div>
        <HeroToContentBridge />
        <ExamsMarqueeStrip />
        <CapabilitiesSection />
        <ProductShowcase />
        <QuickLinksSection />
        <AndroidAppSection />
        <PricingSection embedded />
        <FAQ />
      </main>
    </MarketingPageShell>
  );
}
