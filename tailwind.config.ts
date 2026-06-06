import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#05050a",
          900: "#05050a",
          800: "#0a0a12",
          700: "#10101c",
          600: "#16162a",
        },
        gold: {
          DEFAULT: "#d9b46a",
          light: "#f5e1a8",
          deep: "#b8893f",
        },
        royal: {
          DEFAULT: "#7c3aed",
          light: "#a78bfa",
          deep: "#4c1d95",
        },
        neon: {
          DEFAULT: "#22d3ee",
          blue: "#3b82f6",
          glow: "#38bdf8",
        },
      },
      fontFamily: {
        display: ["var(--font-clash)", "Clash Display", "system-ui", "sans-serif"],
        heading: ["var(--font-satoshi)", "Satoshi", "system-ui", "sans-serif"],
        general: ["var(--font-general)", "General Sans", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #f5e1a8 0%, #d9b46a 45%, #b8893f 100%)",
        "royal-gradient":
          "linear-gradient(135deg, #a78bfa 0%, #7c3aed 50%, #4c1d95 100%)",
        "neon-gradient":
          "linear-gradient(135deg, #38bdf8 0%, #22d3ee 50%, #3b82f6 100%)",
        "hero-fade":
          "linear-gradient(180deg, rgba(5,5,10,0.4) 0%, rgba(5,5,10,0.7) 55%, rgba(5,5,10,1) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(124,58,237,0.55)",
        "glow-gold": "0 0 45px -10px rgba(217,180,106,0.6)",
        "glow-neon": "0 0 45px -10px rgba(34,211,238,0.6)",
        glass: "inset 0 1px 0 0 rgba(255,255,255,0.06), 0 20px 60px -20px rgba(0,0,0,0.8)",
      },
      keyframes: {
        "spotlight-sweep": {
          "0%, 100%": { transform: "translateX(-20%) rotate(8deg)", opacity: "0.35" },
          "50%": { transform: "translateX(20%) rotate(-8deg)", opacity: "0.6" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "spotlight-sweep": "spotlight-sweep 9s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.6s cubic-bezier(0.4,0,0.2,1) infinite",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
