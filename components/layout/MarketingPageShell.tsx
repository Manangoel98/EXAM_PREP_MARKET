import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/landing/footer";
import { SiteHeader } from "@/components/layout/SiteHeader";

type MarketingPageShellProps = {
  children: ReactNode;
  /** @default true */
  showFooter?: boolean;
  /** @default true */
  showHeader?: boolean;
  className?: string;
};

/**
 * Wrapper for all public (pre-login) pages: zinc canvas, Barlow, site header, footer.
 */
export function MarketingPageShell({
  children,
  showFooter = true,
  showHeader = true,
  className,
}: MarketingPageShellProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-zinc-50 font-barlow text-neutral-900 antialiased",
        className
      )}
    >
      {showHeader ? <SiteHeader /> : null}
      {children}
      {showFooter ? <Footer /> : null}
    </div>
  );
}
