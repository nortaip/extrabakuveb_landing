# Extra Baku Club — Premium Landing Page

A world-class, ultra-premium landing page for **Extra Baku Club**, one of the
largest entertainment & nightlife destinations in Azerbaijan.

Built with a modern 2026 aesthetic: cinematic, dark-mode-only, glassmorphism +
subtle neumorphism, with black / gold / royal-purple / neon-blue accents and
Apple-level motion design.

## Tech Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS** (custom design tokens)
- **Framer Motion** — all scroll, reveal, stagger & magnetic interactions
- **GSAP** — available for advanced timelines
- **Lenis** — buttery smooth scrolling
- Canvas-based **particle system** + animated spotlight beams (Three.js optional)

## Sections

1. **Hero** — fullscreen video, particle field, spotlight beams, mouse-reactive
   glow, parallax, premium text reveal, scroll indicator
2. **Experiences** — Billiards, Arcade, Karaoke, Restaurant, Lounge, Events,
   Live Music with hover/float/icon animations
3. **Video Showcase** — cinematic full-width video with modal + pulse play button
4. **Gallery** — masonry grid with hover zoom and keyboard-accessible lightbox
5. **Why Extra Baku** — animated counters that fire on scroll
6. **Events** — luxury cards with animated gradient backdrops
7. **Testimonials** — infinite auto-scroll glass-card carousel with star ratings
8. **Interactive Venue Map** — 3D-style zone explorer with hover highlights
9. **Reservation** — animated, validated booking form with success animation
10. **Instagram Wall** — animated social feed grid
11. **FAQ** — animated glass accordion
12. **Footer** — contact, hours, socials, location

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Architecture

```
app/
  layout.tsx          # SEO metadata, JSON-LD, fonts, smooth-scroll provider
  page.tsx            # section composition
  globals.css         # design system, glass/neumorph utilities
components/
  providers/          # Lenis smooth scroll
  ui/                 # MagneticButton, Counter, ParticleField, etc.
  sections/           # the 12 page sections
lib/
  data.ts             # all content (experiences, events, FAQs, etc.)
  animations.ts       # shared Framer Motion variants
```

## Notes

- **Fonts**: Clash Display, Satoshi & General Sans (Fontshare) for headings,
  Inter (Google) for body — loaded via `<link>` for resilience.
- **Performance**: lazy-loaded images via `next/image`, `preload="none"` on
  secondary video, reduced-motion support throughout, static prerender.
- **Media**: hero/showcase videos and gallery images use public CDN URLs —
  swap them in `lib/data.ts` and the section components for production assets.
