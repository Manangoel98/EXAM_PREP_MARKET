"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { getAppUrl } from "@/lib/config";

export const HeroSection = ({ title }: { title: ReactNode }) => {
  const [studentCount, setStudentCount] = useState(540);

  useEffect(() => {
    setStudentCount(Math.floor(450 + Math.random() * 100));
  }, []);

  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-20 md:pt-16 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Social proof badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-3 bg-primary/5 border-2 border-primary/20 px-4 py-2 md:px-6 md:py-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm md:text-base text-neutral-dark">
                  <span className="text-primary">500+</span> students are already preparing with us
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* Main headline */}
          <motion.div
            className="text-center space-y-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight">{title}</h1>
            
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              10,000+ SAT and Reasoning questions • Personalized study plans • Real-time AI analysis
              <span className="block mt-2 text-lg">
                Available now: SAT and Reasoning. Upcoming exams include JEE, MCAT, and GRE.
              </span>
            </p>
          </motion.div>
          
          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/pricing">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-10 py-7 text-lg w-full sm:w-auto group"
              >
                View Pricing
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <a
              href="https://www.producthunt.com/products/nomoexam?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-nomoexam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img
                alt="NomoExam - AI-Powered Exam Prep & Practice Tests | Product Hunt"
                width="250"
                height="54"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1093761&theme=light&t=1773123226334"
                className="w-[200px] sm:w-[250px] h-auto"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.nomoexam.student&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                width="200"
                height="78"
                className="w-[180px] sm:w-[200px] h-auto"
              />
            </a>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-foreground/70">Free 3-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-foreground/70">No credit card needed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-foreground/70">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-foreground/70">300+ five-star reviews</span>
            </div>
          </motion.div>
          
          {/* Screenshot placeholder - HERO DASHBOARD */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative border-4 border-foreground/10 bg-card p-2 md:p-4 shadow-2xl">
              <Image
                src="/images/Dashboard.png"
                alt="NomoExam Dashboard"
                width={1200}
                height={675}
                className="w-full h-auto"
                unoptimized
              />
              
              {/* Floating achievement card - hidden on mobile */}
              <div className="hidden md:block absolute -bottom-6 -right-6 bg-card border-2 border-foreground/10 p-6 shadow-xl">
                <div className="text-center">
                  <p className="text-4xl mb-1">95%</p>
                  <p className="text-sm text-foreground/60">Average Score</p>
                  <p className="text-xs text-primary mt-1">↑ +27% improvement</p>
                </div>
              </div>
              
              {/* Floating users card - hidden on mobile */}
              <div className="hidden md:flex absolute -top-6 -left-6 bg-accent border-2 border-foreground/10 p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 w-8 bg-primary border-2 border-accent flex items-center justify-center text-primary-foreground text-xs">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm">{studentCount} students</p>
                    <p className="text-xs text-foreground/60">online now</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
