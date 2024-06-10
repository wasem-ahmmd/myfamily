import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    screens: {
      xxs: "320px",
      xsm: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      "3xl": "1640px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xxl: "1400px",
      },
    },
    extend: {
      margin: {
        'side': 'var(--w-side)',
        'side-sm': 'var(--w-side-sm)',
        'top-custom': 'var(--m-top)',
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
        Georgia: ["Georgia"],
      },
      colors: {
        dark: "#171717",
        light:"#FEFAEE",
        "BG-1": "#F1F5F9",
        "BG-2": "#FCD68B",
        "BG-3": "#F9784C",
        "BG-4": "#e0f2fe",
        "B-blue":"#478ECC",
        "B-red":"#F04438",
        "B-orange":"#F8981D",
        "B-graphit":"#617E8C",
      },
      fontWeight: {
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700"
      },
      
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config