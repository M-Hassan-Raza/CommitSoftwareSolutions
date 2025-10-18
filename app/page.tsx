import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Additional content sections */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Welcome to React Bits
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover amazing React components and patterns that will elevate your development experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Components</h3>
              <p className="text-gray-300">
                Beautiful, reusable React components built with modern best practices.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Patterns</h3>
              <p className="text-gray-300">
                Proven patterns and techniques to solve common development challenges.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Examples</h3>
              <p className="text-gray-300">
                Real-world examples and tutorials to help you get started quickly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
