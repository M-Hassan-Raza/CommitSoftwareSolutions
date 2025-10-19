import ServiceHero from "../../../components/ServiceHero";
import GlassCard from "../../../components/GlassCard";

export default function CloudDevOps() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Cloud & DevOps"
        description="Optimize your infrastructure with scalable cloud solutions and efficient DevOps practices that ensure reliability, security, and performance."
      />
      
      {/* Features Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <GlassCard variant="section" className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-2">
                Our Cloud & DevOps Expertise
              </h2>
              <p className="text-lg text-brand-600/90 max-w-2xl mx-auto">
                Comprehensive cloud infrastructure and DevOps solutions for modern businesses
              </p>
            </GlassCard>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-cloud-400 to-cloud-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">Cloud Migration</h3>
              <p className="text-brand-600/90">
                Seamless migration to cloud platforms with zero downtime and enhanced security.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-cloud-400 to-cloud-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">CI/CD Pipeline</h3>
              <p className="text-brand-600/90">
                Automated deployment pipelines for faster, more reliable software delivery.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-cloud-400 to-cloud-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">Security & Monitoring</h3>
              <p className="text-brand-600/90">
                Comprehensive security measures and real-time monitoring for your infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-4">
              What You Get
            </h2>
            <p className="text-lg text-brand-600/90 max-w-2xl mx-auto">
              Complete cloud infrastructure with monitoring and documentation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-cloud-400 to-cloud-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">Infrastructure as Code</h3>
              <p className="text-brand-600/90">
                Complete infrastructure setup with Terraform/CloudFormation templates and version control.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-cloud-400 to-cloud-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">Monitoring Setup</h3>
              <p className="text-brand-600/90">
                Comprehensive monitoring dashboards with alerts and performance metrics.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-cloud-400 to-cloud-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">Security Hardening</h3>
              <p className="text-brand-600/90">
                Security best practices implementation with compliance documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini-Roadmap Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cloud-900/20 to-cloud-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-4">
              Your 4-8 Week Journey
            </h2>
            <p className="text-lg text-brand-600/90 max-w-2xl mx-auto">
              From assessment to production with continuous monitoring and optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-cloud-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-2">Week 1-2</h3>
              <p className="text-brand-600/90">Infrastructure assessment & planning. We analyze your current setup and design the optimal cloud architecture.</p>
            </GlassCard>
            
            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-cloud-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-2">Week 3-4</h3>
              <p className="text-brand-600/90">Migration & setup. Moving your applications to the cloud with zero downtime.</p>
            </GlassCard>
            
            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-cloud-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-2">Week 5-6</h3>
              <p className="text-brand-600/90">CI/CD & monitoring. Setting up automated deployments and comprehensive monitoring.</p>
            </GlassCard>
            
            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-cloud-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-2">Week 7-8</h3>
              <p className="text-brand-600/90">Optimization & training. Fine-tuning performance and training your team on the new infrastructure.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <GlassCard variant="section" className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-2">
                Why Choose Our Cloud & DevOps Solutions
              </h2>
              <p className="text-lg text-brand-600/90 max-w-2xl mx-auto">
                Experience the power of modern cloud infrastructure and DevOps practices
              </p>
            </GlassCard>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-brand-600 mb-6">Scale with Confidence</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-cloud-400 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-brand-600/90">99.9% uptime guarantee with robust infrastructure</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-cloud-400 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-brand-600/90">Auto-scaling based on demand and traffic</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-cloud-400 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-brand-600/90">Advanced security and compliance standards</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-cloud-400 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-brand-600/90">24/7 monitoring and instant alerting</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h4 className="text-xl font-semibold text-brand-600 mb-4">Ready to Scale?</h4>
              <p className="text-brand-600/90 mb-6">
                Let&apos;s build a robust cloud infrastructure that grows with your business.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center bg-white text-neutral-900 px-6 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                Get Free Assessment
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
