import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/site";

function entry(path: string, priority: number, changeFrequency: "daily" | "weekly" | "monthly"): MetadataRoute.Sitemap[number] {
  const ru = `${siteUrl}${path}`;
  const en = `${siteUrl}/en${path === "/" ? "" : path}`;
  return { url: ru, lastModified: new Date(), changeFrequency, priority, alternates: { languages: { ru, en, "x-default": ru } } };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ["/", 1, "weekly"], ["/about", 0.8, "monthly"], ["/projects", 0.9, "weekly"], ["/profile", 0.8, "daily"], ["/contact", 0.7, "monthly"],
  ] as const;
  const base = paths.map(([path, priority, frequency]) => entry(path, priority, frequency));
  const projectsEntries = projects.map((project) => entry(`/projects/${project.id}`, 0.7, "monthly"));
  return [...base, ...projectsEntries];
}
