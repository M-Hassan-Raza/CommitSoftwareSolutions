import ServiceHero from "../../../components/ServiceHero";

export default function BusinessAutomations() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Business Automations"
        description="Streamline operations and boost productivity with smart, effortless automation solutions that work around the clock to optimize your business processes."
      />
      
      {/* Features Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-brand-600/90 max-w-2xl mx-auto">
              Comprehensive automation solutions tailored to your specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-business-400 to-accent-400 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">Workflow Automation</h3>
              <p className="text-brand-600/90">
                Automate repetitive tasks and complex workflows to reduce manual effort and human error.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-business-400 to-accent-400 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">Data Processing</h3>
              <p className="text-brand-600/90">
                Intelligent data processing and analysis to extract valuable insights from your business data.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-business-400 to-accent-400 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">Mobile Integration</h3>
              <p className="text-brand-600/90">
                Seamless integration with mobile devices and apps for on-the-go business management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-business-900/20 to-accent-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-4">
              Why Choose Our Automation Solutions
            </h2>
            <p className="text-lg text-brand-600/90 max-w-2xl mx-auto">
              Experience the power of intelligent automation that adapts to your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-brand-600 mb-6">Transform Your Operations</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-business-400 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-brand-600/90">Reduce operational costs by up to 60%</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-business-400 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-brand-600/90">Increase productivity and efficiency</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-business-400 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-brand-600/90">Eliminate human errors and inconsistencies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-business-400 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-brand-600/90">24/7 automated monitoring and reporting</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h4 className="text-xl font-semibold text-brand-600 mb-4">Ready to Get Started?</h4>
              <p className="text-brand-600/90 mb-6">
                Let&apos;s discuss how automation can transform your business operations and drive growth.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center bg-white text-neutral-900 px-6 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors duration-200"
              >
                Get Free Consultation
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
