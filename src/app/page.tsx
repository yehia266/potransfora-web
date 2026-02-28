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
        if (json.seo_title) document.title = json.seo_title;
        
        // حقن الـ Analytics ID إذا وجد
        if (json.Analytics_ID && json.Analytics_ID !== "G-XXXXXXXX") {
          const script = document.createElement('script');
          script.src = `https://www.googletagmanager.com/gtag/js?id=${json.Analytics_ID}`;
          script.async = true;
          document.head.appendChild(script);
        }
      } catch (e) { console.error("Fetch Error", e); }
    };
    fetchData();
  }, []);

  if (!data) return (
    <div className="bg-black min-h-screen flex items-center justify-center text-white font-mono uppercase tracking-[0.5em] animate-pulse">
      Initializing 21-Core Sovereign System...
    </div>
  );

  return (
    <div className="min-h-screen text-white flex flex-col overflow-x-hidden" 
         style={{ backgroundColor: data.Core_Color_Palette, fontFamily: data.Typography_Standard }}>
      <header className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-black/10 backdrop-blur-md"
              style={{ backdropFilter: `blur(${data.Header_Blur_Level}px)` }}>
        <div className="text-xl font-black italic tracking-tighter uppercase">{data.Header_Logo_Text}</div>
        <div className="text-[10px] px-8 py-2.5 rounded-full font-bold bg-white text-black">{data.Header_CTA_Button}</div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center relative">
        <div className="absolute w-full max-w-2xl opacity-20">
          {data.Character_Lottie_URL && <Player autoplay loop src={data.Character_Lottie_URL} className="w-full h-full" />}
        </div>
        <motion.h1 
          className="text-[12vw] italic tracking-tighter leading-none relative z-10"
          style={{ fontWeight: data.Font_Weight_Hero }} // وزن الخط الديناميكي
        >
          {data.Header_Logo_Text}
        </motion.h1>
        <p className="mt-6 text-sm tracking-[0.4em] opacity-60 italic relative z-10 text-center px-4">
          "{data.Inspiration_Quote}"
        </p>
      </main>

      <footer className="p-12 border-t border-white/5 flex justify-between items-center opacity-30 text-[9px] tracking-[0.4em]">
        <div>{data.Footer_Copyright}</div>
        <div>{data.Global_Gateway_Version}</div>
      </footer>
    </div>
  );
}
