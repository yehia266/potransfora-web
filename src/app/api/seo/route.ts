import { NextResponse } from 'next/server';

// المخزن المؤقت المتوافق مع الـ 16 حزمة (حالة الأحرف دقيقة جداً)
let cachedSovereignData = {
  seo_title: "POTRANSFORA",
  seo_description: "Sovereign Empire Management System",
  Inspiring_Names: "Steve Jobs • Elon Musk • Marcus Aurelius • King Faisal",
  Inspiration_Quote: "Sovereignty is not just about power, but about attention to detail.",
  Core_Color_Palette: "#0F172A",
  Typography_Standard: "Playfair Display",
  Header_Menu: "Home • Projects • Team",
  Header_Logo_Text: "POTRANSFORA",
  Header_CTA_Button: "REQUEST ACCESS",
  Footer_Copyright: "© 2026 POTRANSFORA. All Rights Reserved",
  Footer_Social_Links: "#",
  System_Status: "Online",
  Character_Lottie_URL: "https://assets9.lottiefiles.com/packages/lf20_qu4v78tt.json",
  Footer_Scroll_Speed: "40",
  Animation_Duration: "0.8",
  Header_Blur_Level: "20"
};

export async function POST(request: Request) {
  try {
    const authKey = request.headers.get('X-Transfora-Key');
    const SOVEREIGN_KEY = "TF-Nexus-Sovereign-2026-Alpha-99-Safe";

    if (authKey !== SOVEREIGN_KEY) {
      return NextResponse.json({ success: false, error: "Access Denied" }, { status: 401 });
    }

    const data = await request.json();
    // دمج البيانات الجديدة مع الحفاظ على حالة الأحرف
    cachedSovereignData = { ...cachedSovereignData, ...data };

    return NextResponse.json({ 
      success: true, 
      message: "T9-CORE-02: 16 Sovereign Shields Activated",
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
