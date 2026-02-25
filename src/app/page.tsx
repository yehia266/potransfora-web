import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black text-black dark:text-white">
      <title>POTransfora</title>
      <meta name="description" content="• Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity. Discover the Sovereign Treasury and the Immortal Digital Mentor within POTransfora." />

      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start relative overflow-hidden">
        
        <div className="flex items-center gap-3 mb-12 border-l-4 border-[#00A3FF] pl-5">
          <span className="font-black tracking-tighter text-2xl uppercase">TRANSFORA</span>
          <span className="text-[#00A3FF] font-medium tracking-[0.2em] text-[10px] uppercase font-bold">
            X POTRANSFORA X SOVEREIGN MINIMALISM.
          </span>
        </div>

        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left z-10">
          <h1 className="max-w-md text-5xl font-extrabold leading-[1.1] tracking-tight text-black dark:text-white">
            POTransfora | Algorithmic Justice & Digital Sovereignty Protocol
          </h1>
          
          <div className="relative group max-w-lg">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00A3FF] to-blue-600 rounded-lg blur opacity-15"></div>
            <div className="relative px-7 py-5 bg-white dark:bg-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-xl">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg font-medium">
                • Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity. Discover the Sovereign Treasury and the Immortal Digital Mentor within POTransfora.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row mt-12 w-full sm:w-auto">
          <a className="flex h-14 items-center justify-center rounded-full bg-[#00A3FF] px-10 text-sm font-bold text-white transition-all hover:bg-[#0082CC]" href="#">
            استكشف السيادة
          </a>
          <div className="flex items-center justify-center text-zinc-400 text-[10px] tracking-[0.3em] uppercase italic font-bold">
             STATUS: ONLINE
          </div>
        </div>

        <div className="absolute top-0 right-0 w-40 h-40 bg-[#00A3FF] opacity-[0.04] rounded-bl-[100px]"></div>
      </main>
    </div>
  );
}