/**
 * Schema.org structured data utilities for NomoExam
 * Helps AI crawlers and search engines understand our content better
 */

import { type ReactElement } from 'react';
import { config } from './config';

interface BaseSchema {
  '@context': 'https://schema.org';
  '@type': string;
}

interface OrganizationSchema extends BaseSchema {
  '@type': 'Organization';
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs?: string[];
  foundingDate?: string;
  contactPoint?: {
    '@type': 'ContactPoint';
    contactType: string;
    email?: string;
  };
}

interface WebSiteSchema extends BaseSchema {
  '@type': 'WebSite';
  name: string;
  url: string;
  description: string;
  publisher: {
    '@type': 'Organization';
    name: string;
  };
  potentialAction?: {
    '@type': 'SearchAction';
    target: {
      '@type': 'EntryPoint';
      urlTemplate: string;
    };
    'query-input': string;
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageSchema extends BaseSchema {
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

interface CourseSchema extends BaseSchema {
  '@type': 'Course';
  name: string;
  description: string;
  provider: {
    '@type': 'Organization';
    name: string;
    url: string;
  };
  hasCourseInstance?: {
    '@type': 'CourseInstance';
    courseMode: string;
    courseWorkload?: string;
  };
}

interface EducationalOrganizationSchema extends BaseSchema {
  '@type': 'EducationalOrganization';
  name: string;
  url: string;
  description: string;
  logo?: string;
  sameAs?: string[];
}

const baseUrl = config.app.url;

/**
 * Renders JSON-LD structured data in a script tag
 */
function StructuredData({ data }: { data: Record<string, any> }): ReactElement {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0), // Minified for production
      }}
    />
  );
}

/**
 * Organization schema for homepage and global presence
 */
export function OrganizationStructuredData(): ReactElement {
  const data: OrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.seo.siteName,
    url: baseUrl,
    logo: `${baseUrl}${config.seo.defaultImage}`,
    description: config.seo.description,
    sameAs: [
      `https://x.com/${config.seo.socialHandles.twitter.replace('@', '')}`,
      config.seo.socialHandles.facebook,
      config.seo.socialHandles.linkedin,
    ],
    foundingDate: '2025',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: config.seo.supportEmail,
    },
  };

  return <StructuredData data={data} />;
}

/**
 * WebSite schema for search functionality
 */
export function WebSiteStructuredData(): ReactElement {
  const data: WebSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.seo.siteName,
    url: baseUrl,
    description: config.seo.description,
    publisher: {
      '@type': 'Organization',
      name: config.seo.siteName,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/exams?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return <StructuredData data={data} />;
}

/**
 * SiteNavigationElement schema for Google Sitelinks
 * Helps Google understand your main navigation structure
 */
export function SiteNavigationStructuredData(): ReactElement {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'Pricing',
        description: 'Affordable exam prep plans for all major exams',
        url: `${baseUrl}/pricing`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'SAT Prep',
        description: 'Complete SAT preparation with practice tests and AI tutoring',
        url: `${baseUrl}/exams/sat`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'GRE Prep',
        description: 'Master the GRE with our comprehensive prep platform',
        url: `${baseUrl}/exams/gre`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'GMAT Prep',
        description: 'Ace the GMAT for MBA admissions',
        url: `${baseUrl}/exams/gmat`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 5,
        name: 'MCAT Prep',
        description: 'Medical school admission test preparation',
        url: `${baseUrl}/exams/mcat`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 6,
        name: 'Nomo AI Tutor',
        description: 'Your personal 24/7 AI exam tutor',
        url: `${baseUrl}/features/nomo-ai`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 7,
        name: 'Practice Papers',
        description: 'Full-length exam practice tests',
        url: `${baseUrl}/practice-papers`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 8,
        name: 'How it Works',
        description: 'Learn how NomoExam helps you succeed',
        url: `${baseUrl}/how-it-works`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 9,
        name: 'Contact',
        description: 'Get in touch with our support team',
        url: `${baseUrl}/contact`,
      },
    ],
  };

  return <StructuredData data={data} />;
}

/**
 * FAQ schema for FAQ sections
 */
