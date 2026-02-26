import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-[#050505] text-black dark:text-white selection:bg-[#00A3FF] selection:text-white">
      {/* Dynamic SEO Tags from Notion */}
      <title>POTransfora | Algorithmic Justice & Digital Sovereignty Protocol</title>
      <meta name="description" content="• Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity. Discover the Sovereign Treasury and the Immortal Digital Mentor within POTransfora." />

      {/* --- SOVEREIGN HEADER --- */}
      <header className="fixed top-0 z-50 w-full border-b border-zinc-200/50 bg-white/80 backdrop-blur-md dark:border-zinc-800/50 dark:bg-black/80 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-1 bg-[#00A3FF]"></div>
            <span className="text-lg font-black tracking-tighter uppercase">POTRANSFORA</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00A3FF]"></span>
              SYSTEM: Done
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-32">
        {/* --- HERO SECTION --- */}
        <section className="relative px-6 pb-20 pt-16 overflow-hidden">
          <div className="absolute top-0 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#00A3FF] opacity-[0.03] blur-[120px]"></div>
          
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-[10px] font-bold tracking-[0.5em] uppercase text-[#00A3FF]">
               POTRANSFORA X SOVEREIGN MINIMALISM.
            </h2>
            <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-7xl">
              POTransfora | Algorithmic Justice & Digital Sovereignty Protocol
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              • Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity. Discover the Sovereign Treasury and the Immortal Digital Mentor within POTransfora.
            </p>
          </div>
        </section>

        {/* --- CAPABILITIES GRID (EN PLACEHOLDERS) --- */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-8 transition-all hover:border-[#00A3FF]/50">
                <div className="mb-4 text-[#00A3FF] font-black text-xl">0{i}</div>
                <h3 className="mb-3 text-xl font-bold italic uppercase tracking-tight">System Module</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Data for this sovereign module will be injected automatically from the Content Database in Notion.
                </p>
                <div className="absolute -bottom-2 -right-2 h-16 w-16 rotate-12 bg-[#00A3FF] opacity-[0.02] transition-transform group-hover:scale-150"></div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 px-6 py-12">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-medium tracking-widest text-zinc-500 uppercase">
            © 2026 POTRANSFORA . ALL RIGHTS RESERVED.
          </p>
          <div className="h-[1px] w-12 bg-zinc-300 dark:bg-zinc-700 md:block hidden"></div>
          <p className="text-[10px] font-black italic text-[#00A3FF]">
           CoreTeam-POTransfora  CORE VERSION 6.0
          </p>
        </div>
      </footer>
    </div>
  );
}