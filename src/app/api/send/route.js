import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const {name, email, message  } = await req.json();
  console.log(name, email, message );
 
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: fromEmail,
      subject: subject,
      react: (
        <>
          <p>הודעה חדשה</p>
          <h1>{subject}</h1>
          <p>{message}</p>
          <br/>
          <p>{name}</p>
          <p>{number}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    
    console.error("Something went wrong");
    return NextResponse.json({ error });
  }
}
