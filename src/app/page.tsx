
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);
  const notionData = {
    seo_title: "POTransfora | Algorithmic Justice & Digital Sovereignty Prot",
    seo_description: "• Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity. Discover the Sovereign Treasury and the Immortal Digital Mentor within POTra",
    brand_identity: "POTRANSFORA X SOVEREIGN MINIMALISM.",
    status: "Done",
    dynamic_keywords: "Future".split(","),
    inspiring_names: "".split(","),
    quote: ""
  };

  useEffect(() => {
    if (notionData.dynamic_keywords.length > 0 && notionData.dynamic_keywords[0] !== "") {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % notionData.dynamic_keywords.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [notionData.dynamic_keywords]);

  return (
    <div className="flex min-h-screen flex-col bg-[#050505] text-white selection:bg-[#00A3FF] overflow-x-hidden">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="https://r.jina.ai/i/0c4664c126564614be75276e036e8b7d" className="h-10 w-10 rounded-xl border border-white/10" />
          <span className="text-xl font-black tracking-tighter uppercase">POTRANSFORA</span>
        </div>
        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">SYSTEM: {notionData.status}</span>
      </header>

      <main className="flex-1 pt-40">
        <section className="text-center px-6">
          <h2 className="mb-6 text-[10px] font-bold tracking-[0.6em] text-[#00A3FF] uppercase">{notionData.brand_identity}</h2>
          <h1 className="text-6xl font-extrabold sm:text-8xl mb-8 leading-tight">
            Empowering <br />
            <AnimatePresence mode="wait">
              <motion.span 
                key={index} 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} 
                className="text-[#00A3FF]"
              >
                {notionData.dynamic_keywords[index]}
              </motion.span>
            </AnimatePresence>
          </h1>
        </section>

        <div className="my-24 border-y border-white/5 py-12 overflow-hidden bg-zinc-900/20">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 45, ease: "linear" }} className="flex whitespace-nowrap">
            {[...notionData.inspiring_names, ...notionData.inspiring_names].map((name, i) => (
              <span key={i} className="mx-16 text-5xl font-black italic opacity-10 uppercase">{name}</span>
            ))}
          </motion.div>
        </div>

        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-3xl font-light italic leading-relaxed opacity-80 border-l-2 border-[#00A3FF] pl-8 inline-block text-left">
            "{notionData.quote}"
          </p>
        </section>
      </main>
    </div>
  );
}
