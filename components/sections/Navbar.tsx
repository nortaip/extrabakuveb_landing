"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`container-max mx-4 flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 sm:mx-auto sm:px-6 ${
          scrolled ? "glass-strong" : "bg-transparent"
        }`}
      >
        <a href="#hero" className="group flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-white">
            EXTRA
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-gold-gradient">
            BAKU
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative font-general text-sm text-white/70 transition-colors hover:text-white"
              >
                <span className="after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          {/* Login — guides only (redirects to the guide portal) */}
          <div className="group relative">
            <a
              href="https://login.extrabaku.az/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neon/50 bg-neon/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-neon shadow-glow-neon transition-all hover:scale-105 hover:bg-neon/20"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              Login
            </a>
            {/* Guides-only note */}
            <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-neon/30 bg-ink-800 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-neon opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              For guides only
            </span>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full glass md:hidden"
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-white transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-white transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-white transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl glass-strong md:hidden"
          >
            <ul className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 font-general text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://login.extrabaku.az/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-neon/50 bg-neon/10 px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-neon"
                >
                  Login
                </a>
                <p className="mt-1.5 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-neon/70">
                  For guides only
                </p>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
