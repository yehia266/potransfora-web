import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POTRANSFORA",
  description: "Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity.",
  robots: "noindex, nofollow", // بناءً على عمود الـ SEO في الملف
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
