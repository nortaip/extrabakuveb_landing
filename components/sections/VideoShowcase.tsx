"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SHOWCASE_POSTER = "/club/club-2.webp";
const SHOWCASE_VIDEO =
  "https://cdn.coverr.co/videos/coverr-people-dancing-in-a-nightclub-2480/1080p.mp4";

export default function VideoShowcase() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xText = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  // Lock scroll when modal open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section ref={ref} className="relative overflow-hidden py-10">
      {/* Drifting background text */}
      <motion.div
        aria-hidden
        style={{ x: xText }}
        className="pointer-events-none absolute top-1/2 left-0 -z-0 -translate-y-1/2 whitespace-nowrap font-display text-[22vw] font-bold uppercase leading-none text-white/[0.03]"
      >
        Feel The Night · Feel The Night
      </motion.div>

      <div className="container-max relative z-10 px-5 sm:px-8">
        <motion.div
          style={{ scale }}
          className="relative h-[60vh] min-h-[420px] w-full overflow-hidden rounded-[2rem]"
        >
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={SHOWCASE_POSTER}
            preload="none"
            aria-label="Extra Baku cinematic showcase video"
          >
            <source src={SHOWCASE_VIDEO} type="video/mp4" />
            <track kind="captions" srcLang="en" label="English" src="/captions/empty.vtt" default />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />

          {/* Play button with pulse */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setOpen(true)}
              aria-label="Play showcase video"
              className="group relative flex h-24 w-24 items-center justify-center"
            >
              <span className="absolute inset-0 rounded-full bg-gold/30 animate-pulse-ring" />
              <span className="absolute inset-0 rounded-full bg-gold/20 animate-pulse-ring [animation-delay:0.8s]" />
              <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gold-gradient text-ink-900 shadow-glow-gold transition-transform duration-300 group-hover:scale-110">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </div>

          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-display text-3xl font-bold text-white sm:text-4xl">
              Step inside the experience
            </p>
            <p className="mt-2 font-general text-white/60">
              A cinematic look at nights that never fade.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close video"
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full glass-strong text-white transition-colors hover:bg-white/10"
              >
                ✕
              </button>
              <video
                className="h-full w-full object-cover"
                autoPlay
                controls
                playsInline
                poster={SHOWCASE_POSTER}
              >
                <source src={SHOWCASE_VIDEO} type="video/mp4" />
                <track kind="captions" srcLang="en" label="English" src="/captions/empty.vtt" default />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
