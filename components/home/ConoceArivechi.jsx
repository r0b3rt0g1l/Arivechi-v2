"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Mountain,
  MapPin,
  Users,
} from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { hitos } from "@/lib/hitos";

const HERO_IMAGE = "/images/arivechi/panorama-sierra-madre.jpg";
const TEXT_SHADOW = "0 2px 8px rgba(0,0,0,0.7)";

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
    detail: "municipio · 635 cabecera",
  },
];

const cardsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};
const cardItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const ALIGN = {
  left: "justify-start",
  right: "justify-end",
  center: "justify-center",
};

const ALIGN_TEXT = {
  left: "items-start text-left",
  right: "items-end text-right",
};

function getHitoByYear(year) {
  return hitos.find((h) => h.ano === String(year)) ?? null;
}

function HeroBlock({ reduce }) {
  return (
    <div
      className="relative flex min-h-dvh items-end px-6 pb-16 pt-28 sm:px-10 lg:px-16 lg:pb-20"
      role="region"
      aria-labelledby="historia-titulo"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 60 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-30%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
        style={{ textShadow: TEXT_SHADOW }}
      >
        <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-dorado)]">
          <span
            aria-hidden="true"
            className="block h-px w-8 bg-[var(--color-dorado)]"
          />
          Historia
        </p>
        <h2
          id="historia-titulo"
          className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance text-white lg:text-7xl"
        >
          Lugar de las Calaveras
        </h2>
        <p className="mt-5 max-w-xl text-base text-white/85 lg:text-lg">
          Un pueblo con raíces ópatas en la Sierra Madre Occidental.
        </p>
      </motion.div>
    </div>
  );
}

function NarrativeBlock({ eyebrow, children, align = "left", reduce, id }) {
  return (
    <div
      role="region"
      aria-labelledby={id}
      className={`relative flex min-h-dvh items-center px-6 py-16 sm:px-10 lg:px-16 ${ALIGN[align]}`}
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 60 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-30%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-2xl rounded-xl border border-white/5 bg-black/40 p-8 backdrop-blur-md lg:p-12"
      >
        <p
          id={id}
          className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-dorado)]"
        >
          {eyebrow}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-white lg:text-xl">
          {children}
        </p>
      </motion.div>
    </div>
  );
}

function PullQuote({ children, reduce }) {
  return (
    <div
      role="region"
      aria-label="Cita destacada"
      className="relative flex min-h-dvh items-center justify-center px-6 py-16"
    >
      <motion.figure
        initial={reduce ? false : { opacity: 0, scale: 0.9 }}
        whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-30%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-3xl text-center"
        style={{ textShadow: TEXT_SHADOW }}
      >
        <blockquote className="font-display text-5xl italic font-medium leading-[1.15] text-balance text-[var(--color-dorado)] lg:text-7xl">
          {children}
        </blockquote>
      </motion.figure>
    </div>
  );
}

function BigStat({ number, unit, caption, reduce }) {
  return (
    <div
      role="region"
      aria-label="Dato destacado"
      className="relative flex min-h-dvh items-center justify-center px-6 py-16"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.9 }}
        whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-30%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-3xl text-center"
        style={{ textShadow: TEXT_SHADOW }}
      >
        <p className="font-display text-7xl font-bold leading-none text-[var(--color-dorado)] lg:text-9xl">
          {number}
        </p>
        <p className="mt-3 font-display text-3xl text-white/95 lg:text-5xl">
          {unit}
        </p>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/80 lg:text-lg">
          {caption}
        </p>
      </motion.div>
    </div>
  );
}

function HitoBlock({ hito, reduce }) {
  return (
    <div
      role="region"
      aria-label={`Hito ${hito.ano}: ${hito.titulo}`}
      className="relative min-h-dvh w-full overflow-hidden bg-black"
    >
      {hito.imagen ? (
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
            className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/75"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[rgba(107,22,41,0.20)]"
          />
        </>
      ) : (
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
      )}

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
    </div>
  );
}

