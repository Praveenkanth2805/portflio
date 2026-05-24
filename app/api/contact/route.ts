import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Optional: Send email using Resend/Nodemailer
    // For now, log to console and return success
    console.log("Contact form submission:", { name, email, message, to: process.env.CONTACT_EMAIL_TO });

    // Here you can integrate email service using environment variables
    // Example with Resend:
    // await resend.emails.send({ ... });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}