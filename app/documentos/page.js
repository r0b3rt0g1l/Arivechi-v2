import { buildMetadata } from "@/lib/seo";
import { getAllDocumentos } from "@/lib/documentosService";
import { DocumentosList } from "@/components/documentos/DocumentosList";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Documentos Públicos",
  description:
    "Documentos públicos del Municipio de Arivechi: actas, convocatorias, presupuestos, gaceta municipal y más.",
  path: "/documentos",
});

export default async function DocumentosPage() {
  const documentos = await getAllDocumentos();

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative bg-[var(--color-guinda)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h1 className="font-display text-4xl font-bold md:text-5xl">
            Documentos Públicos
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--color-cream)]/85">
            Documentos públicos del Municipio de Arivechi: actas, convocatorias,
            presupuestos, gaceta municipal y más.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
        {documentos.length === 0 ? (
          <div className="rounded-lg border border-gray-200 p-12 text-center">
            <p className="text-gray-600">
              No hay documentos disponibles todavía. Pronto se publicará
              contenido aquí.
            </p>
          </div>
        ) : (
          <DocumentosList documentos={documentos} />
        )}
      </section>
    </main>
  );
}
