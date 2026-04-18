"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Brain, BarChart3, BookOpen, FileText, Calendar, Target, MessageSquare, Layers } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { LANDING_DURATION, LANDING_EASE, LANDING_VIEWPORT } from "@/lib/landing-motion";
import { getAppUrl } from "@/lib/config";

interface StripePrice {
  id: string;
  unit_amount: number;
  currency: string;
  recurring: {
    interval: string;
    interval_count: number;
  };
}

interface StripeProduct {
  id: string;
  name: string;
  description: string;
  active: boolean;
  default_price: StripePrice;
  metadata?: {
    exam_type?: string;
    order?: string;
  };
}

export default function PricingSection({ embedded = false }: { embedded?: boolean }) {
  const [products, setProducts] = useState<StripeProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/api/stripe/products`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data: StripeProduct[] = await response.json();
        
        // Filter active products with prices and sort by order metadata
        const activeProducts = data
          .filter(p => p.active && p.default_price)
          .sort((a, b) => {
            const orderA = parseInt(a.metadata?.order || '999');
            const orderB = parseInt(b.metadata?.order || '999');
            return orderA - orderB;
          });
        
        setProducts(activeProducts);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err instanceof Error ? err.message : 'Failed to load pricing');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const features = [
    {
      icon: Brain,
      title: "Nomo AI Tutor",
      description: "24/7 personalized AI assistance with real-time access to your complete performance data"
    },
    {
      icon: FileText,
      title: "10,000+ Practice Questions",
      description: "Comprehensive question bank covering all topics with detailed explanations"
    },
    {
      icon: Layers,
      title: "Smart Flashcards",
      description: "Spaced repetition system for effective memorization and quick review"
    },
    {
      icon: BookOpen,
      title: "Full-Length Practice Papers",
      description: "Realistic mock exams that simulate actual test conditions"
    },
    {
      icon: Calendar,
      title: "Personalized Study Plans",
      description: "Custom schedules with Learn, Review, and Practice modes tailored to your goals"
    },
    {
      icon: Target,
      title: "Topic-Wise Practice",
      description: "Focus on specific subjects and topics to strengthen weak areas"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track accuracy, time management, and improvement trends with detailed dashboards"
    },
    {
      icon: MessageSquare,
      title: "Activity Tracking",
      description: "Monitor daily progress with streak calendar and comprehensive activity logs"
    }
  ];

  const formatPrice = (price: StripePrice) => {
    const amount = (price.unit_amount / 100).toFixed(2);
    return {
      amount,
      interval: price.recurring.interval,
      currency: price.currency.toUpperCase()
    };
  };

  return (
    <section
      id="pricing"
      className="scroll-mt-44 bg-gradient-to-b from-zinc-50 via-white to-zinc-50 font-barlow md:scroll-mt-52"
    >
      {/* Hero */}
      <div className="container mx-auto px-4 md:px-6 pb-10 pt-14 text-center md:pb-12 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={LANDING_VIEWPORT}
          transition={{ duration: LANDING_DURATION, ease: LANDING_EASE }}
        >
          <p className="liquid-glass-light mx-auto mb-5 inline-flex rounded-full px-4 py-1.5 text-xs font-medium text-neutral-700">
            Per exam · USD · Cancel anytime
          </p>
          {embedded ? (
            <h2 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl md:leading-tight">
              Plans &amp; checkout
              <br />
              <span className="font-heading text-3xl font-normal italic text-neutral-700 md:text-5xl">
                Same tools as the hero—one subscription per test.
              </span>
            </h2>
          ) : (
            <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl md:leading-tight">
              Pick your exam.
              <br />
              <span className="font-heading text-3xl font-normal italic text-neutral-700 md:text-5xl">
                Full access for that test.
              </span>
            </h1>
          )}
          <p className="mx-auto max-w-xl text-base font-medium text-neutral-600 md:text-lg">
            {loading ? (
              "Loading pricing..."
            ) : products.length > 0 ? (
              <>From <strong className="text-neutral-900">${formatPrice(products[0].default_price).amount}/{formatPrice(products[0].default_price).interval}</strong> when billed monthly. Everything below is included for the exam you choose—practice, flashcards, paths, and unlimited AI help.</>
            ) : (
              "Everything below is included for the exam you choose—practice, flashcards, paths, and unlimited AI help."
            )}
          </p>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div>
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={LANDING_VIEWPORT}
            transition={{ duration: LANDING_DURATION, ease: LANDING_EASE }}
          >
            <h2 className="mb-2 font-heading text-2xl italic text-neutral-900 md:text-3xl">
              Included in every plan
            </h2>
            <p className="text-sm font-medium text-neutral-600 md:text-base">
              No tiers to decode—one price per exam, full product.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={LANDING_VIEWPORT}
                  transition={{
                    duration: LANDING_DURATION,
                    delay: index * 0.05,
                    ease: LANDING_EASE,
                  }}
                >
                  <Card className="h-full border border-black/[0.08] bg-white/90 shadow-sm transition-shadow duration-300 hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-lime/25 text-neutral-900">
                          <Icon className="h-6 w-6" strokeWidth={2} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={LANDING_VIEWPORT}
          transition={{ duration: LANDING_DURATION, ease: LANDING_EASE }}
        >
          <div className="mb-12 text-center">
            <h2 className="mb-2 font-heading text-2xl italic text-neutral-900 md:text-3xl">
              Choose an exam
            </h2>
            <p className="mb-6 text-sm font-medium text-neutral-600 md:text-base">
              Sign up and subscribe to the exam you need.
            </p>
            <div className="inline-flex items-center gap-2 rounded-xl border border-accent-lime/35 bg-accent-lime/10 px-4 py-2.5 text-left text-sm font-medium text-neutral-900">
              <CheckCircle className="h-4 w-4 shrink-0 text-neutral-800" />
              <span>Cancel anytime. Access continues through your paid period.</span>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-accent-lime border-r-transparent"></div>
              <p className="mt-4 text-neutral-600">Loading pricing plans...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">{error}</p>
              <p className="text-neutral-600">Please try refreshing the page</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-600">No pricing plans available at the moment</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {products.map((product, index) => {
                const priceInfo = formatPrice(product.default_price);
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={LANDING_VIEWPORT}
                    transition={{
                      duration: LANDING_DURATION,
                      delay: index * 0.06,
                      ease: LANDING_EASE,
                    }}
                  >
                    <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border-2">
                      <CardHeader className="text-center pb-8 pt-8">
                        <CardTitle className="text-2xl font-bold mb-2">
                          {product.name}
                        </CardTitle>
                        {product.description && (
                          <p className="text-sm text-muted-foreground mt-2">
                            {product.description}
                          </p>
                        )}
                        <div className="mt-4">
                          <div className="text-4xl font-bold text-foreground">
                            ${priceInfo.amount}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            per {priceInfo.interval}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="flex-1 flex flex-col">
                        <div className="space-y-3 mb-8 flex-1">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-muted-foreground">Nomo AI Tutor</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-muted-foreground">10,000+ Practice Questions</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-muted-foreground">Smart Flashcards</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-muted-foreground">Full-Length Practice Papers</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-muted-foreground">Personalized Study Plans</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-muted-foreground">Real-Time Analytics</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-muted-foreground">Priority Support</span>
                          </div>
                        </div>

                        <a href={getAppUrl("/auth")}>
                          <Button
                            size="lg"
                            className="w-full bg-primary hover:bg-primary/90"
                          >
                            Get Started
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>

      {/* Trust Signals */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={LANDING_VIEWPORT}
          transition={{ duration: LANDING_DURATION, ease: LANDING_EASE }}
          className="rounded-2xl border border-black/[0.08] bg-zinc-100/80 p-8 text-center"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="mb-2 font-barlow text-3xl font-bold text-neutral-900">10,000+</div>
              <div className="text-sm font-medium text-neutral-600">Practice questions &amp; explanations</div>
            </div>
            <div>
              <div className="mb-2 font-barlow text-3xl font-bold text-neutral-900">Unlimited</div>
              <div className="text-sm font-medium text-neutral-600">AI tutor for that exam</div>
            </div>
            <div>
              <div className="mb-2 font-barlow text-3xl font-bold text-neutral-900">Full app</div>
              <div className="text-sm font-medium text-neutral-600">Flashcards, paths, analytics</div>
            </div>
          </div>
        </motion.div>
      </div>

      {!embedded && (
        <div className="container mx-auto px-4 py-16 pb-24 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={LANDING_VIEWPORT}
            transition={{ duration: LANDING_DURATION, ease: LANDING_EASE }}
          >
            <div className="mb-12 text-center">
              <h2 className="font-heading text-2xl italic text-neutral-900 md:text-3xl">
                Pricing questions
              </h2>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              <Card className="border-black/[0.08]">
                <CardHeader>
                  <CardTitle className="text-lg font-barlow font-semibold">Can I switch between exams?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                    Each subscription is for one exam. For multiple exams, use a subscription per exam.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-black/[0.08]">
                <CardHeader>
                  <CardTitle className="text-lg font-barlow font-semibold">What payment methods do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                    Major credit and debit cards through Stripe.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-black/[0.08]">
                <CardHeader>
                  <CardTitle className="text-lg font-barlow font-semibold">Can I cancel anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                    Yes—from your account. Access continues through the end of the paid period.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-black/[0.08]">
                <CardHeader>
                  <CardTitle className="text-lg font-barlow font-semibold">Do you offer refunds?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                    We do not offer refunds on subscription charges. Cancel anytime so you are not billed again—see Terms of Service for details.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
