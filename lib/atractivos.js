const UNSPLASH_BASE = "https://images.unsplash.com";
const PARAMS_HD = "w=1600&q=80&auto=format&fit=crop";

export const atractivos = [
  {
    slug: 'kiosco-morisco',
    nombre: 'Kiosco Morisco',
    tipo: 'Patrimonio arquitectónico',
    ubicacion: 'Plaza Principal, Arivechi',
    descripcionCorta: 'Réplica del Pabellón Morisco de Santa María la Ribera, símbolo identitario de la Plaza Principal.',
    descripcionLarga: 'El Kiosco Morisco de Arivechi es una notable réplica del Pabellón Morisco que se encuentra en la Alameda de Santa María la Ribera de la Ciudad de México. Erigido en la Plaza Principal del municipio, es uno de los principales emblemas arquitectónicos de Arivechi y punto de reunión durante las festividades.',
    portada: `${UNSPLASH_BASE}/photo-1518998053901-5348d3961a04?${PARAMS_HD}`,
    galeria: [
      { src: `${UNSPLASH_BASE}/photo-1518998053901-5348d3961a04?${PARAMS_HD}`, alt: 'Pabellón morisco en plaza' },
      { src: `${UNSPLASH_BASE}/photo-1542038784456-1ea8e935640e?${PARAMS_HD}`, alt: 'Plaza histórica' },
      { src: `${UNSPLASH_BASE}/photo-1564507592333-c60657eea523?${PARAMS_HD}`, alt: 'Arquitectura mexicana' },
    ],
    coordenadas: { lat: 28.9278, lon: -109.1869 },
    horario: 'Acceso libre las 24 horas',
    destacado: true,
  },
  {
    slug: 'templo-santa-rosalia',
    nombre: 'Templo de Santa Rosalía',
    tipo: 'Patrimonio religioso',
    ubicacion: 'Plaza Principal, Arivechi',
    descripcionCorta: 'Iglesia histórica con dos torres emblemáticas dedicada a la patrona del municipio.',
    descripcionLarga: 'El Templo de Santa Rosalía es la iglesia principal del municipio, distinguida por sus dos torres gemelas que destacan en el paisaje del centro histórico. Es el corazón religioso de Arivechi y sede de la celebración patronal del 4 de septiembre.',
    portada: `${UNSPLASH_BASE}/photo-1591785830204-dab28f31a9fc?${PARAMS_HD}`,
    galeria: [
      { src: `${UNSPLASH_BASE}/photo-1591785830204-dab28f31a9fc?${PARAMS_HD}`, alt: 'Iglesia colonial mexicana' },
      { src: `${UNSPLASH_BASE}/photo-1542309667-2a115d1f54c6?${PARAMS_HD}`, alt: 'Detalle de iglesia' },
      { src: `${UNSPLASH_BASE}/photo-1601581875309-fafbf2d3ed3a?${PARAMS_HD}`, alt: 'Interior de templo' },
    ],
    coordenadas: { lat: 28.9278, lon: -109.1869 },
    horario: 'Misa diaria 7:00 AM y 6:00 PM',
    destacado: true,
  },
  {
    slug: 'cerro-de-las-conchas',
    nombre: 'Cerro de las Conchas',
    tipo: 'Área Natural Protegida',
    ubicacion: '16 km al sureste de Arivechi',
    descripcionCorta: 'Área Natural Protegida desde 2010, con fósiles cámbricos de más de 500 millones de años.',
    descripcionLarga: 'El Cerro de las Conchas fue decretado Área Natural Protegida en 2010 debido al hallazgo de fósiles marinos del periodo cámbrico, con una antigüedad superior a 500 millones de años. El sitio es de gran valor paleontológico, geológico y educativo, siendo un destino imperdible para investigadores y entusiastas de la naturaleza.',
    portada: `${UNSPLASH_BASE}/photo-1505224628438-4dd1a45a1b1f?${PARAMS_HD}`,
    galeria: [
      { src: `${UNSPLASH_BASE}/photo-1505224628438-4dd1a45a1b1f?${PARAMS_HD}`, alt: 'Cerro de la sierra' },
      { src: `${UNSPLASH_BASE}/photo-1469854523086-cc02fe5d8800?${PARAMS_HD}`, alt: 'Sierra Madre Occidental' },
      { src: `${UNSPLASH_BASE}/photo-1506905925346-21bda4d32df4?${PARAMS_HD}`, alt: 'Paisaje de montaña' },
    ],
    coordenadas: { lat: 28.85, lon: -109.05 },
    horario: 'Visitas con guía local recomendadas',
    destacado: true,
  },
  {
    slug: 'rio-sahuaripa',
    nombre: 'Río Sahuaripa',
    tipo: 'Naturaleza',
    ubicacion: 'Cruza el municipio de sur a norte',
    descripcionCorta: 'Cauce que atraviesa el municipio, generando paisajes y ecosistemas únicos en la sierra.',
    descripcionLarga: 'El Río Sahuaripa recorre el municipio de Arivechi de sur a norte, sirviendo como columna vertebral del sistema hídrico y ecológico local. Sus riberas albergan vegetación ribereña y fauna característica de la Sierra Madre Occidental, ofreciendo paisajes contrastantes con los cerros áridos de la región.',
    portada: `${UNSPLASH_BASE}/photo-1426604966848-d7adac402bff?${PARAMS_HD}`,
    galeria: [
      { src: `${UNSPLASH_BASE}/photo-1426604966848-d7adac402bff?${PARAMS_HD}`, alt: 'Río de montaña' },
      { src: `${UNSPLASH_BASE}/photo-1551806235-6692a3e36b8d?${PARAMS_HD}`, alt: 'Cañón con río' },
      { src: `${UNSPLASH_BASE}/photo-1500382017468-9049fed747ef?${PARAMS_HD}`, alt: 'Vegetación ribereña' },
    ],
    coordenadas: { lat: 28.9, lon: -109.18 },
    horario: 'Acceso libre',
    destacado: false,
  },
  {
    slug: 'cerro-de-los-pilares',
    nombre: 'Cerro de los Pilares',
    tipo: 'Naturaleza',
    ubicacion: 'Municipio de Arivechi',
    descripcionCorta: 'Formación rocosa emblemática que forma parte del paisaje serrano del municipio.',
    descripcionLarga: 'El Cerro de los Pilares es una de las formaciones geológicas más distintivas del municipio. Sus columnas naturales han fascinado a visitantes y locales por generaciones, formando parte del imaginario colectivo de la región serrana de Arivechi.',
    portada: `${UNSPLASH_BASE}/photo-1469854523086-cc02fe5d8800?${PARAMS_HD}`,
    galeria: [
      { src: `${UNSPLASH_BASE}/photo-1469854523086-cc02fe5d8800?${PARAMS_HD}`, alt: 'Formación rocosa' },
      { src: `${UNSPLASH_BASE}/photo-1502082553048-f009c37129b9?${PARAMS_HD}`, alt: 'Pilares de roca' },
      { src: `${UNSPLASH_BASE}/photo-1505224628438-4dd1a45a1b1f?${PARAMS_HD}`, alt: 'Cerro serrano' },
    ],
    coordenadas: { lat: 28.93, lon: -109.2 },
    horario: 'Acceso libre',
    destacado: false,
  },
  {
    slug: 'fiesta-santa-rosalia',
    nombre: 'Fiesta de Santa Rosalía',
    tipo: 'Tradición y cultura',
    ubicacion: 'Centro de Arivechi',
    descripcionCorta: 'Celebración patronal del 4 de septiembre con matachines, danza y tradición ópata.',
    descripcionLarga: 'Cada 4 de septiembre, Arivechi se viste de fiesta para honrar a Santa Rosalía, su santa patrona. La celebración reúne la danza de matachines, procesiones, música tradicional, gastronomía local y la presencia activa de la comunidad. Es la festividad más importante del año y el mejor momento para conocer la riqueza cultural de raíz ópata.',
    portada: `${UNSPLASH_BASE}/photo-1518105779142-d975f22f1b0a?${PARAMS_HD}`,
    galeria: [
      { src: `${UNSPLASH_BASE}/photo-1518105779142-d975f22f1b0a?${PARAMS_HD}`, alt: 'Festival tradicional mexicano' },
      { src: `${UNSPLASH_BASE}/photo-1519791883288-dc8bd696e667?${PARAMS_HD}`, alt: 'Danza tradicional' },
      { src: `${UNSPLASH_BASE}/photo-1574484184081-afea8a62f9ab?${PARAMS_HD}`, alt: 'Fiesta patronal' },
    ],
    coordenadas: { lat: 28.9278, lon: -109.1869 },
    horario: 'Anual: 4 de septiembre',
    destacado: true,
  },
];

export function getAtractivoPorSlug(slug) {
  return atractivos.find((a) => a.slug === slug) || null;
}

export function getAtractivosCercanos(slugActual, limit = 3) {
  return atractivos
    .filter((a) => a.slug !== slugActual)
    .slice(0, limit);
}

export const gastronomia = {
  platillos: [
    'Carne asada',
    'Queso cocido',
    'Quesadillas',
    'Caldo de queso',
    'Tortillas de harina',
  ],
  dulces: [
    'Conserva de durazno',
    'Conserva de higo',
    'Conserva de manzana',
    'Conserva de limón',
    'Conserva de naranja',
  ],
};

export const artesanias = [
  'Tehuas',
  'Monturas',
  'Escobas de palma',
  'Cintos',
];

export default atractivos;
