"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Activity, ShieldCheck } from 'lucide-react';
import dynamic from 'next/dynamic';

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), { ssr: false });

export default function SovereignMaster() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  return (
    <div className="min-h-screen text-white flex flex-col font-sans overflow-x-hidden relative select-none bg-imperial-gradient" 
         style={{ backgroundColor: "#05070A" }}>
      
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none lottie-container">
        {isLoaded && (
          <Player autoplay loop src="https://assets10.lottiefiles.com/packages/lf20_cwA59L.json" 
                  style={{ width: '1200px', height: '1200px', filter: 'blur(30px)' }} />
        )}
      </div>

      <header className="fixed top-0 w-full z-50 p-8 flex justify-between items-center border-b border-white/5 glass-header"
              style={{ '--blur-level': '20px' }}>
        <div className="flex items-center gap-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-black italic tracking-widest uppercase font-serif">
            POTRANSFORA
          </motion.div>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full border border-white/10">
            <Activity size={10} className="text-emerald-500 animate-pulse" />
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-70">Online</span>
          </div>
        </div>
        <button className="text-[10px] px-10 py-3 rounded-full font-bold uppercase tracking-[0.2em] bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-500">
          REQUEST ACCESS
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center relative z-10 pt-24 text-center px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-[14vw] italic tracking-tighter leading-none font-serif" 
              style={{ fontWeight: "900" }}>
            POTRANSFORA
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.5 }}
                    className="mt-8 text-xs md:text-sm tracking-[0.7em] uppercase font-light max-w-3xl mx-auto leading-relaxed border-t border-white/10 pt-8">
            Where Technology Meets Sovereignty: Crafting the DNA of the Digital Empire.
          </motion.p>
        </motion.div>

        <div className="absolute bottom-32 w-full overflow-hidden whitespace-nowrap border-y border-white/5 py-6 bg-white/[0.01]">
          <motion.div animate={{ x: [0, -2000] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} 
                      className="flex gap-40 text-[10px] tracking-[0.6em] uppercase font-mono opacity-20">
            <span>${name}</span><span>${name}</span><span>${name}</span><span>${name}</span><span>${name}</span>
            <span>${name}</span><span>${name}</span><span>${name}</span><span>${name}</span><span>${name}</span>
          </motion.div>
        </div>
      </main>

      <footer className="p-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 bg-black/60 backdrop-blur-xl z-20">
        <div className="text-[9px] tracking-[0.5em] uppercase opacity-40 font-mono italic">
          © 2026 POTRANSFORA. All Rights Reserved
        </div>
        <div className="flex gap-8 text-[8px] tracking-[0.4em] uppercase opacity-30 font-bold border-l border-white/10 pl-8 items-center">
          <ShieldCheck size={14} />
          <span>GLOBAL GATEWAY</span>
          <span className="bg-white/10 px-3 py-1 rounded-sm text-white/80">v14.2.3 Stable</span>
        </div>
      </footer>
    </div>
  );
}