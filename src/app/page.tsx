"use client";
import React from 'react';

export default function SovereignMaster() {
  return (
    <div style={{
      backgroundColor: '#05070A',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '12vw', margin: '0', fontWeight: '900', fontStyle: 'italic' }}>
        POTRANSFORA
      </h1>
      <p style={{ letterSpacing: '0.5em', opacity: '0.6', marginTop: '20px', fontSize: '14px' }}>
        Where Technology Meets Sovereignty: Crafting the DNA of the Digital Empire.
      </p>
      <div style={{ position: 'absolute', bottom: '40px', width: '100%', opacity: '0.2', borderTop: '1px solid white' }}>
        <p style={{ fontSize: '10px', tracking: '2px', padding: '10px' }}>
          v14.2.3 Stable | SECURE GATEWAY
        </p>
      </div>
    </div>
  );
}