import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2563EB",
          foreground: "#FFFFFF"
        },
        navy: "#0F172A",
        mist: "#DBEAFE",
        accent: "#60A5FA"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(15, 23, 42, 0.10)",
        soft: "0 16px 45px rgba(37, 99, 235, 0.12)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      borderRadius: {
        xl: "1rem"
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.68" },
          "50%": { transform: "scale(1.08)", opacity: "1" }
        }
      },
      animation: {
        breathe: "breathe 5.5s ease-in-out infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
