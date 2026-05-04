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
import { municipalConfig } from "@/lib/municipalConfig";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const QUIOSCO = "/images/arivechi/quiosco-morisco.jpg";
const TEMPLO = "/images/arivechi/templo-santa-rosalia.jpg";

const parrafos = [
  {
    titulo: "Origen",
    texto:
      "Fundado en 1627 por el misionero jesuita Pedro Méndez bajo el nombre de San Javier de Arivechi, una misión religiosa establecida para evangelizar a las tribus ópatas que habitaban la región.",
  },
  {
    titulo: "Significado",
    texto:
      "Su nombre proviene del idioma ópata Arivetzi, que significa 'Lugar de las Calaveras' — de las raíces Arive (calavera) y Tzi (lugar). Hoy alberga 635 habitantes en la cabecera y 1,177 en todo el municipio.",
  },
  {
    titulo: "Patrimonio",
    texto:
      "Su plaza monumental ostenta una singular obra arquitectónica: un kiosco que es réplica del Pabellón Morisco de la colonia Santa María la Ribera en la Ciudad de México, con vitrales que retratan paisajes, fauna y flora locales.",
  },
  {
    titulo: "Naturaleza",
    texto:
      "En 2010, la zona del Cerro de las Conchas fue decretada Área Natural Protegida. En 2016, investigadores descubrieron en la región fósiles marinos de más de 500 millones de años, del periodo cámbrico.",
  },
];

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ConoceArivechi() {
  const { identidad } = municipalConfig;
  const reduce = useReducedMotion();

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroOverlayOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.55, 0.85],
  );

  const motionContainer = reduce
    ? {}
    : {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-80px" },
      };
  const motionItem = reduce ? {} : { variants: itemVariants };

  return (
    <section
      id="historia"
      aria-label="Historia de Arivechi"
      className="relative overflow-hidden bg-[var(--color-bg)]"
    >
      {/* ETAPA 1 — Hero cinematográfico */}
      <div
        ref={heroRef}
        className="relative h-[60vh] min-h-[420px] w-full overflow-hidden bg-[var(--color-guinda-deep)] md:h-[80vh]"
      >
        <motion.div
          initial={reduce ? false : { scale: 1.05, opacity: 0 }}
          animate={reduce ? false : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={
            reduce
              ? undefined
              : { y: heroY, willChange: "transform, opacity" }
          }
          className="absolute inset-0"
        >
          <Image
            src={QUIOSCO}
            alt="Quiosco morisco de la Plaza Principal de Arivechi"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover"
          />
        </motion.div>

        <motion.div
          aria-hidden="true"
          style={
            reduce ? { opacity: 0.6 } : { opacity: heroOverlayOpacity }
          }
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-guinda-deep)] via-[var(--color-guinda-deep)]/50 to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 md:pb-16">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-dorado)]"
            >
              Historia
            </motion.p>
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={reduce ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-balance text-white md:text-6xl lg:text-7xl"
            >
              Lugar de las Calaveras
            </motion.h2>
          </div>
        </div>
      </div>

      {/* ETAPA 2 — Editorial 2 columnas */}
      <div className="bg-[var(--color-bg)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[5fr_6fr] lg:items-start lg:gap-16">
          <div className="relative lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-card-hover)]">
              <Image
                src={TEMPLO}
                alt="Templo de Santa Rosalía, Arivechi"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                quality={90}
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-[var(--color-guinda-deep)]/35 via-transparent to-transparent"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden w-60 rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card-hover)] md:block lg:-right-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-dorado-700)]">
                Significado ópata
              </p>
              <p className="mt-2 font-display text-2xl font-bold text-[var(--color-guinda)]">
                &ldquo;{identidad.lema}&rdquo;
              </p>
              <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
                Origen prehispánico de raíz ópata, los primeros pobladores de
                la región.
              </p>
            </div>
          </div>

          <motion.div {...motionContainer} className="space-y-8">
            {parrafos.map((p) => (
              <motion.article key={p.titulo} {...motionItem}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
                  {p.titulo}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
                  {p.texto}
                </p>
              </motion.article>
            ))}

            <motion.div
              {...motionItem}
              className="flex flex-wrap gap-3 pt-2"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ETAPA 3 — Cards de datos */}
      <div className="border-t border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
          <motion.dl
            variants={reduce ? undefined : containerVariants}
            initial={reduce ? undefined : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {features.map(({ icon: Icon, label, value, detail }) => (
              <motion.div
                key={label}
                variants={reduce ? undefined : itemVariants}
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
        </div>
      </div>
    </section>
  );
}

export default ConoceArivechi;
