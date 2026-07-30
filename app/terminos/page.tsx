import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones · PREME Medicina Privada",
  description:
    "Términos y condiciones de uso del sitio web y la aplicación móvil de PREME Medicina Privada.",
  alternates: { canonical: "/terminos" },
  robots: { index: true, follow: true },
};

// Texto de uso del sitio/app conforme derecho argentino.
// Última revisión editorial: julio 2026. Revisión legal: pendiente (Ife).

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Aceptación",
    body: (
      <p>
        Estos Términos y Condiciones regulan el acceso y uso del sitio web
        www.preme.com.ar y de la aplicación móvil oficial de{" "}
        <strong>PREME Medicina Privada</strong> (“PREME”), con domicilio en
        Av. Colón 795, ciudad de Córdoba, República Argentina. Al navegar el
        sitio o utilizar la app aceptás estos términos. Si no estás de
        acuerdo, te pedimos que no utilices estos servicios.
      </p>
    ),
  },
  {
    title: "2. Objeto del sitio y de la app",
    body: (
      <p>
        El sitio y la app tienen fines informativos y de gestión: conocer los
        planes de salud, consultar la cartilla de prestadores, acceder a la
        credencial digital, gestionar autorizaciones y contactar a nuestro
        equipo. La información publicada (planes, coberturas, cartilla,
        beneficios) es de carácter general y puede actualizarse; las
        condiciones particulares de cada afiliación se rigen por el contrato
        y la normativa aplicable.
      </p>
    ),
  },
  {
    title: "3. La información de salud no es consejo médico",
    body: (
      <p>
        Los contenidos del sitio (incluido el blog) tienen fines de
        divulgación y no reemplazan la consulta con un profesional de la
        salud. Ante una urgencia o emergencia médica, comunicate con el
        servicio de urgencias (ECCO) o con los servicios de emergencia
        locales.
      </p>
    ),
  },
  {
    title: "4. Uso permitido",
    body: (
      <>
        <p>Te comprometés a utilizar el sitio y la app de manera lícita. No está permitido:</p>
        <ul className="list-disc pl-6 space-y-1.5 mt-3">
          <li>Usar los servicios con fines fraudulentos o contrarios a la ley.</li>
          <li>Intentar acceder sin autorización a sistemas, cuentas o datos de terceros.</li>
          <li>
            Extraer en forma masiva o automatizada contenidos del sitio (por
            ejemplo, la cartilla de prestadores) sin autorización de PREME.
          </li>
          <li>Suplantar la identidad de otra persona en formularios o gestiones.</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Credenciales y cuentas",
    body: (
      <p>
        Las credenciales de acceso a la app son personales e intransferibles.
        El afiliado es responsable de mantener la confidencialidad de sus
        claves y de las gestiones realizadas desde su cuenta. Ante cualquier
        uso no autorizado, comunicate de inmediato a{" "}
        <a href="mailto:info@preme.com.ar" className="text-[#33BAF0] underline">
          info@preme.com.ar
        </a>
        .
      </p>
    ),
  },
  {
    title: "6. Propiedad intelectual",
    body: (
      <p>
        Las marcas, logotipos, textos, imágenes y demás contenidos del sitio y
        de la app pertenecen a PREME o a sus licenciantes y están protegidos
        por la normativa de propiedad intelectual. No pueden reproducirse ni
        utilizarse con fines comerciales sin autorización previa y por
        escrito.
      </p>
    ),
  },
  {
    title: "7. Enlaces a terceros",
    body: (
      <p>
        El sitio puede contener enlaces a sitios o servicios de terceros
        (por ejemplo, portales de autorizaciones, tiendas de aplicaciones o
        WhatsApp). PREME no es responsable por el contenido ni por las
        políticas de privacidad de esos servicios.
      </p>
    ),
  },
  {
    title: "8. Disponibilidad y responsabilidad",
    body: (
      <p>
        PREME procura mantener el sitio y la app disponibles y actualizados,
        pero no garantiza la ausencia de interrupciones o errores. En la
        medida permitida por la ley, PREME no responde por daños derivados
        del uso del sitio, de indisponibilidades temporales o de causas
        ajenas a su control razonable.
      </p>
    ),
  },
  {
    title: "9. Protección de datos personales",
    body: (
      <p>
        El tratamiento de tus datos personales se rige por nuestra{" "}
        <Link href="/politica-de-privacidad" className="text-[#33BAF0] underline">
          Política de Privacidad
        </Link>
        , que forma parte de estos términos.
      </p>
    ),
  },
  {
    title: "10. Modificaciones",
    body: (
      <p>
        PREME puede actualizar estos términos para reflejar cambios
        normativos, operativos o de los servicios. La versión vigente estará
        siempre publicada en esta página con su fecha de última
        actualización.
      </p>
    ),
  },
  {
    title: "11. Ley aplicable y jurisdicción",
    body: (
      <p>
        Estos términos se rigen por las leyes de la República Argentina. Para
        cualquier controversia serán competentes los tribunales ordinarios de
        la ciudad de Córdoba, sin perjuicio de las normas de orden público
        que establezcan otra jurisdicción en protección del consumidor.
      </p>
    ),
  },
  {
    title: "12. Defensa del consumidor",
    body: (
      <p>
        Para consultas o reclamos podés escribirnos a{" "}
        <a href="mailto:info@preme.com.ar" className="text-[#33BAF0] underline">
          info@preme.com.ar
        </a>{" "}
        o comunicarte con la Dirección de Defensa del Consumidor de tu
        jurisdicción. Superintendencia de Servicios de Salud — órgano de
        control de las entidades de medicina prepaga: 0800-222-72583,
        www.sssalud.gob.ar.
      </p>
    ),
  },
];

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="bg-[#092f57] text-white">
          <div className="mx-auto max-w-4xl px-4 md:px-6 py-14 md:py-20">
            <span className="inline-block rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase mb-4">
              Información legal
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Términos y Condiciones
            </h1>
            <p className="mt-3 text-white/75 text-sm md:text-base">
              Última actualización: julio de 2026
            </p>
          </div>
        </section>

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
            ¿Dudas sobre estos términos? Escribinos a{" "}
            <a href="mailto:info@preme.com.ar" className="text-[#33BAF0] font-semibold underline">
              info@preme.com.ar
            </a>
            .
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
