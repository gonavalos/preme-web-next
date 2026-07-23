// app/api/preme/lead/route.ts
import { NextRequest, NextResponse } from "next/server";

const CRM_URL = "https://preme.madketing.com.ar/crm/lead/create";

type LeadInput = {
  nombre: string;
  tel: string;
  email: string;
  edad?: string;
  situacionLaboral?: string;
  integrantes?: string;
  ciudad?: string;
  mensaje?: string;
  plan?: string;
  fuente?: string;
};

async function pushToCrm(lead: LeadInput): Promise<{ ok: boolean; detail?: string }> {
  const token = process.env.PREME_CRM_TOKEN;
  if (!token) {
    return { ok: false, detail: "PREME_CRM_TOKEN no configurado en producción" };
  }

  const payload = {
    name: lead.nombre,
    phone: lead.tel,
    email_from: lead.email,
    description: lead.mensaje || "",
    x_ciudad: lead.ciudad || "",
    x_producto: lead.plan || "",
    x_fuente: lead.fuente || "Landing Web PREME",
    x_studio_edades: lead.edad || "",
    x_studio_situacion_laboral: lead.situacionLaboral || "",
    x_studio_integrantes_del_grupo_familiar: lead.integrantes || "",
    x_origen: "-",
  };

  try {
    const res = await fetch(CRM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text();
      return { ok: false, detail: `HTTP ${res.status}: ${text.slice(0, 200)}` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, detail: err instanceof Error ? err.message : String(err) };
  }
}

// Webhook secundario (opcional) — LEAD_WEBHOOK_URL puede apuntar a N8N para
// disparar notificación al WhatsApp/email del comercial. Falla silenciosa.
async function pushToWebhook(lead: LeadInput): Promise<void> {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lead,
        source: "preme-web-next",
        receivedAt: new Date().toISOString(),
      }),
    });
  } catch (err) {
    console.error("Webhook secundario falló:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeadInput;
    const { nombre, tel, email } = body;

    if (!nombre || !tel || !email) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios (nombre, teléfono o email)." },
        { status: 400 }
      );
    }

    // Log siempre — así el lead se puede recuperar de los logs si el CRM
    // falla (cinturón y tiradores).
    console.log(
      "LEAD RECIBIDO:",
      JSON.stringify({ ...body, at: new Date().toISOString() })
    );

    // Ejecutar en paralelo. El resultado del CRM define el status principal.
    const [crmResult] = await Promise.all([pushToCrm(body), pushToWebhook(body)]);

    if (!crmResult.ok) {
      console.error("Error CRM:", crmResult.detail);
      // Devolvemos 200 al usuario porque el lead quedó en logs + webhook.
      // El comercial lo recupera igual; no ensuciamos la UX.
      return NextResponse.json({
        ok: true,
        warning: "CRM no disponible; el lead fue registrado por canal alternativo.",
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error en /api/preme/lead:", err);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}