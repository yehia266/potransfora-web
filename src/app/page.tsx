"use client"; 
import * as React from "react";
import * as FramerMotion from "framer-motion";

export default function Home() {
  const [index, setIndex] = React.useState(0);
  
  // استدعاء المكونات مباشرة من المكتبة لضمان التعرف عليها
  const { motion, AnimatePresence, useMotionValue, useSpring, useTransform } = FramerMotion;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  function handleMouseMove(e: any) {
    if (!e) return;
    mouseX.set(e.clientX - (typeof window !== "undefined" ? window.innerWidth / 2 : 0));
    mouseY.set(e.clientY - (typeof window !== "undefined" ? window.innerHeight / 2 : 0));
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
    <div onMouseMove={handleMouseMove} className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#fbfbff] font-sans">
      
      {/* Background Parallax */}
      <motion.div style={{ x: springX, y: springY }} className="fixed inset-0 -z-10 opacity-40">
        <div className="absolute top-[5%] left-[10%] h-[40rem] w-[40rem] rounded-full bg-pink-200/30 blur-[120px]" />
        <div className="absolute bottom-[5%] right-[10%] h-[45rem] w-[45rem] rounded-full bg-blue-200/20 blur-[130px]" />
      </motion.div>

      {/* Sovereign Header */}
      <header className="fixed top-8 z-50 w-[90%] max-w-6xl flex justify-between items-center px-8 py-4 rounded-3xl border border-white bg-white/40 backdrop-blur-3xl shadow-sm">
        <div className="flex items-center gap-4">
          <img src="https://r.jina.ai/i/0c4664c126564614be75276e036e8b7d" className="h-10 w-10 rounded-xl bg-white p-1" alt="Logo" />
          <span className="text-xl font-black tracking-tighter text-zinc-900 uppercase italic">Potransfora</span>
        </div>
        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Active System</span>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center pt-20 px-6">
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="px-6 py-2 rounded-full border border-white bg-white/70 shadow-sm mb-12">
          <span className="text-[10px] font-black tracking-[0.6em] text-blue-600 uppercase">{notionData.brand_identity}</span>
        </motion.div>

        <motion.div style={{ rotateX: useTransform(springY, [-500, 500], [7, -7]), rotateY: useTransform(springX, [-500, 500], [-7, 7]) }}>
          <h1 className="text-7xl md:text-[10rem] font-extrabold tracking-tighter leading-[0.85] text-zinc-900 uppercase">
            Empowering <br/>
            <AnimatePresence mode="wait">
              <motion.span 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent inline-block"
              >
                {notionData.dynamic_keywords[index]}
              </motion.span>
            </AnimatePresence>
          </h1>
        </motion.div>

        <motion.section whileHover={{ scale: 1.01 }} className="mt-32 max-w-4xl p-16 rounded-[3rem] bg-white/50 border border-white shadow-xl backdrop-blur-2xl">
          <p className="text-3xl md:text-5xl font-light italic leading-tight text-zinc-800">"{notionData.quote}"</p>
        </motion.section>
      </main>

      {/* Moving Footer */}
      <footer className="w-full mt-24 border-t border-white/50 bg-white/20 py-12 overflow-hidden opacity-20">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 80, ease: "linear" }} className="flex whitespace-nowrap">
            {[...notionData.inspiring_names, ...notionData.inspiring_names].map((name, i) => (
              <span key={i} className="mx-20 text-7xl font-black italic text-zinc-900 uppercase">{name}</span>
            ))}
          </motion.div>
      </footer>
    </div>
  );
}
