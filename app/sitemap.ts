import { MetadataRoute } from "next";

// Force static generation
export const dynamic = "force-static";

// Base URL for the website
const baseUrl = "https://commitsoftware.dev";

// Define the sitemap with all routes and their priorities
export default function sitemap(): MetadataRoute.Sitemap {
     // Main pages with high priority
     const mainRoutes = [
          {
               url: `${baseUrl}/`,
               lastModified: new Date(),
               changeFrequency: "weekly" as const,
               priority: 1.0,
          },
          {
               url: `${baseUrl}/about`,
               lastModified: new Date(),
               changeFrequency: "monthly" as const,
               priority: 0.8,
          },
          {
               url: `${baseUrl}/contact`,
               lastModified: new Date(),
               changeFrequency: "monthly" as const,
               priority: 0.9,
          },
          {
               url: `${baseUrl}/services`,
               lastModified: new Date(),
               changeFrequency: "weekly" as const,
               priority: 0.9,
          },
          {
               url: `${baseUrl}/testimonials`,
               lastModified: new Date(),
               changeFrequency: "monthly" as const,
               priority: 0.7,
          },
     ];

     // Service subpages with slightly lower priority
     const serviceRoutes = [
          {
               url: `${baseUrl}/services/business-automations`,
               lastModified: new Date(),
               changeFrequency: "monthly" as const,
               priority: 0.8,
          },
          {
               url: `${baseUrl}/services/cloud-devops`,
               lastModified: new Date(),
               changeFrequency: "monthly" as const,
               priority: 0.8,
          },
          {
               url: `${baseUrl}/services/web-development`,
               lastModified: new Date(),
               changeFrequency: "monthly" as const,
               priority: 0.8,
          },
          {
               url: `${baseUrl}/services/graphics-design`,
               lastModified: new Date(),
               changeFrequency: "monthly" as const,
               priority: 0.8,
          },
          {
               url: `${baseUrl}/services/pos-solutions`,
               lastModified: new Date(),
               changeFrequency: "monthly" as const,
               priority: 0.8,
          },
     ];

     // Combine all routes for the sitemap
     return [...mainRoutes, ...serviceRoutes];
}