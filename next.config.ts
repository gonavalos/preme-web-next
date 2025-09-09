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
  // Si tu blog usa ISR:
  // experimental: { typedRoutes: true },
};
export default nextConfig;