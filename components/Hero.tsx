"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Remove the solid background to let PixelBlast show through */}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Where Artificial Intelligence Meets Real Impact
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            We design, build, and scale reliable software that reduces
            operational drag, improves conversion, and automates the busywork—so
            your team can focus on growth.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/#services"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="bg-card/80 text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-card hover:shadow-lg transition-all duration-200 border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
