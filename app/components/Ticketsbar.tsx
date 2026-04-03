// /components/TickerBar.tsx
"use client";

const tickerItems = [
  "1ª prepaga de CBA · +40 años de trayectoria",
  "Atención Afiliados: (351) 704-0891 · Autorizaciones: (351) 550-3660",
  "Adhesión online en minutos · Cobertura nacional",
  "Atención Prestadores: (351) 594-7628 · Comercialización: (351) 200-6002",
];

export default function TickerBar() {
  return (
    <div className="w-full bg-black/35 backdrop-blur-sm text-white/90 overflow-hidden shadow-sm">
      <div className="relative h-9 md:h-10">
        <div className="absolute inset-0 flex items-center">
          <div className="whitespace-nowrap will-change-transform animate-[ticker_20s_linear_infinite]">
            {tickerItems.concat(tickerItems).map((t, i) => (
              <span
                key={`tk-${i}`}
                className="mx-8 md:mx-12 text-[12px] md:text-[14px] font-medium text-gray-100 drop-shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}