import { getDocumentosFromCMS } from "@/lib/cms";

let _cache = null;
let _cacheTimestamp = 0;
const CACHE_TTL = 30 * 1000;

async function getDocumentos() {
  const now = Date.now();
  if (_cache && now - _cacheTimestamp < CACHE_TTL) {
    return _cache;
  }
  const cms = await getDocumentosFromCMS();
  const result = cms || [];
  _cache = result;
  _cacheTimestamp = now;
  return result;
}

export async function getAllDocumentos() {
  return getDocumentos();
}

export async function getDocumentosPorCategoria(categoria) {
  const all = await getDocumentos();
  if (!categoria || categoria === "todas") return all;
  return all.filter((doc) => doc.categoria === categoria);
}

export const CATEGORIAS_DOCUMENTOS = [
  { value: "todas", label: "Todas" },
  { value: "actas", label: "Actas" },
  { value: "convocatorias", label: "Convocatorias" },
  { value: "presupuesto", label: "Presupuesto" },
  { value: "transparencia", label: "Transparencia" },
  { value: "gaceta", label: "Gaceta" },
  { value: "reglamentos", label: "Reglamentos" },
  { value: "otros", label: "Otros" },
];
