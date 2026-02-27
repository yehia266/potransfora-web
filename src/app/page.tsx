"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Twitter, Linkedin, Github, Globe, Shield } from 'lucide-react';
import dynamic from 'next/dynamic';

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), { ssr: false });

export default function SovereignMaster() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setIsLoaded(true);
    // استدعاء البيانات من الـ API المربوط بـ n8n
    fetch('/api/seo?v=' + Date.now())
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.log("Waiting for Sovereign Data..."));
  }, []);

  // الحقول الـ 16 (استخدام القيم القادمة من Notion أو قيم افتراضية)
  const siteData = {
    primaryColor: data?.Core_Color_Palette || "#0F172A",
    logoText: data?.Header_Logo_Text || "POTRANSFORA",
    status: data?.System_Status || "Online",
    quote: data?.Inspiration_Quote || "Sovereignty is not just about power, but about clarity of vision.",
    lottie: data?.Character_Lottie_URL || "https://assets9.lottiefiles.com/packages/lf20_m6cu96ye.json",
    animDuration: parseFloat(data?.Animation_Duration || "0.8"),
    blur: data?.Header_Blur_Level || "20px",
    names: data?.Inspiring_Names || "Steve Jobs Elon Musk Marcus Aurelius King Faisal",
    cta: data?.Header_CTA_Button || "REQUEST ACCESS",
    copyright: data?.Footer_Copyright || "© 2026 POTRANSFORA. All Rights Reserved"
  };

  return (
    <div className="min-h-screen text-white flex flex-col font-sans selection:bg-white selection:text-black overflow-x-hidden transition-colors duration-1000" 
         style={{ backgroundColor: siteData.primaryColor }}>
      
      {/* --- Sovereign Header --- */}
      <header className="fixed top-0 w-full z-50 p-6 flex justify-between items-center border-b border-white/5"
              style={{ backdropFilter: `blur(${siteData.blur})`, WebkitBackdropFilter: `blur(${siteData.blur})` }}>
        <div className="flex items-center gap-4">
          <div className="text-xl font-black italic tracking-tighter uppercase font-serif underline decoration-zinc-700">
            {siteData.logoText}
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${siteData.status === "Online" ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            <span className="text-[8px] uppercase tracking-[0.2em] opacity-60">{siteData.status}</span>
          </div>
        </div>
        
        <nav className="hidden lg:flex gap-10 text-[9px] tracking-[0.4em] uppercase opacity-40">
          <a href="#" className="hover:opacity-100 transition-all hover:tracking-[0.6em] hover:text-white">Home Projects Team</a>
        </nav>

        <button className="text-[10px] px-8 py-2.5 rounded-full font-bold uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-white/5"
                style={{ backgroundColor: 'white', color: 'black' }}>
          {siteData.cta}
        </button>
      </header>

      {/* --- Main Sovereign Arena --- */}
      <main className="flex-grow flex flex-col items-center justify-center relative pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl opacity-20 pointer-events-none">
          {isLoaded && <Player autoplay loop src={siteData.lottie} style={{ height: '500px', width: '500px' }} />}
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: siteData.animDuration }}
            className="text-[14vw] font-black italic tracking-tighter leading-none"
          >
            {siteData.logoText}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-xs md:text-sm tracking-[0.6em] uppercase font-light max-w-2xl mx-auto leading-loose"
          >
            "{siteData.quote}"
          </motion.p>
        </div>

        {/* الشريط المتحرك - Legends Row */}
        <div className="absolute bottom-32 w-full overflow-hidden whitespace-nowrap opacity-10 border-y border-white/5 py-4">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex gap-20 text-[10px] tracking-[0.5em] uppercase font-mono"
          >
            <span>{siteData.names}</span>
            <span>{siteData.names}</span> 
          </motion.div>
        </div>
      </main>

      {/* --- Sovereign Footer --- */}
      <footer className="p-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 bg-black/50 backdrop-blur-md">
        <div className="text-[9px] tracking-[0.4em] uppercase opacity-30 font-mono underline decoration-zinc-800 underline-offset-8">
          {siteData.copyright}
        </div>
        
        <div className="flex gap-10 opacity-30 items-center">
          <Twitter size={16} />
          <Linkedin size={16} />
          <Github size={16} />
          <Shield size={16} />
        </div>
      </footer>
    </div>
  );
}
