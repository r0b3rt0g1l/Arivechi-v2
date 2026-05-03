import { buildMetadata } from "@/lib/seo";
import { presidente, sindica, regidores, dif } from "@/lib/cabildo";
import { PresidenteHero } from "@/components/gobierno/PresidenteHero";
import { FuncionarioCard } from "@/components/gobierno/FuncionarioCard";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Directorio del Cabildo",
  description:
    "Directorio oficial del Cabildo del Gobierno Municipal de Arivechi: Presidente, Síndica, Regidurías y Presidencia del DIF Municipal. Administración 2024-2027.",
  path: "/gobierno/directorio",
});

export default function DirectorioPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PresidenteHero presidente={presidente} />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
            Sindicatura
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Síndica Municipal
          </h2>
        </header>
        {sindica && (
          <div className="max-w-xl">
            <FuncionarioCard funcionario={sindica} highlight />
          </div>
        )}
      </section>

      <section className="bg-[var(--color-bg)] border-y border-[var(--color-border)]">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20">
          <header className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
              Cabildo
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Regidurías
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--color-text-secondary)]">
              Cinco regidurías propietarias y sus respectivos suplentes
              integran el Cabildo de Arivechi para el periodo 2024-2027.
            </p>
          </header>

          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regidores.map((r) => (
              <li key={r.id} className="flex">
                <FuncionarioCard funcionario={r} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {dif && (
        <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20">
          <header className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
              Organismos descentralizados
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Sistema DIF Municipal
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--color-text-secondary)]">
              El Sistema para el Desarrollo Integral de la Familia es la
              instancia municipal encargada de la asistencia social, salud
              comunitaria y atención a grupos en situación de vulnerabilidad.
            </p>
          </header>

          <div className="max-w-xl">
            <FuncionarioCard funcionario={dif} highlight />
          </div>
        </section>
      )}
    </main>
  );
}
