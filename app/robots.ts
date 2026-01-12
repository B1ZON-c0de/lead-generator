import type { MetadataRoute } from "next";
import { seoConfig } from "@/lib/seo-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // API routes
          "/admin/", // Админ панель (если есть)
          "/_next/", // Next.js системные файлы
          "/private/", // Приватные страницы
        ],
      },
      // Специальные правила для Яндекса
      {
        userAgent: "Yandex",
        allow: "/",
        disallow: ["/api/", "/admin/"],
        // Яндекс поддерживает Clean-param для удаления GET-параметров
      },
      // Правила для Google
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${seoConfig.siteUrl}/sitemap.xml`,
    host: seoConfig.siteUrl,
  };
}
