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
            {/* Project 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-web-400 to-web-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <p className="text-sm font-medium">E-Commerce Platform</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-web-100 text-web-600 rounded-full text-sm font-medium">Web Development</span>
                  <span className="text-sm text-brand-600/70">2024</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-600 mb-2">Modern E-Commerce Solution</h3>
                <p className="text-brand-600/90 mb-4">
                  Built a scalable e-commerce platform with advanced features including real-time inventory management, payment processing, and analytics dashboard.
                </p>
                <div className="space-y-2 text-sm text-brand-600/80">
                  <p><strong>Client:</strong> RetailTech Inc.</p>
                  <p><strong>Duration:</strong> 4 months</p>
                  <p><strong>Result:</strong> 300% increase in online sales</p>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-automation-400 to-automation-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <p className="text-sm font-medium">Workflow Automation</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-automation-100 text-automation-600 rounded-full text-sm font-medium">Business Automation</span>
                  <span className="text-sm text-brand-600/70">2024</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-600 mb-2">HR Process Automation</h3>
                <p className="text-brand-600/90 mb-4">
                  Automated HR workflows including employee onboarding, leave management, and performance reviews, reducing manual work by 80%.
                </p>
                <div className="space-y-2 text-sm text-brand-600/80">
                  <p><strong>Client:</strong> GlobalCorp</p>
                  <p><strong>Duration:</strong> 3 months</p>
                  <p><strong>Result:</strong> 80% reduction in manual tasks</p>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-cloud-400 to-cloud-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  <p className="text-sm font-medium">Cloud Migration</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-cloud-100 text-cloud-600 rounded-full text-sm font-medium">Cloud & DevOps</span>
                  <span className="text-sm text-brand-600/70">2024</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-600 mb-2">AWS Cloud Migration</h3>
                <p className="text-brand-600/90 mb-4">
                  Migrated legacy infrastructure to AWS with zero downtime, implementing auto-scaling and monitoring solutions.
                </p>
                <div className="space-y-2 text-sm text-brand-600/80">
                  <p><strong>Client:</strong> FinanceFlow</p>
                  <p><strong>Duration:</strong> 6 months</p>
                  <p><strong>Result:</strong> 60% cost reduction</p>
                </div>
              </div>
            </div>
            
            {/* Project 4 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-pos-400 to-pos-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <p className="text-sm font-medium">POS System</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-pos-100 text-pos-600 rounded-full text-sm font-medium">POS Solutions</span>
                  <span className="text-sm text-brand-600/70">2023</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-600 mb-2">Restaurant POS System</h3>
                <p className="text-brand-600/90 mb-4">
                  Custom POS solution for restaurant chain with inventory management, staff scheduling, and real-time analytics.
                </p>
                <div className="space-y-2 text-sm text-brand-600/80">
                  <p><strong>Client:</strong> FoodChain Group</p>
                  <p><strong>Duration:</strong> 5 months</p>
                  <p><strong>Result:</strong> 25% increase in efficiency</p>
                </div>
              </div>
            </div>
            
            {/* Project 5 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-design-400 to-design-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                  <p className="text-sm font-medium">Brand Identity</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-design-100 text-design-600 rounded-full text-sm font-medium">Graphics Design</span>
                  <span className="text-sm text-brand-600/70">2023</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-600 mb-2">Complete Brand Redesign</h3>
                <p className="text-brand-600/90 mb-4">
                  Complete visual identity overhaul including logo design, brand guidelines, and marketing materials for tech startup.
                </p>
                <div className="space-y-2 text-sm text-brand-600/80">
                  <p><strong>Client:</strong> TechStart Inc.</p>
                  <p><strong>Duration:</strong> 2 months</p>
                  <p><strong>Result:</strong> 150% increase in brand recognition</p>
                </div>
              </div>
            </div>
            
            {/* Project 6 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-web-400 to-web-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-sm font-medium">Analytics Dashboard</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-web-100 text-web-600 rounded-full text-sm font-medium">Web Development</span>
                  <span className="text-sm text-brand-600/70">2023</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-600 mb-2">Real-time Analytics Platform</h3>
                <p className="text-brand-600/90 mb-4">
                  Built comprehensive analytics dashboard with real-time data visualization and custom reporting features.
                </p>
                <div className="space-y-2 text-sm text-brand-600/80">
                  <p><strong>Client:</strong> DataCorp</p>
                  <p><strong>Duration:</strong> 4 months</p>
                  <p><strong>Result:</strong> 90% faster decision making</p>
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
            Let&apos;s create something amazing together. Get in touch to discuss your project requirements.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Project
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
