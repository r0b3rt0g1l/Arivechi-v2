import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Mountain, Users } from "lucide-react";
import { municipalConfig } from "@/lib/municipalConfig";
import { conoceArivechi } from "@/lib/unsplashImages";

const features = [
  {
    icon: Calendar,
    label: "Fundación",
    value: "1627",
    detail: "Misión San Javier",
  },
  {
    icon: Mountain,
    label: "Altitud",
    value: "400 - 2,200",
    detail: "msnm",
  },
  {
    icon: MapPin,
    label: "Superficie",
    value: "662.58",
    detail: "km²",
  },
  {
    icon: Users,
    label: "Población",
    value: "1,177",
    detail: "habitantes (2020)",
  },
];

export function ConoceArivechi() {
  const { identidad } = municipalConfig;

  return (
    <section
      aria-label="Conoce Arivechi"
      className="bg-[var(--color-bg)]"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-card-hover)]">
            <Image
              src={conoceArivechi.src}
              alt={conoceArivechi.alt}
              fill
              quality={85}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-[var(--color-guinda-deep)]/35 via-transparent to-transparent"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden w-56 rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card-hover)] md:block lg:-right-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-dorado-700)]">
              Significado ópata
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-[var(--color-guinda)]">
              &ldquo;{identidad.lema}&rdquo;
            </p>
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
              Origen prehispánico de raíz ópata, los primeros pobladores de la
              región.
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
            Conoce Arivechi
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Un pueblo con raíces ópatas en la Sierra Madre Occidental
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
            Fundado en {identidad.fundacion.anio} con la{" "}
            {identidad.fundacion.texto.toLowerCase()}, Arivechi fue decretado
            municipio libre el {identidad.municipioLibre}. Hoy es un destino
            que combina patrimonio histórico, tradición ópata y paisajes
            naturales únicos como el Cerro de las Conchas, Área Natural
            Protegida con fósiles cámbricos de más de 500 millones de años.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {features.map(({ icon: Icon, label, value, detail }) => (
              <div
                key={label}
                className="rounded-xl border border-[var(--color-border)] bg-white p-4 text-left shadow-[var(--shadow-card)]"
              >
                <Icon
                  aria-hidden="true"
                  className="h-5 w-5 text-[var(--color-guinda)]"
                />
                <dt className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                  {label}
                </dt>
                <dd className="mt-1 font-display text-lg font-bold text-[var(--color-text)] md:text-xl">
                  {value}
                </dd>
                <dd className="text-[11px] text-[var(--color-text-secondary)]">
                  {detail}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/turismo"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-guinda)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-guinda-deep)]"
            >
              Descubre el turismo
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/gobierno/directorio"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-guinda)] hover:text-[var(--color-guinda)]"
            >
              Conoce el Gobierno
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConoceArivechi;
