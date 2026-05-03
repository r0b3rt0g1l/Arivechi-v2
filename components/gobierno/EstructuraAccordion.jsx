"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Layers, AlertCircle, Users } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

export function EstructuraAccordion({ niveles = [] }) {
  const [open, setOpen] = useState(["n1-cabildo"]);

  return (
    <Accordion.Root
      type="multiple"
      value={open}
      onValueChange={setOpen}
      className="flex flex-col gap-3"
    >
      {niveles.map((nivel) => {
        const isOpen = open.includes(nivel.id);
        return (
          <Accordion.Item
            key={nivel.id}
            value={nivel.id}
            className={cn(
              "overflow-hidden rounded-2xl border bg-white shadow-[var(--shadow-card)] transition-shadow",
              isOpen
                ? "border-[var(--color-guinda)]/30 shadow-[var(--shadow-card-hover)]"
                : "border-[var(--color-border)]",
            )}
          >
            <Accordion.Header>
              <Accordion.Trigger
                className={cn(
                  "flex w-full items-center gap-4 px-5 py-5 text-left outline-none transition-colors hover:bg-[var(--color-guinda)]/[0.03] sm:px-6",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-display text-lg font-bold transition",
                    isOpen
                      ? "bg-[var(--color-guinda)] text-white"
                      : "bg-[var(--color-bg)] text-[var(--color-guinda)]",
                  )}
                >
                  {nivel.nivel}
                </span>
                <div className="flex flex-1 flex-col">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
                    Nivel {nivel.nivel}
                  </p>
                  <h3 className="font-display text-lg font-bold text-[var(--color-text)] md:text-xl">
                    {nivel.titulo}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {nivel.subtitulo}
                  </p>
                </div>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "h-5 w-5 shrink-0 text-[var(--color-text-muted)] transition-transform duration-300",
                    isOpen && "rotate-180 text-[var(--color-guinda)]",
                  )}
                />
              </Accordion.Trigger>
            </Accordion.Header>

            <AnimatePresence initial={false}>
              {isOpen && (
                <Accordion.Content asChild forceMount>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-6 sm:px-6">
                      <p className="max-w-3xl text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base">
                        {nivel.descripcion}
                      </p>

                      {nivel.pendiente && (
                        <div className="mt-4 inline-flex items-start gap-2 rounded-lg border border-[var(--color-dorado)]/30 bg-[var(--color-dorado)]/10 px-3 py-2 text-xs text-[var(--color-dorado-700)]">
                          <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>
                            Información en proceso de publicación. Los nombres
                            de las personas titulares se actualizarán conforme
                            las designaciones oficiales sean emitidas.
                          </span>
                        </div>
                      )}

                      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {nivel.miembros.map((m, i) => (
                          <li
                            key={`${nivel.id}-m-${i}`}
                            className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4 shadow-sm"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-guinda)]/10 text-[var(--color-guinda)]"
                            >
                              {nivel.nivel === 1 || nivel.nivel === 5 ? (
                                <Users className="h-4 w-4" />
                              ) : (
                                <Layers className="h-4 w-4" />
                              )}
                            </span>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-[var(--color-text)]">
                                {m.nombre}
                              </p>
                              <p className="text-xs text-[var(--color-text-secondary)]">
                                {m.cargo}
                              </p>
                              {m.suplente && (
                                <p className="mt-1 text-[11px] text-[var(--color-text-muted)]">
                                  Suplente: {m.suplente}
                                </p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </Accordion.Content>
              )}
            </AnimatePresence>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}

export default EstructuraAccordion;
