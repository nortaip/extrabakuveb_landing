"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryImages } from "@/lib/data";
import { viewportOnce } from "@/lib/animations";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % galleryImages.length)),
    []
  );
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  );

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, next, prev]);

  return (
    <section id="gallery" className="relative section-pad">
      <div className="container-max relative z-10">
        <SectionHeading
          eyebrow="The Gallery"
          title="Moments worth"
          highlight="reliving"
          variant="neon"
          description="A glimpse into the energy, the glamour and the unforgettable nights at Extra Baku."
        />

        <div className="mt-16 columns-2 gap-4 [column-fill:_balance] md:columns-3 lg:columns-4">
          {galleryImages.map((src, i) => (
            <motion.button
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{
                duration: 0.6,
                delay: (i % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setIndex(i)}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl"
              style={{ aspectRatio: i % 3 === 0 ? "3 / 4" : "4 / 3" }}
            >
              <Image
                src={src}
                alt={`Extra Baku Club Bakı — qalereya foto ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 block bg-gradient-to-t from-ink-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full glass text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                ⤢
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full glass-strong text-white"
            >
              ✕
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full glass-strong text-white sm:left-8"
            >
              ‹
            </button>
            <motion.div
              key={index}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[75vh] w-full max-w-4xl overflow-hidden rounded-2xl"
            >
              <Image
                src={galleryImages[index]}
                alt={`Extra Baku Club Bakı gecə klubu — foto ${index + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full glass-strong text-white sm:right-8"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
