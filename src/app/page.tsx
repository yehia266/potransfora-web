import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center font-sans">
      {/* شعار الهوية المركزي فقط */}
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent mb-4">
          POTRANSFORA
        </h1>
        <div className="h-[1px] w-24 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-gray-500 text-xs tracking-[0.8em] uppercase">
          System Initialized • 2026
        </p>
      </div>

      {/* منطقة البناء الفارغة */}
      <div className="mt-20 text-[10px] text-gray-700 font-mono">
        READY FOR SOVEREIGN INSTRUCTION...
      </div>
    </div>
  );
}
