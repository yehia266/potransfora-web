"use client";
import React from 'react';

export default function SovereignMaster() {
  // 1. تعريف خلفية الموقع
  const bgColor = "#05070a";
  
  // 2. إعدادات الهيدر المستقلة (الجديدة)
  const logoText = "POTRANSFORA";
  const logoColor = "white";
  const logoFontChoice = "serif";
  const blurLevel = "10px"; // القيمة من Notion
  const logoFontFamily = logoFontChoice === 'sans-serif' ? "'Inter', sans-serif" : "'Playfair Display', serif";

  // 3. إعدادات الهيرو المستقلة
  const heroText = "POTRANSFORA";
  const titleColor = "white";
  const quoteText = "SOVEREIGNTY THROUGH KNOWLEDGE";
  const quoteColor = "rgba(255,255,255,0.6)";

  // 4. إعدادات الفوتر
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
      overflow: 'hidden',
      color: 'inherit'
    }}>
      {/* الهيدر المطور بخاصية Glassmorphism */}
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '30px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 50,
        // ذكاء الخلفية: إذا كانت بيضاء تكون الشفافية بيضاء، وإذا كانت سوداء تكون سوداء
        backgroundColor: bgColor === '#FFFFFF' || bgColor === 'white' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)',
        backdropFilter: `blur(${blurLevel})`,
        WebkitBackdropFilter: `blur(${blurLevel})`, // لدعم متصفحات Safari
        borderBottom: bgColor === '#FFFFFF' || bgColor === 'white' ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ 
          fontSize: '24px', 
          fontWeight: '900', 
          letterSpacing: '0.2em', 
          fontStyle: logoFontChoice === 'serif' ? 'italic' : 'normal',
          color: logoColor,
          fontFamily: logoFontFamily
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
        <h1 style={{
          fontSize: '12vw',
          fontWeight: '900',
          fontStyle: 'italic',
          margin: 0,
          lineHeight: 0.9,
          color: titleColor
        }}>{heroText}</h1>
        
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
          ${cleanData.footer_copyright || '© 2026 POTRANSFORA'}
        </div>
        <div style={{ color: footerVersionColor }}>
          ${cleanData.global_gateway_version || 'v14.4.8'} | BLUR CONTROL READY
        </div>
      </footer>
    </div>
  );
}