import { NextResponse } from 'next/server';

// المخزن المؤقت المتوافق مع الـ 21 حزمة (تحديث سيادي 2026)
let cachedSovereignData = {
  seo_title: "POTRANSFORA",
  seo_description: "Sovereign Empire Management System",
  dynamic_keywords: "Sovereignty, AI, Empire, Transfora",
  Core_Color_Palette: "#0F172A",
  Typography_Standard: "Playfair Display",
  Font_Weight_Hero: "900",
  Header_Logo_Text: "POTRANSFORA",
  Inspiration_Quote: "Sovereignty is not just about power, but about attention to detail.",
  Inspiring_Names: "Steve Jobs • Elon Musk • Marcus Aurelius",
  Header_Menu: "Home • Projects • Team",
  Header_CTA_Button: "REQUEST ACCESS",
  System_Status: "Online",
  Character_Lottie_URL: "https://assets9.lottiefiles.com/packages/lf20_qu4v78tt.json",
  Header_Blur_Level: "20",
  Animation_Duration: "0.8",
  Footer_Scroll_Speed: "40",
  Footer_Copyright: "© 2026 POTRANSFORA. All Rights Reserved",
  Footer_Social_Links: "#",
  Global_Gateway_Version: "v14.2.3 Stable",
  Maintenance_Mode: "false",
  Analytics_ID: "G-XXXXXXXX"
};

export async function POST(request: Request) {
  try {
    const authKey = request.headers.get('X-Transfora-Key');
    const SOVEREIGN_KEY = "TF-Nexus-Sovereign-2026-Alpha-99-Safe";

    if (authKey !== SOVEREIGN_KEY) {
      return NextResponse.json({ success: false, error: "Access Denied" }, { status: 401 });
    }

    const data = await request.json();
    // دمج ذكي: يحافظ على القديم ويحدث الجديد فقط
    cachedSovereignData = { ...cachedSovereignData, ...data };

    return NextResponse.json({ 
      success: true, 
      message: "T9-CORE-02: 21 Sovereign Shields Fully Activated",
      received_fields: Object.keys(data)
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ success: false, error: "Critical Injection Error" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json(cachedSovereignData, {
    headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' }
  });
}
