import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { name, email, message } = await req.json();
  console.log(name, email, message);

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: fromEmail,
      subject: "הודעה חדשה מהאתר",
      html: `
      <div dir="rtl" style="font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px; border-radius: 10px; color: #333;">
        <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #4CAF50; margin-bottom: 15px;">הודעה חדשה התקבלה:</h2>
          <p style="margin-bottom: 10px; line-height: 1.6;">${message}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 15px 0;" />
          <p style="margin: 5px 0;"><strong>שם השולח:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>אימייל:</strong> ${email}</p>
        </div>
      </div>
    `    
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Something went wrong", error);
    return NextResponse.json({ error: "Failed to send email" });
  }
}
