import { getMarketingSiteOrigin } from "@/lib/config";

/**
 * Custom robots.txt (replaces app/robots.ts) so we can emit Content-Signal directives
 * per https://contentsignals.org/ / draft-romm-aipref-contentsignals
 */
const CONTENT_SIGNAL = "Content-Signal: ai-train=no, search=yes, ai-input=no";

function appendRuleBlock(
  lines: string[],
  opts: {
    userAgent: string;
    allow?: string | string[];
    disallow?: string | string[];
    crawlDelay?: number;
  },
) {
  lines.push(`User-Agent: ${opts.userAgent}`);
  if (opts.allow !== undefined) {
    const allow = Array.isArray(opts.allow) ? opts.allow : [opts.allow];
    for (const a of allow) lines.push(`Allow: ${a}`);
  }
  if (opts.disallow !== undefined) {
    const disallow = Array.isArray(opts.disallow) ? opts.disallow : [opts.disallow];
    for (const d of disallow) lines.push(`Disallow: ${d}`);
  }
  if (opts.crawlDelay !== undefined) {
    lines.push(`Crawl-delay: ${opts.crawlDelay}`);
  }
  lines.push(CONTENT_SIGNAL);
  lines.push("");
}

export async function GET() {
  const base = getMarketingSiteOrigin();
  const lines: string[] = [];

  appendRuleBlock(lines, {
    userAgent: "*",
    allow: "/",
    disallow: ["/api/", "/admin/", "/*.json$"],
  });
  appendRuleBlock(lines, {
    userAgent: "Googlebot",
    allow: "/",
    disallow: "/api/",
  });
  appendRuleBlock(lines, {
    userAgent: "Bingbot",
    allow: "/",
    disallow: "/api/",
  });
  appendRuleBlock(lines, { userAgent: "GPTBot", allow: "/" });
  appendRuleBlock(lines, { userAgent: "ChatGPT-User", allow: "/" });
  appendRuleBlock(lines, { userAgent: "OAI-SearchBot", allow: "/" });
  appendRuleBlock(lines, { userAgent: "PerplexityBot", allow: "/" });
  appendRuleBlock(lines, { userAgent: "ClaudeBot", allow: "/" });
  appendRuleBlock(lines, { userAgent: "Claude-Web", allow: "/" });
  appendRuleBlock(lines, { userAgent: "anthropic-ai", allow: "/" });

  lines.push(`Sitemap: ${base}/sitemap.xml`);

  const body = lines.join("\n") + "\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
