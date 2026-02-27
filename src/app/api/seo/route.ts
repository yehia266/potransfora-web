import { NextResponse } from 'next/server';

// مخزن مؤقت للبيانات (عشان الـ GET تلاقي حاجة تبعتها للموقع)
let cachedSovereignData = {
  seo_title: "POTransfora",
  Header_Logo_Text: "POTRANSFORA",
  Core_Color_Palette: "#0F172A",
  System_Status: "Online"
};

export async function POST(request: Request) {
  try {
    const authKey = request.headers.get('X-Transfora-Key');
    const SOVEREIGN_KEY = "TF-Nexus-Sovereign-2026-Alpha-99-Safe";

    if (authKey !== SOVEREIGN_KEY) {
      return NextResponse.json({ success: false, error: "Access Denied" }, { status: 401 });
    }

    const data = await request.json();
    
    // التعديل الجوهري: حفظ البيانات في الـ Cache عشان الـ GET تشوفها
    cachedSovereignData = { ...cachedSovereignData, ...data };

    return NextResponse.json({ 
      success: true, 
      message: "T9-CORE-02-Security-Shield: Data Secured & Injected",
      received_fields: Object.keys(data)
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ success: false, error: "Critical Error" }, { status: 400 });
  }
}

export async function GET() {
  // التعديل الجوهري: إرسال البيانات الحقيقية للموقع
  return NextResponse.json(cachedSovereignData, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  });
}
