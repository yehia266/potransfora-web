"use client"; // ضروري لبقاء التفاعل (العين) يعمل
import React, { useState } from 'react';
import { PLASMIC } from "../plasmic-init";
import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";

export default function Page() {
  const [showModal, setShowModal] = useState(true);
  const [eyeTransform, setEyeTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined') {
      const x = (e.clientX - window.innerWidth / 2) / 40;
      const y = (e.clientY - window.innerHeight / 2) / 40;
      setEyeTransform({ x, y });
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }} onMouseMove={handleMouseMove}>
      
      {/* 1. المودال التفاعلي (العين) */}
      {showModal && (
        <div style={{ position: "fixed", inset: 0, zIndex: 1000, backgroundColor: "rgba(255, 255, 255, 0.4)", backdropFilter: "blur(20px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "90%", maxWidth: "480px", padding: "60px 40px", backgroundColor: "#FFFFFF", borderRadius: "50px", boxShadow: "0 30px 60px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <div style={{ position: "relative", width: "100px", height: "100px", margin: "0 auto 30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "80px", height: "80px", backgroundColor: "#fff", borderRadius: "50% 0", transform: "rotate(45deg)", border: "2px solid #0F172A", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "40px", height: "40px", backgroundColor: "#6366F1", borderRadius: "50%", transform: `translate(${eyeTransform.x}px, ${eyeTransform.y}px)` }}>
                  <div style={{ width: "18px", height: "18px", backgroundColor: "#0F172A", borderRadius: "50%", margin: "11px auto" }}></div>
                </div>
              </div>
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: 900, color: "#0F172A" }}>POTRANSFORA CORE</h2>
            <button 
              style={{ width: "100%", padding: "18px", backgroundColor: "#0F172A", color: "#fff", borderRadius: "15px", fontWeight: 900, cursor: "pointer", marginTop: "20px" }} 
              onClick={() => setShowModal(false)}
            >
              INITIATE ACCESS
            </button>
          </div>
        </div>
      )}

      {/* 2. ربط محتوى Plasmic خلف المودال */}
      <PlasmicRootProvider loader={PLASMIC}>
        <PlasmicComponent component="Homepage" />
      </PlasmicRootProvider>
      
    </div>
  );
}
