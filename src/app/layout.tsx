import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

// استدعاء الخطوط السيادية
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  style: ["italic", "normal"]
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: "POTRANSFORA | Sovereign Empire",
  description: "The DNA of Digital Sovereignty",
  robots: "noindex, nofollow", // درع التخفي السيادي
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-[#05070A] selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
