// lib/destacados.ts — Prestadores destacados config
// Maps Gecros preId to highlight settings

type DestacadoConfig = {
  destacado: boolean;
  orden: number; // lower = higher priority
};

const DESTACADOS: Record<number, DestacadoConfig> = {
  // Sanatorio Allende (Nueva Córdoba)
  6430: { destacado: true, orden: 1 },
  // Sanatorio Allende Cerro de las Rosas
  14129: { destacado: true, orden: 1 },
  // Clínica Romagosa
  1023: { destacado: true, orden: 2 },
  // Centro Privado de Ojos Romagosa
  1136: { destacado: true, orden: 2 },
  // Clínica Reina Fabiola
  11202: { destacado: true, orden: 3 },
  // Oulton - Centro Privado Tomografía Computada
  11985: { destacado: true, orden: 4 },
};

const DEFAULT: DestacadoConfig = { destacado: false, orden: 9999 };

export function getDestacadoConfig(preId: number): DestacadoConfig {
  return DESTACADOS[preId] ?? DEFAULT;
}

export function isDestacado(preId: number): boolean {
  return DESTACADOS[preId]?.destacado ?? false;
}
