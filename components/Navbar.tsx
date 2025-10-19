'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? 'h-20 flex items-center justify-center px-4'
          : 'h-20 backdrop-blur-sm bg-background/60'
      }`}
    >
      {isScrolled ? (
        // Floating pill navbar
        <div className="relative">
          {/* Glassmorphism pill container */}
          <div className="relative bg-card/20 backdrop-blur-2xl border border-border/30 rounded-full px-8 py-4 shadow-2xl">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full animate-pulse"></div>
            
            {/* Content */}
            <div className="relative flex items-center space-x-8">
              {/* Logo - smaller in pill */}
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary-foreground rounded-sm"></div>
                </div>
                <span className="text-foreground font-bold text-lg">Commit Software</span>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-6">
                <Link
                  href="/"
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium px-3 py-1 rounded-full hover:bg-card/20"
                >
                  Home
                </Link>
                <Link
                  href="/#services"
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium px-3 py-1 rounded-full hover:bg-card/20"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium px-3 py-1 rounded-full hover:bg-card/20"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium px-3 py-1 rounded-full hover:bg-card/20"
                >
                  Contact
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-foreground hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-card/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Floating glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-xl opacity-60 animate-pulse"></div>
          </div>
        </div>
      ) : (
        // Full-width navbar
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-foreground rounded-md"></div>
              </div>
              <span className="text-foreground font-bold text-xl">Commit Software</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-foreground hover:text-primary transition-colors duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
