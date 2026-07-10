"use client";

import Link from "next/link";
import Image from "next/image";
import { ANDROID_APP } from "@/lib/config";
import { ArrowUpRight } from "lucide-react";

const HERO_VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

const footerLinks = {
  exams: {
    title: "Exam Prep Courses",
    links: [
      { label: "SAT Prep Course", href: "/exams/sat" },
      { label: "ACT Prep Course", href: "/exams/act" },
      { label: "GRE Prep Course", href: "/exams/gre" },
      { label: "GMAT Prep Course", href: "/exams/gmat" },
      { label: "MCAT Prep Course", href: "/exams/mcat" },
      { label: "LSAT Prep Course", href: "/exams/lsat" },
    ],
  },
  guides: {
    title: "Free Study Guides",
    links: [
      { label: "How to Prepare for SAT", href: "/how-to-prepare-for-sat" },
      { label: "Best SAT Study Schedule", href: "/best-sat-study-schedule" },
      { label: "SAT Score Improvement Guide", href: "/how-to-improve-sat-score-200-points" },
      { label: "Best SAT Prep Apps 2026", href: "/best-apps-for-sat-prep" },
      { label: "SAT vs ACT: Which Test?", href: "/act-vs-sat-which-test-should-you-take" },
      { label: "GRE Preparation Guide", href: "/how-to-prepare-for-gre" },
    ],
  },
  product: {
    title: "Platform",
    links: [
      { label: "AI Tutor for Students", href: "/features/nomo-ai" },
      { label: "Practice Tests Online", href: "/mock-test-app" },
      { label: "Study App for Android", href: "/study-app-for-students" },
      { label: "How NomoExam Works", href: "/how-it-works" },
      { label: "Pricing — $4.99/month", href: "/pricing" },
      { label: "Try Free Practice Test", href: "/try-free" },
    ],
  },
  compare: {
    title: "Compare Platforms",
    links: [
      { label: "NomoExam vs Khan Academy", href: "/compare/nomoexam-vs-khan-academy" },
      { label: "SAT vs ACT Comparison", href: "/compare/sat-vs-act" },
      { label: "GRE vs GMAT Comparison", href: "/compare/gre-vs-gmat" },
      { label: "All Exam Comparisons", href: "/compare" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
};

const socialLinks = [
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/NomoExam/",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.385 4.859-7.181 4.859-3.796 0-7.182-2.165-7.182-4.859a3.5 3.5 0 0 1 .476-1.565c-.495-.355-1.092-.893-1.092-1.668 0-.968.786-1.755 1.754-1.755.463 0 .905.167 1.236.427 1.231-.857 2.846-1.43 4.664-1.449l.766-3.541a1.25 1.25 0 0 1 1.478-.951zm-4.139 6.341a1.755 1.755 0 1 1 0 3.51 1.755 1.755 0 0 1 0-3.51zm4.017 2.755a1.755 1.755 0 1 1 3.51 0 1.755 1.755 0 0 1-3.51 0z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@nomoexam",
    useImage: true,
  },
  {
    name: "Twitter/X",
    href: "https://x.com/nomoexams",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.967 6.807H2.288l7.732-8.835L1.76 2.25h6.836l4.713 6.231 5.579-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nomo.exam",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Video Background - spans entire footer */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        {/* Gradient overlay - fades from zinc-50 at top to transparent */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-zinc-50/95 via-60% to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Main footer links section */}
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
          {/* Main Grid - 5 columns */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 mb-12">
            {/* Exam Prep Courses */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-4">
                {footerLinks.exams.title}
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.exams.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Free Study Guides */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-4">
                {footerLinks.guides.title}
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.guides.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platform */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-4">
                {footerLinks.product.title}
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.product.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compare */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-4">
                {footerLinks.compare.title}
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.compare.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company + Social */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-4">
                {footerLinks.company.title}
              </h3>
              <ul className="space-y-2.5 mb-6">
                {footerLinks.company.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/80 text-neutral-700 transition-all duration-300 hover:bg-white hover:text-neutral-900 shadow-sm"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.useImage ? (
                      <Image
                        src="/tiktok-logo.png"
                        alt="TikTok"
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain"
                        unoptimized
                      />
                    ) : (
                      social.icon
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section - blends into video */}
          <div className="text-center py-12 border-t border-black/[0.06]">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl italic text-neutral-900 mb-4">
              Start your exam prep journey today
            </h2>
            <p className="text-neutral-600 font-medium mb-6 max-w-2xl mx-auto">
              Join thousands of students preparing for SAT, ACT, GRE, GMAT, and more with AI-powered practice tests and personalized study plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/try-free"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-neutral-800 shadow-lg"
              >
                Try Free Practice Test
                <ArrowUpRight className="h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/90 border border-black/10 px-8 py-4 text-base font-semibold text-neutral-900 transition-all hover:bg-white shadow-lg"
              >
                View Pricing — $4.99/mo
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar - on video background */}
        <div className="py-8 px-4">
          <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-icon.png"
                alt="Nomoexam"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg object-cover shadow-md"
                unoptimized
              />
              <span className="text-white font-barlow text-lg font-semibold drop-shadow-md">
                Nomoexam
              </span>
            </div>
            <p className="text-sm text-white/80 drop-shadow-sm">
              © {currentYear} Nomoexam. AI-powered exam preparation for students worldwide.
            </p>
          </div>
        </div>

        {/* Large brand wordmark */}
        <div className="relative h-32 sm:h-40 md:h-48 flex items-center justify-center pointer-events-none overflow-hidden">
          <h2
            className="font-heading text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] italic text-white/30 select-none whitespace-nowrap"
            style={{ textShadow: '0 4px 60px rgba(0,0,0,0.2)' }}
          >
            Nomoexam
          </h2>
        </div>
      </div>
    </footer>
  );
};
