
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { IconShieldCheck, IconLockSquareRounded, IconChartBar } from '@tabler/icons-react';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#020202] text-white flex flex-col items-center justify-center overflow-hidden font-sans">
      <title>Potransfora</title>
      
      {/* الخلفية الضوئية (Aurora Effect) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-zinc-900/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] bg-zinc-800/20 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 flex flex-col items-center">
        {/* الشعار الرئيسي بتأثير الظهور التدريجي */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-black italic tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent uppercase"
        >
          POTRANSFORA
        </motion.h1>

        {/* العنوان الفرعي */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-sm md:text-lg font-light tracking-[0.8em] uppercase text-zinc-400"
        >
          Sovereign Management System
        </motion.p>

        {/* شريط الأيقونات السيادية */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-8 mt-16 p-4 border-t border-b border-zinc-800/50"
        >
          <IconShieldCheck size={20} className="text-zinc-500 hover:text-white transition-colors" />
          <IconLockSquareRounded size={20} className="text-zinc-500 hover:text-white transition-colors" />
          <IconChartBar size={20} className="text-zinc-500 hover:text-white transition-colors" />
        </motion.div>

        {/* شريط الأسماء المتحرك السفلي */}
        <div className="absolute bottom-10 w-full flex justify-center overflow-hidden whitespace-nowrap opacity-20 text-[10px] tracking-[0.3em] uppercase">
          <div className="flex gap-10">
            <span>Steve Jobs Elon Musk Marcus Aurelius King Faisal</span>
          </div>
        </div>
      </main>

      {/* لمسة تقنية في الأركان */}
      <div className="absolute top-10 left-10 text-[8px] text-zinc-700 font-mono uppercase tracking-widest">
        Sovereign System v11.0 // Active
      </div>
      <div className="absolute bottom-10 right-10 text-[8px] text-zinc-700 font-mono uppercase tracking-widest">
        Est. 2026 // Potransfora
      </div>
    </div>
  );
}
