"use client";
import {
  BarChart3,
  Brain,
  Calendar,
  Check,
  FileText,
  MessageSquare,
  Rocket,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: FileText,
    title: "10,000+ Practice Questions",
    description: "Comprehensive question bank covering all topics from the SAT. We are currently focused on the SAT, with other exams coming soon."
  },
  {
    icon: Brain,
    title: "Nomo AI - Your Personal Study Coach",
    description: "Meet Nomo AI, your intelligent study companion with real-time access to your complete performance data. Get instant, personalized insights and recommendations powered by advanced AI analysis."
  },
  {
    icon: Calendar,
    title: "Personalized Study Plans",
    description: "Custom study schedules based on your exam date, current level, and daily availability. Automatic adjustments based on your progress."
  },
  {
    icon: Target,
    title: "Topic-Wise Practice",
    description: "Practice specific topics and subtopics. Master concepts one at a time with difficulty-based question sorting and progress tracking."
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Detailed performance dashboards showing accuracy rates, time management, topic mastery, and improvement trends over time."
  },
  {
    icon: Zap,
    title: "Instant Solutions",
    description: "Step-by-step video solutions for every question. Learn from mistakes immediately with detailed explanations from expert teachers."
  }
];

export function Features() {
  return (
    <section className="py-20 md:py-32 bg-foreground text-background" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm text-accent px-4 py-2 border border-accent/30 inline-block">
            COMPREHENSIVE PLATFORM
          </span>
          <h2 className="text-3xl md:text-5xl text-background max-w-3xl mx-auto">
            Everything You Need to Excel in Competitive Exams
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto">
            Our platform combines proven preparation methods with cutting-edge technology
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-background p-4 md:p-6 lg:p-8 border border-foreground/10 hover:border-foreground/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className="space-y-3 md:space-y-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-primary flex items-center justify-center">
                    <Icon className="h-5 md:h-6 w-5 md:w-6 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-base md:text-lg lg:text-xl text-foreground font-semibold">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Nomo AI Highlight Section */}
        <div className="mt-12 md:mt-20 lg:mt-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 border border-accent/30 px-4 py-2 text-sm text-accent">
              <Rocket className="h-4 w-4 shrink-0" aria-hidden />
              Newly launched
            </span>
            <h3 className="text-2xl md:text-4xl lg:text-5xl text-background max-w-4xl mx-auto font-bold">
              Introducing Nomo AI
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-background/70 max-w-3xl mx-auto mt-3 md:mt-4 leading-relaxed">
              Your intelligent study companion connected to your complete learning data. Get real-time analysis, personalized recommendations, and instant answers to all your study questions.
            </p>
          </motion.div>
        </div>

        <div className="mt-10 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        <motion.div
          className="bg-background p-3 md:p-4 lg:p-6 border border-foreground/10 overflow-hidden hover:border-primary/30 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Image
            src="/images/NomoAI.png"
            alt="Nomo AI - Your Personal Study Coach"
            width={600}
            height={400}
            className="w-full h-auto rounded"
            unoptimized
          />
          <h4 className="mt-3 flex items-center gap-2 text-base font-semibold text-foreground md:mt-4 md:text-lg">
            <MessageSquare className="h-5 w-5 shrink-0 text-neutral-700" aria-hidden />
            Chat with Nomo AI
          </h4>
          <p className="text-xs md:text-sm text-foreground/70 mt-1 leading-relaxed">Get instant answers and personalized study guidance from your AI coach.</p>
        </motion.div>

        <motion.div
          className="bg-background p-3 md:p-4 lg:p-6 border border-foreground/10 overflow-hidden hover:border-primary/30 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Image
            src="/images/Solution2.png"
            alt="Multiple Solution Formats"
            width={600}
            height={400}
            className="w-full h-auto rounded"
            unoptimized
          />
          <h4 className="mt-3 flex items-center gap-2 text-base font-semibold text-foreground md:mt-4 md:text-lg">
            <FileText className="h-5 w-5 shrink-0 text-neutral-700" aria-hidden />
            Multiple solution formats
          </h4>
          <p className="text-xs md:text-sm text-foreground/70 mt-1 leading-relaxed">Step-by-step solutions with images, explanations, and AI-powered insights.</p>
        </motion.div>

        <motion.div
          className="bg-background p-3 md:p-4 lg:p-6 border border-foreground/10 overflow-hidden hover:border-primary/30 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/images/Profile.png"
            alt="Comprehensive Profile & Analytics"
            width={600}
            height={400}
            className="w-full h-auto rounded"
            unoptimized
          />
          <h4 className="mt-3 flex items-center gap-2 text-base font-semibold text-foreground md:mt-4 md:text-lg">
            <BarChart3 className="h-5 w-5 shrink-0 text-neutral-700" aria-hidden />
            Real-time analytics
          </h4>
          <p className="text-xs md:text-sm text-foreground/70 mt-1 leading-relaxed">Track your progress with detailed analytics connected to Nomo AI.</p>
        </motion.div>
        </div>

        {/* Additional Nomo AI Showcase */}
        <div className="mt-12 md:mt-20 lg:mt-32">
        <motion.div
          className="bg-background p-6 md:p-8 lg:p-12 border-2 border-primary/20 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 md:space-y-6">
              <div>
                <span className="text-xs md:text-sm text-primary font-semibold uppercase tracking-wide">
                  Powered by Advanced AI
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-foreground font-bold mt-2">
                  Nomo AI Understands Your Learning Journey
                </h3>
              </div>
              <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                Unlike generic AI assistants, Nomo AI has complete access to your performance data, study patterns, and progress history. It provides personalized recommendations based on your actual strengths and weaknesses.
              </p>
              <ul className="space-y-3 text-sm md:text-base text-foreground/80">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                  <span><strong>Real-time data access:</strong> Connected to your complete learning history</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                  <span><strong>Personalized insights:</strong> Analysis based on YOUR performance patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                  <span><strong>Instant answers:</strong> Get help anytime, anywhere with contextual responses</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                  <span><strong>Strategic guidance:</strong> Focus on topics that matter most for YOUR goals</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/images/NomoAI2.png"
                alt="Nomo AI in Action"
                width={600}
                height={500}
                className="w-full h-auto rounded-lg shadow-2xl border border-foreground/10"
                unoptimized
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                <p className="flex items-center justify-center gap-1.5 text-xs font-semibold md:text-sm">
                  <Sparkles className="h-4 w-4 shrink-0" aria-hidden />
                  Now live
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}