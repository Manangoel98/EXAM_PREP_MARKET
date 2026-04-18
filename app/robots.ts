import type { MetadataRoute } from "next";
import { getMarketingSiteOrigin } from "@/lib/config";

/**
 * Dynamic robots.txt so sitemap host matches NEXT_PUBLIC_BASE_URL (staging vs production).
 */
export default function robots(): MetadataRoute.Robots {
  const base = getMarketingSiteOrigin();

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/", "/*.json$"] },
      { userAgent: "Googlebot", allow: "/", disallow: ["/api/"] },
      { userAgent: "Bingbot", allow: "/", disallow: ["/api/"] },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
