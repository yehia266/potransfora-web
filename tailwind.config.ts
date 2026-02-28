import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // ربط الخطوط بملف layout.tsx المطور
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        // فتح المجال لبيانات Notion للتحكم في الألوان
        sovereign: {
          dark: "#05070A",
          accent: "#FFFFFF",
          glass: "rgba(255, 255, 255, 0.05)",
        },
      },
      backgroundImage: {
        "imperial-gradient": "radial-gradient(circle at 50% -20%, #1e293b 0%, transparent 80%)",
      },
    },
  },
  plugins: [],
};
export default config;
