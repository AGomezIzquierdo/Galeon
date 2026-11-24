// Todo el texto de la web en un solo sitio: edita aquí sin tocar los componentes.

export const site = {
  name: 'GALEON',
  tagline: 'Consultora de inteligencia artificial',
  email: 'galeon@gmail.com',
  // URL pública de la web (sin barra final). Se usa para canonical, sitemap, Open Graph y
  // datos estructurados. Cuando tengáis dominio propio, cámbiala con NEXT_PUBLIC_SITE_URL.
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://galeon-sable.vercel.app').replace(/\/$/, ''),
  // Título y descripción principales (Google, redes sociales y asistentes de IA)
  title: 'GALEON | Consultora de inteligencia artificial en Sevilla',
  description:
    'GALEON es una consultora de inteligencia artificial de Sevilla: automatizamos tareas con IA, creamos asistentes y desarrollamos webs a medida para pymes, autónomos y comercios.',
  // Respuesta corta a «¿qué es GALEON?»: la usan los datos estructurados y llms.txt.
  summary:
    'GALEON es una consultora de inteligencia artificial con base en Sevilla (España) que ayuda a pymes, autónomos, emprendedores y comercios a detectar qué tareas merece la pena automatizar y cuáles no, y las resuelve con automatizaciones con IA, asistentes y agentes de IA, integraciones y webs a medida. Un único equipo para web, automatización e IA, con diagnóstico inicial gratuito.',
  location: {
    city: 'Sevilla',
    region: 'Andalucía',
    country: 'España',
    countryCode: 'ES',
  },
  areaServed: 'Sevilla y alrededores en persona; toda España en remoto',
  founders: ['Alejandro Gómez Izquierdo', 'Gabriel Vigo Rodríguez'],
  foundingYear: '2026',
  audience: ['pymes', 'autónomos', 'emprendedores', 'comercios y negocios locales'],
  // Pon aquí las URLs reales de vuestras redes. Las que queden vacías no se muestran.
  social: {
    linkedin: '',
    instagram: '',
  },
};

export const nav = [
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#demo', label: 'Cómo funciona' },
  { href: '/#proceso', label: 'Proceso' },
  { href: '/#paquetes', label: 'Paquetes' },
  { href: '/#faqs', label: 'FAQ' },
];

export const hero = {
  eyebrow: 'Consultora de IA en Sevilla · Automatización · Web',
  titleStart: 'Pon la',
  titleHighlight: 'inteligencia artificial',
  titleEnd: 'a trabajar para tu negocio.',
  subtitle:
    'Detectamos dónde pierde tiempo tu empresa y lo resolvemos con automatizaciones, asistentes de IA y webs que convierten. Para pymes, autónomos y comercios. Sin humo: soluciones que se usan desde el primer día.',
  primaryCta: { label: 'Pide tu diagnóstico gratuito', href: '/#contacto' },
  secondaryCta: { label: 'Ver servicios', href: '/#servicios' },
  badges: ['Diagnóstico gratuito', 'Propuesta en menos de 24h', 'IA, automatización y web en un solo equipo', '100% a medida'],
};

// Conversación de ejemplo con Nova en la portada, una por sector. Ilustra lo que hace una
// automatización de GALEON: entender el mensaje, responder y dejar el trabajo hecho.
export const novaScenarios = [
  {
    sector: 'Clínica',
    user: 'Hola, ¿tenéis cita para una limpieza dental esta semana?',
    reply: '¡Hola! Sí, tenemos hueco el jueves a las 10:30 o el viernes a las 17:00. ¿Cuál te viene mejor?',
    actions: ['Cita propuesta', 'Paciente registrado', 'Recordatorio programado'],
  },
  {
    sector: 'Inmobiliaria',
    user: 'Busco un piso de 3 habitaciones en Sevilla por menos de 250.000 €',
    reply: 'Tengo 4 pisos que encajan. Te envío las fichas por email y, si quieres, te agendo una visita.',
    actions: ['Lead cualificado', 'Fichas enviadas', 'Agente avisado'],
  },
  {
    sector: 'Tienda online',
    user: '¿Dónde está mi pedido #4821? Lo hice el lunes',
    reply: 'Tu pedido salió ayer y llega mañana antes de las 14:00. Te paso el enlace de seguimiento.',
    actions: ['Pedido consultado', 'Seguimiento enviado', 'Ticket cerrado'],
  },
];

export type IconName = 'bot' | 'code' | 'plug' | 'compass' | 'chat' | 'funnel' | 'chart' | 'pen';

