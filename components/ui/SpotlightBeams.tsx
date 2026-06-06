"use client";

import { motion } from "framer-motion";

/**
 * Animated nightclub spotlight beams sweeping slowly across the hero.
 * Decorative only.
 */
export default function SpotlightBeams() {
  const beams = [
    { left: "12%", color: "rgba(124,58,237,0.35)", delay: 0, rotate: 12 },
    { left: "42%", color: "rgba(34,211,238,0.28)", delay: 1.5, rotate: -8 },
    { left: "72%", color: "rgba(217,180,106,0.3)", delay: 3, rotate: 6 },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {beams.map((b, i) => (
        <motion.div
          key={i}
          className="absolute -top-[20%] h-[160%] w-[28vw] origin-top"
          style={{
            left: b.left,
            background: `linear-gradient(to bottom, ${b.color} 0%, transparent 70%)`,
            filter: "blur(28px)",
            clipPath: "polygon(40% 0, 60% 0, 100% 100%, 0% 100%)",
          }}
          initial={{ rotate: b.rotate, opacity: 0.3 }}
          animate={{
            rotate: [b.rotate, -b.rotate, b.rotate],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
