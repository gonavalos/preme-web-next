// /app/components/JobForm.tsx
"use client";

import { useState } from "react";

export default function JobForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/jobs", { method: "POST", body: data });
      if (!res.ok) throw new Error("Bad response");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-[#092f57]">Nombre y Apellido</label>
          <input name="name" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#092f57]">Email</label>
          <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#092f57]">Teléfono</label>
          <input name="phone" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-[#092f57]">Área de interés</label>
          <select name="area" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2">
            <option>Medicina</option>
            <option>Enfermería</option>
            <option>Atención al afiliado</option>
            <option>Administración</option>
            <option>Sistemas</option>
            <option>Otra</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-[#092f57]">Mensaje</label>
          <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-[#092f57]">Adjuntar CV (PDF)</label>
          <input type="file" name="cv" accept="application/pdf" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 w-full rounded-lg bg-[#33BAF0] px-5 py-3 font-semibold text-white disabled:opacity-70"
      >
        {status === "sending" ? "Enviando..." : "Enviar postulación"}
      </button>

      {status === "ok" && (
        <p className="mt-3 text-sm text-green-700">¡Gracias! Recibimos tu postulación.</p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-red-700">Hubo un error. Probá nuevamente.</p>
      )}
    </form>
  );
}