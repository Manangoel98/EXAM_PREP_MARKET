import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import { OTHER_GUIDES, SAT_GUIDES } from "@/lib/sat-guides";
import type { Metadata } from "next";
import Link from "next/link";
import { marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, CustomStructuredData } from "@/lib/schema";
import { BookOpen } from "lucide-react";

const canonical = marketingAbsoluteUrl("/guides");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "SAT Study Guides (2026) | NomoExam",
  description:
    "Free SAT guides: Math, Reading and Writing, the digital format, 2026–27 test dates, score targets, and study plans. One list, all of them.",
  alternates: { canonical },
  keywords: [
    "SAT study guide",
    "SAT guides",
    "digital SAT guide",
    "SAT math guide",
    "SAT reading guide",
    "SAT test dates",
  ],
  openGraph: {
    title: "SAT Study Guides",
    description: "Every free NomoExam SAT guide in one list, starting with Math, Reading and Writing, format, and dates.",
    url: canonical,
    siteName: "NomoExam",
    type: "website",
    images: [{ url: og, width: 1200, height: 630, alt: "NomoExam SAT study guides" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAT Study Guides",
    description: "Math, Reading and Writing, format, dates, and score guides.",
    images: [og],
  },
};

export default function GuidesPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SAT Study Guides",
    url: canonical,
    description: "Free SAT study guides from NomoExam, plus a shorter list of guides for other exams.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: SAT_GUIDES.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.title,
        url: marketingAbsoluteUrl(guide.href),
        description: guide.description,
      })),
    },
  };

  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "SAT Guides", url: canonical },
        ]}
      />
      <CustomStructuredData data={itemList} />
      <main>
        <section className={`${MKT.pageSection} pb-20 pt-28 md:pb-32 md:pt-36`}>
          <div className={`${MKT.container} mx-auto max-w-4xl`}>
            <div className="mb-10">
              <div className={`${MKT.badgeLight} mb-4`}>
                <BookOpen className="h-4 w-4" />
                <span>Free guides</span>
              </div>
              <h1 className={`${MKT.h1OnLight} mb-4`}>SAT Study Guides</h1>
              <p className="text-base font-medium leading-relaxed text-neutral-700 md:text-lg">
                These are the SAT guides on NomoExam. Start with the test you will actually sit: Math, Reading and Writing, the digital format, and the 2026–27 dates. The score and study-plan guides sit under those. Each one cites College Board for the facts and links to the others, so you are not sent out to a pile of prep-company explainers.
              </p>
            </div>

            <h2 className="font-barlow mb-4 text-2xl font-bold text-neutral-900">SAT</h2>
            <ul className="space-y-3">
              {SAT_GUIDES.map((guide) => (
                <li key={guide.href}>
                  <Link
                    href={guide.href}
                    className="block rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-400"
                  >
                    <span className="font-barlow text-lg font-bold text-neutral-900">{guide.title}</span>
                    <span className="mt-1 block text-base font-medium text-neutral-600">{guide.description}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="font-barlow mb-4 mt-12 text-2xl font-bold text-neutral-900">Other exams</h2>
            <ul className="space-y-3">
              {OTHER_GUIDES.map((guide) => (
                <li key={guide.href}>
                  <Link
                    href={guide.href}
                    className="block rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-400"
                  >
                    <span className="font-barlow text-lg font-bold text-neutral-900">{guide.title}</span>
                    <span className="mt-1 block text-base font-medium text-neutral-600">{guide.description}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-base font-medium leading-relaxed text-neutral-700">
              When you want timed practice in the same format, the live plan is on{" "}
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
