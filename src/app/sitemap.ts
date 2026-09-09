import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

// Requerido con `output: "export"`: la ruta se resuelve en el build.
export const dynamic = "force-static";

// La guía es una única ruta (`/`); las pantallas internas son fragmentos hash
// que los buscadores no indexan como URLs propias.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
