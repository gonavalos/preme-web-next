// /types/index.ts
export type Plan = {
  id: number;
  nombre: string;
  descripcion: string;
  beneficios: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;          // ruta pública /blog/xxx.png
  datePublished: string;  // ISO
  dateModified?: string;  // ISO
  author?: string;
  tags?: string[];
  contentHtml: string;    // HTML seguro/controlado
};