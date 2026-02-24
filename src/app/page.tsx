import Image from "next/image";

// T9-CORE-02-Webhook & SEO Base
// تم الدمج السيادي: الأوراكل + بيانات Notion

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* Dynamic SEO Meta Tags Simulation */}
      <title>POTransfora | Algorithmic Justice & Digital Sovereignty Prot</title>
      <meta name="description" content="• Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity. Discover the Sovereign Treasury and the Immortal Digital Mentor within POTra" />

      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start relative overflow-hidden">
        
        {/* Oracle Branding Section */}
        <div className="flex items-center gap-4 mb-8">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={80}
            height={16}
            priority
          />
          <span className="text-[#00A3FF] font-bold tracking-widest text-sm">X TRANSFORA</span>
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left z-10">
          <h1 className="max-w-md text-4xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50">
            POTransfora | Algorithmic Justice & Digital Sovereignty Prot
          </h1>
          
          {/* The Oracle Visual Marker */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00A3FF] to-cyan-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative px-6 py-4 bg-white dark:bg-zinc-900 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <div className="space-y-2">
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                  • Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity. Discover the Sovereign Treasury and the Immortal Digital Mentor within POTra
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-10">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#00A3FF] px-8 text-white transition-colors hover:bg-[#0082CC] md:w-auto"
            href="#"
          >
            استكشف السيادة
          </a>
          <div className="flex items-center text-zinc-400 text-sm italic">
             حالة الموقع: Active
          </div>
        </div>

        {/* Decorative Blue Cape Element (Corner) */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A3FF] opacity-10 rounded-bl-full"></div>
      </main>
    </div>
  );
}