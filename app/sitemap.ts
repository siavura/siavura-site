import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://siavura.com";
  return [
    "en", "it", "en/projects", "it/projects", "en/projects/cmi", "it/projects/cmi", "en/about", "it/about", "en/contact", "it/contact",
  ].map((path) => ({ url: `${base}/${path}` }));
}
