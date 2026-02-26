"use client"; 
import * as React from "react";
import * as FramerMotion from "framer-motion";
import { IconShieldCheck, IconArrowUpRight } from "@tabler/icons-react";

export default function Home() {
  const { motion } = FramerMotion;

  return (
    <>
      <title>Potransfora</title>
      <meta name="description" content="• Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity. Discover the Sovereign Treasury and the Immortal Digital Mentor within POTra" />

      <div className="relative min-h-screen w-full bg-[#020202] text-white overflow-hidden font-sans">
        
        {/* Background Aurora */}
        <div className="fixed inset-0 -z-10 opacity-20">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/15 blur-[180px]" />
        </div>

        {/* Header */}
        <header className="fixed top-8 z-50 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl flex justify-between items-center px-10 py-6 rounded-[2.5rem] border border-white/5 bg-black/40 backdrop-blur-3xl">
          <div className="flex items-center gap-4">
             <img src="/logo01.png" className="h-12 w-12" alt="Logo" />
             <div className="h-6 border-l border-white/10 pl-6 uppercase tracking-widest font-black text-[10px]">
                Sovereign Minimalism
             </div>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-black text-blue-400 uppercase tracking-widest">
             Sovereign Active
          </div>
        </header>

        {/* Main Bento */}
        <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-[300px] pb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[22rem]">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="md:col-span-8 p-12 rounded-[3.5rem] border border-white/5 bg-zinc-900/20 backdrop-blur-xl flex flex-col justify-end"
            >
               <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter italic uppercase">
                 Potransfora
               </h1>
               <p className="text-zinc-500 text-xl font-light italic">""Sovereignty is not just about power, but about attention to detail and clarity of vision.”"</p>
            </motion.div>

            <div className="md:col-span-4 p-12 rounded-[3.5rem] border border-white/5 bg-gradient-to-br from-blue-600/10 to-transparent flex flex-col items-center justify-center">
               <IconShieldCheck size={80} className="text-blue-500/40 mb-4 animate-pulse" />
               <span className="text-[10px] font-black tracking-widest text-zinc-600 uppercase">Secure Link</span>
            </div>
          </div>
        </main>

        {/* Footer Names */}
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
    </>
  );
}
