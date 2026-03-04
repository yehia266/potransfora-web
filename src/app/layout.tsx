import type { Metadata } from "next";
import { Inter } from "next/font/google"; // استدعاء الخط رسمياً
import "./globals.css";

// ضبط إعدادات الخط ليعمل في كل النظام
const inter = Inter({ subsets: ["latin"], weight: ["400", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "POTRANSFORA",
  description: "Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity.",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* حقن الخط هنا هو السر في عمل globals.css بشكل صحيح */}
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
