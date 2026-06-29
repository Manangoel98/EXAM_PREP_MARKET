"use client";

import { usePathname } from "next/navigation";
import { isProtectedPath } from "@/lib/routing";
import { SiteHeader } from "@/components/layout/SiteHeader";

/**
 * Floating glass header for all public (non–app-shell) routes.
 * Each page handles its own top padding/spacing for content below the fixed header.
 * Protected routes use {@link AppLayoutClient} + {@link MobileHeader} instead.
 */
export function PublicSiteChrome() {
  const pathname = usePathname();
  if (isProtectedPath(pathname)) {
    return null;
  }

  return <SiteHeader />;
}
