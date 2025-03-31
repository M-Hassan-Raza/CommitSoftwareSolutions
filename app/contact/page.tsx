import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppChatButton } from "@/components/whatsapp-chat-button";
import { Mail, Calendar, Linkedin, Globe, MessageCircle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: 'Contact | Commit Software Solutions',
  description: 'Get in touch with us to discuss your project requirements, schedule a consultation, or learn more about our services.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="py-10 md:py-28 relative overflow-hidden">
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

      {/* Contact Info Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto mb-16">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {/* Email Card */}
                  <Card className="border shadow-sm h-full">
                    <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="bg-primary/10 p-2 sm:p-3 rounded-full mr-2 sm:mr-3 flex-shrink-0">
                          <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold truncate">Email</h3>
                      </div>
                      <p className="mb-4 text-sm sm:text-base text-muted-foreground">
                        Drop us a line anytime and we'll get back to you within 24 hours.
                      </p>
                      <div className="mt-auto">
                        <Button variant="outline" className="w-full text-xs truncate" asChild>
                          <a href="mailto:info@commitsoftware.dev">
                            info@commitsoftware.dev
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* WhatsApp Card */}
                  <Card className="border shadow-sm h-full">
                    <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="bg-green-500/10 p-2 sm:p-3 rounded-full mr-2 sm:mr-3 flex-shrink-0">
                          <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold truncate">Send a Message</h3>
                      </div>
                      <p className="mb-4 text-sm sm:text-base text-muted-foreground">
                        Chat with us on WhatsApp for immediate assistance.
                      </p>
                      <div className="mt-auto">
                        <WhatsAppChatButton
                          phoneNumber="+92-335-0706014"
                          message="Hello! I'd like to know more about your software development services."
                          showPopup={false}
                          className="w-full bg-green-500 hover:bg-green-600 text-sm sm:text-base"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Schedule Card */}
                  <Card className="border shadow-sm h-full">
                    <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="bg-primary/10 p-2 sm:p-3 rounded-full mr-2 sm:mr-3 flex-shrink-0">
                          <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold truncate">Schedule a Call</h3>
                      </div>
                      <p className="mb-4 text-sm sm:text-base text-muted-foreground">
                        Book a free consultation call to discuss your project needs.
                      </p>
                      <div className="mt-auto">
                        <Button variant="outline" className="w-full text-sm sm:text-base truncate" asChild>
                          <Link href="https://cal.com/muhammad-hassan-raza/30min">
                            Book a consultation
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Connect Online Card */}
                  <Card className="border shadow-sm h-full">
                    <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="bg-primary/10 p-2 sm:p-3 rounded-full mr-2 sm:mr-3 flex-shrink-0">
                          <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold truncate">Connect Online</h3>
                      </div>
                      <p className="mb-4 text-sm sm:text-base text-muted-foreground">
                        Follow us on social media or visit our portfolio website.
                      </p>
                      <div className="mt-auto space-y-2">
                        <Button variant="outline" className="w-full text-sm sm:text-base truncate" asChild>
                          <Link href="https://linkedin.com/company/commit-software-solutions">
                            <Linkedin className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span className="truncate">LinkedIn</span>
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full text-sm sm:text-base truncate" asChild>
                          <Link href="https://mhassan.dev">
                            <Globe className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span className="truncate">Portfolio</span>
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">How We Can Help</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Business automation solutions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Technical consultation for your project</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Ongoing support and maintenance</span>
                      </li>
                    </ul>
                  </div>
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
            <div className="grid md:grid-cols-2 gap-6">
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
          </div>
        </div>
      </section>
    </div>
  );
}