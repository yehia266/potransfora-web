"use client";
import React, { useState } from 'react';

export default function Page() {
  const [showModal, setShowModal] = useState(true); // show_welcome_modal: true

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col relative overflow-hidden">
      
      {/* IDENTITY_MODAL - المهمة الخامسة */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/60 backdrop-blur-md">
          <div className="relative w-[90%] max-w-lg p-10 bg-white border border-slate-100 shadow-2xl rounded-2xl overflow-hidden">
            
            {/* الأشكال اللونية (Blobs) بناءً على إعدادات المهمة */}
            <div 
              style={{ backgroundColor: "#6366F1" }} // modal_blob_color_1
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
            ></div>
            <div 
              style={{ backgroundColor: "#A855F7" }} // modal_blob_color_2
              className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
            ></div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-[900] text-[#0F172A] tracking-tighter uppercase mb-4">
                POTRANSFORA CORE
              </h2>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                Step into the future of digital dominance.
              </p>
              
              <button 
                onClick={() => setShowModal(false)}
                className="w-full py-4 bg-[#0F172A] text-white text-[11px] font-bold tracking-[0.3em] uppercase rounded-lg hover:bg-indigo-600 transition-all duration-500"
              >
                INITIATE ACCESS
              </button>
              
              {/* محاكاة تقنية تتبع العين */}
              <div className="mt-6 flex justify-center gap-1">
                <div className="w-1 h-1 bg-indigo-500 rounded-full animate-ping"></div>
                <span className="text-[9px] text-slate-400 font-mono uppercase tracking-widest">
                  Eye Tracking Active
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* IDENTITY_HEADER - المهمة الثانية */}
      <header className="fixed top-0 w-full z-50">
        <div style={{ backdropFilter: 'blur(15px)' }} className="w-full border-b border-slate-200/50">
          <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div style={{ fontFamily: "'Inter', sans-serif", color: "#0F172A", fontWeight: 800 }} className="text-2xl tracking-tighter uppercase">
              POTRANSFORA
            </div>
          </nav>
        </div>
      </header>

      {/* IDENTITY_HERO - المهمة الثالثة */}
      <main className="flex-grow flex items-center justify-center min-h-screen">
        <h1 style={{ fontFamily: "'Inter', sans-serif", color: "#0F172A", fontWeight: 900, letterSpacing: "-0.02em" }} className="text-[12vw] leading-none uppercase text-center select-none">
          POTRANSFORA
        </h1>
      </main>

      {/* IDENTITY_FOOTER - المهمة الرابعة */}
      <footer style={{ backgroundColor: "#FFFFFF", scrollBehavior: "smooth" }} className="w-full py-8 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[12px]">
          <div style={{ color: "#64748B" }}>© 2026 POTRANSFORA. All Rights Reserved</div>
          <div className="flex gap-6 text-[#64748B]">
            <span>Link1</span><span>Link2</span>
          </div>
          <div style={{ color: "#94A3B8" }} className="font-mono uppercase tracking-widest">
            v15.1.0 Stable
          </div>
        </div>
      </footer>
    </div>
  );
}
