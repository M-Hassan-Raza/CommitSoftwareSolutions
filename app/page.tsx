"use client";

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Cloud, Code, Palette, ShoppingCart, CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion" // You'll need to install framer-motion

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Transforming Ideas into{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-primary"
              >
                Powerful Software
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              We build innovative digital solutions that help businesses automate, scale, and succeed in the modern
              world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="backdrop-blur-sm">
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.03]"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        ></motion.div>
      </section>

      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Comprehensive software solutions tailored to meet your business needs
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <Zap className="h-6 w-6 text-primary" />, title: "Business Automations", description: "Streamline operations and boost productivity with smart, effortless automation solutions.", link: "/services/business-automations" },
          { icon: <Cloud className="h-6 w-6 text-primary" />, title: "Cloud & DevOps", description: "Optimize your infrastructure with scalable cloud solutions and efficient DevOps practices.", link: "/services/cloud-devops" },
          { icon: <Code className="h-6 w-6 text-primary" />, title: "Web Development", description: "Create powerful, responsive web applications with modern technologies and frameworks.", link: "/services/web-development" },
          { icon: <Palette className="h-6 w-6 text-primary" />, title: "Graphics Design", description: "Craft intuitive, engaging user experiences with creative and functional design solutions.", link: "/services/graphics-design" },
          { icon: <ShoppingCart className="h-6 w-6 text-primary" />, title: "POS Solutions", description: "Enhance retail operations with custom, intelligent point-of-sale systems tailored to your business.", link: "/services/pos-solutions" },
          { type: "cta", title: "Discover All Services", link: "/services" }
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              ease: "easeOut"
            }}
          >
            {service.type === "cta" ? (
              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground h-full">
                <CardContent className="p-6 flex flex-col justify-center items-center h-full">
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <Button variant="secondary" size="lg" asChild className="transition-transform hover:scale-105">
                    <Link href={service.link}>View All Services</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 group h-full hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className="group inline-flex items-center text-primary font-medium"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </Link>
                </CardContent>
              </Card>
            )}
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Commit Software?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Expert Team", description: "Our developers and designers bring years of experience across various industries and technologies." },
                  { title: "Tailored Solutions", description: "We create custom software that addresses your specific business challenges and goals." },
                  { title: "Agile Methodology", description: "Our iterative approach ensures flexibility, transparency, and continuous improvement." },
                  { title: "Ongoing Support", description: "We provide reliable maintenance and support to keep your solutions running smoothly." }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    className="flex gap-4"
                  >
                    <div className="bg-primary/10 rounded-full p-1 h-min flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src="/whyus.webp?height=600&width=800"
                  alt="Team collaboration"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-primary to-primary/80 rounded-lg p-6 shadow-lg"
              >
                <p className="text-primary-foreground font-bold text-xl">10+ Years</p>
                <p className="text-primary-foreground/80 text-sm">Industry Experience</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/50 relative overflow-hidden">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="relative px-4">
            <div className="overflow-hidden">
              <div className="flex space-x-6 testimonial-slider">
                {[
                  {
                    content: "Polaris transformed how we manage our retail stores. Errors are down, and efficiency is up! The inventory management system has been a game-changer for tracking stock across multiple locations in real-time.",
                    author: "Usman Ghany",
                    position: "Retail Store Owner, Hassan Traders",
                    initials: "UG"
                  },
                  {
                    content: "Managing suppliers and sales used to be a nightmare. Polaris saved us hours every week. The supplier management module has streamlined our ordering process, and the reporting features give us insights we never had before.",
                    author: "Muhammad Inam",
                    position: "Wholesale Manager, Hassan Traders",
                    initials: "MI"
                  },
                  {
                    content: "The financial reporting capabilities of Commit Software's POS system have made my job significantly easier. Month-end reconciliation that used to take days now takes hours. I can't be any more satisfied.",
                    author: "Hassan Mahmood",
                    position: "Finance Manager, Citywide Pharmacy",
                    initials: "HM"
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex-none w-full md:w-1/2 lg:w-1/3"
                  >
                    <Card className="border-0 shadow-md h-full hover:shadow-lg transition-all duration-300">
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
                        <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                            <span className="font-medium text-primary">{testimonial.initials}</span>
                          </div>
                          <div>
                            <p className="font-medium">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              <button
                className="w-3 h-3 rounded-full bg-primary"
                aria-label="View testimonial page 1"
                aria-current="true"
              ></button>
              <button
                className="w-3 h-3 rounded-full bg-primary/30"
                aria-label="View testimonial page 2"
              ></button>
              <button
                className="w-3 h-3 rounded-full bg-primary/30"
                aria-label="View testimonial page 3"
              ></button>
            </div>
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Client Logos
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
      </section> */}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-blue-600 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your business?</h2>
              <p className="text-xl opacity-90 mb-6">
                Let's discuss how our software solutions can help you achieve your goals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Button size="lg" variant="secondary" asChild className="shadow-lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground backdrop-blur-sm hover:bg-primary-foreground text-primary-foreground hover:text-primary shadow-lg text-primary"
                  asChild
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

