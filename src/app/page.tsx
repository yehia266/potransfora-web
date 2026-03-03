"use client";
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function SovereignMaster() {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const eyeRef = useRef(null);

  useEffect(() => {
    if (false) { setIsOpen(true); }
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getEyeStyle = () => {
    if (!eyeRef.current) return {};
    const rect = eyeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const moveX = (mousePos.x - centerX) / 15;
    const moveY = (mousePos.y - centerY) / 10;
    return { transform: `translate(${moveX}px, ${moveY}px)` };
  };

  return (
    <div style={{
      backgroundColor: "#F8FAFC",
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
      overflowX: 'hidden'
    }}>
      {/* STEALTH MODE: Preventing Search Engine Indexing */}
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <style>{`
        @keyframes wave {
          0%, 100% { height: 12px; opacity: 0.4; }
          50% { height: 45px; opacity: 1; }
        }
        @keyframes blink {
          0%, 92%, 100% { transform: scaleY(1); }
          96% { transform: scaleY(0.1); }
        }
        .wave-bar {
          width: 5px; margin: 0 3px; border-radius: 3px;
          background: linear-gradient(to bottom, #6366f1, #a855f7);
          animation: wave 1.5s infinite ease-in-out;
        }
        .wave-bar:nth-child(2) { animation-delay: 0.2s; }
        .wave-bar:nth-child(3) { animation-delay: 0.4s; }
        .wave-bar:nth-child(4) { animation-delay: 0.2s; }
        .eye-blink { animation: blink 4s infinite; }
      `}</style>

      {isOpen && (
        <div style={{
          position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, backdropFilter: 'blur(12px)'
        }}>
          <div style={{
            width: '100%', maxWidth: '450px', backgroundColor: 'white',
            borderRadius: '40px', padding: '50px 40px', textAlign: 'center',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
          }}>
            <div ref={eyeRef} style={{
              width: '110px', height: '110px', backgroundColor: '#f8fafc',
              borderRadius: '50%', margin: '0 auto 30px', display: 'flex',
              alignItems: 'center', justifyContent: 'center', border: '2px solid #e2e8f0',
              overflow: 'hidden', position: 'relative'
            }}>
              <div className="eye-blink" style={{
                width: '60px', height: '60px', borderRadius: '50%',
                background: `radial-gradient(circle, #a855f7, #6366f1)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                ...getEyeStyle(), transition: 'transform 0.1s ease-out'
              }}>
                <div style={{ width: '20px', height: '20px', backgroundColor: '#0f172a', borderRadius: '50%' }} />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px', marginBottom: '30px' }}>
              <div className="wave-bar" /><div className="wave-bar" /><div className="wave-bar" /><div className="wave-bar" /><div className="wave-bar" />
            </div>

            <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#0f172a', letterSpacing: '2px', marginBottom: '15px' }}>
              POTRANSFORA CORE
            </h2>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.7', marginBottom: '35px' }}>
              Summoning Sovereign Digital Identity. Systems standing by at maximum alert.
            </p>

            <button 
              onClick={() => setIsOpen(false)}
              style={{
                width: '100%', padding: '20px', backgroundColor: '#0f172a',
                color: 'white', borderRadius: '20px', fontWeight: '800',
                border: 'none', cursor: 'pointer', fontSize: '14px', letterSpacing: '1.5px'
              }}>
              INITIATE ACCESS COMMAND
            </button>
          </div>
        </div>
      )}

      <header style={{ padding: '20px 40px', position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur()' }}>
        <div style={{ fontSize: '18px', fontWeight: '900', color: "#000000", letterSpacing: '0.1em' }}>POTRANSFORA</div>
      </header>

      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
        <h1 style={{ fontSize: 'clamp(40px, 12vw, 150px)', fontWeight: '900', fontStyle: 'italic', color: "#000000", textAlign: 'center' }}>POTRANSFORA</h1>
      </main>
    </div>
  );
}