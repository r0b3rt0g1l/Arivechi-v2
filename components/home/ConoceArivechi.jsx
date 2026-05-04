"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Mountain, Users } from "lucide-react";
import { municipalConfig } from "@/lib/municipalConfig";
import { conoceArivechi } from "@/lib/unsplashImages";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useParallax } from "@/hooks/useParallax";

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

const hitos = [
  {
    ano: "1627",
    evento:
      "Misión jesuita fundada por el padre Pedro Méndez bajo la advocación de San Francisco Javier de Arivechi.",
  },
  {
    ano: "1678",
    evento:
      "Arivechi se convierte en cabecera de rectorado de la región serrana.",
  },
  {
    ano: "1913",
    evento:
      "Memoria revolucionaria — paso de Francisco Villa por la localidad de Tarachi.",
  },
  {
    ano: "1932",
    evento:
      "Decretado municipio libre del estado de Sonora el 12 de abril.",
  },
  {
    ano: "2010",
    evento:
      "Cerro de las Conchas declarado Área Natural Protegida por sus fósiles cámbricos.",
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
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ConoceArivechi() {
  const { identidad } = municipalConfig;
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const { translateY } = useParallax(sectionRef, 0.18);

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
      ref={sectionRef}
      id="historia"
      aria-label="Historia de Arivechi"
      className="relative overflow-hidden bg-[var(--color-bg)]"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:items-center">
        <motion.div
          className="relative"
          style={reduce ? undefined : { y: translateY, willChange: "transform" }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-card-hover)]">
            <Image
              src={conoceArivechi.src}
              alt={conoceArivechi.alt}
              fill
              quality={85}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-[var(--color-guinda-deep)]/35 via-transparent to-transparent"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden w-56 rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card-hover)] md:block lg:-right-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-dorado-700)]">
              Significado ópata
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-[var(--color-guinda)]">
              &ldquo;{identidad.lema}&rdquo;
            </p>
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
              Origen prehispánico de raíz ópata, los primeros pobladores de la
              región.
            </p>
          </div>
        </motion.div>

        <motion.div {...motionContainer}>
          <motion.p
            {...motionItem}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]"
          >
            Historia
          </motion.p>
          <motion.h2
            {...motionItem}
            className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl"
          >
            Lugar de las Calaveras
          </motion.h2>

          <motion.p
            {...motionItem}
            className="mt-5 text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg"
          >
            Fundado en 1627 en la Sierra Madre Occidental, Arivechi es uno de
            los municipios con mayor riqueza histórica y natural del estado de
            Sonora. El nombre proviene del vocablo ópata{" "}
            <em>Arivetzi</em>, que significa &ldquo;lugar de las
            calaveras&rdquo;.
          </motion.p>

          <motion.p
            {...motionItem}
            className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg"
          >
            La población fue fundada como misión jesuita por el padre Pedro
            Méndez, bajo la advocación de San Francisco Javier de Arivechi, en
            territorio de la tribu ópata. Los ópatas fueron una de las
            civilizaciones más avanzadas del noroeste de México: su legado
            pervive en el nombre del municipio, en la toponimia de la región y
            en las tradiciones culturales que aún se celebran.
          </motion.p>

          <motion.p
            {...motionItem}
            className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg"
          >
            Tras siglos de transformaciones —cabecera de rectorado en 1678,
            escenario revolucionario en 1913 y municipio libre desde 1932—
            Arivechi conserva su identidad y mira al futuro. El Cerro de las
            Conchas, declarado Área Natural Protegida en 2010, alberga fósiles
            cámbricos con más de 500 millones de años de antigüedad.
          </motion.p>

          <motion.dl
            {...motionItem}
            className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {features.map(({ icon: Icon, label, value, detail }) => (
              <div
                key={label}
                className="rounded-xl border border-[var(--color-border)] bg-white p-4 text-left shadow-[var(--shadow-card)]"
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
              </div>
            ))}
          </motion.dl>

          <motion.div {...motionItem} className="mt-8 flex flex-wrap gap-3">
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

      <div className="border-t border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
          <header className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
              Línea del tiempo
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
              Hitos del municipio
            </h3>
          </header>

          <motion.ol
            variants={reduce ? undefined : containerVariants}
            initial={reduce ? undefined : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
          >
            {hitos.map((h) => (
              <motion.li
                key={h.ano}
                variants={reduce ? undefined : itemVariants}
                className="flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 shadow-[var(--shadow-card)]"
              >
                <span className="font-display text-2xl font-bold text-[var(--color-guinda)]">
                  {h.ano}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {h.evento}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}

export default ConoceArivechi;
