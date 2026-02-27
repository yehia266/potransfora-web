"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), { ssr: false });

export default function SovereignMaster() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/seo?v=' + Date.now());
        const json = await res.json();
        setData(json);
        // تحديث عنوان التبويب ديناميكياً (seo_title)
        if (json.seo_title) document.title = json.seo_title;
      } catch (e) { console.error("Data Fetch Error", e); }
    };
    fetchData();
  }, []);

  if (!data) return <div className="bg-black min-h-screen flex items-center justify-center text-white font-mono uppercase tracking-[0.5em]">Initializing 16-Core System...</div>;

  return (
    <div className="min-h-screen text-white flex flex-col overflow-x-hidden transition-colors duration-1000" 
         style={{ backgroundColor: data.Core_Color_Palette, fontFamily: data.Typography_Standard }}>
      
      {/* Header السيادي */}
      <header className="fixed top-0 w-full z-50 p-6 flex justify-between items-center border-b border-white/5"
              style={{ backdropFilter: `blur(${data.Header_Blur_Level}px)`, WebkitBackdropFilter: `blur(${data.Header_Blur_Level}px)` }}>
        <div className="flex items-center gap-4">
          <div className="text-xl font-black italic tracking-tighter uppercase">{data.Header_Logo_Text}</div>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[8px] tracking-[0.2em] opacity-60">
            <span className={`w-1.5 h-1.5 rounded-full ${data.System_Status === "Online" ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
            {data.System_Status}
          </div>
        </div>
        <nav className="hidden lg:flex gap-10 text-[9px] tracking-[0.4em] uppercase opacity-40">{data.Header_Menu}</nav>
        <button className="text-[10px] px-8 py-2.5 rounded-full font-bold uppercase tracking-widest bg-white text-black active:scale-95 transition-all">
          {data.Header_CTA_Button}
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center relative pt-20">
        {/* Lottie Soul - Character_Lottie_URL */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl opacity-20 pointer-events-none">
          {data.Character_Lottie_URL && <Player autoplay loop src={data.Character_Lottie_URL} />}
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: parseFloat(data.Animation_Duration) }}
            className="text-[12vw] font-black italic tracking-tighter leading-none"
          >
            {data.Header_Logo_Text}
          </motion.h1>
          <p className="mt-6 text-xs md:text-sm tracking-[0.6em] uppercase font-light opacity-60">"{data.Inspiration_Quote}"</p>
        </div>

        {/* الشريط المتحرك - Inspiring_Names */}
        <div className="absolute bottom-32 w-full overflow-hidden whitespace-nowrap opacity-10 border-y border-white/5 py-4">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: parseInt(data.Footer_Scroll_Speed), ease: "linear" }}
            className="flex gap-20 text-[10px] tracking-[0.5em] uppercase font-mono"
          >
            <span>{data.Inspiring_Names}</span>
            <span>{data.Inspiring_Names}</span>
          </motion.div>
        </div>
      </main>

      <footer className="p-12 border-t border-white/5 text-center md:text-left">
        <div className="text-[9px] tracking-[0.4em] uppercase opacity-30 font-mono">{data.Footer_Copyright}</div>
      </footer>
    </div>
  );
}
