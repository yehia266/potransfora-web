"use client";

import React, { useState, useEffect } from "react";

export interface EyeModalProps {
  className?: string;
  title?: string;
  description?: string;
}

export default function EyeModal({ 
  className, 
  title = "System Verification", 
  description = "Unlock the workspace of the future with our top-rated curated resources." 
}: EyeModalProps) {
  const [showModal, setShowModal] = useState(true);
  const [eyeTransform, setEyeTransform] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 45;
      const y = (e.clientY - window.innerHeight / 2) / 45;
      setEyeTransform({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!showModal) return null;

  return (
    <div className={className} style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <div style={styles.topBar}>
          <div style={styles.dots}>
            <span style={{...styles.dot, backgroundColor: "#FF605C"}}></span>
            <span style={{...styles.dot, backgroundColor: "#FFBD44"}}></span>
            <span style={{...styles.dot, backgroundColor: "#00CA4E"}}></span>
          </div>
        </div>

        <div style={styles.innerContent}>
          <div style={styles.eyeContainer}>
            <div style={styles.eyeWhite}>
              <div
                style={{
                  ...styles.eyeIris,
                  transform: `translate(${eyeTransform.x}px, ${eyeTransform.y}px)`,
                }}
              >
                <div style={styles.eyePupil}></div>
              </div>
            </div>
          </div>

          <h2 style={styles.title}>{title}</h2>
          <p style={styles.description}>{description}</p>

          <button style={styles.notionButton} onClick={() => setShowModal(false)}>
            Continue to Workspace
          </button>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  modalOverlay: { 
    position: "fixed", 
    inset: 0, 
    zIndex: 1000000, 
    backgroundColor: "rgba(15, 15, 15, 0.4)", 
    backdropFilter: "blur(8px)", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center" 
  },
  modalContent: { 
    position: "relative", 
    width: "90%", 
    maxWidth: "400px", 
    backgroundColor: "#FFFFFF", 
    borderRadius: "10px", 
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)", 
    border: "1px solid #e0e0e0", 
    overflow: "hidden" 
  },
  topBar: { padding: "12px 16px", borderBottom: "1px solid #f0f0f0", display: "flex" },
  dots: { display: "flex", gap: "6px" },
  dot: { width: "10px", height: "10px", borderRadius: "50%" },
  innerContent: { padding: "24px", textAlign: "center" },
  eyeContainer: { width: "80px", height: "50px", margin: "0 auto 20px", display: "flex", justifyContent: "center" },
  eyeWhite: { width: "70px", height: "40px", backgroundColor: "#fff", borderRadius: "100%", border: "2.5px solid #37352f", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" },
  eyeIris: { width: "20px", height: "20px", backgroundColor: "#37352f", borderRadius: "50%", transition: "transform 0.1s ease-out" },
  eyePupil: { width: "6px", height: "6px", backgroundColor: "#fff", borderRadius: "50%", position: "absolute", top: "4px", left: "4px" },
  title: { fontSize: "18px", color: "#37352f", fontWeight: 700, margin: "0 0 8px" },
  description: { fontSize: "14px", color: "#666", marginBottom: "24px", lineHeight: "1.4" },
  notionButton: { width: "100%", padding: "10px", backgroundColor: "#37352f", color: "#fff", borderRadius: "6px", border: "none", fontSize: "14px", fontWeight: 600, cursor: "pointer" }
};
