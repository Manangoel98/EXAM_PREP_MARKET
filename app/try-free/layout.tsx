import type { Metadata } from "next";
import { marketingSeo } from "@/lib/metadata";

export const metadata: Metadata = marketingSeo({
  title: "Try SAT-style questions free — sample explanations",
  description:
    "No account needed: try a few SAT-style questions and see how NomoExam explains answers. Full practice, flashcards, paths, and AI tutor with a per-exam subscription.",
  path: "/try-free",
  keywords: ["free SAT practice", "SAT sample questions", "try exam prep", "NomoExam demo", "SAT explanations"],
});

export default function TryFreeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
