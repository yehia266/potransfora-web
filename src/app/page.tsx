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
    if (typeof window === "undefined" || window.innerWidth < 768) return; // تعطيل التحريك على الموبايل لتوفير البطارية والسلاسة
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
    <div onMouseMove={handleMouseMove} className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden bg-[#fbfbff] font-sans">
      
      {/* Background: Adaptive Gradients */}
      <motion.div style={{ x: springX, y: springY }} className="fixed inset-0 -z-10 opacity-40">
        <div className="absolute top-[5%] left-[5%] h-[20rem] md:h-[40rem] w-[20rem] md:w-[40rem] rounded-full bg-pink-200/30 blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[5%] right-[5%] h-[25rem] md:h-[45rem] w-[25rem] md:w-[45rem] rounded-full bg-blue-200/20 blur-[90px] md:blur-[130px]" />
      </motion.div>

      {/* Header: Compact for Mobile */}
      <header className="fixed top-4 md:top-8 z-50 w-[94%] max-w-6xl flex justify-between items-center px-4 md:px-8 py-3 md:py-4 rounded-2xl md:rounded-3xl border border-white bg-white/50 backdrop-blur-2xl shadow-sm">
        <div className="flex items-center gap-2 md:gap-4">
          <img src="https://r.jina.ai/i/0c4664c126564614be75276e036e8b7d" className="h-8 w-8 md:h-10 md:w-10 rounded-lg md:rounded-xl bg-white p-1" alt="Logo" />
          <span className="text-sm md:text-xl font-black tracking-tighter text-zinc-900 uppercase italic">Potransfora</span>
        </div>
        <div className="px-3 py-1 rounded-full border border-zinc-200 bg-white/50">
           <span className="text-[8px] md:text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Active</span>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center pt-24 md:pt-20 px-4 md:px-6 text-center">
        
        {/* Identity Label */}
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="px-4 py-1.5 rounded-full border border-white bg-white/80 shadow-sm mb-8 md:mb-12">
          <span className="text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.6em] text-blue-600 uppercase">
            {notionData.brand_identity}
          </span>
        </motion.div>

        {/* Hero Title: Fluid Typography */}
        <motion.div style={{ rotateX: useTransform(springY, [-500, 500], [5, -5]), rotateY: useTransform(springX, [-500, 500], [-5, 5]) }}>
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.9] text-zinc-900 uppercase">
            Empowering <br className="hidden md:block" />
            <AnimatePresence mode="wait">
              <motion.span 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500 bg-clip-text text-transparent inline-block py-2"
              >
                {notionData.dynamic_keywords[index]}
              </motion.span>
            </AnimatePresence>
          </h1>
        </motion.div>

        {/* Quote: Adaptive Card */}
        <motion.section 
          whileHover={{ scale: 1.01 }} 
          className="mt-16 md:mt-32 max-w-4xl w-full p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] bg-white/50 border border-white shadow-xl backdrop-blur-2xl"
        >
          <p className="text-xl md:text-3xl lg:text-5xl font-light italic leading-tight text-zinc-800">
            "{notionData.quote}"
          </p>
        </motion.section>
      </main>

      {/* Footer Slider: Speed Optimized */}
      <footer className="w-full mt-16 md:mt-24 border-t border-white/50 bg-white/20 py-8 md:py-12 overflow-hidden opacity-20">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }} className="flex whitespace-nowrap">
            {[...notionData.inspiring_names, ...notionData.inspiring_names].map((name, i) => (
              <span key={i} className="mx-10 md:mx-20 text-4xl md:text-7xl font-black italic text-zinc-900 uppercase">
                {name}
              </span>
            ))}
          </motion.div>
      </footer>
      
      <div className="pb-6 text-[8px] md:text-[10px] text-zinc-400 font-mono tracking-[0.3em] uppercase">
        © 2026 DEPLOYMENT ENGINE • 2026-02-26
      </div>
    </div>
  );
}
