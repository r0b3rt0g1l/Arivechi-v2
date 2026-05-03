const BASE = "https://images.unsplash.com";
const PARAMS_HD = "w=1920&q=85&auto=format&fit=crop";
const PARAMS_MD = "w=1280&q=85&auto=format&fit=crop";
const PARAMS_SM = "w=900&q=85&auto=format&fit=crop";

/**
 * Imágenes Unsplash centralizadas para todo el portal.
 * Cada entrada incluye { src, alt (en español), credit (fotógrafo) }.
 *
 * Cuando el municipio entregue fotos reales, basta con sustituir las URLs
 * apuntando a Cloudinary (cuenta dtpxt4a2p) manteniendo la misma estructura.
 */

export const heroImages = [
  {
    id: "bienvenida",
    src: `${BASE}/photo-1506905925346-21bda4d32df4?${PARAMS_HD}`,
    alt: "Vista panorámica al amanecer en la sierra del norte de México, similar al paisaje de Arivechi",
    credit: "Tj Holowaychuk · Unsplash",
  },
  {
    id: "patrimonio",
    src: `${BASE}/photo-1591785830204-dab28f31a9fc?${PARAMS_HD}`,
    alt: "Templo colonial mexicano de dos torres, evocando el Templo de Santa Rosalía",
    credit: "Jezael Melgoza · Unsplash",
  },
  {
    id: "sierra",
    src: `${BASE}/photo-1469854523086-cc02fe5d8800?${PARAMS_HD}`,
    alt: "Cordillera de la Sierra Madre Occidental cubierta por la luz del atardecer",
    credit: "John Salzarulo · Unsplash",
  },
  {
    id: "tradicion",
    src: `${BASE}/photo-1518105779142-d975f22f1b0a?${PARAMS_HD}`,
    alt: "Pueblo tradicional mexicano con calles empedradas y arquitectura serrana",
    credit: "Carlos Aranda · Unsplash",
  },
  {
    id: "rio",
    src: `${BASE}/photo-1426604966848-d7adac402bff?${PARAMS_HD}`,
    alt: "Río de montaña recorriendo un valle entre cerros, ilustrando el Río Sahuaripa",
    credit: "Bailey Zindel · Unsplash",
  },
  {
    id: "kiosco",
    src: `${BASE}/photo-1518998053901-5348d3961a04?${PARAMS_HD}`,
    alt: "Pabellón morisco en una plaza histórica, semejante al Kiosco Morisco de Arivechi",
    credit: "Diego Lozano · Unsplash",
  },
  {
    id: "gobierno",
    src: `${BASE}/photo-1486406146926-c627a92ad1ab?${PARAMS_HD}`,
    alt: "Edificio institucional histórico mexicano, representativo de un Palacio Municipal",
    credit: "Vita Vilcina · Unsplash",
  },
];

export const conoceArivechi = {
  src: `${BASE}/photo-1518105779142-d975f22f1b0a?${PARAMS_MD}`,
  alt: "Pueblo serrano del norte de México con arquitectura tradicional y paisaje montañoso",
  credit: "Carlos Aranda · Unsplash",
};

export const atractivosImages = {
  "kiosco-morisco": [
    {
      src: `${BASE}/photo-1518998053901-5348d3961a04?${PARAMS_HD}`,
      alt: "Kiosco morisco octagonal en plaza pública con detalles arquitectónicos",
      credit: "Diego Lozano · Unsplash",
    },
    {
      src: `${BASE}/photo-1542038784456-1ea8e935640e?${PARAMS_MD}`,
      alt: "Plaza central de un pueblo mexicano con kiosko y arboleda",
      credit: "Roberto Carlos Roman Don · Unsplash",
    },
    {
      src: `${BASE}/photo-1564507592333-c60657eea523?${PARAMS_MD}`,
      alt: "Detalle de arquitectura mexicana tradicional con arcadas",
      credit: "Andrés Sanz · Unsplash",
    },
  ],
  "templo-santa-rosalia": [
    {
      src: `${BASE}/photo-1591785830204-dab28f31a9fc?${PARAMS_HD}`,
      alt: "Iglesia colonial mexicana con dos torres simétricas",
      credit: "Jezael Melgoza · Unsplash",
    },
    {
      src: `${BASE}/photo-1542309667-2a115d1f54c6?${PARAMS_MD}`,
      alt: "Detalle arquitectónico de iglesia católica tradicional",
      credit: "Andres Garcia · Unsplash",
    },
    {
      src: `${BASE}/photo-1601581875309-fafbf2d3ed3a?${PARAMS_MD}`,
      alt: "Interior iluminado de un templo católico con altar central",
      credit: "Stefan Kunze · Unsplash",
    },
  ],
  "cerro-de-las-conchas": [
    {
      src: `${BASE}/photo-1505224628438-4dd1a45a1b1f?${PARAMS_HD}`,
      alt: "Cerro de la sierra con vegetación seca propia del desierto sonorense",
      credit: "Ivan Gusev · Unsplash",
    },
    {
      src: `${BASE}/photo-1469854523086-cc02fe5d8800?${PARAMS_MD}`,
      alt: "Sierra Madre Occidental al amanecer con luz dorada",
      credit: "John Salzarulo · Unsplash",
    },
    {
      src: `${BASE}/photo-1506905925346-21bda4d32df4?${PARAMS_MD}`,
      alt: "Paisaje serrano con formaciones rocosas",
      credit: "Tj Holowaychuk · Unsplash",
    },
  ],
  "rio-sahuaripa": [
    {
      src: `${BASE}/photo-1426604966848-d7adac402bff?${PARAMS_HD}`,
      alt: "Río de montaña corriendo entre formaciones rocosas y vegetación",
      credit: "Bailey Zindel · Unsplash",
    },
    {
      src: `${BASE}/photo-1551806235-6692a3e36b8d?${PARAMS_MD}`,
      alt: "Cañón con río al fondo y paredes rocosas a los lados",
      credit: "Zach Reiner · Unsplash",
    },
    {
      src: `${BASE}/photo-1500382017468-9049fed747ef?${PARAMS_MD}`,
      alt: "Vegetación ribereña a lo largo de un cauce de montaña",
      credit: "Lukasz Szmigiel · Unsplash",
    },
  ],
  "cerro-de-los-pilares": [
    {
      src: `${BASE}/photo-1469854523086-cc02fe5d8800?${PARAMS_HD}`,
      alt: "Formaciones rocosas en cordillera del norte de México",
      credit: "John Salzarulo · Unsplash",
    },
    {
      src: `${BASE}/photo-1502082553048-f009c37129b9?${PARAMS_MD}`,
      alt: "Pilares naturales de roca destacando en paisaje serrano",
      credit: "Sebastian Unrau · Unsplash",
    },
    {
      src: `${BASE}/photo-1505224628438-4dd1a45a1b1f?${PARAMS_MD}`,
      alt: "Cerro serrano con luz lateral del atardecer",
      credit: "Ivan Gusev · Unsplash",
    },
  ],
  "fiesta-santa-rosalia": [
    {
      src: `${BASE}/photo-1518105779142-d975f22f1b0a?${PARAMS_HD}`,
      alt: "Festival tradicional mexicano con personas y banderines de colores",
      credit: "Carlos Aranda · Unsplash",
    },
    {
      src: `${BASE}/photo-1519791883288-dc8bd696e667?${PARAMS_MD}`,
      alt: "Danza tradicional con vestimenta colorida en festividad mexicana",
      credit: "Jezael Melgoza · Unsplash",
    },
    {
      src: `${BASE}/photo-1574484184081-afea8a62f9ab?${PARAMS_MD}`,
      alt: "Fiesta patronal en plaza mexicana con iluminación nocturna",
      credit: "Manny Becerra · Unsplash",
    },
  ],
};

