"use client";
import React, { useState, useEffect } from 'react';

export default function SovereignMaster() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (true) {
      const timer = setTimeout(() => setIsOpen(true), 800);
      return () => clearTimeout(timer);
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
      {/* Sovereign Modal Implementation */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          backdropFilter: 'blur(8px)'
        }}>
          <div style={{
            width: '90%',
            maxWidth: '450px',
            backgroundColor: 'white',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
            animation: 'modalEntrance 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            {/* Animated Header Section */}
            <div style={{
              height: '200px',
              background: '#f8fafc',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                position: 'absolute',
                width: '250px',
                height: '250px',
                background: `radial-gradient(circle, ${"#6366f1"} 0%, ${"#a855f7"} 100%)`,
                borderRadius: '50%',
                filter: 'blur(50px)',
                opacity: 0.5,
                animation: 'pulseBlob 8s infinite alternate'
              }}></div>
              <span style={{ fontSize: '50px', zIndex: 1, filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.1))' }}>🛡️</span>
            </div>

            <div style={{ padding: '40px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#0f172a', marginBottom: '15px' }}>
                Potransfora Sovereignty
              </h2>
              <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6', marginBottom: '30px' }}>
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
                  cursor: 'pointer',
                  transition: 'transform 0.2s'
                }}>
                ENTER GATEWAY
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <header style={{ padding: '30px 60px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontSize: '24px', fontWeight: '900', color: "#05070a", letterSpacing: '0.2em' }}>POTRANSFORA</div>
      </header>

      <main style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 20px' }}>
        <h1 style={{ fontSize: '12vw', fontWeight: '900', fontStyle: 'italic', color: "#05070a", textAlign: 'center' }}>EMPIRE</h1>
      </main>

      <style>{`
        @keyframes modalEntrance {
          from { opacity: 0; transform: scale(0.9) translateY(30px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes pulseBlob {
          0% { transform: scale(1) translate(-20px, -20px); }
          100% { transform: scale(1.2) translate(20px, 20px); }
        }
      `}</style>
    </div>
  );
}