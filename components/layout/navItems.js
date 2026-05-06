import { municipalConfig } from "@/lib/municipalConfig";

export const navItems = [
  { label: "Inicio", href: "/" },
  {
    label: "Gobierno",
    children: [
      { label: "Directorio", href: "/gobierno/directorio" },
      { label: "Estructura Orgánica", href: "/gobierno/estructura-organica" },
      { label: "Plan Municipal", href: "/gobierno/plan-municipal" },
    ],
  },
  {
    label: "Transparencia",
    externalHref: municipalConfig.enlacesExternos.transparenciaAyuntamiento,
    externalAriaLabel:
      "Portal Oficial de Transparencia del Ayuntamiento de Arivechi (abre en nueva pestaña)",
    children: [
      { label: "Información Pública", href: "/transparencia/informacion-publica" },
      { label: "Leyes y Reglamentos", href: "/transparencia/leyes" },
    ],
  },
  { label: "SEvAC", href: "/transparencia/sevac" },
  { label: "Turismo", href: "/turismo" },
  { label: "Contacto", href: "/contacto" },
];
