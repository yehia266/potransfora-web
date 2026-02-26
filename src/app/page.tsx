"use client"; 
import * as React from "react";
import * as FramerMotion from "framer-motion";
import { IconShieldCheck, IconArrowUpRight, IconWaves } from "@tabler/icons-react";

export default function Home() {
  const { motion } = FramerMotion;

  return (
    <>
      <title>Potransfora</title>
      <meta name="description" content="• Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity. Discover the Sovereign Treasury and the Immortal Digital Mentor within POTra..." />
      <meta name="keywords" content="Sovereign AI Future Potransfora" />

      <div className="relative min-h-screen w-full bg-[#020202] text-white overflow-x-hidden font-sans">
        
        {/* Background Aurora */}
        <div className="fixed inset-0 -z-10 opacity-20">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[140px]" />
        </div>

        {/* Header Section */}
        <header className="fixed top-8 z-50 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl flex justify-between items-center px-10 py-6 rounded-[2.5rem] border border-white/5 bg-black/40 backdrop-blur-2xl shadow-2xl">
          <div className="flex items-center gap-6">
            <img src="/logo01.png" className="h-12 w-12 object-contain" alt="Logo" />
            <div className="h-6 border-l border-white/10 pl-6">
              <img src="/logo-text.png" className="h-5 w-auto brightness-200" alt="Potransfora" />
            </div>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-[9px] font-black uppercase tracking-widest text-blue-400">
             SYSTEM ACTIVE
          </div>
        </header>

        {/* Bento Grid Content */}
        <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-[350px] pb-32">
          <div className="text-center mb-24">
             <motion.h1 
               initial={{ opacity: 0, y: 20 }} 
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               style={{ fontWeight: "900" }}
               className="text-7xl md:text-9xl tracking-tighter leading-none mb-8 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent uppercase italic"
             >
               Potransfora
             </motion.h1>
             <p className="text-zinc-500 text-xl italic italic">""Sovereignty is not just about power, but about attention to detail and clarity of vision.”"</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[22rem]">
            {/* Identity Box */}
            <div className="md:col-span-8 p-12 rounded-[3.5rem] border border-white/5 bg-zinc-900/20 backdrop-blur-xl flex flex-col justify-end">
               <span className="text-blue-500 text-[10px] font-black tracking-[0.5em] mb-4 uppercase">Identity</span>
               <h2 className="text-4xl font-bold mb-4">Sovereign Minimalism</h2>
               <p className="text-zinc-400 text-lg leading-relaxed">• Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity. Discover the Sovereign Treasury and the Immortal Digital Mentor within POTra...</p>
            </div>

            {/* Shield Box */}
            <div className="md:col-span-4 p-12 rounded-[3.5rem] border border-white/5 bg-gradient-to-br from-blue-600/10 to-transparent flex flex-col items-center justify-center">
               <IconShieldCheck size={80} className="text-blue-500/50 mb-6" />
               <p className="text-[10px] font-black tracking-widest text-zinc-600 uppercase">Sovereign Shield</p>
            </div>
          </div>
        </main>

        {/* Footer Names Slider */}
        <footer className="py-20 border-t border-white/5 overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, duration: 80, ease: "linear" }} 
            className="flex whitespace-nowrap opacity-10"
          >
            {[...("Steve Jobs Elon Musk Marcus Aurelius King Faisal".split(',')), ...("Steve Jobs Elon Musk Marcus Aurelius King Faisal".split(','))].map((name, i) => (
              <span key={i} className="mx-20 text-6xl font-black uppercase italic">{name}</span>
            ))}
          </motion.div>
        </footer>
      </div>
    </>
  );
}
