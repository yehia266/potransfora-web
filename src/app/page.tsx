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
      
      {/* Background Parallax */}
      <motion.div style={{ x: springX, y: springY }} className="fixed inset-0 -z-10 opacity-40">
        <div className="absolute top-[5%] left-[5%] h-[40rem] w-[40rem] rounded-full bg-pink-200/30 blur-[120px]" />
        <div className="absolute bottom-[5%] right-[5%] h-[45rem] w-[45rem] rounded-full bg-blue-200/20 blur-[130px]" />
      </motion.div>

      {/* FIXED HEADER: Logo + Text Integration */}
      <header className="fixed top-4 md:top-8 z-50 w-[94%] max-w-7xl flex justify-between items-center px-4 md:px-8 py-3 md:py-4 rounded-2xl border border-white bg-white/60 backdrop-blur-2xl shadow-sm">
        <div className="flex items-center gap-3 md:gap-5">
          
          {/* 1. الأيقونة الرسومية (logo01.png) */}
          <div className="h-9 w-9 md:h-11 md:w-11 flex items-center justify-center">
            <img src="/logo01.png" className="h-full w-full object-contain" alt="Icon" />
          </div>

          {/* 2. نص البراند (logo-text.png) */}
          <div className="h-4 md:h-5 flex items-center border-l border-zinc-200/60 pl-3 md:pl-5">
            <img src="/logo-text.png" className="h-full w-auto object-contain brightness-105" alt="Potransfora" />
          </div>

        </div>
        <div className="hidden sm:block px-3 py-1 rounded-full border border-white/40 bg-white/20">
           <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.3em] italic">Sovereign Identity</span>
        </div>
      </header>

      {/* MAIN CONTENT: Extra Padding to avoid Header Collision */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center pt-48 md:pt-60 lg:pt-72 px-4 md:px-6 text-center">
        
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="px-5 py-1.5 rounded-full border border-white bg-white/80 shadow-sm mb-12">
          <span className="text-[10px] font-black tracking-[0.5em] text-blue-600 uppercase">
            {notionData.brand_identity}
          </span>
        </motion.div>

        <motion.div style={{ rotateX: useTransform(springY, [-500, 500], [5, -5]), rotateY: useTransform(springX, [-500, 500], [-5, 5]) }}>
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.9] text-zinc-900 uppercase">
            Empowering <br className="hidden lg:block" />
            <AnimatePresence mode="wait">
              <motion.span 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent inline-block py-2"
              >
                {notionData.dynamic_keywords[index]}
              </motion.span>
            </AnimatePresence>
          </h1>
        </motion.div>

        {/* Quote Section */}
        <motion.section className="mt-20 md:mt-32 max-w-4xl w-full p-8 md:p-16 rounded-[2.5rem] bg-white/40 border border-white shadow-xl backdrop-blur-3xl">
          <p className="text-xl md:text-4xl font-light italic leading-tight text-zinc-800">
            "{notionData.quote}"
          </p>
        </motion.section>
      </main>

      <footer className="w-full mt-24 border-t border-white/50 bg-white/20 py-12 overflow-hidden opacity-20">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 80, ease: "linear" }} className="flex whitespace-nowrap">
            {[...notionData.inspiring_names, ...notionData.inspiring_names].map((name, i) => (
              <span key={i} className="mx-20 text-5xl md:text-7xl font-black italic text-zinc-900 uppercase">
                {name}
              </span>
            ))}
          </motion.div>
      </footer>
    </div>
  );
}
