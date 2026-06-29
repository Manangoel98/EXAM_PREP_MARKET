"use client";

import { ANDROID_APP } from "@/lib/config";
import { MKT } from "@/lib/marketing-ui";
import { Smartphone, Download, Star, TrendingUp, Zap, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AndroidAppSection() {
  return (
    <section className="scroll-mt-44 border-t border-black/[0.06] bg-gradient-to-b from-white to-zinc-50 py-16 md:scroll-mt-52 md:py-24">
      <div className={MKT.container}>
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className={`${MKT.badgeLight} mx-auto mb-4`}>
              <Smartphone className="h-4 w-4 text-accent-lime" />
              <span>Android App</span>
            </div>
            <h2 className={`${MKT.h2Section} mb-4`}>
              Download NomoExam App for Android
            </h2>
            <p className={`${MKT.leadOnLight} mx-auto max-w-2xl`}>
              Study smarter on the go with our exam preparation app. Practice tests, AI tutor, flashcards, and personalized plans—all in your pocket.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className={MKT.card}>
              <div className={`${MKT.iconTile} ${MKT.iconTileSm} mb-4`}>
                <Zap className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">Study Anywhere</h3>
              <p className="text-sm font-medium leading-relaxed text-neutral-600">
                Download content for offline practice. Study on the bus, in the library, or wherever you are.
              </p>
            </div>

            <div className={MKT.card}>
              <div className={`${MKT.iconTile} ${MKT.iconTileSm} mb-4`}>
                <TrendingUp className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">Real-Time Progress</h3>
              <p className="text-sm font-medium leading-relaxed text-neutral-600">
                Track your improvement with instant analytics. See your score predictions update as you practice.
              </p>
            </div>

            <div className={MKT.card}>
              <div className={`${MKT.iconTile} ${MKT.iconTileSm} mb-4`}>
                <Clock className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">Daily Study Plans</h3>
              <p className="text-sm font-medium leading-relaxed text-neutral-600">
                Personalized schedules that adapt to your exam date and performance. Stay on track to your target score.
              </p>
            </div>
          </div>

          {/* CTA Block */}
          <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm md:p-10">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-4 flex items-center justify-center gap-1 lg:justify-start">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-accent-lime text-accent-lime" />
                  ))}
                  <span className="ml-2 font-barlow text-sm font-bold text-neutral-900">4.8 / 5.0</span>
                </div>
                <h3 className="font-barlow mb-2 text-2xl font-bold text-neutral-900 md:text-3xl">
                  Join 2,847+ students using NomoExam
                </h3>
                <p className="mb-6 text-sm font-medium text-neutral-600 md:text-base">
                  Download the best exam preparation app and start improving your scores today. SAT, ACT, GRE, GMAT & more.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                  <a
                    href={ANDROID_APP.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${MKT.btnPrimary} px-8 py-4 text-base`}
                  >
                    <Download className="h-5 w-5" />
                    Download on Google Play
                  </a>
                  <Link href="/exam-preparation-app" className={`${MKT.btnOutlineLight} px-8 py-4 text-base`}>
                    Learn More
                  </Link>
                </div>
                <p className="mt-4 text-xs font-medium text-neutral-500">
                  Free to download · Affordable subscription per exam · Cancel anytime
                </p>
              </div>

              {/* App Screenshot (placeholder) */}
              <div className="flex shrink-0 items-center justify-center lg:w-64">
                <div className="relative h-64 w-48 overflow-hidden rounded-2xl border-4 border-neutral-900 bg-neutral-900 shadow-2xl">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent-lime/20">
                    <Smartphone className="h-20 w-20 text-neutral-900/20" strokeWidth={1} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-neutral-600">
            <Link href="/download-exam-app" className="transition-colors hover:text-primary">
              Download Exam App →
            </Link>
            <Link href="/free-mock-test-app" className="transition-colors hover:text-primary">
              Free Mock Tests →
            </Link>
            <Link href="/study-app-for-students" className="transition-colors hover:text-primary">
              Study App for Students →
            </Link>
            <Link href="/mock-test-app" className="transition-colors hover:text-primary">
              Mock Test App →
            </Link>
            <Link href="/exams" className="transition-colors hover:text-primary">
              View All Exams →
            </Link>
            <Link href="/pricing" className="transition-colors hover:text-primary">
              Pricing →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
