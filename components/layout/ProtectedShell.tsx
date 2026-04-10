"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { isProtectedPath } from "@/lib/routing";
import { AppLayoutClient } from "@/components/layout/AppLayoutClient";
import { SubscriptionGuard } from "@/components/layout/SubscriptionGuard";

interface ProtectedShellProps {
  children: ReactNode;
}

/**
 * ProtectedShell - Wraps protected routes with layout and subscription enforcement
 * 
 * Flow:
 * 1. Check if route is protected (requires login)
 * 2. If protected, wrap with AppLayoutClient (sidebar, header, etc.)
 * 3. SubscriptionGuard handles subscription-required routes (redirects to /pricing if needed)
 */
export function ProtectedShell({ children }: ProtectedShellProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render nothing on server/hydration to prevent mismatch
    return <>{children}</>;
  }

  const protectedRoute = isProtectedPath(pathname);

  if (!protectedRoute) {
    return <>{children}</>;
  }

  return (
    <AppLayoutClient>
      <SubscriptionGuard>
        {children}
      </SubscriptionGuard>
    </AppLayoutClient>
  );
}
