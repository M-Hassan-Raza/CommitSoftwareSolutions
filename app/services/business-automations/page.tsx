import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config } from "@fortawesome/fontawesome-svg-core"
import {
  faPython,
  faNodeJs,
  faAws,
  faMicrosoft,
  faWindows,
  faJs
} from "@fortawesome/free-brands-svg-icons"
// Prevents Font Awesome from adding its CSS since we'll handle it
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

export const metadata = {
  title: "Business Automation Services",
  description:
    "Streamline operations and boost productivity with custom business automation solutions for workflows, processes, and repetitive tasks.",
}

export default function BusinessAutomationsPage() {
  // Add this function to map technology names to Font Awesome icons
  const getTechIcon = (tech) => {
    const iconMap = {
      "Zapier": faJs,
      "Power Automate": faMicrosoft,
      "UiPath": faWindows,
      "Automation Anywhere": faJs,
      "IFTTT": faJs,
      "N8N": faNodeJs,
      "Make": faJs,
      "Python": faPython,
      "Node.js": faNodeJs,
      "AWS Lambda": faAws,
      "Azure Functions": faMicrosoft
    }

    return iconMap[tech] || faJs // Default to JS icon if not found
  }

  const getIconColor = (tech) => {
    const colorMap = {
      "Zapier": "#FF4A00",
      "Power Automate": "#0066FF",
      "UiPath": "#FA4616",
      "Automation Anywhere": "#33CCFF",
      "IFTTT": "#33CCFF",
      "N8N": "#24B466",
      "Make": "#4353FF",
      "Python": "#3776AB",
      "Node.js": "#339933",
      "AWS Lambda": "#FF9900",
      "Azure Functions": "#0078D4"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Automation Solutions</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Streamline operations, reduce manual work, and scale your business with custom automation solutions.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Discuss Your Automation Needs</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Business Automation"
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
            <h2 className="text-3xl font-bold mb-6">Transform Your Business Operations</h2>
            <p className="text-lg text-muted-foreground mb-6">
              In today's fast-paced business environment, manual processes drain resources and limit scalability. Our business 
              automation solutions help you identify and streamline repetitive tasks, workflows, and operations across your organization.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              From simple task automation to complex cross-platform workflows, we design customized solutions that reduce human error, 
              increase efficiency, and free your team to focus on high-value activities that drive business growth.
            </p>
            <p className="text-lg text-muted-foreground">
              Our approach combines strategic analysis with technical expertise to deliver automation solutions that integrate 
              seamlessly with your existing systems and adapt to your evolving business needs.
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
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Workflow Automation</h3>
                <p className="text-muted-foreground mb-4">
                  Streamline complex business processes by automating sequential tasks and approval workflows across departments.
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
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m7 10 2 2 6-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Data Processing Automation</h3>
                <p className="text-muted-foreground mb-4">
                  Automate data entry, extraction, transformation, and reporting tasks to eliminate manual handling and reduce errors.
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
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" y1="22" x2="12" y2="12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">System Integration</h3>
                <p className="text-muted-foreground mb-4">
                  Connect disparate systems and applications to create unified workflows and eliminate data silos.
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
                    <path d="M17 6.1H3" />
                    <path d="M21 12.1H3" />
                    <path d="M15.1 18H3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Document Automation</h3>
                <p className="text-muted-foreground mb-4">
                  Automate document generation, processing, and approval workflows to streamline administrative tasks.
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
                    <path d="M15 22v-5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v5" />
                    <path d="M10 15v7" />
                    <rect x="17" y="8" width="5" height="14" rx="1" />
                    <path d="M15 2v12a1 1 0 0 1-1 1h-1.5" />
                    <path d="M2 2h12a1 1 0 0 1 1 1v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Service Automation</h3>
                <p className="text-muted-foreground mb-4">
                  Deploy chatbots, automated responses, and ticket routing systems to improve customer support efficiency.
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
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">RPA Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Implement Robotic Process Automation to handle repetitive, rule-based tasks across applications and systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process/Methodology */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Automation Process</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Process Analysis</h3>
              <p className="text-muted-foreground">
                We examine your current workflows, identify bottlenecks, and determine which processes are ideal candidates for automation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Solution Design</h3>
              <p className="text-muted-foreground">
                Our team creates detailed automation blueprints with the optimal mix of technologies to meet your specific requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-muted-foreground">
                We build and integrate your automation solutions, ensuring they work seamlessly with existing systems and workflows.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Optimization & Support</h3>
              <p className="text-muted-foreground">
                We provide ongoing monitoring, refinement, and support to ensure your automation solutions continue to deliver maximum value.
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
              "Zapier",
              "Power Automate",
              "UiPath",
              "Automation Anywhere",
              "IFTTT",
              "N8N",
              "Make",
              "Python",
              "Node.js",
              "AWS Lambda",
              "Azure Functions"
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
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Automation Services?</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Cost Reduction</h3>
                    <p className="text-muted-foreground">
                      Automating manual processes reduces labor costs and minimizes errors that can lead to expensive corrections.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Increased Productivity</h3>
                    <p className="text-muted-foreground">
                      Free your team from repetitive tasks so they can focus on strategic initiatives that drive business growth.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Consistency & Quality</h3>
                    <p className="text-muted-foreground">
                      Automated processes run consistently every time, reducing variability and improving overall quality.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Scalability</h3>
                    <p className="text-muted-foreground">
                      Automation enables you to handle increased workflow volume without proportionally increasing staff or resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/whyautomation.jpeg?height=600&width=800"
                alt="Business Automation Benefits"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate Your Business Processes?</h2>
            <p className="text-xl opacity-90 mb-8">
              Let's discuss how our automation solutions can help streamline your operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground hover:bg-primary-foreground hover:text-primary text-primary-foreground"
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