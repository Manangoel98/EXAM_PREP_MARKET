import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Brain,
  Stethoscope,
  Scale,
  Trophy,
  Languages,
  Calculator,
  ChevronRight,
  ArrowUpRight,
  Smartphone,
  Download,
} from "lucide-react";
import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import {
  getMarketingExam,
  examFaqsForSlug,
  examSeoKeywords,
  MARKETING_EXAMS,
  type MarketingExamDefinition,
} from "@/lib/exams-marketing-data";
import { getAppUrl, marketingAbsoluteUrl, ANDROID_APP } from "@/lib/config";
import { googleIndexRobots } from "@/lib/metadata";
import { BreadcrumbStructuredData, FAQStructuredData, CourseStructuredData } from "@/lib/schema";
import { MKT } from "@/lib/marketing-ui";

const iconMap = {
  GraduationCap,
  BookOpen,
  Brain,
  Briefcase,
  Stethoscope,
  Scale,
  Trophy,
  Languages,
  Calculator,
} as const;

export function generateStaticParams() {
  return MARKETING_EXAMS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const exam = getMarketingExam(slug);
  if (!exam) return {};

  const title = `${exam.shortName} Prep Online | Practice Tests & AI Tutor | NomoExam`;
  const description = `${exam.description} Prepare with NomoExam—practice tests, flashcards, study paths, and AI help.`;
  const canonical = marketingAbsoluteUrl(`/exams/${exam.slug}`);
  const og = marketingAbsoluteUrl("/og-image.svg");

  return {
    title,
    description,
    keywords: examSeoKeywords(exam),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "NomoExam",
      type: "website",
      locale: "en_US",
      images: [{ url: og, width: 1200, height: 630, alt: `NomoExam ${exam.shortName} prep` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [og],
    },
    robots: googleIndexRobots,
  };
}

function ExamBody({ exam }: { exam: MarketingExamDefinition }) {
  const Icon = iconMap[exam.icon];
  const faqs = examFaqsForSlug(exam);
  const appExamUrl = getAppUrl(`/exams/${exam.slug}`);

  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "Exams", url: marketingAbsoluteUrl("/exams") },
          { name: `${exam.shortName} prep`, url: marketingAbsoluteUrl(`/exams/${exam.slug}`) },
        ]}
      />
      <FAQStructuredData faqs={faqs} />
      <CourseStructuredData
        name={`${exam.shortName} preparation on NomoExam`}
        description={`${exam.description} Online prep with practice, review, and AI support.`}
        courseMode="online"
        courseWorkload="Self-paced"
      />

      <div className={`${MKT.pageSection} pb-20 pt-28 md:pb-32 md:pt-36`}>
        <div className={`${MKT.container} relative max-w-3xl`}>
          <nav className="mb-10 text-sm font-medium text-neutral-500" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="text-neutral-600 hover:text-neutral-900">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/exams" className="text-neutral-600 hover:text-neutral-900">
                  Exams
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-neutral-900">{exam.shortName}</li>
            </ol>
          </nav>

          <div className="mb-8 flex flex-wrap items-start gap-4">
            <div className={`${MKT.iconTile} ${MKT.iconTileMd}`}>
              <Icon className="h-7 w-7" strokeWidth={2} />
            </div>
            <div>
              <p className={`${MKT.badgeLight} mb-3`}>
                {exam.availability === "live" ? "Available now" : "On the roadmap"}
              </p>
              <h1 className={MKT.h1OnLight}>NomoExam for {exam.shortName}</h1>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-neutral-500">{exam.fullName}</p>
            </div>
          </div>

          <article
            className="prose prose-neutral prose-p:font-medium prose-p:text-neutral-600 max-w-none rounded-2xl border border-black/[0.08] bg-white/90 px-6 py-8 shadow-sm md:px-10 md:py-10"
            dangerouslySetInnerHTML={{ __html: exam.longHtml }}
          />

          <section className="mt-10 rounded-2xl border border-black/[0.08] bg-white/90 px-6 py-8 md:px-10" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-barlow text-xl font-semibold text-neutral-900 md:text-2xl">
              {exam.shortName} prep — common questions
            </h2>
            <dl className="mt-6 space-y-6">
              {faqs.map((f) => (
                <div key={f.question}>
                  <dt className="font-barlow font-semibold text-neutral-900">{f.question}</dt>
                  <dd className="mt-2 text-sm font-medium leading-relaxed text-neutral-600 md:text-base">{f.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            {exam.availability === "live" ? (
              <a
                href={appExamUrl}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-8 py-4 text-center text-base font-semibold text-white transition-all hover:bg-neutral-800 sm:flex-none"
              >
                Open {exam.shortName} in the app
                <ArrowUpRight className="h-5 w-5" />
              </a>
            ) : (
              <a
                href={getAppUrl("/auth")}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-8 py-4 text-center text-base font-semibold text-white transition-all hover:bg-neutral-800 sm:flex-none"
              >
                Create account — get notified
                <ArrowUpRight className="h-5 w-5" />
              </a>
            )}
            <Link
              href="/pricing"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-black/15 bg-white px-8 py-4 text-center text-base font-semibold text-neutral-900 transition-all hover:bg-zinc-50 sm:flex-none"
            >
              View pricing
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>

          <p className="mt-8 text-center text-sm font-medium text-neutral-500">
            Student sign-in and practice happen in the NomoExam app — this page is informational (SEO).
          </p>

          {/* Android App CTA */}
          <div className="mt-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent-lime/5 p-8">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-neutral-900">
                <Smartphone className="h-8 w-8 text-accent-lime" />
              </div>
              <div className="flex-1">
                <h3 className="font-barlow mb-2 text-xl font-bold text-neutral-900 md:text-2xl">
                  Practice {exam.shortName} on Android
                </h3>
                <p className="mb-4 text-sm font-medium text-neutral-600 md:text-base">
                  Download NomoExam on your Android device and prepare for {exam.shortName} anywhere. Practice tests,
                  flashcards, AI tutor, and personalized study plans—all in one app.
                </p>
                <a
                  href={ANDROID_APP.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-neutral-800"
                >
                  <Download className="h-4 w-4" />
                  Download on Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default async function ExamLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exam = getMarketingExam(slug);
  if (!exam) notFound();

  return (
    <MarketingPageShell>
      <main>
        <ExamBody exam={exam} />
      </main>
    </MarketingPageShell>
  );
}
