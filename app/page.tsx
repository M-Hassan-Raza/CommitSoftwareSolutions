import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  const services = [
    {
      title: "Business Automations",
      description: "Streamline operations and boost productivity with smart, effortless automation solutions.",
      href: "/services/business-automations",
      imageUrl: "/assets/demo/business-automation.webp"
    },
    {
      title: "Cloud & DevOps",
      description: "Optimize your infrastructure with scalable cloud solutions and efficient DevOps practices.",
      href: "/services/cloud-devops",
      imageUrl: "/assets/demo/cloud-devops.webp"
    },
    {
      title: "Web Development",
      description: "Create powerful, responsive web applications with modern technologies and frameworks.",
      href: "/services/web-development",
      imageUrl: "/assets/demo/web-development.webp"
    },
    {
      title: "Graphics Design",
      description: "Craft intuitive, engaging user experiences with creative and functional design solutions.",
      href: "/services/graphics-design",
      imageUrl: "/assets/demo/graphics-design.webp"
    },
    {
      title: "POS Solutions",
      description: "Enhance retail operations with custom, intelligent point-of-sale systems tailored to your business.",
      href: "/services/pos-solutions",
      imageUrl: "/assets/demo/pos-solutions.webp"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive software solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                href={service.href}
                imageUrl={service.imageUrl}
                mode="lens"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