export function ConoceArivechi() {
  const reduce = useReducedMotion();

  const hito1627 = getHitoByYear(1627);
  const hito1638 = getHitoByYear(1638);
  const hito1932 = getHitoByYear(1932);
  const hito2010 = getHitoByYear(2010);
  const hito2016 = getHitoByYear(2016);
  const hito2024 = getHitoByYear(2024);

  return (
    <>
      {/* HISTORIA — narrativa intercalada con hitos sobre Sierra Madre sticky */}
      <section
        id="historia"
        aria-label="Historia de Arivechi"
        className="relative bg-black"
      >
        {/* Imagen sticky base — Sierra Madre que se ve durante los bloques narrativos */}
        <div
          className={
            reduce
              ? "relative h-dvh w-full overflow-hidden"
              : "sticky top-0 h-dvh w-full overflow-hidden"
          }
        >
          <Image
            src={HERO_IMAGE}
            alt="Panorámica de la Sierra Madre Occidental con nubes flotando entre las montañas"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[rgba(107,22,41,0.20)]"
          />
        </div>

        {/* Flujo narrativo + hitos intercalados, superpuestos al sticky con margen negativo */}
        <div
          className={reduce ? "relative z-10" : "relative z-10 -mt-[100dvh]"}
        >
          {/* 1. Entrada heroica */}
          <HeroBlock reduce={reduce} />

          {/* 2. Narrativa Origen */}
          <NarrativeBlock
            id="historia-origen"
            eyebrow="Origen"
            align="left"
            reduce={reduce}
          >
            Fundado en 1627 por el misionero jesuita Pedro Méndez bajo el nombre
            de San Javier de Arivechi, una misión religiosa establecida para
            evangelizar a las tribus ópatas que habitaban la región.
          </NarrativeBlock>

          {/* 3. Hito 1627 */}
          {hito1627 && <HitoBlock hito={hito1627} reduce={reduce} />}

          {/* 4. Narrativa Significado */}
          <NarrativeBlock
            id="historia-significado"
            eyebrow="Significado"
            align="right"
            reduce={reduce}
          >
            Su nombre proviene del idioma ópata Arivetzi, que significa
            &ldquo;Lugar de las Calaveras&rdquo; — de las raíces Arive (calavera)
            y Tzi (lugar). Hoy alberga 635 habitantes en la cabecera y 1,177 en
            todo el municipio.
          </NarrativeBlock>

          {/* 5. Hito 1638 */}
          {hito1638 && <HitoBlock hito={hito1638} reduce={reduce} />}

          {/* 6. Pull-quote */}
          <PullQuote reduce={reduce}>
            «Arivetzi —<br />Lugar de las Calaveras»
          </PullQuote>

          {/* 7. Narrativa Patrimonio */}
          <NarrativeBlock
            id="historia-patrimonio"
            eyebrow="Patrimonio"
            align="left"
            reduce={reduce}
          >
            Su plaza monumental ostenta una singular obra arquitectónica: un
            kiosco que es réplica del Pabellón Morisco de la colonia Santa María
            la Ribera en la Ciudad de México, con vitrales que retratan paisajes,
            fauna y flora locales.
          </NarrativeBlock>

          {/* 8. Hito 1932 */}
          {hito1932 && <HitoBlock hito={hito1932} reduce={reduce} />}

          {/* 9. Stat 500 millones */}
          <BigStat
            reduce={reduce}
            number="500"
            unit="millones de años"
            caption="de antigüedad de los fósiles marinos del Cerro de las Conchas, descubiertos en 2016."
          />

          {/* 10. Hito 2010 */}
          {hito2010 && <HitoBlock hito={hito2010} reduce={reduce} />}

          {/* 11. Hito 2016 */}
          {hito2016 && <HitoBlock hito={hito2016} reduce={reduce} />}

          {/* 12. Narrativa Naturaleza */}
          <NarrativeBlock
            id="historia-naturaleza"
            eyebrow="Naturaleza"
            align="right"
            reduce={reduce}
          >
            En 2010, la zona del Cerro de las Conchas fue decretada Área Natural
            Protegida por su biodiversidad endémica y sus formaciones geológicas
            únicas en el noroeste de México.
          </NarrativeBlock>

          {/* 13. Hito 2024 — cierre */}
          {hito2024 && <HitoBlock hito={hito2024} reduce={reduce} />}

          {/* Transición fade hacia la siguiente sección guinda */}
          <div
            aria-hidden="true"
            className="relative h-[50vh] min-h-[300px] w-full bg-gradient-to-b from-transparent via-[rgba(107,22,41,0.5)] to-[var(--color-guinda)]"
          />
        </div>
      </section>

      {/* DATOS DEL MUNICIPIO — sección guinda preservada de T22 */}
      <section
        aria-label="Datos del municipio"
        className="bg-[var(--color-guinda)]"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <header className="mb-8 max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-dorado)]">
              <span
                aria-hidden="true"
                className="block h-px w-8 bg-[var(--color-dorado)]"
              />
              Datos del municipio
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              Arivechi en cifras
            </h3>
          </header>

          <motion.dl
            variants={reduce ? undefined : cardsContainer}
            initial={reduce ? undefined : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {features.map(({ icon: Icon, label, value, detail }) => (
              <motion.div
                key={label}
                variants={reduce ? undefined : cardItem}
                className="rounded-xl border border-[var(--color-dorado)]/30 bg-[var(--color-guinda-deep)] p-5 text-left shadow-[0_10px_30px_-12px_rgba(0,0,0,0.4)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-dorado)]/70 hover:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.5)]"
              >
                <Icon
                  aria-hidden="true"
                  className="h-5 w-5 text-[var(--color-dorado)]"
                />
                <dt className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-cream)]/70">
                  {label}
                </dt>
                <dd className="mt-1 font-display text-lg font-bold text-[var(--color-dorado)] md:text-xl">
                  {value}
                </dd>
                <dd className="text-[11px] text-[var(--color-cream)]/80">
                  {detail}
                </dd>
              </motion.div>
            ))}
          </motion.dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/turismo"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-dorado)] px-6 py-3 text-sm font-semibold text-[var(--color-guinda-deep)] shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#E5B62A] hover:shadow-lg"
            >
              Descubre el turismo
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/gobierno/directorio"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--color-dorado)] hover:text-[var(--color-dorado)]"
            >
              Conoce el Gobierno
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConoceArivechi;
