// /app/components/ContactForm.tsx
"use client";

import { useMemo, useState } from "react";

type FormState = "idle" | "loading" | "ok" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string>("");

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
    hp: "", // honeypot
  });

  const disabled = useMemo(() => {
    if (state === "loading") return true;
    return !form.nombre || !form.email || !form.mensaje;
  }, [form, state]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.hp) return; // bot
    setState("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("No se pudo enviar el mensaje");
      setState("ok");
      setForm({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
        hp: "",
      });
    } catch (err: any) {
      setState("error");
      setError(err?.message || "Ocurrió un error");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-black/10 bg-white p-6"
    >
      {/* honeypot */}
      <input
        type="text"
        name="company"
        autoComplete="off"
        className="hidden"
        tabIndex={-1}
        value={form.hp}
        onChange={(e) => setForm({ ...form, hp: e.target.value })}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre y apellido
          </label>
          <input
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#33BAF0]"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#33BAF0]"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Teléfono (opcional)
          </label>
          <input
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#33BAF0]"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Asunto
          </label>
          <input
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#33BAF0]"
            value={form.asunto}
            onChange={(e) => setForm({ ...form, asunto: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Mensaje
        </label>
        <textarea
          rows={5}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#33BAF0]"
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          required
        />
      </div>

      <div className="pt-2">
        <button
          disabled={disabled}
          className="inline-flex items-center justify-center rounded-lg bg-[#33BAF0] px-5 py-3 font-semibold text-white hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "loading" ? "Enviando..." : "Enviar mensaje"}
        </button>
        {state === "ok" && (
          <span className="ml-3 text-sm text-emerald-600">
            ¡Gracias! Te contactaremos pronto.
          </span>
        )}
        {state === "error" && (
          <span className="ml-3 text-sm text-rose-600">{error}</span>
        )}
      </div>
    </form>
  );
}