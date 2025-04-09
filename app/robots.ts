import { MetadataRoute } from "next";

// Force static generation
export const dynamic = "force-static";

// Define your robots.txt content
export default function robots(): MetadataRoute.Robots {
     return {
          // Define rules for all user agents
          rules: {
               userAgent: "*",
               allow: ["/"],
               // Disallow admin or private areas if you have any
               disallow: [
                    "/admin/",
                    "/private/",
                    "/_next/",
                    "/api/"
               ],
          },
          // Define additional rules for specific user agents if needed
          // Example - block archive.org's Wayback Machine from specific paths
          // {
          //   userAgent: "ia_archiver",
          //   disallow: ["/blog/", "/private/"],
          // },

          // Point to your sitemap - this is important for search engines to find your sitemap
          sitemap: "https://commitsoftware.dev/sitemap.xml",
          // Set host for consistency
          host: "https://commitsoftware.dev",
     };
}