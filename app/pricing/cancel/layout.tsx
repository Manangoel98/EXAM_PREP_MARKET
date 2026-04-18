import type { Metadata } from "next";
import { marketingSeo } from "@/lib/metadata";

export const metadata: Metadata = marketingSeo({
  title: "Checkout canceled — return to pricing",
  description:
    "Your NomoExam checkout was canceled. No charge was made. You can return to pricing and subscribe when you are ready.",
  path: "/pricing/cancel",
  keywords: ["NomoExam pricing", "checkout canceled", "exam prep subscription"],
});

export default function PricingCancelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
