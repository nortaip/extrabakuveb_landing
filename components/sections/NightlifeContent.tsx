"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { contentBlocks, type ContentBlock } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const accentText: Record<ContentBlock["accent"], string> = {
  gold: "text-gold-gradient",
  royal: "text-royal-light",
  neon: "text-neon-gradient",
};

const accentBtn: Record<ContentBlock["accent"], string> = {
  gold: "bg-gold-gradient text-ink-900 shadow-glow-gold",
  royal: "bg-royal-gradient text-white shadow-glow",
  neon: "bg-neon-gradient text-ink-900 shadow-glow-neon",
};

function Block({ block, index }: { block: ContentBlock; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <motion.article
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      {/* Image */}
      <motion.div
        variants={fadeUp}
        className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={block.image}
          alt={`${block.title} ${block.highlight} — Extra Baku, the largest premium nightclub in the Caucasus`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
      </motion.div>

      {/* Text */}
      <div className={reversed ? "lg:order-1" : ""}>
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-gold-light"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {block.eyebrow}
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="mt-5 font-display text-3xl font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl text-balance"
        >
          {block.title}{" "}
          <span className={accentText[block.accent]}>{block.highlight}</span>
        </motion.h2>
        {block.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            variants={fadeUp}
            className="mt-4 max-w-xl font-general text-base leading-relaxed text-white/60"
          >
            {p}
          </motion.p>
        ))}
        <motion.a
          variants={fadeUp}
          href={block.cta.href}
          {...(block.cta.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={`mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition-transform hover:scale-105 ${accentBtn[block.accent]}`}
        >
          {block.cta.label}
          <span>→</span>
        </motion.a>
      </div>
    </motion.article>
  );
}

export default function NightlifeContent() {
  return (
    <section id="nightlife" className="relative section-pad scroll-mt-24">
      <div className="container-max relative z-10 flex flex-col gap-24 md:gap-32">
        {contentBlocks.map((block, i) => (
          <Block key={block.id} block={block} index={i} />
        ))}
      </div>
    </section>
  );
}
