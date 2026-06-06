"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials, type Testimonial } from "@/lib/data";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-gold" : "text-white/15"}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="flex w-[340px] shrink-0 flex-col gap-4 rounded-3xl glass p-7 transition-colors duration-300 hover:border-gold/30">
      <Stars rating={t.rating} />
      <p className="font-general text-sm leading-relaxed text-white/75">
        “{t.quote}”
      </p>
      <div className="mt-auto flex items-center gap-3">
        <motion.span
          whileHover={{ scale: 1.1, rotate: 6 }}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient font-heading text-sm font-bold text-ink-900"
        >
          {t.initials}
        </motion.span>
        <div>
          <p className="font-heading text-sm font-semibold text-white">
            {t.name}
          </p>
          <p className="text-xs text-white/45">{t.role}</p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  // Duplicate the list so the marquee loops seamlessly.
  const row = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden section-pad">
      <div className="container-max relative z-10">
        <SectionHeading
          eyebrow="Guest Love"
          title="Loved by"
          highlight="thousands"
          description="Real words from the guests who make every night at Extra Baku unforgettable."
        />
      </div>

      <div className="relative mt-16">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-900 to-transparent" />

        <div className="group flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <Card key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
