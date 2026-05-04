"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const TEXT_SHADOW = "0 2px 8px rgba(0,0,0,0.7)";

const hitos = [
  {
    ano: "1627",
    titulo: "Fundación de la misión",
    descripcion:
      "El jesuita Pedro Méndez funda la misión de San Javier de Arivechi para evangelizar a las tribus ópatas que habitaban la región serrana.",
    datoCurioso:
      "Pedro Méndez fue el primer jesuita portugués en establecer misiones en el noroeste de Sonora.",
    imagen: "/images/hitos/capilla-santa-cruz-buenavista.jpg",
    align: "left",
  },
  {
    ano: "1638",
    titulo: "Misión formalizada",
    descripcion:
      "Se establece formalmente con el primer templo permanente bajo el sistema de reducciones jesuitas, integrando costumbres ópatas con la fe católica.",
    datoCurioso:
      "Las reducciones jesuitas combinaban evangelización con preservación de lenguas y tradiciones indígenas.",
    imagen: "/images/hitos/parroquia-rosario-rayon.jpg",
    align: "left",
  },
  {
    ano: "1932",
    titulo: "Decreto municipal",
    descripcion:
      "Arivechi es decretado oficialmente como municipio libre del estado de Sonora, consolidando su autonomía administrativa.",
    datoCurioso:
      "El decreto fue parte de la reorganización territorial postrevolucionaria de Sonora.",
    imagen: "/images/hitos/palacio-gobierno-hermosillo.jpg",
    align: "left",
  },
  {
    ano: "2010",
    titulo: "Cerro Conchas Área Natural",
    descripcion:
      "La zona del Cerro de las Conchas es decretada Área Natural Protegida por su biodiversidad endémica y valor paleontológico.",
    datoCurioso:
      "El Cerro Conchas alberga especies únicas de cactáceas y reptiles endémicos.",
    imagen: "/images/hitos/sierra-madre-paisaje.jpg",
    align: "right",
  },
  {
    ano: "2016",
    titulo: "Fósiles cambrianos",
    descripcion:
      "Investigadores descubren fósiles marinos de más de 500 millones de años en el Cerro de las Conchas, posicionando a Arivechi como sitio paleontológico relevante.",
    datoCurioso:
      "Los fósiles cambrianos son contemporáneos a la 'explosión cámbrica', el periodo de mayor diversificación de vida en la Tierra.",
    imagen: "/images/hitos/trilobite-cambrico.jpg",
    align: "left",
  },
  {
    ano: "2024",
    titulo: "Administración actual",
    descripcion:
      "Inicia la administración 2024-2027 bajo el liderazgo del C. Francisco Flores Robles, con enfoque en transparencia, modernización digital y desarrollo sostenible.",
    datoCurioso:
      "Esta administración es la primera en Arivechi con presencia digital institucional completa.",
    imagen: null,
    escudo: "/escudo-arivechi-hd.png",
    align: "right",
  },
];

const ALIGN = {
  left: "items-start text-left",
  right: "items-end text-right",
};

function HitoContent({ hito, reduce, eager = false }) {
  return (
    <motion.div
      initial={reduce || eager ? false : { opacity: 0, y: 30 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative z-10 flex w-full max-w-3xl flex-col gap-5 px-6 py-12 sm:px-10 lg:px-16 ${ALIGN[hito.align]}`}
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
  );
}

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
  // Hito 2024: fondo gradient guinda con escudo institucional
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

function HitoSlideDesktop({ hito }) {
  const justify =
    hito.align === "right" ? "justify-end" : "justify-start";
  return (
    <div className="relative h-full w-screen shrink-0 overflow-hidden bg-black">
      <HitoBackground hito={hito} />
      <div className={`relative z-10 flex h-full w-full items-center ${justify}`}>
        <HitoContent hito={hito} eager />
      </div>
    </div>
  );
}

function HitoCardMobile({ hito, reduce }) {
  const justify =
    hito.align === "right" ? "justify-end" : "justify-start";
  return (
    <div className="relative min-h-[80vh] w-full overflow-hidden bg-black">
      <HitoBackground hito={hito} />
      <div className={`relative z-10 flex min-h-[80vh] w-full items-center ${justify}`}>
        <HitoContent hito={hito} reduce={reduce} />
      </div>
    </div>
  );
}

function ProgressBar({ index, total, scrollYProgress, ano }) {
  const start = index / total;
  const end = (index + 1) / total;
  const scaleX = useTransform(scrollYProgress, [start, end], [0, 1]);
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-1 w-12 overflow-hidden rounded-full bg-white/20">
        <motion.div
          aria-hidden="true"
          className="h-full origin-left bg-[var(--color-dorado)]"
          style={{ scaleX }}
        />
      </div>
      <span className="text-[10px] font-semibold tracking-widest text-white/70">
        {ano}
      </span>
    </div>
  );
}

export function LineaTiempo() {
  const reduce = useReducedMotion();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(hitos.length - 1) * 100}vw`],
  );

  return (
    <>
      {/* DESKTOP — scroll horizontal driven by vertical scroll */}
      <section
        ref={containerRef}
        aria-label="Línea del tiempo de Arivechi"
        className="relative hidden bg-black lg:block"
        style={{ height: `${hitos.length * 100}vh` }}
      >
        <div className="sticky top-0 h-dvh w-full overflow-hidden">
          <motion.div
            className="flex h-full"
            style={reduce ? undefined : { x }}
          >
            {hitos.map((hito) => (
              <HitoSlideDesktop key={hito.ano} hito={hito} />
            ))}
          </motion.div>

          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-4">
            {hitos.map((hito, i) => (
              <ProgressBar
                key={hito.ano}
                index={i}
                total={hitos.length}
                scrollYProgress={scrollYProgress}
                ano={hito.ano}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE — stack vertical */}
      <section
        aria-label="Línea del tiempo de Arivechi"
        className="bg-black lg:hidden"
      >
        {hitos.map((hito) => (
          <HitoCardMobile key={hito.ano} hito={hito} reduce={reduce} />
        ))}
      </section>
    </>
  );
}

export default LineaTiempo;
