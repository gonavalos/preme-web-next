// /app/components/ContactForm.tsx
"use client";

import { useState } from "react";

type FormData = {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: POST a /api/contact
    console.log("Contacto enviado:", form);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="nombre"
          value={form.nombre}
          onChange={onChange}
          required
          placeholder="Nombre y apellido"
          className="w-full rounded-lg border border-black/10 px-3 py-2"
        />
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          required
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-black/10 px-3 py-2"
        />
      </div>

      <input
        name="telefono"
        value={form.telefono}
        onChange={onChange}
        placeholder="Teléfono"
        className="w-full rounded-lg border border-black/10 px-3 py-2"
      />

      <textarea
        name="mensaje"
        value={form.mensaje}
        onChange={onChange}
        placeholder="Tu consulta"
        rows={5}
        className="w-full rounded-lg border border-black/10 px-3 py-2"
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-lg bg-[#33BAF0] px-5 py-3 text-white font-semibold hover:brightness-110"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}