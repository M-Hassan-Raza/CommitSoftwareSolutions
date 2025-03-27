import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Calendar, Linkedin, Globe, MessageCircle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: 'Contact | Commit Software Solutions',
  description: 'Get in touch with us to discuss your project requirements, schedule a consultation, or learn more about our services.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can bring your software vision to life.
            </p>
            <Button size="lg" asChild>
              <Link href="https://cal.com/muhammad-hassan-raza/30min">
                Schedule a Free Consultation
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.03]"></div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 pt-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md"
                      placeholder="Tell us about your project or inquiry..."
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <a href="mailto:raihassanraza10@gmail.com" className="text-blue-600 hover:underline">
                      info@commitsoftware.dev
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Schedule a Call</h3>
                      <Button variant="outline" asChild>
                        <Link href="https://cal.com/muhammad-hassan-raza/30min">
                          Book a 30-minute consultation
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Connect Online</h3>
                      <div className="flex space-x-4">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="https://linkedin.com/company/commit-software-solutions">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="https://mhassan.dev">
                            <Globe className="h-4 w-4 mr-2" />
                            Portfolio
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">How We Can Help</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Custom software development for your business</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Polaris implementation and customization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>E-commerce platform development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Business automation solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Technical consultation for your project</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about working with our team
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">What is your typical project timeline?</h3>
                  <p className="text-muted-foreground">Project timelines vary based on complexity and requirements. Small to medium projects typically take 4-12 weeks, while larger enterprise solutions may require 3-6 months for full implementation.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">How do you handle project pricing?</h3>
                  <p className="text-muted-foreground">Each project is unique. After our initial consultation, we'll provide a detailed proposal with transparent pricing based on project scope, complexity, and timeline requirements.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Do you offer ongoing support after project completion?</h3>
                  <p className="text-muted-foreground">Yes, we offer maintenance and support packages to ensure your software continues to run smoothly. We can discuss support options during our consultation.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">What technologies do you specialize in?</h3>
                  <p className="text-muted-foreground">We specialize in full-stack development with Vue.js, Django, Next.js, and PostgreSQL. For point-of-sale solutions, we've developed Polaris using modern cloud-based technologies.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl opacity-90 mb-8">
              Let's discuss your requirements and build something amazing together
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                asChild
              >
                <Link href="https://cal.com/muhammad-hassan-raza/30min">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Your Free Consultation
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="#contact-form">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send Us a Message
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}