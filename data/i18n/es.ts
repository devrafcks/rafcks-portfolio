import type { ContentText } from "./types";

/** Contenido largo en español. Mismo orden que los archivos de data/. */
export const es: ContentText = {
  projects: {
    t2: {
      summary:
        "Sitio institucional de T2 Educação, con cursos preparatorios para certificaciones financieras, área para empresas y landing pages. Lo rehice en Next.js 16 con foco en rendimiento, SEO y conversión.",
      points: [
        "T2 prepara a profesionales para certificaciones del mercado financiero, como CPA y C-Pro. El sitio tenía que cargar rápido, aparecer bien en Google y llevar al visitante hasta la inscripción, y antes dependía de un constructor visual.",
        "Reconstruí el sitio en Next.js 16 con App Router, React 19 y Tailwind CSS 4, con páginas de cursos, de certificaciones y el área para empresas, además de las landing pages de campaña.",
        "Me encargué de los Core Web Vitals, el SEO técnico, la accesibilidad, las animaciones con GSAP y Three.js y el tracking de conversión y checkout en GA4. El sitio usa Supabase y Resend, y el dominio pasa por Cloudflare.",
        "Soy el desarrollador responsable de la tecnología de la empresa. Las capturas muestran solo páginas públicas. El Hub interno, las integraciones y la plataforma del alumno no aparecen aquí.",
      ],
      alts: [
        "Página de inicio del sitio de T2 Educação",
        "Parte de la página de inicio de T2 Educação",
        "Página del curso CPA en el sitio de T2",
        "Continuación de la página de CPA de T2",
        "Página de T2 para empresas",
        "Parte de la página de T2 para empresas",
        "Sitio de T2 Educação en el celular",
      ],
    },
    "t2-blog": {
      summary:
        "Blog público de T2 con artículos y guías sobre certificaciones financieras, carrera y mercado, hecho para leerse en el celular y encontrarse en Google.",
      points: [
        "El blog es la principal puerta de entrada orgánica de T2. Necesitaba un SEO técnico fuerte, lectura cómoda en el celular y un flujo simple para que el equipo publique.",
        "Construí el front en Next.js con Ghost como CMS headless. La portada destaca artículos, como el del examen C-Pro R, y cada artículo muestra autor y fecha.",
        "El SEO técnico y GA4 acompañan cada publicación. Las capturas muestran solo contenido editorial público.",
      ],
      alts: [
        "Página de inicio del Blog T2",
        "Parte de la portada del Blog T2",
        "Lista de artículos del Blog T2",
        "Más artículos del Blog T2",
        "Artículo público sobre la nueva CPA",
        "Continuación del artículo sobre la nueva CPA",
        "Blog T2 en el celular",
      ],
    },
    "t2-docs": {
      title: "T2 Materiales Gratuitos",
      summary:
        "Portal de apuntes, simulacros y resúmenes gratuitos para certificaciones financieras como CPA, C-Pro, CFP y ANCORD, con Next.js y Ghost headless.",
      points: [
        "T2 ofrece materiales de estudio gratuitos para quienes se preparan para certificaciones. El portal organiza apuntes, simulacros y resúmenes por certificación, de forma fácil de navegar y de encontrar en Google.",
        "Hice el portal en Next.js consumiendo Ghost en modo headless, para que el equipo publique sin tocar código.",
        "Los materiales publicados son de estudio. Ningún dato de alumnos aparece en el portal.",
      ],
      alts: [
        "Página de inicio de los materiales gratuitos de T2",
        "Parte de la página de materiales gratuitos de T2",
        "Lista pública de materiales gratuitos de T2",
        "Materiales gratuitos de T2 en el celular",
      ],
    },
    mirante: {
      summary:
        "ERP multiempresa con punto de venta (PDV), NF-e (factura electrónica brasileña) integrada a la SEFAZ, finanzas con conciliación, inventario, compras y K8 Pay para Pix y boleto bancario. El sistema más grande que he construido.",
      points: [
        "Las pequeñas y medianas empresas suelen controlar ventas, inventario, compras y finanzas en herramientas sueltas. Mirante reúne todo en un solo sistema, con varias empresas y sucursales en la misma cuenta y un selector de unidad arriba.",
        "Ventas: PDV de caja con pago y cierre, pedidos de venta con vendedores y presupuestos. Inventario con dashboard de productos por debajo del mínimo o en negativo, catálogo, precios, categorías y servicios.",
        "Fiscal y compras: emisión y gestión de NF-e integrada a la SEFAZ con certificado A1, panel de facturas recibidas con manifestación, solicitudes de compra con aprobación o rechazo y entrada de mercancías por XML, por la clave de la NF-e o manual.",
        "Finanzas: cuentas por pagar y por cobrar, apertura y cierre de caja, cuentas bancarias con extracto y conciliación, anticipos, refinanciación de cuotas, centro de costos y plan de cuentas. También integré al ERP K8 Pay, la pasarela de K8 Fintech, para cobrar por Pix y boleto.",
        "Gestión: dashboard con KPIs, facturación año a año y proyección de ventas, registro unificado de clientes, proveedores y empleados, usuarios y permisos, log de auditoría exportable, búsqueda global y acciones rápidas con Ctrl+K y personalización de tema, densidad y animaciones.",
        "Hice el sistema en ByStartup, en unos tres meses. La idea del producto vino del cliente. El prototipo, el diseño del producto, el desarrollo full stack y la infraestructura quedaron a mi cargo, del front-end a la base de datos, las integraciones y el deploy. Las capturas son de una cuenta de prueba, con datos ficticios.",
      ],
      alts: [
        "Dashboard: KPIs y gráficos",
        "Dashboard: facturación y proyección",
        "Dashboard: categorías y actividad reciente",
        "Productos e inventario: alertas por debajo del mínimo",
        "Dashboard de inventario: productos por debajo del mínimo",
        "PDV: caja de venta",
        "PDV: pago y cierre de la venta",
        "Pedidos de venta",
        "Nuevo pedido de venta",
        "Nuevo presupuesto",
        "Presupuestos",
        "Cuentas por cobrar",
        "Cuentas por pagar",
        "Registro de personas",
        "Gestión de caja",
        "Solicitudes de compra",
        "Nueva solicitud de compra",
        "Solicitud de compra: aprobar o rechazar",
        "Entrada de mercancías por XML",
        "Configuración",
        "Búsqueda global, Ctrl+K",
        "Empresas y sucursales",
        "Usuarios y permisos",
        "Log de auditoría",
        "Personalización del tema",
      ],
      coverAlt: "Dashboard: facturación y proyección",
    },
    carretel: {
      summary:
        "Mi SaaS propio para talleres de costura: registra el corte, comprueba la entrega y cobra por Pix desde el celular, incluso con poca señal. Bilingüe, en portugués y español.",
      points: [
        "Los dueños y dueñas de talleres de costura, muchos de la comunidad boliviana en São Paulo, controlan cortes, entregas y pagos en un cuaderno y en WhatsApp. Cuando surge una diferencia de cantidad o de valor, no hay prueba de nada. Carretel lo resuelve con tres verbos: registra, comprueba y cobra.",
        "Registrar: el corte recibido entra con foto, cantidad y precio dictados por voz, curva de tallas, plazo y avíos, y la producción se anota por persona, operación y máquina. Comprobar: un enlace público muestra fotos, tallas, valor y código de verificación, y el contratante confirma por WhatsApp sin crear cuenta. La aceptación guarda hora, navegador e IP y queda inmutable en la base de datos.",
        "Cobrar: la pantalla muestra quién debe y desde hace cuántos días, genera el mensaje listo para WhatsApp con Pix Copia e Cola y código QR (BR Code con CRC16 hecho en el propio proyecto) y permite registrar el pago total o parcial. También tiene liquidación semanal con recibo bilingüe, calculadora de precio justo por pieza, exportación de datos según la LGPD (la ley brasileña de protección de datos) y eliminación de cuenta.",
        "La app es offline first: las acciones entran en una cola idempotente en IndexedDB y se sincronizan cuando vuelve la señal, con service worker e instalación como PWA. Es multi-tenant, con aislamiento por taller probado contra un Postgres real.",
        "La suscripción funciona con AbacatePay, con webhook validado por HMAC-SHA256. La interfaz sigue WCAG 2.2 AA, con áreas táctiles grandes y SeeB integrado, y el proyecto tiene pruebas con Vitest, pruebas de propiedades con fast-check y pruebas de accesibilidad con Playwright y axe.",
        "Es un producto mío, de la idea a la especificación, el diseño y el código. Está en prelanzamiento.",
      ],
      alts: [
        "Página de inicio de Carretel",
        "Parte de la página de Carretel",
        "Otra vista de la página de Carretel",
        "Sección de cómo funciona Carretel",
        "Carretel en el celular",
        "Otra pantalla de Carretel en el celular",
        "Panel Hoy de Carretel, con lo que debe el taller, piezas en producción y la liquidación de la semana",
        "Lista de cortes del taller en Carretel, con estado de costura y entrega",
        "Corte entregado en Carretel, con curva de tallas, operaciones y precio por pieza",
        "Cobros de Carretel por días de atraso, con botón para cobrar por WhatsApp",
        "Código QR de Pix generado por Carretel para un cobro",
        "Producción del día en Carretel, con piezas y monto a pagar por persona",
        "Liquidación semanal del equipo en Carretel",
        "Calculadora de Carretel para ver si un corte deja ganancia",
        "Informes de Carretel, con cortes del mes y facturación",
        "Comprobante de entrega confirmado en Carretel, con código de verificación",
        "Panel Hoy de Carretel en el celular",
        "Cobros de Carretel en el celular",
      ],
    },
    gatelite: {
      summary:
        "La Tierra de hoy, vista desde arriba: elige un lugar y mira la imagen satelital del día, qué satélites pasaron por encima, cómo cambió desde 2000 y qué está pasando cerca ahora. Todo con datos abiertos de la NASA, sin login y sin base de datos.",
      points: [
        "El nombre une gato y satélite. Las imágenes satelitales de la NASA son abiertas, pero están repartidas en portales técnicos. Gatélite las reúne en un solo sitio, pensado para quien quiere ver su barrio, su ciudad o el planeta entero desde arriba.",
        "Explorar: un globo con el mosaico diario de los satélites de la NASA (VIIRS y MODIS), Landsat y Sentinel a 30 m, infrarrojo, luces nocturnas, temperatura y humo. Cuando el zoom pasa de lo que muestra la imagen del día, el mapa cambia solo a una capa de alta resolución, en la que se ven casas, manzanas y el Cristo Redentor. Toda la vista queda en la URL.",
        "La pestaña Tiempo muestra los últimos 14 días del lugar lado a lado y estima la nubosidad de cada uno por el color de la imagen, con la salida y la puesta del Sol. Los pasos de 14 satélites en las últimas y las próximas 24 horas se calculan en el navegador, con SGP4 en un Web Worker. También hay un time-lapse del mismo día del año desde 2001 y un antes y después con cortina deslizable.",
        "El planeta ahora: un mapamundi con el día y la noche avanzando en tiempo real, las luces de las ciudades, la flota de satélites en vivo, los eventos naturales activos (incendios, tormentas, volcanes e icebergs) y las fotos de la cámara EPIC, tomadas a 1,5 millones de km.",
        "No hay cuenta ni base de datos: la URL guarda la vista, el dispositivo guarda los lugares guardados y el servidor solo hace caché de las APIs externas. El dominio (órbitas, nubes, Sol y eventos) está hecho de reglas puras probadas con Vitest. Es un proyecto personal de código abierto, con licencia MIT y sin vínculo oficial con la NASA.",
      ],
      alts: [
        "Página de inicio de Gatélite, con la Tierra fotografiada hoy por la cámara EPIC",
        "El planeta entero en fotos del día y el conteo de pasos sobre ciudades brasileñas",
        "Explorador de Gatélite con Río de Janeiro en la imagen satelital del día",
        "Capa de alta resolución con zoom en Alto da Boa Vista, en Río de Janeiro",
        "Pestaña Tiempo con los últimos 14 días del lugar, la nubosidad de cada uno y la salida y la puesta del Sol",
        "Pasos de los satélites sobre el lugar en las últimas y las próximas 24 horas",
        "Explorador con el globo entero y la pestaña de eventos naturales abierta",
        "Mapa del planeta ahora, con el día, la noche y las luces de las ciudades",
        "Fotos de la cámara EPIC día a día, tomadas a 1,5 millones de km",
        "Flota de satélites en vivo, con la ficha del Landsat 9",
        "Tabla de los satélites seguidos, por resolución y ancho de franja",
        "Página de la marca de Gatélite",
        "Página 404 de Gatélite, Fuera de la franja",
        "Página de inicio de Gatélite en el celular",
        "Explorador en el celular, con la pestaña Tiempo abierta",
        "El planeta ahora en el celular",
      ],
    },
    cresce: {
      summary:
        "SaaS de gestión para micro y pequeños negocios. Reescribí el producto en Next.js 16 y migré la infraestructura a Neon y Vercel.",
      points: [
        "El SaaS de Cresce+ organiza inventario, ventas, tareas y equipo de micro y pequeños negocios. La versión anterior estaba repartida entre Azure, Railway y Hostinger, era cara de mantener y difícil de evolucionar.",
        "Reescribí la aplicación en Next.js 16 full stack con App Router y Tailwind CSS, con autenticación y pagos por Mercado Pago.",
        "Llevé la base de datos a Neon PostgreSQL y la aplicación a Vercel, y centralicé el dominio.",
        "También hice el sitio institucional de la consultora, que está en otra tarjeta.",
      ],
      alts: [
        "Panel de Cresce+ Futuro, con facturación, días de venta y ticket promedio",
        "Historial de ventas de Cresce+ Futuro, con canal y forma de pago",
      ],
    },
    xerox: {
      summary:
        "Sistema de producción para imprentas que reemplazó los vales de caja en papel y las planillas por registros digitales, inventario automático e informes en Excel y PDF.",
      points: [
        "En muchas imprentas y centros de copiado, cada servicio se anota en un vale de papel y se suma en una planilla al cierre del día. Eso genera errores, pérdida de historial y ningún control de inventario. Xerox Manager cambia ese flujo por un sistema simple, rastreable y en tiempo real.",
        "El empleado escribe el código del producto, y el nombre y el precio aparecen solos. Ajusta cantidad y precio, confirma, y el inventario se descuenta automáticamente. Editar y borrar solo se permite el mismo día.",
        "El administrador gestiona empleados, productos e inventario, con alerta de inventario bajo y ajuste manual, y saca informes por período con producción por empleado y consumo de inventario, exportados en Excel con tres hojas y en PDF.",
        "La seguridad se trató con cuidado: contraseñas con bcrypt, sesiones en JWT en una cookie httpOnly con tabla de sesiones que se puede invalidar, verificación de permisos en cada Server Action y filtros validados con Zod.",
        "Es una versión de demostración que sigue la misma lógica del sistema usado en producción. Hice todo, de la base de datos a la interfaz, con SeeB integrado.",
      ],
      alts: [
        "Pantalla de acceso de Xerox Manager",
        "Panel del administrador en Xerox Manager, con ingresos del día, inventario y productos más vendidos",
        "Resumen por empleado en el panel de Xerox Manager",
        "Registro de empleados de Xerox Manager",
        "Productos e inventario de Xerox Manager, con alerta de inventario bajo",
        "Informes de producción e inventario de Xerox Manager",
        "Informe en PDF de Xerox Manager, con consumo de inventario y desempeño del equipo",
        "Panel del empleado en Xerox Manager, con la producción del día",
        "Nuevo registro en Xerox Manager, con producto, cantidad e inventario disponible",
        "Panel del empleado en Xerox Manager, en el celular",
        "Nuevo registro en Xerox Manager, en el celular",
      ],
    },
    somnus: {
      summary:
        "App para registrar las horas de sueño y ver patrones: promedio, mejor y peor noche y gráficos de evolución, con cuenta por usuario y accesibilidad integrada.",
      points: [
        "Quien quiere mejorar su sueño necesita datos simples y constantes, sin apps llenas de funciones que nadie usa. Somnus hace una cosa bien: registrar y analizar las horas dormidas.",
        "El flujo es directo: entras, registras la noche y ves el análisis. El panel muestra el promedio de sueño, la mejor y la peor noche, el historial completo y gráficos de evolución.",
        "La autenticación usa Clerk, y cada persona solo ve sus propios datos. El back-end corre en Server Actions de Next.js, tipado de punta a punta con Prisma y PostgreSQL en Neon.",
        "La accesibilidad fue un requisito desde el principio, con SeeB integrado. Hice el proyecto solo, de la base de datos al deploy en Vercel.",
      ],
      alts: [
        "Página de inicio de Somnus",
        "Otra vista de la página de Somnus",
        "Somnus en el celular",
        "Otra pantalla de Somnus en el celular",
      ],
    },
    bicus: {
      summary:
        "App de servicios, productos, alquileres y tiendas de la ciudad, con mapa, chat y anuncios destacados pagados por Pix, tarjeta o boleto. En la App Store, en Google Play y en la web.",
      points: [
        "Bicus reúne servicios, productos, alquileres y tiendas de la ciudad en una sola app, con búsqueda por cercanía y vendedores verificados.",
        "La app muestra los anuncios en el mapa, con selección de ubicación y búsqueda de direcciones, y tiene chat dentro de la aplicación para acordar directamente con el vendedor.",
        "Quien publica puede impulsar su anuncio. El pago se hace por Mercado Pago, con Pix, tarjeta o boleto, y el destacado se activa solo después de la confirmación. La app no recibe ni guarda datos de tarjeta.",
        "Un único código en Expo y React Native genera las apps de iOS y Android y la versión web. Del cliente recibí la idea del producto. El prototipo, el producto, el desarrollo full stack y la infraestructura quedaron a mi cargo.",
      ],
      alts: [
        "Versión web de Bicus",
        "Bicus en el celular, versión web",
        "Página de Bicus en Google Play",
        "Pantalla de Bicus publicada en Google Play",
        "Otra pantalla de Bicus publicada en Google Play",
        "Pantalla de Bicus publicada en la App Store",
        "Otra pantalla de Bicus publicada en la App Store",
      ],
    },
    apertou: {
      summary:
        "Marketplace para que las tiendas físicas vendan por el celular, con app, panel del comerciante y administración. Pix o tarjeta, split automático para cada tienda y pedido condicional.",
      points: [
        "Las tiendas de barrio pierden ventas porque no están en el celular del cliente, y montar un e-commerce propio sale caro. Apertou Comprou pone esas tiendas en un marketplace local, con entrega a domicilio o retiro en el local.",
        "El cliente compra por la app o por el sitio, habla con la tienda por el chat y puede pedir prendas para probárselas antes de pagar, en el pedido condicional. El pago es por Pix o tarjeta.",
        "Cada tienda tiene un receptor en Pagar.me, y el valor de cada venta se divide automáticamente por split y se transfiere a la cuenta bancaria del comerciante. El panel guía el registro bancario y bloquea la activación de la tienda hasta que esté completo.",
        "El producto tiene tres frentes: la app para el cliente, el panel del comerciante y la administración del marketplace, con gráficos de seguimiento. La idea vino del cliente. Yo hice el prototipo, el producto, el desarrollo full stack y la infraestructura.",
      ],
      alts: [
        "Página de Apertou Comprou",
        "Parte de la página de Apertou Comprou",
        "Otra vista de la página de Apertou Comprou",
        "Otra parte de la página de Apertou Comprou",
        "Apertou Comprou en el celular",
        "Página de Apertou Comprou en la App Store",
        "Página de Apertou Comprou en Google Play",
        "Pantalla de la app publicada en la App Store",
        "Otra pantalla de la app publicada en la App Store",
        "Pantalla de la app publicada en Google Play",
        "Otra pantalla de la app publicada en Google Play",
      ],
    },
    junto: {
      summary:
        "App y sitio para encontrar entrenamientos abiertos de carrera cerca de ti, creados por gente real. Puedes ver quién va, confirmar asistencia y crear tu propio entrenamiento. En la web, en Google Play y en la App Store.",
      points: [
        "Correr solo desanima, y combinar por el grupo no siempre funciona. Junto muestra entrenamientos abiertos cerca de ti, creados por gente real. La frase del producto es: encuentra a alguien, corre junto.",
        "Puedes ver quién va, confirmar asistencia, entrar al chat del entrenamiento, hacer check-in en el punto de encuentro y crear tu propio entrenamiento, con lugar, día y tono. Los entrenamientos aparecen por barrio y horario, y hay un filtro de entrenamientos solo para mujeres. La app es gratis, sin tarjeta.",
        "La página explica la seguridad del encuentro: identidad verificada, lista abierta de confirmados, rastreo en vivo con una persona de confianza, check-out automático y botón de emergencia. Los crews y las asesorías tienen página, agenda y entrenamientos abiertos. La beta está abierta en Río de Janeiro.",
        "En la App Store y en Google Play la app se llama \"junto: companhia para correr\". La idea del producto vino del cliente. El prototipo, el producto, el desarrollo full stack y la infraestructura fueron trabajo mío.",
      ],
      alts: [
        "Página inicial de Junto",
        "Cómo funciona Junto",
        "Seguridad del encuentro en el sitio de Junto",
        "Recursos de Junto en el sitio",
        "Junto en el celular",
        "Página de Junto en Google Play",
        "Pantalla de Junto publicada en Google Play",
        "Otra pantalla de Junto publicada en Google Play",
        "Tercera pantalla de Junto publicada en Google Play",
      ],
    },
    voxx: {
      summary:
        "Sitio de Agência Voxx, de marketing digital en Itapetininga, con animaciones en Framer Motion y formulario de contacto con envío de correo.",
      points: [
        "La agencia necesitaba un sitio que mostrara su trabajo con la misma calidad visual que entrega a sus clientes, sin quedar pesado en el celular.",
        "La página presenta planificación, redes sociales, identidad visual y publicidad pagada, con animaciones de entrada y de scroll hechas en Framer Motion.",
        "Lo hice en Next.js 16 con App Router, Tailwind CSS y fuentes de Google (Besley y DM Sans). El formulario de contacto envía el correo por Resend con Nodemailer, y Google Analytics entra por @next/third-parties.",
      ],
      alts: [
        "Página de inicio de Agência Voxx",
        "Servicios en la página de Agência Voxx",
        "Agência Voxx en el celular",
      ],
    },
    jotape: {
      summary:
        "E-commerce de relojes originales, hecho como freelance: catálogo por marca, búsqueda, checkout con Pix o tarjeta por Mercado Pago, seguimiento de pedidos y WhatsApp.",
      points: [
        "Tienda de relojes originales que necesitaba un e-commerce propio, donde el cliente compra solo, a cualquier hora.",
        "El catálogo está organizado por marca, con búsqueda, página de producto y carrito. El pago se hace en el propio sitio, por Pix o tarjeta de crédito, procesado por Mercado Pago.",
        "El cliente sigue su pedido en el sitio y habla con la tienda por WhatsApp. La tienda también se puede instalar como app en el celular. Recibí la idea de la tienda y me encargué del resto: prototipo, producto, desarrollo full stack e infraestructura.",
      ],
      alts: [
        "Página de Jotape Relógios",
        "Parte de la página de Jotape Relógios",
        "Otra vista de Jotape Relógios",
        "Catálogo de Jotape Relógios",
        "Jotape Relógios en el celular",
        "Otra pantalla de Jotape Relógios en el celular",
      ],
    },
    seeb: {
      summary:
        "Widget y extensión de accesibilidad open source, creados en mi trabajo de conclusión de curso (TCC). Con una línea de script, cualquier sitio gana contraste, filtros para daltonismo, lector de voz y más, sin recopilar datos.",
      points: [
        "Mucha gente con baja visión, daltonismo o TDAH encuentra barreras para leer la web, y la mayoría de los sitios no ofrece ningún ajuste. SeeB nació como extensión gratuita para Chromium y se convirtió también en un widget que cualquier sitio integra con una línea.",
        "El panel reúne filtros de protanopia, deuteranopia, tritanopia y monocromático, alto contraste, inversión de colores y modo oscuro, texto ampliado, espaciado, negrita, enlaces subrayados y destacados, regla y línea de enfoque de lectura, brillo y saturación, ocultar imágenes, detener animaciones, resaltado del foco del teclado, cursor grande y lector de voz con elección de voz y velocidad.",
        "El widget se sirve por CDN en Cloudflare Pages, así que cada mejora llega al instante a quien ya lo usa. La documentación pública enseña a integrarlo en HTML puro, Vite, Vue, Angular y Next.js con App Router, incluidos los cuidados con SSR e hydration que yo mismo resolví al integrar el widget en proyectos Next.js.",
        "La extensión usa Manifest V3, solo pide los permisos storage y activeTab y está en la Chrome Web Store. No se recopila nada: las preferencias quedan en el propio navegador.",
        "Hoy SeeB va integrado en mis proyectos, como Carretel, Xerox Manager, Somnus, Giz, Velory, el dashboard de Excel, Agência Voxx y el sitio institucional de Cresce+ Futuro. Hice la parte técnica del TCC en la ETEC Parque Belém y sigo manteniendo el proyecto abierto en GitHub.",
      ],
      alts: [
        "Portada de la página de SeeB",
        "Funciones de SeeB",
        "Documentación pública de SeeB",
        "Parte de la documentación de SeeB",
      ],
    },
    giz: {
      title: "GIZ, asistente de IA",
      summary:
        "Agente de IA que recibe un briefing corto y escribe los textos para WhatsApp, Instagram y correo. Protege los datos personales antes de llamar al modelo y solo publica con aprobación humana.",
      points: [
        "Proyecto del desafío \"Seu Primeiro Agente de IA\" (Tu primer agente de IA). Giz es una cadena de gimnasios ficticia en la que el equipo pierde tiempo escribiendo avisos y campañas para cada canal.",
        "El agente trabaja en cuatro etapas. Primero el servidor enmascara CPF (el número de contribuyente brasileño), teléfono, correo y tarjeta antes de cualquier envío al modelo. Después entiende el pedido, escribe y revisa. Al final, una persona lee, edita y aprueba. Nada se publica solo.",
        "Las etapas con modelo usan persona, meta-prompting, few-shot y verificación por preguntas, con salida en JSON para encadenar una etapa con otra y una temperatura distinta por tarea (0,2 en la clasificación y la revisión, 0,8 en la escritura).",
        "El texto del colaborador entra delimitado y se trata como dato, para evitar la inyección de prompt. La guía de marca prohíbe prometer resultados físicos, dar orientación de salud e inventar información.",
        "El back-end son funciones serverless de Node.js en Vercel, con respuesta en streaming NDJSON. El front es HTML, CSS y JavaScript en módulos, sin framework. El modelo es Gemini 3.5 Flash-Lite, con gemini-flash-lite-latest de respaldo.",
      ],
      alts: [
        "Sitio de Giz: briefing y etapas del agente",
        "Giz en modo demostración",
        "Formulario de Giz: canal, tono y generar comunicación",
        "Evidencia: pantalla de inicio de Giz",
        "Evidencia: agente por etapas",
        "Evidencia: revisión y verificación",
      ],
    },
    "steal-a-boo": {
      summary:
        "Simulator social para Roblox en una feria nocturna, para hasta 8 jugadores: captura Boos, arma tu base, genera Cash, roba a tus amigos y defiende lo que es tuyo. Hecho con IA, por diversión.",
      points: [
        "Experimento personal para aprender desarrollo de juegos en Roblox con un flujo profesional, usando IA como apoyo.",
        "Capturas Boos de 7 rarezas y los pones en la base para generar Cash por segundo. Entrenas Speed y Throw Power y construyes hasta 6 pisos.",
        "Puedes robar de las bases con el portón abierto y defenderte con sustos cómicos. Tiene Rebirth, cofre diario y ranking. Los sustos son leves, aptos para todas las edades.",
        "El código vive fuera de Studio, en Luau versionado en Git, sincronizado con Rojo, con paquetes de Wally y los datos de los jugadores guardados con ProfileStore.",
      ],
      alts: [
        "Vista general del parque de Steal a Boo",
        "Plaza central de Steal a Boo",
        "Base con pisos de Steal a Boo",
        "Zona de captura de Steal a Boo",
        "Carpa secreta de Steal a Boo",
      ],
    },
    "67-noites": {
      summary:
        "Survival cooperativo de 1 a 5 jugadores en un terreiro (casa de culto afrobrasileña) en medio del bosque: mantener el caldero encendido y sobrevivir 67 noches hasta el enfrentamiento con Zé Pilintra. Hecho con IA, por diversión.",
      notice:
        "Este juego es una obra de ficción hecha con total respeto a la Umbanda y a la cultura afrobrasileña, sin ninguna intención de ofender. Las entidades aparecen como guardianes que ponen a prueba al jugador, y el juego no reproduce rituales, cantos ni rezos reales. El humor está en las situaciones del juego, nunca en la religión.",
      points: [
        "Experimento personal de survival cooperativo en Roblox, hecho con ayuda de IA y con total respeto a la Umbanda y a la cultura afrobrasileña.",
        "Cada noche, el grupo defiende el caldero de invasiones y se encuentra con cuatro entidades, que aparecen como guardianes que ponen a prueba al jugador. El combate es simple, con combo, esquiva y parada.",
        "El mapa tiene biomas como el terreiro, la cantera y la cabaña en el bosque.",
        "El código es Luau versionado con Rojo y Wally, con datos guardados con ProfileStore, lint con Selene, formato con StyLua y scripts con Lune. El README registra 646 pruebas de balance.",
      ],
      alts: [
        "Lobby de 67 Noites com Exu",
        "Terreiro con ipé y pasto alto",
        "Bioma de la cantera",
        "Invasión en el caldero",
        "Cabaña en el bosque",
        "Noche con el caldero encendido",
        "Animales del juego",
        "Árbol talado con motosierra",
        "Banner de 67 Noites com Exu",
      ],
    },
    offscope: {
      summary:
        "FPS online en primera persona para Roblox, centrado en el no-scope: un rifle de francotirador, un cuchillo, tres mapas, ranked con ELO y un servidor que valida cada disparo. Hecho con IA, por diversión.",
      notice: "Leve, 16+, violencia leve, sin sangre",
      points: [
        "Proyecto personal para aprender netcode y juego competitivo, hecho con ayuda de IA (Claude Code).",
        "Modos Duelo 1v1 y Dúos 2v2, casual y ranked con ELO, además de Equipos 4v4 y Todos contra todos para 8 jugadores. Al final de la partida, una votación de 20 segundos elige el siguiente mapa.",
        "El servidor decide cada disparo. El cliente envía la intención con una semilla determinista, y el servidor recalcula la dirección, retrocede las hitboxes en el tiempo (lag compensation a 30 Hz, hasta 0,45 s) y confirma el impacto. El cuchillo mata de un golpe por la espalda.",
        "Tres mapas hechos solo con código, con terreno real vía WriteVoxels: Cais 09, un puerto al amanecer, Avenida 11, el centro de noche, y Posto 47, en la sierra. El arma, los brazos y el cuchillo se arman con Parts y se animan por código, y los 22 sonidos y las texturas también se generan en el repositorio.",
        "Cosméticos solo visuales, sin cajas y sin pay-to-win, con tienda diaria igual en todos los servidores y compra confirmada solo después de que ProfileStore guarda. El README marca 13,5 mil líneas de Luau, y el CI ejecuta rojo build, type-check con luau-lsp y Selene en cada push.",
      ],
      alts: [
        "Partida en Posto 47, en el mapa de OFFSCOPE",
        "Mira telescópica del rifle de francotirador en OFFSCOPE",
        "Cuchillo en primera persona en OFFSCOPE",
        "Base de OFFSCOPE vista desde arriba",
        "Plaza con los portales de cola de OFFSCOPE",
        "Mapa Cais 09 de OFFSCOPE",
        "Mapa Avenida 11 de OFFSCOPE",
        "Banner de OFFSCOPE",
      ],
    },
    mapinion: {
      summary:
        "App móvil para descubrir y recomendar lugares, con foto, nota de 1 a 5 y comentario, y un feed con las recomendaciones de otras personas. Hice la app y la API.",
      points: [
        "Las recomendaciones de lugares suelen perderse en los chats de grupo. Mapinion guarda todo en un feed: publicas el lugar con foto, nota y comentario y sigues lo que recomiendan otras personas.",
        "La app en React Native con Expo y Expo Router tiene login, registro y tres pestañas: feed, nueva recomendación y perfil. La sesión queda en Zustand con AsyncStorage, y la foto viene de la galería con Expo Image Picker.",
        "En el perfil ves, editas y borras tus recomendaciones.",
        "La API también es mía: Node.js con Express, MongoDB con Mongoose, contraseñas con bcrypt, login con JWT de 15 días e imágenes en Cloudinary. El feed está paginado, el avatar lo genera DiceBear y un cron mantiene el servidor activo.",
      ],
      alts: [
        "Pantalla de login de Mapinion",
        "Pantalla de registro de Mapinion",
        "Pantalla de nueva recomendación de Mapinion",
      ],
    },
    "excel-dashboard": {
      title: "Dashboard de ventas de Excel",
      summary:
        "Prueba técnica: subes una planilla de ventas y la app limpia los datos y arma un dashboard con métricas, cuatro gráficos, filtros y la tabla completa, todo en el navegador.",
      points: [
        "Las planillas de ventas reales vienen con filas vacías, categorías escritas de formas distintas y meses fuera de formato. El desafío era llegar a un panel útil sin back-end.",
        "La app lee la primera hoja del .xlsx o .xls con SheetJS, descarta las filas sin categoría, producto o ingreso y normaliza categorías y meses.",
        "El panel muestra ingresos totales, pedidos y ticket promedio, y cuatro gráficos en Recharts: ventas por categoría, ventas por mes, cantidad por mes y top 5 productos por ingresos.",
        "Los filtros por categoría y mes alimentan una tabla con ordenamiento, paginación, búsqueda en tiempo real y 10, 25, 50 o 100 elementos por página. SeeB entra en el index.html.",
      ],
      alts: ["Dashboard de ventas con gráficos", "Pantalla de carga de la planilla de Excel"],
    },
    "bystartup-web-qa": {
      summary:
        "Skill para que agentes de IA como Claude Code y Gemini CLI generen, ejecuten y corrijan pruebas E2E con Playwright en aplicaciones web. Creada en Bystartup Labs.",
      points: [
        "Escribir y mantener pruebas de punta a punta lleva tiempo y suele quedar para después. La skill le pasa ese trabajo al agente de IA, con reglas claras.",
        "El agente lee los archivos del front, encuentra botones, formularios, navegación, llamadas a la API y estados de error, carga y éxito, y escribe las pruebas en testes/[feature].e2e.test.ts, creando la carpeta cuando no existe.",
        "Después ejecuta las pruebas, vuelve a intentar, corrige lo que falló y actualiza las pruebas antiguas sin perder la cobertura que ya funcionaba.",
        "Detecta login con JWT, cookies, localStorage, NextAuth, Clerk, Firebase Auth y Auth0, guarda la sesión y genera escenarios para celular, tablet y desktop, con selectores semánticos y accesibles.",
        "Funciona con React, Next.js, Vue, Angular y otras interfaces web. Creé la skill en el programa interno de innovación de ByStartup.",
      ],
      alts: ["Banner de la skill bystartup-web-qa"],
    },
    "iran-tapetes": {
      summary:
        "Página de link en la bio para Iran Tapetes Orientais, tienda en Jardins, São Paulo: WhatsApp, tienda online, Instagram, mapa y horario con un diseño premium.",
      points: [
        "La tienda necesitaba un link en la bio a la altura de las alfombras que vende, con todo lo que el cliente busca a un toque.",
        "La página reúne WhatsApp, tienda online, Instagram, correo, el mapa de la tienda física y el horario de atención.",
        "Es mobile first, con degradado animado, glassmorphism y layout en CSS Grid, mapa de Google integrado y manifest con íconos para la pantalla de inicio.",
      ],
      alts: [
        "Página de Iran Tapetes Orientais en la computadora",
        "Página de Iran Tapetes Orientais en el celular",
      ],
    },
    "pizzaria-relampago": {
      summary:
        "Página de link en la bio para Pizzaria Relâmpago, pizzería artesanal en Itu (SP), que lleva directo al pedido online, WhatsApp, redes sociales y mapa.",
      points: [
        "El objetivo era simple: quien llega desde Instagram tiene que poder pedir con un toque.",
        "El botón de pedido va destacado, seguido de WhatsApp, Instagram, Facebook y el mapa con la dirección.",
        "La hice en HTML y CSS puros, sin framework ni dependencias, para que cargue casi al instante en el celular. El fondo se cambia con una variable CSS.",
      ],
      alts: [
        "Página de Pizzaria Relâmpago en la computadora",
        "Página de Pizzaria Relâmpago en el celular",
      ],
    },
    linkbio: {
      summary:
        "Mi página de link en la bio, con mi identidad visual: portafolio, LinkedIn, GitHub, correo y la música que escucho, con embeds de Spotify.",
      points: [
        "Reúne una tarjeta de presentación con foto, una frase destacada y los enlaces al portafolio, LinkedIn, GitHub, Spotify y correo.",
        "Sigue la identidad de mi banner, con Unbounded y Montserrat Black Italic, amarillo y naranja sobre fondo oscuro. El verde aparece solo en las partes de Spotify, que muestran playlists y álbumes favoritos en la propia página.",
        "HTML y CSS con variables, Flexbox y animaciones, metadatos Open Graph y manifest.",
      ],
      alts: [
        "Página de link en la bio en la computadora",
        "Página de link en la bio en el celular",
      ],
    },
    "agenda-manager": {
      summary:
        "Prueba técnica de front-end: agenda de 8 a 18 h con creación y eliminación de horarios, validación de formulario, estadísticas y gráfico de la distribución por horario.",
      points: [
        "El desafío pedía una agenda diaria clara, con reglas de validación y una vista rápida de cómo está distribuido el día.",
        "La página de inicio presenta el producto. La agenda agrupa los horarios del día, abre un modal para crear una cita y permite eliminarla.",
        "El formulario usa React Hook Form con Zod: título y cliente de 3 a 100 caracteres, horarios en HH:mm y descripción opcional de hasta 500 caracteres.",
        "El estado queda en Redux Toolkit, con cuatro citas de ejemplo que duran la sesión, y las estadísticas aparecen en un gráfico de Recharts.",
      ],
      alts: [
        "Agenda del día con el gráfico de horarios",
        "Página de inicio de la agenda",
        "Agenda en el celular",
      ],
    },
    "epic-musical": {
      summary:
        "Landing page de fan de Epic: The Musical, con secciones interactivas, animaciones de scroll en GSAP, carrusel de álbumes de Spotify y FAQ.",
      points: [
        "Proyecto personal para practicar animación y narrativa visual en una página larga.",
        "El layout usa Flexbox, Grid y variables de color, con el breakpoint principal en 768px.",
        "GSAP 3 con ScrollTrigger hace las entradas y los efectos de scroll. Los álbumes entran por el embed de Spotify, y los íconos vienen de Font Awesome y Material Symbols.",
      ],
      alts: [
        "Portada de la landing de Epic: The Musical",
        "Landing de Epic: The Musical en el celular",
      ],
    },
    velory: {
      summary:
        "Proyecto final del curso Ingeniero Front-end de EBAC: catálogo de restaurantes con reseñas, carrito y checkout con entrega y pago simulado, en React y TypeScript.",
      points: [
        "El desafío final del curso era juntar todo lo que había estudiado en un producto completo de delivery.",
        "El listado muestra restaurantes con categoría y nota, y cada uno tiene su menú. El carrito vive en Redux Toolkit, y el contador aparece arriba.",
        "El checkout pasa por la revisión de los productos, la dirección de entrega, datos de tarjeta simulados y la confirmación del pedido. Los datos vienen de una API consumida con Axios, y las rutas usan React Router.",
      ],
      alts: ["Catálogo de restaurantes de Velory", "Velory en el celular"],
    },
    matemagika: {
      summary:
        "Aplicación educativa de matemáticas hecha en grupo como trabajo escolar: resuelve ecuaciones de primer y segundo grado paso a paso y hace interpolación lineal con gráfico.",
      points: [
        "El trabajo pedía una herramienta que ayudara a estudiar matemática computacional.",
        "El cálculo muestra las raíces y el paso a paso. Para una ecuación de primer grado, el coeficiente a queda vacío o en cero.",
        "La interpolación recibe pares de puntos y dibuja la recta en Chart.js. La página deja claro que el trabajo es de un grupo.",
      ],
      alts: ["Resolución de ecuaciones e interpolación en MatemaGika", "MatemaGika en el celular"],
    },
    "marina-kamiya": {
      title: "Cresce+ Futuro, sitio institucional",
      summary:
        "Landing page de la consultora Cresce+ Futuro, dirigida por Marina Kamiya, sobre emprendimiento femenino, tecnología e IA aplicada a los negocios.",
      points: [
        "La consultora necesitaba un sitio propio, separado del SaaS, para presentar su trabajo y sus programas.",
        "Lo hice en HTML, CSS y JavaScript, con animaciones de scroll en GSAP y ScrollTrigger e íconos de Font Awesome.",
        "SeeB viene integrado, como en todos mis proyectos recientes.",
      ],
      alts: [
        "Portada del sitio institucional de Cresce+ Futuro",
        "Sitio institucional de Cresce+ Futuro en el celular",
      ],
    },
    portfolio: {
      title: "Portafolio",
      summary:
        "Este sitio: proyectos con filtros y diálogo con galería, modo oscuro, PWA, SEO completo y atención a la accesibilidad y el rendimiento.",
      points: [
        "Quería un portafolio que mostrara el trabajo de la forma en que construyo producto: rápido, accesible y cuidando los detalles.",
        "La cuadrícula separa los trabajos por tipo, con tarjetas grandes en zigzag, y cada proyecto abre un diálogo con galería, stack y enlaces. Las imágenes cargan solo cuando aparecen en pantalla.",
        "El tema claro u oscuro usa next-themes. Metadatos, Open Graph, sitemap, robots y datos estructurados cubren el SEO, y el sitio es una PWA con manifest, íconos y service worker con página offline.",
        "El formulario de contacto envía el correo directamente, las animaciones usan Motion y SeeB viene integrado.",
      ],
      alts: [
        "Hero del portafolio en la computadora",
        "Hero del portafolio en el celular",
        "Cuadrícula de proyectos del portafolio",
      ],
    },
  },

  experiences: [
    {
      role: "Desarrollador Full Stack",
      period: "may. 2026 a la actualidad",
      mode: "Remoto",
      summary:
        "Soy el desarrollador responsable de la tecnología de T2 Educação: el Hub interno de gestión, las integraciones entre plataformas, las automatizaciones, la base de datos, la infraestructura y toda la presencia digital. Entré en mayo de 2026 como desarrollador front-end y, un mes después, me ascendieron a full stack, con toda la operación de tecnología a mi cargo.",
      did: [
        "Transformé un sistema atado a varias integraciones caras en una plataforma cada día más autónoma, trayendo a casa lo que antes dependía de herramientas de terceros.",
        "Desarrollo y hago evolucionar el Hub de T2, el sistema interno en Next.js, React y TypeScript con módulos de tareas, atención al cliente, finanzas con conciliación, marketing, central de contactos, afiliados y representantes, biblioteca de clases y gestión de ventas B2B.",
        "Integré el Hub con más de diez plataformas: Crisp y Crisp AI en la atención, ActiveCampaign, Hotmart, Pagar.me, Granatum, eNotas para facturas, Instagram Graph API, YouTube Analytics, automatizaciones de WhatsApp, Google Reviews, GitHub, Cloudflare Turnstile en el login y GA4 en el tracking de conversión.",
        "Modelo y mantengo la base de datos en PostgreSQL con Supabase, con schemas por dominio, y me encargo de la API propia, de las decenas de crons en Vercel, de la generación de PDF, planillas y presentaciones y de los health checks que vigilan los endpoints.",
        "Creé un servidor MCP para que los agentes de IA consulten y operen el Hub con seguridad.",
        "Reconstruí el sitio, el blog, el portal de materiales gratuitos y las landing pages en Next.js 16, con Core Web Vitals, SEO técnico, accesibilidad y tracking. También me encargo de Cloudflare (DNS, SSL, caché, reglas y seguridad), los dominios, los entornos de staging y producción y los pipelines de CI/CD.",
      ],
      resultValue: "1 mes",
      resultLabel: "del front-end al ascenso a full stack",
    },
    {
      role: "Ingeniero de Software Full Stack, AI-First",
      period: "mar. 2026 a ago. 2026",
      mode: "Remoto",
      summary:
        "Construí SaaS, sistemas web y apps móviles para startups, cubriendo todo el ciclo: requisitos, arquitectura, base de datos, integraciones, infraestructura, deploy y publicación en las tiendas. Fue aquí donde desarrollé Mirante ERP, el proyecto más grande que he hecho.",
      did: [
        "Desarrollé Mirante ERP, con punto de venta, pedidos y presupuestos, inventario, compras con aprobación e importación de XML, emisión de NF-e (factura electrónica brasileña) integrada a la SEFAZ, finanzas con conciliación bancaria, multiempresa con sucursales, permisos, log de auditoría y dashboards con proyección de ventas.",
        "Implementé K8 Pay, la pasarela de K8 Fintech, para Pix y boleto bancario dentro del ERP, además de otras integraciones con pasarelas de pago, autenticación y APIs externas en los productos de ese período.",
        "Entregué MVPs, marketplaces y apps en React Native y Expo, y me encargué de la publicación en la App Store y en Google Play. Hoy preparo una app para enviarla a las tiendas en pocas horas.",
        "Subí y mantuve aplicaciones en VPS con Docker y Coolify, con pipelines de CI/CD, y trabajé con Supabase, PostgreSQL, Prisma y Drizzle ORM en la base de datos.",
        "Trabajé con el modelo AI-First, con agentes, MCPs y herramientas de IA en el día a día, en sprints semanales y reuniones con stakeholders. En el programa interno Bystartup Labs, creé bystartup-web-qa, una skill que hace que los agentes de IA escriban y corrijan pruebas E2E con Playwright.",
      ],
    },
    {
      role: "Desarrollador Full Stack",
      period: "ene. 2026 a mar. 2026",
      mode: "Remoto",
      summary:
        "Reestructuré el SaaS de Cresce+ Futuro, que organiza inventario, ventas, tareas y equipo de micro y pequeños negocios, y saqué la infraestructura de tres proveedores para llevarla a una sola base, más barata y más fácil de mantener.",
      did: [
        "Reescribí la aplicación en Next.js 16 full stack con App Router y Tailwind CSS, con autenticación y pagos por Mercado Pago.",
        "Migré el stack, que estaba repartido entre Azure, Railway y Hostinger, a Neon PostgreSQL y Vercel, centralicé el dominio y dejé el producto listo para escalar.",
        "También hice el sitio institucional de la consultora, con SeeB, el widget de accesibilidad que creé, integrado.",
      ],
    },
  ],

  studies: [
    {
      title: "Ingeniería de Software",
      place: "Gran Faculdade",
      period: "jun. 2026 a jun. 2030",
      text: "Licenciatura en curso, con 3.200 horas en 8 semestres. El plan de estudios recorre todo el ciclo del software: algoritmos y estructuras de datos, bases de datos relacionales y NoSQL, front-end, back-end y mobile, arquitectura y microservicios, nube, contenedores y DevOps, calidad y pruebas, seguridad de la información, gestión ágil e inteligencia artificial. Elegí la carrera porque habla el mismo idioma que mi trabajo: construir producto y resolver problemas reales.",
    },
    {
      title: "Inteligencia Artificial y Automatización Digital",
      place: "UniFECAF con la Faculdade de Tecnologia Rocketseat",
      period: "oct. 2026 a mar. 2028",
      text: "Carrera tecnológica en curso, de 18 meses y con práctica desde el primer semestre. El programa cubre IA generativa, ingeniería de prompts, integración de APIs, automatización de procesos y workflows, low-code, UX/UI y metodologías ágiles, y avanza hacia RAG, embeddings, fine-tuning y agentes autónomos. Es la base teórica de lo que ya uso en el trabajo con agentes, MCP y automatización.",
    },
    {
      title: "Arquitectura de Software con IA",
      place: "Extensión curricular",
      period: "Anhanguera, en curso, 360 h",
      text: "Extensión curricular en curso en Anhanguera, con Full Stack Club, de 360 horas. El foco es la arquitectura de software con inteligencia artificial, en proyectos prácticos de escalabilidad, rendimiento, pruebas, microservicios, CI/CD y cloud.",
    },
    {
      title: "Informática para Internet",
      place: "ETEC Parque Belém",
      period: "2023 a 2025",
      text: "Secundaria técnica terminada. Entré sin saber usar bien una computadora y salí programando: estudié lógica, HTML, CSS, JavaScript, PHP, SQL, WordPress, MIT App Inventor, Figma, UX/UI, accesibilidad, protocolos HTTP, nociones de shell y virtualización con VirtualBox. Mi trabajo de conclusión de curso (TCC) fue SeeB, una extensión para Chromium y widget de accesibilidad. La parte técnica quedó a mi cargo, se presentó en la escuela y hoy es open source y está en la Chrome Web Store.",
    },
    {
      title: "Ingeniero Front-end",
      place: "EBAC",
      period: "jul. 2024 a ene. 2026",
      text: "Formación larga de front-end, terminada. Estudié HTML semántico, CSS con Sass y Less, Bootstrap y Tailwind, JavaScript moderno y orientación a objetos, automatización de build con Gulp y Grunt, React con TypeScript, Redux Toolkit, styled-components y pruebas con Jest. Hice decenas de ejercicios publicados en mi GitHub y cerré el curso con Velory, un catálogo de restaurantes con carrito y checkout en React, TypeScript y Redux Toolkit.",
    },
    {
      title: "Metodologías Ágiles",
      place: "Rocketseat",
      period: "oct. 2025",
      text: "Estudié Scrum y Kanban en la práctica: roles del equipo, backlog, planificación y revisión de sprint, tableros de flujo y la organización del trabajo en ciclos cortos. Uso ese repertorio en el día a día, con sprints semanales y alineación frecuente con quien pide el producto.",
    },
    {
      title: "Introducción a Go",
      place: "Rocketseat",
      period: "oct. 2025",
      text: "Primer contacto con Go, el lenguaje de Google muy usado en back-end e infraestructura. Estudié la sintaxis, el tipado estático, funciones, structs, slices y maps y la forma en que Go maneja los errores, y escribí programas pequeños para afianzar la base. Fue una manera de ampliar mi repertorio de back-end más allá de Node.js.",
    },
    {
      title: "NLW Agents",
      place: "Rocketseat",
      period: "",
      text: "En la edición de agentes de la Next Level Week, construí una aplicación full stack con IA: salas de preguntas en las que el audio de una transmisión se graba, se transcribe con la API de Gemini y se convierte en embeddings guardados en PostgreSQL con pgvector. Con búsqueda semántica, el sistema responde las preguntas a partir de lo que se dijo. El back-end usó Node.js, Fastify, Drizzle ORM, Zod y Docker, y el front, React, Vite, Tailwind CSS y shadcn/ui.",
    },
    {
      title: "Instituto PROA",
      place: "Instituto PROA",
      period: "mar. 2026",
      text: "Formación online de 100 horas del Instituto PROA para jóvenes que estudiaron en escuela pública, dividida en autoconocimiento, proyecto profesional, razonamiento lógico y comunicación. Trabajé metas con el método SMART, razonamiento estructurado para resolver problemas y tomar decisiones, escritura profesional, perfil de LinkedIn y comunicación en equipo.",
    },
    {
      title: "Intensivão de JavaScript",
      place: "Hashtag Treinamentos",
      period: "",
      text: "Evento práctico de JavaScript desde cero, con cuatro clases en vivo y un proyecto completo en cada una. Construí un audiolibro con control de reproducción y capítulos, una interfaz al estilo Apple Watch, un menú digital y un chat en tiempo real, practicando variables, funciones, manipulación del DOM y eventos y la publicación de los proyectos.",
    },
    {
      title: "Bootcamp Ri Happy: Front-end desde cero",
      place: "DIO",
      period: "",
      text: "Bootcamp gratuito de DIO con Ri Happy, en cinco módulos: Git y GitHub en desarrollo colaborativo, HTML semántico y CSS, lógica de programación, primeros pasos con JavaScript (objetos, clases, arrays y consumo de APIs) y portafolio front-end. Los proyectos prácticos incluyen landing pages, juegos en JavaScript como Detona Ralph y el juego de memoria con emojis, y una Pokédex que consume la PokéAPI.",
    },
    {
      title: "50 Projects In 50 Days: HTML, CSS & JavaScript",
      place: "Udemy",
      period: "",
      text: "Hice los 50 miniproyectos del curso, uno por día, cada uno centrado en un efecto o componente de interfaz: animaciones, carruseles, formularios, modales, contadores, consumo de APIs y manipulación del DOM sin framework. Todos están publicados en el repositorio github.com/devrafcks/50days_50projects.",
    },
    {
      title: "Introducción a la Programación",
      place: "EBAC",
      period: "",
      text: "Curso de iniciación a la programación, con lógica, algoritmos, variables, condicionales, bucles y funciones. Fue la base que usé antes de pasar al curso Ingeniero Front-end de la misma escuela.",
    },
    {
      title: "Semana Carreira Tech",
      place: "Alura",
      period: "",
      text: "Semana de contenido de Alura sobre carrera en tecnología: áreas de trabajo, cómo armar portafolio y currículum, cómo prepararse para procesos de selección y cómo planificar los estudios. Me ayudó a organizar el camino de estudios que seguí después.",
    },
    {
      title: "Diseño (Photoshop)",
      place: "Brainstorm Academy",
      period: "2024 a jul. 2025",
      text: "Curso libre de Photoshop, de 2024 a julio de 2025. Estudié edición y retoque de imagen, composición, capas y máscaras, tipografía y la producción de piezas para redes sociales. Lo uso hasta hoy para armar pantallas, mockups e imágenes de mis proyectos.",
    },
    {
      title: "Universo Photoshop",
      place: "Brainstorm Academy",
      period: "",
      text: "Certificado de la ruta de Photoshop de Brainstorm Academy, con herramientas de selección, ajustes de color, montajes y creación de piezas visuales desde cero.",
    },
    {
      title: "Microsoft AZ-900",
      place: "Microsoft",
      period: "en preparación",
      text: "Me estoy preparando para la certificación Azure Fundamentals. El contenido cubre conceptos de nube (IaaS, PaaS, SaaS y modelos de implementación), los principales servicios de cómputo, red y almacenamiento de Azure, seguridad, identidad, gobernanza, precios y SLA. Todavía no hice el examen.",
    },
  ],

  recommendations: [
    {
      role: "Desarrollador Full Stack, mismo equipo en ByStartup",
      date: "3 de agosto de 2026",
      paragraphs: [
        "Tuve la oportunidad de trabajar con Rafael Henrique Blanco en ByStartup y puedo decir que fue uno de los profesionales más sólidos y confiables con los que he colaborado.",
        "Una de sus mayores fortalezas es la capacidad de conducir proyectos de alta complejidad con velocidad y calidad, sin perder el control ni la calma. Entrega con constancia, organiza bien el trabajo y transforma desafíos técnicos difíciles en soluciones claras y bien ejecutadas.",
        "Además del excelente conocimiento técnico y de la experiencia en desarrollo de software, Rafael es extremadamente profesional, responsable y organizado. Tiene una postura madura bajo presión, se comunica con objetividad y eleva el nivel del equipo a su alrededor.",
        "Recomiendo a Rafael sin dudas. Estoy seguro de que será un gran diferencial para cualquier equipo que busque a alguien experimentado, confiable y capaz de entregar proyectos complejos con excelencia.",
      ],
    },
    {
      role: "COO de Tecnología, supervisó directamente a Rafael en ByStartup",
      date: "2 de agosto de 2026",
      paragraphs: [
        "Rafael es el tipo de desarrollador que le da tranquilidad al equipo. Durante nuestras interacciones, quedaron muy claros su fuerte dominio técnico y su proactividad.",
        "No espera a que los problemas sucedan; se anticipa en las reuniones de planificación, sugiere buenas prácticas y garantiza que el producto final tenga la mejor calidad posible.",
        "¡Excelente profesional!",
      ],
    },
  ],
};
