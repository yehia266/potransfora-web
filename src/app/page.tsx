"use client";
import React from 'react';

export default function SovereignMaster() {
  // تعريف كافة المتغيرات في بداية الدالة لتجنب أخطاء ReferenceError
  const bgColor = "#FFFFFF";
  
  // النصوص المفصلة من Notion
  const logoText = "POTRANSFORA";
  const heroText = "POTRANSFORA";
  const quoteText = "Where Technology Meets Sovereignty: Crafting the DNA of the Digital Empire.";

  // الألوان المفصلة من Notion
  const logoColor = "white";
  const titleColor = "white";
  const quoteColor = "rgba(255,255,255,0.6)";
  const footerCopyColor = "rgba(255,255,255,0.4)";
  const footerVersionColor = "rgba(255,255,255,0.4)";

  return (
    <div style={{
      backgroundColor: bgColor,
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
        zIndex: 50
      }}>
        {/* اللوجو العلوي */}
        <div style={{ 
          fontSize: '24px', 
          fontWeight: '900', 
          letterSpacing: '0.2em', 
          fontStyle: 'italic',
          color: logoColor 
        }}>{logoText}</div>
      </header>

      <main style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
      }}>
        {/* العنوان الضخم المركزي */}
        <h1 style={{
          fontSize: '12vw',
          fontWeight: '900',
          fontStyle: 'italic',
          margin: 0,
          lineHeight: 0.9,
          color: titleColor
        }}>{heroText}</h1>
        
        {/* الوصف (Quote) */}
        <p style={{
          marginTop: '40px',
          fontSize: '14px',
          letterSpacing: '0.6em',
          maxWidth: '600px',
          textAlign: 'center',
          color: quoteColor,
          borderTop: `1px solid ${quoteColor}`,
          paddingTop: '30px',
          opacity: 0.8
        }}>{quoteText}</p>
      </main>

      <footer style={{
        padding: '40px 60px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '9px',
        letterSpacing: '0.3em',
        zIndex: 10
      }}>
        <div style={{ color: footerCopyColor }}>
          © 2026 POTRANSFORA. All Rights Reserved
        </div>
        <div style={{ color: footerVersionColor }}>
          v14.2.3 Stable | IDENTITY SEPARATION
        </div>
      </footer>
    </div>
  );
}