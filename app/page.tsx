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
  title: "NomoExam — #1 SAT & ACT Prep App 2026 | AI Tutor, Practice Tests & Study Plans",
  description:
    "Best SAT prep app with AI tutor, full-length practice tests, flashcards & personalized study plans. Improve your SAT score 200+ points. ACT, GRE, GMAT prep available. $4.99/month per exam. Try free.",
  keywords: [
    // High-intent SAT keywords
    "SAT prep app",
    "best SAT prep app 2026",
    "SAT practice test online free",
    "SAT study app",
    "how to prepare for SAT",
    "SAT prep course online",
    "SAT tutor online",
    "improve SAT score",
    "SAT prep free",
    // High-intent ACT keywords
    "ACT prep app",
    "ACT practice test",
    "ACT study guide",
    "ACT prep course",
    // Comparison keywords
    "Khan Academy alternative",
    "best test prep app",
    "SAT prep app vs Khan Academy",
    // Graduate exam keywords
    "GRE prep app",
    "GMAT prep app",
    "MCAT prep course",
    "LSAT study app",
    // International exam keywords
    "JEE preparation app",
    "NEET prep online",
    // Feature keywords
    "AI tutor for exam prep",
    "online practice tests",
    "exam flashcards app",
    "personalized study plan",
    "mock test app",
    // Android specific
    "SAT prep app Android",
    "exam preparation app download",
  ],
  alternates: { canonical: homeCanonical },
  openGraph: {
    title: "NomoExam — Best SAT & ACT Prep App 2026 | AI Tutor & Practice Tests",
    description:
      "Improve your SAT score 200+ points with AI-powered practice tests, unlimited tutoring & personalized study plans. $4.99/month. Try free today.",
    url: homeCanonical,
    siteName: "Nomoexam",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NomoExam — Best SAT Prep App 2026 | AI Tutor & Practice Tests",
    description: "Improve your SAT score 200+ points. AI tutor, practice tests, flashcards. $4.99/mo. Try free.",
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
