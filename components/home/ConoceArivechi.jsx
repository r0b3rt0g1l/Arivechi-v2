"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Mountain,
  MapPin,
  Users,
} from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HERO_IMAGE = "/images/arivechi/panorama-sierra-madre.jpg";

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

function Paragraph({ eyebrow, texto, dropCap = false, delay = 0, reduce }) {
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-prose"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-dorado-700)]">
        {eyebrow}
      </p>
      {dropCap ? (
        <p className="mt-4 text-lg leading-[1.75] text-[var(--color-text)] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-7xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-[var(--color-guinda)]">
          {texto}
        </p>
      ) : (
        <p className="mt-4 text-lg leading-[1.75] text-[var(--color-text)]">
          {texto}
        </p>
      )}
    </motion.article>
  );
}

function PullQuote({ children, reduce }) {
  return (
    <motion.figure
      initial={reduce ? false : { opacity: 0 }}
      whileInView={reduce ? undefined : { opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto my-16 max-w-3xl py-12 lg:py-16"
    >
      <span
        aria-hidden="true"
        className="mx-auto mb-6 block h-px w-20 bg-[var(--color-dorado)]"
      />
      <blockquote className="text-center font-display text-4xl italic font-medium leading-[1.2] text-balance text-[var(--color-guinda)] lg:text-6xl">
        {children}
      </blockquote>
      <span
        aria-hidden="true"
        className="mx-auto mt-6 block h-px w-20 bg-[var(--color-dorado)]"
      />
    </motion.figure>
  );
}

function BigStat({ number, caption, reduce }) {
  return (
    <div className="mx-auto my-16 flex max-w-2xl flex-col items-center py-12 text-center lg:py-16">
      <motion.p
        initial={reduce ? false : { opacity: 0, y: 16, scale: 0.9 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-6xl font-bold leading-none text-[var(--color-guinda)] lg:text-7xl"
      >
        {number}
      </motion.p>
      <motion.p
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-guinda-deep)] lg:text-lg"
      >
        {caption}
      </motion.p>
    </div>
  );
}

export function ConoceArivechi() {
  const reduce = useReducedMotion();

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      id="historia"
      aria-label="Historia de Arivechi"
      className="relative overflow-hidden"
    >
      {/* ESCENA 1 — Heroica full-bleed */}
      <div
        ref={heroRef}
        className="relative aspect-[4/3] w-full overflow-hidden bg-black md:aspect-video lg:h-[80vh] lg:max-h-[820px]"
      >
        <motion.div
          initial={reduce ? false : { scale: 1.05, opacity: 0 }}
          animate={reduce ? false : { scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={
            reduce
              ? undefined
              : { y: heroY, willChange: "transform, opacity" }
          }
          className="absolute inset-0"
        >
          <Image
            src={HERO_IMAGE}
            alt="Panorámica de la Sierra Madre Occidental con nubes flotando entre las montañas, paisaje serrano característico de la región de Arivechi"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
          />
        </motion.div>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
        />

        {/* Continuidad: funde los últimos px de la heroica al fondo crema #FAFAF7 */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-[#FAFAF7] lg:h-24"
        />

        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto max-w-7xl px-8 pb-12 lg:px-16 lg:pb-20">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-dorado)]"
            >
              Historia
            </motion.p>
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={reduce ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance text-white drop-shadow-lg lg:text-7xl"
            >
              Lugar de las Calaveras
            </motion.h2>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl text-base text-white/85 lg:text-lg"
            >
              Un pueblo con raíces ópatas en la Sierra Madre Occidental.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ESCENA 2 — Editorial una columna con pull-quote y stat destacado */}
      <div className="bg-[#FAFAF7]">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:py-32">
          <Paragraph
            reduce={reduce}
            eyebrow="Origen"
            dropCap
            delay={0}
            texto="Fundado en 1627 por el misionero jesuita Pedro Méndez bajo el nombre de San Javier de Arivechi, una misión religiosa establecida para evangelizar a las tribus ópatas que habitaban la región."
          />

          <div className="mt-12">
            <Paragraph
              reduce={reduce}
              eyebrow="Significado"
              delay={0.05}
              texto="Su nombre proviene del idioma ópata Arivetzi, que significa “Lugar de las Calaveras” — de las raíces Arive (calavera) y Tzi (lugar). Hoy alberga 635 habitantes en la cabecera y 1,177 en todo el municipio."
            />
          </div>

          <PullQuote reduce={reduce}>
            «Arivetzi — Lugar de las Calaveras»
          </PullQuote>

          <Paragraph
            reduce={reduce}
            eyebrow="Patrimonio"
            delay={0.05}
            texto="Su plaza monumental ostenta una singular obra arquitectónica: un kiosco que es réplica del Pabellón Morisco de la colonia Santa María la Ribera en la Ciudad de México, con vitrales que retratan paisajes, fauna y flora locales."
          />

          <BigStat
            reduce={reduce}
            number="500 millones"
            caption="de años de antigüedad de los fósiles marinos del Cerro de las Conchas, descubiertos en la región en 2016."
          />

          <Paragraph
            reduce={reduce}
            eyebrow="Naturaleza"
            delay={0.05}
            texto="En 2010, la zona del Cerro de las Conchas fue decretada Área Natural Protegida. En 2016, investigadores descubrieron en la región fósiles marinos de más de 500 millones de años, del periodo cámbrico."
          />
        </div>
      </div>

      {/* ESCENA 3 — Cards de datos + CTAs (transición visual) */}
      <div className="bg-gradient-to-b from-[#FAFAF7] to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <header className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-dorado-700)]">
              Datos del municipio
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
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
                className="rounded-xl border border-[var(--color-border)] bg-white p-5 text-left shadow-[var(--shadow-card)]"
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
              </motion.div>
            ))}
          </motion.dl>

          <div className="mt-10 flex flex-wrap gap-3">
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
