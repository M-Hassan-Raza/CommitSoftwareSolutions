'use client';

import Link from 'next/link';
import GlassCard from './GlassCard';

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Remove the solid background to let PixelBlast show through */}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <GlassCard variant="hero" className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Where Artificial Intelligence Meets Real Impact
          </h1>
        </GlassCard>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/#services" className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg hover:shadow-xl">
            Our Services
          </Link>
          <Link href="/contact" className="bg-card/80 text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-card hover:shadow-lg transition-all duration-200 border border-border">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
