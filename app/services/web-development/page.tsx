import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config } from "@fortawesome/fontawesome-svg-core"
import {
  faReact,
  faVuejs,
  faNodeJs,
  faPython,
  faJs,
  faGithub,
  faAws,
  faDigitalOcean,
  faDocker
} from "@fortawesome/free-brands-svg-icons"
// Prevents Font Awesome from adding its CSS since we'll handle it
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

export const metadata = {
  title: "Web Development Services",
  description:
    "Modern web development services including frontend, backend, and full-stack solutions for businesses of all sizes.",
}

export default function WebDevelopmentPage() {
  // Add this function to map technology names to Font Awesome icons
  const getTechIcon = (tech) => {
    const iconMap = {
      "React": faReact,
      "Next.js": faReact, // Next.js uses React icon since there's no specific one
      "Vue": faVuejs,
      "Node.js": faNodeJs,
      "Django": faPython,
      "Express": faJs,
      "MongoDB": faGithub, // Using GitHub as placeholder (no MongoDB icon)
      "PostgreSQL": faGithub, // Using GitHub as placeholder
      "DigitalOcean": faDigitalOcean,
      "AWS": faAws,
      "Docker": faDocker
    }

    return iconMap[tech] || faGithub // Default to GitHub icon if not found
  }

  const getIconColor = (tech) => {
    const colorMap = {
      "React": "#61DAFB",
      "Next.js": "#000000",
      "Vue": "#4FC08D",
      "Node.js": "#339933",
      "Django": "#092E20",
      "Express": "#000000",
      "MongoDB": "#47A248",
      "PostgreSQL": "#336791",
      "DigitalOcean": "#0080FF",
      "AWS": "#FF9900",
      "Docker": "#2496ED"
    }

    return colorMap[tech] || "#000000"
  }
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Modern Web Development</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Create powerful, responsive web applications with cutting-edge technologies and frameworks.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/webdev.jpeg?height=600&width=800"
                alt="Web Development"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Building the Digital Experiences of Tomorrow</h2>
            <p className="text-lg text-muted-foreground mb-6">
              In today's digital-first world, your web presence is often the first interaction customers have with your
              brand. Our web development services focus on creating fast, secure, and user-friendly applications that
              drive engagement and conversions.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Whether you need a simple marketing website, a complex web application, or an e-commerce platform, our
              team of experienced developers can bring your vision to life using the latest technologies and best
              practices.
            </p>
            <p className="text-lg text-muted-foreground">
              We take a holistic approach to web development, considering not just the code but also user experience,
              accessibility, performance, and search engine optimization to ensure your web project achieves its
              business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features/Benefits */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
                <p className="text-muted-foreground mb-4">
                  Responsive, interactive user interfaces built with modern frameworks like React, Vue, and Angular.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                    <path d="m8 16 4-4 4 4" />
                    <path d="M16 16v6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Backend Development</h3>
                <p className="text-muted-foreground mb-4">
                  Robust server-side applications using Node.js, Python, PHP, and other modern technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Full-Stack Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  End-to-end web applications with seamless integration between frontend and backend components.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                    <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                    <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                    <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                    <rect width="10" height="10" x="7" y="7" rx="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">E-Commerce Development</h3>
                <p className="text-muted-foreground mb-4">
                  Custom online stores and marketplaces built with platforms like Shopify, WooCommerce, or bespoke
                  solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 2v8" />
                    <path d="m4.93 10.93 1.41 1.41" />
                    <path d="M2 18h2" />
                    <path d="M20 18h2" />
                    <path d="m19.07 10.93-1.41 1.41" />
                    <path d="M22 22H2" />
                    <path d="m16 6-4 4-4-4" />
                    <path d="M16 18a4 4 0 0 0-8 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Progressive Web Apps</h3>
                <p className="text-muted-foreground mb-4">
                  Fast, reliable, and engaging web applications that work offline and provide a native app-like
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" />
                    <line x1="16" x2="2" y1="8" y2="22" />
                    <line x1="17.5" x2="9" y1="15" y2="15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Website Redesign</h3>
                <p className="text-muted-foreground mb-4">
                  Transform your existing website with modern design, improved functionality, and enhanced performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process/Methodology */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Development Process</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-muted-foreground">
                We start by understanding your business goals, target audience, and project requirements to create a
                solid foundation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Planning & Design</h3>
              <p className="text-muted-foreground">
                Our team creates wireframes, prototypes, and technical specifications to visualize the solution before
                development begins.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-muted-foreground">
                Using agile methodologies, we build your web application with regular demos and feedback sessions to
                ensure alignment.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Testing & Launch</h3>
              <p className="text-muted-foreground">
                Rigorous quality assurance testing ensures your web application is bug-free, secure, and ready for
                successful deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              "React",
              "Next.js",
              "Vue",
              "Node.js",
              "Django",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "DigitalOcean",
              "AWS",
              "Docker"
            ].map((tech, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="h-24 flex items-center justify-center mb-2"> {/* Keep container size */}
                    <FontAwesomeIcon
                      icon={getTechIcon(tech)}
                      style={{ color: getIconColor(tech) }}
                      className="text-7xl"
                    />
                  </div>
                  <p className="font-medium">{tech}</p> {/* Changed font-large to font-medium */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Web Development Services?</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Technical Excellence</h3>
                    <p className="text-muted-foreground">
                      Our developers stay current with the latest technologies and best practices to deliver
                      high-quality, future-proof solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Performance Optimization</h3>
                    <p className="text-muted-foreground">
                      We build fast-loading, responsive websites that provide excellent user experiences across all
                      devices.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">SEO-Friendly Development</h3>
                    <p className="text-muted-foreground">
                      Our websites are built with search engine visibility in mind, helping you attract more organic
                      traffic.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Scalable Solutions</h3>
                    <p className="text-muted-foreground">
                      We design applications that can grow with your business, accommodating increased traffic and
                      expanded functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/whywebdev.jpeg?height=600&width=800"
                alt="Web Development Benefits"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Next Web Project?</h2>
            <p className="text-xl opacity-90 mb-8">
              Let's discuss how our web development expertise can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

