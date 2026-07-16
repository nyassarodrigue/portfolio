/*import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["nyassarodrigue3@gmail.com"],
      subject: subject || "Nouveau message depuis votre portfolio",
      html: `
        <h2>Nouveau message</h2>

        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>

        <hr />

        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email." },
      { status: 500 },
    );
  }
}
 */ import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "API CONTACT OK",
  });
}

export async function POST() {
  return NextResponse.json({
    success: true,
  });
}