"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Emily Johnson",
    exam: "SAT",
    score: "1550",
    avatar: "EJ",
    text: "NomoExam's AI-powered analysis helped me identify my weak topics in Math. The detailed solutions and topic-wise practice improved my score from 1350 to 1550 in just 3 months.",
  },
  {
    name: "Michael Smith",
    exam: "SAT",
    score: "1520",
    avatar: "MS",
    text: "The personalized study plan was a game-changer. It helped me balance my schoolwork with self-study effectively. The mock tests exactly matched the real SAT pattern.",
  },
  {
    name: "Jessica Williams",
    exam: "SAT",
    score: "99th Percentile",
    avatar: "JW",
    text: "I practiced over 5,000 questions on NomoExam. The real-time analytics showed me exactly where I was losing marks. Improved my Evidence-Based Reading and Writing score by 40 points in 2 months.",
  },
  {
    name: "Christopher Brown",
    exam: "SAT",
    score: "1580",
    avatar: "CB",
    text: "The video solutions are incredibly detailed. I could learn advanced problem-solving techniques that my coaching didn't cover. Worth every penny.",
  },
  {
    name: "Ashley Jones",
    exam: "SAT",
    score: "1510",
    avatar: "AJ",
    text: "Started using NomoExam 6 months before the SAT. The consistent practice and performance tracking kept me motivated. The AI recommendations were spot-on.",
  },
  {
    name: "Matthew Davis",
    exam: "SAT",
    score: "99.6th Percentile",
    avatar: "MD",
    text: "Best investment for exam preparation. The question quality is excellent and the analytics dashboard helped me optimize my preparation strategy week by week.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm text-primary px-4 py-2 border border-primary/30 inline-block mb-4">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl md:text-5xl text-neutral-dark mb-4">
            Trusted by Top Students Across the Country
          </h2>
          <p className="text-xl text-neutral-dark/70 max-w-3xl mx-auto">
            Real results from real students who achieved their dream scores
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 md:p-6 lg:p-8 border border-gray-200 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <div className="flex items-center mb-3 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 md:h-5 w-4 md:w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm md:text-base text-neutral-dark/80 mb-4 md:mb-6 relative leading-relaxed">
                <Quote className="absolute -top-3 -left-4 h-6 md:h-8 w-6 md:w-8 text-gray-200" />
                {testimonial.text}
              </p>
              <div className="flex items-center gap-2 md:gap-4">
                <div className="h-10 md:h-12 w-10 md:w-12 bg-primary text-primary-foreground flex items-center justify-center rounded-full font-bold text-sm md:text-lg flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-neutral-dark text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-neutral-dark/60 truncate">
                    {testimonial.exam} - {testimonial.score}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-2 md:gap-3 bg-gray-100 p-3 md:p-4 rounded-lg text-xs md:text-base">
            <p className="font-semibold">Average Rating:</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 md:h-5 w-4 md:w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-neutral-dark/80">4.9/5 (312 reviews)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}