import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Cloud, Code, Palette, ShoppingCart, ArrowRight, CheckCircle } from "lucide-react"

// Service icons mapping
const serviceIcons = {
     "business-automations": <Zap className="h-12 w-12 text-primary" />,
     "cloud-devops": <Cloud className="h-12 w-12 text-primary" />,
     "web-development": <Code className="h-12 w-12 text-primary" />,
     "ui-ux-design": <Palette className="h-12 w-12 text-primary" />,
     "pos-solutions": <ShoppingCart className="h-12 w-12 text-primary" />,
}

export default function ServicesPage() {
     const services = [
          {
               id: "business-automations",
               title: "Business Automations",
               description: "Streamline operations and boost productivity with smart, effortless automation solutions.",
               bullets: [
                    "Workflow automation",
                    "Business process optimization",
                    "Data integration",
                    "Custom software solutions"
               ],
               image: "/placeholder.svg?height=400&width=600"
          },
          {
               id: "cloud-devops",
               title: "Cloud & DevOps",
               description: "Optimize your infrastructure with scalable cloud solutions and efficient DevOps practices.",
               bullets: [
                    "Cloud migration & strategy",
                    "Infrastructure optimization",
                    "CI/CD pipelines",
                    "Scalable architecture design"
               ],
               image: "/placeholder.svg?height=400&width=600"
          },
          {
               id: "web-development",
               title: "Web Development",
               description: "Create powerful, responsive web applications with modern technologies and frameworks.",
               bullets: [
                    "Custom web applications",
                    "E-commerce solutions",
                    "CMS development",
                    "Progressive web apps"
               ],
               image: "/placeholder.svg?height=400&width=600"
          },
          {
               id: "ui-ux-design",
               title: "Graphics Design",
               description: "Craft intuitive, engaging user experiences with creative and functional design solutions.",
               bullets: [
                    "User interface design",
                    "User experience optimization",
                    "Wireframing & prototyping",
                    "Design systems"
               ],
               image: "/placeholder.svg?height=400&width=600"
          },
          {
               id: "pos-solutions",
               title: "POS Solutions",
               description: "Enhance retail operations with custom, intelligent point-of-sale systems tailored to your business.",
               bullets: [
                    "Custom POS development",
                    "Inventory management",
                    "Payment processing integration",
                    "Reporting & analytics"
               ],
               image: "/placeholder.svg?height=400&width=600"
          },
     ]

     return (
          <>
               {/* Hero Section */}
               <section className="py-20 md:py-28 relative overflow-hidden">
                    <div className="container relative z-10">
                         <div className="max-w-3xl mx-auto text-center mb-16">
                              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                   Innovative <span className="text-primary">Software Solutions</span> for Your Business
                              </h1>
                              <p className="text-xl text-muted-foreground">
                                   Tailored digital solutions to help your organization automate, scale, and succeed in a rapidly evolving digital landscape.
                              </p>
                         </div>
                    </div>
                    <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.03]"></div>
               </section>

               {/* Services Detailed Section */}
               <section className="py-16 md:py-24">
                    <div className="container">
                         <div className="grid gap-20 md:gap-24">
                              {services.map((service, index) => (
                                   <div key={service.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                        <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                                             <div className="mb-6 bg-primary/10 p-4 rounded-full w-fit">
                                                  {serviceIcons[service.id]}
                                             </div>
                                             <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                                             <p className="text-lg text-muted-foreground mb-6">
                                                  {service.description}
                                             </p>

                                             <ul className="space-y-3 mb-8">
                                                  {service.bullets.map((bullet, i) => (
                                                       <li key={i} className="flex items-start">
                                                            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                                            <span>{bullet}</span>
                                                       </li>
                                                  ))}
                                             </ul>

                                             <Button size="lg" asChild>
                                                  <Link href={`/services/${service.id}`}>
                                                       Learn More
                                                       <ArrowRight className="ml-2 h-5 w-5" />
                                                  </Link>
                                             </Button>
                                        </div>

                                        <div className={`relative rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                             <Image
                                                  src={service.image}
                                                  alt={service.title}
                                                  width={600}
                                                  height={400}
                                                  className="w-full h-auto object-cover"
                                             />
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Why Choose Section */}
               <section className="py-16 md:py-24 bg-muted/50">
                    <div className="container">
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services</h2>
                              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                   We deliver more than just software – we provide solutions that drive real business value
                              </p>
                         </div>

                         <div className="grid md:grid-cols-3 gap-8">
                              <Card className="border-0 shadow-md">
                                   <CardContent className="p-6">
                                        <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                                                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                             </svg>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
                                        <p className="text-muted-foreground">
                                             We build solutions with security at their core, ensuring your data and operations stay protected.
                                        </p>
                                   </CardContent>
                              </Card>

                              <Card className="border-0 shadow-md">
                                   <CardContent className="p-6">
                                        <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                                                  <circle cx="12" cy="12" r="10"></circle>
                                                  <line x1="2" y1="12" x2="22" y2="12"></line>
                                                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                             </svg>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Globally Accessible</h3>
                                        <p className="text-muted-foreground">
                                             Cloud-based solutions that allow your team and customers to access what they need from anywhere.
                                        </p>
                                   </CardContent>
                              </Card>

                              <Card className="border-0 shadow-md">
                                   <CardContent className="p-6">
                                        <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                                                  <line x1="12" y1="2" x2="12" y2="6"></line>
                                                  <line x1="12" y1="18" x2="12" y2="22"></line>
                                                  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                                                  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                                                  <line x1="2" y1="12" x2="6" y2="12"></line>
                                                  <line x1="18" y1="12" x2="22" y2="12"></line>
                                                  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                                                  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                                             </svg>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Future-Ready</h3>
                                        <p className="text-muted-foreground">
                                             We build with scalability in mind, so your solutions can grow and adapt as your business evolves.
                                        </p>
                                   </CardContent>
                              </Card>
                         </div>
                    </div>
               </section>

               {/* Client Success Stories Preview */}
               <section className="py-16 md:py-24">
                    <div className="container">
                         <div className="text-center mb-12">
                              <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
                              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                   See how our services have helped businesses like yours achieve their goals
                              </p>
                         </div>

                         <div className="grid md:grid-cols-2 gap-8">
                              <Card className="border-0 shadow-md">
                                   <CardContent className="p-6">
                                        <div className="flex items-center mb-4">
                                             <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                                  <span className="font-medium text-primary">RT</span>
                                             </div>
                                             <div>
                                                  <p className="font-medium">Retail Tech Inc.</p>
                                                  <p className="text-sm text-muted-foreground">POS Solutions</p>
                                             </div>
                                        </div>
                                        <blockquote className="text-muted-foreground italic mb-4">
                                             "The POS system developed by Commit Software increased our transaction speed by 40% and provided invaluable insights through its analytics dashboard."
                                        </blockquote>
                                        <Button variant="outline" size="sm" asChild>
                                             <Link href="/testimonials">Read Case Study</Link>
                                        </Button>
                                   </CardContent>
                              </Card>

                              <Card className="border-0 shadow-md">
                                   <CardContent className="p-6">
                                        <div className="flex items-center mb-4">
                                             <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                                  <span className="font-medium text-primary">FS</span>
                                             </div>
                                             <div>
                                                  <p className="font-medium">FinServe Solutions</p>
                                                  <p className="text-sm text-muted-foreground">Business Automation</p>
                                             </div>
                                        </div>
                                        <blockquote className="text-muted-foreground italic mb-4">
                                             "Automating our loan approval process reduced processing time from days to minutes while maintaining compliance with all regulatory requirements."
                                        </blockquote>
                                        <Button variant="outline" size="sm" asChild>
                                             <Link href="/testimonials">Read Case Study</Link>
                                        </Button>
                                   </CardContent>
                              </Card>
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-16 md:py-24 bg-primary text-primary-foreground">
                    <div className="container">
                         <div className="max-w-3xl mx-auto text-center">
                              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Your Solution Together</h2>
                              <p className="text-xl opacity-90 mb-8">
                                   Ready to discuss how our services can address your specific business challenges?
                              </p>
                              <div className="flex flex-col sm:flex-row justify-center gap-4">
                                   <Button size="lg" variant="secondary" asChild>
                                        <Link href="/contact">Get in Touch</Link>
                                   </Button>
                                   <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                                        asChild
                                   >
                                        <Link href="/testimonials">View Success Stories</Link>
                                   </Button>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}