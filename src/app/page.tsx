
import React from 'react';

export default function Page() {
  return (
    <div style={{ backgroundColor: '#030712', color: '#ffffff', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '24px', fontWeight: '900', background: 'linear-gradient(to right, #60a5fa, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>POTRANSFORA</span>
          <div style={{ position: 'relative' }}>
            <div style={{ color: '#9ca3af', fontWeight: '600', cursor: 'pointer' }}>Product ▼</div>
            <div style={{
              position: 'absolute', top: '100%', right: '0', width: '280px',
              backgroundColor: '#0d1117', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px', padding: '20px', marginTop: '15px'
            }}>
              <div style={{ fontSize: '11px', color: '#4b5563', marginBottom: '15px', letterSpacing: '1px' }}>SYSTEM TOOLS</div>
              <div style={{color:"#4b5563"}}>No tools filtered...</div>
            </div>
          </div>
        </nav>
      </header>
      <main style={{ textAlign: 'center', paddingTop: '150px' }}>
        <h1 style={{ fontSize: '80px', fontWeight: '900', marginBottom: '10px' }}>POTRANSFORA</h1>
        <p style={{ color: '#60a5fa', letterSpacing: '8px', fontSize: '14px' }}>SOVEREIGN IDENTITY SUMMONED</p>
      </main>
    </div>
  );
}
