export const leyes = [
  {
    id: "lgt",
    titulo:
      "Ley General de Transparencia y Acceso a la Información Pública",
    descripcion:
      "Marco federal que establece los principios, bases generales y procedimientos para garantizar el derecho de acceso a la información pública en posesión de cualquier autoridad.",
    archivo: "/leyes/ley-general-transparencia.pdf",
    nombreArchivo: "ley-general-transparencia.pdf",
    tamanoBytes: 749599,
    publicada: "2015-05-04",
    actualizada: "2024-04-22",
    ambito: "Federal",
  },
  {
    id: "ltais-son",
    titulo:
      "Ley de Transparencia y Acceso a la Información Pública del Estado de Sonora",
    descripcion:
      "Ordenamiento estatal que regula el ejercicio del derecho de acceso a la información pública y la protección de datos personales en posesión de los sujetos obligados del Estado de Sonora.",
    archivo: "/leyes/ley-transparencia-sonora.pdf",
    nombreArchivo: "ley-transparencia-sonora.pdf",
    tamanoBytes: 464729,
    publicada: "2016-08-22",
    actualizada: "2023-11-30",
    ambito: "Estatal",
  },
];

export function formatBytes(bytes = 0) {
  if (!bytes) return "—";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export default leyes;
