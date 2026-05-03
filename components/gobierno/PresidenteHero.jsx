import { Mail, Phone, UserPlus, Award } from "lucide-react";
import { FuncionarioAvatar } from "@/components/gobierno/FuncionarioAvatar";
import { municipalConfig } from "@/lib/municipalConfig";

export function PresidenteHero({ presidente }) {
  if (!presidente) return null;

  return (
    <section
      aria-label="Presidente Municipal"
      className="relative isolate overflow-hidden bg-[var(--color-guinda-deep)] text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_20%_30%,rgba(212,160,23,0.55)_0,transparent_50%),radial-gradient(circle_at_80%_70%,white_0,transparent_50%)]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
        <div className="flex justify-center lg:justify-start">
          <FuncionarioAvatar src={presidente.foto} nombre={presidente.nombre} size="xl" className="ring-[var(--color-dorado)]/40" />
        </div>

        <div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-cream)] backdrop-blur-sm">
            <Award className="h-3.5 w-3.5 text-[var(--color-dorado)]" aria-hidden="true" />
            Presidente Municipal Constitucional
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            {presidente.nombre}
          </h1>
          <p className="mt-2 text-base text-[var(--color-cream)]/85 md:text-lg">
            {presidente.cargo} · Administración {municipalConfig.identidad.administracion}
          </p>

          {presidente.bio && (
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[var(--color-cream)]/80 md:text-base">
              {presidente.bio}
            </p>
          )}

          <dl className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--color-cream)]/85">
            {presidente.suplente && (
              <div className="inline-flex items-center gap-2">
                <UserPlus className="h-4 w-4 text-[var(--color-dorado)]" aria-hidden="true" />
                <dt className="sr-only">Suplente</dt>
                <dd>Suplente: {presidente.suplente}</dd>
              </div>
            )}
            {presidente.email && (
              <div className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-[var(--color-dorado)]" aria-hidden="true" />
                <dt className="sr-only">Correo</dt>
                <dd>
                  <a href={`mailto:${presidente.email}`} className="hover:text-white hover:underline">
                    {presidente.email}
                  </a>
                </dd>
              </div>
            )}
            {presidente.telefono && (
              <div className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-[var(--color-dorado)]" aria-hidden="true" />
                <dt className="sr-only">Teléfono</dt>
                <dd>
                  <a href={`tel:${presidente.telefono}`} className="hover:text-white hover:underline">
                    {presidente.telefono}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default PresidenteHero;
