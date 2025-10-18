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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'h-16 backdrop-blur-xl bg-white/80 border-b border-brand-200/20'
          : 'h-20 backdrop-blur-sm bg-white/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-accent-500 rounded-xl flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-md"></div>
            </div>
            <span className="text-brand-600 font-bold text-xl">Commit Software</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-brand-600 hover:text-brand-500 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="text-brand-600 hover:text-brand-500 transition-colors duration-200 font-medium"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-brand-600 hover:text-brand-500 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-brand-600 hover:text-brand-500 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-brand-600 hover:text-brand-500 transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Liquid glass effect overlay */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 via-accent-500/10 to-brand-500/10 animate-pulse"></div>
        <div className="absolute inset-0 backdrop-blur-3xl bg-white/5"></div>
      </div>
    </nav>
  );
}
