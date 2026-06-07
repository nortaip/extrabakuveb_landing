"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientOrbs from "@/components/ui/GradientOrbs";
import { experiences, type Experience } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

type Accent = Experience["accent"];

const accentMap: Record<
  Accent,
  {
    icon: string;
    ring: string;
    line: string;
    text: string;
    blob: string;
    border: string;
  }
> = {
  gold: {
    icon: "from-gold/40 to-gold-deep/10 ring-gold/30",
    ring: "group-hover:shadow-glow-gold",
    line: "from-gold to-gold-deep",
    text: "group-hover:text-gold-light",
    blob: "bg-gold/25",
    border: "group-hover:border-gold/40",
  },
  royal: {
    icon: "from-royal/40 to-royal-deep/10 ring-royal/30",
    ring: "group-hover:shadow-glow",
    line: "from-royal-light to-royal",
    text: "group-hover:text-royal-light",
    blob: "bg-royal/25",
    border: "group-hover:border-royal/40",
  },
  neon: {
    icon: "from-neon/40 to-neon-blue/10 ring-neon/30",
    ring: "group-hover:shadow-glow-neon",
    line: "from-neon to-neon-blue",
    text: "group-hover:text-neon",
    blob: "bg-neon/25",
    border: "group-hover:border-neon/40",
  },
};

// Bento layout so 4 cards fill the grid with no dead space.
const layoutClass = [
  "sm:col-span-2 lg:col-span-2", // Billiards — wide
  "lg:row-span-2", // Lounge Bar — tall (fills the right column)
  "",
  "",
];

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const a = accentMap[exp.accent];
  const tall = index === 1;

  return (
    <motion.a
      href={exp.href}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`group relative flex flex-col overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-7 shadow-glass backdrop-blur-xl transition-shadow duration-500 ${a.ring} ${a.border} ${layoutClass[index] ?? ""} ${tall ? "min-h-[340px] justify-between" : ""}`}
    >
      {/* Animated gradient hairline border on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          padding: "1px",
          background:
            "linear-gradient(130deg, rgba(255,255,255,0.35), rgba(255,255,255,0) 40%)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Accent glow blob */}
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full ${a.blob} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100`}
      />

      {/* Diagonal shine sweep */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-x-10 -top-1/2 h-[200%] -translate-x-[120%] -rotate-12 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-[60%]"
      />

      {/* Ghost index watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-5 top-3 select-none font-display text-7xl font-bold leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-white/[0.07]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative z-10">
        <motion.div
          className={`mb-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ring-1 ${a.icon} ${tall ? "h-20 w-20 text-4xl" : "h-16 w-16 text-3xl"}`}
          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
          transition={{ duration: 0.6 }}
        >
          <span className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            {exp.icon}
          </span>
        </motion.div>

        <h3
          className={`font-heading font-bold text-white ${tall ? "text-3xl" : "text-2xl"}`}
        >
          {exp.title}
        </h3>

        {/* Accent divider */}
        <span
          className={`mt-3 block h-px w-10 rounded-full bg-gradient-to-r ${a.line} transition-all duration-500 group-hover:w-20`}
        />

        <p className="mt-4 max-w-sm font-general text-sm leading-relaxed text-white/55">
          {exp.description}
        </p>
      </div>

      <span
        className={`relative z-10 mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 transition-all duration-300 group-hover:border-white/20 ${a.text}`}
      >
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
          title="Four worlds under"
          highlight="one roof"
          description="From the crack of billiard balls to the roar of the main stage, Extra Baku is engineered for unforgettable nights and electric days."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3"
        >
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
