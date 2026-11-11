import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3014";

export async function GET() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/contactus`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: "Failed to fetch contact info" },
        { status: 500 }
      );
    }

    const json = await res.json();
    const data = Array.isArray(json?.data) ? json.data[0] : json.data;

    return NextResponse.json({
      success: true,
      data: data || {
        phone: "+91 98765 43210",
        email: "bdm@rndtechnosoft.com",
        secondary_email: "rndtechnosoft@gmail.com",
        address: "RND Technosoft Office, Tech Park, India",
        mapurl: "https://maps.google.com",
        heading: "We're Here to Help!",
        subheading: "Have questions or need assistance? Our team is ready to support you.",
        whatsapp: "+91 98765 43210",
        working_hours: "Mon - Fri: 9:00 AM - 6:00 PM IST",
      },
    });
  } catch (error) {
    console.error("Contact info API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch contact info" },
      { status: 500 }
    );
  }
}
