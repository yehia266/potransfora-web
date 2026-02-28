"use client";
import React from 'react';

export default function SovereignMaster() {
  const bg = "#FFFFFF";
  const logo = "POTRANSFORA";
  const quote = "Where Technology Meets Sovereignty: Crafting the DNA of the Digital Empire.";

  return (
    <div style={{
      backgroundColor: bg,
      color: 'white',
      minHeight: '100vh',
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Playfair Display', serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* خلفية فخمة (Gradients) محقونة مباشرة */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% -20%, #1e293b 0%, transparent 80%)',
        zIndex: 0
      }} />

      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '30px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        zIndex: 50
      }}>
        <div style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '0.2em', fontStyle: 'italic' }}>{logo}</div>
        <div style={{ fontSize: '10px', letterSpacing: '0.3em', opacity: 0.6 }}>{("Online").toUpperCase()}</div>
      </header>

      <main style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        padding: '0 20px'
      }}>
        <h1 style={{
          fontSize: '12vw',
          fontWeight: '900',
          fontStyle: 'italic',
          margin: 0,
          lineHeight: 0.9,
          letterSpacing: '-0.02em'
        }}>{logo}</h1>
        <p style={{
          marginTop: '40px',
          fontSize: '14px',
          letterSpacing: '0.6em',
          opacity: 0.4,
          maxWidth: '600px',
          lineHeight: 2,
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '30px'
        }}>{quote}</p>
      </main>

      <footer style={{
        padding: '40px 60px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '9px',
        letterSpacing: '0.3em',
        opacity: 0.3,
        zIndex: 10
      }}>
        <div>© 2026 POTRANSFORA. All Rights Reserved</div>
        <div>v14.4.1 | SECURE GLOBAL GATEWAY</div>
      </footer>
    </div>
  );
}