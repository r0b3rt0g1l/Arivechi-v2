const PICSUM_BASE = "https://picsum.photos/seed";

const COMBINING_MARKS = /[̀-ͯ]/g;
const NON_ALPHANUM = /[^a-z0-9]+/g;
const TRIM_DASHES = /^-+|-+$/g;

/**
 * Devuelve una URL estable de Lorem Picsum a partir de un seed.
 * Picsum no soporta keywords; el seed garantiza determinismo
 * (la misma combinación seed/w/h siempre devuelve la misma imagen)
 * — clave para SSR/ISR estable y para evitar saltos visuales.
 *
 * @param {string} seed Identificador estable (ej. "banner-fiestas-2026").
 * @param {number} [w=1200] Ancho en px.
 * @param {number} [h=600] Alto en px.
 * @returns {string} URL absoluta.
 */
export function getStockImage(seed, w = 1200, h = 600) {
  const safeSeed = String(seed)
    .toLowerCase()
    .normalize("NFD")
    .replace(COMBINING_MARKS, "")
    .replace(NON_ALPHANUM, "-")
    .replace(TRIM_DASHES, "");

  return `${PICSUM_BASE}/${safeSeed || "default"}/${w}/${h}`;
}
