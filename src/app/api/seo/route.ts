import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // استخراج الكنوز السيادية من الطلب القادم من n8n
    const { seo_title, seo_description, seo_status } = data;

    // طباعة البيانات في Logs السيرفر (Vercel) للرقابة والتحقق
    console.log("🛡️ Transfora Sovereign Update:");
    console.log("- Title:", seo_title);
    console.log("- Description:", seo_description);
    console.log("- Status:", seo_status);

    return NextResponse.json({ 
      success: true, 
      received: {
        title: seo_title,
        description: seo_description,
        status: seo_status
      },
      message: "T9-CORE-02: Sovereign SEO Data Injected Successfully",
      timestamp: new Date().toISOString()
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: "Data Injection Failed - Check Payload Structure" 
    }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: "Active", 
    node: "T9-CORE-02-Webhook & SEO Base",
    message: "Ready for Sovereign Data Injection."
  });
}
