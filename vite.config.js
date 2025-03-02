import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; 
import tailwindcss from '@tailwindcss/vite'
import { transform } from "framer-motion";
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  base: "/ThoughtlyClone/", 
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#000000",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#8E9196",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#4CAF50",
          hover: "#45a049",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "scale-up": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        // "loop-scroll":{
        //   from:{transform:"translateX(0)"},
        //   to:{transform: "translateX(-100%)"},
        // }
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "scale-up": "scale-up 0.3s ease-out forwards",
        "loop-scroll": "loop-scroll 30s linear infinite",
      },
    },
  },
});
