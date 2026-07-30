import { NextRequest, NextResponse } from "next/server";

// Recibe postulaciones de /trabaja-con-nosotros (FormData con CV en PDF).
// Registra siempre en logs (recuperable) y reenvía a RRHH_WEBHOOK_URL si está
// configurada (ej. workflow N8N que manda mail a RRHH con el CV adjunto).
// Mismo patrón que LEAD_WEBHOOK_URL en /api/preme/lead.

const MAX_CV_BYTES = 5 * 1024 * 1024; // 5 MB

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const area = String(form.get("area") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const cv = form.get("cv");

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nombre y email son obligatorios." },
        { status: 400 }
      );
    }

    let cvMeta: { filename: string; size: number; type: string } | null = null;
    let cvBase64: string | null = null;

    if (cv instanceof File && cv.size > 0) {
      if (cv.size > MAX_CV_BYTES) {
        return NextResponse.json(
          { error: "El CV supera los 5 MB. Comprimilo o envialo por mail." },
          { status: 400 }
        );
      }
      if (cv.type && cv.type !== "application/pdf") {
        return NextResponse.json(
          { error: "El CV debe ser un PDF." },
          { status: 400 }
        );
      }
      cvMeta = { filename: cv.name, size: cv.size, type: cv.type };
      cvBase64 = Buffer.from(await cv.arrayBuffer()).toString("base64");
    }

    // Log siempre (sin el binario) — recuperable de los logs del server.
    console.log(
      "POSTULACION ►",
      JSON.stringify({ name, email, phone, area, message, cv: cvMeta, at: new Date().toISOString() })
    );

    // Webhook RRHH opcional (N8N u otro): recibe todo, incluido el PDF en base64.
    const webhook = process.env.RRHH_WEBHOOK_URL;
    if (webhook) {
      try {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: "preme-web-next/trabaja-con-nosotros",
            name,
            email,
            phone,
            area,
            message,
            cv: cvMeta ? { ...cvMeta, base64: cvBase64 } : null,
            receivedAt: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error("Webhook RRHH falló:", err);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error /api/jobs:", err);
    return NextResponse.json(
      { error: "Error interno. Probá de nuevo o envianos tu CV por mail." },
      { status: 500 }
    );
  }
}
