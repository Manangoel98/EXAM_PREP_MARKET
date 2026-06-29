"use client";

import { motion } from "framer-motion";
import { MKT } from "@/lib/marketing-ui";

interface ComparisonHeroProps {
  title: string;
  description: string;
  option1: {
    name: string;
    tagline: string;
  };
  option2: {
    name: string;
    tagline: string;
  };
}

export function ComparisonHero({ title, description, option1, option2 }: ComparisonHeroProps) {
  return (
    <section className={MKT.darkHero}>
      <div className={`${MKT.container} pt-20 md:pt-28 py-12 md:py-16`}>
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className={`${MKT.h1Hero} mb-6`}>{title}</h1>
          <p className={`${MKT.leadOnDark} mx-auto mb-10 max-w-3xl`}>{description}</p>

          <div className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-4 md:grid-cols-3 md:gap-5">
            <motion.div
              className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
            >
              <h3 className="font-barlow text-xl font-semibold text-white md:text-2xl">{option1.name}</h3>
              <p className="mt-2 text-sm font-medium text-white/70">{option1.tagline}</p>
            </motion.div>

            <div className="flex justify-center">
              <div className="rounded-full bg-accent-lime px-4 py-2.5 font-barlow text-sm font-bold text-neutral-900">
                VS
              </div>
            </div>

            <motion.div
              className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
            >
              <h3 className="font-barlow text-xl font-semibold text-white md:text-2xl">{option2.name}</h3>
              <p className="mt-2 text-sm font-medium text-white/70">{option2.tagline}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
