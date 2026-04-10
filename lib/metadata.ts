import type { Metadata } from 'next'
import { config } from './config'

/**
 * Base metadata configuration for NomoExam
 * Used across all pages for consistent SEO and social media previews
 */

const baseUrl = config.app.url
const siteName = config.seo.siteName
const twitterHandle = config.seo.socialHandles.twitter

interface PageMetadataProps {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  keywords?: string[]
  noIndex?: boolean
}

/**
 * Generate comprehensive metadata for a page
 * Includes Open Graph, Twitter Cards, and SEO tags
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  image = '/og-image.svg',
  type = 'website',
  keywords = [],
  noIndex = false,
}: PageMetadataProps): Metadata {
  const url = baseUrl ? `${baseUrl}${path}` : undefined
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`
  
  // Default keywords that apply to all pages
  const defaultKeywords = [
    'exam prep',
    'study platform',
    'practice tests',
    'SAT',
    'GRE',
    'GMAT',
    'ACT',
  ]
  
  const allKeywords = [...new Set([...defaultKeywords, ...keywords])]
  
  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    
    // Open Graph for Facebook, LinkedIn, WhatsApp, etc.
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      type,
      locale: 'en_US',
      images: [
        {
          url: image.startsWith('http') ? image : baseUrl ? `${baseUrl}${image}` : image,
          width: 1200,
          height: 630,
          alt: `${siteName} - ${title}`,
          type: 'image/svg+xml',
        },
      ],
    },
    
    // Twitter/X Cards
    twitter: {
      card: 'summary_large_image',
      site: twitterHandle,
      creator: twitterHandle,
      title: fullTitle,
      description,
      images: [image.startsWith('http') ? image : baseUrl ? `${baseUrl}${image}` : image],
    },
    
    // Robots
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    
    // Canonical URL
    alternates: {
      canonical: url,
    },
  }
}

/**
 * Pre-configured metadata for common pages
 */
export const pageMetadata = {
  home: generatePageMetadata({
    title: `${siteName}: ${config.seo.tagline}`,
    description: 'Quick quizzes, AI drills, and progress tracking. Prep smarter, not harder. Free to start!',
    path: '/',
    keywords: ['flashcards', 'SRS', 'spaced repetition', 'Anki alternative', 'Quizlet alternative', 'simple exam prep'],
  }),
  
  dashboard: generatePageMetadata({
    title: 'Dashboard',
    description: 'View your exam progress, track your stats, and continue practicing for your upcoming exams.',
    path: '/dashboard',
    keywords: ['progress tracking', 'exam dashboard', 'study stats'],
    noIndex: true, // Private page
  }),

  progress: generatePageMetadata({
    title: 'Progress',
    description: 'Track your learning progress, identify weak spots, and see your improvement over time.',
    path: '/progress',
    keywords: ['progress tracking', 'learning analytics', 'weak spots', 'improvement'],
    noIndex: true, // Private page
  }),
  
  profile: generatePageMetadata({
    title: 'Profile',
    description: 'Manage your NomoExam profile, settings, and preferences.',
    path: '/profile',
    keywords: ['user profile', 'account settings'],
    noIndex: true, // Private page
  }),
  
  pricing: generatePageMetadata({
    title: 'Pricing Plans - Affordable Exam Prep',
    description: 'Choose the perfect exam prep plan for SAT, ACT, GRE, GMAT, MCAT, LSAT, JEE, and more. Per-exam subscriptions with full access to practice tests, flashcards, study paths, and unlimited AI tutoring.',
    path: '/pricing',
    keywords: ['exam prep pricing', 'SAT prep cost', 'ACT subscription', 'GRE pricing', 'affordable test prep', 'exam subscription plans', 'test prep payment'],
  }),
  
  contact: generatePageMetadata({
    title: 'Contact Us - Get Help & Support',
    description: 'Get in touch with the NomoExam team for questions, support, or feedback about SAT, ACT, GRE, GMAT, MCAT, LSAT, and JEE exam preparation. We\'re here to help you succeed.',
    path: '/contact',
    keywords: ['contact support', 'exam prep help', 'customer service', 'test prep support', 'NomoExam contact'],
  }),
  
  activity: generatePageMetadata({
    title: 'Activity',
    description: 'View your recent exam attempts, practice sessions, and learning activity.',
    path: '/activity',
    keywords: ['activity feed', 'recent attempts', 'learning history'],
    noIndex: true, // Private page
  }),
  
  tryFree: generatePageMetadata({
    title: 'Try Free - Start Your Exam Prep Journey',
    description: 'Try NomoExam free! Get instant access to practice tests, flashcards, study paths, and AI tutoring for SAT, ACT, GRE, GMAT, MCAT, LSAT, and JEE. No credit card required.',
    path: '/try-free',
    keywords: ['free trial', 'try exam prep', 'free practice tests', 'free study platform', 'no credit card'],
  }),
  
  practicePapers: generatePageMetadata({
    title: 'Practice Papers - Full-Length Exam Tests',
    description: 'Access full-length practice papers for SAT, ACT, GRE, GMAT, MCAT, LSAT, and JEE. Realistic exam simulation with instant AI feedback and detailed performance analytics.',
    path: '/practice-papers',
    keywords: ['practice papers', 'full-length tests', 'mock exams', 'exam simulation', 'practice tests'],
  }),
  
  nomoAI: generatePageMetadata({
    title: 'Nomo AI - Your Personal AI Tutor',
    description: 'Meet Nomo AI, your 24/7 personal exam tutor. Get instant explanations, solve doubts, learn concepts, and receive personalized study strategies for SAT, ACT, GRE, GMAT, MCAT, LSAT, and JEE.',
    path: '/nomoai',
    keywords: ['AI tutor', 'AI exam help', 'personalized learning', 'instant explanations', 'AI study assistant', 'NomoAI'],
  }),
}

// Note: Structured data functionality moved to lib/schema.tsx for better organization and reusability