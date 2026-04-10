import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('firebaseIdToken')?.value;

  const publicPaths = [
    '/',
    '/auth',
    '/try-free',
    '/pricing',
    '/contact',
    '/terms-of-service',
    '/privacy-policy',
    '/cookie-policy',
    '/exams',
    '/sitemap.xml',
  ];
  const isPublicPath = publicPaths.some(path => pathname === path || (path !== '/' && pathname.startsWith(path)));

  // Allow access to public paths
  if (isPublicPath) {
    return NextResponse.next();
  }

  // If trying to access a protected path without a token, redirect to /auth
  if (!token) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\..*|images|favicon.ico|manifest.json).*)',
  ],
};
