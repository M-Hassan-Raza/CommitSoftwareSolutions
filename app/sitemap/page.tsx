import GlassCard from "../../components/GlassCard";
import Link from "next/link";

const links = [
  "/",
  "/about",
  "/services/web-development",
  "/services/business-automations",
  "/services/cloud-devops",
  "/services/graphics-design",
  "/products/pos-solutions",
  "/testimonials",
  "/contact",
  "/privacy",
  "/terms",
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <GlassCard variant="section" className="mb-6">
          <h1 className="text-3xl font-bold text-brand-600">Sitemap</h1>
          <p className="text-neutral-700 mt-2">Human-readable list of primary pages.</p>
        </GlassCard>
        <GlassCard>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {links.map((href) => (
              <li key={href}>
                <Link href={href} className="text-primary hover:opacity-90">{href}</Link>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </div>
  );
}


