"use client";
import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

const traditionalProblems = [
  "Wasting time searching for quality practice questions",
  "No idea which topics to focus on first",
  "Can't track if you're actually improving",
  "Generic study plans that don't fit your schedule",
  "Expensive coaching without personalized attention",
];

const nomoExamSolution = [
  "10,000+ human-verified questions in one organized platform",
  "AI identifies your weak areas and recommends topics",
  "Real-time analytics showing exact improvement metrics",
  "Custom plans based on YOUR exam date and availability",
  "1/10th the cost with 10x more personalization",
];

export function Comparison() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl text-foreground mb-4">
            Stop Wasting Time on Inefficient Preparation
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Most students fail not because they don't work hard, but because they prepare inefficiently.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Traditional Problems */}
          <motion.div
            className="bg-card border-2 border-destructive/20 p-4 md:p-6 lg:p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="bg-destructive p-1.5 md:p-2 flex-shrink-0">
                <XCircle className="h-5 md:h-6 w-5 md:w-6 text-destructive-foreground" />
              </div>
              <h3 className="text-lg md:text-2xl text-destructive">Traditional Problems</h3>
            </div>
            <ul className="space-y-2 md:space-y-4">
              {traditionalProblems.map((problem, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-2 md:gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <XCircle className="h-4 md:h-5 w-4 md:w-5 text-destructive mt-0.5 md:mt-1 flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground/80">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* NomoExam Solution */}
          <motion.div
            className="bg-card border-2 border-primary/20 p-4 md:p-6 lg:p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="bg-primary p-1.5 md:p-2 flex-shrink-0">
                <CheckCircle className="h-5 md:h-6 w-5 md:w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg md:text-2xl text-primary">NomoExam Solution</h3>
            </div>
            <ul className="space-y-2 md:space-y-4">
              {nomoExamSolution.map((solution, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-2 md:gap-3"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                >
                  <CheckCircle className="h-4 md:h-5 w-4 md:w-5 text-primary mt-0.5 md:mt-1 flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground/80">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.p 
          className="text-center mt-12 text-lg text-foreground/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          The difference? <span className="font-semibold text-primary">Smart, data-driven preparation</span> instead of guesswork.
        </motion.p>
      </div>
    </section>
  );
}