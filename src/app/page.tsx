
import React from 'react';

export default function Page() {
  return (
    <div style={{ backgroundColor: '#030712', color: '#ffffff', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '26px', fontWeight: '900', background: 'linear-gradient(to right, #60a5fa, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-1px' }}>POTRANSFORA</span>
          
          <div style={{ position: 'relative', cursor: 'pointer' }} className="group">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#9ca3af', fontWeight: '600' }}>
              Product <span style={{ fontSize: '10px' }}>▼</span>
            </div>
            
            {/* القائمة المنسدلة الذكية */}
            <div style={{
              position: 'absolute', top: '100%', left: '-20px', width: '300px',
              backgroundColor: '#0d1117', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px', padding: '20px', marginTop: '15px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)'
            }}>
              <div style={{ fontSize: '11px', fontWeight: '800', color: '#4b5563', marginBottom: '15px', letterSpacing: '2px', textAlign: 'left' }}>NEW TOOL SYSTEM</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style="color:#4b5563; font-size:12px">No active tasks found in Notion</div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main style={{ textAlign: 'center', paddingTop: '180px' }}>
        <h1 style={{ fontSize: '90px', fontWeight: '900', letterSpacing: '-4px', fontStyle: 'italic', margin: 0, opacity: 0.9 }}>POTRANSFORA</h1>
        <p style={{ color: '#60a5fa', letterSpacing: '12px', fontSize: '13px', fontWeight: '300', marginTop: '10px' }}>SOVEREIGN IDENTITY SUMMONED</p>
      </main>
    </div>
  );
}
