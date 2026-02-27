import type { Metadata } from "next";
import "./globals.css";

// ملاحظة سيادية: تم تحييد خطوط Geist مؤقتاً لضمان نجاح الـ Build
// مع الحفاظ على إعدادات الـ Metadata التي طلبتها يا قائد.

export const metadata: Metadata = {
  title: "POTransfora",
  description: "Sovereign Management System",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* استخدمنا خطوط النظام القياسية antialiased للحفاظ على نظافة التصميم */}
      <body className="antialiased bg-white dark:bg-black" style={{ fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
