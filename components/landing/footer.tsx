"use client";

import Link from "next/link";
import Image from "next/image";
import { ANDROID_APP } from "@/lib/config";
import { Instagram, Twitter } from "lucide-react";

const footerLinks = {
  exams: {
    title: "Exams",
    links: [
      { label: "All Exams", href: "/exams" },
      { label: "SAT Prep", href: "/exams/sat" },
      { label: "ACT Prep", href: "/exams/act" },
      { label: "GRE Prep", href: "/exams/gre" },
      { label: "GMAT Prep", href: "/exams/gmat" },
      { label: "MCAT Prep", href: "/exams/mcat" },
      { label: "LSAT Prep", href: "/exams/lsat" },
      { label: "JEE Prep", href: "/exams/jee" },
      { label: "NEET Prep", href: "/exams/neet" },
    ],
  },
  product: {
    title: "Product",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Features", href: "/features" },
      { label: "Nomo AI Tutor", href: "/features/nomo-ai" },
      { label: "Pricing", href: "/pricing" },
      { label: "Try Free", href: "/try-free" },
    ],
  },
  apps: {
    title: "Apps",
    links: [
      { label: "Download Exam App", href: "/download-exam-app" },
      { label: "Android App", href: ANDROID_APP.playStoreUrl, external: true },
      { label: "Mock Test App", href: "/mock-test-app" },
      { label: "Free Mock Tests", href: "/free-mock-test-app" },
      { label: "Study App", href: "/study-app-for-students" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "How to Prepare for SAT", href: "/how-to-prepare-for-sat" },
      { label: "SAT Study Plan", href: "/sat-study-plan" },
      { label: "How to Prepare for JEE", href: "/how-to-prepare-for-jee" },
      { label: "NEET Preparation Strategy", href: "/neet-preparation-strategy" },
      { label: "Mock Test Strategy", href: "/mock-test-strategy" },
      { label: "Exam Preparation App", href: "/exam-preparation-app" },
    ],
  },
  compare: {
    title: "Compare",
    links: [
      { label: "Compare Tests", href: "/compare" },
      { label: "SAT vs ACT", href: "/compare/sat-vs-act" },
      { label: "GRE vs GMAT", href: "/compare/gre-vs-gmat" },
      { label: "Nomoexam vs Khan Academy", href: "/compare/nomoexam-vs-khan-academy" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Support", href: "mailto:support@nomoexam.com", external: true },
    ],
  },
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "Reddit",
      href: "https://www.reddit.com/user/NomoExam/",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.385 4.859-7.181 4.859-3.796 0-7.182-2.165-7.182-4.859a3.5 3.5 0 0 1 .476-1.565c-.495-.355-1.092-.893-1.092-1.668 0-.968.786-1.755 1.754-1.755.463 0 .905.167 1.236.427 1.231-.857 2.846-1.43 4.664-1.449l.766-3.541a1.25 1.25 0 0 1 1.478-.951zm-4.139 6.341a1.755 1.755 0 1 1 0 3.51 1.755 1.755 0 0 1 0-3.51zm4.017 2.755a1.755 1.755 0 1 1 3.51 0 1.755 1.755 0 0 1-3.51 0z"/>
        </svg>
      ),
      color: "text-white"
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@nomoexam",
      useImage: true,
      color: "text-white"
    },
    {
      name: "Twitter/X",
      href: "https://x.com/nomoexams",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.967 6.807H2.288l7.732-8.835L1.76 2.25h6.836l4.713 6.231 5.579-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: "text-white"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/nomo.exam",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: "text-white"
    },
  ];

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      {/* Huge grayish background branding - left to right */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap">
          <div className="font-barlow text-9xl font-black leading-none" style={{ color: '#1a1a1a' }}>
            nomoexam
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Main Grid */}
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-5 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-8 group">
                <Image
                  src="/logo-icon.png"
                  alt="Nomoexam"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-lg object-cover transition-transform group-hover:scale-105"
                  unoptimized
                />
                <span className="font-barlow text-2xl font-bold text-white">
                  nomoexam
                </span>
              </Link>
              
              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded transition-all duration-300 hover:opacity-70 ${social.color}`}
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.useImage ? (
                      <Image
                        src="/tiktok-logo.png"
                        alt="TikTok"
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain invert"
                        unoptimized
                      />
                    ) : (
                      social.icon
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Exams */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-6">
                Exams
              </h3>
              <ul className="space-y-3">
                {footerLinks.exams.links.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-6">
                Product
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Resources */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-6">
                Company
              </h3>
              <ul className="space-y-3 mb-8">
                {footerLinks.company.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-neutral-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-6">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.links.slice(0, 3).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-800 mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs text-neutral-500">
              © {currentYear} nomoexam. All rights reserved
            </p>
            
            <div className="flex gap-6">
              <a
                href="https://example.com/privacy"
                className="text-xs text-neutral-500 transition-colors hover:text-white"
              >
                Privacy
              </a>
              <a
                href="https://example.com/terms"
                className="text-xs text-neutral-500 transition-colors hover:text-white"
              >
                Terms
              </a>
              <a
                href="https://example.com/cookies"
                className="text-xs text-neutral-500 transition-colors hover:text-white"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
