import type { Metadata } from "next";
import { marketingSeo } from "@/lib/metadata";

/** Interstitial redirect — do not index; avoids duplicate/thin content in Google. */
export const metadata: Metadata = marketingSeo({
  title: "Payment successful — redirecting",
  description:
    "Your NomoExam subscription is being confirmed. You will be redirected to the student app to start studying.",
  path: "/pricing/success",
  keywords: ["NomoExam", "subscription", "checkout success"],
  noIndex: true,
});

export default function PricingSuccessLayout({ children }: { children: React.ReactNode }) {
  return children;
}
