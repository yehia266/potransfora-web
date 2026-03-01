"use client";
import React, { useState, useEffect } from 'react';

export default function SovereignMaster() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (true) {
      setIsOpen(true);
    }
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
      <style>{`
        @keyframes flow {
          0% { transform: translate(-10%, -10%) scale(1); }
          50% { transform: translate(10%, 15%) scale(1.1); }
          100% { transform: translate(-10%, -10%) scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-flow { animation: flow 10s infinite ease-in-out; }
      `}</style>

      {/* Sovereign Modal */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          backdropFilter: 'blur(10px)',
          padding: '20px'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '440px',
            backgroundColor: 'white',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            animation: 'fadeIn 0.5s ease-out'
          }}>
            <div style={{
              height: '200px',
              background: '#f1f5f9',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div className="animate-flow" style={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, #6366f1, #a855f7)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                opacity: 0.6
              }}></div>
              <div style={{ zIndex: 1, fontSize: '60px' }}>🛡️</div>
            </div>
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>${"Potransfora Sovereignty"}</h2>
              <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, marginBottom: '32px' }}>${"Step into the future of digital dominance."}</p>
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

      {/* Page Content */}
      <header style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 100,
        backgroundColor: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(20)'
      }}>
        <div style={{ fontSize: '18px', fontWeight: '900', color: "#05070a", letterSpacing: '0.1em' }}>POTRANSFORA</div>
      </header>

      <main style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: 'clamp(40px, 15vw, 180px)', // خط مرن يمنع التداخل
          fontWeight: '900',
          fontStyle: 'italic',
          lineHeight: 0.9,
          color: "#05070a",
          margin: '0 0 20px 0'
        }}>EMPIRE</h1>
      </main>

      <footer style={{ padding: '20px 40px', fontSize: '10px', opacity: 0.5 }}>
        v14.2.3 Stable | FLUID DOMINANCE
      </footer>
    </div>
  );
}