export const services: { icon: IconName; title: string; description: string; tags: string[] }[] = [
  {
    icon: 'bot',
    title: 'Automatización con IA',
    description:
      'Flujos inteligentes que conectan tus herramientas, responden por ti y eliminan tareas manuales repetitivas.',
    tags: ['Agentes', 'Flujos', 'LLMs'],
  },
  {
    icon: 'compass',
    title: 'Consultoría estratégica de IA',
    description:
      'Analizamos tu operativa y te decimos exactamente qué automatizar primero para notar el impacto antes.',
    tags: ['Diagnóstico', 'Hoja de ruta'],
  },
  {
    icon: 'chat',
    title: 'Asistentes y agentes de IA',
    description:
      'Chatbots y agentes que responden a tus clientes con la información de tu negocio y pasan a una persona cuando hace falta.',
    tags: ['Chatbots', 'Agentes', '24/7'],
  },
  {
    icon: 'code',
    title: 'Webs a medida',
    description:
      'Webs y landing pages rápidas, modernas y pensadas para convertir, no solo para verse bien.',
    tags: ['SEO', 'Velocidad', 'Conversión'],
  },
  {
    icon: 'plug',
    title: 'Integraciones',
    description:
      'Conectamos tu web, tu CRM, tus formularios y tus canales de atención en un mismo flujo automatizado.',
    tags: ['CRM', 'APIs', 'Email'],
  },
];

export const about = {
  title: 'Tu aliado en inteligencia artificial',
  text: 'GALEON nace en Sevilla en 2026 de la mano de Alejandro Gómez Izquierdo y Gabriel Vigo Rodríguez. Unimos consultoría de IA, automatización y desarrollo web en un mismo equipo, para que no tengas que coordinar a varios proveedores ni explicar tu proyecto dos veces. Y te decimos también qué no compensa automatizar.',
  points: [
    { title: 'Un solo equipo', description: 'IA y desarrollo web bajo el mismo techo, sin fricción entre proveedores.' },
    { title: '100% a medida', description: 'Nada de plantillas genéricas: diseñamos según tu operativa real.' },
    { title: 'Soporte post-lanzamiento', description: 'Seguimos optimizando la automatización y la web después de publicar.' },
  ],
};

export const useCases: { icon: IconName; title: string; description: string }[] = [
  { icon: 'chat', title: 'Atención al cliente', description: 'Respuestas automáticas 24/7 a las preguntas más frecuentes de tus clientes.' },
  { icon: 'funnel', title: 'Gestión de leads', description: 'Cualifica y organiza automáticamente los contactos que llegan desde tu web.' },
  { icon: 'chart', title: 'Reporting', description: 'Informes periódicos generados solos, sin tocar una hoja de cálculo.' },
  { icon: 'pen', title: 'Contenido', description: 'Borradores de contenido y respuestas generados con IA, listos para revisar.' },
];

export const quote = 'La automatización no sustituye el criterio humano: lo libera para lo importante.';


// Demo animada de la sección "Cómo funciona": un lead que entra y se procesa solo.
export const demoFlow = [
  { title: 'Llega un mensaje', detail: '“Hola, ¿hacéis webs para clínicas?”', time: '0 s' },
  { title: 'La IA lo entiende', detail: 'Intención: presupuesto web · Sector: salud', time: '1 s' },
  { title: 'Se registra en tu CRM', detail: 'Lead creado y cualificado automáticamente', time: '2 s' },
  { title: 'Respuesta enviada', detail: 'Email personalizado + cita propuesta', time: '3 s' },
];

export const processSteps = [
  { number: '01', title: 'Diagnóstico', description: 'Analizamos tu negocio, tus procesos y dónde estás perdiendo tiempo o clientes.' },
  { number: '02', title: 'Diseño de la solución', description: 'Definimos qué automatizar y cómo debe verse y funcionar tu web.' },
  { number: '03', title: 'Desarrollo', description: 'Construimos la automatización y/o la web con IA integrada donde aporta valor real.' },
  { number: '04', title: 'Lanzamiento y soporte', description: 'Publicamos, medimos resultados y seguimos optimizando contigo.' },
];

export const packages = [
  {
    name: 'Automatización IA',
    price: 'Desde 450 € + IVA',
    description: 'Para negocios que ya tienen web y quieren dejar de perder tiempo en tareas repetitivas.',
    items: ['Automatización de atención al cliente', 'Integración con tus herramientas actuales', 'Soporte tras el lanzamiento'],
    featured: false,
  },
  {
    name: 'Automatización + Web',
    price: 'Desde 1.300 € + IVA',
    description: 'El paquete completo: tu web y tus automatizaciones diseñadas para trabajar juntas desde el primer día.',
    items: ['Todo lo de los otros dos paquetes', 'Un único equipo, un único punto de contacto', 'Prioridad en soporte'],
    featured: true,
  },
  {
    name: 'Web a medida',
    price: 'Desde 450 € + IVA',
    description: 'Una web rápida, moderna y pensada para convertir visitas en clientes.',
    items: ['Diseño 100% a medida', 'Optimizada para SEO y velocidad', 'Panel de gestión básico'],
    featured: false,
  },
];

