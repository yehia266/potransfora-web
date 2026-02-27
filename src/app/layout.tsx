import type { Metadata } from "next";
import "./globals.css";

// ملاحظة سيادية: تم تحييد خطوط Geist لضمان استقرار الـ Build 100%
// الاعتماد الآن على الأنظمة القياسية (Sans-Serif) لسرعة الأداء.

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
    <html lang="en" suppressHydrationWarning>
      <body 
        className="antialiased" 
        style={{ 
          fontFamily: 'sans-serif', 
          margin: 0, 
          padding: 0,
          backgroundColor: '#0F172A' // لون أساسي افتراضي لمنع الوميض الأبيض
        }}
      >
        {children}
      </body>
    </html>
  );
}
