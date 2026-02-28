import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POTransfora",
  description: "Sovereign Management System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* سيتم حقن الـ Analytics و الـ SEO Keywords ديناميكياً في الـ Client Page */}
      </head>
      <body className="antialiased" style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
