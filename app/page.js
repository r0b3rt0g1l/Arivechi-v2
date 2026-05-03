import { municipalConfig } from "@/lib/municipalConfig";
import { buildMetadata } from "@/lib/seo";
import { getNoticiasRecientes } from "@/lib/noticias";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { BannerInstitucional } from "@/components/home/BannerInstitucional";
import { AccionesRecientes } from "@/components/home/AccionesRecientes";
import { ConoceArivechi } from "@/components/home/ConoceArivechi";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Inicio",
  description: `Portal institucional del ${municipalConfig.identidad.nombreOficial}. Transparencia, gobierno, turismo y servicios al ciudadano. Administración ${municipalConfig.identidad.administracion}.`,
});

export default function HomePage() {
  const noticiasRecientes = getNoticiasRecientes(3);

  return (
    <main className="flex flex-1 flex-col">
      <HeroCarousel />
      <BannerInstitucional />
      <AccionesRecientes noticias={noticiasRecientes} />
      <ConoceArivechi />
    </main>
  );
}
