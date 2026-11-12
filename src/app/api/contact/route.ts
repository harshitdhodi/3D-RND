import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phoneCode = "+91",
      phone = "",
      message,
      service = "",
      project_type = "",
      budget = "",
      timeline = "",
      source = "Portfolio Inquiries",
      source_page = "",
      project_slug = "",
      collection = "portfolio_inquiries",
    } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Message is required." },
        { status: 400 }
      );
    }

    const fullPhone = phone ? `${phoneCode} ${phone.trim()}` : "Not provided";
    const selectedService = service || project_type || "Technology Solutions";
    const resolvedSource = source_page || source || "/portfolio";

    // Forward to backend API which has SMTP credentials and MongoDB configured
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3014";
    const res = await fetch(`${backendUrl}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        phone: fullPhone,
        service_id: selectedService,
        service: selectedService,
        project_type: selectedService,
        product_id: "",
        budget,
        timeline,
        message: message.trim(),
        url: resolvedSource,
        source_page: resolvedSource,
        project_slug,
        collection,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Failed to send message");
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("❌ [Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
