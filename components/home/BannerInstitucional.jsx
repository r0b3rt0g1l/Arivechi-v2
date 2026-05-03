import Link from "next/link";
import { Megaphone, ArrowRight } from "lucide-react";

const banner = {
  eyebrow: "Aviso institucional",
  title: "Convocatoria para las Fiestas de Santa Rosalía 2026",
  description:
    "La Dirección de Cultura invita a comités vecinales y grupos tradicionales a sumarse a la programación oficial del 4 de septiembre.",
  cta: {
    label: "Ver convocatoria",
    href: "/acciones-de-gobierno/comunicados/convocatoria-fiestas-santa-rosalia-2026",
  },
};

export function BannerInstitucional() {
  return (
    <section
      aria-label="Aviso institucional vigente"
      className="border-b border-[var(--color-border)] bg-[var(--color-dorado-50)]/40"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="flex items-start gap-4 md:items-center">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-guinda)] text-white">
            <Megaphone className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
              {banner.eyebrow}
            </p>
            <p className="mt-0.5 font-display text-lg font-semibold text-[var(--color-text)] md:text-xl">
              {banner.title}
            </p>
            <p className="mt-1 max-w-2xl text-sm text-[var(--color-text-secondary)]">
              {banner.description}
            </p>
          </div>
        </div>
        <Link
          href={banner.cta.href}
          className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[var(--color-guinda)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-guinda-deep)] md:self-center"
        >
          {banner.cta.label}
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}

export default BannerInstitucional;
