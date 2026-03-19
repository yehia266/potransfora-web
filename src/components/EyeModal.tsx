"use client";

import React, { useState, useEffect } from "react";

export interface EyeModalProps {
  className?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  maxWidth?: number;
}

export default function EyeModal({ 
  className, 
  title, 
  description,
  buttonText = "Continue to Workspace",
  maxWidth = 400
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
      <div style={{ ...styles.modalContent, maxWidth: `${maxWidth}px` }}>
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
            {buttonText}
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
    zIndex: 2000000, // رفع القيمة لأقصى درجة ممكنة
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    backdropFilter: "blur(10px)", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    padding: "16px" // يمنع المودال من لمس حواف الموبيل
  },
  modalContent: { 
    position: "relative", 
    width: "100%", 
    backgroundColor: "#FFFFFF", 
    borderRadius: "12px", 
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)", 
    border: "1px solid #e0e0e0", 
    overflow: "hidden" 
  },
  topBar: { padding: "12px 16px", borderBottom: "1px solid #f0f0f0", display: "flex" },
  dots: { display: "flex", gap: "6px" },
  dot: { width: "10px", height: "10px", borderRadius: "50%" },
  innerContent: { padding: "32px 24px", textAlign: "center" },
  eyeContainer: { width: "80px", height: "50px", margin: "0 auto 24px", display: "flex", justifyContent: "center" },
  eyeWhite: { width: "70px", height: "40px", backgroundColor: "#fff", borderRadius: "100%", border: "2.5px solid #37352f", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" },
  eyeIris: { width: "20px", height: "20px", backgroundColor: "#37352f", borderRadius: "50%", transition: "transform 0.1s ease-out" },
  eyePupil: { width: "6px", height: "6px", backgroundColor: "#fff", borderRadius: "50%", position: "absolute", top: "4px", left: "4px" },
  title: { fontSize: "20px", color: "#37352f", fontWeight: 700, margin: "0 0 12px" },
  description: { fontSize: "15px", color: "#666", marginBottom: "28px", lineHeight: "1.6" },
  notionButton: { width: "100%", padding: "14px", backgroundColor: "#37352f", color: "#fff", borderRadius: "8px", border: "none", fontSize: "15px", fontWeight: 600, cursor: "pointer" }
};
