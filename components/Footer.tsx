'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-xl border-t bg-muted border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                  <div className="w-4 h-4 rounded-md bg-primary-foreground"></div>
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  <span>Commit</span>
                  <span className="text-muted-foreground">Software</span>
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Delivering innovative software solutions and digital services to help businesses thrive in the modern world.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/services/business-automations" 
                    className="transition-colors duration-200 text-sm text-muted-foreground hover:text-foreground"
                  >
                    Business Automations
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/cloud-devops" 
                    className="transition-colors duration-200 text-sm text-muted-foreground hover:text-foreground"
                  >
                    Cloud & DevOps
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/web-development" 
                    className="transition-colors duration-200 text-sm text-muted-foreground hover:text-foreground"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/graphics-design" 
                    className="transition-colors duration-200 text-sm text-muted-foreground hover:text-foreground"
                  >
                    Graphics Design
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/products/pos-solutions" 
                    className="transition-colors duration-200 text-sm text-muted-foreground hover:text-foreground"
                  >
                    Polaris POS Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/about" 
                    className="transition-colors duration-200 text-sm text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="transition-colors duration-200 text-sm text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/privacy" 
                    className="transition-colors duration-200 text-sm text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms" 
                    className="transition-colors duration-200 text-sm text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/sitemap" 
                    className="transition-colors duration-200 text-sm text-muted-foreground hover:text-foreground"
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Lahore</p>
                <p>Punjab, 55000</p>
                <p>(92) 335-0706014</p>
                <p>
                  <a 
                    href="mailto:info@commitsoftware.dev" 
                    className="transition-colors duration-200 hover:text-foreground"
                  >
                    info@commitsoftware.dev
                  </a>
                </p>
              </div>
              <div className="pt-2">
                <a 
                  href="https://linkedin.com/company/commit-software" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200 bg-muted-foreground hover:bg-foreground"
                >
                  <svg className="w-4 h-4 text-background" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              © 2025 Commit Software Solutions. All rights reserved.
            </p>
          </div>
        </div>

        {/* Glass morphism overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 opacity-10"></div>
          <div className="absolute inset-0 backdrop-blur-3xl bg-foreground opacity-5"></div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group bg-primary hover:opacity-90"
          >
            {isChatOpen ? (
              <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            )}
          </button>
          
          {/* Chat close button */}
          {isChatOpen && (
            <button
              onClick={() => setIsChatOpen(false)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 bg-destructive hover:opacity-90"
            >
              <svg className="w-3 h-3 text-destructive-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
