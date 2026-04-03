"use client";

const BENEFITS = [
  "Libre elección de prestadores",
  "Sin órdenes ni derivación",
  "Estudios sin autorización",
  "Autorizaciones online",
  "App Preme",
  "Atención personalizada",
];

export default function BenefitsSlider() {
  return (
    <div className="mx-auto max-w-5xl mb-10 overflow-hidden">
      <div className="flex flex-wrap justify-center items-center gap-y-2">
        {BENEFITS.map((item, i) => (
          <span key={i} className="inline-flex items-center text-sm text-[#092f57]/70 font-medium">
            {i > 0 && <span className="mx-3 text-[#33BAF0]/40">·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
