import { getMarketingSiteOrigin } from "@/lib/config";

/**
 * Custom robots.txt with comprehensive AI crawler support.
 * Welcomes search engines and AI assistants while blocking sensitive paths.
 */

export async function GET() {
  const base = getMarketingSiteOrigin();
  const lines: string[] = [];

  // Default rules for all crawlers
  lines.push("User-Agent: *");
  lines.push("Allow: /");
  lines.push("Disallow: /api/");
  lines.push("Disallow: /admin/");
  lines.push("Disallow: /*.json$");
  lines.push("Disallow: /pricing/success");
  lines.push("Disallow: /pricing/cancel");
  lines.push("");

  // Google - full access
  lines.push("User-Agent: Googlebot");
  lines.push("Allow: /");
  lines.push("Disallow: /api/");
  lines.push("");

  // Bing - full access
  lines.push("User-Agent: Bingbot");
  lines.push("Allow: /");
  lines.push("Disallow: /api/");
  lines.push("");

  // OpenAI crawlers - full access for AI training/search
  lines.push("User-Agent: GPTBot");
  lines.push("Allow: /");
  lines.push("");

  lines.push("User-Agent: ChatGPT-User");
  lines.push("Allow: /");
  lines.push("");

  lines.push("User-Agent: OAI-SearchBot");
  lines.push("Allow: /");
  lines.push("");

  // Anthropic Claude crawlers - full access
  lines.push("User-Agent: ClaudeBot");
  lines.push("Allow: /");
  lines.push("");

  lines.push("User-Agent: Claude-Web");
  lines.push("Allow: /");
  lines.push("");

  lines.push("User-Agent: anthropic-ai");
  lines.push("Allow: /");
  lines.push("");

  // Perplexity AI - full access
  lines.push("User-Agent: PerplexityBot");
  lines.push("Allow: /");
  lines.push("");

  // Google AI/Gemini - full access
  lines.push("User-Agent: Google-Extended");
  lines.push("Allow: /");
  lines.push("");

  // Meta AI - full access
  lines.push("User-Agent: FacebookBot");
  lines.push("Allow: /");
  lines.push("");

  lines.push("User-Agent: meta-externalagent");
  lines.push("Allow: /");
  lines.push("");

  // Apple/Siri - full access
  lines.push("User-Agent: Applebot");
  lines.push("Allow: /");
  lines.push("");

  // Cohere AI - full access
  lines.push("User-Agent: cohere-ai");
  lines.push("Allow: /");
  lines.push("");

  // You.com - full access
  lines.push("User-Agent: YouBot");
  lines.push("Allow: /");
  lines.push("");

  // Common crawlers - full access
  lines.push("User-Agent: CCBot");
  lines.push("Allow: /");
  lines.push("");

  // Sitemap and AI-friendly files
  lines.push(`Sitemap: ${base}/sitemap.xml`);
  lines.push("");
  lines.push("# AI Crawler Resources");
  lines.push(`# LLMs.txt: ${base}/llms.txt`);
  lines.push(`# AI Info (JSON): ${base}/ai.txt`);
  lines.push(`# RSS Feed: ${base}/rss.xml`);

  const body = lines.join("\n") + "\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
