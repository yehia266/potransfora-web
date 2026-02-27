"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Globe, Shield } from 'lucide-react';
import dynamic from 'next/dynamic';

// استدعاء مشغل Lottie ديناميكياً
const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), { ssr: false });

export default function SovereignMaster() {
  const [data, setData] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // جلب البيانات مع منع الكاش لضمان التحديث اللحظي
        const res = await fetch('/api/seo?v=' + Date.now());
        const json = await res.json();
        setData(json);
        setIsLoaded(true);
      } catch (e) {
        console.error("Sovereign Error: Data fetch failed", e);
      }
    };
    fetchData();
  }, []);

  // شاشة التحميل السيادية
  if (!data) return (
    <div className="bg-black min-h-screen flex items-center justify-center text-white font-mono text-[10px] tracking-[0.5em] uppercase animate-pulse">
      Establishing Sovereignty...
    </div>
  );

  return (
    <div className="min-h-screen text-white flex flex-col font-sans selection:bg-white selection:text-black overflow-x-hidden" 
         style={{ backgroundColor: data.primaryColor || "#000000" }}>
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 p-6 flex justify-between items-center border-b border-white/5 bg-black/10 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="text-xl font-black italic tracking-tighter uppercase font-serif">
            {data.siteName || "POTRANSFORA"}
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${data.status === "Online" ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            <span className="text-[8px] uppercase tracking-[0.2em] opacity-60">{data.status || "Checking"}</span>
          </div>
        </div>
        <button className="text-[10px] px-8 py-2.5 rounded-full font-bold uppercase tracking-widest bg-white text-black hover:scale-105 transition-all">
          REQUEST ACCESS
        </button>
      </header>

      {/* Main Arena */}
      <main className="flex-grow flex flex-col items-center justify-center relative pt-20">
        
        {/* Lottie Soul - يقرأ الآن من Notion مباشرة عبر lottieUrl */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl opacity-20 pointer-events-none">
          {isLoaded && data.lottieUrl && (
            <Player autoplay loop src={data.lottieUrl} className="w-full h-full" />
          )}
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[12vw] font-black italic tracking-tighter leading-none"
          >
            {data.heroTitle || "SOVEREIGN"}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="mt-6 text-xs md:text-sm tracking-[0.6em] uppercase font-light max-w-2xl mx-auto leading-loose"
          >
            "{data.description || "Vision is the art of seeing things invisible."}"
          </motion.p>
        </div>

        {/* Legends Row */}
        <div className="absolute bottom-32 w-full overflow-hidden whitespace-nowrap opacity-10 border-y border-white/5 py-4">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex gap-20 text-[10px] tracking-[0.5em] uppercase font-mono"
          >
            <span>{data.legends || "Marcus Aurelius • King Faisal • Elon Musk"}</span>
            <span>{data.legends || "Marcus Aurelius • King Faisal • Elon Musk"}</span> 
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-[9px] tracking-[0.4em] uppercase opacity-30 font-mono">
          © 2026 {data.siteName}. Sovereignty Defined.
        </div>
        <div className="flex gap-8 text-[8px] tracking-[0.3em] uppercase opacity-20 font-bold border-l border-white/10 pl-8">
          <span className="flex items-center gap-2"><Globe size={10} /> GLOBAL HUB</span>
          <span>v14.0 SECURE BUILD</span>
        </div>
      </footer>
    </div>
  );
}
