import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f8fa] px-4 text-center">
      <Image
        src="/logoPreme.png"
        alt="PREME"
        width={180}
        height={180}
        className="mb-8 h-16 w-auto"
        priority
      />

      <h1 className="text-6xl font-extrabold text-[#0D2A53]">404</h1>
      <p className="mt-3 text-xl font-semibold text-[#0D2A53]/80">
        Página no encontrada
      </p>
      <p className="mt-2 max-w-md text-gray-600">
        La página que buscás no existe o fue movida. Podés volver al inicio o
        explorar nuestros planes de salud.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-[#33BAF0] px-6 py-3 text-white font-semibold hover:bg-[#25A6DC] shadow-md transition-all"
        >
          Ir al inicio
        </Link>
        <Link
          href="/planes"
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-[#0D2A53] font-semibold ring-1 ring-[#0D2A53]/15 hover:bg-gray-50 shadow-sm transition-all"
        >
          Ver planes
        </Link>
        <Link
          href="/contacto"
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-[#0D2A53] font-semibold ring-1 ring-[#0D2A53]/15 hover:bg-gray-50 shadow-sm transition-all"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
}
