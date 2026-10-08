import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfolio-web-sujoylayek.vercel.app",
      lastModified: new Date("2026-10-08"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
