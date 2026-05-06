import { FileText, Eye } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { sevac, sevacDocumentos } from "@/lib/sevac";
import { PDFViewer } from "@/components/transparencia/PDFViewer";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "SEvAC",
  description: sevac.descripcion,
  path: "/transparencia/sevac",
});

const TIPO_BADGE = {
  "Boletín Oficial":
    "bg-[var(--color-dorado)]/15 text-[var(--color-dorado-700)] border-[var(--color-dorado)]/30",
  "Informe Trimestral":
    "bg-[var(--color-guinda)]/10 text-[var(--color-guinda)] border-[var(--color-guinda)]/20",
  "Informe Anual":
    "bg-[var(--color-guinda-deep)]/10 text-[var(--color-guinda-deep)] border-[var(--color-guinda-deep)]/20",
};

export default function SevacPage() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
            Armonización contable
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            SEvAC
          </h1>
          <p className="mt-4 text-base text-[var(--color-text-secondary)] md:text-lg">
            {sevac.titulo}
          </p>
          <p className="mt-3 max-w-3xl text-sm text-[var(--color-text-secondary)] md:text-base">
            {sevac.descripcionCorta}
          </p>
        </div>
      </header>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 md:py-16">
        <div className="space-y-5 text-base leading-relaxed text-[var(--color-text-secondary)]">
          <p>{sevac.descripcion}</p>
          <p>{sevac.marcoLegal}</p>
        </div>
      </section>

      <section
        aria-label="Documentos SEvAC"
        className="border-y border-[var(--color-border)] bg-white"
      >
        <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 md:py-16">
          <header className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
              Publicaciones oficiales
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
              Documentos SEvAC
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-[var(--color-text-secondary)]">
              Información financiera y presupuestal publicada por el Gobierno
              Municipal de Arivechi en cumplimiento de la armonización
              contable. Los documentos se visualizan directamente en este
              portal.
            </p>
          </header>

          <ul className="grid gap-4">
            {sevacDocumentos.map((doc) => {
              const badge = TIPO_BADGE[doc.tipo] ?? TIPO_BADGE["Boletín Oficial"];
              const disponible = Boolean(doc.url);
              return (
                <li
                  key={doc.id}
                  className="flex flex-col gap-4 rounded-xl border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] sm:flex-row sm:items-center"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--color-guinda)]/10 text-[var(--color-guinda)]">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1 leading-tight">
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${badge}`}
                    >
                      {doc.tipo}
                    </span>
                    <p className="mt-2 font-display text-base font-semibold text-[var(--color-text)] md:text-lg">
                      {doc.titulo}
                    </p>
                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                      Ejercicio {doc.ano}
                    </p>
                  </div>
                  {disponible ? (
                    <PDFViewer
                      pdfUrl={doc.url}
                      title={doc.titulo}
                      subtitle={`${doc.tipo} · Ejercicio ${doc.ano}`}
                      trigger={
                        <button
                          type="button"
                          className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[var(--color-guinda)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-guinda-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dorado)] focus-visible:ring-offset-2 sm:self-center"
                        >
                          <Eye className="h-4 w-4" aria-hidden="true" />
                          Ver documento
                        </button>
                      }
                    />
                  ) : (
                    <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[var(--color-text-muted)]/15 px-4 py-2 text-sm font-medium italic text-[var(--color-text-muted)] sm:self-center">
                      Próximamente disponible
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 md:py-12">
        <p className="rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-xs italic text-[var(--color-text-muted)]">
          Fuente: {sevac.fuente}
        </p>
      </section>
    </main>
  );
}
