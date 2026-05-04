"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { hitos } from "@/lib/hitos";

const TEXT_SHADOW = "0 2px 8px rgba(0,0,0,0.7)";

const ALIGN = {
  left: "justify-start",
  right: "justify-end",
};

const ALIGN_TEXT = {
  left: "items-start text-left",
  right: "items-end text-right",
};

function HitoBackground({ hito }) {
  if (hito.imagen) {
    return (
      <>
        <Image
          src={hito.imagen}
          alt=""
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[rgba(107,22,41,0.20)]"
        />
      </>
    );
  }
  // Hito 2024: gradient guinda institucional + escudo centrado
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[var(--color-guinda-deep)] via-[var(--color-guinda)] to-[var(--color-guinda-deep)]"
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-25">
        <Image
          src={hito.escudo}
          alt=""
          width={520}
          height={520}
          className="h-[60vh] w-auto max-w-[60vw] object-contain"
          priority={false}
        />
      </div>
    </>
  );
}

function Hito({ hito, reduce }) {
  return (
    <article
      role="region"
      aria-label={`Hito ${hito.ano}: ${hito.titulo}`}
      className="relative min-h-dvh w-full overflow-hidden bg-black"
    >
      <HitoBackground hito={hito} />
      <div
        className={`relative z-10 flex min-h-dvh w-full items-center px-6 py-16 sm:px-10 lg:px-16 ${ALIGN[hito.align]}`}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`flex w-full max-w-3xl flex-col gap-5 ${ALIGN_TEXT[hito.align]}`}
          style={{ textShadow: TEXT_SHADOW }}
        >
          <p
            className={`inline-flex items-center gap-3 font-display text-7xl font-bold leading-none text-[var(--color-dorado)] lg:text-8xl ${
              hito.align === "right" ? "flex-row-reverse" : ""
            }`}
          >
            <span
              aria-hidden="true"
              className="block h-px w-10 bg-[var(--color-dorado)]"
            />
            {hito.ano}
          </p>
          <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight text-balance text-white lg:text-5xl">
            {hito.titulo}
          </h3>
          <p className="max-w-xl text-base leading-relaxed text-white/90 lg:text-lg">
            {hito.descripcion}
          </p>
          <div
            className={`mt-3 max-w-md rounded-lg border-l-4 border-[var(--color-dorado)] bg-black/40 px-5 py-4 text-left backdrop-blur-md ${
              hito.align === "right" ? "self-end" : ""
            }`}
            style={{ textShadow: "none" }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-dorado)]">
              Dato curioso
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-white/90">
              {hito.datoCurioso}
            </p>
          </div>
        </motion.div>
      </div>
    </article>
  );
}

export function LineaTiempo() {
  const reduce = useReducedMotion();
  return (
    <section
      id="linea-del-tiempo"
      aria-label="Línea del tiempo de Arivechi"
      className="bg-black"
    >
      {hitos.map((hito) => (
        <Hito key={hito.ano} hito={hito} reduce={reduce} />
      ))}
    </section>
  );
}

export default LineaTiempo;
