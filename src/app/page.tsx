import React from 'react';

export default function Page() {
  // البيانات مستخرجة مباشرة من SITE_FOUNDATION
  const config = {
    header_logo: "POTRANSFORA",
    hero_title: "POTRANSFORA",
    inspiration: "Sovereignty is not just about power, but about attention to detail and clarity of vision.",
    system_status: "Online",
    version: "v14.2.6",
    copyright: "© 2026 POTRANSFORA. All Rights Reserved"
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-serif selection:bg-white/20">
      {/* Header Layout per CSV */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-[20px] bg-[#0F172A]/80">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-[900] tracking-tighter uppercase">
            {config.header_logo}
          </div>
          
          <div className="hidden md:block text-[10px] text-gray-400 max-w-xs italic text-center">
            "{config.inspiration}"
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {config.system_status}
            </span>
            <button className="px-5 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest">
              REQUEST ACCESS
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section per CSV Settings */}
      <main className="flex flex-col items-center justify-center min-h-screen pt-20 px-6">
        <h1 className="text-[12vw] font-[900] leading-none tracking-[4px] uppercase text-center">
          {config.hero_title}
        </h1>
        <p className="mt-8 text-gray-500 text-[10px] tracking-[1em] uppercase">
          Sovereign Status: Active
        </p>
      </main>

      {/* Footer per CSV Settings */}
      <footer className="fixed bottom-0 w-full p-8 flex justify-between items-end border-t border-white/5 bg-[#0F172A]">
        <div className="text-[10px] text-gray-600 tracking-widest uppercase">
          {config.copyright}
        </div>
        <div className="text-[10px] font-mono text-blue-500/50">
          GATEWAY_VERSION: {config.version}
        </div>
      </footer>
    </div>
  );
}
