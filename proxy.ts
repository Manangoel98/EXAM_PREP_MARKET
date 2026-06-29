import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAppUrl } from '@/lib/config';

/**
 * Student app only — these paths are not served by the marketing site.
 * After splitting from student-frontend, login/practice/dashboard live on NEXT_PUBLIC_APP_URL.
 * Requests here must redirect to the app origin so /auth never 404s on the marketing host.
 */
/** Paths that exist only on the student app — redirect from the marketing host to NEXT_PUBLIC_APP_URL. */
const STUDENT_APP_PATH_PREFIXES = [
  '/auth',
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
] as const;

function isStudentAppPath(pathname: string): boolean {
  return STUDENT_APP_PATH_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (isStudentAppPath(pathname)) {
    const appBase = getAppUrl();
    const dest = `${appBase}${pathname}${search}`;
    return NextResponse.redirect(dest);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\..*|images|favicon.ico|manifest.json).*)',
  ],
};
