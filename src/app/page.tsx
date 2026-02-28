"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Twitter, Linkedin, Github } from 'lucide-react';
import dynamic from 'next/dynamic';

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), { ssr: false });

export default function SovereignMaster() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  return (
    <div className="min-h-screen text-white flex flex-col font-sans overflow-x-hidden relative" 
         style={{ backgroundColor: "#05070A", backgroundImage: 'radial-gradient(circle at 50% -20%, #1e293b 0%, transparent 80%)' }}>
      
      {/* 1. الـ Lottie في الخلفية - الروح البصرية */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
        {isLoaded && (
          <Player autoplay loop src="https://assets10.lottiefiles.com/packages/lf20_cwA59L.json" style={{ width: '800px', height: '800px' }} />
        )}
      </div>

      <header className="fixed top-0 w-full z-50 p-6 flex justify-between items-center border-b border-white/5 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="text-xl font-black italic tracking-tighter uppercase font-serif underline decoration-white/10">POTRANSFORA</div>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[8px] uppercase tracking-[0.2em] opacity-60">Online</span>
          </div>
        </div>
        <button className="text-[10px] px-8 py-2.5 rounded-full font-bold uppercase tracking-widest bg-white text-black hover:scale-105 transition-transform">
          REQUEST ACCESS
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center relative z-10 pt-20">
        <div className="text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[14vw] italic tracking-tighter leading-none"
            style={{ fontWeight: "900", fontFamily: "Playfair Display" }}
          >
            POTRANSFORA
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} className="mt-6 text-xs md:text-sm tracking-[0.6em] uppercase font-light max-w-2xl mx-auto leading-loose">
            Where Technology Meets Sovereignty: Crafting the DNA of the Digital Empire.
          </motion.p>
        </div>

        {/* 2. شريط الأسماء الملهمة - Legends Row */}
        <div className="absolute bottom-32 w-full overflow-hidden whitespace-nowrap opacity-10 border-y border-white/5 py-4">
          <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 0.5625, ease: "linear" }} className="flex gap-20 text-[10px] tracking-[0.5em] uppercase font-mono">
            <span>Marcus Aurelius • Nikola Tesla • Alan Turing • Steve Jobs • Omar Sobhy</span>
            <span>Marcus Aurelius • Nikola Tesla • Alan Turing • Steve Jobs • Omar Sobhy</span>
          </motion.div>
        </div>
      </main>

      <footer className="p-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 bg-black/40 backdrop-blur-md z-10">
        <div className="text-[9px] tracking-[0.4em] uppercase opacity-30 italic font-mono">
          © 2026 POTRANSFORA. All Rights Reserved
        </div>
        
        <div className="flex gap-8 text-[8px] tracking-[0.3em] uppercase opacity-20 font-bold border-l border-white/10 pl-8 items-center">
          <Globe size={12} />
          <span>GLOBAL GATEWAY</span>
          <span className="bg-white/10 px-2 py-0.5 rounded">v14.2.3 Stable</span>
        </div>
      </footer>
    </div>
  );
}