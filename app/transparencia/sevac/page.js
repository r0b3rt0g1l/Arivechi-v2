import { ExternalLink } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { sevac } from "@/lib/sevac";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "SEvAC",
  description: sevac.descripcion,
  path: "/transparencia/sevac",
});

export default function SevacPage() {
  const enlaceDisponible = Boolean(sevac.enlaceOficial);

  return (
    <main className="flex flex-1 flex-col">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
            Armonización contable
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            SEvAC
          </h1>
          <p className="mt-4 text-base text-[var(--color-text-secondary)] md:text-lg">
            {sevac.titulo}
          </p>
        </div>
      </header>

      <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <div className="space-y-5 text-base leading-relaxed text-[var(--color-text-secondary)]">
          <p>{sevac.descripcion}</p>
          <p>
            El Gobierno Municipal de Arivechi reporta de manera periódica la
            información financiera y de gestión correspondiente al ejercicio
            fiscal vigente, en cumplimiento de la Ley General de Contabilidad
            Gubernamental y las disposiciones del Consejo Nacional de
            Armonización Contable.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          {enlaceDisponible ? (
            <a
              href={sevac.enlaceOficial}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-guinda)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-guinda-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dorado)] focus-visible:ring-offset-2"
            >
              Consultar SEvAC oficial
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : (
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-[var(--color-text-muted)]/30 px-6 py-3 text-sm font-semibold text-[var(--color-text-muted)]"
            >
              Consultar SEvAC oficial
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
          <span className="text-xs italic text-[var(--color-text-muted)]">
            Próximamente disponible
          </span>
        </div>

        <p className="mt-10 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-xs italic text-[var(--color-text-muted)]">
          Fuente: {sevac.fuente}
        </p>
      </section>
    </main>
  );
}
