// page.tsx - T9-CORE-02-Webhook & SEO Base
// ... (داخل الـ useEffect)
        const updateMeta = (name: string, content: string) => {
          let el = document.querySelector(`meta[name="${name}"]`);
          if (el) el.setAttribute("content", content);
          else {
            const meta = document.createElement('meta');
            meta.name = name;
            meta.content = content;
            document.head.appendChild(meta);
          }
        };
        if (json.seo_description) updateMeta("description", json.seo_description);
        if (json.dynamic_keywords) updateMeta("keywords", json.dynamic_keywords); // حلس فجوة الـ SEO

// ... (داخل الـ JSX للهيدر أو الفوتر)
      <footer className="p-12 border-t border-white/5 flex justify-between items-center opacity-30 text-[8px] tracking-[0.2em] font-mono">
        <div>{data.Footer_Copyright}</div>
        <div>GATEWAY: {data.Global_Gateway_Version}</div> {/* حل فجوة التحكم البصري */}
      </footer>

// ... (داخل الـ Main)
        <motion.h1 
          className="text-[12vw] italic tracking-tighter leading-none relative z-10"
          style={{ fontWeight: data.Font_Weight_Hero }} // حل فجوة التحكم البصري
        >
          {data.Header_Logo_Text}
        </motion.h1>
