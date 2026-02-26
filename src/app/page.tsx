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
    <div onMouseMove={handleMouseMove} className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden bg-[#fbfbff] font-sans selection:bg-blue-100">
      
      {/* Background Gradients - عودة الواقعية السحرية */}
      <motion.div style={{ x: springX, y: springY }} className="fixed inset-0 -z-10 opacity-50">
        <div className="absolute top-[5%] left-[5%] h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-pink-200/40 to-transparent blur-[120px]" />
        <div className="absolute bottom-[5%] right-[5%] h-[45rem] w-[45rem] rounded-full bg-gradient-to-tr from-blue-200/30 to-transparent blur-[130px]" />
      </motion.div>

      {/* SOVEREIGN HEADER - الهيدر المهيب */}
      <header className="fixed top-6 md:top-10 z-50 w-[94%] max-w-7xl flex justify-between items-center px-8 md:px-12 py-5 md:py-7 rounded-[2.5rem] border border-white/80 bg-white/60 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-6 md:gap-10">
          <motion.div whileHover={{ scale: 1.05 }} className="h-14 w-14 md:h-20 md:w-20 flex items-center justify-center">
            <img src="/logo01.png" className="h-full w-full object-contain drop-shadow-md" alt="Icon" />
          </motion.div>
          <div className="h-6 md:h-9 flex items-center border-l-2 border-zinc-900/10 pl-6 md:pl-10">
            <img src="/logo-text.png" className="h-full w-auto object-contain brightness-[0.1] contrast-[1.2]" alt="Text" />
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4 px-5 py-2 rounded-full bg-zinc-900 shadow-xl">
           <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
           <span className="text-[10px] font-black text-white uppercase tracking-[0.5em]">Sovereign Active</span>
        </div>
      </header>

      {/* MAIN CONTENT - عودة التنسيق والحجم الضخم */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center pt-64 md:pt-80 lg:pt-[22rem] px-6 text-center">
        
        <motion.div className="px-6 py-2 rounded-full border border-zinc-200 bg-white/80 shadow-sm mb-16">
          <span className="text-[11px] font-black tracking-[0.7em] text-blue-600 uppercase italic">
            {notionData.brand_identity}
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-9xl lg:text-[11.5rem] font-black tracking-tighter leading-[0.8] text-zinc-950 uppercase">
          Empowering <br className="hidden lg:block" />
          <AnimatePresence mode="wait">
            <motion.span 
              key={index}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-800 bg-clip-text text-transparent inline-block py-6"
            >
              {notionData.dynamic_keywords[index]}
            </motion.span>
          </AnimatePresence>
        </h1>

        <motion.section className="mt-28 md:mt-44 max-w-5xl w-full p-12 md:p-24 rounded-[3.5rem] bg-white/40 border border-white shadow-2xl backdrop-blur-2xl">
          <p className="text-2xl md:text-5xl font-light italic leading-tight text-zinc-900 tracking-tight">
            "{notionData.quote}"
          </p>
        </motion.section>
      </main>

      {/* FOOTER SLIDER - عودة الأسماء المتحركة */}
      <footer className="w-full mt-32 border-t border-zinc-100 bg-white/30 py-20 overflow-hidden opacity-30">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 90, ease: "linear" }} className="flex whitespace-nowrap">
            {[...notionData.inspiring_names, ...notionData.inspiring_names].map((name, i) => (
              <span key={i} className="mx-28 text-6xl md:text-8xl font-black italic text-zinc-950 uppercase">
                {name}
              </span>
            ))}
          </motion.div>
      </footer>
    </div>
  );
}
