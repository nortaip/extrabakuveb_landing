"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

interface CtaBandProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

/**
 * Recurring conversion band used between sections to drive reservations.
 */
export default function CtaBand({
  eyebrow = "Reserve Your Night",
  title,
  highlight,
  description,
  primary,
  secondary,
}: CtaBandProps) {
  return (
    <section className="relative section-pad">
      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 glass-strong px-6 py-14 text-center sm:px-12 md:py-20"
        >
          {/* ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(600px circle at 20% 10%, rgba(217,180,106,0.18), transparent 55%), radial-gradient(600px circle at 80% 90%, rgba(124,58,237,0.2), transparent 55%)",
            }}
          />
          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-gold-light">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {eyebrow}
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl text-balance">
              {title}{" "}
              {highlight && <span className="text-gold-gradient">{highlight}</span>}
            </h2>
            {description && (
              <p className="mt-4 max-w-xl font-general text-base leading-relaxed text-white/60 md:text-lg">
                {description}
              </p>
            )}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <motion.a
                href={primary.href}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-gold-gradient px-9 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ink-900 shadow-glow-gold"
              >
                {primary.label}
              </motion.a>
              {secondary && (
                <motion.a
                  href={secondary.href}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full glass px-9 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
                >
                  {secondary.label}
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
