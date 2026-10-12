import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gift: {
          bg: "var(--gift-bg)",
          surface: "var(--gift-surface)",
          "surface-alt": "var(--gift-surface-alt)",
          border: "var(--gift-border)",
          text: "var(--gift-text)",
          muted: "var(--gift-muted)",
          accent: "var(--gift-accent)",
          "accent-hover": "var(--gift-accent-hover)",
          highlight: "var(--gift-highlight)",
        },
      },
      fontFamily: {
        serif: [
          '"Newsreader"',
          '"Cormorant Garamond"',
          '"Playfair Display"',
          'Georgia',
          'Cambria',
          'serif',
        ],
        sans: [
          '"Plus Jakarta Sans"',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"SF Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
        hand: [
          '"Caveat"',
          '"Reenie Beanie"',
          'cursive',
        ],
      },
      keyframes: {
        gentleFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        stampIn: {
          "0%": { transform: "scale(1.2) rotate(-5deg)", opacity: "0" },
          "100%": { transform: "scale(1) rotate(-1.5deg)", opacity: "1" },
        },
        unfold: {
          "0%": { transform: "scaleY(0.8) rotateX(-15deg)", opacity: "0" },
          "100%": { transform: "scaleY(1) rotateX(0deg)", opacity: "1" },
        },
      },
      animation: {
        "gentle-float": "gentleFloat 4s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "stamp-in": "stampIn 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        "unfold": "unfold 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
