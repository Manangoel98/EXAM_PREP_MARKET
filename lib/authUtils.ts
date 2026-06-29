import { logger } from '@/lib/logger';

// Whitelist of allowed redirect paths (prevent open redirect)
export const ALLOWED_REDIRECT_PATHS = [
  '/dashboard',
  '/practice',
  '/study-plan',
  '/activity',
  '/profile',
  '/onboarding',
  '/pricing',
  '/topic-practice',
  '/attempt'
];

export const validateRedirectUrl = (redirect: string): string => {
  // Default to dashboard if no redirect
  if (!redirect) return '/dashboard';

  // Remove any leading/trailing whitespace
  redirect = redirect.trim();

  // Block absolute URLs and protocol-relative URLs
  if (redirect.includes('://') || redirect.startsWith('//')) {
    logger.warn('Blocked absolute redirect URL:', redirect);
    return '/dashboard';
  }

  // Ensure it starts with /
  if (!redirect.startsWith('/')) {
    redirect = '/' + redirect;
  }

  // Check if path is in whitelist (exact match or starts with allowed path)
  const isAllowed = ALLOWED_REDIRECT_PATHS.some(allowedPath =>
    redirect === allowedPath || redirect.startsWith(allowedPath + '/')
  );

  if (!isAllowed) {
    logger.warn('Blocked redirect to non-whitelisted path:', redirect);
    return '/dashboard';
  }

  return redirect;
};
