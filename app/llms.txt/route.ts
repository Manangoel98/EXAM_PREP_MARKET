import { getMarketingSiteOrigin } from "@/lib/config";

/**
 * Machine-readable site summary for AI crawlers (supplements robots.txt).
 * @see https://llmstxt.org/
 */
export function GET() {
  const base = getMarketingSiteOrigin();
  const lines = [
    `# NomoExam`,
    ``,
    `> AI-powered exam preparation: practice tests, flashcards, study paths, and an unlimited AI tutor. Per-exam subscriptions (USD).`,
    ``,
    `## Primary URLs`,
    `- ${base}/`,
    `- ${base}/pricing`,
    `- ${base}/features`,
    `- ${base}/exams`,
    `- ${base}/how-it-works`,
    `- ${base}/compare`,
    `- ${base}/try-free`,
    `- ${base}/contact`,
    `- ${base}/privacy-policy`,
    `- ${base}/terms-of-service`,
    ``,
    `## Student app`,
    `Practice, dashboard, and sign-in live on the student app (see marketing site CTAs); not listed here.`,
    ``,
  ];
  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
