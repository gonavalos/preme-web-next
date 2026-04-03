# PREME Web — Upgrade a Web Premium 2026

## Contexto del proyecto
- **Repo:** `preme-web-next` (Next.js + Tailwind CSS, desplegado en Vercel)
- **URL actual:** https://preme-web-next.vercel.app/
- **Dominio final:** preme.com.ar (o similar)
- **Stack:** Next.js 14/15 + App Router + Tailwind CSS + TypeScript
- **API backend:** Gecros API en `http://186.189.234.37:84`, auth OAuth2 `/connect/token` con `client_id=gecros`
- **Identidad:** Mantener paleta actual de PREME (azules, verdes, colores de cada plan) pero modernizar dentro de la misma gama

## Datos reales de PREME (para contenido del sitio)
- **Fundación:** 1981 — **45 años de trayectoria**
- **Origen:** Asociación de Clínicas, Sanatorios y Hospitales Privados de Córdoba
- **Slogan actual:** "La primera prepaga de Córdoba pensada para los cordobeses"
- **Planes:** Joven, Coral, Integral, Máximo
- **App mobile:** iOS y Android (Gecros Mobile PREME)
- **Ubicación:** Av. Colón 795 (esq. Urquiza), Córdoba
- **RNEMP:** 113236
- **Instagram:** @prememedicina (399 posts)

---

# FASE 1 — GSAP + UI REFRESH (Fundaciones)

## Objetivo
Transformar el sitio de "funcional" a "premium 2026" sin tocar datos ni APIs. Solo visual, animaciones y UX.

## 1.1 Instalar GSAP Skills

### Instrucciones para Claude Code:
```
1. Cloná el repo de GSAP skills: https://github.com/greensock/gsap-skills
2. Copiá el contenido del CLAUDE.md de ese repo a tu contexto — tiene las best practices oficiales de GSAP
3. Instalá GSAP en el proyecto:
   npm install gsap
4. Creá un hook reutilizable `src/hooks/useGSAP.ts` que maneje el cleanup de animaciones
5. Creá un componente wrapper `src/components/ui/AnimateOnScroll.tsx` que use ScrollTrigger 
   para reveal al scroll (fade-in + slide-up suave)
6. IMPORTANTE: seguí las reglas del GSAP skills — no uses CSS transitions donde GSAP timeline es mejor,
   no animes layout properties (width/height), usá transform y opacity
```

## 1.2 Navbar Upgrade

### Estado actual:
- Navbar con logo, links, botón autorizaciones y "Afiliate ahora"
- Funcional pero plana, sin efecto al scroll

### Instrucciones para Claude Code:
```
Mejorar la navbar existente:

1. EFECTO GLASSMORPHISM al scroll: cuando el usuario scrollea más de 50px, la navbar 
   debe tener backdrop-blur-md, bg-white/80 (o bg-black/80 en dark mode si aplica), 
   y una sutil sombra. Transición suave con GSAP.

2. El logo debe reducirse sutilmente al scroll (scale 1 → 0.85) con GSAP

3. El botón "Afiliate ahora" debe tener un efecto de hover premium:
   - Gradient shift on hover (dentro de la gama PREME)
   - Escala sutil (1 → 1.03)
   - Transición de sombra

4. Mobile: hamburger menu con animación de apertura fluida (GSAP timeline, 
   no CSS transition). Los links del menú deben aparecer con stagger (uno tras otro, 
   50ms delay entre cada uno).

5. NO cambiar la estructura de navegación ni los links existentes
```

## 1.3 Hero Section Upgrade

### Estado actual:
- Carousel de 3 imágenes estáticas
- Sin texto animado, sin efecto parallax

