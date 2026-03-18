"use client";

import React, { useState, useEffect } from "react";

export interface EyeModalProps {
  className?: string;
  title?: string;
  description?: string;
}

// التعديل: تأكد من كتابة المكون كـ default export في النهاية أو استخدامه بوضوح
export default function EyeModal({ 
  className, 
  title = "System Verification", 
  description = "Unlock the workspace..." 
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
       {/* ... نفس كود التصميم السابق بدون تغيير ... */}
       <div style={styles.modalContent}>
          <h2 style={styles.title}>{title}</h2>
          <button onClick={() => setShowModal(false)} style={styles.notionButton}>Continue</button>
       </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  modalOverlay: { position: "fixed", inset: 0, zIndex: 9999, backgroundColor: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)" },
  modalContent: { backgroundColor: "white", padding: "20px", borderRadius: "10px", textAlign: "center" },
  title: { color: "#333" },
  notionButton: { marginTop: "10px", cursor: "pointer", width: "100%", padding: "10px", backgroundColor: "#37352f", color: "#fff", border: "none", borderRadius: "5px" }
};
