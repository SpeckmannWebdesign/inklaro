import type { MetadataRoute } from "next";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const BASE_URL = "https://www.inklaro.de";
const APP_DIR = join(process.cwd(), "src/app");
const EXCLUDE = new Set(["api", "admin", "danke"]);
const PAGE_RE = /^page\.(tsx|ts|jsx|js)$/;

function collect(dir: string, segments: string[] = []): string[] {
  const routes: string[] = [];
  const entries = readdirSync(dir);

  if (entries.some((e) => PAGE_RE.test(e))) {
    const clean = segments.filter((s) => !s.startsWith("("));
    if (clean.every((s) => !s.startsWith("["))) {
      routes.push("/" + clean.join("/"));
    }
  }

  for (const entry of entries) {
    const full = join(dir, entry);
    if (!statSync(full).isDirectory()) continue;
    if (EXCLUDE.has(entry)) continue;
    if (entry.startsWith("_")) continue;
    routes.push(...collect(full, [...segments, entry]));
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = Array.from(new Set(collect(APP_DIR))).sort();

  return routes.map((route) => {
    const normalized = route === "/" ? "" : route.replace(/\/+$/, "");
    const isHome = normalized === "";
    return {
      url: `${BASE_URL}${normalized || "/"}`,
      lastModified: now,
      changeFrequency: isHome ? "weekly" : "monthly",
      priority: isHome ? 1 : 0.7,
    };
  });
}
