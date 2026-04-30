export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  more: string;
  image: string;
  category: "salud" | "bienestar" | "consejos" | "novedades";
  date: string;
  reading: string;
  author: string;
  content: string;
  hasCustomPage?: boolean;
  imageNeedsReplacement?: boolean;
};

export const articles: BlogArticle[] = [
  // ─── 1. Chequeos preventivos (oldest) ─────────────────────────────
  {
    slug: "chequeos-preventivos",
    title: "Chequeos preventivos clave: tu guía según la edad",
    excerpt: "Detectar a tiempo reduce riesgos y mejora resultados.",
    more: "Guía simple de estudios anuales según edad y antecedentes.",
    image: "/assets/blog/blog1.png",
    category: "salud",
    date: "2025-10-22",
    reading: "5 min",
    author: "Equipo PREME",
    content: `
<h2>La prevención es tu mejor inversión</h2>
<p>Muchas enfermedades graves pueden detectarse a tiempo con estudios simples y accesibles. Sin embargo, una gran parte de la población posterga los controles de rutina hasta que aparecen síntomas. La realidad es que cuanto antes se detecta un problema, más opciones de tratamiento tenés y mejores son los resultados.</p>

<h3>De los 18 a los 30 años</h3>
<p>Aunque te sientas invencible, este es el momento de establecer tu línea de base. Los estudios recomendados incluyen:</p>
<ul>
  <li><strong>Hemograma completo y perfil lipídico</strong> cada dos años como mínimo.</li>
  <li><strong>Control de presión arterial</strong> al menos una vez al año.</li>
  <li><strong>Control ginecológico anual</strong> con PAP y colposcopía para mujeres.</li>
  <li><strong>Control dermatológico</strong> si tenés muchos lunares o antecedentes familiares.</li>
</ul>

<h3>De los 30 a los 45 años</h3>
<p>Los factores de riesgo empiezan a pesar más. Sumá a los anteriores:</p>
<ul>
  <li><strong>Glucemia en ayunas</strong> para descartar diabetes.</li>
  <li><strong>Control oftalmológico</strong> cada uno o dos años.</li>
  <li><strong>Ecografía mamaria o mamografía</strong> según indicación médica a partir de los 35-40.</li>
  <li><strong>Evaluación cardiovascular</strong> si tenés antecedentes familiares.</li>
</ul>

<h3>De los 45 a los 60 años</h3>
<p>La frecuencia de los estudios aumenta y se suman controles específicos:</p>
<ul>
  <li><strong>Colonoscopía</strong> a partir de los 50 (o antes si hay antecedentes).</li>
  <li><strong>Densitometría ósea</strong> para mujeres posmenopáusicas.</li>
  <li><strong>Ergometría o prueba de esfuerzo</strong> según indicación del cardiólogo.</li>
  <li><strong>PSA</strong> en varones a partir de los 50, evaluando con el urólogo.</li>
</ul>

<h3>Más de 60 años</h3>
<p>Los controles se vuelven más frecuentes, pero no tienen por qué ser complicados. Mantené al día las consultas con tu médico de cabecera y los estudios de imágenes que te indiquen.</p>

<h3>Un consejo práctico</h3>
<p>Elegí un mes del año como tu "mes de chequeos" y agendá todo junto. Así no se te pasa.</p>

<p><strong>En PREME cubrimos tus estudios preventivos con la cartilla más amplia de Córdoba.</strong> Consultá con tu médico de cabecera y empezá tu rutina de prevención hoy.</p>
`,
  },

  // ─── 2. Grasas saludables ──────────────────────────────────────────
  {
    slug: "grasas-saludables",
    title: "Grasas saludables: dónde encontrarlas y cómo sumarlas a tu semana",
    excerpt: "Las grasas buenas cuidan tu corazón y tu cerebro.",
    more: "Dónde encontrarlas y cómo sumarlas a tu semana sin complicaciones.",
    image: "/assets/blog/grasas-saludables/1.png",
    category: "bienestar",
    date: "2025-11-08",
    reading: "4 min",
    author: "Equipo PREME",
    hasCustomPage: true,
    content: `
<h2>No todas las grasas son el enemigo</h2>
<p>Durante años se demonizó a las grasas, pero hoy la ciencia es clara: las grasas insaturadas son aliadas de tu salud cardiovascular, tu cerebro y tu sistema hormonal. La clave está en elegir las correctas.</p>

<h3>Grasas que sí querés en tu plato</h3>
<ul>
  <li><strong>Palta:</strong> rica en ácido oleico, fibra y potasio. Media palta al día es una gran opción.</li>
  <li><strong>Aceite de oliva extra virgen:</strong> ideal para aderezar en crudo. Usalo en ensaladas y tostadas.</li>
  <li><strong>Frutos secos:</strong> nueces, almendras y castañas de cajú aportan omega-3 y vitamina E.</li>
  <li><strong>Semillas:</strong> chía, lino y girasol. Agregalas a yogures, licuados o ensaladas.</li>
  <li><strong>Pescados grasos:</strong> salmón, caballa, sardinas. Intentá comer pescado al menos dos veces por semana.</li>
</ul>

<h3>Grasas que conviene reducir</h3>
<p>Las grasas trans (presentes en productos ultraprocesados, galletitas y margarinas duras) son las realmente perjudiciales. Revisá las etiquetas y priorizá alimentos con ingredientes que puedas reconocer.</p>

<h3>Ideas prácticas para tu semana</h3>
<ul>
  <li><strong>Desayuno:</strong> tostada integral con palta y semillas de sésamo.</li>
  <li><strong>Media mañana:</strong> un puñado de nueces (unas 7-10 unidades).</li>
  <li><strong>Almuerzo:</strong> ensalada con aceite de oliva y salmón rosado.</li>
  <li><strong>Merienda:</strong> yogur natural con semillas de chía.</li>
</ul>

<h3>¿Cuánta grasa necesitás?</h3>
<p>Las grasas deberían representar entre el 25% y el 35% de tus calorías diarias, priorizando las insaturadas. No se trata de contar cada gramo, sino de hacer elecciones inteligentes en el supermercado y la cocina.</p>

<p><strong>En PREME te acompañamos con nutricionistas dentro de la cartilla para que armes un plan alimentario que funcione para vos.</strong></p>
`,
  },

  // ─── 3. Descanso reparador ─────────────────────────────────────────
  {
    slug: "descanso-reparador",
    title: "Descanso reparador: dormí mejor, viví mejor",
    excerpt: "El descanso de calidad impacta en energía y ánimo.",
    more: "Rutina previa, temperatura, luz y horarios recomendados.",
    image: "/assets/blog/descanso-reparador/h1.png",
    category: "consejos",
    date: "2025-12-01",
    reading: "4 min",
    author: "Equipo PREME",
    hasCustomPage: true,
    content: `
<h2>Dormir bien no es un lujo, es una necesidad</h2>
<p>El sueño reparador es tan importante como la alimentación y el ejercicio. Sin embargo, más del 40% de los argentinos reporta algún problema para dormir. Las consecuencias van mucho más allá del cansancio: afectan la concentración, el humor, el sistema inmunológico y hasta el peso.</p>

<h3>¿Cuántas horas necesitás?</h3>
<p>Para adultos, la recomendación general es entre 7 y 9 horas. Pero la calidad importa tanto como la cantidad: si dormís 8 horas pero te despertás varias veces, el descanso no es el mismo.</p>

<h3>Tu rutina previa al sueño</h3>
<ul>
  <li><strong>Desconectá pantallas</strong> al menos 30 minutos antes de acostarte. La luz azul inhibe la melatonina.</li>
  <li><strong>Mantené horarios regulares:</strong> acostarte y levantarte a la misma hora, incluso los fines de semana.</li>
  <li><strong>Cená liviano</strong> y al menos dos horas antes de dormir.</li>
  <li><strong>Evitá la cafeína</strong> después de las 16:00.</li>
</ul>

<h3>El ambiente ideal</h3>
<ul>
  <li><strong>Temperatura:</strong> entre 18°C y 22°C es lo ideal.</li>
  <li><strong>Oscuridad:</strong> usá cortinas blackout si entra luz de la calle.</li>
  <li><strong>Silencio:</strong> si hay ruido externo, probá con tapones o sonidos blancos.</li>
  <li><strong>Colchón y almohada:</strong> revisá que estén en buen estado. Se recomienda cambiar el colchón cada 8-10 años.</li>
</ul>

<h3>Señales de alerta</h3>
<p>Si a pesar de seguir estas pautas seguís durmiendo mal, roncás fuerte, o sentís somnolencia excesiva durante el día, es momento de consultar con un especialista en sueño.</p>

<p><strong>En PREME contás con especialistas en medicina del sueño dentro de tu cobertura. No dejes pasar un problema que tiene solución.</strong></p>
`,
  },

  // ─── 4. Cerebro joven ─────────────────────────────────────────────
  {
    slug: "cerebro-joven",
    title: "Cerebro joven y ágil: hábitos que mantienen tu mente activa",
    excerpt: "Hábitos simples que mantienen tu mente activa.",
    more: "Ejercicios, descanso y alimentación que favorecen la memoria.",
    image: "/assets/blog/cerebro-joven-agil/1.png",
    category: "salud",
    date: "2025-12-15",
    reading: "3 min",
    author: "Equipo PREME",
    content: `
<h2>Tu cerebro también se entrena</h2>
<p>El cerebro es un órgano plástico: se adapta y se fortalece con el uso. Así como ejercitás el cuerpo, podés ejercitar tu mente para mantenerla ágil a cualquier edad. Y los beneficios se notan en la memoria, la concentración y hasta en el estado de ánimo.</p>

<h3>Hábitos que hacen la diferencia</h3>
<ul>
  <li><strong>Lectura diaria:</strong> aunque sean 15 minutos al día, leer estimula conexiones neuronales.</li>
  <li><strong>Aprender algo nuevo:</strong> un idioma, un instrumento, una habilidad manual. La novedad es el mejor ejercicio cerebral.</li>
  <li><strong>Juegos mentales:</strong> crucigramas, sudoku, ajedrez o rompecabezas mantienen la agilidad cognitiva.</li>
  <li><strong>Socializar:</strong> las conversaciones y los vínculos sociales son potentes estimuladores cognitivos.</li>
</ul>

<h3>El rol de la alimentación</h3>
<p>Ciertos nutrientes favorecen la función cerebral:</p>
<ul>
  <li><strong>Omega-3:</strong> presente en pescados grasos, nueces y semillas de chía.</li>
  <li><strong>Antioxidantes:</strong> frutos rojos, chocolate amargo, cúrcuma.</li>
  <li><strong>Vitaminas del grupo B:</strong> legumbres, huevos, verduras de hoja verde.</li>
</ul>

<h3>Movimiento y descanso</h3>
<p>El ejercicio aeróbico aumenta el flujo sanguíneo al cerebro y promueve la formación de nuevas neuronas. Y como vimos en notas anteriores, el sueño reparador es cuando el cerebro consolida la memoria y elimina toxinas.</p>

<h3>Lo que conviene evitar</h3>
<p>El estrés crónico, el sedentarismo, el consumo excesivo de alcohol y el aislamiento social son enemigos silenciosos de tu salud cognitiva.</p>

<p><strong>En PREME creemos que cuidar la mente es cuidar la salud integral. Consultá con tu médico de cabecera sobre cómo mantener tu cerebro en forma.</strong></p>
`,
  },

  // ─── 5. Atención digital ──────────────────────────────────────────
  {
    slug: "atencion-digital",
    title: "Novedades en atención digital: tu salud en un click",
    excerpt: "Turnos online y credencial digital en tu celular.",
    more: "Tecnología que simplifica la experiencia en salud.",
    image: "/assets/blog/blog3.png",
    category: "novedades",
    date: "2026-01-05",
    reading: "2 min",
    author: "PREME Digital",
    content: `
<h2>Tu salud, más cerca que nunca</h2>
<p>En PREME estamos transformando la manera en que interactuás con tu obra social. Sabemos que tu tiempo vale, por eso estamos incorporando herramientas digitales que simplifican cada paso.</p>

<h3>Credencial digital</h3>
<p>Ya no necesitás llevar la credencial física. Desde la app de PREME podés acceder a tu credencial digital en cualquier momento, mostrarla en la farmacia, en el consultorio o en la guardia. También podés compartirla con tu grupo familiar.</p>

<h3>Turnos online</h3>
<p>Estamos trabajando en un sistema de turnos online para que puedas reservar tu consulta desde el celular, sin llamar por teléfono y sin esperas. Elegís especialidad, profesional, día y horario desde donde estés.</p>

<h3>Autorizaciones más ágiles</h3>
<p>Los trámites de autorización se están simplificando: muchas prácticas ya no requieren autorización previa, y las que sí la necesitan se gestionan de forma más rápida a través de canales digitales.</p>

<h3>¿Qué viene?</h3>
<p>Seguimos sumando funciones para que gestionar tu salud sea cada vez más fácil. Geolocalización de prestadores, historial de consultas y más novedades que te vamos a ir contando.</p>

<p><strong>En PREME apostamos por la innovación para acercarte una experiencia de salud moderna y sin complicaciones.</strong></p>
`,
  },

  // ─── 6. Vacunación adultos ────────────────────────────────────────
  {
    slug: "vacunacion-adultos",
    title: "Vacunación al día: qué vacunas necesitás después de los 18",
    excerpt: "El calendario de vacunación no termina en la infancia.",
    more: "Cuáles son obligatorias, dónde aplicarlas y qué cubre PREME.",
    image: "/assets/blog/articles/AdobeStock_324878701.jpeg",
    category: "salud",
    date: "2026-01-20",
    reading: "6 min",
    author: "Equipo PREME",
    imageNeedsReplacement: true,
    content: `
<h2>Las vacunas no son solo para chicos</h2>
<p>Existe una idea bastante extendida de que las vacunas son cosa de la infancia. Pero la realidad es que el calendario nacional de vacunación incluye vacunas específicas para adultos que son fundamentales para prevenir enfermedades graves. Tenerlas al día es una de las decisiones más simples y efectivas que podés tomar por tu salud.</p>

<p>En Argentina, el Ministerio de Salud de la Nación establece un calendario de vacunación gratuito y obligatorio que incluye vacunas para todas las etapas de la vida. Repasemos cuáles son las más importantes para los adultos.</p>

<h3>Antigripal: todos los años, sin excepción</h3>
<p>La vacuna antigripal se aplica cada año, generalmente entre marzo y mayo, antes de que arranque la temporada de gripe. Está especialmente indicada para:</p>
<ul>
  <li>Personas mayores de 65 años.</li>
  <li>Embarazadas y puérperas.</li>
  <li>Personal de salud.</li>
  <li>Personas de 2 a 64 años con factores de riesgo (enfermedades respiratorias, cardíacas, diabetes, obesidad, entre otras).</li>
</ul>
<p>Pero incluso si no estás en grupo de riesgo, vacunarte reduce la posibilidad de contagio y protege a quienes te rodean. En PREME cubrimos la vacuna antigripal para todos los afiliados.</p>

<h3>Doble adultos (dT): cada 10 años</h3>
<p>Protege contra difteria y tétanos. Si no recordás cuándo fue tu última dosis, es motivo suficiente para consultar con tu médico. El tétanos es una enfermedad prevenible que todavía causa muertes evitables. La dosis de refuerzo se aplica cada 10 años de por vida.</p>

<h3>Hepatitis B: si no completaste el esquema</h3>
<p>El esquema completo de hepatitis B consta de tres dosis. Si naciste antes de que la vacuna fuera obligatoria en la infancia (antes de los 2000 aproximadamente), es probable que no la tengas. La hepatitis B se transmite por sangre y fluidos corporales y puede causar cirrosis y cáncer de hígado. La buena noticia: es gratuita y está disponible en todos los vacunatorios públicos.</p>

<h3>Triple viral (sarampión, rubéola, paperas)</h3>
<p>Si naciste después de 1965 y no tenés dos dosis documentadas, necesitás completar el esquema. El sarampión puede tener complicaciones serias en adultos, y Argentina ha tenido brotes importados en los últimos años.</p>

<h3>COVID-19: seguí las recomendaciones vigentes</h3>
<p>Las recomendaciones sobre vacunación contra COVID-19 se actualizan periódicamente. Consultá con tu médico cuál es el esquema recomendado actualmente según tu edad y condición de salud. En PREME cubrimos las dosis indicadas por el calendario oficial.</p>

<h3>Fiebre amarilla</h3>
<p>Si viajás a zonas endémicas (norte argentino, Brasil, algunos países de África), necesitás una dosis única que te protege de por vida. Se aplica en centros autorizados y conviene hacerla al menos 10 días antes del viaje.</p>

<h3>Neumococo y herpes zóster: para mayores de 65</h3>
<p>La vacuna contra el neumococo previene neumonía y meningitis. El herpes zóster (culebrilla) puede causar dolor intenso y prolongado, y la vacuna reduce significativamente ese riesgo en mayores de 50 años.</p>

<h3>Mitos que hay que desterrar</h3>
<ul>
  <li><strong>"Si estoy sano no necesito vacunas":</strong> las vacunas previenen, no curan. Justamente hay que aplicarlas cuando estás sano.</li>
  <li><strong>"Las vacunas dan la enfermedad":</strong> las vacunas actuales usan virus inactivados o fragmentos. No pueden causar la enfermedad.</li>
  <li><strong>"Ya me vacuné de chico, estoy cubierto":</strong> la inmunidad de algunas vacunas disminuye con el tiempo. Por eso existen los refuerzos.</li>
</ul>

<h3>¿Dónde vacunarte en Córdoba?</h3>
<p>Podés acudir a los vacunatorios públicos de la provincia, que aplican todas las vacunas del calendario nacional de forma gratuita. También podés vacunarte en centros privados de tu cartilla PREME. Consultá disponibilidad en la app o llamando a nuestra central de atención.</p>

<p><strong>En PREME te acompañamos para que tengas todas tus vacunas al día. Consultá con tu médico de cabecera y revisá tu carnet: estar protegido es más fácil de lo que pensás.</strong></p>
`,
  },

  // ─── 7. Hipertensión ──────────────────────────────────────────────
  {
    slug: "hipertension-prevencion",
    title: "Hipertensión: el enemigo silencioso que podés controlar",
    excerpt: "La presión alta no avisa, pero podés prevenirla.",
    more: "Factores de riesgo, cómo medirla y cuándo consultar.",
    image: "/assets/blog/articles/AdobeStock_1732968061.jpeg",
    category: "salud",
    date: "2026-02-03",
    reading: "5 min",
    author: "Equipo PREME",
    imageNeedsReplacement: true,
    content: `
<h2>Un problema más común de lo que pensás</h2>
<p>La hipertensión arterial afecta a más de un tercio de la población adulta en Argentina. Lo más preocupante es que la mayoría no lo sabe, porque rara vez presenta síntomas claros hasta que ya hay daño en órganos como el corazón, los riñones o el cerebro. Por eso se la llama "el enemigo silencioso".</p>

<p>La buena noticia es que la hipertensión se puede detectar fácilmente, y en muchos casos, controlar con cambios en el estilo de vida.</p>

<h3>¿Qué es la presión arterial?</h3>
<p>Es la fuerza que ejerce la sangre sobre las paredes de tus arterias. Se expresa con dos números:</p>
<ul>
  <li><strong>Presión sistólica (el número de arriba):</strong> la presión cuando el corazón late.</li>
  <li><strong>Presión diastólica (el número de abajo):</strong> la presión entre latidos.</li>
</ul>
<p>Se considera presión normal valores por debajo de 120/80 mmHg. Cuando los valores superan de forma sostenida 140/90 mmHg, hablamos de hipertensión.</p>

<h3>Factores de riesgo</h3>
<p>Algunos factores no se pueden modificar, como la edad, la herencia genética o el sexo. Pero hay muchos otros sobre los que sí podés actuar:</p>
<ul>
  <li><strong>Exceso de sal:</strong> el consumo promedio en Argentina duplica lo recomendado por la OMS.</li>
  <li><strong>Sedentarismo:</strong> la falta de actividad física debilita el sistema cardiovascular.</li>
  <li><strong>Sobrepeso y obesidad:</strong> cada kilo de más exige más esfuerzo al corazón.</li>
  <li><strong>Estrés crónico:</strong> el cortisol elevado de forma sostenida sube la presión.</li>
  <li><strong>Tabaquismo:</strong> la nicotina contrae las arterias y acelera el daño vascular.</li>
  <li><strong>Consumo excesivo de alcohol.</strong></li>
</ul>

<h3>¿Cómo medirla correctamente?</h3>
<p>Parece simple, pero hay errores frecuentes que alteran los resultados:</p>
<ul>
  <li>Sentate cómodamente con la espalda apoyada durante 5 minutos antes de la medición.</li>
  <li>No cruces las piernas.</li>
  <li>No hables durante la medición.</li>
  <li>No tomes café ni fumés en los 30 minutos previos.</li>
  <li>Usá un tensiómetro validado y del tamaño adecuado para tu brazo.</li>
  <li>Medí siempre a la misma hora, idealmente por la mañana y por la noche.</li>
</ul>

<h3>Cambios que bajan la presión</h3>
<p>Antes de hablar de medicamentos, hay medidas que tienen un impacto real y comprobado:</p>
<ul>
  <li><strong>Reducir la sal:</strong> no solo la que agregás al cocinar, sino la que viene en fiambres, pan, quesos, snacks y enlatados.</li>
  <li><strong>Hacer ejercicio regular:</strong> 150 minutos semanales de actividad moderada (caminar a paso rápido, nadar, andar en bici).</li>
  <li><strong>Mantener un peso saludable.</strong></li>
  <li><strong>Comer más frutas, verduras y legumbres.</strong></li>
  <li><strong>Limitar el alcohol</strong> a no más de una copa diaria.</li>
  <li><strong>Dejar de fumar.</strong></li>
</ul>

<h3>¿Cuándo consultar?</h3>
<p>Si en mediciones repetidas tus valores superan 140/90, es momento de consultar. Pero no esperes a eso: cualquier adulto debería controlarse la presión al menos una vez al año. Si tenés antecedentes familiares de hipertensión o enfermedad cardiovascular, el control debería ser más frecuente.</p>

<p><strong>En PREME contás con cardiólogos y clínicos en tu cartilla que pueden ayudarte a controlar tu presión. La prevención empieza con un gesto tan simple como un control.</strong></p>
`,
  },

  // ─── 8. Salud dental ──────────────────────────────────────────────
  {
    slug: "salud-dental-importancia",
    title: "Tu boca habla de tu salud: por qué no postergar el dentista",
    excerpt: "La salud dental impacta en todo tu organismo.",
    more: "Conexión boca-cuerpo, frecuencia de visitas y cobertura PREME.",
    image: "/assets/blog/articles/AdobeStock_409155410.jpeg",
    category: "salud",
    date: "2026-02-17",
    reading: "5 min",
    author: "Equipo PREME",
    imageNeedsReplacement: true,
    content: `
<h2>Más que una sonrisa bonita</h2>
<p>Cuando pensamos en ir al dentista, generalmente lo asociamos con estética o con un dolor de muelas. Pero la salud bucal tiene una conexión directa con la salud de todo el cuerpo, y postergar las visitas puede tener consecuencias que van mucho más allá de una caries.</p>

<p>Estudios científicos han demostrado que las enfermedades de las encías (periodontitis) están vinculadas con mayor riesgo de enfermedad cardiovascular, diabetes mal controlada, complicaciones en el embarazo e incluso problemas respiratorios. Las bacterias de una boca enferma no se quedan en la boca: viajan por el torrente sanguíneo.</p>

<h3>¿Cada cuánto hay que ir al dentista?</h3>
<p>La recomendación general es una visita cada 6 meses para un control y limpieza. Sin embargo, hay situaciones que requieren mayor frecuencia:</p>
<ul>
  <li>Si tenés enfermedad periodontal (encías que sangran, se retraen o están inflamadas).</li>
  <li>Si fumás, ya que el tabaco aumenta el riesgo de problemas bucales.</li>
  <li>Si tenés diabetes, porque hay una relación bidireccional entre diabetes y salud gingival.</li>
  <li>Si estás embarazada: los cambios hormonales pueden afectar las encías.</li>
  <li>Si llevás ortodoncia o implantes.</li>
</ul>

<h3>Señales de alerta que no deberías ignorar</h3>
<p>No esperes a que duela. Consultá si notás:</p>
<ul>
  <li><strong>Encías que sangran</strong> al cepillarte o usar hilo dental.</li>
  <li><strong>Mal aliento persistente</strong> que no se va con la higiene habitual.</li>
  <li><strong>Dientes flojos</strong> o que se mueven.</li>
  <li><strong>Sensibilidad</strong> al frío, al calor o a los dulces que antes no tenías.</li>
  <li><strong>Manchas o cambios de color</strong> en dientes o encías.</li>
  <li><strong>Llagas o heridas</strong> que no cicatrizan en más de dos semanas.</li>
</ul>

<h3>Buenas prácticas diarias</h3>
<p>La prevención empieza en tu casa, todos los días:</p>
<ul>
  <li><strong>Cepillate al menos dos veces al día</strong> durante dos minutos, con cepillo de cerdas suaves.</li>
  <li><strong>Usá hilo dental</strong> al menos una vez al día. El cepillo solo limpia el 60% de la superficie dental.</li>
  <li><strong>Cambiá el cepillo</strong> cada tres meses o cuando las cerdas se deformen.</li>
  <li><strong>Limitá los azúcares</strong> y las bebidas ácidas (gaseosas, jugos cítricos).</li>
  <li><strong>No uses los dientes como herramienta</strong> para abrir paquetes o cortar cosas.</li>
</ul>

<h3>El miedo al dentista es más común de lo que pensás</h3>
<p>La odontofobia afecta a un porcentaje importante de la población. Si te pasa, hablá con tu dentista antes del turno. Hoy existen técnicas de sedación consciente y abordajes mucho menos invasivos que los de hace años. Ir regularmente, de hecho, reduce la probabilidad de necesitar tratamientos complejos.</p>

<h3>¿Qué cubre PREME en odontología?</h3>
<p>Tu plan PREME incluye cobertura en odontología general, con una amplia red de profesionales en Córdoba. Consultas, limpiezas, radiografías panorámicas y tratamientos preventivos están cubiertos. Consultá tu plan específico para conocer los detalles de coberturas protésicas y de ortodoncia.</p>

<p><strong>En PREME sabemos que cuidar tu boca es cuidar tu salud completa. Sacá turno con tu dentista y no lo sigas postergando.</strong></p>
`,
  },

  // ─── 9. Actividad física por edad ─────────────────────────────────
  {
    slug: "actividad-fisica-por-edad",
    title: "Moverte a tu ritmo: ejercicio ideal según tu edad",
    excerpt: "Cada etapa de la vida tiene su forma ideal de moverse.",
    more: "Recomendaciones de ejercicio por franja etaria y minutos semanales.",
    image: "/assets/blog/articles/AdobeStock_830145388.png",
    category: "bienestar",
    date: "2026-03-03",
    reading: "6 min",
    author: "Equipo PREME",
    content: `
<h2>No existe una sola forma de hacer ejercicio</h2>
<p>La actividad física es uno de los pilares fundamentales de la salud, pero no tiene que ser la misma para todos. Lo que funciona a los 25 no necesariamente es lo ideal a los 55, y forzar el cuerpo sin considerar la etapa de vida en la que estás puede generar más problemas que beneficios.</p>

<p>La Organización Mundial de la Salud recomienda un mínimo de 150 minutos semanales de actividad moderada o 75 minutos de actividad vigorosa para adultos. Pero más allá de los números, lo importante es encontrar lo que disfrutes y puedas sostener en el tiempo.</p>

<h3>En tus 20s: construí las bases</h3>
<p>Es la década con mayor capacidad de recuperación y rendimiento. Aprovechala para:</p>
<ul>
  <li><strong>Explorar:</strong> probá deportes de equipo, crossfit, artes marciales, natación, running. Es el momento de descubrir qué te gusta.</li>
  <li><strong>Entrenar fuerza:</strong> desarrollar masa muscular ahora es una inversión a largo plazo. A partir de los 30, empezamos a perder masa muscular gradualmente.</li>
  <li><strong>Trabajar flexibilidad:</strong> incorporá yoga o estiramientos. Tu cuerpo joven te lo va a agradecer en 20 años.</li>
</ul>
<p><strong>Frecuencia sugerida:</strong> 4-5 veces por semana, combinando cardio y fuerza.</p>

<h3>En tus 30s: consolidá el hábito</h3>
<p>Las responsabilidades laborales y familiares empiezan a competir con el tiempo de ejercicio. La clave es la eficiencia:</p>
<ul>
  <li><strong>Entrenamiento funcional:</strong> movimientos que replican actividades diarias (agacharse, levantar peso, empujar).</li>
  <li><strong>HIIT (intervalos de alta intensidad):</strong> máximo resultado en menos tiempo. Sesiones de 20-30 minutos pueden ser muy efectivas.</li>
  <li><strong>Cuidá las articulaciones:</strong> empezá a prestar atención al calentamiento previo y al estiramiento posterior.</li>
</ul>
<p><strong>Frecuencia sugerida:</strong> 3-4 veces por semana, mínimo 150 minutos semanales.</p>

<h3>En tus 40s: priorizá la constancia sobre la intensidad</h3>
<p>El metabolismo se empieza a ralentizar y las lesiones tardan más en sanar. Es momento de ser más estratégico:</p>
<ul>
  <li><strong>Fuerza con cargas moderadas:</strong> fundamental para mantener masa muscular y densidad ósea.</li>
  <li><strong>Ejercicio aeróbico de impacto moderado:</strong> bicicleta, elíptica, natación, caminata a paso rápido.</li>
  <li><strong>Trabajo de equilibrio y propiocepción:</strong> previene caídas y mejora la postura.</li>
  <li><strong>Chequeo médico deportivo:</strong> una ergometría antes de arrancar o cambiar de rutina.</li>
</ul>
<p><strong>Frecuencia sugerida:</strong> 3-4 veces por semana, escuchando al cuerpo.</p>

<h3>En tus 50s: movete para vivir mejor</h3>
<p>El ejercicio a esta edad es clave para prevenir enfermedades crónicas y mantener la independencia funcional:</p>
<ul>
  <li><strong>Caminata diaria:</strong> 30 minutos a paso sostenido tienen un impacto enorme en la salud cardiovascular.</li>
  <li><strong>Pilates o yoga:</strong> fortalecen el core, mejoran la postura y reducen dolores de espalda.</li>
  <li><strong>Ejercicios acuáticos:</strong> excelentes para quienes tienen problemas articulares. El agua reduce el impacto un 90%.</li>
  <li><strong>Entrenamiento de fuerza suave:</strong> con bandas elásticas, mancuernas livianas o peso corporal.</li>
</ul>
<p><strong>Frecuencia sugerida:</strong> todos los días algo de movimiento, 3 sesiones estructuradas por semana.</p>

<h3>60 años y más: cada paso cuenta</h3>
<p>El ejercicio a esta edad no es opcional, es medicina. Los beneficios son enormes:</p>
<ul>
  <li><strong>Prevención de caídas:</strong> ejercicios de equilibrio como tai chi reducen el riesgo de caídas un 40%.</li>
  <li><strong>Mantenimiento cognitivo:</strong> la actividad física regular reduce el riesgo de deterioro cognitivo.</li>
  <li><strong>Socialización:</strong> clases grupales, caminatas con amigos, baile. El componente social es tan importante como el físico.</li>
  <li><strong>Movilidad articular:</strong> movimientos suaves que mantengan el rango de movimiento.</li>
</ul>
<p><strong>Frecuencia sugerida:</strong> movimiento diario, adaptado a las posibilidades individuales.</p>

<h3>Un consejo para todas las edades</h3>
<p>Antes de empezar cualquier actividad física nueva, consultá con tu médico, especialmente si tenés alguna condición preexistente. Y recordá: el mejor ejercicio es el que podés sostener en el tiempo.</p>

<p><strong>En PREME contás con traumatólogos, kinesiólogos y médicos deportólogos en tu cartilla. Antes de arrancar, hacé tu chequeo y movete con tranquilidad.</strong></p>
`,
  },

  // ─── 10. Alimentación consciente ──────────────────────────────────
  {
    slug: "alimentacion-consciente",
    title: "Comer bien sin complicarse: guía de alimentación consciente",
    excerpt: "Comer sano no requiere dietas extremas ni restricciones imposibles.",
    more: "Tips prácticos, plato saludable, hidratación y lectura de etiquetas.",
    image: "/assets/nuevas/blog/alimentacion-consciente/image1.png",
    category: "bienestar",
    date: "2026-03-10",
    reading: "5 min",
    author: "Equipo PREME",
    content: `
<h2>Alimentarse bien es más simple de lo que parece</h2>
<p>Vivimos bombardeados por dietas milagrosas, superalimentos de moda y restricciones que parecen diseñadas para complicarnos la vida. Pero la alimentación saludable no necesita ser extrema ni costosa. Se trata de hacer mejores elecciones, de a poco, y sostenerlas en el tiempo.</p>

<p>La alimentación consciente no es una dieta: es una forma de relacionarte con la comida prestando atención a qué comés, cuánto, cómo y por qué.</p>

<h3>El plato saludable: tu guía visual</h3>
<p>Una forma práctica de armar comidas equilibradas es pensar en tu plato dividido en partes:</p>
<ul>
  <li><strong>Mitad del plato: verduras y frutas.</strong> Cuanta más variedad de colores, mejor. Crudas, cocidas, al horno, al vapor.</li>
  <li><strong>Un cuarto del plato: proteínas.</strong> Carne magra, pollo, pescado, huevos, legumbres o tofu.</li>
  <li><strong>Un cuarto del plato: carbohidratos de calidad.</strong> Arroz integral, fideos, papa, batata, pan integral.</li>
  <li><strong>Un chorrito de grasa buena:</strong> aceite de oliva, palta o frutos secos.</li>
  <li><strong>Agua como bebida principal.</strong></li>
</ul>

<img src="/assets/nuevas/blog/alimentacion-consciente/imagen2.png" alt="Alimentación saludable" style="width:100%;border-radius:12px;margin:24px 0;" />

<h3>Hidratación: lo que muchos subestiman</h3>
<p>El cuerpo necesita alrededor de 2 litros de agua por día, más si hacés ejercicio o estamos en verano cordobés. Las señales de deshidratación leve incluyen dolor de cabeza, cansancio, falta de concentración y piel seca.</p>
<ul>
  <li>Llevá siempre una botella con vos.</li>
  <li>Si te cuesta tomar agua sola, agregale rodajas de limón, pepino o menta.</li>
  <li>Las infusiones sin azúcar también cuentan.</li>
  <li>Limitá las gaseosas y jugos azucarados: un vaso de gaseosa tiene unas 7 cucharaditas de azúcar.</li>
</ul>

<h3>Lectura de etiquetas: aprendé a decodificarlas</h3>
<p>No hace falta ser nutricionista para leer una etiqueta. Prestá atención a estos puntos:</p>
<ul>
  <li><strong>Orden de ingredientes:</strong> van de mayor a menor cantidad. Si el azúcar o el jarabe de maíz están entre los primeros tres, reconsiderá.</li>
  <li><strong>Sellos negros octogonales:</strong> Argentina implementó el etiquetado frontal. Si un producto tiene muchos sellos (exceso de azúcares, grasas, sodio, calorías), es una señal clara.</li>
  <li><strong>Porción vs. envase:</strong> muchos productos parecen bajos en calorías, pero la porción que indican es irreal. Mirá cuántas porciones trae el envase.</li>
  <li><strong>Sodio:</strong> es un dato clave. Productos como pan lactal, galletitas, salsa de tomate y fiambres pueden tener niveles altísimos de sodio sin que lo notes.</li>
</ul>

<h3>Snacks inteligentes</h3>
<p>Picotear entre comidas no es malo si elegís bien:</p>
<ul>
  <li>Un puñado de frutos secos (sin sal ni azúcar agregada).</li>
  <li>Fruta fresca de estación.</li>
  <li>Yogur natural con semillas.</li>
  <li>Bastones de zanahoria o apio con hummus.</li>
  <li>Una tostada integral con queso untable.</li>
</ul>

<h3>Comer consciente: más allá de qué comés</h3>
<p>La alimentación consciente también tiene que ver con el cómo:</p>
<ul>
  <li><strong>Comé sentado y sin pantallas.</strong> Cuando mirás el celular o la tele, perdés registro de lo que comés y tendés a comer de más.</li>
  <li><strong>Masticá despacio.</strong> La señal de saciedad tarda unos 20 minutos en llegar al cerebro.</li>
  <li><strong>Preguntate si tenés hambre real</strong> o estás comiendo por aburrimiento, ansiedad o costumbre.</li>
  <li><strong>No te saltees comidas.</strong> Comer regularmente ayuda a mantener estable el nivel de azúcar en sangre y evita atracones.</li>
</ul>

<img src="/assets/nuevas/blog/alimentacion-consciente/imagen3.png" alt="Snacks saludables" style="width:100%;border-radius:12px;margin:24px 0;" />

<h3>No se trata de perfección</h3>
<p>Una alimentación saludable no significa comer impecable el 100% del tiempo. Se trata de que la mayoría de tus elecciones sean buenas. Un asado con amigos, un helado en familia o unas empanadas un domingo no arruinan nada si tu base diaria es sólida.</p>

<p><strong>En PREME contás con nutricionistas en tu cartilla que pueden ayudarte a armar un plan personalizado, sin extremos y con los pies en la tierra. Consultá y empezá de a poco.</strong></p>
`,
  },

  // ─── 11. Salud mental ─────────────────────────────────────────────
  {
    slug: "salud-mental-cuando-consultar",
    title: "Salud mental: cuándo pedir ayuda y por qué no esperar",
    excerpt: "Pedir ayuda profesional es un acto de valentía, no de debilidad.",
    more: "Señales de alerta, desmitificar la terapia y cobertura en PREME.",
    image: "/assets/nuevas/blog/salud-mental-cuando-consultar/imagen1.png",
    category: "bienestar",
    date: "2026-03-17",
    reading: "5 min",
    author: "Equipo PREME",
    content: `
<h2>La salud mental no es un tema menor</h2>
<p>Según datos de la OMS, una de cada cuatro personas experimentará algún problema de salud mental a lo largo de su vida. En Argentina, la ansiedad y la depresión son las condiciones más frecuentes, y sin embargo, muchas personas tardan meses o años en buscar ayuda profesional. El estigma, la desinformación y la idea de que "hay que bancársela solo" son barreras que necesitamos derribar.</p>

<p>La salud mental es tan importante como la salud física. No tiene sentido ir al cardiólogo cuando te duele el pecho pero resistirte a consultar cuando sentís que la angustia no te deja funcionar.</p>

<h3>Señales de que es momento de consultar</h3>
<p>No necesitás estar en crisis para pedir ayuda. Algunas señales que merecen atención profesional:</p>
<ul>
  <li><strong>Tristeza o vacío persistente:</strong> que dura más de dos semanas y no responde a los eventos de la vida cotidiana.</li>
  <li><strong>Ansiedad intensa:</strong> preocupación constante, sensación de peligro inminente, palpitaciones, dificultad para respirar.</li>
  <li><strong>Problemas de sueño:</strong> insomnio sostenido o dormir mucho más de lo habitual.</li>
  <li><strong>Cambios bruscos de humor:</strong> irritabilidad excesiva, reacciones desproporcionadas.</li>
  <li><strong>Aislamiento:</strong> dejar de ver amigos, perder interés en actividades que antes disfrutabas.</li>
  <li><strong>Dificultad para concentrarte</strong> en el trabajo o los estudios.</li>
  <li><strong>Cambios en el apetito:</strong> comer mucho más o mucho menos de lo habitual.</li>
  <li><strong>Pensamientos negativos recurrentes</strong> sobre vos mismo, la vida o el futuro.</li>
  <li><strong>Consumo de sustancias</strong> para "aguantar" o "desconectar".</li>
</ul>

<img src="/assets/nuevas/blog/salud-mental-cuando-consultar/imagen2.png" alt="Salud mental" style="width:100%;border-radius:12px;margin:24px 0;" />

<h3>Psicólogo vs. psiquiatra: ¿cuál necesito?</h3>
<p>Es una duda muy común. Acá va la diferencia simplificada:</p>
<ul>
  <li><strong>Psicólogo:</strong> profesional de la salud mental que trabaja con terapia (conversación, técnicas cognitivas, etc.). No receta medicación. Es el primer paso recomendado en la mayoría de los casos.</li>
  <li><strong>Psiquiatra:</strong> médico especializado en salud mental que puede recetar medicación. Se consulta cuando la situación requiere un abordaje farmacológico, generalmente en combinación con terapia psicológica.</li>
</ul>
<p>En muchos casos, el tratamiento más efectivo combina ambos. Tu psicólogo puede orientarte sobre si necesitás una evaluación psiquiátrica.</p>

<h3>Mitos que hay que dejar atrás</h3>
<ul>
  <li><strong>"Ir al psicólogo es para locos":</strong> ir al psicólogo es para personas que quieren entenderse mejor y mejorar su calidad de vida. Punto.</li>
  <li><strong>"Con el tiempo se pasa solo":</strong> a veces sí, muchas veces no. Y mientras esperás, la calidad de vida se deteriora.</li>
  <li><strong>"Tomar medicación psiquiátrica es ser débil":</strong> nadie cuestiona tomar medicación para la presión o la diabetes. La medicación psiquiátrica, cuando está bien indicada, corrige desequilibrios químicos reales.</li>
  <li><strong>"La terapia dura para siempre":</strong> muchos tratamientos tienen duración acotada. Depende del motivo de consulta y del enfoque terapéutico.</li>
</ul>

<img src="/assets/nuevas/blog/salud-mental-cuando-consultar/imagen3.png" alt="Consulta profesional" style="width:100%;border-radius:12px;margin:24px 0;" />

<h3>Primeros pasos si estás dudando</h3>
<ul>
  <li>Hablá con alguien de confianza: un familiar, un amigo, tu médico de cabecera.</li>
  <li>Buscá un profesional que te genere confianza. Si no te sentís cómodo con el primero, probá con otro.</li>
  <li>Podés empezar pidiendo una consulta orientativa, sin compromiso de continuar.</li>
  <li>Recordá que pedir ayuda es un acto de fortaleza, no de debilidad.</li>
</ul>

<h3>¿Qué cubre PREME en salud mental?</h3>
<p>La Ley Nacional de Salud Mental garantiza cobertura en prestaciones de salud mental. Tu plan PREME incluye sesiones de psicoterapia y consultas psiquiátricas con profesionales de la cartilla. Consultá detalles de tu cobertura específica comunicándote con nuestra central de atención.</p>

<p><strong>En PREME te acompañamos en cada aspecto de tu salud, incluida la mental. No esperes a tocar fondo para buscar ayuda: cuanto antes consultes, mejor.</strong></p>
`,
  },

  // ─── 12. Elegir plan de salud ─────────────────────────────────────
  {
    slug: "elegir-plan-salud",
    title: "Cómo elegir tu plan de salud sin volverte loco",
    excerpt: "Comparar planes de salud puede ser confuso, pero no tiene por qué.",
    more: "Qué mirar al comparar coseguros, cartilla, cobertura y beneficios.",
    image: "/assets/blog/articles/AdobeStock_665174483.jpeg",
    category: "consejos",
    date: "2026-03-25",
    reading: "6 min",
    author: "Equipo PREME",
    content: `
<h2>Elegir bien te ahorra plata y dolores de cabeza</h2>
<p>La elección de un plan de salud es una de las decisiones más importantes que podés tomar para vos y tu familia. Pero entre términos como "coseguro", "PMO", "copago", "cartilla" y "carencia", es fácil sentirse perdido. Esta guía te va a ayudar a entender qué mirar para hacer una elección informada.</p>

<h3>¿Obra social o prepaga? Entendé las diferencias</h3>
<p>En Argentina conviven dos grandes sistemas:</p>
<ul>
  <li><strong>Obra social:</strong> asociada a tu actividad laboral. El aporte es un porcentaje de tu sueldo. Podés elegir derivar ese aporte a una obra social diferente a la de tu gremio.</li>
  <li><strong>Prepaga:</strong> empresa privada de salud. Pagás una cuota mensual que puede incluir (o no) el aporte de tu obra social como descuento.</li>
</ul>
<p>PREME es una obra social con más de 45 años en Córdoba, lo que te da la solidez institucional de una entidad con historia y la flexibilidad de planes adaptados a distintas necesidades.</p>

<h3>Qué mirar al comparar planes</h3>

<h3>1. Cartilla de prestadores</h3>
<p>Es lo más importante. De nada sirve un plan barato si los profesionales y clínicas que necesitás no están en la cartilla. Antes de decidir:</p>
<ul>
  <li>Verificá que tu médico de cabecera actual esté incluido.</li>
  <li>Chequeá la cobertura en las especialidades que más usás.</li>
  <li>Fijate que haya opciones cerca de tu domicilio y tu trabajo.</li>
  <li>Preguntá por la cobertura en sanatorios de referencia de Córdoba.</li>
</ul>
<p>PREME cuenta con una red de más de 2.800 prestadores en Córdoba y todo el país a través de convenios con otras entidades.</p>

<h3>2. Coseguros y copagos</h3>
<p>El coseguro es el monto que pagás de tu bolsillo cada vez que usás un servicio (consulta, estudio, práctica). Algunas cosas a tener en cuenta:</p>
<ul>
  <li>Preguntá los coseguros de las prácticas que más usás: consultas de rutina, análisis de laboratorio, estudios de imágenes.</li>
  <li>Un plan con cuota más alta puede tener coseguros más bajos, y al final te conviene si usás mucho la cobertura.</li>
  <li>Fijate si hay tope de coseguros o si hay prácticas con coseguro cero.</li>
</ul>

<h3>3. Cobertura ambulatoria vs. internación</h3>
<p>Todos los planes cubren internación por ley (PMO), pero las diferencias suelen estar en:</p>
<ul>
  <li><strong>Tipo de habitación:</strong> compartida o individual.</li>
  <li><strong>Maternidad:</strong> cobertura del parto, habitación, neonatología.</li>
  <li><strong>Cobertura en medicamentos:</strong> porcentaje de descuento en farmacias.</li>
  <li><strong>Salud mental:</strong> cantidad de sesiones cubiertas de psicoterapia.</li>
  <li><strong>Odontología:</strong> qué prácticas están incluidas.</li>
</ul>

<h3>4. Períodos de carencia</h3>
<p>La carencia es el tiempo que tenés que esperar desde que te afiliás hasta que podés usar ciertas coberturas. Es legal y varía según el plan. Preguntá específicamente por:</p>
<ul>
  <li>Carencia para cirugías programadas.</li>
  <li>Carencia para maternidad.</li>
  <li>Carencia para enfermedades preexistentes.</li>
</ul>
<p>Si venís de otro plan con antigüedad, muchas veces podés negociar la reducción o eliminación de carencias.</p>

<h3>5. Emergencias y urgencias</h3>
<p>Verificá que el plan incluya servicio de emergencias médicas 24/7. PREME, por ejemplo, ofrece el servicio ECCO de emergencias para todos sus afiliados, disponible las 24 horas, los 365 días del año.</p>

<h3>6. Beneficios adicionales</h3>
<p>Algunos planes ofrecen extras que pueden hacer la diferencia:</p>
<ul>
  <li>Descuentos en gimnasios o actividades deportivas.</li>
  <li>Programas de bienestar y prevención.</li>
  <li>App con credencial digital y gestión online.</li>
  <li>Descuentos en ópticas y audífonos.</li>
</ul>

<h3>Checklist antes de firmar</h3>
<ul>
  <li>Pedí el detalle escrito de coberturas, no te quedes solo con lo que te dicen verbalmente.</li>
  <li>Leé las condiciones de baja y aumentos de cuota.</li>
  <li>Preguntá cómo es el proceso de autorización de prácticas.</li>
  <li>Consultá opiniones de otros afiliados.</li>
  <li>Verificá que la entidad esté habilitada por la Superintendencia de Servicios de Salud.</li>
</ul>

<p><strong>En PREME llevamos más de 45 años acompañando a familias cordobesas con planes que se adaptan a cada necesidad. Si querés conocer nuestras opciones, contactanos y te asesoramos sin compromiso.</strong></p>
`,
  },

  // ─── 13. Primeros auxilios ────────────────────────────────────────
  {
    slug: "primeros-auxilios-casa",
    title: "Primeros auxilios en casa: qué hacer y qué NO hacer",
    excerpt: "Saber reaccionar a tiempo puede salvar una vida.",
    more: "Quemaduras, cortes, atragantamiento, cuándo llamar emergencias.",
    image: "/assets/blog/articles/AdobeStock_1034063235.jpeg",
    category: "consejos",
    date: "2026-04-01",
    reading: "7 min",
    author: "Equipo PREME",
    imageNeedsReplacement: true,
    content: `
<h2>Estar preparado marca la diferencia</h2>
<p>La mayoría de las emergencias domésticas no son graves, pero la forma en que reaccionamos en los primeros minutos puede hacer una diferencia enorme en el resultado. Saber qué hacer (y sobre todo qué NO hacer) te da tranquilidad y puede evitar complicaciones innecesarias.</p>

<p>Esta guía no reemplaza un curso de primeros auxilios, que siempre recomendamos, pero te da las bases para actuar con criterio ante las situaciones más comunes.</p>

<h3>Quemaduras</h3>
<p><strong>Qué hacer:</strong></p>
<ul>
  <li>Colocá la zona afectada bajo agua fría corriente durante al menos 10 minutos. Es la medida más efectiva y simple.</li>
  <li>Retirá anillos, pulseras o ropa que no esté pegada a la piel antes de que se hinche la zona.</li>
  <li>Cubrí la quemadura con gasa estéril o un paño limpio sin pelusa.</li>
  <li>Si la quemadura es grande (más grande que la palma de la mano), profunda, o está en la cara, manos, pies o genitales, acudí a una guardia.</li>
</ul>
<p><strong>Qué NO hacer:</strong></p>
<ul>
  <li>No apliques hielo directamente: puede empeorar el daño tisular.</li>
  <li>No pongas pasta de dientes, manteca, aceite ni remedios caseros. Solo agua fría.</li>
  <li>No revientes las ampollas: son una protección natural contra la infección.</li>
</ul>

<h3>Cortes y heridas</h3>
<p><strong>Qué hacer:</strong></p>
<ul>
  <li>Lavate las manos antes de tocar la herida (o usá guantes si tenés).</li>
  <li>Limpiá la herida con agua y jabón suave.</li>
  <li>Presioná con una gasa limpia para detener el sangrado. Mantené la presión firme durante al menos 5 minutos sin levantar la gasa.</li>
  <li>Una vez que dejó de sangrar, aplicá un antiséptico y cubriila con una gasa o apósito.</li>
</ul>
<p><strong>Cuándo ir a la guardia:</strong></p>
<ul>
  <li>Si el corte es profundo, largo (más de 2 cm) o tiene bordes irregulares.</li>
  <li>Si el sangrado no para después de 10 minutos de presión continua.</li>
  <li>Si fue causado por un objeto oxidado o sucio (puede necesitar refuerzo antitetánico).</li>
  <li>Si ves tejido profundo (grasa, músculo).</li>
</ul>

<h3>Atragantamiento</h3>
<p>Una de las emergencias más angustiantes, especialmente con niños. La rapidez es clave.</p>
<p><strong>En adultos y niños mayores de 1 año:</strong></p>
<ul>
  <li>Si la persona tose con fuerza, dejala toser. La tos es el mecanismo más efectivo para expulsar el objeto.</li>
  <li>Si no puede toser, hablar ni respirar, aplicá la maniobra de Heimlich: colocate detrás de la persona, poné un puño cerrado entre el ombligo y el esternón, agarrá el puño con la otra mano y hacé compresiones firmes hacia arriba y adentro.</li>
  <li>Repetí hasta que expulse el objeto o pierda el conocimiento.</li>
</ul>
<p><strong>En bebés menores de 1 año:</strong></p>
<ul>
  <li>Colocá al bebé boca abajo sobre tu antebrazo, con la cabeza más baja que el cuerpo.</li>
  <li>Dá 5 golpes firmes entre los omóplatos con el talón de tu mano.</li>
  <li>Si no funciona, giralo boca arriba y hacé 5 compresiones en el centro del pecho con dos dedos.</li>
  <li>Alterná hasta que expulse el objeto o llegue ayuda médica.</li>
</ul>
<p><strong>Qué NO hacer:</strong> no le metas los dedos en la boca a ciegas, podés empujar el objeto más adentro.</p>

<h3>Golpes en la cabeza</h3>
<p><strong>Cuándo preocuparse:</strong></p>
<ul>
  <li>Pérdida de conocimiento, aunque sea breve.</li>
  <li>Vómitos repetidos después del golpe.</li>
  <li>Confusión, somnolencia excesiva o dificultad para despertarse.</li>
  <li>Sangrado por oídos o nariz.</li>
  <li>Dolor de cabeza que empeora con el tiempo.</li>
  <li>En niños pequeños: llanto inconsolable, rechazo del alimento, cambio de comportamiento.</li>
</ul>
<p>Ante cualquiera de estas señales, acudí a la guardia de inmediato.</p>

<h3>Tu botiquín básico</h3>
<p>Tener un botiquín en casa bien equipado te permite actuar rápido. Debe incluir:</p>
<ul>
  <li>Gasas estériles y vendas.</li>
  <li>Cinta adhesiva hipoalergénica.</li>
  <li>Antiséptico (iodopovidona o clorhexidina).</li>
  <li>Tijera de punta roma.</li>
  <li>Pinzas.</li>
  <li>Guantes descartables.</li>
  <li>Termómetro.</li>
  <li>Analgésico básico (paracetamol o ibuprofeno, consultá dosis con tu médico).</li>
</ul>
<p>Revisá el botiquín cada 6 meses para reemplazar lo vencido.</p>

<h3>¿Cuándo llamar a emergencias?</h3>
<p>Llamá al servicio de emergencias cuando:</p>
<ul>
  <li>Hay pérdida de conocimiento.</li>
  <li>Dificultad para respirar.</li>
  <li>Sangrado abundante que no se detiene.</li>
  <li>Sospecha de fractura o lesión grave.</li>
  <li>Dolor en el pecho.</li>
  <li>Reacción alérgica severa (hinchazón de cara/garganta, dificultad respiratoria).</li>
</ul>
<p>Si sos afiliado PREME, tenés el servicio <strong>ECCO de emergencias disponible las 24 horas, los 7 días de la semana</strong>. Guardá el número en tu celular y en un lugar visible de tu casa.</p>

<p><strong>En PREME te acompañamos en la prevención y también cuando necesitás actuar rápido. Conocé tu cobertura de emergencias y mantené tu botiquín listo.</strong></p>
`,
  },

  // ─── 14. PREME 45 años ───────────────────────────────────────────
  {
    slug: "preme-45-anios",
    title: "PREME cumple 45 años: nuestra historia en Córdoba",
    excerpt: "Más de cuatro décadas acompañando la salud de los cordobeses.",
    more: "Fundación, hitos, evolución y visión actual de PREME.",
    image: "/assets/blog/articles/AdobeStock_1877032211.jpeg",
    category: "novedades",
    date: "2026-04-03",
    reading: "4 min",
    author: "PREME Institucional",
    imageNeedsReplacement: true,
    content: `
<h2>45 años de compromiso con tu salud</h2>
<p>En 2026, PREME celebra 45 años de vida. Más de cuatro décadas acompañando a familias cordobesas en uno de los aspectos más importantes de la vida: la salud. Lo que empezó como una iniciativa pionera se convirtió en una de las obras sociales más reconocidas de Córdoba, y hoy miramos hacia adelante con la misma convicción que nos impulsó desde el primer día.</p>

<h3>Los orígenes: 1981</h3>
<p>PREME nació en 1981 de la mano de la Asociación de Clínicas, Sanatorios y Hospitales Privados de la Provincia de Córdoba. Fue una de las primeras entidades de medicina prepaga de la provincia, creada por quienes mejor conocen el sistema de salud: los propios prestadores.</p>

<p>Esa impronta fundacional sigue vigente: PREME no es una empresa que vende salud desde un escritorio, sino una obra social construida desde adentro del sistema, por profesionales e instituciones que entienden las necesidades reales de los pacientes y de los equipos médicos.</p>

<h3>Crecimiento y consolidación</h3>
<p>A lo largo de los años, PREME fue construyendo una red de prestadores que hoy supera los 2.800 profesionales e instituciones en todo el país. En Córdoba, la cobertura incluye los principales sanatorios, centros de diagnóstico, laboratorios y consultorios en todas las especialidades.</p>

<p>Algunos hitos que marcaron el camino:</p>
<ul>
  <li><strong>Expansión de la cartilla</strong> para cubrir todas las especialidades médicas y odontológicas.</li>
  <li><strong>Incorporación del servicio ECCO</strong> de emergencias médicas 24/7 para todos los afiliados.</li>
  <li><strong>Desarrollo de planes familiares</strong> adaptados a las necesidades de cada etapa de la vida.</li>
  <li><strong>Cobertura nacional</strong> a través de convenios con entidades de otras provincias.</li>
  <li><strong>Apuesta por la digitalización:</strong> credencial digital, gestiones online y app para afiliados.</li>
</ul>

<h3>PREME hoy en números</h3>
<ul>
  <li><strong>Más de 13.000 afiliados</strong> en toda la provincia.</li>
  <li><strong>Más de 2.800 prestadores</strong> en la red.</li>
  <li><strong>45 años ininterrumpidos</strong> de servicio.</li>
  <li><strong>Cobertura integral:</strong> ambulatoria, internación, emergencias, salud mental, odontología, maternidad y más.</li>
</ul>

<h3>Lo que nos distingue</h3>
<p>En un mercado donde abundan las quejas y la desconfianza, PREME construyó su reputación sobre valores concretos:</p>
<ul>
  <li><strong>Cercanía:</strong> atención personalizada, no un 0800 con espera infinita.</li>
  <li><strong>Transparencia:</strong> planes claros, sin letra chica ni sorpresas.</li>
  <li><strong>Calidad:</strong> una cartilla seleccionada con los mejores profesionales de Córdoba.</li>
  <li><strong>Innovación:</strong> incorporación de herramientas digitales para simplificar la experiencia del afiliado.</li>
</ul>

<h3>Mirando al futuro</h3>
<p>Los próximos años están llenos de proyectos. Estamos trabajando en mejorar la experiencia digital del afiliado, ampliando la cartilla, y sumando programas de prevención y bienestar. Porque PREME no se queda en la cobertura del problema: queremos ayudarte a que el problema no aparezca.</p>

<p>A todos los que nos eligen y nos eligieron a lo largo de estos 45 años: gracias. Seguimos caminando juntos.</p>

<p><strong>PREME. 45 años cuidando la salud de Córdoba.</strong></p>
`,
  },

  // ─── 15. Credencial digital tutorial ──────────────────────────────
  {
    slug: "credencial-digital-tutorial",
    title: "Tu credencial digital: todo lo que podés hacer desde la app",
    excerpt: "La app PREME pone tu cobertura al alcance de tu mano.",
    more: "Tutorial de la app: credencial, autorizaciones, turnos y más.",
    image: "/assets/blog/articles/AdobeStock_253877018.jpeg",
    category: "novedades",
    date: "2026-04-05",
    reading: "3 min",
    author: "PREME Digital",
    imageNeedsReplacement: true,
    content: `
<h2>Todo tu plan de salud en tu celular</h2>
<p>La app de PREME fue diseñada para simplificarte la vida. Ya no necesitás llamar por teléfono, hacer filas ni cargar papeles para las gestiones más habituales. Desde tu celular podés acceder a tu credencial, encontrar prestadores, consultar tu cuenta corriente y mucho más.</p>

<p>Si todavía no la descargaste, acá te contamos todo lo que podés hacer.</p>

<h3>Credencial digital</h3>
<p>Es la función más usada de la app, y con razón:</p>
<ul>
  <li><strong>Accedé a tu credencial</strong> en cualquier momento, sin necesidad de conexión a internet (una vez cargada).</li>
  <li><strong>Mostrala en farmacias, consultorios y guardias</strong> directamente desde tu celular. El código de barras o QR funciona igual que la credencial física.</li>
  <li><strong>Compartila con tu grupo familiar:</strong> cada integrante puede tener su credencial en su propio celular.</li>
  <li><strong>Siempre actualizada:</strong> si hay cambios en tu plan, la credencial digital se actualiza automáticamente.</li>
</ul>

<h3>Buscador de prestadores con geolocalización</h3>
<p>Necesitás un médico y no sabés a quién ir? Desde la app podés:</p>
<ul>
  <li>Buscar por especialidad, nombre del profesional o centro de salud.</li>
  <li>Filtrar por cercanía a tu ubicación actual.</li>
  <li>Ver la dirección, teléfono y horarios de atención.</li>
  <li>Obtener indicaciones para llegar con un toque.</li>
</ul>
<p>La cartilla se actualiza en tiempo real, así que siempre ves información vigente.</p>

<h3>Autorizaciones online</h3>
<p>Muchas prácticas requieren autorización previa. Desde la app podés:</p>
<ul>
  <li>Solicitar autorizaciones sin ir a la oficina.</li>
  <li>Subir las órdenes médicas con la cámara de tu celular.</li>
  <li>Hacer seguimiento del estado de tu solicitud.</li>
  <li>Recibir la autorización directamente en la app una vez aprobada.</li>
</ul>

<h3>Cuenta corriente</h3>
<p>Mantené el control de tu situación financiera con PREME:</p>
<ul>
  <li>Consultá tu estado de cuenta actualizado.</li>
  <li>Mirá el detalle de facturación y pagos.</li>
  <li>Accedé a comprobantes de pago.</li>
</ul>

<h3>Turnos</h3>
<p>Estamos implementando la reserva de turnos online directamente desde la app. Vas a poder elegir especialidad, profesional, día y horario sin necesidad de llamar por teléfono. Pronto te vamos a estar contando más sobre esta función.</p>

<h3>¿Cómo descargo la app?</h3>
<p>La app PREME está disponible para:</p>
<ul>
  <li><strong>Android:</strong> buscá "PREME" en Google Play Store.</li>
  <li><strong>iOS:</strong> buscá "PREME" en App Store.</li>
</ul>
<p>Para activar tu cuenta necesitás tu número de afiliado y tu DNI. Si tenés problemas con el registro, podés comunicarte con nuestra mesa de ayuda.</p>

<h3>Compartir con tu grupo familiar</h3>
<p>Cada integrante de tu grupo familiar puede descargar la app en su propio celular y acceder a su credencial individual. No necesitan compartir un mismo usuario: cada uno tiene acceso independiente a sus propias gestiones.</p>

<h3>Tips para aprovecharla al máximo</h3>
<ul>
  <li>Activá las notificaciones para recibir avisos de autorizaciones y novedades.</li>
  <li>Mantené la app actualizada para acceder a las últimas funciones.</li>
  <li>Guardá la credencial digital en tu pantalla de inicio para acceso rápido.</li>
</ul>

<p><strong>En PREME trabajamos para que gestionar tu salud sea cada vez más fácil. Descargá la app y llevá tu cobertura siempre con vos.</strong></p>
`,
  },
];

export function getArticleBySlug(slug: string): BlogArticle | null {
  return articles.find((a) => a.slug === slug) ?? null;
}
