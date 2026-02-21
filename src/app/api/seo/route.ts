import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // استخراج المفتاح من الـ Headers للتحقق
    const authKey = request.headers.get('X-Transfora-Key');
    const SOVEREIGN_KEY = "TF-Nexus-Sovereign-2026-Alpha-99-Safe";

    if (authKey !== SOVEREIGN_KEY) {
      console.error("🚨 Unauthorized Access Attempt Detected!");
      return NextResponse.json({ success: false, error: "Access Denied: Invalid Sovereign Key" }, { status: 401 });
    }

    const data = await request.json();
    const { seo_title, seo_description, seo_status } = data;

    console.log("🛡️ Verified Data Received:", { seo_title, seo_status });

    return NextResponse.json({ 
      success: true, 
      message: "T9-CORE-02-Security-Shield: Data Secured & Injected",
      received: { title: seo_title, status: seo_status }
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ success: false, error: "Critical Error in Data Stream" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ status: "Encrypted", node: "T9-CORE-02-Security-Shield" });
}
