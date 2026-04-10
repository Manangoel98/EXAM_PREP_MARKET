// Marketing Site Configuration
export const config = {
  app: {
    name: 'NomoExam',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://nomoexam.com',
    studentAppUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://app.nomoexam.com',
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '', // Optional for contact forms
  },
  seo: {
    siteName: 'NomoExam',
    tagline: 'Simple Exam Prep – Ace Tests Without Stress',
    description: 'AI-powered exam prep platform with practice tests, study plans, and AI doubt-clearing. Prepare for SAT, ACT, GRE, GMAT, and more.',
    socialHandles: {
      twitter: '@nomoexam',
      facebook: 'https://www.facebook.com/nomoexam',
      linkedin: 'https://www.linkedin.com/company/nomoexam',
    },
    defaultImage: '/logo-icon.png',
    supportEmail: 'support@nomoexam.com',
  }
} as const;

// Helper to get app URLs
export const getAppUrl = (path: string = '') => {
  const base = config.app.studentAppUrl;
  return path ? `${base}${path.startsWith('/') ? path : `/${path}`}` : base;
};
