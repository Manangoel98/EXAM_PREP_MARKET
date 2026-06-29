/**
 * Protected paths require authentication (login)
 */
export function isProtectedPath(pathname?: string | null): boolean {
  if (!pathname) return false;
  const protectedPrefixes = [
    '/dashboard',
    '/nomoai',
    '/practice',
    '/study-plan',
    '/profile',
    '/activity',
    '/practice-papers',
    '/flashcards',
    '/attempt',
    '/onboarding',
  ];
  return protectedPrefixes.some((prefix) => pathname.startsWith(prefix));
}

/**
 * Free access paths - logged-in users can access WITHOUT subscription
 * Users can browse, see their profile, pricing, etc.
 * NOTE: All protected paths now allow browsing, but show paywall for non-subscribers
 */
export function isFreeAccessPath(pathname?: string | null): boolean {
  if (!pathname) return false;
  const freeAccessPaths = [
    '/dashboard',
    '/profile',
    '/pricing',
    '/contact',
    '/onboarding',
    '/practice-papers',
    '/study-plan',
    '/activity',
  ];
  return freeAccessPaths.some((prefix) => pathname.startsWith(prefix));
}

/**
 * Subscription required paths - logged-in users MUST have active subscription
 * If no subscription, redirect to /pricing
 */
export function isSubscriptionRequiredPath(pathname?: string | null): boolean {
  if (!pathname) return false;
  const subscriptionRequiredPrefixes = [
    '/dashboard',        // ADDED - NomoAI now requires subscription
    '/practice-papers',
    '/practice/',
    '/study-plan',
    '/activity',
    '/attempt/',
  ];
  return subscriptionRequiredPrefixes.some((prefix) => pathname.startsWith(prefix));
}

export function isDashboardPath(pathname?: string | null): boolean {
  return Boolean(pathname && pathname.startsWith('/dashboard'));
}

/**
 * Determines if mobile navigation should be hidden on this route
 * Some pages (like full-screen exams) need the navigation hidden for better UX
 */
export function shouldHideMobileNav(pathname?: string | null): boolean {
  if (!pathname) return false;

  // Hide navigation ONLY during active exam sessions (not on listing/results pages)
  // Pattern: /practice/[examType]/exam/[examId] or /practice/[examType]/topic-practice
  const hideNavPatterns = [
    /\/practice\/[^/]+\/exam\/[^/]+$/,  // Active exam sessions (not /solutions)
    /\/practice\/[^/]+\/topic-practice$/,  // Topic practice sessions (not /results)
    /\/attempt\/[^/]+$/,   // Exam attempt in progress
  ];

  return hideNavPatterns.some((pattern) => pattern.test(pathname));
}

