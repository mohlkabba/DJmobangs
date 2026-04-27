import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          900: "#0A0A0A",
          800: "#111111",
          700: "#161616",
          600: "#1C1C1C",
          500: "#242424",
        },
        bone: "#F5F1E8",
        gold: {
          DEFAULT: "#E5B358",
          light: "#F0CB85",
          deep: "#B88A2E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        wide2: "0.18em",
        wide3: "0.32em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-fast": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        eq: {
          "0%, 100%": { transform: "scaleY(0.25)" },
          "20%":      { transform: "scaleY(0.85)" },
          "40%":      { transform: "scaleY(0.45)" },
          "60%":      { transform: "scaleY(1)" },
          "80%":      { transform: "scaleY(0.6)" },
        },
        "tonearm": {
          "0%, 100%": { transform: "rotate(-22deg)" },
          "12%":      { transform: "rotate(-6deg)" },
          "85%":      { transform: "rotate(-6deg)" },
        },
        "pulse-ring": {
          "0%":   { transform: "scale(0.9)", opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        wave: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 80s linear infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 1s ease-out both",
        "scale-in": "scale-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "spin-slow": "spin 18s linear infinite",
        "spin-vinyl": "spin-fast 4.5s linear infinite",
        eq: "eq 1.1s ease-in-out infinite",
        tonearm: "tonearm 8s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        wave: "wave 12s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
