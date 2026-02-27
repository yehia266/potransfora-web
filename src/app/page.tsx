
"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Twitter, Linkedin, Github, Globe, Shield } from 'lucide-react';
import dynamic from 'next/dynamic';

// استدعاء مشغل Lottie ديناميكياً لتجنب مشاكل الـ SSR
const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), { ssr: false });

export default function SovereignMaster() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  const primaryColor = "#0F172A";
  const accentColor = "#FDFDFD";
  const animDuration = parseFloat("0.8");
  const blurLevel = "20";

  return (
    <div className="min-h-screen text-white flex flex-col font-sans selection:bg-white selection:text-black overflow-x-hidden" 
         style={{ backgroundColor: primaryColor }}>
      
      {/* --- Sovereign Header --- */}
      <header className="fixed top-0 w-full z-50 p-6 flex justify-between items-center border-b border-white/5"
              style={{ backdropFilter: `blur(${blurLevel})`, WebkitBackdropFilter: `blur(${blurLevel})` }}>
        <div className="flex items-center gap-4">
          <div className="text-xl font-black italic tracking-tighter uppercase font-serif underline decoration-zinc-700">
            POTRANSFORA
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${"Online" === "Online" ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            <span className="text-[8px] uppercase tracking-[0.2em] opacity-60">Online</span>
          </div>
        </div>
        
        <nav className="hidden lg:flex gap-10 text-[9px] tracking-[0.4em] uppercase opacity-40">
          <a href="#" className="hover:opacity-100 transition-all hover:tracking-[0.6em] hover:text-white">Home Projects Team</a>
        </nav>

        <button className="text-[10px] px-8 py-2.5 rounded-full font-bold uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-white/5"
                style={{ backgroundColor: 'white', color: 'black' }}>
          REQUEST ACCESS
        </button>
      </header>

      {/* --- Main Sovereign Arena --- */}
      <main className="flex-grow flex flex-col items-center justify-center relative pt-20">
        
        {/* Lottie Soul - الرسوم المتحركة السيادية */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl opacity-20 pointer-events-none">
          {isLoaded && (
            <Player autoplay loop src="(اتركها حالياً، سأضع لك رابط الشخصية في الكود)" />
          )}
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animDuration }}
            className="text-[14vw] font-black italic tracking-tighter leading-none"
            style={{ fontFamily: "Playfair Display" }}
          >
            POTRANSFORA
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-xs md:text-sm tracking-[0.6em] uppercase font-light max-w-2xl mx-auto leading-loose"
          >
            "Sovereignty is not just about power, but about attention to detail and clarity of vision.”
          </motion.p>
        </div>

        {/* الشريط المتحرك - Legends Row */}
        <div className="absolute bottom-32 w-full overflow-hidden whitespace-nowrap opacity-10 border-y border-white/5 py-4">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex gap-20 text-[10px] tracking-[0.5em] uppercase font-mono"
          >
            <span>Steve Jobs Elon Musk Marcus Aurelius King Faisal</span>
            <span>Steve Jobs Elon Musk Marcus Aurelius King Faisal</span> 
          </motion.div>
        </div>
      </main>

      {/* --- Sovereign Footer --- */}
      <footer className="p-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 bg-black/50 backdrop-blur-md">
        <div className="text-[9px] tracking-[0.4em] uppercase opacity-30 font-mono underline decoration-zinc-800 underline-offset-8">
          © 2026 POTRANSFORA. All Rights Reserved
        </div>
        
        <div className="flex gap-10 opacity-30 items-center">
          <a href="WWW.POTRANSFORA.COM" className="hover:opacity-100 hover:text-blue-400 transition-all"><Twitter size={16} /></a>
          <a href="#" className="hover:opacity-100 hover:text-white transition-all"><Linkedin size={16} /></a>
          <a href="#" className="hover:opacity-100 hover:text-white transition-all"><Github size={16} /></a>
          <a href="#" className="hover:opacity-100 hover:text-white transition-all"><Shield size={16} /></a>
        </div>

        <div className="flex gap-8 text-[8px] tracking-[0.3em] uppercase opacity-20 font-bold border-l border-white/10 pl-8">
          <span className="flex items-center gap-2"><Globe size={10} /> GLOBAL GATEWAY</span>
          <span>v14.0 Stable Build</span>
        </div>
      </footer>
    </div>
  );
}
