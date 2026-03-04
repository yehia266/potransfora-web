import React from 'react';

export default function Page() {
  // ملاحظة: في المستقبل سنربط هذه البيانات بـ API ولكن الآن نضعها كـ Hardcoded للسرعة
  const brandName = "POTRANSFORA";
  const heroTitle = "POTRANSFORA";
  
  const tools = [
    { name: "Projects", icon: "💠" },
    { name: "Wiki", icon: "📖" },
    { name: "Docs", icon: "📄" }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            {brandName}
          </div>
          
          <div className="relative group cursor-pointer">
            <div className="text-gray-400 font-semibold flex items-center hover:text-white transition-colors">
              Product <span className="ml-2 text-xs">▼</span>
            </div>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full right-0 w-72 mt-4 p-6 bg-[#0d1117] border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="text-[10px] text-gray-600 mb-4 tracking-[0.2em] font-black">SYSTEM ECOSYSTEM</div>
              {tools.map((tool, index) => (
                <a key={index} href="#" className="flex items-center p-3 mb-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all text-gray-200 no-underline">
                  <span className="mr-3 text-lg">{tool.icon}</span>
                  <span className="font-medium">{tool.name}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-40 pb-20 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-8 animate-pulse">
          CORE IDENTITY ACTIVATED
        </div>
        <h1 className="text-7xl md:text-9xl font-black tracking-tightest leading-[0.85] mb-6">
          {heroTitle}
        </h1>
        <p className="text-gray-500 text-lg md:text-xl tracking-[0.5em] uppercase max-w-2xl mx-auto">
          Sovereign Digital Infrastructure 2026
        </p>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-10 w-full text-center text-gray-600 text-xs tracking-widest uppercase">
        © 2026 {brandName} • Sovereign Protocol
      </footer>
    </div>
  );
}
