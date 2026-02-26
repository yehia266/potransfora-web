"use client"; 
import * as React from "react";
import * as FramerMotion from "framer-motion";

export default function Home() {
  const [index, setIndex] = React.useState(0);
  const { motion, AnimatePresence, useMotionValue, useSpring, useTransform } = FramerMotion;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  function handleMouseMove(e: any) {
    if (typeof window === "undefined" || window.innerWidth < 1024) return; 
    mouseX.set(e.clientX - window.innerWidth / 2);
    mouseY.set(e.clientY - window.innerHeight / 2);
  }

  const notionData = {
    brand_identity: "POTRANSFORA X SOVEREIGN MINIMALISM.",
    dynamic_keywords: "Future,Vision,Power".split(","),
    inspiring_names: "".split(","),
    quote: ""
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % notionData.dynamic_keywords.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [notionData.dynamic_keywords.length]);

  return (
    <div onMouseMove={handleMouseMove} className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden bg-[#fbfbff] font-sans">
      
      {/* FIXED HEADER: The Sovereign Build */}
      <header className="fixed top-4 md:top-8 z-50 w-[96%] max-w-7xl flex justify-between items-center px-6 md:px-10 py-4 md:py-6 rounded-[2rem] border border-white/80 bg-white/70 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-4 md:gap-8">
          
          {/* 1. الأيقونة الكبيرة (logo01.png) */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center drop-shadow-2xl"
          >
            <img src="/logo01.png" className="h-full w-full object-contain" alt="Icon" />
          </motion.div>

          {/* 2. نص البراند الكبير (logo-text.png) - تعديل اللون للهيبة */}
          <div className="h-6 md:h-9 flex items-center border-l-2 border-zinc-900/10 pl-4 md:pl-8">
            <img 
              src="/logo-text.png" 
              className="h-full w-auto object-contain brightness-[0.1] contrast-[1.5] drop-shadow-sm" 
              alt="Potransfora" 
            />
          </div>

        </div>
        
        <div className="hidden sm:block px-4 py-1.5 rounded-full border-2 border-zinc-900 bg-zinc-900 shadow-lg">
           <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Sovereign Mode</span>
        </div>
      </header>

      {/* Main Content: Increased pt for the larger header */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center pt-56 md:pt-72 lg:pt-80 px-4 md:px-6 text-center">
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-6 py-2 rounded-full border border-zinc-200 bg-white shadow-sm mb-14">
          <span className="text-[11px] font-black tracking-[0.6em] text-zinc-900 uppercase">
            {notionData.brand_identity}
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-9xl lg:text-[11rem] font-black tracking-tighter leading-[0.85] text-zinc-950 uppercase">
          Empowering <br className="hidden lg:block" />
          <AnimatePresence mode="wait">
            <motion.span 
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
              className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent inline-block py-4"
            >
              {notionData.dynamic_keywords[index]}
            </motion.span>
          </AnimatePresence>
        </h1>

        <motion.section className="mt-24 md:mt-40 max-w-5xl w-full p-10 md:p-20 rounded-[3rem] bg-white border border-zinc-100 shadow-2xl">
          <p className="text-2xl md:text-5xl font-light italic leading-tight text-zinc-900 tracking-tight">
            "{notionData.quote}"
          </p>
        </motion.section>
      </main>

      <footer className="w-full mt-32 border-t border-zinc-100 bg-white py-16 overflow-hidden">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 100, ease: "linear" }} className="flex whitespace-nowrap">
            {[...notionData.inspiring_names, ...notionData.inspiring_names].map((name, i) => (
              <span key={i} className="mx-24 text-6xl md:text-8xl font-black italic text-zinc-100 uppercase transition-colors hover:text-zinc-200">
                {name}
              </span>
            ))}
          </motion.div>
      </footer>
    </div>
  );
}
