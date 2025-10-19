import Hero from "../components/Hero";
import MagicBento from "../components/MagicBento";
import GlassCard from "../components/GlassCard";

export default function Home() {

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <GlassCard variant="section" className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
                Comprehensive software solutions designed to accelerate your business growth and digital transformation.
              </p>
            </GlassCard>
          </div>
          
          <MagicBento 
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="var(--color-glow-rgb)"
          />
        </div>
      </section>
    </div>
  );
}
