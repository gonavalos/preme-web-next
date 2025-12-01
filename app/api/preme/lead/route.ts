// app/api/preme/lead/route.ts
import { NextRequest, NextResponse } from "next/server";

const CRM_URL = "https://preme.madketing.com.ar/crm/lead/create";

export async function POST(req: NextRequest) {
  try {
    const {
      nombre,
      tel,
      email,
      edad,
      situacionLaboral,
      integrantes,
      ciudad,
      mensaje,
      plan,
      fuente,
    } = await req.json();

    if (!nombre || !tel || !email) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios (nombre, teléfono o email)." },
        { status: 400 }
      );
    }

    // 🔁 Mapeo al formato que pide el CRM
    const payload = {
      name: nombre,
      phone: tel,
      email_from: email,
      description: mensaje || "",
      x_ciudad: ciudad || "",
      x_producto: plan || "",
      x_fuente: fuente || "Landing Web PREME",
      x_studio_edades: edad || "",
      x_studio_situacion_laboral: situacionLaboral || "",
      x_studio_integrantes_del_grupo_familiar: integrantes || "",
      x_origen: "-", // como te pasaron
    };

    const res = await fetch(CRM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // ⚠️ token en variable de entorno, NO en el código
        Authorization: process.env.PREME_CRM_TOKEN || "",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Error CRM:", res.status, text);
      return NextResponse.json(
        { error: "Error al enviar los datos al CRM", detail: text },
        { status: 500 }
      );
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