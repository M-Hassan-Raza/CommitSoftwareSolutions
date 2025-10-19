import ServiceHero from "../../components/ServiceHero";

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Transparent Pricing"
        description="Choose the perfect plan for your project needs. All our pricing is transparent with no hidden fees - you pay only for what you need."
      />
      
      {/* Pricing Cards */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-600 mb-2">Starter</h3>
                <p className="text-brand-600/70 mb-4">Perfect for small projects</p>
                <div className="text-4xl font-bold text-brand-600 mb-2">$5,000</div>
                <p className="text-sm text-brand-600/70">Starting from</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-600/90">Simple web application</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-600/90">Responsive design</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-600/90">Basic SEO optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-600/90">30 days support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-600/90">2-4 weeks delivery</span>
                </li>
              </ul>
              
              <a 
                href="/contact" 
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 text-center block"
              >
                Get Started
              </a>
            </div>
            
            {/* Professional Plan */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary hover:border-primary/80 hover:shadow-lg transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-600 mb-2">Professional</h3>
                <p className="text-brand-600/70 mb-4">Ideal for growing businesses</p>
                <div className="text-4xl font-bold text-brand-600 mb-2">$15,000</div>
                <p className="text-sm text-brand-600/70">Starting from</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-600/90">Full-stack web application</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-600/90">Custom UI/UX design</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-600/90">Database integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-600/90">Advanced SEO & Analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-600/90">90 days support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-600/90">6-8 weeks delivery</span>
                </li>
              </ul>
              
              <a 
                href="/contact" 
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 text-center block"
              >
                Get Started
              </a>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-600 mb-2">Enterprise</h3>
                <p className="text-brand-600/70 mb-4">For large-scale projects</p>
                <div className="text-4xl font-bold text-brand-600 mb-2">$50,000</div>
                <p className="text-sm text-brand-600/70">Starting from</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-600/90">Complex multi-platform solution</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-600/90">Custom architecture design</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-600/90">Advanced integrations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-600/90">Dedicated project manager</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-600/90">6 months support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-600/90">3-6 months delivery</span>
                </li>
              </ul>
              
              <a 
                href="/contact" 
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 text-center block"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-900/20 to-brand-950/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-brand-600/90">
              Common questions about our pricing and services
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-brand-200/20">
              <h3 className="text-lg font-semibold text-brand-600 mb-3">How do you calculate project pricing?</h3>
              <p className="text-brand-600/90">
                Our pricing is based on project complexity, scope, timeline, and specific requirements. We provide detailed quotes after understanding your needs during a free consultation.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-brand-200/20">
              <h3 className="text-lg font-semibold text-brand-600 mb-3">Do you offer payment plans?</h3>
              <p className="text-brand-600/90">
                Yes, we offer flexible payment plans for larger projects. Typically, we require 50% upfront and the remaining 50% upon project completion, with milestone payments for longer projects.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-brand-200/20">
              <h3 className="text-lg font-semibold text-brand-600 mb-3">What&apos;s included in the support period?</h3>
              <p className="text-brand-600/90">
                Support includes bug fixes, minor updates, and technical assistance. Major feature additions or redesigns are quoted separately. We also provide documentation and training materials.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-brand-200/20">
              <h3 className="text-lg font-semibold text-brand-600 mb-3">Can I get a custom quote?</h3>
              <p className="text-brand-600/90">
                Absolutely! Every project is unique. Contact us for a free consultation and we&apos;ll provide a detailed, customized quote based on your specific requirements and timeline.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-brand-200/20">
              <h3 className="text-lg font-semibold text-brand-600 mb-3">What if my needs change during development?</h3>
              <p className="text-brand-600/90">
                We understand that requirements can evolve. We&apos;ll work with you to accommodate changes, with any additional costs clearly communicated and approved before implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-brand-600/90 mb-8">
            Let&apos;s discuss your project requirements and get you a detailed quote tailored to your needs.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg hover:shadow-xl"
          >
            Get Your Custom Quote
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
