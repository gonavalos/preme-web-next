import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad · PREME Medicina Privada",
  description:
    "Política de privacidad de PREME Medicina Privada: cómo recolectamos, usamos y protegemos tus datos personales en nuestro sitio web y aplicación móvil.",
  alternates: { canonical: "/politica-de-privacidad" },
  robots: { index: true, follow: true },
};

// Texto conforme a la Ley 25.326 de Protección de Datos Personales (Argentina)
// y a la User Data policy de Google Play (la app declara esta URL).
// Última revisión editorial: julio 2026. Revisión legal: pendiente (Ife).

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Responsable del tratamiento",
    body: (
      <p>
        La presente Política de Privacidad describe el tratamiento de datos
        personales que realiza <strong>PREME Medicina Privada</strong> (en
        adelante, “PREME”), con domicilio en Av. Colón 795, ciudad de Córdoba,
        República Argentina, correo electrónico de contacto{" "}
        <a href="mailto:info@preme.com.ar" className="text-[#33BAF0] underline">
          info@preme.com.ar
        </a>
        , en relación con su sitio web (www.preme.com.ar), su aplicación móvil
        oficial (“PREME Medicina Privada”, disponible en Google Play y App
        Store) y sus canales de atención digital.
      </p>
    ),
  },
  {
    title: "2. Datos que recolectamos",
    body: (
      <>
        <p>Según el servicio que utilices, podemos tratar los siguientes datos:</p>
        <ul className="list-disc pl-6 space-y-1.5 mt-3">
          <li>
            <strong>Datos de identificación y contacto:</strong> nombre y
            apellido, DNI, CUIL, fecha de nacimiento, domicilio, localidad,
            teléfono y correo electrónico.
          </li>
          <li>
            <strong>Datos de afiliación:</strong> número de afiliado, plan
            contratado, composición del grupo familiar, credencial digital y
            estado de cuenta.
          </li>
          <li>
            <strong>Datos de salud:</strong> información necesaria para la
            gestión de tu cobertura — autorizaciones de prácticas y estudios,
            órdenes médicas, declaración jurada de salud y consumos de
            farmacia. Estos datos son tratados como datos sensibles conforme a
            la Ley 25.326 y solo se utilizan para la prestación y gestión de la
            cobertura médica.
          </li>
          <li>
            <strong>Datos laborales:</strong> situación laboral y recibo de
            sueldo, cuando los aportás voluntariamente para cotizar o gestionar
            una afiliación.
          </li>
          <li>
            <strong>Datos de uso técnico:</strong> información básica del
            dispositivo y de la sesión (tipo de dispositivo, sistema operativo,
            direcciones IP, registros de acceso) necesaria para la seguridad y
            el funcionamiento de la app y del sitio.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Finalidades del tratamiento",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>Gestionar tu afiliación, tu plan y tu grupo familiar.</li>
        <li>
          Emitir y validar tu credencial digital y gestionar autorizaciones de
          prácticas, estudios y medicación.
        </li>
        <li>
          Brindarte atención y asesoramiento por nuestros canales (web,
          WhatsApp, correo, telefónico y presencial).
        </li>
        <li>Cotizar planes a pedido tuyo y contactarte por esa gestión.</li>
        <li>Administrar pagos, facturación y cuenta corriente.</li>
        <li>
          Cumplir obligaciones legales y regulatorias, incluyendo las
          requeridas por la Superintendencia de Servicios de Salud y demás
          autoridades competentes.
        </li>
        <li>Mejorar nuestros servicios y la experiencia de uso de la app y el sitio.</li>
      </ul>
    ),
  },
  {
    title: "4. Con quién compartimos tus datos",
    body: (
      <>
        <p>PREME no vende ni alquila datos personales. Solo los comparte con:</p>
        <ul className="list-disc pl-6 space-y-1.5 mt-3">
          <li>
            <strong>Prestadores de la red</strong> (clínicas, sanatorios,
            profesionales, farmacias, laboratorios), en la medida necesaria
            para brindarte las prestaciones de tu plan.
          </li>
          <li>
            <strong>Proveedores tecnológicos</strong> que actúan como
            encargados de tratamiento por cuenta de PREME (por ejemplo, el
            proveedor del sistema de gestión y de la aplicación móvil), bajo
            obligaciones de confidencialidad y seguridad.
          </li>
          <li>
            <strong>Autoridades públicas</strong>, cuando exista obligación
            legal o requerimiento judicial o administrativo válido.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Seguridad y conservación",
    body: (
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger tus
        datos contra accesos no autorizados, pérdida o alteración, conforme a
        la normativa vigente. Conservamos los datos durante la vigencia de la
        relación con el afiliado y por los plazos exigidos por la normativa de
        salud, contable e impositiva aplicable; cumplidos esos plazos, los
        datos se eliminan o anonimizan.
      </p>
    ),
  },
  {
    title: "6. Tus derechos",
    body: (
      <>
        <p>
          Como titular de los datos podés ejercer en cualquier momento los
          derechos de acceso, rectificación, actualización y supresión
          previstos por la Ley 25.326, en forma gratuita a intervalos no
          inferiores a seis meses (salvo interés legítimo acreditado),
          escribiendo a{" "}
          <a href="mailto:info@preme.com.ar" className="text-[#33BAF0] underline">
            info@preme.com.ar
          </a>{" "}
          o presentándote en Av. Colón 795, Córdoba.
        </p>
        <p className="mt-3">
          La <strong>Agencia de Acceso a la Información Pública</strong>, en su
          carácter de órgano de control de la Ley 25.326, tiene la atribución
          de atender las denuncias y reclamos que se interpongan con relación
          al incumplimiento de las normas sobre protección de datos personales
          (www.argentina.gob.ar/aaip).
        </p>
      </>
    ),
  },
  {
    title: "7. Aplicación móvil",
    body: (
      <p>
        La aplicación “PREME Medicina Privada” accede únicamente a los datos
        descriptos en esta política, con el fin de ofrecerte tu credencial
        digital, autorizaciones, cartilla de prestadores, cuenta corriente y
        números útiles. La app no accede a tus contactos, mensajes ni
        ubicación en segundo plano, y no comparte datos con terceros con fines
        publicitarios. Podés solicitar la eliminación de tu cuenta y de los
        datos asociados a la app escribiendo a{" "}
        <a href="mailto:info@preme.com.ar" className="text-[#33BAF0] underline">
          info@preme.com.ar
        </a>
        .
      </p>
    ),
  },
  {
    title: "8. Cambios a esta política",
    body: (
      <p>
        PREME puede actualizar esta Política de Privacidad para reflejar
        cambios normativos o de nuestros servicios. La versión vigente estará
        siempre publicada en esta página, con su fecha de última
        actualización. Los cambios sustanciales serán comunicados por nuestros
        canales habituales.
      </p>
    ),
  },
];

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Encabezado */}
        <section className="bg-[#092f57] text-white">
          <div className="mx-auto max-w-4xl px-4 md:px-6 py-14 md:py-20">
            <span className="inline-block rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase mb-4">
              Información legal
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Política de Privacidad
            </h1>
            <p className="mt-3 text-white/75 text-sm md:text-base">
              Última actualización: julio de 2026
            </p>
          </div>
        </section>

        {/* Cuerpo */}
        <section className="mx-auto max-w-4xl px-4 md:px-6 py-12 md:py-16">
          <div className="space-y-10 text-gray-700 leading-relaxed text-[15px] md:text-base">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl md:text-2xl font-bold text-[#092f57] tracking-tight mb-3">
                  {s.title}
                </h2>
                {s.body}
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-[#f5f8fa] border border-black/[0.06] p-6 text-sm text-gray-600">
            ¿Tenés dudas sobre el tratamiento de tus datos? Escribinos a{" "}
            <a href="mailto:info@preme.com.ar" className="text-[#33BAF0] font-semibold underline">
              info@preme.com.ar
            </a>{" "}
            o llamanos en horario de atención (lunes a viernes de 9 a 17 hs).
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
