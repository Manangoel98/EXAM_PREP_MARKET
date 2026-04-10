import type React from "react"
import type { Metadata, Viewport } from "next"
import { Suspense } from "react"
import { Inter, JetBrains_Mono, Barlow, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { config } from '@/lib/config';
import { OrganizationStructuredData, WebSiteStructuredData } from '@/lib/schema';
import ErrorBoundary from '@/components/error/ErrorBoundary';
import { ClientProviders } from '@/components/layout/ClientProviders';
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700']
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-mono',
  weight: ['400', '500']
})

const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-barlow",
  weight: ["300", "400", "500", "600", "700"],
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-instrument",
  weight: ["400"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Nomoexam — Exam Prep | SAT, ACT, GRE, MCAT & More",
  description:
    "Practice tests, flashcards, learning paths, and AI tutor for major exams. Per-exam subscriptions in USD. SAT & ACT available now.",
  manifest: "manifest.json",
  metadataBase: new URL('https://nomoexam.com'),
  alternates: {
    canonical: 'https://nomoexam.com',
  },
  icons: {
    icon: [
      { url: '/logo-icon.png', sizes: 'any' },
      { url: '/logo-icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo-icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/logo-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: config.app.name,
  },
  generator: 'M0xlr',
  keywords: [
    'SAT prep',
    'ACT prep',
    'GRE prep',
    'GMAT prep',
    'MCAT prep',
    'LSAT prep',
    'exam preparation',
    'practice tests',
    'AI tutor',
    'flashcards',
    'standardized test prep',
    'college entrance exam',
    'graduate school prep',
  ],
  authors: [{ name: 'NomoExam Team' }],
  
  openGraph: {
    title: 'Nomoexam — SAT & ACT Prep | Practice, Flashcards, AI Tutor',
    description:
      'Structured exam prep with practice tests, flashcards, paths, and unlimited AI help. Per exam from $9/mo USD.',
    url: 'https://nomoexam.com',
    siteName: 'NomoExam',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://nomoexam.com/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Nomoexam — exam preparation platform',
        type: 'image/svg+xml',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nomoexam',
    creator: '@nomoexam',
    title: 'Nomoexam — SAT & ACT Prep | Practice, Flashcards, AI Tutor',
    description: 'Exam prep with practice tests, flashcards, learning paths, and AI tutor. From $9/mo per exam.',
    images: ['https://nomoexam.com/og-image.svg'],
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#2563eb",
  viewportFit: "cover",
}

export const dynamicParams = true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${barlow.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="alternate" type="application/rss+xml" title={`${config.seo.siteName} RSS Feed`} href="/rss.xml" />
        <OrganizationStructuredData />
        <WebSiteStructuredData />
      </head>
      <body className="bg-zinc-50" suppressHydrationWarning>
        <ErrorBoundary>
          <Suspense fallback={null}>
            <ClientProviders>
              {children}
            </ClientProviders>
          </Suspense>
          <Analytics />
        </ErrorBoundary>
      </body>
    </html>
  );
}
