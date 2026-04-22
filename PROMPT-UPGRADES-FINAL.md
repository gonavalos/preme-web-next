# PROMPT UPGRADES — Copiar en Claude Code DESPUÉS de restaurar la versión original

Necesito que hagas upgrades puntuales a la web PREME. NO es un rediseño — es mejorar 
lo que ya tenemos con elementos específicos que quiero incorporar.

Mirá este HTML que es una referencia de diseño de Stitch (está adjunto como contexto). 
NO lo copies literalmente — tomá los conceptos y adaptalos a nuestro proyecto Next.js 
con Tailwind. Mantené nuestra estructura, nuestras rutas, nuestros datos.

## REFERENCIAS DE LO QUE ME GUSTA DEL HTML DE STITCH:

### 1. HERO GRANDE
- Me gusta el hero full-screen con imagen de fondo + overlay gradient de izq a der
- Tipografía grande bold "45 años cuidando tu salud" 
- Los counters (45+, 2.8k+, 13k+) debajo del headline
- 2 CTAs: uno sólido + uno outline blanco
- Aplicar esto a nuestro Hero.tsx actual: imagen full-screen, overlay, texto grande, counters

### 2. CARDS DE ACCESO RÁPIDO (debajo del hero)
- Las 4 cards blancas que flotan sobre el borde del hero (margin-top negativo -mt-24)
- "Quiero asociarme" / "Información de tu plan" / "Gestiones Online" / "Cartilla Médica"
- Cards blancas, shadow sutil, ícono Material Symbols + título + link con flecha
- IMPORTANTE: que sean todas blancas/limpias, NO colores random por card
- Incorporar esto como componente nuevo QuickAccess.tsx

### 3. LOGO RIBBON PRESTADORES (marquee con prioridad)
- Los logos principales (Sanatorio Allende, Hospital Italiano, Clínica Romagosa, 
  Oulton, Vélez Sarsfield) van PRIMERO y con más tiempo de visibilidad
- Después siguen los demás prestadores en marquee continuo
- Implementar como marquee CSS con velocidad variable:
  - Los primeros 5-6 logos principales: más grandes, más espacio entre ellos
  - Pausa sutil cuando un logo principal está centrado
  - Los secundarios pasan más rápido
- Texto placeholder por ahora (después reemplazo con logos PNG)
- Estilo: grayscale opacity-50, hover → color opacity-100

### 4. PROMO "OPORTUNIDAD ÚNICA" (me encanta el concepto)
- Card grande con imagen de fondo + overlay oscuro
- "30% OFF en tu plan premium" con tipografía bold
- El italic "en tu plan premium" está buenísimo como contraste tipográfico  
- CTA: "Solicitar Beneficio" botón blanco
- Aplicar esta estética a nuestra sección de promo
- Mejorar colores de letras: que el "30% OFF" sea más impactante (más grande, 
  o con el celeste #33BAF0 como acento)

### 5. PLAN CARDS CON MÁS PROTAGONISMO
- Me gusta que cada plan tenga su imagen lifestyle (joven con auriculares, 
  familia, profesional, etc.)
- Las cards más grandes, con más presencia visual
- El Plan Máximo con fondo oscuro y efecto blur/glow sutil — mantener ese concepto
- Cada card con hover: -translate-y-4 + shadow más grande
- Los botones de cada plan con el color del plan
- Mantener nuestros datos de planes.json pero con este layout visual

### 6. APP SHOWCASE (credencial)
- "Tu credencial, siempre con vos" — me gusta la jerarquía tipográfica (título grande)
- El mockup del phone con rotación sutil (-rotate-6 → rotate-0 on hover) está bueno
- Las glassmorphism floating cards (como la de "Turno Confirmado") son un buen detalle
- Las 2 cards de features (Credencial Digital + Telemedicina) con íconos → mantener
- Aplicar este upgrade a nuestro AppBanner.tsx

### 7. BLOG "VIVÍ CON BIENESTAR" — Me encanta
- El layout editorial bento: 1 artículo hero grande (col-span-8) + 2 chicos (col-span-4)
- El artículo hero con imagen de fondo + gradient overlay + texto superpuesto
- Los artículos chicos con imagen + categoría + título
- Hover: imagen scale 1.05-1.10 con transition
- Aplicar este layout a nuestro BlogCarousel.tsx

### 8. BACKGROUNDS ALTERNADOS ENTRE SECCIONES
- Me gusta cómo las secciones alternan entre blanco y un gris muy sutil
- Sección hero → blanco (cards) → gris sutil (beneficios) → blanco (planes) 
  → azul oscuro (promo) → gris (app) → blanco (blog) → azul (footer)
- Usar bg-[#f8f9fb] o bg-slate-50 para las secciones alternas

### 9. FOOTER
- Mantener nuestro footer actual pero mejorar la tipografía:
  - "PREME" en texto bold grande (no logo imagen)
  - 4 columnas limpias
  - Íconos de redes sociales circulares con hover
  - Copyright + Superintendencia abajo

## REGLAS:
- Hacé cada upgrade como commit separado
- Mobile first (430px → 1440px)
- Usá GSAP donde ya lo tengamos para las animaciones
- NO rompas rutas, APIs, ni funcionalidad existente
- Si un componente no existe, crealo. Si existe, mejoralo.
- Mantené los datos de nuestros JSONs (planes.json, posts.json, prestadores.json)
- Las imágenes del hero y las cards: usá las que ya tenemos o placeholders. 
  NO dependas de URLs externas de Google que se pueden romper.

## ORDEN DE EJECUCIÓN:
1. Hero upgrade (imagen full-screen + overlay + counters + CTAs)
2. Quick access cards (nuevo componente, -mt-24 flotando)
3. Beneficios (slider horizontal o layout editorial)
4. Logo ribbon prestadores (marquee con prioridad)
5. Plan cards upgrade (imágenes, más grandes, Máximo dark)
6. Promo "Oportunidad única" (imagen fondo + overlay + tipografía bold/italic)
7. App showcase upgrade (tipografía + phone mockup rotation + glassmorphism)
8. Blog bento layout
9. Backgrounds alternados entre secciones
10. Footer polish

Empezá por el Hero y mostrame el resultado antes de seguir.
