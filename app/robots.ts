import type { MetadataRoute } from "next";

const siteUrl = "https://free-statutory-interest-calculator.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
