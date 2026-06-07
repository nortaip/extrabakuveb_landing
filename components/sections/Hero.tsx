"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import ParticleField from "@/components/ui/ParticleField";
import SpotlightBeams from "@/components/ui/SpotlightBeams";
import { wordReveal } from "@/lib/animations";

const HERO_POSTER = "/club/club-1.png";
const HERO_VIDEO =
  "https://cdn.coverr.co/videos/coverr-a-dj-mixing-music-at-a-party-4853/1080p.mp4";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax for layers as we scroll past the hero.
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yVideo = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse-reactive glow.
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const glowX = useSpring(mx, { stiffness: 60, damping: 20 });
  const glowY = useSpring(my, { stiffness: 60, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const title = ["EXTRA", "BAKU"];

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={handleMouse}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <motion.div style={{ y: yVideo }} className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER}
          preload="metadata"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-hero-fade" />
      <div className="absolute inset-0 z-10 bg-ink-900/40" />

      {/* Mouse-reactive radial glow */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-10"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) =>
              `radial-gradient(600px circle at ${x}% ${y}%, rgba(124,58,237,0.18), transparent 60%)`
          ),
        }}
      />

      {/* Spotlights + particles */}
      <div className="absolute inset-0 z-10">
        <SpotlightBeams />
      </div>
      <div className="absolute inset-0 z-20">
        <ParticleField density={80} />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="container-max relative z-30 flex flex-col items-center px-5 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-gold-light backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          Baku · Azerbaijan
        </motion.span>

        <h1 className="font-display text-[18vw] font-bold leading-[0.85] tracking-tight text-white sm:text-[14vw] lg:text-[11rem]">
          {title.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                variants={wordReveal}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 + i * 0.18 }}
                className={`inline-block ${
                  i === 1 ? "text-gold-gradient" : ""
                }`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 max-w-xl font-general text-lg text-white/70 md:text-xl"
        >
          The Ultimate Entertainment Experience
        </motion.p>
        <p className="sr-only">
          Extra Baku Club — Qafqazın ən böyük premium gecə klubu. Lounge bar,
          canlı musiqi, DJ-lər, billiards və VIP zonalar bir məkanda. Doğum
          günü, korporativ və VIP tədbirlər üçün rezervasiya.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton href="#experiences" variant="gold">
            Explore Experiences
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#experiences"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-10 w-6 justify-center rounded-full border border-white/30 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-gold"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