### Instrucciones para Claude Code:
```
Upgrade del hero en la home page:

1. PARALLAX: Las imágenes del hero deben tener un efecto parallax sutil al scroll 
   (la imagen se mueve más lento que el contenido). Usar GSAP ScrollTrigger con 
   scrub: true.

2. TEXTO HERO: El texto principal ("¿Querés adherirte a Preme?") debe animarse 
   al entrar: cada línea aparece con un fade-in + translateY(20px → 0) con stagger.
   Usar GSAP SplitText si está disponible, sino animar por elemento.

3. CTA BUTTON: El botón "Afiliate ahora" del hero debe tener:
   - Entrada animada (aparece 200ms después del texto)
   - Efecto de "pulse" sutil continuo (scale 1 → 1.02 → 1, loop suave)
   - Hover: gradient shift + shadow elevación

4. TRANSITION entre slides: Si hay carousel, que la transición sea un crossfade 
   suave (opacity, no slide horizontal) con GSAP.

5. OVERLAY GRADIENT: Agregar un gradient overlay sobre las imágenes del hero 
   para que el texto sea siempre legible (gradient de abajo hacia arriba, 
   del color primario PREME al transparente).
```

## 1.4 Cards de Planes — Upgrade

### Estado actual:
- Cards estáticas con imagen, título, bullets, botón "Ver detalles"
- Badge de "Más popular" / "Premium" estáticos

### Instrucciones para Claude Code:
```
Upgrade de las cards de planes en home y en /planes:

1. REVEAL AL SCROLL: Cada card aparece con ScrollTrigger, con stagger entre ellas 
   (primera card, 100ms después la segunda, etc). Animación: opacity 0→1 + 
   translateY(40px → 0).

2. HOVER EFFECT: Al hover, la card debe:
   - Elevarse (translateY -4px)
   - Aumentar shadow (shadow-lg → shadow-2xl)
   - El borde debe brillar sutilmente con el color del plan correspondiente
   - Transición fluida de 300ms

3. BADGE ANIMADO: Los badges ("Más popular", "Premium", etc) deben tener un 
   efecto shimmer sutil (un brillo que recorre de izquierda a derecha, loop cada 3s).

4. ICONOS: Reemplazar los bullets (•) por iconos de Lucide React o similar que 
   representen cada beneficio (check, shield, heart, stethoscope, etc).

5. Mantener los colores actuales de cada plan pero intensificarlos ligeramente 
   para más contraste y modernidad.
```

## 1.5 Social Proof — Sección Nueva

### Estado actual:
No existe. Solo dice "1ª prepaga de CBA - +40 años" en un badge chico.

### Instrucciones para Claude Code:
```
Crear una NUEVA sección de social proof en el home, entre el hero y los planes:

1. LAYOUT: Fila horizontal de 3-4 counters animados. Centrada, con padding generoso.

2. COUNTERS (usar números reales):
   - "45+" — "Años cuidando Córdoba" (fundación 1981)
   - "2.800+" — "Prestadores en cartilla" (dato real de Gecros: 2,896)
   - "13.000+" — "Afiliados activos" (dato de Gecros: 13,408 agentes de cuenta)
   - "4" — "Planes a tu medida"

3. ANIMACIÓN: Los números deben contar desde 0 hasta el valor final con 
   GSAP ScrollTrigger (se activa cuando la sección entra en viewport).
   Duración: 2 segundos, ease: power2.out.

4. DISEÑO: Fondo sutil diferenciado (un tono más claro o un gradiente muy suave 
   del primario PREME). Cada counter con icono arriba (Lucide React).

5. En mobile: 2x2 grid en vez de row.
```

## 1.6 Sección de Teléfonos / Contacto — Rediseño

### Estado actual:
Teléfonos de contacto tirados en una lista sin diseño entre el hero y los planes.

### Instrucciones para Claude Code:
```
Rediseñar la sección de teléfonos de contacto rápido:

1. CONVERTIR en cards compactas con ícono + label + número
2. Cada card clickeable (tel: link en mobile)
3. Layout: grid 2x2 en desktop, stack en mobile
4. Iconos: Phone, AlertCircle (urgencias), Users (afiliados), Briefcase (comercial)
5. Estilo: borde sutil, hover con elevación leve
6. La de URGENCIAS (ECCO) debe tener un destaque visual (borde rojo/naranja sutil)
7. Reveal con ScrollTrigger (stagger)
```

## 1.7 Credencial Digital — Upgrade

### Estado actual:
Sección con mockup de la app y bullets de features. Funcional pero estática.

