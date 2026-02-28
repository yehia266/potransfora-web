"use client";
import React from 'react';

export default function SovereignMaster() {
  // جميع القيم تم حقنها مباشرة كـ Constants لضمان استقرار GitHub/Vercel
  const CONFIG = {
    bg: "#FFFFFF ",
    logo: "POTRANSFORA",
    hero: "POTRANSFORA",
    logoCol: "#05070a",
    heroCol: "white",
    quote: "Where Technology Meets Sovereignty: Crafting the DNA of the Digital Empire.",
    quoteCol: "rgba(255,255,255,0.6)",
    blur: "20",
    copy: "© 2026 POTRANSFORA. All Rights Reserved",
    ver: "v14.2.3 Stable"
  };

  return (
    <div style={{
      backgroundColor: CONFIG.bg,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Playfair Display', serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '30px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 50,
        backgroundColor: CONFIG.bg === '#FFFFFF' || CONFIG.bg === 'white' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)',
        backdropFilter: `blur(${CONFIG.blur})`,
        WebkitBackdropFilter: `blur(${CONFIG.blur})`,
        borderBottom: CONFIG.bg === '#FFFFFF' || CONFIG.bg === 'white' ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ 
          fontSize: '24px', 
          fontWeight: '900', 
          letterSpacing: '0.2em', 
          fontStyle: 'italic',
          color: CONFIG.logoCol 
        }}>{CONFIG.logo}</div>
      </header>

      <main style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
      }}>
        <h1 style={{
          fontSize: '12vw',
          fontWeight: '900',
          fontStyle: 'italic',
          margin: 0,
          lineHeight: 0.9,
          color: CONFIG.heroCol
        }}>{CONFIG.hero}</h1>
        
        <p style={{
          marginTop: '40px',
          fontSize: '14px',
          letterSpacing: '0.6em',
          maxWidth: '600px',
          textAlign: 'center',
          color: CONFIG.quoteCol,
          borderTop: `1px solid ${CONFIG.quoteCol}`,
          paddingTop: '30px',
          opacity: 0.8
        }}>{CONFIG.quote}</p>
      </main>

      <footer style={{
        padding: '40px 60px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '9px',
        letterSpacing: '0.3em',
        zIndex: 10,
        color: 'white' // Default fallback
      }}>
        <div>{CONFIG.copy}</div>
        <div>{CONFIG.ver} | STABLE SOVEREIGNTY</div>
      </footer>
    </div>
  );
}