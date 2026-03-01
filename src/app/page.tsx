"use client";
import React, { useState, useEffect } from 'react';

export default function SovereignMaster() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (true) { setIsOpen(true); }
  }, []);

  return (
    <div style={{
      backgroundColor: "#FFFFFF ",
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
      overflowX: 'hidden'
    }}>
      {/* حقن الـ CSS مباشرة لضمان الأنيميشن */}
      <style>{`
        @keyframes flow {
          0% { transform: translate(-10%, -10%) scale(1); }
          50% { transform: translate(10%, 15%) scale(1.2); }
          100% { transform: translate(-10%, -10%) scale(1); }
        }
        .moving-blob {
          animation: flow 8s infinite ease-in-out;
        }
      `}</style>

      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '420px',
            backgroundColor: 'white',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
          }}>
            <div style={{
              height: '180px',
              background: '#f1f5f9',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* الكرة المتحركة */}
              <div className="moving-blob" style={{
                position: 'absolute',
                width: '220px',
                height: '220px',
                background: 'radial-gradient(circle, #6366f1, #a855f7)',
                borderRadius: '50%',
                filter: 'blur(45px)',
                opacity: 0.6
              }}></div>
              <div style={{ zIndex: 1, fontSize: '60px' }}>🛡️</div>
            </div>
            <div style={{ padding: '35px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
                Potransfora Sovereignty
              </h2>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, marginBottom: '28px' }}>
                Step into the future of digital dominance.
              </p>
              <button 
                onClick={() => setIsOpen(false)}
                style={{
                  width: '100%',
                  padding: '16px',
                  backgroundColor: '#0f172a',
                  color: 'white',
                  borderRadius: '16px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer'
                }}>ENTER GATEWAY</button>
            </div>
          </div>
        </div>
      )}

      {/* Header & Main Section */}
      <header style={{ padding: '20px 40px', position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20)' }}>
        <div style={{ fontSize: '18px', fontWeight: '900', color: "#05070a", letterSpacing: '0.1em' }}>POTRANSFORA</div>
      </header>

      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
        <h1 style={{ fontSize: 'clamp(40px, 12vw, 150px)', fontWeight: '900', fontStyle: 'italic', color: "#05070a", textAlign: 'center' }}>EMPIRE</h1>
      </main>
    </div>
  );
}