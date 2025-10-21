import ServiceHero from "../../components/ServiceHero";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Our Portfolio"
        description="Explore our successful projects and see how we've helped businesses transform their operations with innovative software solutions."
      />

      {/* Filter Section */}
      <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity duration-200">
              All Projects
            </button>
            <button className="px-6 py-2 bg-white/20 text-brand-600 rounded-full font-medium hover:bg-white/30 transition-colors duration-200">
              Web Development
            </button>
            <button className="px-6 py-2 bg-white/20 text-brand-600 rounded-full font-medium hover:bg-white/30 transition-colors duration-200">
              Business Automation
            </button>
            <button className="px-6 py-2 bg-white/20 text-brand-600 rounded-full font-medium hover:bg-white/30 transition-colors duration-200">
              Cloud Solutions
            </button>
            <button className="px-6 py-2 bg-white/20 text-brand-600 rounded-full font-medium hover:bg-white/30 transition-colors duration-200">
              POS Systems
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Polaris ERP Project */}
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
                  <p className="text-sm font-medium">ERP & POS System</p>
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
                  Polaris ERP
                </h3>
                <p className="text-brand-600/90 mb-4">
                  Complete ERP and POS solution with LangChain integration for
                  natural language queries. Processes millions in transactions
                  with AI-powered insights and fraud detection.
                </p>
                <div className="space-y-2 text-sm text-brand-600/80">
                  <p>
                    <strong>Client:</strong> Rai Inam & Others
                  </p>
                  <p>
                    <strong>Volume:</strong> 6.8M PKR/month
                  </p>
                  <p>
                    <strong>Features:</strong> AI queries, fraud detection,
                    real-time analytics
                  </p>
                </div>
              </div>
            </div>

            {/* Bonnet.ai Project */}
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
                  <p className="text-sm font-medium">AI Platform</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-automation-100 text-automation-600 rounded-full text-sm font-medium">
                    AI/ML Solution
                  </span>
                  <span className="text-sm text-brand-600/70">2024</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-600 mb-2">
                  Bonnet.ai
                </h3>
                <p className="text-brand-600/90 mb-4">
                  Advanced AI platform leveraging LangChain and LangGraph for
                  intelligent automation. Built with agentic workflows and RAG
                  systems for complex business intelligence.
                </p>
                <div className="space-y-2 text-sm text-brand-600/80">
                  <p>
                    <strong>Technology:</strong> LangChain, LangGraph, RAG
                  </p>
                  <p>
                    <strong>Type:</strong> AI Automation Platform
                  </p>
                  <p>
                    <strong>Features:</strong> Agentic workflows, intelligent
                    automation
                  </p>
                </div>
              </div>
            </div>

            {/* Future Project Placeholder */}
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
                  Next AI Project
                </h3>
                <p className="text-brand-600/90 mb-4">
                  Working on the next breakthrough in AI-powered business
                  automation. More details coming soon as we push the boundaries
                  of what&apos;s possible.
                </p>
                <div className="space-y-2 text-sm text-brand-600/80">
                  <p>
                    <strong>Status:</strong> In Development
                  </p>
                  <p>
                    <strong>Focus:</strong> Advanced AI Workflows
                  </p>
                  <p>
                    <strong>Tech:</strong> Cutting-edge AI frameworks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-900/20 to-brand-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-brand-600/90 mb-8">
            Let&apos;s create something amazing together. Get in touch to
            discuss your project requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Project
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
        </div>
      </section>
    </div>
  );
}
