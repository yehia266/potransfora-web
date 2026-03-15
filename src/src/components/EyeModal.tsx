import React, { useState } from "react";

// واجهة تعريفية للخصائص (إذا أردت تمرير روابط من Plasmic لاحقاً)
interface EyeModalProps {
  className?: string; 
}

export function EyeModal({ className }: EyeModalProps) {
  const [showModal, setShowModal] = useState(true);
  const [eyeTransform, setEyeTransform] = useState({ x: 0, y: 0 });

  // منطق تتبع حركة الماوس
  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX - window.innerWidth / 2) / 35;
    const y = (e.clientY - window.innerHeight / 2) / 35;
    setEyeTransform({ x, y });
  };

  // دالة الروابط المدارة (تحكم مركزي)
  const handleAffiliateClick = (offerId: string) => {
    const affiliateLinks: Record<string, string> = {
      tool1: "https://yourdomain.com/go/seo-tool", // استبدل بالروابط الخاصة بك
      tool2: "https://yourdomain.com/go/ai-writer"
    };
    window.open(affiliateLinks[offerId], "_blank");
  };

  if (!showModal) return null;

  return (
    <div className={className} style={styles.modalOverlay} onMouseMove={handleMouseMove}>
      <div style={styles.modalContent}>
        {/* خلفية النيون */}
        <div style={{ ...styles.blob, ...styles.blob1 }}></div>
        <div style={{ ...styles.blob, ...styles.blob2 }}></div>

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
            <div style={styles.eyeScanner}></div>
          </div>

          <h2 style={styles.title}>NEON CORE ACCESS</h2>
          <p style={styles.description}>أدوات مختارة لنمو مشروعك الرقمي</p>

          {/* صناديق الأفلييت */}
          <div style={styles.affiliateSection}>
            <div style={styles.card} onClick={() => handleAffiliateClick('tool1')}>
              <span style={styles.cardTag}>مميز</span>
              <h4 style={styles.cardTitle}>أداة SEO Turbo</h4>
              <p style={styles.cardText}>تصدر نتائج البحث بذكاء</p>
              <button style={styles.cardBtn}>عرض التفاصيل</button>
            </div>

            <div style={styles.card} onClick={() => handleAffiliateClick('tool2')}>
              <h4 style={styles.cardTitle}>كاتب المحتوى الآلي</h4>
              <p style={styles.cardText}>وفر وقتك وجهدك الآن</p>
              <button style={styles.cardBtn}>دخول حصري</button>
            </div>
          </div>

          <button style={styles.closeButton} onClick={() => setShowModal(false)}>
            إغلاق والمعاينة لاحقاً
          </button>
        </div>
      </div>

      <style>{`
        @keyframes scan { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes blink { 0%, 90%, 100% { transform: rotate(45deg) scaleY(1); } 95% { transform: rotate(45deg) scaleY(0.1); } }
      `}</style>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  modalOverlay: { position: "fixed", inset: 0, zIndex: 9999, backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center" },
  modalContent: { position: "relative", width: "90%", maxWidth: "450px", padding: "40px", backgroundColor: "#0f172a", borderRadius: "30px", border: "1px solid #1e293b", textAlign: "center", overflow: "hidden" },
  eyeContainer: { position: "relative", width: "100px", height: "100px", margin: "0 auto 20px" },
  eyeWhite: { width: "80px", height: "80px", backgroundColor: "#fff", borderRadius: "50% 0", transform: "rotate(45deg)", border: "2px solid #00f2ff", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", animation: "blink 5s infinite" },
  eyeIris: { width: "40px", height: "40px", backgroundColor: "#00f2ff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" },
  eyePupil: { width: "18px", height: "18px", backgroundColor: "#020617", borderRadius: "50%" },
  eyeScanner: { position: "absolute", top: "-5px", left: "-5px", width: "110px", height: "110px", border: "1px dashed #00f2ff", borderRadius: "50%", animation: "scan 6s linear infinite" },
  affiliateSection: { display: "grid", gap: "15px", margin: "20px 0" },
  card: { padding: "15px", backgroundColor: "#1e293b", borderRadius: "15px", border: "1px solid #334155", cursor: "pointer", textAlign: "right", position: "relative" },
  cardTag: { position: "absolute", top: "10px", left: "10px", backgroundColor: "#00f2ff", color: "#000", fontSize: "10px", fontWeight: "bold", padding: "2px 6px", borderRadius: "4px" },
  cardTitle: { fontSize: "16px", color: "#00f2ff", margin: 0 },
  cardText: { fontSize: "12px", color: "#94a3b8", margin: "5px 0" },
  cardBtn: { width: "100%", padding: "8px", backgroundColor: "transparent", border: "1px solid #00f2ff", color: "#00f2ff", borderRadius: "8px", cursor: "pointer" },
  title: { fontSize: "22px", color: "#fff", fontWeight: 900 },
  description: { fontSize: "14px", color: "#64748b" },
  closeButton: { marginTop: "15px", background: "none", border: "none", color: "#475569", cursor: "pointer", textDecoration: "underline" },
  blob: { position: "absolute", width: "200px", height: "200px", borderRadius: "50%", filter: "blur(50px)", opacity: 0.15 },
  blob1: { backgroundColor: "#00f2ff", top: "-50px", left: "-50px" },
  blob2: { backgroundColor: "#0072ff", bottom: "-50px", right: "-50px" },
  innerContent: { position: "relative", zIndex: 10 }
};
