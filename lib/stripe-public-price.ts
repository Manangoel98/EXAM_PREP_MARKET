export type PublicStripePrice = {
  /** Dollar amount as Stripe stores it, e.g. "4.99". */
  amount: string;
  currency: string;
  interval: string;
  /** "$4.99/month" */
  shortLabel: string;
  /** "$4.99/month per exam" */
  label: string;
};

type StripePriceObject = {
  unit_amount?: number;
  currency?: string;
  recurring?: { interval?: string };
};

type StripeProductLike = {
  active?: boolean;
  default_price?: StripePriceObject | string | null;
};

/** Lowest active default price from GET /api/stripe/products. No local price constant. */
export function lowestStripePrice(products: unknown): PublicStripePrice | null {
  if (!Array.isArray(products)) return null;

  let best: { unit: number; currency: string; interval: string } | null = null;

  for (const product of products) {
    if (!product || typeof product !== "object") continue;
    const row = product as StripeProductLike;
    if (row.active === false) continue;
    const price = row.default_price;
    if (!price || typeof price === "string" || typeof price.unit_amount !== "number") continue;
    if (!best || price.unit_amount < best.unit) {
      best = {
        unit: price.unit_amount,
        currency: (price.currency || "usd").toUpperCase(),
        interval: price.recurring?.interval || "month",
      };
    }
  }

  if (!best) return null;

  const dollars = best.unit / 100;
  const amount = Number.isInteger(dollars) ? String(dollars) : dollars.toFixed(2);
  const symbol = best.currency === "USD" ? "$" : `${best.currency} `;
  const shortLabel = `${symbol}${amount}/${best.interval}`;

  return {
    amount,
    currency: best.currency,
    interval: best.interval,
    shortLabel,
    label: `${shortLabel} per exam`,
  };
}

export async function getPublicStripePrice(): Promise<PublicStripePrice | null> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL?.trim().replace(/\/$/, "");
  if (!apiUrl) return null;

  try {
    const res = await fetch(`${apiUrl}/api/stripe/products`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return lowestStripePrice(await res.json());
  } catch {
    return null;
  }
}
