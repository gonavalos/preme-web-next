import PhoneMock from "./PhoneMock";
import { FaCheck } from "react-icons/fa";

const feats = [
  "Credencial digital en tu celular",
  "Cartilla con geolocalización",
  "Autorizaciones al instante",
  "Turnos y cuenta corriente 24/7",
];

export default function AppBanner() {
  return (
    <section id="app-preme" className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid gap-14 md:gap-20 lg:gap-28 md:grid-cols-[minmax(280px,340px)_1fr] items-center">
        {/* Texto — primero en mobile, segundo en desktop */}
        <div className="order-2 md:order-2 md:pl-4 lg:pl-8">
          {/* Kicker */}
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-[#33BAF0]" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#33BAF0]">
              App PREME
            </span>
          </div>

          {/* Título */}
          <h2 className="font-extrabold text-[#092f57] leading-[1.05] tracking-tight text-balance mb-5 text-[clamp(2.25rem,5vw,3.75rem)]">
            Tu salud en{" "}
            <em className="font-medium italic text-[#33BAF0] [font-family:Georgia,serif]">
              la palma de tu mano.
            </em>
          </h2>

          <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
            Gestioná todo desde un solo lugar. Sin llamadas, sin papeles, sin
            esperas.
          </p>

          {/* Features list */}
          <ul className="space-y-3 mb-8">
            {feats.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 text-[16px] sm:text-[17px] text-[#092f57]"
              >
                <FaCheck className="mt-1 shrink-0 text-xs text-emerald-500" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* Store pills — full-width en mobile */}
          <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3">
            <a
              href="https://apps.apple.com/ar/app/preme/id1546369328"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Descargar en App Store"
              className="inline-flex items-center justify-center sm:justify-start gap-3 bg-[#092f57] text-white px-5 py-3 rounded-xl hover:bg-[#0a3d6e] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left leading-tight">
                <div className="text-[10px] opacity-70">Descargá en</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=ar.com.gloui.gecros_mobile_preme"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Descargar en Google Play"
              className="inline-flex items-center justify-center sm:justify-start gap-3 bg-[#092f57] text-white px-5 py-3 rounded-xl hover:bg-[#0a3d6e] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7">
                <path
                  fill="#EA4335"
                  d="M3.09 20.5l9.5-9.5L3.5 2.5A1.5 1.5 0 0 0 3 3.5v17a1.5 1.5 0 0 0 .09.5z"
                />
                <path
                  fill="#FBBC04"
                  d="M17.5 12l-4.91-1-9.5 9.5c.14.15.39.25.69.25a.9.9 0 0 0 .43-.11l14-8z"
                />
                <path
                  fill="#34A853"
                  d="M21.5 10.4l-4-2.4-4.91 4 4.91 4 4-2.4a1.5 1.5 0 0 0 0-2.7z"
                />
                <path
                  fill="#4285F4"
                  d="M13.09 12l-9.5-9.5a.9.9 0 0 0-.09-.01 1.5 1.5 0 0 0-.5.1l13 7.41-4.91 2z"
                />
              </svg>
              <div className="text-left leading-tight">
                <div className="text-[10px] opacity-70">Descargá en</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* Mockup — primero en mobile (arriba), primero en desktop (izquierda) */}
        <div className="order-1 md:order-1 flex justify-center">
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}
