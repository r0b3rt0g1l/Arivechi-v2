import Link from "next/link";
import { Facebook } from "lucide-react";
import { municipalConfig } from "@/lib/municipalConfig";

export function TopBar() {
  const { identidad, redes } = municipalConfig;

  return (
    <div className="bg-[var(--color-guinda-deep)] text-[var(--color-cream)]">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between gap-4 px-4 text-xs sm:px-6 md:text-sm">
        <p className="truncate font-medium tracking-wide">
          {identidad.nombreCompleto}
        </p>

        <Link
          href={redes.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook oficial del Gobierno Municipal de Arivechi"
          className="inline-flex items-center justify-center rounded-full p-1.5 text-[var(--color-cream)] transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:bg-white/10"
        >
          <Facebook aria-hidden="true" className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
