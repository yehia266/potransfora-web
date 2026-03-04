"use client";
import React, { useState } from 'react';

export default function Page() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
      
      {/* IDENTITY_MODAL - المهمة الخامسة */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/40 backdrop-blur-xl">
          <div className="relative w-[90%] max-w-lg p-12 bg-white rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-white">
            
            {/* البقع اللونية الصريحة */}
            <div 
              className="absolute -top-24 -left-24 w-80 h-80 rounded-full animate-blob opacity-30"
              style={{ backgroundColor: "#6366F1", filter: "blur(60px)" }}
            ></div>
            <div 
              className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full animate-blob animation-delay-2000 opacity-30"
              style={{ backgroundColor: "#A855F7", filter: "blur(60px)" }}
            ></div>

            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-[900] tracking-tighter uppercase mb-4" style={{ color: "#0F172A" }}>
                POTRANSFORA CORE
              </h2>
              <p className="text-slate-500 text-sm mb-10 font-medium">
                Step into the future of digital dominance.
              </p>
              
              <button 
                onClick={() => setShowModal(false)}
                className="w-full py-5 text-white text-[12px] font-black tracking-[0.4em] uppercase rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: "#0F172A" }}
              >
                INITIATE ACCESS
              </button>

              {/* Eye Tracking Simulation */}
              <div className="mt-8 flex items-center justify-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Eye Tracking Enabled
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* باقي الأجزاء (Header, Hero, Footer) تظل كما هي مع التأكد من الألوان */}
      {/* ... */}
    </div>
  );
}
