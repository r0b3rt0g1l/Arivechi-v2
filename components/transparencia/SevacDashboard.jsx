"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  ClipboardList,
  Layers,
  Boxes,
  ScrollText,
  ShieldCheck,
  Calendar,
  FileText,
  Download,
} from "lucide-react";
import { sevacResumen, sevacIndicadores, sevacDocumentos } from "@/lib/sevac";
import { formatFechaLarga } from "@/lib/dates";

const ICONS = {
  "Información Contable": Calculator,
  "Información Presupuestaria": ClipboardList,
  "Información Programática": Layers,
  "Cuentas Públicas": ScrollText,
  Inventarios: Boxes,
  "Disciplina financiera": ShieldCheck,
};

export function SevacDashboard() {
  return (
    <div className="flex flex-col gap-10">
      <section
        aria-label="Cumplimiento global SEvAC"
        className="relative isolate overflow-hidden rounded-3xl bg-[var(--color-guinda-deep)] p-8 text-white md:p-10"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_20%_30%,rgba(212,160,23,0.55)_0,transparent_50%),radial-gradient(circle_at_80%_70%,white_0,transparent_50%)]"
        />
        <div className="relative grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
          <div className="flex items-center justify-center">
            <CircularProgress value={sevacResumen.cumplimientoGlobal} />
          </div>
          <div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-cream)] backdrop-blur-sm">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--color-dorado)]" />
              Cumplimiento global · {sevacResumen.trimestreActual}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
              Resultados SEvAC del Gobierno Municipal de Arivechi
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[var(--color-cream)]/85">
              {sevacResumen.fuente} · Última actualización:{" "}
              {formatFechaLarga(sevacResumen.ultimaActualizacion)}.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Indicadores por categoría">
        <header className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
              Indicadores
            </p>
            <h3 className="mt-1 font-display text-2xl font-bold tracking-tight md:text-3xl">
              Cumplimiento por categoría
            </h3>
          </div>
          <p className="text-sm text-[var(--color-text-muted)]">
            Ejercicio fiscal {sevacResumen.ejercicio}
          </p>
        </header>

        <ul className="grid gap-4 md:grid-cols-2">
          {sevacIndicadores.map((ind, i) => {
            const Icon = ICONS[ind.categoria] ?? Calculator;
            return (
              <li
                key={ind.categoria}
                className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-guinda)]/10 text-[var(--color-guinda)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="font-display text-base font-bold text-[var(--color-text)]">
                        {ind.categoria}
                      </h4>
                      <span className="font-display text-xl font-bold text-[var(--color-guinda)]">
                        {ind.cumplimiento}%
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-secondary)]">
                      {ind.descripcion}
                    </p>
                  </div>
                </div>

                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[var(--color-bg)]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${ind.cumplimiento}%` }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 1,
                      delay: 0.1 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-[var(--color-guinda)] to-[var(--color-dorado)]"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section aria-label="Documentos descargables por trimestre">
        <header className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
            Reportes trimestrales
          </p>
          <h3 className="mt-1 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Documentos descargables
          </h3>
        </header>

        <ul className="grid gap-3 md:grid-cols-2">
          {sevacDocumentos.map((doc) => (
            <li
              key={doc.trimestre}
              className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-guinda-deep)] to-[var(--color-guinda)] text-white">
                <FileText className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="flex flex-1 flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[var(--color-dorado)]/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[var(--color-dorado-700)]">
                    {doc.trimestre}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                    <Calendar aria-hidden="true" className="h-3 w-3" />
                    <time dateTime={doc.fecha}>
                      {formatFechaLarga(doc.fecha)}
                    </time>
                  </span>
                </div>
                <p className="font-display text-base font-semibold text-[var(--color-text)]">
                  {doc.titulo}
                </p>
                <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
                  {doc.descripcion}
                </p>
              </div>
              <button
                type="button"
                disabled
                title="Documento próximamente disponible"
                aria-label={`Descargar ${doc.titulo} (pendiente)`}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-muted)] opacity-60 transition hover:border-[var(--color-guinda)]/30"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-6 rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-xs text-[var(--color-text-muted)]">
          Los reportes detallados estarán disponibles para descarga conforme
          sean publicados oficialmente por la Tesorería Municipal.
        </p>
      </section>
    </div>
  );
}

function CircularProgress({ value = 0 }) {
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative h-44 w-44">
      <svg
        viewBox="0 0 140 140"
        className="h-full w-full -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="70"
          cy="70"
          r={radius}
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="10"
          fill="none"
        />
        <motion.circle
          cx="70"
          cy="70"
          r={radius}
          stroke="var(--color-dorado)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-4xl font-bold text-white">{value}%</span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-cream)]/70">
          Cumplimiento
        </span>
      </div>
    </div>
  );
}

export default SevacDashboard;
