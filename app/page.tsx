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
                We ship dependable software that improves conversion, automates operations, and scales with your business.
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

      {/* Value Propositions */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard>
            <h3 className="text-xl font-semibold text-brand-600 mb-2">Ship Faster</h3>
            <p className="text-neutral-700">Short cycles, reliable releases, and pragmatic scope to get value live sooner.</p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-xl font-semibold text-brand-600 mb-2">Increase Conversion</h3>
            <p className="text-neutral-700">Modern UX, performance, and A/B discipline to grow revenue per visitor.</p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-xl font-semibold text-brand-600 mb-2">Automate Ops</h3>
            <p className="text-neutral-700">Replace manual workflows with robust automation and clear observability.</p>
          </GlassCard>
        </div>
      </section>

      {/* Process Overview */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <GlassCard variant="section" className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-600">How We Work</h2>
            <p className="text-neutral-700 mt-2">A lightweight, outcome-focused process to reduce risk and deliver results.</p>
          </GlassCard>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              'Discovery',
              'Design',
              'Build',
              'Launch',
              'Iterate',
            ].map((phase) => (
              <GlassCard key={phase}>
                <h3 className="text-lg font-semibold text-brand-600">{phase}</h3>
                <p className="text-neutral-700 mt-2">Clear milestones, weekly demos, transparent progress.</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <GlassCard variant="section" className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-600">Industries</h2>
            <p className="text-neutral-700 mt-2">Cross-industry experience with a focus on measurable outcomes.</p>
          </GlassCard>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Retail & POS', 'SaaS', 'Healthcare', 'Fintech'].map((item) => (
              <GlassCard key={item}><p className="text-neutral-800 font-medium">{item}</p></GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard variant="section" className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-600">FAQ</h2>
          </GlassCard>
          <div className="space-y-4">
            {[
              { q: 'How long does a typical project take?', a: '2–12 weeks depending on scope, with weekly demos.' },
              { q: 'How do you price projects?', a: 'Fixed-bid, time & materials, or retainer, depending on uncertainty and goals.' },
              { q: 'Who owns the IP?', a: 'You do. Code is transferred at each milestone.' },
              { q: 'Where is it hosted?', a: 'We deploy to your cloud or help you set up one.' },
              { q: 'What about maintenance?', a: 'Optional support/retainer to keep things healthy post-launch.' },
              { q: 'Which stack do you use?', a: 'Modern TypeScript/Node/Next, Python, and cloud-native tooling.' },
            ].map(({ q, a }) => (
              <GlassCard key={q}>
                <h3 className="text-lg font-semibold text-brand-600">{q}</h3>
                <p className="text-neutral-700 mt-1">{a}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard variant="section">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-600">Ready to start?</h2>
            <p className="text-neutral-700 mt-2">Book a free consultation and get a clear, actionable plan.</p>
            <a href="/contact" className="inline-block mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">Book a Consultation</a>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
