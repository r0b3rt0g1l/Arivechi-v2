import { Mail, Phone, UserPlus } from "lucide-react";
import { FuncionarioAvatar } from "@/components/gobierno/FuncionarioAvatar";
import { cn } from "@/lib/cn";

const TIPO_LABEL = {
  presidente: "Presidente Municipal",
  sindica: "Sindicatura",
  regidor: "Regiduría",
  dif: "DIF Municipal",
};

export function FuncionarioCard({ funcionario, highlight = false }) {
  const { nombre, cargo, tipo, suplente, email, telefono, foto, bio } = funcionario;
  const eyebrow = TIPO_LABEL[tipo] ?? "Servidor público";

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border bg-white p-6 transition duration-300",
        highlight
          ? "border-[var(--color-dorado)]/40 shadow-[var(--shadow-card-hover)]"
          : "border-[var(--color-border)] shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-[var(--color-guinda)]/20 hover:shadow-[var(--shadow-card-hover)]",
      )}
    >
      <div className="flex items-start gap-4">
        <FuncionarioAvatar src={foto} nombre={nombre} size="md" />
        <div className="flex flex-col">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
            {eyebrow}
          </p>
          <h3 className="mt-1 font-display text-lg font-bold leading-snug text-[var(--color-text)]">
            {nombre}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">{cargo}</p>
        </div>
      </div>

      {bio && (
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {bio}
        </p>
      )}

      <dl className="mt-4 grid gap-2 text-sm">
        {suplente && (
          <div className="flex items-start gap-2 rounded-lg bg-[var(--color-bg)] px-3 py-2">
            <UserPlus
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-guinda)]"
            />
            <div className="leading-tight">
              <dt className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                Suplente
              </dt>
              <dd className="text-sm text-[var(--color-text)]">{suplente}</dd>
            </div>
          </div>
        )}
        {email && (
          <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
            <Mail aria-hidden="true" className="h-4 w-4 text-[var(--color-guinda)]" />
            <a href={`mailto:${email}`} className="hover:text-[var(--color-guinda)] hover:underline">
              {email}
            </a>
          </div>
        )}
        {telefono && (
          <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
            <Phone aria-hidden="true" className="h-4 w-4 text-[var(--color-guinda)]" />
            <a href={`tel:${telefono}`} className="hover:text-[var(--color-guinda)] hover:underline">
              {telefono}
            </a>
          </div>
        )}
        {!email && !telefono && (
          <p className="text-xs italic text-[var(--color-text-muted)]">
            Datos de contacto pendientes de publicación.
          </p>
        )}
      </dl>
    </article>
  );
}

export default FuncionarioCard;
