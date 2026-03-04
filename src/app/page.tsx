"use client";
import React, { useState } from 'react';

export default function Page() {
  const [showModal, setShowModal] = useState(true);

  // البيانات التي كانت في الجدول الأصلي وسأعيدها الآن
  const sovereignData = {
    title: "POTRANSFORA",
    description: "Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity. Discover the Sovereign Treasury and the Internal Digital Mentor within Transfora.",
    status: "Active",
    system: "Online",
    version: "v15.1.0 Stable"
  };

  return (
    <div className="min-h-screen flex flex-col relative font-sans" style={{ backgroundColor: '#F8FAFC' }}>
      
      {/* IDENTITY_MODAL - المهمة الخامسة */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/40 backdrop-blur-2xl">
          <div className="relative w-[90%] max-w-lg p-12 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white">
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full animate-blob opacity-40" style={{ backgroundColor: "#6366F1", filter: "blur(60px)" }}></div>
            <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full animate-blob animation-delay-2000 opacity-40" style={{ backgroundColor: "#A855F7", filter: "blur(60px)" }}></div>

            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-[900] tracking-tighter uppercase mb-4" style={{ color: "#0F172A" }}>
                POTRANSFORA CORE
              </h2>
              <p className="text-slate-500 text-sm mb-10 font-medium leading-relaxed">
                Step into the future of digital dominance.
              </p>
              <button onClick={() => setShowModal(false)} className="w-full py-5 text-white text-[12px] font-black tracking-[0.4em] uppercase rounded-2xl transition-all hover:brightness-125 shadow-lg" style={{ backgroundColor: "#0F172A" }}>
                INITIATE ACCESS
              </button>
            </div>
          </div>
        </div>
      )}

      {/* IDENTITY_HEADER */}
      <header className="fixed top-0 w-full z-50">
        <div style={{ backdropFilter: 'blur(15px)' }} className="w-full border-b border-slate-200/50 bg-white/10">
          <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div style={{ color: "#0F172A", fontWeight: 800 }} className="text-2xl tracking-tighter uppercase">
              {sovereignData.title}
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">{sovereignData.system}</span>
            </div>
          </nav>
        </div>
      </header>

      {/* المحتوى الذي تمت إعادته (كان محذوفاً) */}
      <main className="flex-grow flex flex-col items-center justify-center min-h-screen pt-20">
        <h1 style={{ color: "#0F172A", fontWeight: 900, letterSpacing: "-0.02em" }} className="text-[12vw] leading-none uppercase text-center select-none">
          {sovereignData.title}
        </h1>
        
        {/* إعادة الوصف والبيانات الأصلية من ملف CSV */}
        {!showModal && (
          <div className="max-w-3xl text-center px-6 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed tracking-tight">
              {sovereignData.description}
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <div className="px-4 py-2 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Status: {sovereignData.status}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* IDENTITY_FOOTER */}
      <footer style={{ backgroundColor: "#FFFFFF" }} className="w-full py-8 px-6 border-t border-slate-100 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[12px]">
          <div style={{ color: "#64748B" }}>© 2026 {sovereignData.title}. All Rights Reserved</div>
          <div style={{ color: "#94A3B8" }} className="font-mono uppercase tracking-widest">
            {sovereignData.version}
          </div>
        </div>
      </footer>
    </div>
  );
}
