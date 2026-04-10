import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/landing/footer";

type MarketingPageShellProps = {
  children: ReactNode;
  /** @default true */
  showFooter?: boolean;
  className?: string;
};

/**
 * Wrapper for all public (pre-login) pages: zinc canvas, Barlow, site footer.
 */
export function MarketingPageShell({
  children,
  showFooter = true,
  className,
}: MarketingPageShellProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-zinc-50 font-barlow text-neutral-900 antialiased",
        className
      )}
    >
      {children}
      {showFooter ? <Footer /> : null}
    </div>
  );
}
