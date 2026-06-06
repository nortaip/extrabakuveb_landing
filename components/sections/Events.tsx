"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { eventCards } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function Events() {
  return (
    <section id="events" className="relative section-pad">
      {/* Animated gradient backdrop */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(900px circle at 20% 20%, rgba(124,58,237,0.25), transparent 55%), radial-gradient(900px circle at 80% 80%, rgba(217,180,106,0.18), transparent 55%)",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container-max relative z-10">
        <SectionHeading
          eyebrow="Host With Us"
          title="Events crafted to"
          highlight="impress"
          description="Whatever the occasion, our dedicated event team turns your vision into a headline-worthy production."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {eventCards.map((event) => (
            <motion.article
              key={event.id}
              variants={fadeUp}
              className="group relative h-[360px] overflow-hidden rounded-3xl border border-white/10"
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <span className="mb-3 inline-flex w-fit rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-md">
                  {event.tag}
                </span>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {event.title}
                </h3>
                <p className="mt-2 max-w-md font-general text-sm text-white/60 transition-all duration-500 group-hover:text-white/80">
                  {event.description}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light opacity-0 transition-all duration-500 group-hover:opacity-100"
                >
                  Enquire now <span>→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
