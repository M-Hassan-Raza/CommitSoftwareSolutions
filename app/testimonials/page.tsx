import ServiceHero from "../../components/ServiceHero";

export default function Testimonials() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Client Testimonials"
        description="Hear from our satisfied clients about their experience working with us and the results we&apos;ve delivered for their businesses."
      />
      
      {/* Featured Testimonials */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-brand-600/90 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from the businesses we&apos;ve helped transform
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Featured Testimonial 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-primary-foreground">JD</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-600">John Davis</h3>
                  <p className="text-brand-600/70">CEO, RetailTech Inc.</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg text-brand-600/90 italic mb-4">
                &quot;Commit Software transformed our entire e-commerce platform. The new system increased our online sales by 300% and reduced cart abandonment by 60%. Their team&apos;s expertise and attention to detail exceeded our expectations.&quot;
              </blockquote>
              <div className="text-sm text-brand-600/70">
                <p><strong>Project:</strong> E-Commerce Platform Development</p>
                <p><strong>Result:</strong> 300% increase in online sales</p>
              </div>
            </div>
            
            {/* Featured Testimonial 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-primary-foreground">SM</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-600">Sarah Miller</h3>
                  <p className="text-brand-600/70">CTO, GlobalCorp</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg text-brand-600/90 italic mb-4">
                &quot;The automation solution they built for our HR processes saved us countless hours every week. The team was professional, communicative, and delivered exactly what we needed on time and within budget.&quot;
              </blockquote>
              <div className="text-sm text-brand-600/70">
                <p><strong>Project:</strong> HR Process Automation</p>
                <p><strong>Result:</strong> 80% reduction in manual tasks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-900/20 to-brand-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-primary-foreground">MJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-600">Mike Johnson</h4>
                  <p className="text-sm text-brand-600/70">FinanceFlow</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-brand-600/90 text-sm">
                &quot;The cloud migration was seamless. We saved 60% on infrastructure costs while improving performance.&quot;
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-primary-foreground">AL</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-600">Anna Lee</h4>
                  <p className="text-sm text-brand-600/70">FoodChain Group</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-brand-600/90 text-sm">
                &quot;Our new POS system streamlined operations across all locations. Staff efficiency increased by 25%.&quot;
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-primary-foreground">DC</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-600">David Chen</h4>
                  <p className="text-sm text-brand-600/70">TechStart Inc.</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-brand-600/90 text-sm">
                &quot;The brand redesign gave us a professional look that increased brand recognition by 150%.&quot;
              </p>
            </div>
            
            {/* Testimonial 4 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-primary-foreground">RB</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-600">Rachel Brown</h4>
                  <p className="text-sm text-brand-600/70">DataCorp</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-brand-600/90 text-sm">
                &quot;The analytics dashboard transformed how we make decisions. We&apos;re 90% faster at identifying trends.&quot;
              </p>
            </div>
            
            {/* Testimonial 5 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-primary-foreground">TW</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-600">Tom Wilson</h4>
                  <p className="text-sm text-brand-600/70">StartupXYZ</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-brand-600/90 text-sm">
                &quot;Outstanding work! They delivered our MVP ahead of schedule and it exceeded all our expectations.&quot;
              </p>
            </div>
            
            {/* Testimonial 6 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-primary-foreground">LG</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-600">Lisa Garcia</h4>
                  <p className="text-sm text-brand-600/70">Enterprise Corp</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-brand-600/90 text-sm">
                &quot;Professional, reliable, and innovative. They&apos;ve become our go-to partner for all software needs.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-brand-600 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-brand-600/90">
              We&apos;re proud to work with businesses of all sizes across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "RetailTech Inc.",
              "GlobalCorp",
              "FinanceFlow",
              "FoodChain Group",
              "TechStart Inc.",
              "DataCorp"
            ].map((company, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-400 to-brand-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{company.split(' ')[0].charAt(0)}</span>
                </div>
                <p className="text-sm text-brand-600/70">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-900/20 to-brand-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg text-brand-600/90 mb-8">
            Let&apos;s work together to create your own success story. Get in touch to discuss your project.
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
