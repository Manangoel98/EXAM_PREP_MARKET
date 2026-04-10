"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, BookOpen, Star, Lightbulb } from "lucide-react";

export function FeaturedSuccess() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-8">
            <span className="mb-4 inline-flex items-center gap-2 border border-neutral-900/15 bg-zinc-100 px-4 py-2 text-sm font-semibold text-neutral-900">
              <Star className="h-4 w-4 fill-accent-lime text-accent-lime" aria-hidden />
              Featured success story
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Meet Sarah: From 1200 to 1550 in 90 Days
            </h2>
            <p className="text-lg text-muted-foreground">
              How AI-powered practice helped Sarah achieve her dream score
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center bg-card border-2 border-primary/20 p-8 md:p-10">
            {/* Left: Student Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                  SJ
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Sarah Johnson</h3>
                  <p className="text-muted-foreground">High School Senior, California</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Starting Score</div>
                    <div className="text-3xl font-bold text-foreground">1200</div>
                  </div>
                  <TrendingUp className="w-8 h-8 text-primary" />
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Final Score</div>
                    <div className="text-3xl font-bold text-primary">1550</div>
                  </div>
                </div>
                <div className="text-center pt-4 border-t border-primary/20">
                  <div className="text-2xl font-bold text-primary">+350 points</div>
                  <div className="text-sm text-muted-foreground">+29% improvement</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-muted p-3">
                  <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">90</div>
                  <div className="text-xs text-muted-foreground">days</div>
                </div>
                <div className="bg-muted p-3">
                  <BookOpen className="w-5 h-5 text-primary mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">4,200</div>
                  <div className="text-xs text-muted-foreground">questions</div>
                </div>
                <div className="bg-muted p-3">
                  <TrendingUp className="w-5 h-5 text-primary mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">12h</div>
                  <div className="text-xs text-muted-foreground">per week</div>
                </div>
              </div>
            </div>

            {/* Right: Story */}
            <div className="space-y-4">
              <div className="bg-accent/10 border-l-4 border-primary p-4">
                <p className="text-foreground italic">
                  "I was overwhelmed jumping between Khan Academy, Reddit threads, and YouTube videos. NomoExam organized everything I needed in one place with AI that actually explained concepts I struggled with."
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Week 1-4: Building Foundation</div>
                    <div className="text-sm text-muted-foreground">Started with diagnostic test, focused on weak areas (Reading & Math Level 3)</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Week 5-8: Targeted Practice</div>
                    <div className="text-sm text-muted-foreground">AI recommended 50 questions daily based on mistakes. Score jumped to 1400</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Week 9-12: Final Push</div>
                    <div className="text-sm text-muted-foreground">
                      Full-length practice tests + AI explanations. Achieved 1550 on test day.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 p-4">
                <p className="text-sm text-foreground">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-neutral-900">
                    <Lightbulb className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                    Sarah&apos;s top tip:
                  </span>{" "}
                  &quot;The AI explanations were game-changing. Instead of just seeing the right answer, I understood WHY I got it wrong and how to approach similar questions.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Want results like Sarah's? Start your journey today.
            </p>
            <button
              onClick={() => window.location.href = '/pricing'}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 font-semibold text-lg transition-colors"
            >
              Start Free 3-Day Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
