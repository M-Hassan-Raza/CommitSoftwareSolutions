import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Cloud, Code, Palette, ShoppingCart, CheckCircle, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Transforming Ideas into <span className="text-primary">Powerful Software</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              We build innovative digital solutions that help businesses automate, scale, and succeed in the modern
              world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.03]"></div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Automations</h3>
                <p className="text-muted-foreground mb-4">
                  Streamline operations and boost productivity with smart, effortless automation solutions.
                </p>
                <Link
                  href="/services/business-automations"
                  className="group inline-flex items-center text-primary font-medium"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cloud & DevOps</h3>
                <p className="text-muted-foreground mb-4">
                  Optimize your infrastructure with scalable cloud solutions and efficient DevOps practices.
                </p>
                <Link href="/services/cloud-devops" className="group inline-flex items-center text-primary font-medium">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-muted-foreground mb-4">
                  Create powerful, responsive web applications with modern technologies and frameworks.
                </p>
                <Link
                  href="/services/web-development"
                  className="group inline-flex items-center text-primary font-medium"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Service 4 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Graphics Design</h3>
                <p className="text-muted-foreground mb-4">
                  Craft intuitive, engaging user experiences with creative and functional design solutions.
                </p>
                <Link href="/services/ui-ux-design" className="group inline-flex items-center text-primary font-medium">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Service 5 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">POS Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Enhance retail operations with custom, intelligent point-of-sale systems tailored to your business.
                </p>
                <Link
                  href="/services/pos-solutions"
                  className="group inline-flex items-center text-primary font-medium"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            {/* View All Services Card */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-primary text-primary-foreground">
              <CardContent className="p-6 flex flex-col justify-center items-center h-full">
                <h3 className="text-xl font-bold mb-4">Discover All Services</h3>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Commit Software?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Our developers and designers bring years of experience across various industries and technologies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Tailored Solutions</h3>
                    <p className="text-muted-foreground">
                      We create custom software that addresses your specific business challenges and goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Agile Methodology</h3>
                    <p className="text-muted-foreground">
                      Our iterative approach ensures flexibility, transparency, and continuous improvement.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Ongoing Support</h3>
                    <p className="text-muted-foreground">
                      We provide reliable maintenance and support to keep your solutions running smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Team collaboration"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-lg p-6 shadow-lg">
                <p className="text-primary-foreground font-bold text-xl">10+ Years</p>
                <p className="text-primary-foreground/80 text-sm">Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Commit Software transformed our business operations with their automation solutions. Their team was
                  professional, responsive, and delivered exactly what we needed."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="font-medium text-primary">JD</span>
                  </div>
                  <div>
                    <p className="font-medium">Jane Doe</p>
                    <p className="text-sm text-muted-foreground">CEO, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The web application Commit Software built for us has significantly improved our customer engagement.
                  Their attention to detail and focus on user experience was impressive."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="font-medium text-primary">MS</span>
                  </div>
                  <div>
                    <p className="font-medium">Michael Smith</p>
                    <p className="text-sm text-muted-foreground">Marketing Director, Retail Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Working with Commit Software on our cloud migration was seamless. Their expertise saved us time and
                  money while improving our system's performance and reliability."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="font-medium text-primary">AJ</span>
                  </div>
                  <div>
                    <p className="font-medium">Alex Johnson</p>
                    <p className="text-sm text-muted-foreground">CTO, FinTech Innovations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Trusted By</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((logo) => (
              <div key={logo} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <Image
                  src={`/placeholder.svg?height=60&width=120`}
                  alt={`Client logo ${logo}`}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your business?</h2>
              <p className="text-xl opacity-90 mb-6">
                Let's discuss how our software solutions can help you achieve your goals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

