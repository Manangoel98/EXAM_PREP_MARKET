import { ExamPrepAppPage } from "@/app/[exam]-prep-app/page";
import { getMarketingExam } from "@/lib/exams-marketing-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { marketingAbsoluteUrl } from "@/lib/config";

const canonical = marketingAbsoluteUrl("/ap-cybersecurity-prep-app");
const og = marketingAbsoluteUrl("/opengraph-image");

export const metadata: Metadata = {
  title: "AP Cybersecurity Prep App — Full-Length Practice Tests & AI Tutor | NomoExam",
  description:
    "Master the new College Board AP Cybersecurity course. Full-length 63-question practice exams (60 MCQs + 3 FRQs), device log analysis, AI tutor, and personalized study schedules. Free to try.",
  keywords: [
    "AP Cybersecurity prep app",
    "AP Cybersecurity app",
    "AP Cybersecurity practice test",
    "AP Cybersecurity practice exam",
    "College Board AP Cybersecurity app",
    "best AP Cybersecurity prep",
    "AP Cybersecurity study app",
    "AP Cyber mock test app",
  ],
  alternates: { canonical },
  openGraph: {
    title: "AP Cybersecurity Prep App — Full-Length Practice Tests & AI Tutor",
    description:
      "60 MCQs + 3 FRQ Device Security Analysis practice exams, instant AI step-by-step tutoring, and syllabus-aligned flashcards.",
    url: canonical,
    siteName: "NomoExam",
    type: "website",
    images: [{ url: og, width: 1200, height: 630, alt: "NomoExam AP Cybersecurity Prep App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AP Cybersecurity Prep App — Practice Tests & AI Tutor",
    description: "60 MCQs + 3 FRQs full-length practice exams and AI tutoring for AP Cybersecurity.",
    images: [og],
  },
};

export default function APCybersecurityPrepAppRoute() {
  const exam = getMarketingExam("ap-cybersecurity");
  if (!exam) {
    notFound();
  }
  return <ExamPrepAppPage exam={exam} />;
}
