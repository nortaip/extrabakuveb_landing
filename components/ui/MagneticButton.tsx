"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { ReactNode, useRef } from "react";

type Variant = "gold" | "ghost" | "neon";

interface MagneticButtonProps extends Omit<HTMLMotionProps<"a">, "ref"> {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  gold: "bg-gold-gradient text-ink-900 shadow-glow-gold hover:shadow-[0_0_60px_-6px_rgba(217,180,106,0.8)]",
  neon: "bg-neon-gradient text-ink-900 shadow-glow-neon hover:shadow-[0_0_60px_-6px_rgba(34,211,238,0.8)]",
  ghost:
    "glass text-white hover:border-white/30 hover:bg-white/[0.08]",
};

/**
 * A button/link with a magnetic hover effect — it leans toward the cursor.
 */
export default function MagneticButton({
  children,
  href = "#",
  variant = "gold",
  className = "",
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] transition-shadow duration-300 ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant !== "ghost" && (
        <span className="absolute inset-0 z-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
      )}
    </motion.a>
  );
}
