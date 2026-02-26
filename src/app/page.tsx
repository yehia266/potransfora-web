"use client"; 
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);
  
  // Mouse Tracking for Interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  function handleMouseMove({ clientX, clientY }) {
    mouseX.set(clientX - window.innerWidth / 2);
    mouseY.set(clientY - window.innerHeight / 2);
  }

  const notionData = {
    brand_identity: "POTRANSFORA X SOVEREIGN MINIMALISM.",
    dynamic_keywords: "Future,Vision,Power".split(","),
    inspiring_names: "".split(","),
    quote: ""
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % notionData.dynamic_keywords.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [notionData.dynamic_keywords]);

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#fbfbff] font-sans selection:bg-blue-100"
    >
      
      {/* 3D Interactive Background Elements */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="fixed inset-0 -z-10 opacity-60"
      >
        <div className="absolute top-[10%] left-[15%] h-96 w-96 rounded-full bg-gradient-to-br from-pink-200/40 to-transparent blur-[100px]" />
        <div className="absolute bottom-[15%] right-[20%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-200/30 to-transparent blur-[120px]" />
      </motion.div>

      {/* Sovereign Header */}
      <header className="fixed top-8 z-50 w-[92%] max-w-7xl flex justify-between items-center px-6 py-3 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-white p-1 shadow-sm border border-zinc-100">
            <img src="https://r.jina.ai/i/0c4664c126564614be75276e036e8b7d" className="rounded-lg object-cover h-full w-full" alt="L" />
          </div>
          <span className="text-lg font-black tracking-[-0.05em] text-zinc-900 uppercase italic">Potransfora</span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
          <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Active Deployment</span>
        </div>
      </header>

      {/* Main Experience Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 px-6">
        
        {/* Floating Identity Label */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="px-5 py-1.5 rounded-full border border-white bg-white/60 shadow-lg backdrop-blur-md mb-12"
        >
          <span className="text-[10px] font-black tracking-[0.6em] text-blue-600 uppercase">
             {notionData.brand_identity}
          </span>
        </motion.div>

        {/* Hero Typography with Motion Depth */}
        <motion.div 
          style={{ rotateX: useTransform(springY, [-500, 500], [5, -5]), rotateY: useTransform(springX, [-500, 500], [-5, 5]) }}
          className="perspective-1000"
        >
          <h1 className="text-7xl md:text-[11rem] font-black tracking-tighter leading-[0.8] text-zinc-900 uppercase">
            Empowering <br/>
            <AnimatePresence mode="wait">
              <motion.span 
                key={index}
                initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(10px)", y: -40 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-500 bg-clip-text text-transparent"
              >
                {notionData.dynamic_keywords[index]}
              </motion.span>
            </AnimatePresence>
          </h1>
        </motion.div>

        {/* The "Magical Quote" Card */}
        <motion.section 
          whileHover={{ scale: 1.02 }}
          className="mt-32 max-w-3xl p-12 rounded-[2.5rem] bg-white/40 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-3xl relative"
        >
          <p className="text-2xl md:text-4xl font-light italic leading-tight text-zinc-800 tracking-tight">
            "{notionData.quote}"
          </p>
          <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-blue-100/30 rounded-full blur-3xl -z-10" />
        </motion.section>

      </main>

      {/* Infinite Horizontal Flow */}
      <footer className="w-full mt-24 border-t border-white/50 bg-white/10 backdrop-blur-sm">
        <div className="py-10 overflow-hidden opacity-30">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }} 
            className="flex whitespace-nowrap"
          >
            {[...notionData.inspiring_names, ...notionData.inspiring_names].map((name, i) => (
              <span key={i} className="mx-12 text-6xl font-black italic text-zinc-900 uppercase tracking-tighter">
                {name}
              </span>
            ))}
          </motion.div>
        </div>
        <div className="pb-8 text-center text-[9px] font-mono tracking-[0.5em] text-zinc-400 uppercase">
          © 2026 Sovereign Deployment Engine • {timestamp.split('T')[0]}
        </div>
      </footer>

    </div>
  );
}
