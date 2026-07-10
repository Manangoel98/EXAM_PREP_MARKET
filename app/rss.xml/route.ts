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
      <title>SAT 2026 Complete Guide - Format, Scoring, and Prep Strategies</title>
      <description>Everything you need to know about the digital SAT 2026: test structure, scoring system, registration dates, and proven preparation strategies with ${config.seo.siteName}.</description>
      <link>${baseUrl}/exams/sat</link>
      <guid isPermaLink="true">${baseUrl}/exams/sat</guid>
      <pubDate>Mon, 10 Feb 2026 12:00:00 GMT</pubDate>
      <category>SAT Preparation</category>
      <category>Test Prep</category>
    </item>

    <item>
      <title>How to Prepare for SAT - Complete 2026 Guide</title>
      <description>Learn how to prepare for SAT with proven strategies, a 3-month study plan, and expert tips to maximize your score with ${config.seo.siteName}.</description>
      <link>${baseUrl}/how-to-prepare-for-sat</link>
      <guid isPermaLink="true">${baseUrl}/how-to-prepare-for-sat</guid>
      <pubDate>Thu, 17 Apr 2026 12:00:00 GMT</pubDate>
      <category>SAT Preparation</category>
      <category>Study Guide</category>
    </item>

    <item>
      <title>Best SAT Prep Apps 2026 - Expert Reviewed</title>
      <description>Compare the 7 best SAT prep apps in 2026 including NomoExam, Khan Academy, Magoosh, and more. Expert analysis with pricing and features.</description>
      <link>${baseUrl}/best-apps-for-sat-prep</link>
      <guid isPermaLink="true">${baseUrl}/best-apps-for-sat-prep</guid>
      <pubDate>Thu, 25 Jun 2026 12:00:00 GMT</pubDate>
      <category>SAT Preparation</category>
      <category>App Reviews</category>
    </item>

    <item>
      <title>ACT Prep Course - Practice Tests &amp; AI Tutor</title>
      <description>Comprehensive ACT preparation with full-length practice tests, AI tutoring, and personalized study plans. $4.99/month.</description>
      <link>${baseUrl}/exams/act</link>
      <guid isPermaLink="true">${baseUrl}/exams/act</guid>
      <pubDate>Mon, 10 Feb 2026 12:00:00 GMT</pubDate>
      <category>ACT Preparation</category>
      <category>Test Prep</category>
    </item>

    <item>
      <title>SAT vs ACT: Which Test Should You Take?</title>
      <description>Complete comparison of SAT and ACT for college admissions. Compare format, scoring, difficulty, and get expert recommendations.</description>
      <link>${baseUrl}/act-vs-sat-which-test-should-you-take</link>
      <guid isPermaLink="true">${baseUrl}/act-vs-sat-which-test-should-you-take</guid>
      <pubDate>Wed, 10 Jun 2026 12:00:00 GMT</pubDate>
      <category>Test Comparison</category>
      <category>College Admissions</category>
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
