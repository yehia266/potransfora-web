
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Radio, Twitter, Linkedin, Github } from 'lucide-react';

export default function Home() {
  const statusColor = "Online" === "Online" ? "bg-emerald-500" : "bg-amber-500";

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-white selection:text-black">
      
      {/* --- Sovereign Header --- */}
      <header className="fixed top-0 w-full z-50 p-6 flex justify-between items-center border-b border-white/5 backdrop-blur-xl bg-black/20">
        <div className="flex items-center gap-3">
          <div className="text-xl font-black italic tracking-tighter uppercase text-white">POTRANSFORA</div>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${statusColor}`}></span>
            <span className="text-[8px] uppercase tracking-[0.2em] opacity-70">Online</span>
          </div>
        </div>
        
        <nav className="hidden md:flex gap-8 text-[10px] tracking-[0.3em] uppercase opacity-50">
          <a href="#" className="hover:opacity-100 transition-all hover:tracking-[0.5em]">Home Projects Team</a>
        </nav>

        <button className="text-[10px] bg-white text-black px-6 py-2 rounded-full font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors">
          REQUEST ACCESS
        </button>
      </header>

      {/* --- Main Arena --- */}
      <main className="flex-grow flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"></div>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[15vw] font-black italic tracking-tighter leading-none select-none text-white/90"
        >
          POTRANSFORA
        </motion.h1>
      </main>

      {/* --- Sovereign Footer --- */}
      <footer className="p-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 bg-black/40">
        <div className="text-[9px] tracking-[0.4em] uppercase opacity-30">© 2026 POTRANSFORA. All Rights Reserved</div>
        
        <div className="flex gap-8 opacity-40">
          <a href="WWW.POTRANSFORA.COM" className="hover:opacity-100 hover:text-white transition-all"><Twitter size={14} /></a>
          <a href="#" className="hover:opacity-100 hover:text-white transition-all"><Linkedin size={14} /></a>
          <a href="#" className="hover:opacity-100 hover:text-white transition-all"><Github size={14} /></a>
        </div>

        <div className="flex gap-6 text-[8px] tracking-widest uppercase opacity-20 font-mono">
          <span>Encrypted Connection</span>
          <span>v13.0 Stable</span>
        </div>
      </footer>
    </div>
  );
}
