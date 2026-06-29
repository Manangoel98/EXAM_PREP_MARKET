// Marketing Site Configuration
/** This marketing site’s public origin (canonical, OG, sitemap). Required — no default. */
export function getMarketingSiteOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_BASE_URL?.trim();
  if (!raw) {
    throw new Error(
      'NEXT_PUBLIC_BASE_URL is required — set to this marketing site’s public origin (e.g. https://nomoexam.com).',
    );
  }
  return raw.replace(/\/$/, '');
}

/** Student app origin — required for every link into the app. */
export function getStudentAppOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (!raw) {
    throw new Error(
      'NEXT_PUBLIC_APP_URL is required — set to the student app origin (e.g. https://app.nomoexam.com).',
    );
  }
  return raw.replace(/\/$/, '');
}

/** Absolute URL on this marketing site, e.g. `/pricing` → `https://…/pricing` */
export function marketingAbsoluteUrl(path: string = ''): string {
  const base = getMarketingSiteOrigin();
  if (!path || path === '/') return base;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Android app constants for SEO and deep linking */
export const ANDROID_APP = {
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.nomoexam.student",
  packageName: "com.nomoexam.student",
  appName: "NomoExam",
  shortDescription: "SAT, ACT, GRE & more - AI-powered exam prep app",
  version: "2.0",
} as const;

/** Pricing configuration (fallback for SSG pages) */
export const PRICING = {
  monthlyPrice: 9,
  currency: 'USD',
  currencySymbol: '$',
  interval: 'month',
  perExam: true,
} as const;

// Price formatting helpers
export const formatPrice = (amount: number = PRICING.monthlyPrice) => 
  `${PRICING.currencySymbol}${amount}`;

export const getPriceText = () => 
  `${formatPrice()}/${PRICING.interval}${PRICING.perExam ? ' per exam' : ''}`;

export const getFullPriceText = () => 
  `${formatPrice()}/${PRICING.interval}${PRICING.perExam ? ' per exam' : ''} (${PRICING.currency})`;

export const config = {
  app: {
    name: 'NomoExam',
    get url() {
      return getMarketingSiteOrigin();
    },
    get studentAppUrl() {
      return getStudentAppOrigin();
    },
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

/** Absolute URL on the student app (separate host from marketing). */
export const getAppUrl = (path: string = '') => {
  const base = getStudentAppOrigin();
  if (!path) return base;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
};
