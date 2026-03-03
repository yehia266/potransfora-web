
export default function Page() {
  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans">
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">POTRANSFORA</span>
          <div className="relative group">
            <button className="text-gray-400 hover:text-white flex items-center space-x-1">
              <span>Product</span>
            </button>
            <div className="absolute top-full left-0 w-[300px] bg-[#0d1117] border border-white/10 rounded-xl hidden group-hover:block p-4 mt-2 shadow-2xl">
                <div className="text-xs font-semibold text-gray-500 uppercase mb-3">New Tool</div>
                
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center py-40">
        <h1 className="text-8xl font-black tracking-tighter italic mb-4">POTRANSFORA</h1>
        <p className="text-blue-400 tracking-[0.5em] uppercase text-sm">Sovereign Identity Summoned</p>
      </main>
    </div>
  );
}
