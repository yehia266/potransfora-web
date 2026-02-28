"use client";
import React from 'react';

export default function SovereignMaster() {
  return (
    <div style={{
      backgroundColor: "#FFFFFF ",
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Playfair Display', serif",
      position: 'relative',
      overflowX: 'hidden',
      color: "#05070a"
    }}>
      {/* 1. الهيدر: تم تحويله إلى Relative/Sticky بدلاً من Fixed لمنع التداخل */}
      <header style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        padding: '30px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        backgroundColor: "#FFFFFF " === '#FFFFFF' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(20)',
        WebkitBackdropFilter: 'blur(20)',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}>
        <div style={{ 
          fontSize: 'clamp(18px, 2vw, 24px)', // خط مرن يصغر مع الشاشة
          fontWeight: '900', 
          letterSpacing: '0.2em', 
          fontStyle: 'italic',
          color: "#05070a" 
        }}>POTRANSFORA</div>
      </header>

      {/* 2. منطقة الهيرو: إضافة Padding علوي لضمان عدم ملامسة الهيدر مهما كان حجم الخط */}
      <main style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px', // مساحة أمان علوية وسفلية
        zIndex: 10
      }}>
        <h1 style={{
          fontSize: 'clamp(50px, 12vw, 200px)', // التحكم في أقصى وأقل حجم للخط لمنع الانفجار البصري
          fontWeight: '900',
          fontStyle: 'italic',
          margin: '0 0 20px 0',
          lineHeight: 1.1,
          textAlign: 'center',
          color: "#05070a",
          wordBreak: 'break-word'
        }}>EMPIRE</h1>
        
        <p style={{
          marginTop: '20px',
          fontSize: 'clamp(10px, 1.5vw, 14px)',
          letterSpacing: '0.6em',
          maxWidth: '800px',
          textAlign: 'center',
          color: "rgba(0,0,0,0.5)",
          borderTop: '1px solid rgba(0,0,0,0.5)',
          paddingTop: '30px',
          opacity: 0.8,
          lineHeight: 1.6
        }}>STABLISHING DIGITAL DOMINANCE</p>
      </main>

      <footer style={{
        padding: '40px 60px',
        borderTop: '1px solid rgba(0,0,0,0.05)',
        display: 'flex',
        flexWrap: 'wrap', // يمنع تداخل نصوص الفوتر في الشاشات الصغيرة
        gap: '20px',
        justifyContent: 'space-between',
        fontSize: '9px',
        letterSpacing: '0.3em',
        zIndex: 10,
        color: 'rgba(0,0,0,0.4)'
      }}>
        <div>© 2026 POTRANSFORA. All Rights Reserved</div>
        <div>v14.2.3 Stable | NO-OVERLAP ARCHITECTURE</div>
      </footer>
    </div>
  );
}