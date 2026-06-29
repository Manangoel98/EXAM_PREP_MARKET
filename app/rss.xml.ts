import { config } from '@/lib/config';

export async function GET() {
  const baseUrl = config.app.url;
  const buildDate = new Date().toUTCString();

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${config.seo.siteName} - ${config.seo.tagline}</title>
    <description>${config.seo.description}</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <managingEditor>${config.seo.supportEmail} (${config.seo.siteName} Team)</managingEditor>
    <webMaster>${config.seo.supportEmail} (${config.seo.siteName} Team)</webMaster>
    <generator>${config.seo.siteName}</generator>
    <image>
      <url>${baseUrl}${config.seo.defaultImage}</url>
      <title>${config.seo.siteName}</title>
      <link>${baseUrl}</link>
    </image>

    <item>
      <title>SAT 2025 Complete Guide - Format, Scoring, and Prep Strategies</title>
      <description>Everything you need to know about the digital SAT 2025: test structure, scoring system, registration dates, and proven preparation strategies with ${config.seo.siteName}.</description>
      <link>${baseUrl}/exams/sat</link>
      <guid isPermaLink="true">${baseUrl}/exams/sat</guid>
      <pubDate>Mon, 10 Feb 2025 12:00:00 GMT</pubDate>
      <category>SAT Preparation</category>
      <category>Test Prep</category>
    </item>

    <item>
      <title>Reasoning Tests - Practice and Preparation</title>
      <description>Master logical reasoning with comprehensive practice tests and AI-powered adaptive learning on ${config.seo.siteName}.</description>
      <link>${baseUrl}/exams/reasoning</link>
      <guid isPermaLink="true">${baseUrl}/exams/reasoning</guid>
      <pubDate>Mon, 10 Feb 2025 12:00:00 GMT</pubDate>
      <category>Reasoning</category>
      <category>Test Prep</category>
    </item>

    <item>
      <title>Free Exam Preparation Platform - Start Your Journey</title>
      <description>Get started with ${config.seo.siteName}'s AI-powered exam prep platform. 3-day free trial with no credit card required. Access SAT, ACT, GRE, GMAT practice tests and personalized study plans.</description>
      <link>${baseUrl}/pricing</link>
      <guid isPermaLink="true">${baseUrl}/pricing</guid>
      <pubDate>Mon, 10 Feb 2025 12:00:00 GMT</pubDate>
      <category>Pricing</category>
      <category>Free Trial</category>
    </item>
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
