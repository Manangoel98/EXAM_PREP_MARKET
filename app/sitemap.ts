import type { MetadataRoute } from 'next';
import { getMarketingSiteOrigin } from '@/lib/config';
import { MARKETING_EXAMS } from '@/lib/exams-marketing-data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const baseUrl = getMarketingSiteOrigin();

  // Comparison pages
  const comparisonPages = [
    '/compare',
    '/compare/sat-vs-act',
    '/compare/gre-vs-gmat',
    '/compare/nomoexam-vs-khan-academy',
  ];

  // App-intent pages (for Android discovery)
  const appPages = [
    '/exam-preparation-app',
    '/study-app-for-students',
    '/mock-test-app',
  ];

  // Download intent pages (high conversion)
  const downloadPages = [
    '/download-exam-app',
    '/free-mock-test-app',
  ];

  // Informational/guide pages (traffic layer)
  const guidePages = [
    '/how-to-prepare-for-sat',
    '/how-to-prepare-for-jee',
    '/neet-preparation-strategy',
    '/sat-study-plan',
    '/mock-test-strategy',
  ];

  // Static marketing pages with their priorities and change frequencies
  const staticPages = [
    { url: '/', changeFrequency: 'weekly', priority: 1.0 },
    { url: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/features', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/exams', changeFrequency: 'monthly', priority: 0.95 },
    { url: '/how-it-works', changeFrequency: 'monthly', priority: 0.85 },
    { url: '/features/nomo-ai', changeFrequency: 'monthly', priority: 0.85 },
    { url: '/try-free', changeFrequency: 'monthly', priority: 0.85 },
    { url: '/contact', changeFrequency: 'yearly', priority: 0.7 },
    { url: '/terms-of-service', changeFrequency: 'yearly', priority: 0.4 },
    { url: '/privacy-policy', changeFrequency: 'yearly', priority: 0.4 },
    { url: '/cookie-policy', changeFrequency: 'yearly', priority: 0.4 },
  ].map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified,
    changeFrequency: page.changeFrequency as 'yearly' | 'daily' | 'weekly' | 'monthly',
    priority: page.priority,
  }));

  const examLandingPages = MARKETING_EXAMS.map((exam) => ({
    url: `${baseUrl}/exams/${exam.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: exam.popular ? 0.9 : 0.82,
  }));

  // Programmatic exam-specific app pages (e.g., /sat-prep-app, /jee-prep-app)
  const examAppPages = MARKETING_EXAMS.map((exam) => ({
    url: `${baseUrl}/${exam.slug}-prep-app`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: exam.popular ? 0.91 : 0.85,
  }));

  // Generate comparison pages
  const comparisonPageUrls = comparisonPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Generate app-intent pages
  const appPageUrls = appPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.88,
  }));

  // Generate download intent pages
  const downloadPageUrls = downloadPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.89,
  }));

  // Generate guide/informational pages
  const guidePageUrls = guidePages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.87,
  }));

  return [
    ...staticPages,
    ...examLandingPages,
    ...examAppPages,
    ...comparisonPageUrls,
    ...appPageUrls,
    ...downloadPageUrls,
    ...guidePageUrls,
  ];
}
