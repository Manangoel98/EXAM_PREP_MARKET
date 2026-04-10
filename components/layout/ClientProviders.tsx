"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const CookieConsentBanner = dynamic(
  () => import('@/components/ui/CookieConsent').then((mod) => mod.default),
  { ssr: false }
);

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CookieConsentBanner />
    </>
  );
}
