'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { motion, AnimatePresence } from 'framer-motion'
import { useScroll } from '@/composables/use-scroll'
import { cn } from '@/lib/utils/cn'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const { isScrolled } = useScroll()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    { name: 'Custom Software', href: '/services/custom-software-development' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'AI & Automation', href: '/services/ai-automation' },
    { name: 'System Architecture', href: '/services/system-architecture' },
  ]

  const products = [
    { name: 'Polaris ERP', href: '/products/polaris' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
        isScrolled
          ? 'h-12 backdrop-blur-2xl backdrop-saturate-200 bg-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] border-b border-white/20'
          : 'h-16 bg-transparent'
      )}
    >
      
      <nav className="relative mx-auto max-w-7xl px-6 lg:px-8 h-full">
        <div className={cn(
          "flex items-center justify-between transition-all duration-500 ease-out",
          isScrolled ? "h-12" : "h-16"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className={cn(
              "font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent transition-all duration-500 ease-out",
              isScrolled ? "text-xl" : "text-2xl"
            )}>
              Commit
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <NavigationMenu.Root className="relative">
              <NavigationMenu.List className="flex space-x-1">
                {/* Services Dropdown */}
                <NavigationMenu.Item>
                <NavigationMenu.Trigger className={cn(
                  "group flex items-center px-3 py-2 font-medium transition-all duration-500 ease-out",
                  isScrolled 
                    ? "text-xs text-white/90 hover:text-white data-[state=open]:text-blue-300" 
                    : "text-sm text-neutral-700 hover:text-neutral-900 data-[state=open]:text-blue-600"
                )}>
                  Services
                  <ChevronDown className={cn(
                    "ml-1 transition-all duration-500 ease-out group-data-[state=open]:rotate-180",
                    isScrolled ? "h-2.5 w-2.5" : "h-3 w-3"
                  )} />
                </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute top-full left-0 mt-2 w-[300px] rounded-lg bg-white shadow-lg border border-neutral-200 p-4">
                    <ul className="space-y-1">
                      {services.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-blue-600 rounded-md transition-colors"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                {/* Products Dropdown */}
                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className={cn(
                    "group flex items-center px-3 py-2 font-medium transition-all duration-500 ease-out",
                    isScrolled 
                      ? "text-xs text-white/90 hover:text-white data-[state=open]:text-blue-300" 
                      : "text-sm text-neutral-700 hover:text-neutral-900 data-[state=open]:text-blue-600"
                  )}>
                    Products
                    <ChevronDown className={cn(
                      "ml-1 transition-all duration-500 ease-out group-data-[state=open]:rotate-180",
                      isScrolled ? "h-2.5 w-2.5" : "h-3 w-3"
                    )} />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute top-full left-0 mt-2 w-[200px] rounded-lg bg-white shadow-lg border border-neutral-200 p-4">
                    <ul className="space-y-1">
                      {products.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-blue-600 rounded-md transition-colors"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                {/* Direct Links */}
                <NavigationMenu.Item>
                  <Link
                    href="/portfolio"
                    className={cn(
                      "px-3 py-2 font-medium transition-all duration-500 ease-out",
                      isScrolled 
                        ? "text-xs text-white/90 hover:text-white" 
                        : "text-sm text-neutral-700 hover:text-neutral-900"
                    )}
                  >
                    Portfolio
                  </Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <Link
                    href="/about"
                    className={cn(
                      "px-3 py-2 font-medium transition-all duration-500 ease-out",
                      isScrolled 
                        ? "text-xs text-white/90 hover:text-white" 
                        : "text-sm text-neutral-700 hover:text-neutral-900"
                    )}
                  >
                    About
                  </Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <Link
                    href="/blog"
                    className={cn(
                      "px-3 py-2 font-medium transition-all duration-500 ease-out",
                      isScrolled 
                        ? "text-xs text-white/90 hover:text-white" 
                        : "text-sm text-neutral-700 hover:text-neutral-900"
                    )}
                  >
                    Blog
                  </Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>

            <Button 
              size="sm" 
              asChild
              className={cn(
                "transition-all duration-500 ease-out",
                isScrolled 
                  ? "bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm px-2 py-1 text-xs" 
                  : ""
              )}
            >
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={cn(
              "lg:hidden p-2 transition-all duration-500 ease-out",
              isScrolled 
                ? "text-white/90 hover:text-white" 
                : "text-neutral-700 hover:text-neutral-900"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={cn("transition-all duration-500 ease-out", isScrolled ? "h-5 w-5" : "h-6 w-6")} />
            ) : (
              <Menu className={cn("transition-all duration-500 ease-out", isScrolled ? "h-5 w-5" : "h-6 w-6")} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/10 backdrop-blur-2xl border-t border-white/20 relative"
          >
            <div className="px-6 py-4 space-y-4">
              <div>
                <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                  Services
                </p>
                <ul className="space-y-2">
                  {services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block text-sm text-white/90 hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                  Products
                </p>
                <ul className="space-y-2">
                  {products.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block text-sm text-white/90 hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <Link
                  href="/portfolio"
                  className="block text-sm text-white/90 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="/about"
                  className="block text-sm text-white/90 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="block text-sm text-white/90 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>

              <Button 
                className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm" 
                asChild
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Free Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}