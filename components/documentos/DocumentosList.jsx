"use client";

import { useMemo, useState } from "react";
import { Download, FileText } from "lucide-react";
import { CATEGORIAS_DOCUMENTOS } from "@/lib/documentosService";
import { cn } from "@/lib/cn";

export function DocumentosList({ documentos }) {
  const [categoria, setCategoria] = useState("todas");

  const filtered = useMemo(() => {
    if (categoria === "todas") return documentos;
    return documentos.filter((doc) => doc.categoria === categoria);
  }, [documentos, categoria]);

  return (
    <div className="flex flex-col gap-8">
      <div
        role="tablist"
        aria-label="Filtrar documentos por categoría"
        className="flex flex-wrap gap-2"
      >
        {CATEGORIAS_DOCUMENTOS.map((cat) => {
          const active = categoria === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setCategoria(cat.value)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-[var(--color-guinda)] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300",
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-gray-200 p-12 text-center">
          <p className="text-gray-600">
            No hay documentos en esta categoría todavía.
          </p>
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          {filtered.map((doc) => (
            <li
              key={doc.id}
              className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-5 transition hover:border-[var(--color-guinda)] hover:shadow-md sm:flex-row sm:items-center"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[var(--color-guinda)]/10 text-[var(--color-guinda)]">
                <FileText className="h-6 w-6" aria-hidden="true" />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{doc.titulo}</h3>
                {doc.descripcion && (
                  <p className="mt-1 text-sm text-gray-600">{doc.descripcion}</p>
                )}
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 font-medium uppercase tracking-wide text-gray-700">
                    {doc.categoria}
                  </span>
                  {doc.anio != null && (
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 font-medium text-gray-700">
                      {doc.anio}
                    </span>
                  )}
                  {doc.trimestre != null && (
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 font-medium text-gray-700">
                      T{doc.trimestre}
                    </span>
                  )}
                  {doc.tipo && (
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 font-medium text-gray-700">
                      {doc.tipo}
                    </span>
                  )}
                </div>
              </div>

              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[var(--color-guinda)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-guinda-deep)] focus:outline-none focus:ring-2 focus:ring-[var(--color-guinda)] focus:ring-offset-2"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Descargar
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DocumentosList;
