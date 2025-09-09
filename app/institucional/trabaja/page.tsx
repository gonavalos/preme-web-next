// /app/institucional/trabaja/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Trabajá con nosotros | PREME",
  description: "Sumate a PREME: envianos tus datos y CV.",
};

export default function TrabajaPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 md:px-6 py-12">
      <nav className="mb-6 text-sm">
        <Link href="/institucional" className="text-[#33BAF0] hover:underline">Institucional</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Trabajá con nosotros</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-[#092f57]">Trabajá con nosotros</h1>
      <p className="mt-3 text-gray-700">
        Buscamos personas con vocación de servicio y ganas de crecer. Completá el formulario y adjuntá tu CV.
      </p>

      <form className="mt-8 space-y-5 rounded-2xl bg-white p-6 ring-1 ring-black/5"
            action="/api/jobs" method="POST" encType="multipart/form-data">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre y apellido</label>
            <input name="name" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Área de interés</label>
            <select name="area" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2">
              <option>Atención al afiliado</option>
              <option>Administración</option>
              <option>Comercial</option>
              <option>IT / Sistemas</option>
              <option>Salud (profesionales)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Adjuntar CV (PDF)</label>
            <input type="file" name="cv" accept="application/pdf" className="mt-1 w-full" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Mensaje</label>
          <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
        </div>

        <button className="rounded-lg bg-[#33BAF0] px-5 py-3 font-semibold text-white hover:opacity-95">
          Enviar
        </button>
      </form>
    </main>
  );
}