export const noticiaPlaceholderImages = {
  "obras-publicas": {
    src: `${BASE}/photo-1581094288338-2314dddb7ece?${PARAMS_SM}`,
    alt: "Maquinaria trabajando en obras públicas de un camino rural",
    credit: "Anaya Katlego · Unsplash",
  },
  cultura: {
    src: `${BASE}/photo-1519791883288-dc8bd696e667?${PARAMS_SM}`,
    alt: "Celebración cultural con vestimenta tradicional mexicana",
    credit: "Jezael Melgoza · Unsplash",
  },
  salud: {
    src: `${BASE}/photo-1582719188393-bb71ca45dbb9?${PARAMS_SM}`,
    alt: "Personal de salud durante jornada de vacunación comunitaria",
    credit: "CDC · Unsplash",
  },
  educacion: {
    src: `${BASE}/photo-1503676260728-1c00da094a0b?${PARAMS_SM}`,
    alt: "Estudiantes en aula durante actividad escolar",
    credit: "Taylor Wilcox · Unsplash",
  },
  seguridad: {
    src: `${BASE}/photo-1503416997304-7f8bf166c121?${PARAMS_SM}`,
    alt: "Camino rural en zona montañosa durante temporada de lluvias",
    credit: "Sgt. Ali Burdwell · Unsplash",
  },
  turismo: {
    src: `${BASE}/photo-1505224628438-4dd1a45a1b1f?${PARAMS_SM}`,
    alt: "Sierra del norte de México con vegetación característica",
    credit: "Ivan Gusev · Unsplash",
  },
  gobierno: {
    src: `${BASE}/photo-1486406146926-c627a92ad1ab?${PARAMS_SM}`,
    alt: "Edificio institucional histórico mexicano",
    credit: "Vita Vilcina · Unsplash",
  },
  default: {
    src: `${BASE}/photo-1486406146926-c627a92ad1ab?${PARAMS_SM}`,
    alt: "Imagen institucional del Gobierno Municipal de Arivechi",
    credit: "Vita Vilcina · Unsplash",
  },
};

export function getNoticiaImageByCategoria(categoria = "") {
  const key = categoria
    .toLowerCase()
    .replace(/í/g, "i")
    .replace(/á/g, "a")
    .replace(/é/g, "e")
    .replace(/ó/g, "o")
    .replace(/ú/g, "u");
  if (key.includes("obra")) return noticiaPlaceholderImages["obras-publicas"];
  if (key.includes("cultura")) return noticiaPlaceholderImages.cultura;
  if (key.includes("salud")) return noticiaPlaceholderImages.salud;
  if (key.includes("educa")) return noticiaPlaceholderImages.educacion;
  if (key.includes("segur")) return noticiaPlaceholderImages.seguridad;
  if (key.includes("turismo")) return noticiaPlaceholderImages.turismo;
  if (
    key.includes("tesor") ||
    key.includes("convocatoria") ||
    key.includes("aviso") ||
    key.includes("secretar")
  )
    return noticiaPlaceholderImages.gobierno;
  return noticiaPlaceholderImages.default;
}

export default {
  heroImages,
  conoceArivechi,
  atractivosImages,
  noticiaPlaceholderImages,
  getNoticiaImageByCategoria,
};
