import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        foundation: '#F8FAFC',
        // ألوان نوتشن التي أضفتها لك الآن:
        notionBg: '#F7F6F3',
        notionText: '#37352F',
        notionBorder: 'rgba(15, 15, 15, 0.1)',
      }
    },
  },
  plugins: [],
};
export default config;
