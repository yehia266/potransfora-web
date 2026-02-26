"use client"; 
import * as React from "react";
import * as FramerMotion from "framer-motion";
import { IconShieldCheck, IconLockSquareRounded } from "@tabler/icons-react";

export default function Home() {
  const { motion } = FramerMotion;

  return (
    <div className="relative min-h-screen w-full bg-[#020202] text-white overflow-hidden font-sans">
      <title>Potransfora</title>
      <meta name="description" content="• Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity. Discover the Sovereign Treasury and the Immortal Digital Mentor within POTra" />

      {/* Aurora Engine */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/15 blur-[180px]" />
      </div>

      {/* Header */}
      <header className="fixed top-8 z-50 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl flex justify-between items-center px-10 py-6 rounded-[2.5rem] border border-white/5 bg-black/40 backdrop-blur-3xl shadow-2xl">
        <div className="flex items-center gap-4 text-xs font-black tracking-[0.3em] uppercase">
           <IconLockSquareRounded className="text-blue-500" size={20} />
           <span>Sovereign Minimalism</span>
        </div>
        <div className="px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-[9px] font-black text-zinc-500 uppercase tracking-widest">
           Sovereign Node v6.9
        </div>
      </header>

      {/* Layout */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-[300px] pb-32 text-center">
         <motion.h1 
           initial={{ opacity: 0, scale: 0.95 }} 
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           style={{ fontWeight: "900" }}
           className="text-6xl md:text-9xl tracking-tighter leading-none mb-8 bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent uppercase italic"
         >
           Potransfora
         </motion.h1>
         <p className="text-zinc-500 text-xl font-light italic max-w-2xl mx-auto">"&quot;Sovereignty is not just about power, but about attention to detail and clarity of vision.”"</p>

         <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[15rem]">
            <div className="md:col-span-2 rounded-[3rem] border border-white/5 bg-zinc-900/10 backdrop-blur-md flex items-center justify-center p-10">
               <p className="text-zinc-400 text-left leading-relaxed font-light">• Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity. Discover the Sovereign Treasury and the Immortal Digital Mentor within POTransfora.</p>
            </div>
            <div className="rounded-[3rem] border border-white/5 bg-blue-600/5 flex flex-col items-center justify-center">
               <IconShieldCheck size={60} className="text-blue-500/30 animate-pulse" />
            </div>
         </div>
      </main>

      {/* Names Scroll */}
      <footer className="py-20 border-t border-white/5 overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }} 
          className="flex whitespace-nowrap opacity-10"
        >
          {[...("Steve Jobs Elon Musk Marcus Aurelius King Faisal".split(',')), ...("Steve Jobs Elon Musk Marcus Aurelius King Faisal".split(','))].map((n, i) => (
            <span key={i} className="mx-20 text-6xl font-black uppercase italic">{n.trim()}</span>
          ))}
        </motion.div>
      </footer>
    </div>
  );
}
