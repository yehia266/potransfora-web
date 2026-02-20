import { NextResponse } from 'next/server';

// دالة استقبال البيانات من n8n
export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("SEO Status Received:", data.seo_status);
    
    return NextResponse.json({ 
      success: true, 
      received_value: data.seo_status,
      message: "Transfora System: Connection Established",
      timestamp: new Date().toISOString()
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: "Invalid Data or Empty Body" 
    }, { status: 400 });
  }
}

// دالة إضافية لفحص المسار (اختياري للتأكد من عمل الرابط)
export async function GET() {
  return NextResponse.json({ 
    status: "Active", 
    message: "Transfora SEO Endpoint is online. Please use POST method to send data." 
  });
}
