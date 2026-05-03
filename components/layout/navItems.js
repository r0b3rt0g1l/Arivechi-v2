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
  { label: "Acciones de Gobierno", href: "/acciones-de-gobierno" },
  {
    label: "Transparencia",
    externalHref: municipalConfig.enlacesExternos.transparenciaSonora,
    externalAriaLabel:
      "Portal Estatal de Transparencia (abre en nueva pestaña)",
    children: [
      { label: "Información Pública", href: "/transparencia/informacion-publica" },
      { label: "Leyes", href: "/transparencia/leyes" },
      { label: "SEvAC", href: "/transparencia/sevac" },
    ],
  },
  { label: "Turismo", href: "/turismo" },
  { label: "Contacto", href: "/contacto" },
];
