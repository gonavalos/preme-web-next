// /app/components/MapCard.tsx
"use client";

type MapCardProps = {
  title?: string;
  address: string;
  query: string; // nombre + dirección para la búsqueda
  className?: string;
  variant?: "sidebar" | "wide"; // ⇐ NUEVO
};

export default function MapCard({
  title = "Cómo llegar",
  address,
  query,
  className,
  variant = "sidebar",
}: MapCardProps) {
  const q = encodeURIComponent(query);
  const addr = encodeURIComponent(address);

  const mapHeight =
    variant === "wide" ? "h-[380px] md:h-[460px]" : "h-[320px]";

  return (
    <div
      className={[
        "rounded-2xl border border-black/10 bg-white overflow-hidden",
        className,
      ].join(" ")}
    >
      {/* Encabezado */}
      <div className="px-6 pt-5">
        <h3 className="text-lg font-semibold text-[#092f57]">
          {variant === "wide" ? "Nuestra sede" : title}
        </h3>
        <p className="mt-1 text-sm text-gray-700">{address}</p>
      </div>

      {/* Mapa embebido */}
      <div className={`mt-4 w-full ${mapHeight}`}>
        <iframe
          title="Mapa PREME"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
          src={`https://www.google.com/maps?q=${q}&output=embed`}
        />
      </div>

      {/* Acciones */}
      <div className="px-6 py-5">
        {variant === "wide" ? (
          <>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.google.com/maps/dir/?api=1&destination=${addr}`}
              className="inline-flex w-full h-12 items-center justify-center rounded-lg bg-[#33BAF0] px-4 text-white font-semibold hover:opacity-95"
            >
              Cómo llegar
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://maps.google.com/?q=${q}`}
              className="mt-3 block text-center text-sm text-gray-700 underline"
            >
              Abrir en Google Maps
            </a>
          </>
        ) : (
          <div className="flex flex-wrap items-center gap-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#33BAF0] px-4 py-2 text-white hover:opacity-95"
              href={`https://www.google.com/maps/dir/?api=1&destination=${addr}`}
            >
              Cómo llegar
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-gray-800 hover:bg-white"
              href={`https://maps.google.com/?q=${q}`}
            >
              Abrir en Google Maps
            </a>
          </div>
        )}
      </div>
    </div>
  );
}