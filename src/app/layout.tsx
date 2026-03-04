import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: "POTRANSFORA | Sovereign Protocol",
  description: "Digital Sovereignty Infrastructure 2026",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[#030712] selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}
