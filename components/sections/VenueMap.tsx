"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { venueZones, type VenueZone } from "@/lib/data";
import { viewportOnce } from "@/lib/animations";

const accentColor: Record<VenueZone["accent"], string> = {
  gold: "#d9b46a",
  royal: "#7c3aed",
  neon: "#22d3ee",
};

export default function VenueMap() {
  const [active, setActive] = useState<string>(venueZones[0].id);
  const activeZone =
    venueZones.find((z) => z.id === active) ?? venueZones[0];

  return (
    <section id="venue" className="relative section-pad">
      <div className="container-max relative z-10">
        <SectionHeading
          eyebrow="Explore The Venue"
          title="One destination,"
          highlight="endless zones"
          variant="neon"
          description="Hover the map to explore every zone of our 12,000 m² entertainment universe."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] overflow-hidden rounded-[2rem] glass-strong [perspective:1200px]"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                transform: "rotateX(12deg) scale(1.05)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-royal/10 to-transparent" />

            {venueZones.map((zone) => {
              const isActive = zone.id === active;
              return (
                <button
                  key={zone.id}
                  onMouseEnter={() => setActive(zone.id)}
                  onFocus={() => setActive(zone.id)}
                  onClick={() => setActive(zone.id)}
                  aria-label={zone.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
                >
                  <span className="relative flex items-center justify-center">
                    {isActive && (
                      <motion.span
                        layoutId="zone-ring"
                        className="absolute h-12 w-12 rounded-full"
                        style={{
                          boxShadow: `0 0 0 2px ${accentColor[zone.accent]}, 0 0 30px ${accentColor[zone.accent]}`,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span
                      className="relative h-4 w-4 rounded-full transition-transform duration-300"
                      style={{
                        background: accentColor[zone.accent],
                        transform: isActive ? "scale(1.4)" : "scale(1)",
                        boxShadow: `0 0 16px ${accentColor[zone.accent]}`,
                      }}
                    />
                    <span className="absolute h-4 w-4 animate-ping rounded-full opacity-60" style={{ background: accentColor[zone.accent] }} />
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Zone detail + list */}
          <div className="flex flex-col gap-4">
            <motion.div
              key={activeZone.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl glass p-7"
            >
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: accentColor[activeZone.accent] }}
              >
                Now Viewing
              </span>
              <h3 className="mt-2 font-heading text-2xl font-bold text-white">
                {activeZone.name}
              </h3>
              <p className="mt-2 font-general text-white/60">
                {activeZone.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-2">
              {venueZones.map((zone) => (
                <button
                  key={zone.id}
                  onMouseEnter={() => setActive(zone.id)}
                  onClick={() => setActive(zone.id)}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                    zone.id === active
                      ? "border-white/20 bg-white/[0.06]"
                      : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
                  }`}
                >
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: accentColor[zone.accent] }}
                  />
                  <span className="font-general text-sm text-white/80">
                    {zone.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
