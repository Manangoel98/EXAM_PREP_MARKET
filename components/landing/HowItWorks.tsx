"use client";
import { motion } from "framer-motion";
import { ClipboardCheck, Brain, Target, Trophy, Clock } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Take Initial Assessment",
    description: "Complete a quick 15-minute diagnostic test so our AI understands your current level",
    time: "5 minutes setup"
  },
  {
    number: "02",
    icon: Brain,
    title: "Get Your Custom Plan",
    description: "AI analyzes your results and creates a personalized day-by-day study schedule until exam day",
    time: "Instant generation"
  },
  {
    number: "03",
    icon: Target,
    title: "Practice Daily",
    description: "Follow your plan with topic-wise questions. AI adjusts difficulty based on your performance",
    time: "1-3 hours/day"
  },
  {
    number: "04",
    icon: Trophy,
    title: "Track & Improve",
    description: "Watch your scores improve week by week. Our analytics show exactly where you're getting better",
    time: "Ongoing tracking"
  }
];

export function HowItWorks() {
  return (
    <section className="pt-20 py-20 md:pt-28 md:py-32 bg-neutral-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="liquid-glass mb-6 inline-block rounded-full px-4 py-2 text-xs font-medium text-white/90">
            Simple 4-step flow
          </span>
          <h2 className="font-heading mb-4 text-3xl italic tracking-tight text-white md:text-5xl">
            From sign-up to test day
          </h2>
          <p className="mx-auto max-w-3xl font-barlow text-base font-medium text-white/75 md:text-xl">
            Structured practice, plans, and AI—aligned to how you actually prep
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-12 md:mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="relative rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-4 shadow-sm md:p-6 lg:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Step number badge */}
                <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 h-8 md:h-12 w-8 md:w-12 bg-accent-lime border-2 border-neutral-dark flex items-center justify-center">
                  <span className="text-xs md:text-lg text-neutral-dark font-bold">{step.number}</span>
                </div>
                
                <div className="space-y-2 md:space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-lime/30 text-neutral-900 md:h-16 md:w-16">
                    <Icon className="h-6 w-6 md:h-8 md:w-8" strokeWidth={2} />
                  </div>
                  
                  <div>
                    <h3 className="text-base md:text-lg lg:text-xl text-white mb-1 md:mb-2 font-semibold">{step.title}</h3>
                    <p className="text-xs md:text-sm text-white/75 mb-2 md:mb-3 leading-relaxed">{step.description}</p>
                    <p className="inline-flex items-center gap-1 text-xs font-medium text-white/60 md:text-sm">
                      <Clock className="h-3 w-3 md:h-3.5 md:w-3.5" />
                      {step.time}
                    </p>
                  </div>
                </div>
                
                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="h-6 w-6 bg-accent-lime border-2 border-neutral-dark rotate-45"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="min-h-11 rounded-full border-2 border-white/50 bg-transparent font-barlow text-white hover:bg-white/10"
              >
                View pricing
              </Button>
            </Link>
            <Link href="/auth">
              <Button
                size="lg"
                className="min-h-11 rounded-full bg-white font-barlow font-semibold text-neutral-900 hover:bg-white/90"
              >
                Sign in / Get started
              </Button>
            </Link>
          </div>
          <p className="mt-4 font-barlow text-sm text-white/55 md:text-base">Per-exam subscription · Cancel anytime</p>
        </motion.div>
      </div>
    </section>
  );
}