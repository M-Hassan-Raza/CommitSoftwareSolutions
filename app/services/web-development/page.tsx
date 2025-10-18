import ServiceHero from "../../../components/ServiceHero";

export default function WebDevelopment() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Web Development"
        description="Create powerful, responsive web applications with modern technologies and frameworks that deliver exceptional user experiences and business results."
      />
      
      {/* Features Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-4">
              Our Web Development Services
            </h2>
            <p className="text-lg text-brand-600/90 max-w-2xl mx-auto">
              Full-stack web development solutions using cutting-edge technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-web-400 to-web-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">Frontend Development</h3>
              <p className="text-brand-600/90">
                Modern, responsive user interfaces built with React, Next.js, and Vue.js.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-web-400 to-web-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">Backend Development</h3>
              <p className="text-brand-600/90">
                Robust server-side applications with Node.js, Python, and cloud-native architectures.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-web-400 to-web-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">Mobile-First Design</h3>
              <p className="text-brand-600/90">
                Responsive designs that work perfectly across all devices and screen sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-web-900/20 to-web-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-4">
              Why Choose Our Web Development
            </h2>
            <p className="text-lg text-brand-600/90 max-w-2xl mx-auto">
              Experience the power of modern web development that drives business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-brand-600 mb-6">Build for Success</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-web-400 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-brand-600/90">Lightning-fast performance and SEO optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-web-400 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-brand-600/90">Scalable architecture for future growth</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-web-400 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-brand-600/90">Modern UI/UX design principles</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-web-400 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-brand-600/90">Comprehensive testing and quality assurance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h4 className="text-xl font-semibold text-brand-600 mb-4">Ready to Build?</h4>
              <p className="text-brand-600/90 mb-6">
                Let&apos;s create a web application that drives your business forward.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center bg-white text-neutral-900 px-6 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors duration-200"
              >
                Start Your Project
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