export function FAQStructuredData({ faqs }: { faqs: FAQItem[] }): ReactElement {
  const data: FAQPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <StructuredData data={data} />;
}

/**
 * Course schema for exam prep courses
 */
export function CourseStructuredData({
  name,
  description,
  courseMode = 'online',
  courseWorkload,
}: {
  name: string;
  description: string;
  courseMode?: string;
  courseWorkload?: string;
}): ReactElement {
  const data: CourseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: config.seo.siteName,
      url: baseUrl,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode,
      courseWorkload,
    },
  };

  return <StructuredData data={data} />;
}

/**
 * Educational Organization schema
 */
export function EducationalOrganizationStructuredData(): ReactElement {
  const data: EducationalOrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: config.seo.siteName,
    url: baseUrl,
    description: 'Online education platform specializing in AI-powered standardized test preparation for SAT, ACT, GRE, GMAT, and more.',
    logo: `${baseUrl}${config.seo.defaultImage}`,
    sameAs: [
      `https://x.com/${config.seo.socialHandles.twitter.replace('@', '')}`,
      config.seo.socialHandles.facebook,
      config.seo.socialHandles.linkedin,
    ],
  };

  return <StructuredData data={data} />;
}

/**
 * Generic structured data renderer for custom schemas
 */
export function CustomStructuredData({ data }: { data: Record<string, any> }): ReactElement {
  return <StructuredData data={data} />;
}

/**
 * BreadcrumbList schema for navigation
 */
export function BreadcrumbStructuredData({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}): ReactElement {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  };

  return <StructuredData data={data} />;
}

/**
 * Review/Rating schema for testimonials
 */
export function ReviewStructuredData({
  itemName,
  ratingValue,
  bestRating = 5,
  reviewCount,
}: {
  itemName: string;
  ratingValue: number;
  bestRating?: number;
  reviewCount: number;
}): ReactElement {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: itemName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      bestRating,
      reviewCount,
    },
  };

  return <StructuredData data={data} />;
}

/**
 * HowTo schema for interactive guides/demos
 */
export function HowToStructuredData({
  name,
  description,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string; }>;
  totalTime?: string;
}): ReactElement {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  return <StructuredData data={data} />;
}

/**
 * Article schema for blog posts
 */
export function ArticleStructuredData({
  title,
  description,
  datePublished,
  dateModified,
  authorName = `${config.seo.siteName} Team`,
  image,
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}): ReactElement {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: config.seo.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}${config.seo.defaultImage}`,
      },
    },
    image: image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : `${baseUrl}${config.seo.defaultImage}`,
  };

  return <StructuredData data={data} />;
}

const homePageDescription =
  'Nomoexam is a paid exam prep platform with practice tests, flashcards, learning paths, and an AI tutor for SAT, ACT, and more exams. Subscriptions are per exam in USD; cancel anytime.';

/**
 * Homepage WebPage + SoftwareApplication JSON-LD for search and AI citation (clear entities, speakable target).
 */
export function HomePageWebStructuredData(): ReactElement {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}/#webpage`,
        url: baseUrl,
        name: 'Nomoexam — SAT & ACT Prep | Practice Tests, Flashcards & AI Tutor',
        description: homePageDescription,
        inLanguage: 'en-US',
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${baseUrl}/#website`,
          url: baseUrl,
          name: config.seo.siteName,
        },
        about: [
          { '@type': 'Thing', name: 'Standardized test preparation' },
          { '@type': 'Thing', name: 'SAT preparation' },
          { '@type': 'Thing', name: 'ACT preparation' },
          { '@type': 'Thing', name: 'GRE preparation' },
          { '@type': 'Thing', name: 'GMAT preparation' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.landing-seo-article'],
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${baseUrl}/og-image.svg`,
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${baseUrl}/#softwareapplication`,
        name: config.seo.siteName,
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        url: baseUrl,
        description: homePageDescription,
        offers: {
          '@type': 'Offer',
          price: '9',
          priceCurrency: 'USD',
          description: 'Per exam per month (USD). Cancel anytime. No free trial.',
        },
        provider: {
          '@type': 'Organization',
          name: config.seo.siteName,
          url: baseUrl,
        },
      },
    ],
  };

  return <StructuredData data={data} />;
}
