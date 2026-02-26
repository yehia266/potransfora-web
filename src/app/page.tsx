"use client"; 
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);
  const notionData = {
    seo_title: "POTransfora | Algorithmic Justice & Digital Sovereignty Protocol",
    seo_description: "• Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity. Discover the Sovereign Treasury and the Immortal Digital Mentor within POTransfora.",
    brand_identity: "POTRANSFORA X SOVEREIGN MINIMALISM.",
    dynamic_keywords: "Future,Vision,Power".split(","),
    inspiring_names: "".split(","),
    quote: ""
  };

  useEffect(() => {
    if (notionData.dynamic_keywords.length > 1) {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % notionData.dynamic_keywords.length);
      }, 3500);
      return () => clearInterval(timer);
    }
  }, [notionData.dynamic_keywords]);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden font-sans selection:bg-pink-200">
      
      {/* Background: Magical Realism Gradient Layer */}
      <div className="fixed inset-0 -z-10 bg-[#f8f9ff]">
        <div className="absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-pink-100/50 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[60%] w-[60%] rounded-full bg-blue-100/40 blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] h-[30%] w-[30%] rounded-full bg-purple-50/30 blur-[100px]" />
      </div>

      {/* Header: Glassmorphism */}
      <header className="fixed top-6 z-50 w-[90%] max-w-6xl rounded-2xl border border-white/40 bg-white/20 backdrop-blur-xl px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/60 shadow-inner">
             <img src="https://r.jina.ai/i/0c4664c126564614be75276e036e8b7d" className="h-full w-full object-cover" alt="Logo" />
          </div>
          <span className="text-xl font-black tracking-tighter text-zinc-800 uppercase italic">POTRANSFORA</span>
        </div>
        <div className="hidden md:block text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em]">
           Sovereign Identity System v2.6
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center pt-40 px-6 text-center">
        
        {/* Brand Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mb-8 rounded-full border border-white bg-white/40 px-4 py-1.5 shadow-sm backdrop-blur-md"
        >
          <span className="text-[10px] font-bold tracking-[0.5em] text-pink-500 uppercase">
            {notionData.brand_identity}
          </span>
        </motion.div>

        {/* Hero Title */}
        <div className="relative space-y-4 max-w-5xl">
          <h1 className="text-7xl md:text-[10rem] font-black tracking-[ -0.05em] leading-[0.85] text-zinc-900 uppercase">
            Empowering <br/>
            <div className="relative inline-block h-[1.1em] overflow-hidden align-bottom">
              <AnimatePresence mode="wait">
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -60 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 bg-clip-text text-transparent inline-block"
                >
                  {notionData.dynamic_keywords[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
          <p className="mt-8 text-zinc-500 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed opacity-80">
            {notionData.seo_description}
          </p>
        </div>

        {/* Infinite Names Slider */}
        <div className="mt-32 w-screen py-16 overflow-hidden bg-white/30 backdrop-blur-sm border-y border-white">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }} 
            className="flex whitespace-nowrap"
          >
            {[...notionData.inspiring_names, ...notionData.inspiring_names].map((name, i) => (
              <span key={i} className="mx-16 text-6xl md:text-8xl font-black text-transparent stroke-zinc-900/10 [-webkit-text-stroke:1px_rgba(0,0,0,0.1)] uppercase italic tracking-tighter">
                {name}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Quote Section: Soft Clay Card */}
        <section className="my-40 max-w-4xl px-12 py-20 rounded-[3rem] bg-white/60 border border-white shadow-2xl backdrop-blur-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-pink-400/40" />
          <p className="text-3xl md:text-5xl font-light italic leading-snug text-zinc-800 text-left">
            "{notionData.quote}"
          </p>
        </section>
      </main>

      <footer className="w-full p-12 text-[10px] text-zinc-400 font-mono tracking-[0.4em] text-center uppercase border-t border-white/50 bg-white/20">
        © 2026 Sovereign Deployment • Path of the Sword • ID: 2026-02-26
      </footer>

    </div>
  );
}
