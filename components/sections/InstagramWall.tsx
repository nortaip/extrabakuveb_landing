"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { instagramPosts, siteConfig } from "@/lib/data";
import { viewportOnce } from "@/lib/animations";

export default function InstagramWall() {
  return (
    <section className="relative section-pad">
      <div className="container-max relative z-10">
        <SectionHeading
          eyebrow="@extrabaku"
          title="Follow the"
          highlight="energy"
          variant="neon"
          description="Tag us @extrabaku for a chance to be featured. The night never sleeps on our feed."
        />

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {instagramPosts.map((src, i) => (
            <motion.a
              key={src}
              href={siteConfig.socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={src}
                alt={`Extra Baku Club Instagram — Bakı əyləncə klubu ${i + 1}`}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-royal/60 to-neon/30 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {siteConfig.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Extra Baku on ${social.label}`}
              className="group inline-flex items-center gap-2.5 rounded-full glass px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-neon/40 hover:bg-white/10"
            >
              <span className="text-neon transition-transform duration-300 group-hover:scale-110">
                {socialIcons[social.label] ?? null}
              </span>
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  TikTok: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 3c.3 2.1 1.6 3.6 3.5 4v2.6c-1.3 0-2.5-.4-3.5-1v5.9a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.7a3 3 0 1 0 2 2.8V3h2.8z" />
    </svg>
  ),
  YouTube: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5a2.5 2.5 0 0 0 1.8-1.8C23 15.2 23 12 23 12zM9.8 15.3V8.7l6 3.3-6 3.3z" />
    </svg>
  ),
};
