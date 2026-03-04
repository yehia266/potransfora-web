"use client"; // ضروري جداً لتفعيل التفاعل في Next.js
import React, { useState } from 'react';

export default function Page() {
  // الجزء الأول: التعريفات
  const [showModal, setShowModal] = useState(true);
  const [eyeTransform, setEyeTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const x = (mouseX - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) / 40;
    const y = (mouseY - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) / 40;
    setEyeTransform({ x, y });
  };

  return (
    // الجزء الثاني: تفعيل الحساس
    <div style={styles.pageContainer} onMouseMove={handleMouseMove}>
      
      {/* الجزء الثالث: جسم المودال والعين (تمت إضافته هنا) */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            {/* الخلفيات الملونة */}
            <div style={{ ...styles.blob, ...styles.blob1 }}></div>
            <div style={{ ...styles.blob, ...styles.blob2 }}></div>
            
            <div style={styles.innerContent}>
              {/* تصميم العين المركزية */}
              <div style={styles.eyeContainer}>
                <div style={styles.eyeWhite}>
                  <div style={{ ...styles.eyeIris, transform: `translate(${eyeTransform.x}px, ${eyeTransform.y}px)` }}>
                    <div style={styles.eyePupil}></div>
                  </div>
                </div>
                <div style={styles.eyeScanner}></div>
              </div>

              <h2 style={styles.title}>POTRANSFORA CORE</h2>
              <p style={styles.description}>Step into the future of digital dominance.</p>
              
              <button 
                style={styles.button} 
                onClick={() => setShowModal(false)}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                INITIATE ACCESS
              </button>

              <div style={styles.eyeStatus}>
                <span style={styles.statusDot}></span>
                <span style={styles.eyeText}>Biometric Eye Tracking Active</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* بقية محتوى الصفحة الأصلي الخاص بكِ */}
      <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col">
        <header className="fixed top-0 w-full z-50">
          <div style={{ backdropFilter: 'blur(15px)' }} className="w-full border-b border-slate-200/50">
            <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
              <div style={{ fontFamily: "'Inter', sans-serif", color: "#0F172A", fontWeight: 800 }} className="text-2xl tracking-tighter uppercase">
                POTRANSFORA
              </div>
            </nav>
          </div>
        </header>

        <main className="flex-grow flex items-center justify-center min-h-screen">
          <h1 style={{ fontFamily: "'Inter', sans-serif", color: "#0F172A", fontWeight: 900, letterSpacing: "-0.02em" }} className="text-[12vw] leading-none uppercase text-center select-none">
            POTRANSFORA
          </h1>
        </main>

        <footer style={{ backgroundColor: "#FFFFFF" }} className="w-full py-8 px-6 border-t border-slate-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div style={{ fontSize: "12px", color: "#64748B" }} className="font-medium">
              © 2026 POTRANSFORA. All Rights Reserved
            </div>
            <div className="flex gap-6 text-[12px] font-medium text-[#64748B]">
              <span>Link1</span><span>Link2</span>
            </div>
            <div style={{ fontSize: "12px", color: "#94A3B8" }} className="font-mono uppercase tracking-widest">
              v15.1.0 Stable
            </div>
          </div>
        </footer>
      </div>

      {/* الأنيميشن الخاص بالعين والرمش */}
      <style>{`
        @keyframes scan { 0% { transform: rotate(0deg); opacity: 0.2; } 100% { transform: rotate(360deg); opacity: 0.2; } }
        @keyframes blink { 0%, 90%, 100% { transform: scaleY(1); } 95% { transform: scaleY(0.1); } }
      `}</style>
    </div>
  );
}

// الجزء الرابع: كائن الستايلات (ضروري لكي يعمل الكود)
const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: { position: "relative", overflow: "hidden" },
  modalOverlay: { position: "fixed", inset: 0, zIndex: 1000, backgroundColor: "rgba(255, 255, 255, 0.4)", backdropFilter: "blur(20px)", display: "flex", alignItems: "center", justifyCenter: "center" },
  modalContent: { position: "relative", width: "90%", maxWidth: "480px", padding: "60px 40px", backgroundColor: "#FFFFFF", borderRadius: "50px", boxShadow: "0 30px 60px rgba(0,0,0,0.1)", border: "1px solid rgba(255,255,255,0.8)", overflow: "hidden", textAlign: "center" },
  eyeContainer: { position: "relative", width: "100px", height: "100px", margin: "0 auto 30px", display: "flex", alignItems: "center", justifyContent: "center" },
  eyeWhite: { width: "80px", height: "80px", backgroundColor: "#fff", borderRadius: "50% 0", transform: "rotate(45deg)", border: "2px solid #0F172A", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", animation: "blink 5s infinite" },
  eyeIris: { width: "40px", height: "40px", backgroundColor: "#6366F1", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.1s ease-out" },
  eyePupil: { width: "18px", height: "18px", backgroundColor: "#0F172A", borderRadius: "50%" },
  eyeScanner: { position: "absolute", width: "110px", height: "110px", border: "1px dashed #6366F1", borderRadius: "50%", animation: "scan 4s linear infinite" },
  blob: { position: "absolute", width: "300px", height: "300px", borderRadius: "50%", filter: "blur(70px)", opacity: 0.3 },
  blob1: { backgroundColor: "#6366F1", top: "-100px", left: "-100px" },
  blob2: { backgroundColor: "#A855F7", bottom: "-100px", right: "-100px" },
  innerContent: { position: "relative", zIndex: 10 },
  title: { fontSize: "28px", fontWeight: 900, color: "#0F172A", margin: "0 0 10px 0" },
  description: { fontSize: "14px", color: "#64748B", margin: "0 0 35px 0" },
  button: { width: "100%", padding: "18px", backgroundColor: "#0F172A", color: "#fff", border: "none", borderRadius: "15px", fontSize: "12px", fontWeight: 900, letterSpacing: "3px", cursor: "pointer", transition: "all 0.3s" },
  eyeStatus: { marginTop: "25px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" },
  statusDot: { width: "6px", height: "6px", backgroundColor: "#6366F1", borderRadius: "50%" },
  eyeText: { fontSize: "10px", color: "#94A3B8", fontWeight: "bold", textTransform: "uppercase" },
};
