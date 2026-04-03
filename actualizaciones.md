# PREME Web — Log de Actualizaciones

## 2026-03-25 — Fixes Críticos (QA Audit)

### Hero Carousel — Fix superposición de slides
- **Archivo:** `app/components/Hero.tsx`
- **Cambio:** Agregado `pointer-events-none` a slides inactivos para evitar superposición de contenido
- **Cambio:** Link slide 3 "Ver beneficios" redirigido de `/beneficios` → `/planes`

### TickerBar — Teléfonos reales
- **Archivo:** `app/components/Ticketsbar.tsx`
- **Cambio:** Reemplazados teléfonos placeholder (0810-123-4567, 0800-000-PREME) por los reales del footer
- **Teléfonos:** Atención Afiliados (351) 704-0891, Autorizaciones (351) 550-3660, Prestadores (351) 594-7628, Comercialización (351) 200-6002

### Links rotos corregidos
- **Navbar:** `/autorizaciones` → `/contacto` (temporal hasta tener página propia)
- **Blog Carousel:** 3 links rotos redirigidos a `/blog`
- **Footer:** `/beneficios` → `/planes`, `/trabaja-con-nosotros` → `/institucional/trabaja`

### SEO — SearchAction removido
- **Archivo:** `app/layout.tsx`
- **Cambio:** Eliminado `potentialAction` SearchAction que apuntaba a `/buscar` (ruta inexistente)

### Página 404 custom
- **Archivo:** `app/not-found.tsx` (NUEVO)
- **Cambio:** Página 404 con branding Preme, logo, CTAs a inicio/planes/contacto

---

## 2026-03-25 — UI Upgrade Fase 1

### Componente FadeIn — Scroll Animations
- **Archivo:** `app/components/FadeIn.tsx` (NUEVO)
- **Cambio:** Componente reutilizable con Intersection Observer para animaciones fade-in al scroll
- **Opciones:** direction (up/left/right/none), delay, distance
- **Aplicado en:** Home page — secciones Planes, AppBanner, Blog

### Hover States mejorados en todas las cards
- **PlanCard:** `hover:shadow-xl hover:-translate-y-1` + transición 300ms + botón con `hover:brightness-110`
- **BlogCarousel cards:** `hover:shadow-xl hover:-translate-y-1 hover:ring-black/10`
- **BenefitsSlider:** Ya tenía hover correcto
- **Prestadores cards:** `hover:shadow-lg hover:-translate-y-0.5`
- **CTAStrip2:** Items clickeables (WhatsApp/teléfono) con `hover:bg-white/5` + links reales

### CTAStrip2 — Items ahora son links funcionales
- **Archivo:** `app/components/CTAStrip2.tsx`
- **Cambio:** WhatsApp y teléfono ahora son links `<a>` con `href` reales
- Atención Afiliados → wa.me, Información → tel:, Asesor → wa.me

### Prestadores — Ocultar teléfono vacío
- **Archivo:** `app/prestadores/page.tsx`
- **Cambio:** Campo "Tel:" solo se muestra si `p.telefono` tiene valor

### Footer — Links reales + cleanup
- **Archivo:** `app/components/Footer.tsx`
- **Cambio:** Redes sociales con URLs reales (Facebook, Instagram). Eliminado Twitter (no tiene)
- **Cambio:** Hover en iconos de redes: `hover:bg-[#33BAF0]/30 hover:scale-110`
- **Cambio:** Eliminados offsets hardcodeados (`xl:left-20`, `xl:right-10`, `xl:right-18 xl:bottom-15`)
- **SEO:** Agregado Instagram a sameAs en JSON-LD (`layout.tsx`)

### CSS cleanup
- **Archivo:** `app/globals.css`
- **Cambio:** Eliminadas reglas duplicadas de `.blog-scroll`

### Stats Bar (propuesta, desactivada)
- **Archivo:** `app/components/StatsBar.tsx` (NUEVO)
- **Estado:** Comentado en `page.tsx` — listo para activar y validar
- **Diseño:** Fondo #0D2A53, 4 contadores animados (count-up al scroll), grid 2x2 mobile / 4 cols desktop
- **Datos:** 40+ años, 2800+ prestadores, 85 especialidades, 540+ localidades

---

## 2026-03-25 — Fase 2: Hero + Conversión + Navbar

