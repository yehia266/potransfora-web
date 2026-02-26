"use client"; 
import * as React from "react";
import * as FramerMotion from "framer-motion";
import { IconShieldCheck, IconPointFilled } from "@tabler/icons-react";

export default function Home() {
  const { motion } = FramerMotion;

  return (
    <div className="relative min-h-screen w-full bg-[#020202] text-white overflow-hidden font-sans selection:bg-blue-500">
      <title>Potransfora</title>
      <meta name="description" content="• Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity. Discover the Sovereign Treasury and the Immortal Digital Mentor within POTra" />

      {/* Background Engine */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#0F172A]/20 blur-[180px]" />
      </div>

      {/* Header */}
      <header className="fixed top-8 z-50 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl flex justify-between items-center px-10 py-6 rounded-full border border-white/5 bg-black/40 backdrop-blur-3xl">
        <div className="flex items-center gap-4">
           <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center font-black shadow-lg shadow-blue-500/20">P</div>
           <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-60">Sovereign Minimalism</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10">
           <IconPointFilled className="text-green-500 animate-ping" size={12} />
           <span className="text-[8px] font-black uppercase tracking-widest text-zinc-400">Node Active</span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-[300px] pb-32">
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-8 bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent uppercase italic">
               Potransfora
            </h1>
            <p className="text-zinc-500 text-xl font-light italic max-w-2xl mx-auto mb-20 border-l-2 border-blue-500/30 pl-6">
               ""Sovereignty is not just about power, but about attention to detail and clarity of vision.”"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="md:col-span-2 p-12 rounded-[3rem] border border-white/5 bg-zinc-900/10 backdrop-blur-md text-left">
                  <span className="text-blue-500 text-[10px] font-black tracking-[0.3em] uppercase mb-4 block">Sovereign Mission</span>
                  <p className="text-zinc-400 text-lg leading-relaxed font-light">• Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity. Discover the Sovereign Treasury and the Immortal Digital Mentor within POTransfora.</p>
               </div>
               <div className="p-12 rounded-[3rem] border border-white/5 bg-gradient-to-br from-blue-600/10 to-transparent flex flex-col items-center justify-center">
                  <IconShieldCheck size={80} className="text-blue-500/40 mb-4" />
                  <span className="text-[10px] font-black tracking-widest text-zinc-700 uppercase">Architecture Verified</span>
               </div>
            </div>
         </motion.div>
      </main>

      {/* Footer Slider */}
      <footer className="py-20 border-t border-white/5 overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 100, ease: "linear" }} 
          className="flex whitespace-nowrap opacity-10"
        >
          {[...Array(2)].map((_, j) => (
            <React.Fragment key={j}>
              {"Steve Jobs Elon Musk Marcus Aurelius King Faisal".split(',').map((n, i) => (
                <span key={i} className="mx-20 text-6xl font-black uppercase italic">{n.trim()}</span>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </footer>
    </div>
  );
}
