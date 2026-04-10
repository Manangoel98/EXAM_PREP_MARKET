import type { MetadataRoute } from 'next';

// Helper function to fetch exams from API
async function fetchExams(): Promise<{ slug: string }[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    const response = await fetch(`${apiUrl}/api/exams`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      // Silently fail for sitemap generation - use static fallback
      return [];
    }
    
    const exams = await response.json();
    // Ensure exams is an array and has slug
    return exams.filter((exam: any) => exam && exam.slug);

  } catch (error) {
    // Silently fail for sitemap generation - use static fallback
    return []; // Return empty array on error
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://nomoexam.com';

  // All exam slugs
  const examSlugs = ['sat', 'act', 'gre', 'gmat', 'lsat', 'mcat', 'jee', 'reasoning'];
  
  // Comparison pages
  const comparisonPages = [
    '/compare',
    '/compare/sat-vs-act',
    '/compare/gre-vs-gmat',
    '/compare/nomoexam-vs-khan-academy',
  ];

  // Feature pages
  const featurePages = [
    '/flashcards',
    '/how-it-works',
    '/features/nomo-ai',
    '/nomoai',
    '/try-free',
    '/practice-papers',
  ];

  // Static pages with their priorities and change frequencies
  const staticPages = [
    { url: '/', changeFrequency: 'weekly', priority: 1.0 },
    { url: '/exams', changeFrequency: 'weekly', priority: 0.9 },
    { url: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/try-free', changeFrequency: 'monthly', priority: 0.85 },
    { url: '/auth', changeFrequency: 'yearly', priority: 0.5 },
    { url: '/dashboard', changeFrequency: 'daily', priority: 0.7 },
    { url: '/study-plan', changeFrequency: 'daily', priority: 0.7 },
    { url: '/practice-papers', changeFrequency: 'weekly', priority: 0.85 },
    { url: '/nomoai', changeFrequency: 'monthly', priority: 0.85 },
    { url: '/activity', changeFrequency: 'daily', priority: 0.6 },
    { url: '/profile', changeFrequency: 'monthly', priority: 0.5 },
    { url: '/onboarding', changeFrequency: 'yearly', priority: 0.5 },
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

  // Generate exam pages dynamically
  const staticExamPages = examSlugs.map(slug => ({
    url: `${baseUrl}/exams/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // Generate comparison pages
  const comparisonPageUrls = comparisonPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Generate feature pages
  const featurePageUrls = featurePages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // Fetch exams for dynamic routes
  const exams = await fetchExams();
  const examPages = exams.flatMap(exam => [
    {
      url: `${baseUrl}/exams/${exam.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/practice/${exam.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]);

  // Combine all pages
  return [...staticPages, ...staticExamPages, ...comparisonPageUrls, ...featurePageUrls, ...examPages];
}