// Precios orientativos de lanzamiento (sin IVA). El precio final depende del alcance; los
// servicios de terceros (dominio, hosting, APIs, créditos de IA, licencias) van aparte.
// Se usan en las FAQ, en los datos estructurados y en llms.txt.
export const priceList: { service: string; min: number; max?: number; monthly?: boolean; scope: string }[] = [
  { service: 'Landing page', min: 450, max: 650, scope: 'Una página adaptable a móvil, formulario y configuración técnica básica.' },
  { service: 'Web corporativa esencial', min: 850, max: 1300, scope: 'Hasta 5 secciones, responsive, formulario y SEO técnico inicial.' },
  { service: 'Web ampliada', min: 1400, scope: 'Más secciones, gestor de contenidos o funcionalidades específicas.' },
  { service: 'Automatización sencilla', min: 450, max: 850, scope: 'Un flujo acotado entre hasta dos herramientas, con pruebas.' },
  { service: 'Automatización con IA', min: 900, max: 1800, scope: 'Un caso de uso concreto con IA, integración y supervisión humana definida.' },
  { service: 'Asistente de IA básico', min: 750, max: 1400, scope: 'Responde con la información de tu negocio, con límites y paso a una persona.' },
  { service: 'Consultoría / diagnóstico ampliado', min: 90, max: 180, scope: 'Análisis y hoja de ruta. La primera conversación es gratuita.' },
  { service: 'Mantenimiento web', min: 35, max: 60, monthly: true, scope: 'Revisión técnica y pequeñas tareas acordadas.' },
  { service: 'Soporte de automatización', min: 50, max: 120, monthly: true, scope: 'Supervisión, ajustes menores y soporte.' },
];

export const faqs = [
  {
    question: '¿Qué es GALEON?',
    answer:
      'GALEON es una consultora de inteligencia artificial de Sevilla. Ayudamos a pymes, autónomos y comercios a automatizar tareas repetitivas, implantar asistentes de IA y tener una web que capte clientes, con un único equipo para web, automatización e IA.',
  },
  {
    question: '¿Cuánto cuesta una página web?',
    answer:
      'Una landing page cuesta entre 450 y 650 € y una web corporativa de hasta 5 secciones entre 850 y 1.300 €. Las webs con más secciones o funcionalidades empiezan en 1.400 €. Son precios orientativos sin IVA; dominio y hosting van aparte.',
  },
  {
    question: '¿Cuánto cuesta automatizar un proceso con IA?',
    answer:
      'Una automatización sencilla entre dos herramientas cuesta entre 450 y 850 €; una automatización con IA, entre 900 y 1.800 €, y un asistente de IA básico, entre 750 y 1.400 €. Precios orientativos sin IVA; el consumo de APIs o licencias se presupuesta aparte.',
  },
  {
    question: '¿Qué tareas de mi negocio se pueden automatizar con IA?',
    answer:
      'Las más habituales son la atención al cliente y las preguntas frecuentes, la gestión de citas y reservas, la recogida y cualificación de contactos de la web, el paso de formularios al CRM o al email y los informes periódicos. En el diagnóstico te decimos también qué no compensa automatizar.',
  },
  {
    question: '¿Trabajáis solo en Sevilla?',
    answer:
      'No. Estamos en Sevilla y atendemos en persona en Sevilla y alrededores, pero trabajamos en remoto con negocios de toda España.',
  },
  {
    question: '¿El diagnóstico inicial es gratuito?',
    answer:
      'Sí. La primera conversación para entender tu negocio y detectar oportunidades es gratuita y sin compromiso. Si necesitas un análisis ampliado con hoja de ruta por escrito, cuesta entre 90 y 180 € sin IVA.',
  },
  { question: '¿Necesito tener ya una web para automatizar mi negocio?', answer: 'No. Podemos automatizar procesos internos (atención, leads, reporting) aunque todavía no tengas página web.' },
  { question: '¿Cuánto tarda un proyecto?', answer: 'Depende del alcance. Tras el diagnóstico inicial te damos un plazo concreto, sin sorpresas después.' },
  { question: '¿La IA sustituye a mi equipo?', answer: 'No. Se encarga de las tareas repetitivas para que tu equipo se centre en lo que realmente aporta valor. Las automatizaciones tienen supervisión humana y pasan a una persona cuando hace falta.' },
  {
    question: '¿Qué pasa con los datos de mis clientes?',
    answer:
      'Solo pedimos los datos imprescindibles, controlamos quién accede a cada herramienta y revisamos las condiciones de los proveedores de IA antes de usarlos. Cuando tratamos datos por tu cuenta, lo formalizamos con un contrato de encargo de tratamiento.',
  },
  { question: '¿Ofrecéis soporte después del lanzamiento?', answer: 'Sí. Seguimos optimizando la automatización y la web contigo después de publicar. El mantenimiento web cuesta entre 35 y 60 € al mes y el soporte de automatizaciones entre 50 y 120 € al mes, sin IVA.' },
  { question: '¿Puedo pedir solo la web o solo la automatización?', answer: 'Sí, cada servicio funciona de forma independiente: no hace falta contratar el pack completo.' },
];
