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
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-gold-light"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Why Extra Baku
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-5 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl text-balance"
            >
              The largest premium <span className="text-gold-gradient">playground</span> in Azerbaijan
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-lg font-general text-base leading-relaxed text-white/60 md:text-lg"
            >
              Extra Baku brings together world-class entertainment, fine dining
              and electric nightlife in a single iconic destination — built for
              guests who expect nothing less than extraordinary.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl glass p-7 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/10 blur-2xl transition-opacity duration-500 group-hover:bg-gold/20" />
                <p className="font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 font-general text-sm text-white/55">
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
