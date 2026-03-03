
import React from 'react';

export default function Page() {
  return (
    <div style={{ backgroundColor: '#030712', color: '#ffffff', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '26px', fontWeight: '900', background: 'linear-gradient(to right, #60a5fa, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-1px' }}>POTRANSFORA</span>
          <div style={{ position: 'relative' }}>
            <div style={{ color: '#9ca3af', fontWeight: '600', cursor: 'pointer' }}>Product ▼</div>
            <div style={{
              position: 'absolute', top: '100%', left: '-50px', width: '300px',
              backgroundColor: '#0d1117', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px', padding: '20px', marginTop: '15px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)'
            }}>
              <div style={{ fontSize: '11px', fontWeight: '800', color: '#4b5563', marginBottom: '15px', letterSpacing: '2px' }}>NEW TOOL SYSTEM</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{color:"#4b5563", fontSize:"12px"}}>⚠️ No Child:New Tool detected in stream</div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main style={{ textAlign: 'center', paddingTop: '180px' }}>
        <h1 style={{ fontSize: '90px', fontWeight: '900', letterSpacing: '-4px', fontStyle: 'italic', margin: 0 }}>POTRANSFORA</h1>
        <p style={{ color: '#60a5fa', letterSpacing: '12px', fontSize: '13px', marginTop: '10px' }}>SOVEREIGN IDENTITY SUMMONED</p>
      </main>
    </div>
  );
}
