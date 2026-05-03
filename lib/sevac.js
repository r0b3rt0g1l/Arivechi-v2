export const sevacResumen = {
  ejercicio: "2026",
  trimestreActual: "T1 2026",
  cumplimientoGlobal: 86,
  ultimaActualizacion: "2026-04-15",
  fuente:
    "Sistema de Evaluaciones de la Armonización Contable (SEvAC) — Consejo Nacional de Armonización Contable (CONAC).",
};

export const sevacIndicadores = [
  {
    categoria: "Información Contable",
    cumplimiento: 92,
    descripcion:
      "Estados financieros, balanza de comprobación, estado de actividades y notas a los estados.",
  },
  {
    categoria: "Información Presupuestaria",
    cumplimiento: 88,
    descripcion:
      "Iniciativa de Ley de Ingresos, Presupuesto de Egresos, plantilla de personal y avances trimestrales.",
  },
  {
    categoria: "Información Programática",
    cumplimiento: 84,
    descripcion:
      "Programa Operativo Anual, Matriz de Indicadores para Resultados (MIR) y avances físico-financieros.",
  },
  {
    categoria: "Cuentas Públicas",
    cumplimiento: 90,
    descripcion:
      "Cuenta pública anual con resultados financieros, presupuestarios, programáticos y administrativos.",
  },
  {
    categoria: "Inventarios",
    cumplimiento: 78,
    descripcion:
      "Bienes muebles e inmuebles, registro auxiliar y conciliación con la contabilidad municipal.",
  },
  {
    categoria: "Disciplina financiera",
    cumplimiento: 84,
    descripcion:
      "Indicadores de cumplimiento de la Ley de Disciplina Financiera de las Entidades Federativas y Municipios.",
  },
];

export const sevacDocumentos = [
  {
    trimestre: "T1 2026",
    fecha: "2026-04-15",
    titulo: "Informe trimestral T1 2026",
    descripcion: "Estados financieros y avances programático-presupuestales.",
    pendiente: false,
  },
  {
    trimestre: "T4 2025",
    fecha: "2026-01-30",
    titulo: "Informe trimestral T4 2025",
    descripcion: "Cierre del ejercicio fiscal 2025 y cuenta pública preliminar.",
    pendiente: false,
  },
  {
    trimestre: "T3 2025",
    fecha: "2025-10-30",
    titulo: "Informe trimestral T3 2025",
    descripcion: "Avance acumulado al tercer trimestre del ejercicio 2025.",
    pendiente: false,
  },
  {
    trimestre: "T2 2025",
    fecha: "2025-07-30",
    titulo: "Informe trimestral T2 2025",
    descripcion: "Avance acumulado al segundo trimestre del ejercicio 2025.",
    pendiente: false,
  },
];

export default { sevacResumen, sevacIndicadores, sevacDocumentos };
