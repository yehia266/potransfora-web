
"use client";
import React from 'react';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <title>Potransfora</title>
      <h1 style={{ fontSize: '5rem', fontWeight: '900', fontStyle: 'italic', background: 'linear-gradient(to bottom, #fff, #666)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        POTRANSFORA
      </h1>
      <p style={{ color: '#888', fontStyle: 'italic', marginTop: '20px' }}>
        "Sovereignty is not just about power, but about attention to detail."
      </p>
    </div>
  );
}
