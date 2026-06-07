"use client";

import { motion } from "framer-motion";
import { siteConfig, navLinks } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/5 pt-20 scroll-mt-24"
    >
      {/* Giant ambient wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center font-display text-[24vw] font-bold leading-none text-white/[0.02]"
      >
        EXTRA BAKU
      </div>

      <div className="container-max relative z-10 px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold text-white">
                EXTRA
              </span>
              <span className="font-display text-2xl font-bold text-gold-gradient">
                BAKU
              </span>
            </div>
            <p className="max-w-xs font-general text-sm leading-relaxed text-white/50">
              Azerbaijan&apos;s ultimate entertainment destination. Where every
              night becomes a story worth telling.
            </p>
            <div className="mt-2 flex gap-3">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full glass text-xs font-medium text-white/70 transition-all duration-300 hover:scale-110 hover:border-gold/40 hover:text-gold-light"
                  aria-label={social.label}
                >
                  {social.label.charAt(0)}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Explore */}
          <motion.div variants={fadeUp}>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Explore
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-general text-sm text-white/55 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div variants={fadeUp}>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Working Hours
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {siteConfig.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between gap-4 font-general text-sm"
                >
                  <span className="text-white/55">{h.day}</span>
                  <span className="text-white/80">{h.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Find Us */}
          <motion.div variants={fadeUp}>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Find Us
            </h4>
            <p className="mt-5 font-general text-sm text-white/70">
              {siteConfig.address}
            </p>
            <div className="group relative mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-gold/40">
              <div className="relative h-40 w-full">
                <iframe
                  title="Extra Baku Club location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    siteConfig.address,
                  )}&z=15&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="pointer-events-none h-full w-full border-0 [filter:invert(0.92)_hue-rotate(180deg)_saturate(0.6)_brightness(0.95)_contrast(0.95)]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    siteConfig.address,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open in Google Maps"
                  className="absolute inset-0 flex items-end justify-end p-3 font-general text-[10px] uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-gold-light"
                >
                  Open in Maps →
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-8 sm:flex-row">
          <p className="font-general text-xs text-white/40" suppressHydrationWarning>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-general text-xs text-white/40">
            Developed by{" "}
            <span className="font-semibold text-gold-gradient">Senate Group</span>
          </p>
          <div className="flex gap-6 font-general text-xs text-white/40">
            <a href="#" className="transition-colors hover:text-white/70">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white/70">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
