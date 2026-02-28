"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function SovereignMaster() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  return (
    <div className="min-h-screen text-white flex flex-col font-sans overflow-x-hidden" style={{ backgroundColor: "#000000" }}>
      <header className="fixed top-0 w-full z-50 p-6 flex justify-between items-center border-b border-white/5 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="text-xl font-black italic tracking-tighter uppercase font-serif">POTRANSFORA</div>
        </div>
        <button className="text-[10px] px-8 py-2.5 rounded-full font-bold uppercase tracking-widest bg-white text-black">
          REQUEST ACCESS
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center relative pt-20">
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[14vw] italic tracking-tighter leading-none"
            style={{ fontWeight: "900" }}
          >
            POTRANSFORA
          </motion.h1>
          <p className="mt-6 text-xs tracking-[0.6em] uppercase opacity-60">
            "Sovereignty is not just about power, but about attention to detail and clarity of vision.”
          </p>
        </div>
      </main>

      <footer className="p-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 bg-black/50">
        <div className="text-[9px] tracking-[0.4em] uppercase opacity-30 italic">
          © 2026 POTRANSFORA. All Rights Reserved
        </div>
        <div className="flex gap-8 text-[8px] tracking-[0.3em] uppercase opacity-20 font-bold border-l border-white/10 pl-8">
          <Globe size={10} />
          <span>v14.2.3 Stable</span>
        </div>
      </footer>
    </div>
  );
}