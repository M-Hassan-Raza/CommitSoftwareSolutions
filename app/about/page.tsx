import ServiceHero from "../../components/ServiceHero";
import GlassCard from "../../components/GlassCard";

export default function About() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="About Commit Software"
        description="We're passionate about transforming businesses through innovative software solutions that drive growth, efficiency, and success."
      />

      {/* Mission & Vision Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <GlassCard variant="section">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-brand-600/90 mb-6">
                To empower businesses with cutting-edge software solutions that
                solve real-world problems and drive measurable growth. We
                believe technology should be an enabler, not a barrier.
              </p>
              <h3 className="text-2xl font-bold text-brand-600 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-brand-600/90">
                To be the trusted technology partner that businesses turn to
                when they need reliable, scalable, and innovative software
                solutions that deliver exceptional value.
              </p>
            </GlassCard>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h4 className="text-xl font-semibold text-brand-600 mb-4">
                Why Choose Us?
              </h4>
              <ul className="space-y-3">
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
                  <span className="text-brand-600/90">
                    Proven track record of successful projects
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
                  <span className="text-brand-600/90">
                    Modern technology stack and best practices
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
                  <span className="text-brand-600/90">
                    Dedicated support and maintenance
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
                  <span className="text-brand-600/90">
                    Transparent communication throughout projects
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-900/20 to-brand-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <GlassCard variant="section" className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-brand-600/90 max-w-2xl mx-auto">
                The principles that guide everything we do and shape our
                approach to software development
              </p>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-brand-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">
                Quality First
              </h3>
              <p className="text-brand-600/90">
                We never compromise on code quality, testing, or user
                experience. Every line of code is written with excellence in
                mind.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-brand-600"
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
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">
                Innovation
              </h3>
              <p className="text-brand-600/90">
                We stay ahead of technology trends and continuously explore new
                ways to solve problems more effectively.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-brand-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">
                Collaboration
              </h3>
              <p className="text-brand-600/90">
                We work closely with our clients as partners, ensuring their
                vision becomes reality through open communication.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-brand-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">
                Timely Delivery
              </h3>
              <p className="text-brand-600/90">
                We understand the importance of deadlines and deliver projects
                on time without compromising quality.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-brand-600"
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
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">
                Data-Driven
              </h3>
              <p className="text-brand-600/90">
                Our decisions are backed by data and analytics, ensuring
                measurable results and continuous improvement.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-brand-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-3">
                Client Success
              </h3>
              <p className="text-brand-600/90">
                Your success is our success. We measure our achievements by the
                value we create for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <GlassCard variant="section" className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-4">
                Built by One, Powered by Many
              </h2>
              <p className="text-lg text-brand-600/90 max-w-2xl mx-auto">
                While I work solo, I collaborate closely with real users to
                build solutions that actually work. Every feature is validated
                through constant customer feedback and iteration.
              </p>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary-foreground"
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
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-2">
                AI/ML Expertise
              </h3>
              <p className="text-brand-600/90 mb-4">
                LangChain, LangGraph, RAG Systems
              </p>
              <p className="text-sm text-brand-600/80">
                Hands-on experience with cutting-edge AI frameworks, building
                agentic workflows that traditional programming cannot achieve.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary-foreground"
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
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-2">
                Cloud Platforms
              </h3>
              <p className="text-brand-600/90 mb-4">
                GCP, AWS Health Lake, Keepa
              </p>
              <p className="text-sm text-brand-600/80">
                Deep experience with cloud infrastructure, data lakes, and
                modern deployment strategies across multiple platforms.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/20 hover:border-brand-300/30 hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-600 mb-2">
                Customer-Driven
              </h3>
              <p className="text-brand-600/90 mb-4">Real User Feedback</p>
              <p className="text-sm text-brand-600/80">
                Every feature is built through constant collaboration with
                actual users, handling real-world edge cases and quirks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer-Driven Development Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <GlassCard variant="section" className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-4">
                Built Through Real User Collaboration
              </h2>
              <p className="text-lg text-brand-600/90 max-w-2xl mx-auto">
                Polaris ERP wasn&apos;t built in isolation. Every feature was
                developed through constant collaboration with actual users,
                handling real-world edge cases and business quirks that only
                emerge in production.
              </p>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-brand-600 mb-6">
                Real-World Edge Cases We Handle
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
                    Partial refunds and complex payment scenarios
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
                    Spot payments and credit ledger systems
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
                    Multi-location inventory management
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
                    Complex reporting and analytics requirements
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h4 className="text-xl font-semibold text-brand-600 mb-4">
                The Result?
              </h4>
              <p className="text-neutral-700 mb-6">
                A product that actually works in the real world, not just in
                demos. Polaris handles the messy, complex scenarios that
                traditional ERPs struggle with.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-neutral-700">
                    6.8M PKR monthly transaction volume
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-neutral-700">
                    Improved productivity and traceability
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-neutral-700">
                    Better refunds management and fraud detection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-900/20 to-brand-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard variant="section" className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-600 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-brand-600/90 mb-8">
              Let&apos;s discuss how we can help transform your business with
              innovative software solutions.
            </p>
          </GlassCard>
          <a
            href="/contact"
            className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg hover:shadow-xl"
          >
            Get In Touch
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
