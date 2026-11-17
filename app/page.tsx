import type { Metadata } from "next";
import { FAQ } from "@/components/landing/FAQ";
import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { getMarketingSiteOrigin } from "@/lib/config";
import PricingSection from "@/components/landing/PricingSection";
import { landingFaqs } from "@/lib/landing-faq-data";
import { getPublicStripePrice } from "@/lib/stripe-public-price";
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

export async function generateMetadata(): Promise<Metadata> {
  const price = await getPublicStripePrice();
  const priceBit = price ? ` ${price.label}.` : "";
  return {
  title: "NomoExam — AP Cybersecurity, SAT & ACT Prep App | AI Tutor & Practice Tests",
  description:
    `Best exam prep app with an AI tutor, full-length practice tests for College Board AP Cybersecurity, SAT & ACT. Score higher with personalized study plans.${priceBit} Try free.`,
  keywords: [
    // High-intent AP Cybersecurity keywords
    "AP Cybersecurity prep app",
    "AP Cybersecurity practice test",
    "College Board AP Cybersecurity",
    "AP Cybersecurity study guide 2026",
    "AP Cybersecurity syllabus",
    "AP Cyber mock exam",
    "how to score 5 AP Cybersecurity",
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
    title: "NomoExam — AP Cybersecurity, SAT & ACT Prep App 2026",
    description:
      `Master AP Cybersecurity, SAT & ACT with AI practice tests, unlimited tutoring & study plans.${priceBit} Try free.`,
    url: homeCanonical,
    siteName: "Nomoexam",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NomoExam — AP Cybersecurity, SAT & ACT Prep App 2026",
    description: `Master AP Cybersecurity, SAT & ACT. AI tutor, practice tests, flashcards.${priceBit} Try free.`,
  },
  };
}

export default async function LandingPage() {
  const price = await getPublicStripePrice();
  const faqs = landingFaqs(price?.label ?? null);
  return (
    <MarketingPageShell>
      <main>
        <HomePageWebStructuredData />
        <SiteNavigationStructuredData />
        <FAQStructuredData faqs={faqs} />
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
        <FAQ faqs={faqs} />
      </main>
    </MarketingPageShell>
  );
}
