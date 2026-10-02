import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import { BLOG_POSTS, formatBlogDate } from "@/lib/blog-posts";
import type { Metadata } from "next";
import Link from "next/link";
import { marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, CustomStructuredData } from "@/lib/schema";
import { Newspaper, CalendarDays, Clock } from "lucide-react";

const canonical = marketingAbsoluteUrl("/blog");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "SAT Prep Blog — Strategy, Scores & Study Plans | NomoExam",
  description:
    "Research-backed SAT blog: why Bluebook scores run high, the hardest Math Module 2 questions, one-month study plans, Desmos tricks, and where to find hard practice questions.",
  alternates: { canonical },
  keywords: [
    "SAT blog",
    "SAT prep tips",
    "digital SAT strategy",
    "SAT study advice",
    "SAT score improvement",
  ],
  openGraph: {
    title: "The NomoExam SAT Blog",
    description:
      "Research-backed SAT strategy: score gaps, hard Math questions, study plans, and calculator technique.",
    url: canonical,
    siteName: "NomoExam",
    type: "website",
    images: [{ url: og, width: 1200, height: 630, alt: "NomoExam SAT blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The NomoExam SAT Blog",
    description: "SAT strategy, scores, study plans, and calculator technique.",
    images: [og],
  },
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;
  const itemList = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NomoExam SAT Blog",
    url: canonical,
    description:
      "Research-backed articles on digital SAT preparation: score gaps, hard Math Module 2 questions, study plans, vocabulary, practice resources, and Desmos technique.",
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
              <div className={`${MKT.badgeLight} mb-4`}>
                <Newspaper className="h-4 w-4" />
                <span>SAT blog</span>
              </div>
              <h1 className={`${MKT.h1OnLight} mb-4`}>The SAT Prep Blog</h1>
              <p className="text-base font-medium leading-relaxed text-neutral-700 md:text-lg">
                Articles built from what students actually ask — the Bluebook score gap, the
                brutal end of Math Module 2, one-month plans that work, and the calculator
                techniques that save real minutes. Every post ends with answers to the
                follow-up questions we see most.
              </p>
            </div>

            {/* Featured post */}
            <Link
              href={`/blog/${featured.slug}`}
              className="group mb-12 block rounded-2xl border border-black/[0.08] bg-white/90 p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-medium text-neutral-500">
                <span className="rounded-full bg-accent-lime/20 px-3 py-1 font-semibold text-neutral-900">
                  Featured
                </span>
                <span>{featured.category}</span>
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

            <p className="mt-12 text-base font-medium leading-relaxed text-neutral-700">
              Looking for reference guides instead of strategy? The full list lives on{" "}
              <Link href="/guides" className="font-semibold text-primary hover:underline">
                SAT study guides
              </Link>
              . When you want timed practice in the same format, the live plan is on{" "}
              <Link href="/pricing" className="font-semibold text-primary hover:underline">
                pricing
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
