'use client';

import Link from 'next/link';

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Remove the solid background to let PixelBlast show through */}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-600 mb-8 leading-tight">
          Transform Your Business<br />
          With Smart Software Solutions
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/#services" className="bg-brand-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-brand-600 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Our Services
          </Link>
          <Link href="/contact" className="bg-white/80 text-brand-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:shadow-lg transition-all duration-200 border border-brand-200">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
