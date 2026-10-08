import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sujoylayek.dev",
      lastModified: new Date("2026-10-08"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
