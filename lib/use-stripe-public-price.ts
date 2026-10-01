"use client";

import { useEffect, useState } from "react";
import { lowestStripePrice, type PublicStripePrice } from "@/lib/stripe-public-price";

/** Live per-exam price from Stripe. Null until the products request returns. */
export function useStripePublicPrice(): PublicStripePrice | null {
  const [price, setPrice] = useState<PublicStripePrice | null>(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL?.trim().replace(/\/$/, "");
    if (!apiUrl) return;

    let cancelled = false;
    fetch(`${apiUrl}/api/stripe/products`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data) setPrice(lowestStripePrice(data));
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return price;
}
