"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { instagramPosts, siteConfig } from "@/lib/data";
import { socialIcons } from "@/components/ui/socialIcons";
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
