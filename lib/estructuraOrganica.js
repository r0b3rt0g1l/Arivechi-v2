import { cabildo } from "@/lib/cabildo";

export const estructuraOrganica = [
  {
    id: "n1-cabildo",
    nivel: 1,
    titulo: "Cabildo",
    subtitulo: "Honorable Ayuntamiento Constitucional",
    descripcion:
      "Órgano colegiado de elección popular integrado por la Presidencia Municipal, la Sindicatura y las Regidurías, encargado de la deliberación y toma de decisiones del gobierno municipal.",
    miembros: cabildo
      .filter((m) => m.tipo !== "dif")
      .map((m) => ({
        nombre: m.nombre,
        cargo: m.cargo,
        suplente: m.suplente,
      })),
  },
  {
    id: "n2-secretaria",
    nivel: 2,
    titulo: "Secretaría del Ayuntamiento",
    subtitulo: "Dependencia de coordinación administrativa",
    descripcion:
      "Apoya al Cabildo en la gestión administrativa, normativa y de archivo institucional. Coordina las sesiones, da fe de los acuerdos y resguarda la documentación oficial del Ayuntamiento.",
    miembros: [
      {
        nombre: "Por designación",
        cargo: "Secretaría del Ayuntamiento",
        suplente: null,
      },
    ],
    pendiente: true,
  },
  {
    id: "n3-direcciones-generales",
    nivel: 3,
    titulo: "Direcciones Generales",
    subtitulo: "Áreas de operación estratégica",
    descripcion:
      "Conducen las políticas públicas y servicios estratégicos del municipio: Tesorería, Obras Públicas, Servicios Públicos, Desarrollo Social, Seguridad Pública y Protección Civil.",
    miembros: [
      { nombre: "Tesorería Municipal", cargo: "Dirección General" },
      { nombre: "Obras Públicas", cargo: "Dirección General" },
      { nombre: "Servicios Públicos Municipales", cargo: "Dirección General" },
      { nombre: "Desarrollo Social", cargo: "Dirección General" },
      { nombre: "Seguridad Pública Municipal", cargo: "Dirección General" },
      { nombre: "Protección Civil", cargo: "Coordinación Municipal" },
    ],
    pendiente: true,
  },
  {
    id: "n4-direcciones-area",
    nivel: 4,
    titulo: "Direcciones de Área",
    subtitulo: "Operación por programas",
    descripcion:
      "Áreas operativas adscritas a las Direcciones Generales que ejecutan programas específicos: Cultura, Educación, Deporte, Turismo, Catastro, Atención Ciudadana y Comunicación Social.",
    miembros: [
      { nombre: "Cultura", cargo: "Dirección de Área" },
      { nombre: "Educación", cargo: "Dirección de Área" },
      { nombre: "Deporte y Recreación", cargo: "Dirección de Área" },
      { nombre: "Turismo", cargo: "Dirección de Área" },
      { nombre: "Catastro Municipal", cargo: "Dirección de Área" },
      { nombre: "Atención Ciudadana", cargo: "Dirección de Área" },
      { nombre: "Comunicación Social", cargo: "Coordinación" },
    ],
    pendiente: true,
  },
  {
    id: "n5-organismos",
    nivel: 5,
    titulo: "Organismos Descentralizados",
    subtitulo: "Sistema DIF Municipal y otros",
    descripcion:
      "Organismos paramunicipales con autonomía administrativa que complementan la acción del Ayuntamiento, encabezados por el Sistema para el Desarrollo Integral de la Familia (DIF) Municipal.",
    miembros: cabildo
      .filter((m) => m.tipo === "dif")
      .map((m) => ({
        nombre: m.nombre,
        cargo: m.cargo,
        suplente: null,
      })),
  },
];

export default estructuraOrganica;
