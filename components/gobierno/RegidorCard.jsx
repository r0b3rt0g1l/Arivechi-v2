"use client";

import Image from "next/image";
import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserRound, Mail, Phone, Info } from "lucide-react";

export function RegidorCard({ regidor }) {
  const [openTooltip, setOpenTooltip] = useState(false);
  const tooltipId = useId();

  if (!regidor) return null;

  const tipoCargo = regidor.cargo || "Regidor/a Propietario/a";

  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-6 text-center shadow-[var(--shadow-card)]"
    >
      <div className="relative h-[140px] w-[140px] overflow-hidden rounded-full ring-2 ring-[var(--color-guinda)] md:h-[160px] md:w-[160px]">
        {regidor.foto ? (
          <Image
            src={regidor.foto}
            alt={`Fotografía de ${regidor.nombre}`}
            fill
            sizes="160px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--color-guinda-deep)] to-[var(--color-guinda)] text-[var(--color-cream)]">
            <UserRound className="h-16 w-16" aria-hidden="true" />
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-1">
        <h3 className="line-clamp-2 font-display text-lg font-bold leading-snug text-[var(--color-guinda-deep)]">
          {regidor.nombre}
        </h3>
        <p className="text-[13px] text-[var(--color-text-secondary)]">
          {tipoCargo}
        </p>
      </div>

      <ul className="flex flex-col items-center gap-1 text-[12px] text-[var(--color-text-muted)]">
        {regidor.email && (
          <li className="inline-flex items-center gap-1.5">
            <Mail aria-hidden="true" className="h-3.5 w-3.5 text-[var(--color-guinda)]" />
            <a href={`mailto:${regidor.email}`} className="truncate hover:text-[var(--color-guinda)]">
              {regidor.email}
            </a>
          </li>
        )}
        {regidor.telefono && (
          <li className="inline-flex items-center gap-1.5">
            <Phone aria-hidden="true" className="h-3.5 w-3.5 text-[var(--color-guinda)]" />
            <a href={`tel:${regidor.telefono}`} className="hover:text-[var(--color-guinda)]">
              {regidor.telefono}
            </a>
          </li>
        )}
      </ul>

      {regidor.suplente && (
        <div className="relative mt-1">
          <button
            type="button"
            aria-label={`Información de suplente de ${regidor.nombre}`}
            aria-describedby={openTooltip ? tooltipId : undefined}
            onMouseEnter={() => setOpenTooltip(true)}
            onMouseLeave={() => setOpenTooltip(false)}
            onFocus={() => setOpenTooltip(true)}
            onBlur={() => setOpenTooltip(false)}
            onClick={() => setOpenTooltip((o) => !o)}
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1 text-[11px] text-[var(--color-text-muted)] transition hover:border-[var(--color-guinda)]/30 hover:text-[var(--color-guinda)]"
          >
            <Info className="h-3 w-3" aria-hidden="true" />
            Suplencia
          </button>
          <AnimatePresence>
            {openTooltip && (
              <motion.div
                id={tooltipId}
                role="tooltip"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-full left-1/2 z-20 mb-2 w-max max-w-[240px] -translate-x-1/2 rounded-md bg-[var(--color-guinda-deep)] px-3 py-2 text-xs text-white shadow-lg"
              >
                Suplente: {regidor.suplente}
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-px"
                >
                  <span className="block h-2 w-2 rotate-45 bg-[var(--color-guinda-deep)]" />
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.article>
  );
}

export default RegidorCard;
