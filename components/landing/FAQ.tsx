"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../ui/accordion";
import { LANDING_FAQS } from "@/lib/landing-faq-data";
import { LANDING_DURATION, LANDING_EASE, LANDING_VIEWPORT } from "@/lib/landing-motion";

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-28 bg-zinc-50 py-20 font-barlow md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={LANDING_VIEWPORT}
          transition={{ duration: LANDING_DURATION, ease: LANDING_EASE }}
        >
          <p className="liquid-glass-light mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-medium text-neutral-700">
            Questions
          </p>
          <h2 className="font-heading text-3xl italic tracking-tight text-neutral-900 md:text-5xl">
            Frequently asked
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-neutral-600 md:text-lg">
            Billing, exams, and how Nomoexam fits your prep.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {LANDING_FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={LANDING_VIEWPORT}
                transition={{ duration: LANDING_DURATION, delay: index * 0.06, ease: LANDING_EASE }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="rounded-2xl border border-black/[0.08] bg-white px-4 py-1 md:px-6 md:py-0"
                >
                  <AccordionTrigger className="text-left text-sm font-medium text-neutral-900 hover:text-neutral-900 md:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-neutral-600 md:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={LANDING_VIEWPORT}
          transition={{ duration: LANDING_DURATION, delay: 0.08, ease: LANDING_EASE }}
        >
          <p className="mb-2 text-sm font-medium text-neutral-600">Still have questions?</p>
          <a
            href="/contact"
            className="text-base font-semibold text-neutral-900 underline decoration-accent-lime/80 underline-offset-4 hover:decoration-accent-lime"
          >
            Contact support →
          </a>
        </motion.div>
      </div>
    </section>
  );
}