export const sevac = {
  titulo: "Sistema de Evaluaciones de la Armonización Contable",
  descripcionCorta:
    "Información financiera y presupuestal del municipio, conforme a la Ley General de Contabilidad Gubernamental.",
  descripcion:
    "El Sistema de Evaluaciones de la Armonización Contable (SEvAC) mide el cumplimiento de los entes públicos en la publicación y entrega oportuna de su información contable, presupuestaria, programática y de cuenta pública conforme a la Ley General de Contabilidad Gubernamental.",
  marcoLegal:
    "Los documentos se publican conforme a la Ley General de Contabilidad Gubernamental y los Lineamientos del Consejo Nacional de Armonización Contable (CONAC).",
  fuente:
    "Consejo Nacional de Armonización Contable (CONAC) y Auditoría Superior de la Federación (ASF).",
  // Pendiente que la Tesorería Municipal entregue la URL/PDF oficial.
  enlaceOficial: null,
};

// Lista migrada literalmente de la demo v1 (sevac.html).
// Cada documento es un publicación oficial pendiente de subida en
// formato PDF; cuando la Tesorería entregue los archivos, basta llenar
// el campo `url` con la ruta a /public/sevac/<archivo>.pdf y el botón
// se habilita automáticamente.
export const sevacDocumentos = [
  {
    id: "presupuesto-egresos-2026",
    titulo: "Presupuesto de Egresos 2026",
    tipo: "Boletín Oficial",
    ano: 2026,
    url: null,
  },
  {
    id: "ley-ingresos-2026",
    titulo: "Ley de Ingresos y Presupuesto de Ingresos 2026",
    tipo: "Boletín Oficial",
    ano: 2026,
    url: null,
  },
  {
    id: "estado-situacion-financiera-2025",
    titulo: "Estado de Situación Financiera 2025",
    tipo: "Informe Trimestral",
    ano: 2025,
    url: null,
  },
  {
    id: "estado-actividades-2025",
    titulo: "Estado de Actividades 2025",
    tipo: "Informe Trimestral",
    ano: 2025,
    url: null,
  },
  {
    id: "cuenta-publica-2025",
    titulo: "Cuenta Pública 2025",
    tipo: "Informe Anual",
    ano: 2025,
    url: null,
  },
];

export default sevac;
