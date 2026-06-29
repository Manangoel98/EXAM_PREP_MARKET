/**
 * Pricing Configuration
 * Dynamic pricing fetched from Stripe, with fallback for static pages
 */

// Fallback pricing for SSG pages (will be overridden by Stripe data when available)
export const PRICING = {
  monthlyPrice: 9,
  currency: 'USD',
  currencySymbol: '$',
  interval: 'month',
} as const;

// Format price for display
export function formatPrice(amount: number = PRICING.monthlyPrice, currency: string = PRICING.currency): string {
  return `${PRICING.currencySymbol}${amount}`;
}

// Get price description
export function getPriceDescription(): string {
  return `${formatPrice()}/${PRICING.interval} per exam`;
}

// Get full price text
export function getFullPriceText(): string {
  return `${formatPrice()}/${PRICING.interval} per exam (${PRICING.currency})`;
}
