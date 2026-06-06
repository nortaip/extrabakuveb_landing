"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  variant?: "gold" | "neon";
}

/**
 * Consistent section header with an animated eyebrow, headline and copy.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  variant = "gold",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const gradient =
    variant === "gold" ? "text-gold-gradient" : "text-neon-gradient";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex max-w-3xl flex-col gap-4 ${alignment} ${
        align === "center" ? "mx-auto" : ""
      }`}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-gold-light"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl text-balance"
      >
        {title}{" "}
        {highlight && <span className={gradient}>{highlight}</span>}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="max-w-2xl font-general text-base leading-relaxed text-white/60 md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
