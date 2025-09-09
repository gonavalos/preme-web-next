// /app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.preme.com.ar"),
  title: { default: "PREME Salud", template: "%s | PREME Salud" },
  description: "Cobertura médica privada en Argentina. Planes, prestadores y credencial digital.",
  openGraph: {
    title: "PREME Salud",
    description: "Cobertura médica privada en Argentina. Planes, prestadores y credencial digital.",
    url: "https://www.preme.com.ar",
    siteName: "PREME Salud",
    images: [{ url: "/ver2.png", width: 1200, height: 630, alt: "PREME" }],
    locale: "es_AR",
    type: "website",
  },
  alternates: { canonical: "https://www.preme.com.ar" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "PREME Salud",
  url: "https://www.preme.com.ar",
  logo: "https://www.preme.com.ar/LogoPreme2.png",
  image: "https://www.preme.com.ar/banner.png",
  telephone: "+54-351-421-7997",
  sameAs: ["https://www.facebook.com/Preme.medicina"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Colón 795 (esq. Urquiza)",
    addressLocality: "Córdoba",
    addressRegion: "Córdoba",
    addressCountry: "AR"
  },
  areaServed: "AR",
  contactPoint: [{
    "@type": "ContactPoint",
    telephone: "+54-810-777-7997",
    contactType: "customer service",
    areaServed: "AR",
    availableLanguage: ["Spanish"]
  }]
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PREME Salud",
  url: "https://www.preme.com.ar",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.preme.com.ar/buscar?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="text-gray-900">
        {children}
        <Script id="jsonld-org" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Script id="jsonld-website" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </body>
    </html>
  );
}