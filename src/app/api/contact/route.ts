import { NextResponse } from "next/server";
import nodemailer, { SendMailOptions } from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phoneCode = "+1",
      phone = "",
      message,
      service = "",
      budget = "",
      timeline = "",
      source = "Contact Us Page",
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

    // Helper to strip any surrounding quotes from env values
    const clean = (val?: string | number) =>
      typeof val === "string" ? val.replace(/^["']|["']$/g, "").trim() : val ? String(val) : "";

    const smtpUser =
      clean(process.env.EMAIL_USER) ||
      clean(process.env.SMTP_USER) ||
      clean(process.env.SMTP_FROM_EMAIL) ||
      clean(process.env.ZOHO_USER) ||
      clean(process.env.ZOHO_EMAIL) ||
      "info@rndtechnosoft.com";

    const smtpPass =
      clean(process.env.EMAIL_PASS) ||
      clean(process.env.SMTP_PASS) ||
      clean(process.env.SMTP_PASSWORD) ||
      clean(process.env.ZOHO_PASSWORD) ||
      "";

    const smtpHost =
      clean(process.env.EMAIL_HOST) ||
      clean(process.env.SMTP_HOST) ||
      clean(process.env.ZOHO_HOST) ||
      "smtppro.zoho.in";

    const smtpPort = Number(
      clean(process.env.EMAIL_PORT) || clean(process.env.SMTP_PORT) || clean(process.env.ZOHO_PORT) || 465
    );

    const isSecure =
      process.env.EMAIL_SECURE === "true" ||
      process.env.SMTP_SECURE === "true" ||
      process.env.SMTP_SECURE === "TRUE" ||
      smtpPort === 465;

    const fromEmail = clean(process.env.EMAIL_FROM) || clean(process.env.SMTP_FROM_EMAIL) || smtpUser;
    const fromName = clean(process.env.EMAIL_FROM_NAME) || clean(process.env.SMTP_FROM_NAME) || "RND TECHNOSOFT";
    const receiverEmail =
      clean(process.env.EMAIL_ADMIN) ||
      clean(process.env.SMTP_ADMIN_EMAIL) ||
      clean(process.env.CONTACT_RECEIVER_EMAIL) ||
      "info@rndtechnosoft.com";

    const ccEmail =
      clean(process.env.EMAIL_CC) ||
      clean(process.env.SMTP_CC) ||
      clean(process.env.ZOHO_CC) ||
      "ravi@rndtechnosoft.com";

    // If password is not configured yet in environment
    if (!smtpPass) {
      console.warn(
        "⚠️ [Zoho Mail] SMTP_PASS is not configured in .env.local. Email could not be dispatched."
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "Zoho SMTP credentials are not yet configured. Please set SMTP_PASS in your .env.local file.",
        },
        { status: 500 }
      );
    }

    // Configure Zoho Mail Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure, // true for 465 (SSL), false for 587 (TLS)
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const fullPhone = phone ? `${phoneCode} ${phone.trim()}` : "Not provided";
    const formattedDate = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Sanitization helper
    const escapeHtml = (str: string) =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    // Branded HTML email body
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0d14; color: #ffffff; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #12151e; border: 1px solid rgba(255, 212, 0, 0.25); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.8); }
    .header { background: linear-gradient(135deg, #181b26 0%, #0d0f17 100%); padding: 32px 30px; border-bottom: 2px solid #FFD400; }
    .logo-badge { display: inline-block; font-size: 11px; font-weight: 700; color: #FFD400; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 8px; font-family: monospace; }
    .title { font-size: 24px; font-weight: 800; color: #ffffff; margin: 0; text-transform: uppercase; letter-spacing: 0.5px; }
    .body { padding: 32px 30px; }
    .field-row { margin-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 14px; }
    .field-label { font-size: 11px; font-family: monospace; text-transform: uppercase; color: #FFD400; letter-spacing: 1.5px; margin-bottom: 6px; }
    .field-value { font-size: 15px; color: #f0f0f0; line-height: 1.5; }
    .field-value a { color: #FFD400; text-decoration: none; font-weight: 600; }
    .message-box { background-color: #0a0c12; border-left: 3px solid #FFD400; padding: 16px 20px; border-radius: 0 10px 10px 0; margin-top: 8px; font-size: 14px; color: #e5e5e5; line-height: 1.7; white-space: pre-wrap; }
    .footer { padding: 20px 30px; background-color: #0d0f17; border-top: 1px solid rgba(255,255,255,0.06); text-align: center; font-size: 11px; font-family: monospace; color: #888888; }
    .meta-tag { display: inline-block; padding: 4px 10px; border-radius: 6px; background-color: rgba(255, 212, 0, 0.1); border: 1px solid rgba(255, 212, 0, 0.3); color: #FFD400; font-size: 11px; font-family: monospace; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo-badge">⚡ RND TECHNOSOFT // INCOMING INQUIRY</div>
      <h1 class="title">New Client Contact</h1>
    </div>

    <div class="body">
      <div class="field-row">
        <div class="field-label">Full Name</div>
        <div class="field-value"><strong>${escapeHtml(name.trim())}</strong></div>
      </div>

      <div class="field-row">
        <div class="field-label">Email Address</div>
        <div class="field-value">
          <a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a>
        </div>
      </div>

      <div class="field-row">
        <div class="field-label">Phone Number</div>
        <div class="field-value">
          ${phone ? `<a href="tel:${escapeHtml(fullPhone)}">${escapeHtml(fullPhone)}</a>` : "Not provided"}
        </div>
      </div>

      ${
        service
          ? `
      <div class="field-row">
        <div class="field-label">Selected Service / Interest</div>
        <div class="field-value"><span class="meta-tag">${escapeHtml(service)}</span></div>
      </div>`
          : ""
      }

      ${
        budget
          ? `
      <div class="field-row">
        <div class="field-label">Estimated Budget</div>
        <div class="field-value">${escapeHtml(budget)}</div>
      </div>`
          : ""
      }

      ${
        timeline
          ? `
      <div class="field-row">
        <div class="field-label">Target Timeline</div>
        <div class="field-value">${escapeHtml(timeline)}</div>
      </div>`
          : ""
      }

      <div class="field-row">
        <div class="field-label">Form / Source Page</div>
        <div class="field-value"><span class="meta-tag">${escapeHtml(source)}</span></div>
      </div>

      <div class="field-row" style="border-bottom: none; margin-bottom: 0; padding-bottom: 0;">
        <div class="field-label">Client Message & Requirements</div>
        <div class="message-box">${escapeHtml(message.trim())}</div>
      </div>
    </div>

    <div class="footer">
      Received on ${formattedDate} (IST)<br/>
      Sent automatically via RND Technosoft Website Portal
    </div>
  </div>
</body>
</html>
    `;

    // Plain text version
    const textContent = `
RND TECHNOSOFT - NEW CLIENT INQUIRY
====================================
From: ${name.trim()}
Email: ${email.trim()}
Phone: ${fullPhone}
Service: ${service || "General Inquiry"}
Budget: ${budget || "Not specified"}
Timeline: ${timeline || "Not specified"}
Source: ${source}
Received: ${formattedDate} (IST)

MESSAGE:
------------------------------------
${message.trim()}
====================================
    `;

    // Send the email via Zoho SMTP
    const mailOptions: SendMailOptions = {
      from: `"${fromName}" <${fromEmail}>`,
      to: receiverEmail,
      replyTo: email.trim(),
      subject: `🚀 New Inquiry: ${name.trim()} [${source}]`,
      text: textContent,
      html: htmlContent,
    };

    if (ccEmail) {
      mailOptions.cc = ccEmail;
    }

    await transporter.sendMail(mailOptions);

    // Also store lead in backend database
    try {
      const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3014";
      await fetch(`${backendUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: fullPhone,
          service,
          budget,
          timeline,
          message,
          url: source,
        }),
      });
    } catch (backendError) {
      console.warn("Failed to store lead in backend:", backendError);
      // Don't fail the request if backend storage fails
    }

    return NextResponse.json({
      success: true,
      message: `Inquiry successfully delivered to ${receiverEmail}`,
    });
  } catch (error: any) {
    console.error("❌ [Zoho Mail Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to send email. Please try again later.",
      },
      { status: 500 }
    );
  }
}
