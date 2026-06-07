"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { cocktails, menuUrl, type Cocktail } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

type Accent = Cocktail["accent"];

const accentMap: Record<
  Accent,
  { glow: string; text: string; ring: string; dot: string }
> = {
  gold: {
    glow: "bg-gold/25",
    text: "text-gold-light",
    ring: "group-hover:border-gold/40 group-hover:shadow-glow-gold",
    dot: "bg-gold",
  },
  royal: {
    glow: "bg-royal/25",
    text: "text-royal-light",
    ring: "group-hover:border-royal/40 group-hover:shadow-glow",
    dot: "bg-royal-light",
  },
  neon: {
    glow: "bg-neon/25",
    text: "text-neon",
    ring: "group-hover:border-neon/40 group-hover:shadow-glow-neon",
    dot: "bg-neon",
  },
};

function CocktailCard({ c }: { c: Cocktail }) {
  const a = accentMap[c.accent];
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-5 backdrop-blur-xl transition-shadow duration-500 ${a.ring}`}
    >
      <div
        className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full ${a.glow} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100`}
      />
      <span
        className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-2xl ${a.text}`}
      >
        🍸
      </span>
      <div className="relative z-10">
        <h3 className="font-heading text-lg font-bold text-white">{c.name}</h3>
        <span
          className={`mt-1.5 block h-px w-8 rounded-full ${a.dot} transition-all duration-500 group-hover:w-16`}
        />
      </div>
    </motion.div>
  );
}

export default function Cocktails() {
  return (
    <section id="menu" className="relative overflow-hidden section-pad">
      {/* Nightclub ambiance */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(800px circle at 15% 10%, rgba(124,58,237,0.22), transparent 55%), radial-gradient(800px circle at 85% 90%, rgba(34,211,238,0.18), transparent 55%), radial-gradient(600px circle at 60% 40%, rgba(217,180,106,0.12), transparent 60%)",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Neon marquee strip */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-10 -z-0 overflow-hidden opacity-[0.06]"
      >
        <div className="flex w-max animate-marquee whitespace-nowrap font-display text-7xl font-bold uppercase text-white">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="mx-6">
              Signature Cocktails · Bar · Lounge ·
            </span>
          ))}
        </div>
      </div>

      <div className="container-max relative z-10">
        <SectionHeading
          eyebrow="Bar & Menu"
          title="Signature"
          highlight="cocktails"
          variant="neon"
          description="Crafted by award-winning mixologists — rare spirits, theatrical pours and the unmistakable Extra Baku energy in every glass."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {cocktails.map((c) => (
            <CocktailCard key={c.id} c={c} />
          ))}
        </motion.div>

        {/* Full menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col items-center gap-4 text-center"
        >
          <p className="font-general text-white/55">
            Explore the full drinks & food selection
          </p>
          <motion.a
            href={menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 rounded-full bg-neon-gradient px-9 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ink-900 shadow-glow-neon"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="9" y1="15" x2="15" y2="15" />
              <line x1="9" y1="11" x2="13" y2="11" />
            </svg>
            View Full Menu
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
