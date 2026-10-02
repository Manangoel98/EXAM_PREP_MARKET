import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import {
  BLOG_POSTS,
  formatBlogDate,
  getBlogPost,
  getRelatedPosts,
  type BlogBlock,
} from "@/lib/blog-posts";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getAppUrl, marketingAbsoluteUrl } from "@/lib/config";
import {
  ArticleStructuredData,
  BreadcrumbStructuredData,
  FAQStructuredData,
} from "@/lib/schema";
import { CalendarDays, ChevronRight, Clock, User } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: marketingAbsoluteUrl(`/blog/${post.slug}`) },
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      url: marketingAbsoluteUrl(`/blog/${post.slug}`),
      siteName: "NomoExam",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      locale: "en_US",
      images: [
        {
          url: marketingAbsoluteUrl("/og-image.svg"),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.description,
      images: [marketingAbsoluteUrl("/og-image.svg")],
    },
  };
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-barlow mb-4 mt-10 text-2xl font-bold text-neutral-900 md:text-[1.7rem]">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-barlow mb-3 mt-8 text-xl font-bold text-neutral-900">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <div className="prose-blog mb-5 text-base font-medium leading-relaxed text-neutral-700 md:text-[1.05rem] [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:decoration-2">
          <ReactMarkdown components={{ p: ({ children }) => <p>{children}</p> }}>
            {block.text}
          </ReactMarkdown>
        </div>
      );
    case "ul":
      return (
        <ul className="mb-6 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base font-medium leading-relaxed text-neutral-700">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mb-6 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base font-medium leading-relaxed text-neutral-700">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="mb-6 border-l-4 border-accent-lime bg-white/70 px-5 py-4 text-base font-medium italic leading-relaxed text-neutral-700">
          {block.text}
        </blockquote>
      );
    case "cta":
      return (
        <div className="my-8 rounded-2xl border border-black/[0.08] bg-neutral-900 p-6 text-white md:p-8">
          <p className="mb-4 text-base font-medium leading-relaxed text-white/85">
            {block.text}
          </p>
          <Link
            href={block.href}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100"
          >
            {block.label}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      );
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);
  const canonical = marketingAbsoluteUrl(`/blog/${post.slug}`);

  return (
    <MarketingPageShell>
      <ArticleStructuredData
        title={post.title}
        description={post.description}
        datePublished={post.date}
        dateModified={post.updated ?? post.date}
        authorName={post.author}
        image="/og-image.svg"
      />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "Blog", url: marketingAbsoluteUrl("/blog") },
          { name: post.title, url: canonical },
        ]}
      />
      <FAQStructuredData faqs={post.faqs} />
      <main>
        <article className={`${MKT.pageSection} pb-20 pt-28 md:pb-24 md:pt-36`}>
          <div className={`${MKT.container} mx-auto max-w-3xl`}>
            {/* Header */}
            <header className="mb-10">
              <nav className="mb-5 text-sm font-medium text-neutral-500" aria-label="Breadcrumb">
                <Link href="/blog" className="hover:text-neutral-900">
                  Blog
                </Link>
                <span className="mx-2" aria-hidden>
                  /
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700">
                  {post.category}
                </span>
              </nav>
              <h1 className={`${MKT.h1OnLight} mb-6 !text-3xl md:!text-[2.6rem]`}>
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-neutral-500">
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {formatBlogDate(post.date)}
                  {post.updated && post.updated !== post.date
                    ? ` (updated ${formatBlogDate(post.updated)})`
                    : ""}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readingTime} min read
                </span>
              </div>
            </header>

            {/* Body */}
            <div>
              {post.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            {/* FAQ */}
            <section className="mt-14">
              <h2 className="font-barlow mb-6 text-2xl font-bold text-neutral-900 md:text-3xl">
                Frequently asked questions
              </h2>
              <div className="space-y-3">
                {post.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-neutral-200 bg-white p-5 open:shadow-sm"
                  >
                    <summary className="cursor-pointer list-none font-barlow text-base font-bold text-neutral-900 marker:hidden">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-base font-medium leading-relaxed text-neutral-600">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Related posts */}
            <section className="mt-14">
              <h2 className="font-barlow mb-6 text-2xl font-bold text-neutral-900">
                Keep reading
              </h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group rounded-2xl border border-black/[0.08] bg-white/90 p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <p className="mb-2 text-xs font-semibold text-neutral-500">
                      {rel.category}
                    </p>
                    <h3 className="font-barlow mb-2 text-base font-bold leading-snug text-neutral-900">
                      {rel.title}
                    </h3>
                    <p className="text-xs font-medium leading-relaxed text-neutral-600">
                      {rel.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <div className="mt-14 rounded-2xl border border-black/[0.08] bg-white/90 p-6 text-center shadow-sm md:p-8">
              <h2 className={`${MKT.h2Section} mb-3`}>
                Ready to put this into practice?
              </h2>
              <p className="mb-6 text-base font-medium text-neutral-600">
                Timed adaptive tests, difficulty-tagged drills, and an AI tutor that explains
                every miss.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={getAppUrl("/auth")}
                  className={`${MKT.btnPrimary} px-8 py-4 text-base`}
                >
                  Start Free Trial
                </a>
                <Link href="/pricing" className={`${MKT.btnOutlineLight} px-8 py-4 text-base`}>
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </MarketingPageShell>
  );
}
