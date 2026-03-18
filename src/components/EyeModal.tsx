"use client"; // ضروري جداً لأننا نستخدم useState و useEffect في Next.js
import React, { useState, useEffect } from "react";

// تعريف الـ Props ليتعرف عليها Plasmic
export interface EyeModalProps {
  className?: string;
  title?: string;
  description?: string;
}

export function EyeModal({ 
  className, 
  title = "System Verification", 
  description = "Unlock the workspace of the future with our top-rated curated resources." 
}: EyeModalProps) {
  const [showModal, setShowModal] = useState(true);
  const [eyeTransform, setEyeTransform] = useState({ x: 0, y: 0 });

  // معالجة حركة العين
  const handleMouseMove = (e: MouseEvent) => {
    const x = (e.clientX - window.innerWidth / 2) / 45;
    const y = (e.clientY - window.innerHeight / 2) / 45;
    setEyeTransform({ x, y });
  };

  // إضافة مستمع الحركة عند تحميل المكون فقط
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleAffiliateClick = (offerId: string) => {
    const affiliateLinks: Record<string, string> = {
      tool1: "https://yourdomain.com/go/notion-template",
      tool2: "https://yourdomain.com/go/productivity-app"
    };
    window.open(affiliateLinks[offerId], "_blank");
  };

  if (!showModal) return null;

  return (
    <div className={className} style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        
        {/* شريط الأدوات العلوي */}
        <div style={styles.topBar}>
          <div style={styles.dots}>
            <span style={{...styles.dot, backgroundColor: "#FF605C"}}></span>
            <span style={{...styles.dot, backgroundColor: "#FFBD44"}}></span>
            <span style={{...styles.dot, backgroundColor: "#00CA4E"}}></span>
          </div>
        </div>

        <div style={styles.innerContent}>
          {/* تصميم العين */}
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

          {/* كروت الأفلييت */}
          <div style={styles.affiliateSection}>
            <div style={styles.notionCard} onClick={() => handleAffiliateClick('tool1')}>
              <div style={styles.cardIcon}>📘</div>
              <div style={styles.cardInfo}>
                <h4 style={styles.cardTitle}>Ultimate OS Template</h4>
                <p style={styles.cardText}>Best for workflow management</p>
              </div>
              <span style={styles.arrow}>→</span>
            </div>

            <div style={styles.notionCard} onClick={() => handleAffiliateClick('tool2')}>
              <div style={styles.cardIcon}>⚡</div>
              <div style={styles.cardInfo}>
                <h4 style={styles.cardTitle}>Automation Mastery</h4>
                <p style={styles.cardText}>Integrate everything seamlessly</p>
              </div>
              <span style={styles.arrow}>→</span>
            </div>
          </div>

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
    position: "fixed", inset: 0, zIndex: 9999,
    backgroundColor: "rgba(15, 15, 15, 0.4)", // زدت الشفافية قليلاً ليظهر التأثير
    backdropFilter: "blur(8px)",
    display: "flex", alignItems: "center", justifyContent: "center"
  },
  modalContent: {
    position: "relative", width: "90%", maxWidth: "400px",
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
  eyeWhite: { 
    width: "70px", height: "40px", backgroundColor: "#fff", 
    borderRadius: "100%", border: "2.5px solid #37352f", 
    display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" 
  },
  eyeIris: { width: "20px", height: "20px", backgroundColor: "#37352f", borderRadius: "50%", transition: "transform 0.1s ease-out" },
  eyePupil: { width: "6px", height: "6px", backgroundColor: "#fff", borderRadius: "50%", position: "absolute", top: "4px", left: "4px" },
  title: { fontSize: "18px", color: "#37352f", fontWeight: 700, margin: "0 0 8px" },
  description: { fontSize: "14px", color: "#666", marginBottom: "24px", lineHeight: "1.4" },
  affiliateSection: { display: "grid", gap: "10px", marginBottom: "20px" },
  notionCard: {
    display: "flex", alignItems: "center", padding: "12px",
    borderRadius: "8px", border: "1px solid #efefef",
    cursor: "pointer", transition: "background 0.2s", gap: "12px", textAlign: "left"
  },
  cardIcon: { fontSize: "20px" },
  cardInfo: { flex: 1 },
  cardTitle: { fontSize: "14px", fontWeight: 600, color: "#37352f", margin: 0 },
  cardText: { fontSize: "12px", color: "#888", margin: 0 },
  arrow: { color: "#ccc" },
  notionButton: {
    width: "100%", padding: "10px",
    backgroundColor: "#37352f", color: "#fff",
    borderRadius: "6px", border: "none",
    fontSize: "14px", fontWeight: 600, cursor: "pointer"
  }
};
