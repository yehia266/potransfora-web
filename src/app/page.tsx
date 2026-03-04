import React from 'react';

export default function Page() {
// --- انسخي هذا الجزء وضعه في بداية الدالة ---
  const [showModal, setShowModal] = useState(true);
  const [eyeTransform, setEyeTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const x = (mouseX - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) / 40;
    const y = (mouseY - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) / 40;
    setEyeTransform({ x, y });
  };
  // ------------------------------------------













  
  return (
    // ابحثي عن هذا السطر (أو ما يشبهه) وقومي بإضافة الجزء المظلل:
<div 
  style={styles.pageContainer} 
  onMouseMove={handleMouseMove} // <-- أضيفي هذا الجزء هنا فقط
>

  
    <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col">
      {/* IDENTITY_HEADER - المهمة الثانية */}
      <header className="fixed top-0 w-full z-50">
        <div 
          style={{ backdropFilter: 'blur(15px)' }} 
          className="w-full border-b border-slate-200/50"
        >
          <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div 
              style={{ 
                fontFamily: "'Inter', sans-serif",
                color: "#0F172A",
                fontWeight: 800
              }}
              className="text-2xl tracking-tighter uppercase"
            >
              POTRANSFORA
            </div>
          </nav>
        </div>
      </header>

      {/* IDENTITY_HERO - المهمة الثالثة */}
      <main className="flex-grow flex items-center justify-center min-h-screen">
        <h1 
          style={{ 
            fontFamily: "'Inter', sans-serif",
            color: "#0F172A",
            fontWeight: 900,
            letterSpacing: "-0.02em"
          }}
          className="text-[12vw] leading-none uppercase text-center select-none"
        >
          POTRANSFORA
        </h1>
      </main>

      {/* IDENTITY_FOOTER - المهمة الرابعة */}
      <footer 
        style={{ 
          backgroundColor: "#FFFFFF", // footer_bg_color
          scrollBehavior: "smooth"    // Footer_Scroll_Speed
        }} 
        className="w-full py-8 px-6 border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright Section */}
          <div 
            style={{ 
              fontSize: "12px",          // footer_font_size
              color: "#64748B"           // Footer_Copyright_Color
            }}
            className="font-medium"
          >
            © 2026 POTRANSFORA. All Rights Reserved
          </div>

          {/* Social Links Placeholder */}
          <div className="flex gap-6 text-[12px] font-medium text-[#64748B]">
            <span className="cursor-pointer hover:text-[#0F172A] transition-colors">Link1</span>
            <span className="cursor-pointer hover:text-[#0F172A] transition-colors">Link2</span>
          </div>

          {/* Version Section */}
          <div 
            style={{ 
              fontSize: "12px",
              color: "#94A3B8"           // Footer_Version_Color
            }}
            className="font-mono uppercase tracking-widest"
          >
            v15.1.0 Stable
          </div>
        </div>
      </footer>
    </div>
  );
}
