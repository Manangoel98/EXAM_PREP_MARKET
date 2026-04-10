import type { Metadata } from "next";
import { FAQ } from "@/components/landing/FAQ";
import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import PricingSection from "@/components/landing/PricingSection";
import { LANDING_FAQS } from "@/lib/landing-faq-data";
import { FAQStructuredData, HomePageWebStructuredData, SiteNavigationStructuredData } from "@/lib/schema";
import {
  PremiumHero,
  ExamsMarqueeStrip,
  CapabilitiesSection,
  HeroToContentBridge,
} from "@/components/landing/premium-landing";

export const metadata: Metadata = {
  title: "Nomoexam — SAT & ACT Prep | Practice Tests, Flashcards & AI Tutor",
  description:
    "Paid exam prep for SAT and ACT: full-length practice, flashcards, learning paths, and unlimited AI tutor—including help on your own uploads. $9/month per exam (USD). GRE, AP, MCAT, and more coming soon.",
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
  ],
  openGraph: {
    title: "Nomoexam — SAT & ACT Prep | Tests, Flashcards, AI Tutor",
    description:
      "Structured practice, flashcards, paths, and unlimited AI help. $9/month per exam. Built for students and parents.",
    url: "https://nomoexam.com",
    siteName: "Nomoexam",
    type: "website",
    locale: "en_US",
    images: [{ url: "https://nomoexam.com/og-image.svg", width: 1200, height: 630, alt: "Nomoexam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomoexam — SAT & ACT Prep | Tests, Flashcards, AI Tutor",
    description: "Practice, flashcards, learning paths, unlimited AI tutor. $9/month per exam.",
    images: ["https://nomoexam.com/og-image.svg"],
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
        <PricingSection embedded />
        <FAQ />
      </main>
    </MarketingPageShell>
  );
}
