"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientOrbs from "@/components/ui/GradientOrbs";
import { experiences, type Experience } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const accentRing: Record<Experience["accent"], string> = {
  gold: "group-hover:shadow-glow-gold group-hover:border-gold/40",
  royal: "group-hover:shadow-glow group-hover:border-royal/40",
  neon: "group-hover:shadow-glow-neon group-hover:border-neon/40",
};

const accentGlow: Record<Experience["accent"], string> = {
  gold: "from-gold/20",
  royal: "from-royal/20",
  neon: "from-neon/20",
};

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  // The first card spans wider on large screens for an editorial layout.
  const wide = index === 0;
  return (
    <motion.a
      href={exp.href}
      variants={fadeUp}
      className={`group relative block overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-2 ${accentRing[exp.accent]} ${
        wide ? "sm:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${accentGlow[exp.accent]} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
      />
      <motion.div
        className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-3xl"
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="animate-float">{exp.icon}</span>
      </motion.div>
      <h3 className="font-heading text-2xl font-bold text-white">
        {exp.title}
      </h3>
      <p className="mt-3 font-general text-sm leading-relaxed text-white/55">
        {exp.description}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/40 transition-colors group-hover:text-gold-light">
        Discover
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </motion.a>
  );
}

export default function Experience() {
  return (
    <section id="experiences" className="relative section-pad">
      <GradientOrbs className="opacity-60" />
      <div className="container-max relative z-10">
        <SectionHeading
          eyebrow="The Experiences"
          title="Seven worlds under"
          highlight="one roof"
          description="From the crack of billiard balls to the roar of the main stage, Extra Baku is engineered for unforgettable nights and electric days."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