### Navbar — Rediseño completo
- **Archivo:** `app/components/Navbar.tsx` (REESCRITO)
- **Cambio:** Separación de audiencias: "Portal Prestadores" (outline, link externo a premeprepaga-consultas.com.ar) + "Afiliate ahora" (CTA primario azul)
- **Cambio:** Agregado "Blog" a los nav links
- **Cambio:** Tipografía normalizada con scale de Tailwind (text-sm, text-base)
- **Cambio:** Mobile menu mejorado con separador visual entre links y CTAs
- **Revertir:** Restaurar el Navbar anterior desde git si no gusta

### Hero — Rediseño completo
- **Archivo:** `app/components/Hero.tsx` (REESCRITO)
- **Cambio:** Texto siempre a la izquierda, sin card oscura encima de las personas
- **Cambio:** Gradiente `from-[#0D2A53]/85 via-[#0D2A53]/50 to-transparent` para proteger texto
- **Cambio:** CTAs más grandes y visibles: primario (azul) + secundario (glass/outline)
- **Cambio:** Slide promo centrado a la izquierda como card blanca con blur
- **Cambio:** Transición mejorada con translate-y además de opacity
- **Revertir:** Restaurar Hero anterior desde git si no gusta

### FAQ — Sección nueva en home
- **Archivo:** `app/components/FAQ.tsx` (NUEVO)
- **Cambio:** 6 preguntas frecuentes en acordeón con animación
- **Preguntas:** Cobertura, afiliación, familia, app, red prestadores, cobertura nacional
- **Ubicación:** Home page, antes del footer, envuelto en FadeIn

### PlanCard — Badge "Recomendado"
- **Archivo:** `app/components/PlanCard.tsx`
- **Cambio:** Nuevo prop `featured` que agrega ring azul, scale sutil y label "Recomendado" arriba
- **Aplicado:** Plan Coral marcado como `featured` en `page.tsx`

### CTAStrip2 — Fix hover
- **Archivo:** `app/components/CTAStrip2.tsx`
- **Cambio:** Reemplazado `hover:bg-white/5` por `hover:scale-[1.03]` (sin el efecto clarito)

### Revertidos (no gustaron)
- Hero rediseñado → revertido al original
- FAQ section → desactivada
- Badge "Recomendado" → desactivado
- FadeIn scroll animations → removidas del home (causaban secciones lavadas)

---

## 2026-03-25 — UI Polish (cambios incrementales)

### Blog Carousel — Mejora visual
- **Archivo:** `app/components/BlogCarousel.tsx`
- **Cambio:** Título "SALUD · BIENESTAR · CONSEJOS · NOVEDADES" → "Notas y novedades" + subtítulo
- **Cambio:** Removido logo watermark Preme (aside con logoPreme5.png)
- **Cambio:** Cards ahora con fondo blanco en vez de gradientes pastel por categoría
- **Cambio:** Botones "Ver más" uniformes (outline azul oscuro) en vez de colores por categoría
- **Cambio:** Cards ocupan todo el ancho (grid de 5 cols → bloque completo)
- **Revertir:** git checkout HEAD -- app/components/BlogCarousel.tsx

### Footer — Rediseño completo
- **Archivo:** `app/components/Footer.tsx` (REESCRITO)
- **Cambio:** Grid de 4 columnas limpio: Logo+redes, Enlaces, Contacto, Legal+medalla
- **Cambio:** Headers uppercase en gris sutil (`text-white/50 uppercase tracking-wider`)
- **Cambio:** Teléfonos con iconos WhatsApp/teléfono y links funcionales
- **Cambio:** Tagline "Medicina privada en Córdoba. +40 años cuidando tu salud."
- **Cambio:** Copyright dinámico con año actual
- **Cambio:** Sin offsets hardcodeados, layout limpio con max-w-7xl
- **Revertir:** git checkout HEAD -- app/components/Footer.tsx

### Hero — Fix definitivo superposición
- **Archivo:** `app/components/Hero.tsx`
- **Cambio:** Agregado `invisible` a slides inactivos (opacity-0 no bastaba visualmente)

### Home page — Cleanup
- **Archivo:** `app/page.tsx`
- **Cambio:** Removido `<div className="py-10">` vacío antes del footer
- **Cambio:** Removidos wrappers FadeIn de todas las secciones
