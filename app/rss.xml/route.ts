import { config } from '@/lib/config';
import { getPublicStripePrice } from '@/lib/stripe-public-price';
import { BLOG_POSTS } from '@/lib/blog-posts';

function toRfc822(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00Z`).toUTCString();
}

function escapeXml(text: string): string {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export async function GET() {
  const baseUrl = config.app.url;
  const buildDate = new Date().toUTCString();
  const price = await getPublicStripePrice();
  const priceLabel = price?.label ?? "the live per-exam price";

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
      <title>SAT Math: Topics, Desmos, and How to Pace Both Modules</title>
      <description>Digital SAT Math is 44 questions in 70 minutes. Two modules of 22 questions and 35 minutes. Desmos is available on every question. The four domains, and how to pace them.</description>
      <link>${baseUrl}/sat-math</link>
      <guid isPermaLink="true">${baseUrl}/sat-math</guid>
      <pubDate>Thu, 01 Oct 2026 16:00:00 GMT</pubDate>
      <category>SAT Preparation</category>
      <category>SAT Math</category>
    </item>

    <item>
      <title>SAT Reading and Writing: Every Question Type Explained</title>
      <description>Reading and Writing is one section: 54 questions in 64 minutes, short passages, and four domains covering ideas, craft, expression, and grammar.</description>
      <link>${baseUrl}/sat-reading-and-writing</link>
      <guid isPermaLink="true">${baseUrl}/sat-reading-and-writing</guid>
      <pubDate>Thu, 01 Oct 2026 15:00:00 GMT</pubDate>
      <category>SAT Preparation</category>
      <category>SAT Reading and Writing</category>
    </item>

    <item>
      <title>Digital SAT Format: Modules, Timing, and Scoring</title>
      <description>The digital SAT is 2 hours 14 minutes and 98 questions. Four modules, adaptive scoring, a calculator on every Math question, and the same 400 to 1600 scale.</description>
      <link>${baseUrl}/digital-sat-format</link>
      <guid isPermaLink="true">${baseUrl}/digital-sat-format</guid>
      <pubDate>Thu, 01 Oct 2026 14:00:00 GMT</pubDate>
      <category>SAT Preparation</category>
      <category>Digital SAT</category>
    </item>

    <item>
      <title>SAT Test Dates 2026–27: Registration, Score Release, and When to Sit</title>
      <description>Weekend SAT dates from October 2026 through June 2027, with registration deadlines and score-release days. October 3 registration is closed. November 7 is the next open date, and its scores come out November 20, after most November 1 Early Action deadlines.</description>
      <link>${baseUrl}/sat-test-dates</link>
      <guid isPermaLink="true">${baseUrl}/sat-test-dates</guid>
      <pubDate>Thu, 01 Oct 2026 13:00:00 GMT</pubDate>
      <category>SAT Preparation</category>
      <category>SAT Dates</category>
    </item>

    <item>
      <title>What Is a Good SAT Score in 2026?</title>
      <description>A good SAT score is one at or above the middle 50% of enrolled students at your colleges. National average for the Class of 2025 is 1029. Score bands and how to set your target.</description>
      <link>${baseUrl}/what-is-a-good-sat-score</link>
      <guid isPermaLink="true">${baseUrl}/what-is-a-good-sat-score</guid>
      <pubDate>Thu, 01 Oct 2026 12:00:00 GMT</pubDate>
      <category>SAT Preparation</category>
      <category>SAT Scores</category>
    </item>

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
      <description>Comprehensive ACT preparation with full-length practice tests, AI tutoring, and personalized study plans. ${priceLabel}.</description>
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

    ${BLOG_POSTS.map(
      (post) => `<item>
      <title>${escapeXml(post.title)}</title>
      <description>${escapeXml(post.description)}</description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${toRfc822(post.date)}</pubDate>
      <category>${escapeXml(post.category)}</category>
    </item>`,
    ).join('\n    ')}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
