import type { Metadata } from "next";
import "./globals.css";
// استيراد الخطوط من Google Fonts لضمان الفخامة البصرية
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "POTransfora | Sovereign Empire",
  description: "Sovereign Management System - Crafted for the Future",
  robots: "noindex, nofollow", // درع الحماية من جوجل كما اتفقنا
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-[#05070A]" style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
