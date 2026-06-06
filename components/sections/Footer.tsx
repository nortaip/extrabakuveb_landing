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
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="font-general text-sm text-white/55 transition-colors hover:text-gold-light"
                >
                  Reservations
                </a>
              </li>
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

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Contact
            </h4>
            <ul className="mt-5 flex flex-col gap-3 font-general text-sm text-white/55">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-gold-light"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-gold-light"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-white/70">{siteConfig.address}</li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-8 sm:flex-row">
          <p className="font-general text-xs text-white/40">
            © {year} {siteConfig.name}. All rights reserved.
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
