import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { ContactForm } from "@/components/landing/ContactForm";
import type { Metadata } from "next";
import { marketingAbsoluteUrl } from "@/lib/config";

const canonical = marketingAbsoluteUrl("/contact");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "Contact Us | NomoExam Support",
  description: "Get in touch with the NomoExam team. We respond to all inquiries about billing, product features, partnerships, and technical support.",
  alternates: { canonical },
  keywords: ["NomoExam contact", "customer support", "test prep help", "billing support"],
  openGraph: {
    title: "Contact NomoExam | Get Help & Support",
    description: "Reach out to NomoExam for product questions, billing support, or partnership inquiries.",
    url: canonical,
    siteName: "NomoExam",
    type: "website",
    images: [{ url: og, width: 1200, height: 630, alt: "NomoExam Contact" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact NomoExam | Get Help & Support",
    description: "Reach out to NomoExam for product questions, billing support, or partnership inquiries.",
    images: [og],
  },
};

export default function ContactPage() {
  return (
    <MarketingPageShell>
      <ContactForm />
    </MarketingPageShell>
  );
}
