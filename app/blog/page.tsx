import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import { BLOG_POSTS, formatBlogDate } from "@/lib/blog-posts";
import type { Metadata } from "next";
import Link from "next/link";
import { marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, CustomStructuredData } from "@/lib/schema";
import { Newspaper, CalendarDays, Clock, ShieldCheck, Sparkles } from "lucide-react";

const canonical = marketingAbsoluteUrl("/blog");
const og = marketingAbsoluteUrl("/opengraph-image");

export const metadata: Metadata = {
  title: "Exam Strategy & Prep Blog — AP Cybersecurity, SAT & Study Plans | NomoExam",
  description:
    "Research-backed exam prep articles: College Board AP Cybersecurity syllabus guides, full-length practice tests, Digital SAT score gaps, Math Module 2 attacks, and study plans.",
  alternates: { canonical },
  keywords: [
    "exam prep blog",
    "AP Cybersecurity blog",
    "AP Cybersecurity exam guide",
    "AP Cybersecurity practice test",
    "SAT blog",
    "digital SAT strategy",
    "SAT study advice",
    "SAT score improvement",
    "AP Cybersecurity study plan",
  ],
  openGraph: {
    title: "The NomoExam Prep & Strategy Blog",
    description:
      "Research-backed exam strategy: AP Cybersecurity guides, Digital SAT score gaps, hard Math questions, and study plans.",
    url: canonical,
    siteName: "NomoExam",
    type: "website",
    images: [{ url: og, width: 1200, height: 630, alt: "NomoExam prep blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The NomoExam Prep & Strategy Blog",
    description: "AP Cybersecurity & SAT strategy, scores, study plans, and tactical guides.",
    images: [og],
  },
};

export default function BlogPage() {
  // Sort posts with most recent / high-impact first
  const [featured, ...rest] = BLOG_POSTS;
  const itemList = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NomoExam Prep & Strategy Blog",
    url: canonical,
    description:
      "Research-backed articles on AP Cybersecurity and digital SAT preparation: syllabus overviews, scoring breakdowns, FRQ log analysis, hard Math Module 2 questions, study plans, and practice resources.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: BLOG_POSTS.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: marketingAbsoluteUrl(`/blog/${post.slug}`),
        description: post.excerpt,
      })),
    },
  };

  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "Blog", url: canonical },
        ]}
      />
      <CustomStructuredData data={itemList} />
      <main>
        <section className={`${MKT.pageSection} pb-20 pt-28 md:pb-24 md:pt-36`}>
          <div className={`${MKT.container} mx-auto max-w-5xl`}>
            <div className="mb-12 max-w-3xl">
              <div className={`${MKT.badgeLight} mb-4 inline-flex items-center gap-2`}>
                <Newspaper className="h-4 w-4" />
                <span>Exam Prep & Strategy Blog</span>
              </div>
              <h1 className={`${MKT.h1OnLight} mb-4`}>The NomoExam Prep Blog</h1>
              <p className="text-base font-medium leading-relaxed text-neutral-700 md:text-lg">
                Articles built from what students actually ask — mastering the new College Board{" "}
                <span className="font-semibold text-neutral-900">AP Cybersecurity</span> syllabus,
                closing the Digital SAT practice-to-real score gap, cracking hard Math Module 2
                questions, and executing realistic study plans that earn top scores.
              </p>
            </div>

            {/* Featured post */}
            <Link
              href={`/blog/${featured.slug}`}
              className="group mb-12 block rounded-2xl border border-black/[0.08] bg-white/90 p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-medium text-neutral-500">
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-lime/25 px-3 py-1 font-semibold text-neutral-900">
                  <Sparkles className="h-3 w-3" />
                  Featured
                </span>
                <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 font-semibold text-neutral-800">
                  {featured.category}
                </span>
                <span aria-hidden>·</span>
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {formatBlogDate(featured.date)}
                </span>
                <span aria-hidden>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readingTime} min read
                </span>
              </div>
              <h2 className="font-barlow mb-3 text-2xl font-bold text-neutral-900 transition-colors group-hover:text-neutral-700 md:text-3xl">
                {featured.title}
              </h2>
              <p className="text-base font-medium leading-relaxed text-neutral-600">
                {featured.excerpt}
              </p>
            </Link>

            {/* Post card grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-black/[0.08] bg-white/90 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-500">
                    <span className="rounded-full bg-neutral-100 px-3 py-1 font-semibold text-neutral-700">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readingTime} min
                    </span>
                  </div>
                  <h2 className="font-barlow mb-3 text-lg font-bold leading-snug text-neutral-900 transition-colors group-hover:text-neutral-700">
                    {post.title}
                  </h2>
                  <p className="mb-4 flex-1 text-sm font-medium leading-relaxed text-neutral-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-xs font-medium text-neutral-500">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {formatBlogDate(post.date)}
                    </span>
                    <span className="font-semibold text-neutral-900 transition-transform group-hover:translate-x-1">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-black/[0.08] bg-neutral-50 p-6 md:p-8">
              <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">
                Looking for Exam Practice & Reference Materials?
              </h3>
              <p className="text-sm font-medium leading-relaxed text-neutral-700">
                Explore our full-length simulated testing for the{" "}
                <Link href="/ap-cybersecurity-prep-app" className="font-semibold text-primary hover:underline">
                  AP Cybersecurity Prep App
                </Link>{" "}
                or browse our comprehensive{" "}
                <Link href="/guides" className="font-semibold text-primary hover:underline">
                  Digital SAT study guides
                </Link>
                . When you are ready for timed, realistic practice papers, explore the live plans on{" "}
                <Link href="/pricing" className="font-semibold text-primary hover:underline">
                  pricing
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
