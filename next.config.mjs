import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Enable type checking in production builds
    // Note: Fix remaining TS errors before enabling this in CI/CD
    ignoreBuildErrors: process.env.CI === 'true' ? false : true,
  },
  images: {
    unoptimized: true, // Allow images from /public folder to render without optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_API_URL ? new URL(process.env.NEXT_PUBLIC_API_URL).hostname : '**',
      },
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_API_URL ? new URL(process.env.NEXT_PUBLIC_API_URL).hostname : '**',
      },
    ],
  },
  // Performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: false,
  generateEtags: true,

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Caching and performance
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  staticPageGenerationTimeout: 120,

  experimental: {
    optimizePackageImports: [
      '@radix-ui/react-icons',
      'lucide-react',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-dialog',
      '@radix-ui/react-popover',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-avatar',
      '@radix-ui/react-badge',
      '@radix-ui/react-button',
      '@radix-ui/react-card',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-input',
      '@radix-ui/react-label',
      '@radix-ui/react-select',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-tooltip',
    ],
    webVitalsAttribution: ['CLS', 'LCP'],
    scrollRestoration: false,
  },

  // Security headers - Fix COOP errors with Firebase auth popups
  async headers() {
    return [
      {
        // More permissive COOP for auth pages to allow Firebase popups
        source: '/auth/:path*',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'unsafe-none',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
        ],
      },
    ];
  },

  // Pin Turbopack root so monorepo lockfiles at repo root do not confuse resolution (faster, clearer dev compiles)
  turbopack: {
    root: __dirname,
  },

  // Many crawlers request /favicon.ico explicitly; serve logo-icon.png at that path (avoids 404 / missing icon audits).
  async rewrites() {
    return [{ source: '/favicon.ico', destination: '/logo-icon.png' }]
  },
}

export default nextConfig
