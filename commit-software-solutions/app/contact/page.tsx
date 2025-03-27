import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Commit Software Solutions',
  description: 'Get in touch with us to discuss your project requirements, schedule a consultation, or learn more about our services.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="hero-section mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-xl mb-8">Let's discuss how we can bring your software vision to life.</p>
        <Link href="https://cal.com/muhammad-hassan-raza/30min" className="cta-button">
          Schedule a Free Consultation
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
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
            <button
              type="submit"
              className="cta-button"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:raihassanraza10@gmail.com" className="text-blue-600 hover:underline">
                raihassanraza10@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Schedule a Call</h3>
              <a href="https://cal.com/muhammad-hassan-raza/30min" className="text-blue-600 hover:underline">
                Book a 30-minute consultation
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Connect Online</h3>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/hassanraza22" className="text-blue-600 hover:underline">
                  LinkedIn
                </a>
                <a href="https://mhassan.dev" className="text-blue-600 hover:underline">
                  Portfolio
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">How I Can Help</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Custom software development for your business</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>ChronoPOS implementation and customization</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>E-commerce platform development</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Business automation solutions</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Technical consultation for your project</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">What is your typical project timeline?</h3>
            <p>Project timelines vary based on complexity and requirements. Small to medium projects typically take 4-12 weeks, while larger enterprise solutions may require 3-6 months for full implementation.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">How do you handle project pricing?</h3>
            <p>Each project is unique. After our initial consultation, I'll provide a detailed proposal with transparent pricing based on project scope, complexity, and timeline requirements.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Do you offer ongoing support after project completion?</h3>
            <p>Yes, I offer maintenance and support packages to ensure your software continues to run smoothly. We can discuss support options during our consultation.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">What technologies do you specialize in?</h3>
            <p>I specialize in full-stack development with Vue.js, Django, Next.js, and PostgreSQL. For point-of-sale solutions, I've developed ChronoPOS using modern cloud-based technologies.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8">Let's discuss your requirements and build something amazing together</p>
        <Link href="https://cal.com/muhammad-hassan-raza/30min" className="cta-button">
          Schedule Your Free Consultation
        </Link>
      </div>
    </div>
  );
}