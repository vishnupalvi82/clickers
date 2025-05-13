import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FF6B00",
          hover: "#E05E00",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#1E1E1E",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#333333",
          foreground: "#A0A0A0",
        },
        accent: {
          DEFAULT: "#FF6B00",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#1E1E1E",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#1E1E1E",
          foreground: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "5px",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      boxShadow: {
        accent: "0 10px 20px rgba(255, 107, 0, 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
