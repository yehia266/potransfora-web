"use client"; 
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // الإصلاح الجوهري هنا: تحديد نوع البيانات (any) لتجاوز خطأ TypeScript
  function handleMouseMove({ clientX, clientY }: any) {
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
  }, [notionData.dynamic_keywords.length]);

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#fbfbff] font-sans selection:bg-blue-100"
    >
      <motion.div style={{ x: springX, y: springY }} className="fixed inset-0 -z-10 opacity-60">
        <div className="absolute top-[10%] left-[15%] h-96 w-96 rounded-full bg-gradient-to-br from-pink-200/40 to-transparent blur-[100px]" />
        <div className="absolute bottom-[15%] right-[20%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-200/30 to-transparent blur-[120px]" />
      </motion.div>

      <header className="fixed top-8 z-50 w-[92%] max-w-7xl flex justify-between items-center px-6 py-3 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-2xl shadow-sm">
        <div className="flex items-center gap-4">
          <img src="https://r.jina.ai/i/0c4664c126564614be75276e036e8b7d" className="h-10 w-10 rounded-xl bg-white p-1" alt="L" />
          <span className="text-lg font-black tracking-tighter text-zinc-900 uppercase italic">Potransfora</span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
          <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Live: 2026-02-26</span>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 px-6">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="px-5 py-1.5 rounded-full border border-white bg-white/60 shadow-md mb-12">
          <span className="text-[10px] font-black tracking-[0.6em] text-blue-600 uppercase">{notionData.brand_identity}</span>
        </motion.div>

        <motion.div style={{ rotateX: useTransform(springY, [-500, 500], [5, -5]), rotateY: useTransform(springX, [-500, 500], [-5, 5]) }}>
          <h1 className="text-7xl md:text-[11rem] font-black tracking-tighter leading-[0.8] text-zinc-900 uppercase">
            Empowering <br/>
            <AnimatePresence mode="wait">
              <motion.span 
                key={index}
                initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(10px)", y: -40 }}
                className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent inline-block"
              >
                {notionData.dynamic_keywords[index]}
              </motion.span>
            </AnimatePresence>
          </h1>
        </motion.div>

        <motion.section whileHover={{ scale: 1.02 }} className="mt-32 max-w-3xl p-12 rounded-[2.5rem] bg-white/40 border border-white shadow-2xl backdrop-blur-3xl">
          <p className="text-2xl md:text-4xl font-light italic leading-tight text-zinc-800">"{notionData.quote}"</p>
        </motion.section>
      </main>

      <footer className="w-full mt-24 border-t border-white/50 bg-white/10 py-10 overflow-hidden opacity-30">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }} className="flex whitespace-nowrap">
            {[...notionData.inspiring_names, ...notionData.inspiring_names].map((name, i) => (
              <span key={i} className="mx-12 text-6xl font-black italic text-zinc-900 uppercase">{name}</span>
            ))}
          </motion.div>
      </footer>
    </div>
  );
}
