import React, { useState } from "react";

export function EyeModal({ className }: { className?: string }) {
  const [showModal, setShowModal] = useState(true);
  const [eyeTransform, setEyeTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX - window.innerWidth / 2) / 45;
    const y = (e.clientY - window.innerHeight / 2) / 45;
    setEyeTransform({ x, y });
  };

  const handleAffiliateClick = (offerId: string) => {
    const affiliateLinks: Record<string, string> = {
      tool1: "https://yourdomain.com/go/notion-template",
      tool2: "https://yourdomain.com/go/productivity-app"
    };
    window.open(affiliateLinks[offerId], "_blank");
  };

  if (!showModal) return null;

  return (
    <div className={className} style={styles.modalOverlay} onMouseMove={handleMouseMove}>
      <div style={styles.modalContent}>
        
        {/* المكونات العلوية بأسلوب Notion */}
        <div style={styles.topBar}>
          <div style={styles.dots}>
            <span style={{...styles.dot, backgroundColor: "#FF605C"}}></span>
            <span style={{...styles.dot, backgroundColor: "#FFBD44"}}></span>
            <span style={{...styles.dot, backgroundColor: "#00CA4E"}}></span>
          </div>
        </div>

        <div style={styles.innerContent}>
          {/* تصميم العين - Minimalist Notion Style */}
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

          <h2 style={styles.title}>System Verification</h2>
          <p style={styles.description}>
            Unlock the workspace of the future with our top-rated curated resources.
          </p>

          {/* صناديق الأفلييت - Notion Card Style */}
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
    backgroundColor: "rgba(15, 15, 15, 0.05)", // شفافية خفيفة جداً مثل Notion
    backdropFilter: "blur(8px)",
    display: "flex", alignItems: "center", justifyContent: "center"
  },
  modalContent: {
    position: "relative", width: "90%", maxWidth: "420px",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px", // زوايا Notion المميزة
    boxShadow: "0 1px 3px rgba(15, 15, 15, 0.1), 0 10px 20px rgba(15, 15, 15, 0.05)",
    border: "1px solid rgba(15, 15, 15, 0.1)",
    overflow: "hidden", textAlign: "left"
  },
  topBar: { padding: "12px 16px", borderBottom: "1px solid #efefef", display: "flex", alignItems: "center" },
  dots: { display: "flex", gap: "6px" },
  dot: { width: "10px", height: "10px", borderRadius: "50%" },
  innerContent: { padding: "30px" },
  
  // العين بستايل نوتشن (أبيض وأسود)
  eyeContainer: { position: "relative", width: "80px", height: "80px", margin: "0 auto 20px" },
  eyeWhite: { 
    width: "70px", height: "45px", backgroundColor: "#fff", 
    borderRadius: "100%", border: "2px solid #37352f", 
    display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" 
  },
  eyeIris: { width: "22px", height: "22px", backgroundColor: "#37352f", borderRadius: "50%" },
  eyePupil: { width: "8px", height: "8px", backgroundColor: "#fff", borderRadius: "50%", marginTop: "-4px", marginLeft: "-4px" },

  title: { fontSize: "20px", color: "#37352f", fontWeight: 700, marginBottom: "8px", textAlign: "center" },
  description: { fontSize: "14px", color: "#6b6e70", marginBottom: "24px", textAlign: "center", lineHeight: "1.5" },

  // كروت الأفلييت بستايل نوتشن
  affiliateSection: { display: "grid", gap: "10px", marginBottom: "20px" },
  notionCard: {
    display: "flex", alignItems: "center", padding: "12px",
    borderRadius: "8px", border: "1px solid #efefef",
    cursor: "pointer", transition: "background 0.2s ease",
    gap: "12px"
  },
  cardIcon: { fontSize: "24px" },
  cardInfo: { flex: 1 },
  cardTitle: { fontSize: "14px", fontWeight: 600, color: "#37352f", margin: 0 },
  cardText: { fontSize: "12px", color: "#737373", margin: 0 },
  arrow: { color: "#dfdfde", fontSize: "18px" },

  notionButton: {
    width: "100%", padding: "10px",
    backgroundColor: "#37352f", color: "#fff",
    borderRadius: "6px", border: "none",
    fontSize: "14px", fontWeight: 500,
    cursor: "pointer", transition: "opacity 0.2s"
  }
};
