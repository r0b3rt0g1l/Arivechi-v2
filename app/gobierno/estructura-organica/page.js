import { buildMetadata } from "@/lib/seo";
import { estructuraOrganica } from "@/lib/estructuraOrganica";
import { EstructuraAccordion } from "@/components/gobierno/EstructuraAccordion";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Estructura Orgánica",
  description:
    "Organigrama institucional del Gobierno Municipal de Arivechi en 5 niveles: Cabildo, Secretaría, Direcciones Generales, Direcciones de Área y Organismos Descentralizados.",
  path: "/gobierno/estructura-organica",
});

export default function EstructuraOrganicaPage() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
            Organigrama institucional
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Estructura Orgánica
          </h1>
          <p className="mt-4 max-w-3xl text-base text-[var(--color-text-secondary)] md:text-lg">
            La estructura orgánica del Gobierno Municipal de Arivechi se
            organiza en cinco niveles, desde el órgano colegiado de gobierno
            hasta los organismos descentralizados que apoyan la acción
            municipal.
          </p>
        </div>
      </header>

      <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 md:py-14">
        <EstructuraAccordion niveles={estructuraOrganica} />
      </section>
    </main>
  );
}
