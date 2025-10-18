'use client';

interface ServiceHeroProps {
  title: string;
  description: string;
}

export default function ServiceHero({ title, description }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/30 via-accent-900/20 to-cloud-900/30 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