### Instrucciones para Claude Code:
```
Upgrade de la sección de credencial digital:

1. El mockup de la app debe tener un efecto de flotación sutil 
   (translateY oscilando ±8px, loop infinito suave con GSAP)

2. Los bullets de features deben aparecer con stagger al scroll

3. Los botones de App Store / Google Play deben tener hover con 
   escala sutil y shadow

4. Considerar agregar un efecto de "glow" detrás del mockup con 
   el color primario de PREME (un blur grande y sutil)
```

## 1.8 Footer — Polish

### Instrucciones para Claude Code:
```
Polish del footer:

1. Agregar wave SVG o gradient de transición entre el contenido y el footer
2. Links con hover underline animado (width 0% → 100% de izquierda a derecha)
3. Agregar íconos de redes sociales (Instagram @prememedicina, etc)
4. El badge de Superintendencia debe ser más visible y profesional
5. Copyright: "© 2026 PREME Salud — Medicina Privada. Todos los derechos reservados."
```

## 1.9 Mejoras Globales de UI

### Instrucciones para Claude Code:
```
Aplicar estos cambios globales a todo el sitio:

1. SCROLL SUAVE: Agregar scroll-behavior: smooth al html, o mejor aún, 
   usar Lenis (librería de smooth scroll) si el bundle lo permite.

2. PAGE TRANSITIONS: Al navegar entre páginas, un fade sutil 
   (opacity transition en el layout principal).

3. LOADING STATE: Un loader sutil al cargar la app (logo PREME que 
   aparece y desaparece con fade).

4. TIPOGRAFÍA: Revisar que la tipografía sea consistente en todo el sitio.
   Si usan una font custom, asegurarse de que cargue correctamente.
   Considerar usar una font premium como "Plus Jakarta Sans" o "Outfit" 
   si no tienen una definida — PERO mantener coherencia con la identidad PREME.

5. SPACING: Revisar que haya suficiente breathing room entre secciones.
   Mínimo 80px de padding vertical entre secciones en desktop, 48px en mobile.

6. FOCUS STATES: Todos los elementos interactivos deben tener focus states 
   accesibles (outline con color PREME).

7. META TAGS + OG: Revisar que cada página tenga title, description, 
   og:image correctos. Esto importa para cuando se comparta en WhatsApp/redes.
```

---

# FASE 2 — PRESTADORES (API Gecros + UI) — SIGUIENTE ITERACIÓN

## A definir cuando Fase 1 esté aprobada:
- Completar conexión a Gecros API `/api/prestadores/` 
- Sistema de "destacados" (flag configurable)
- Filtro por plan (Joven/Coral/Integral/Máximo)
- Cards de prestadores con foto placeholder, especialidad, dirección
- Mapa con geolocalización (Google Maps o Leaflet)
- Buscador con autocomplete

---

# FASE 3 — BLOG + CONTENIDO — SIGUIENTE ITERACIÓN

## A definir:
- Migrar contenido validado de Instagram @prememedicina
- Generar 10-15 artículos con IA (temas de salud, bienestar, prevención)
- Diseño magazine-style del blog
- Imágenes stock/IA de alta calidad
- SEO on-page

---

# FASE 4 — POLISH + DEPLOY — SIGUIENTE ITERACIÓN

## A definir:
- Lighthouse score 90+
- Configurar dominio preme.com.ar en Vercel
- Analytics (Google Analytics 4 o Vercel Analytics)
- OG images para cada página
- Sitemap.xml + robots.txt

---

# NOTAS IMPORTANTES PARA CLAUDE CODE

1. **NO romper nada que funcione.** Antes de tocar un componente, entender qué hace.
2. **GSAP Skills:** Leer el CLAUDE.md de https://github.com/greensock/gsap-skills ANTES de escribir animaciones.
3. **Mobile first:** Todo cambio debe verse perfecto en mobile (iPhone 16 Pro Max = 430px viewport).
4. **Performance:** GSAP ScrollTrigger puede ser pesado si se abusa. Usar will-change solo donde sea necesario. Lazy load las animaciones que no están en viewport.
5. **Mantener la paleta PREME:** No inventar colores nuevos. Modernizar dentro de la gama existente.
6. **Commits granulares:** Un commit por feature/sección, no un mega-commit con todo.
7. **Testing:** Después de cada cambio, verificar en viewport 430px (mobile) y 1440px (desktop).
