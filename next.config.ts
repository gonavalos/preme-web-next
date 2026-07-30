// /next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Si sólo usás /public no hace falta remotePatterns.
    // Descomentá si traés imágenes externas:
    // remotePatterns: [
    //   { protocol: "https", hostname: "tu-cdn.com" }
    // ],
  },
  async redirects() {
    return [
      // Link viejo del footer + posibles enlaces externos.
      {
        source: "/privacidad",
        destination: "/politica-de-privacidad",
        permanent: true,
      },
      // Página vieja de empleo → canónica nueva (la que linkea el footer).
      {
        source: "/institucional/trabaja",
        destination: "/trabaja-con-nosotros",
        permanent: true,
      },
    ];
  },
  // Si tu blog usa ISR:
  // experimental: { typedRoutes: true },
};
export default nextConfig;