import type { MetadataRoute } from "next";

const base = "https://djmobangs.com";
const routes = ["", "/about", "/experiences", "/mixes", "/gallery", "/booking", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
