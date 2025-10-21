import Hero from "../components/Hero";
import MagicBento from "../components/MagicBento";
import GlassCard from "../components/GlassCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Polaris Metrics Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-900/20 to-brand-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <GlassCard variant="section" className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-4">
                Proven Results with Polaris ERP
              </h2>
              <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
                Our flagship ERP solution is already processing millions in
                transactions and transforming businesses.
              </p>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard className="text-center">
              <div className="text-3xl font-bold text-brand-600 mb-2">
                6.8M PKR
              </div>
              <p className="text-neutral-700">Monthly transaction volume</p>
            </GlassCard>
            <GlassCard className="text-center">
              <div className="text-3xl font-bold text-brand-600 mb-2">
                Minutes
              </div>
              <p className="text-neutral-700">Not months to deploy</p>
            </GlassCard>
            <GlassCard className="text-center">
              <div className="text-3xl font-bold text-brand-600 mb-2">
                AI-Powered
              </div>
              <p className="text-neutral-700">LangChain & LLM integration</p>
            </GlassCard>
            <GlassCard className="text-center">
              <div className="text-3xl font-bold text-brand-600 mb-2">
                Real-time
              </div>
              <p className="text-neutral-700">
                Query customers, products, orders
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <GlassCard variant="section" className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
                We ship dependable software that improves conversion, automates
                operations, and scales with your business.
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
            <h3 className="text-xl font-semibold text-brand-600 mb-2">
              Agentic Workflows
            </h3>
            <p className="text-neutral-700">
              Build intelligent automation using LangChain and LangGraph that
              adapts and learns from your business processes.
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-xl font-semibold text-brand-600 mb-2">
              RAG-Powered Intelligence
            </h3>
            <p className="text-neutral-700">
              Query your data naturally with AI. Ask questions about customers,
              products, and orders in plain language.
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-xl font-semibold text-brand-600 mb-2">
              Deploy Anywhere
            </h3>
            <p className="text-neutral-700">
              On-premise or hosted SaaS. Your choice. Deploy in minutes, not
              months, with full control over your data.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Process Overview */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <GlassCard variant="section" className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-600">
              How We Work
            </h2>
            <p className="text-neutral-700 mt-2">
              A lightweight, outcome-focused process to reduce risk and deliver
              results.
            </p>
          </GlassCard>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {["Discovery", "Design", "Build", "Launch", "Iterate"].map(
              (phase) => (
                <GlassCard key={phase}>
                  <h3 className="text-lg font-semibold text-brand-600">
                    {phase}
                  </h3>
                  <p className="text-neutral-700 mt-2">
                    Clear milestones, weekly demos, transparent progress.
                  </p>
                </GlassCard>
              )
            )}
          </div>
        </div>
      </section>

      {/* Polaris ERP Spotlight */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-900/20 to-brand-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <GlassCard variant="section" className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-4">
                Polaris ERP: Minutes, Not Months
              </h2>
              <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
                While traditional ERPs take weeks or months to deploy, Polaris
                gets you up and running in minutes. Out-of-the-box defaults work
                perfectly, with advanced configuration available when you need
                it.
              </p>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-brand-600 mb-6">
                Why Polaris is Different
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-neutral-700">
                    Deploy in minutes, not months
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-neutral-700">
                    Dark mode, light mode, and intuitive tooltips
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-neutral-700">
                    AI-powered queries with LangChain integration
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-neutral-700">
                    Out-of-box defaults work immediately
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h4 className="text-xl font-semibold text-brand-600 mb-4">
                Ready to Experience Polaris?
              </h4>
              <p className="text-neutral-700 mb-6">
                See why businesses choose Polaris for their ERP needs. Deploy in
                minutes and start processing transactions today.
              </p>
              <a
                href="/products/pos-solutions"
                className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                Explore Polaris ERP
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Showcase */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <GlassCard variant="section" className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-4">
                Built with Cutting-Edge Technology
              </h2>
              <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
                We leverage the latest AI/ML frameworks and cloud platforms to deliver solutions that traditional programming cannot achieve.
              </p>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-600 mb-2">LangChain</h3>
              <p className="text-sm text-neutral-700">Agentic workflows and LLM integration</p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-600 mb-2">LangGraph</h3>
              <p className="text-sm text-neutral-700">Complex AI workflow orchestration</p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-600 mb-2">GCP & AWS</h3>
              <p className="text-sm text-neutral-700">Cloud infrastructure and data lakes</p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-600 mb-2">RAG Systems</h3>
              <p className="text-sm text-neutral-700">Retrieval-Augmented Generation</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <GlassCard variant="section" className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-600">
              Industries
            </h2>
            <p className="text-neutral-700 mt-2">
              Cross-industry experience with a focus on measurable outcomes.
            </p>
          </GlassCard>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Retail & POS", "SaaS", "Healthcare", "Fintech"].map((item) => (
              <GlassCard key={item}>
                <p className="text-neutral-800 font-medium">{item}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard variant="section" className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-600">
              FAQ
            </h2>
          </GlassCard>
          <div className="space-y-4">
            {[
              {
                q: "What makes your AI solutions different?",
                a: "We use cutting-edge frameworks like LangChain and LangGraph to build agentic workflows that traditional programming cannot achieve. Our solutions learn and adapt.",
              },
              {
                q: "How quickly can Polaris ERP be deployed?",
                a: "Polaris deploys in minutes, not months. Out-of-the-box defaults work immediately, with advanced configuration available when needed.",
              },
              {
                q: "What AI frameworks do you specialize in?",
                a: "LangChain, LangGraph, RAG systems, AWS Health Lake, GCP, and Keepa Command Services. We focus on practical AI implementation.",
              },
              {
                q: "Can I query my data naturally with AI?",
                a: "Yes! Polaris includes LangChain integration, so you can ask questions about customers, products, and orders in plain language.",
              },
              {
                q: "Do you offer both on-premise and hosted solutions?",
                a: "Absolutely. Deploy on your hardware or use our hosted service. You maintain full control over your data either way.",
              },
              {
                q: "What about ongoing support?",
                a: "Optional support and maintenance to keep your AI-powered systems running smoothly. We also provide training on new features.",
              },
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
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-600">
              Ready to start?
            </h2>
            <p className="text-neutral-700 mt-2">
              Book a free consultation and get a clear, actionable plan.
            </p>
            <a
              href="/contact"
              className="inline-block mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              Book a Consultation
            </a>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
