import { Scale, ExternalLink } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { leyes } from "@/lib/leyes";
import { municipalConfig } from "@/lib/municipalConfig";
import { LeyCard } from "@/components/transparencia/LeyCard";

export const metadata = buildMetadata({
  title: "Leyes y Reglamentos",
  description:
    "Marco normativo del Municipio de Arivechi y del derecho de acceso a la información pública aplicable al Gobierno Municipal: leyes federales, estatales y reglamentos municipales.",
  path: "/transparencia/leyes",
});

export default function LeyesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-guinda)]/20 bg-[var(--color-guinda)]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
            <Scale className="h-3.5 w-3.5" aria-hidden="true" />
            Marco normativo
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Leyes y Reglamentos Municipales
          </h1>
          <p className="mt-4 max-w-3xl text-base text-[var(--color-text-secondary)] md:text-lg">
            Marco normativo del Municipio de Arivechi: reglamentos municipales,
            ordenamientos del Cabildo y leyes aplicables al ejercicio del
            gobierno municipal y al derecho de acceso a la información pública.
          </p>
        </div>
      </header>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 md:py-16">
        <article className="rounded-2xl border border-[var(--color-dorado)]/30 bg-[var(--color-guinda)] p-8 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.3)] md:p-10">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-dorado)]">
            <span
              aria-hidden="true"
              className="block h-px w-8 bg-[var(--color-dorado)]"
            />
            Portal Oficial del Ayuntamiento
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-white md:text-3xl">
            Consulta el archivo completo de leyes y reglamentos
          </h2>
          <p className="mt-4 max-w-2xl font-serif text-base leading-relaxed text-[var(--color-cream)]/90 md:text-lg">
            El archivo institucional con todos los reglamentos municipales,
            actas del Cabildo y normativa vigente del Municipio de Arivechi
            está disponible en el portal oficial de transparencia del
            Ayuntamiento.
          </p>
          <div className="mt-6">
            <a
              href={municipalConfig.enlacesExternos.transparenciaAyuntamientoLeyes}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-dorado)] px-6 py-3 text-sm font-semibold text-[var(--color-guinda-deep)] shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#E5B62A] hover:shadow-lg"
            >
              Consultar Leyes y Reglamentos
              <ExternalLink
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </article>

        <header className="mt-14 mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
            Descarga directa
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Marco federal y estatal de transparencia
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[var(--color-text-secondary)]">
            Leyes que regulan el ejercicio del derecho de acceso a la
            información pública aplicables al Gobierno Municipal.
          </p>
        </header>

        <ul className="grid gap-6">
          {leyes.map((ley) => (
            <li key={ley.id}>
              <LeyCard ley={ley} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
