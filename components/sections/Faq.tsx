"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

function Item({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`overflow-hidden rounded-2xl glass transition-colors duration-300 ${
        isOpen ? "border-gold/30" : ""
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-heading text-base font-semibold text-white sm:text-lg">
          {question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-lg text-gold transition-transform duration-300 ${
            isOpen ? "rotate-45 bg-gold/10" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-6 font-general text-sm leading-relaxed text-white/60">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState<string | null>(faqs[0].id);

  return (
    <section id="faq" className="relative section-pad scroll-mt-24">
      <div className="container-max relative z-10">
        <SectionHeading
          eyebrow="Good To Know"
          title="Nightclub"
          highlight="FAQ"
          description="Everything you need to know about visiting, VIP tables, dress code and events at the largest premium nightclub in the Caucasus."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-3 md:grid-cols-2"
        >
          {faqs.map((faq) => (
            <Item
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={open === faq.id}
              onToggle={() => setOpen(open === faq.id ? null : faq.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
