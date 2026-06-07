"use client";

import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";
import GradientOrbs from "@/components/ui/GradientOrbs";
import { stats } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function WhyExtraBaku() {
  return (
    <section className="relative overflow-hidden section-pad">
      <GradientOrbs />
      <div className="container-max relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-gold-light"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Why Extra Baku
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl text-balance"
          >
            The biggest <span className="text-gold-gradient">nightclub</span> in
            the Caucasus
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl font-general text-base leading-relaxed text-white/60 md:text-lg"
          >
            Extra Baku is the Caucasus&apos; largest nightclub — where
            world-class production, premium hospitality and electric nightlife
            come together for unforgettable nights.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl glass p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/10 blur-2xl transition-opacity duration-500 group-hover:bg-gold/20" />
                <p className="font-display text-5xl font-bold text-gold-gradient sm:text-6xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 font-general text-sm uppercase tracking-[0.16em] text-white/55">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
