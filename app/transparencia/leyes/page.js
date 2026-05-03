import { Scale } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { leyes } from "@/lib/leyes";
import { LeyCard } from "@/components/transparencia/LeyCard";

export const metadata = buildMetadata({
  title: "Leyes y Reglamentos",
  description:
    "Marco normativo del derecho de acceso a la información pública aplicable al Gobierno Municipal de Arivechi: Ley General de Transparencia y Ley Estatal de Sonora.",
  path: "/transparencia/leyes",
});

export default function LeyesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-guinda)]/20 bg-[var(--color-guinda)]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
            <Scale className="h-3.5 w-3.5" aria-hidden="true" />
            Marco normativo
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Leyes y Reglamentos
          </h1>
          <p className="mt-4 max-w-3xl text-base text-[var(--color-text-secondary)] md:text-lg">
            Documentos legales que regulan el ejercicio del derecho de acceso
            a la información pública en los ámbitos federal y estatal.
            Disponibles para descarga en formato PDF.
          </p>
        </div>
      </header>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 md:py-16">
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
