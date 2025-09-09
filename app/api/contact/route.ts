// /app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  // TODO: integrar con tu email provider (Nodemailer, Resend, SendGrid…)
  // Por ahora sólo respondemos OK para no frenar el flujo.
  console.log("CONTACTO ►", body);
  return NextResponse.json({ ok: true }, { status: 200 });
}