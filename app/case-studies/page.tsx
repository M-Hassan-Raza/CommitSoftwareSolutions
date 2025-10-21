import ServiceHero from "../../components/ServiceHero";
import GlassCard from "../../components/GlassCard";

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Case Studies"
        description="Real-world examples of how our AI-powered solutions have transformed businesses and delivered measurable results."
      />

      {/* Filter Section */}
      <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity duration-200">
              All Case Studies
            </button>
            <button className="px-6 py-2 bg-white/20 text-brand-600 rounded-full font-medium hover:bg-white/30 transition-colors duration-200">
              AI/ML Solutions
            </button>
            <button className="px-6 py-2 bg-white/20 text-brand-600 rounded-full font-medium hover:bg-white/30 transition-colors duration-200">
              ERP & POS
            </button>
            <button className="px-6 py-2 bg-white/20 text-brand-600 rounded-full font-medium hover:bg-white/30 transition-colors duration-200">
              Business Automation
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Polaris ERP Case Study */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <p className="text-sm font-medium">ERP Implementation</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    AI-Powered ERP
                  </span>
                  <span className="text-sm text-brand-600/70">2024</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-600 mb-2">
                  Polaris ERP: From Zero to 6.8M PKR Monthly
                </h3>
                <p className="text-brand-600/90 mb-4">
                  How we built and deployed a complete ERP solution with AI
                  integration, processing millions in transactions with
                  real-time fraud detection and natural language queries.
                </p>
                <div className="space-y-2 text-sm text-brand-600/80 mb-4">
                  <p>
                    <strong>Challenge:</strong> Complex business processes,
                    fraud detection, real-time analytics
                  </p>
                  <p>
                    <strong>Solution:</strong> AI-powered ERP with LangChain
                    integration
                  </p>
                  <p>
                    <strong>Result:</strong> 6.8M PKR monthly transaction volume
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200">
                    Read Full Case Study
                  </button>
                  <button className="px-4 py-2 border border-brand-200 text-brand-600 rounded-lg text-sm font-medium hover:bg-brand-50 transition-colors duration-200">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* AI Automation Case Study */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-automation-400 to-automation-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  <p className="text-sm font-medium">AI Automation</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-automation-100 text-automation-600 rounded-full text-sm font-medium">
                    Agentic Workflows
                  </span>
                  <span className="text-sm text-brand-600/70">2024</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-600 mb-2">
                  Bonnet.ai: Intelligent Business Automation
                </h3>
                <p className="text-brand-600/90 mb-4">
                  Building advanced AI automation using LangChain and LangGraph
                  to create agentic workflows that handle complex business
                  processes with minimal human intervention.
                </p>
                <div className="space-y-2 text-sm text-brand-600/80 mb-4">
                  <p>
                    <strong>Challenge:</strong> Complex business workflows
                    requiring intelligence
                  </p>
                  <p>
                    <strong>Solution:</strong> Agentic AI workflows with RAG
                    systems
                  </p>
                  <p>
                    <strong>Result:</strong> Automated complex decision-making
                    processes
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200">
                    Read Full Case Study
                  </button>
                  <button className="px-4 py-2 border border-brand-200 text-brand-600 rounded-lg text-sm font-medium hover:bg-brand-50 transition-colors duration-200">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Coming Soon Case Study */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-cloud-400 to-cloud-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <p className="text-sm font-medium">Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-cloud-100 text-cloud-600 rounded-full text-sm font-medium">
                    In Development
                  </span>
                  <span className="text-sm text-brand-600/70">2024</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-600 mb-2">
                  Advanced RAG Implementation
                </h3>
                <p className="text-brand-600/90 mb-4">
                  We&apos;re working on our next breakthrough case study featuring
                  advanced RAG systems and multi-modal AI integration. More
                  details coming soon as we push the boundaries of AI-powered
                  business solutions.
                </p>
                <div className="space-y-2 text-sm text-brand-600/80 mb-4">
                  <p>
                    <strong>Focus:</strong> Multi-modal AI and advanced RAG
                  </p>
                  <p>
                    <strong>Technology:</strong> Latest AI frameworks
                  </p>
                  <p>
                    <strong>Status:</strong> In active development
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                    Coming Soon
                  </button>
                  <button className="px-4 py-2 border border-brand-200 text-brand-600 rounded-lg text-sm font-medium hover:bg-brand-50 transition-colors duration-200">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5v-5a7.5 7.5 0 0115 0v5z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Request Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-900/20 to-brand-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard variant="section" className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-4">
              Don&apos;t See Your Use Case?
            </h2>
            <p className="text-lg text-brand-600/90 mb-6">
              We&apos;re always working on new projects and case studies. If you have
              a specific challenge or want to see how our AI solutions can work
              for your business, let&apos;s discuss it.
            </p>
          </GlassCard>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg hover:shadow-xl"
            >
              Discuss Your Project
              <svg
                className="ml-2 w-5 h-5"
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
            <a
              href="/portfolio"
              className="inline-flex items-center bg-white/20 text-brand-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-colors duration-200 border border-brand-200"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
