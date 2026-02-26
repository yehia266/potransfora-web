"use client";
import React from 'react';

export default function Home() {
  const names = "Steve Jobs Elon Musk Marcus Aurelius King Faisal".split(',');
  
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif', overflow: 'hidden', position: 'relative' }}>
      <title>Potransfora</title>
      
      {/* Build Signature: 2026-02-26T23:56:10.741Z */}

      <header style={{ position: 'fixed', top: '40px', padding: '12px 24px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', fontSize: '10px', fontWeight: 'bold', letterSpacing: '4px', textTransform: 'uppercase', zIndex: 50 }}>
        Sovereign Minimalism
      </header>

      <main style={{ textAlign: 'center', padding: '0 20px', zIndex: 10 }}>
        <h1 style={{ fontSize: 'clamp(3rem, 12vw, 10rem)', fontWeight: '900', margin: '0', letterSpacing: '-0.05em', textTransform: 'uppercase', fontStyle: 'italic', lineHeight: '0.9', background: 'linear-gradient(to bottom, #fff, #444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Potransfora
        </h1>
        <p style={{ color: '#888', fontSize: '1.2rem', fontStyle: 'italic', maxWidth: '600px', margin: '30px auto', lineHeight: '1.6' }}>
          "Sovereignty is not just about power, but about attention to detail and clarity of vision.”"
        </p>
        <div style={{ padding: '20px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.02)', maxWidth: '500px', margin: '0 auto', fontSize: '0.9rem', color: '#666', fontWeight: '300' }}>
          • Leading the future with the Organizational DNA Protocol and Cyber-Human Immunity. Discover the Sovereign Treasury and the Immortal Digital Mentor within POTransfora.
        </div>
      </main>

      <footer style={{ position: 'fixed', bottom: '0', width: '100%', padding: '40px 0', overflow: 'hidden', opacity: 0.1, pointerEvents: 'none' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap', fontSize: '6rem', fontWeight: '900', textTransform: 'uppercase', fontStyle: 'italic' }}>
           {/* التكرار لخلق تأثير الشريط المستمر */}
           {[...names, ...names, ...names].map((name, i) => (
             <span key={i} style={{ margin: '0 40px' }}>{name.trim()}</span>
           ))}
        </div>
      </footer>

      {/* Background Aura */}
      <div style={{ position: 'absolute', top: '-10%', left: '20%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(0,163,255,0.15) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 1 }}></div>
    </div>
  );
}
