import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config } from "@fortawesome/fontawesome-svg-core"
import {
  faAws,
  faGoogle,
  faMicrosoft,
  faDocker,
  faGithub,
  faJenkins,
  faLinux
} from "@fortawesome/free-brands-svg-icons"
// Prevents Font Awesome from adding its CSS since we'll handle it
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

export const metadata = {
  title: "Cloud & DevOps Services",
  description:
    "Modernize your infrastructure with our cloud migration, DevOps implementation, and infrastructure automation services.",
}

export default function CloudDevOpsPage() {
  // Add this function to map technology names to Font Awesome icons
  const getTechIcon = (tech) => {
    const iconMap = {
      "AWS": faAws,
      "Azure": faMicrosoft,
      "Google Cloud": faGoogle,
      "Docker": faDocker,
      "Kubernetes": faDocker, // Using Docker as placeholder
      "Terraform": faAws, // Using AWS as placeholder
      "GitHub Actions": faGithub,
      "GitLab CI": faGithub, // Using GitHub as placeholder
      "Jenkins": faJenkins,
      "Ansible": faLinux,
      "Prometheus": faLinux // Using Linux as placeholder
    }

    return iconMap[tech] || faLinux // Default to Linux icon if not found
  }

  const getIconColor = (tech) => {
    const colorMap = {
      "AWS": "#FF9900",
      "Azure": "#0078D4",
      "Google Cloud": "#4285F4",
      "Docker": "#2496ED",
      "Kubernetes": "#326CE5",
      "Terraform": "#7B42BC",
      "GitHub Actions": "#2088FF",
      "GitLab CI": "#FC6D26",
      "Jenkins": "#D33833",
      "Ansible": "#EE0000",
      "Prometheus": "#E6522C"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud & DevOps Solutions</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Accelerate delivery, improve reliability, and scale your infrastructure with modern cloud and DevOps practices.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Discuss Your Infrastructure Needs</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/cloud.jpg?height=600&width=800"
                alt="Cloud and DevOps"
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
            <h2 className="text-3xl font-bold mb-6">Transform Your IT Infrastructure</h2>
            <p className="text-lg text-muted-foreground mb-6">
              In today's digital landscape, businesses need agile, scalable, and reliable infrastructure to remain competitive. 
              Our Cloud & DevOps services help you modernize your IT operations, from infrastructure optimization to 
              continuous delivery pipelines.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We combine cloud-native architecture with DevOps best practices to automate your infrastructure, accelerate 
              your development lifecycle, and reduce operational overhead, enabling your team to focus on delivering value 
              to your customers.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're planning a cloud migration, implementing CI/CD pipelines, or looking to optimize your cloud costs, 
              our team of certified cloud and DevOps engineers provides end-to-end solutions tailored to your specific business needs.
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
                    <path d="M3 9h.09A5.5 5.5 0 0 0 9 13.09V15a6 6 0 0 0 6 6h1.5a2.5 2.5 0 0 0 2.5-2.5v0a2.5 2.5 0 0 0-2.5-2.5H15a3 3 0 0 1-3-3v-1.09A5.5 5.5 0 0 0 6.09 6H3" />
                    <path d="M9 9v1" />
                    <path d="M6 9v1" />
                    <path d="M12 9v1" />
                    <path d="M18 9v1" />
                    <path d="M21 9v1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Cloud Migration</h3>
                <p className="text-muted-foreground mb-4">
                  Transition your applications and infrastructure to AWS, Azure, or Google Cloud with minimal disruption and maximum security.
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
                    <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
                    <line x1="2" x2="22" y1="20" y2="20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">CI/CD Implementation</h3>
                <p className="text-muted-foreground mb-4">
                  Establish automated testing and deployment pipelines that enable faster, more reliable software delivery.
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
                    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zM12 8v4" />
                    <path d="M12 6v.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Infrastructure as Code</h3>
                <p className="text-muted-foreground mb-4">
                  Manage your infrastructure with code using tools like Terraform and CloudFormation for consistent, repeatable deployments.
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
                    <rect width="8" height="8" x="2" y="2" rx="2" />
                    <rect width="8" height="8" x="14" y="2" rx="2" />
                    <rect width="8" height="8" x="2" y="14" rx="2" />
                    <rect width="8" height="8" x="14" y="14" rx="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Containerization</h3>
                <p className="text-muted-foreground mb-4">
                  Modernize applications with Docker containers and Kubernetes orchestration for improved scalability and portability.
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
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Cloud Cost Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Identify and implement cost-saving measures for your cloud infrastructure while maintaining performance and reliability.
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
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Monitoring & Logging</h3>
                <p className="text-muted-foreground mb-4">
                  Implement comprehensive monitoring, logging, and alerting solutions to ensure system health and rapid issue resolution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process/Methodology */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Cloud & DevOps Process</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Assessment</h3>
              <p className="text-muted-foreground">
                We evaluate your current infrastructure, applications, and workflows to identify opportunities for improvement.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Strategy & Design</h3>
              <p className="text-muted-foreground">
                Our team develops a comprehensive roadmap for your cloud and DevOps transformation with clear milestones and outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-muted-foreground">
                We execute the modernization plan, implementing infrastructure as code, CI/CD pipelines, and cloud-native services.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Enablement & Support</h3>
              <p className="text-muted-foreground">
                We provide knowledge transfer, documentation, and ongoing support to ensure your team can maintain and evolve your new environment.
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
              "AWS",
              "Azure",
              "Google Cloud",
              "Docker",
              "Kubernetes",
              "Terraform",
              "GitHub Actions",
              "GitLab CI",
              "Jenkins",
              "Ansible",
              "Prometheus"
            ].map((tech, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="h-24 flex items-center justify-center mb-2"> 
                    <FontAwesomeIcon
                      icon={getTechIcon(tech)}
                      style={{ color: getIconColor(tech) }}
                      className="text-7xl"
                    />
                  </div>
                  <p className="font-medium">{tech}</p>
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
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Cloud & DevOps Services?</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Accelerated Delivery</h3>
                    <p className="text-muted-foreground">
                      Reduce time-to-market with automated deployment pipelines and efficient infrastructure provisioning.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Cost Efficiency</h3>
                    <p className="text-muted-foreground">
                      Optimize cloud resources to minimize waste and ensure you're getting the most value from your infrastructure spend.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Scalability & Reliability</h3>
                    <p className="text-muted-foreground">
                      Build resilient systems that can handle growth and maintain high availability during peak demand.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Security & Compliance</h3>
                    <p className="text-muted-foreground">
                      Implement security best practices and compliance controls throughout your infrastructure and CI/CD pipelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/whycloud.jpg?height=600&width=800"
                alt="Cloud & DevOps Benefits"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Modernize Your Infrastructure?</h2>
            <p className="text-xl opacity-90 mb-8">
              Let's discuss how our Cloud & DevOps expertise can help you build more resilient, scalable, and efficient systems.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground hover:bg-primary-foreground hover:text-primary text-primary-foreground text-primary"
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