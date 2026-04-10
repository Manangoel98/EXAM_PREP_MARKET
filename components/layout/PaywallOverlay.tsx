"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Crown, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface PaywallOverlayProps {
  title?: string;
  description?: string;
  features?: string[];
}

/**
 * PaywallOverlay - Soft paywall component that blocks content for non-subscribers
 *
 * Shows an upgrade prompt without redirecting users away from the page.
 * This allows free users to browse the app and see what's available.
 */
export function PaywallOverlay({
  title = "Upgrade to Premium",
  description = "Unlock this feature and get full access to all premium content.",
  features = [
    "10,000+ Practice Questions",
    "AI-Powered Study Plans",
    "Detailed Performance Analytics",
    "Priority Support",
    "Unlimited Practice Sets"
  ]
}: PaywallOverlayProps) {
  const router = useRouter();

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <Card className="shadow-lg border max-w-md">
        <CardContent className="p-8 text-center space-y-4">
          <Lock className="h-12 w-12 text-muted-foreground mx-auto" />
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
          <Button
            onClick={() => router.push('/pricing')}
            className="w-full h-12 text-base font-semibold"
          >
            Upgrade Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
