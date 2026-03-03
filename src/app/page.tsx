
import React from 'react';

export default function Page() {
  return (
    <div style={{
      backgroundColor: '#030712', color: '#ffffff', minHeight: '100vh',
      fontFamily: 'sans-serif', margin: 0, padding: 0
    }}>
      {/* Header السيادي */}
      <header style={{
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)',
        position: 'sticky', top: 0, zIndex: 50
      }}>
        <nav style={{
          maxWidth: '1200px', margin: '0 auto', padding: '0 20px',
          height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>
          <span style={{
            fontSize: '24px', fontWeight: 'bold',
            background: 'linear-gradient(to right, #60a5fa, #10b981)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>POTRANSFORA</span>

          <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }} className="group">
            <button style={{
              background: 'none', border: 'none', color: '#9ca3af',
              cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '4px'
            }}>
              Product <span style={{ fontSize: '12px' }}>▼</span>
            </button>
            
            {/* Mega Menu - يظهر عند الحوم (بواسطة CSS مدمج) */}
            <div style={{
              position: 'absolute', top: '100%', left: 0, width: '280px',
              backgroundColor: '#0d1117', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px', padding: '16px', marginTop: '8px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)'
            }}>
              <div style={{ fontSize: '11px', fontWeight: '600', color: '#6b7280', marginBottom: '12px', letterSpacing: '1px' }}>NEW TOOL</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* المحتوى المركزي */}
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '160px' }}>
        <h1 style={{ fontSize: '72px', fontWeight: '900', margin: 0, fontStyle: 'italic', letterSpacing: '-2px' }}>POTRANSFORA</h1>
        <p style={{ color: '#60a5fa', letterSpacing: '8px', fontSize: '14px', marginTop: '10px' }}>SOVEREIGN IDENTITY SUMMONED</p>
      </main>
    </div>
  );
}
