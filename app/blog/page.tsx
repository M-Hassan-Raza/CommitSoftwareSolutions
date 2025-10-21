import ServiceHero from "../../components/ServiceHero";

export default function Blog() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Our Blog"
        description="Stay updated with the latest insights, trends, and best practices in software development and business automation."
      />

      {/* Search and Filter */}
      <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity duration-200">
                All Posts
              </button>
              <button className="px-6 py-2 bg-white/20 text-brand-600 rounded-full font-medium hover:bg-white/30 transition-colors duration-200">
                Industry Insights
              </button>
              <button className="px-6 py-2 bg-white/20 text-brand-600 rounded-full font-medium hover:bg-white/30 transition-colors duration-200">
                How-To Guides
              </button>
              <button className="px-6 py-2 bg-white/20 text-brand-600 rounded-full font-medium hover:bg-white/30 transition-colors duration-200">
                Case Studies
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 bg-white/20 text-brand-600 rounded-full border border-brand-200/30 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-brand-600/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
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
                  <p className="text-sm font-medium">Featured Article</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    AI/ML Deep Dive
                  </span>
                  <span className="ml-4 text-sm text-brand-600/70">
                    Dec 15, 2024
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-brand-600 mb-4">
                  Building Agentic Workflows with LangChain and LangGraph
                </h2>
                <p className="text-brand-600/90 mb-6">
                  A comprehensive guide to creating intelligent, autonomous
                  workflows using cutting-edge AI frameworks. Learn how to build
                  systems that can reason, plan, and execute complex tasks with
                  minimal human intervention.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary font-semibold hover:opacity-80 transition-opacity duration-200"
                >
                  Read More
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
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-900/20 to-brand-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-12 h-12 mx-auto mb-2"
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
                  <p className="text-sm font-medium">RAG Systems</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Technical Guide
                  </span>
                  <span className="text-sm text-brand-600/70">
                    Dec 10, 2024
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-brand-600 mb-2">
                  Implementing RAG Systems for Business Intelligence
                </h3>
                <p className="text-brand-600/90 text-sm mb-4">
                  A practical guide to building Retrieval-Augmented Generation
                  systems that can query your business data naturally using
                  LangChain and vector databases.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:opacity-80 transition-opacity duration-200"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-automation-400 to-automation-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-12 h-12 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <p className="text-sm font-medium">LangGraph</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-automation-100 text-automation-600 rounded-full text-sm font-medium">
                    Technical Guide
                  </span>
                  <span className="text-sm text-brand-600/70">Dec 5, 2024</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-600 mb-2">
                  LangGraph: Building Complex AI Workflows
                </h3>
                <p className="text-brand-600/90 text-sm mb-4">
                  Learn how to use LangGraph to create sophisticated AI
                  workflows that can handle complex decision trees and
                  multi-step processes.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:opacity-80 transition-opacity duration-200"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-cloud-400 to-cloud-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-12 h-12 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                  <p className="text-sm font-medium">GCP & AWS</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-cloud-100 text-cloud-600 rounded-full text-sm font-medium">
                    Infrastructure
                  </span>
                  <span className="text-sm text-brand-600/70">
                    Nov 28, 2024
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-brand-600 mb-2">
                  AI Infrastructure on GCP and AWS
                </h3>
                <p className="text-brand-600/90 text-sm mb-4">
                  Best practices for deploying AI workloads on cloud platforms,
                  including AWS Health Lake and GCP AI services.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:opacity-80 transition-opacity duration-200"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-automation-400 to-automation-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-12 h-12 mx-auto mb-2"
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
                  <p className="text-sm font-medium">AI Integration</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-automation-100 text-automation-600 rounded-full text-sm font-medium">
                    Case Study
                  </span>
                  <span className="text-sm text-brand-600/70">
                    Nov 20, 2024
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-brand-600 mb-2">
                  Integrating AI into Existing Business Systems
                </h3>
                <p className="text-brand-600/90 text-sm mb-4">
                  Real-world examples of how we integrated LangChain and AI
                  capabilities into existing ERP and business systems.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:opacity-80 transition-opacity duration-200"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-12 h-12 mx-auto mb-2"
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
                  <p className="text-sm font-medium">Polaris ERP</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Product Deep Dive
                  </span>
                  <span className="text-sm text-brand-600/70">
                    Nov 15, 2024
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-brand-600 mb-2">
                  Building Polaris ERP: Lessons Learned
                </h3>
                <p className="text-brand-600/90 text-sm mb-4">
                  The technical challenges and solutions we encountered while
                  building an AI-powered ERP that processes 6.8M PKR monthly.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:opacity-80 transition-opacity duration-200"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Blog Post 6 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-cloud-400 to-cloud-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-12 h-12 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <p className="text-sm font-medium">Future of AI</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-cloud-100 text-cloud-600 rounded-full text-sm font-medium">
                    Industry Insights
                  </span>
                  <span className="text-sm text-brand-600/70">
                    Nov 10, 2024
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-brand-600 mb-2">
                  The Future of Agentic AI in Business
                </h3>
                <p className="text-brand-600/90 text-sm mb-4">
                  Our predictions for how agentic AI and autonomous workflows
                  will transform business operations in 2025 and beyond.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:opacity-80 transition-opacity duration-200"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-brand-200/20">
            <h2 className="text-2xl font-bold text-brand-600 mb-4">
              Stay Updated
            </h2>
            <p className="text-brand-600/90 mb-6">
              Subscribe to our newsletter for the latest insights, tips, and
              industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-brand-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
