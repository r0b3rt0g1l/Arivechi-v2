import { BarChart3 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SevacDashboard } from "@/components/transparencia/SevacDashboard";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "SEvAC",
  description:
    "Sistema de Evaluaciones de la Armonización Contable del Gobierno Municipal de Arivechi: cumplimiento por categoría e informes trimestrales del ejercicio fiscal.",
  path: "/transparencia/sevac",
});

export default function SevacPage() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-guinda)]/20 bg-[var(--color-guinda)]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
            <BarChart3 className="h-3.5 w-3.5" aria-hidden="true" />
            Armonización contable
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            SEvAC
          </h1>
          <p className="mt-4 max-w-3xl text-base text-[var(--color-text-secondary)] md:text-lg">
            Sistema de Evaluaciones de la Armonización Contable. Mide el
            cumplimiento del Gobierno Municipal de Arivechi en la publicación
            y entrega oportuna de su información financiera, presupuestaria,
            programática y de cuenta pública.
          </p>
        </div>
      </header>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:py-14">
        <SevacDashboard />
      </section>
    </main>
  );
}
