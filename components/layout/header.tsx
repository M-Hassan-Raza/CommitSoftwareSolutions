"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import logo from '@/public/logo-simplified.png'
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "#",
    dropdown: true,
    items: [
      {
        name: "Business Automations",
        href: "/services/business-automations",
        description: "Streamline your workflows with custom business automation solutions"
      },
      {
        name: "Cloud & DevOps",
        href: "/services/cloud-devops",
        description: "Accelerate development with modern cloud infrastructure"
      },
      {
        name: "Web Development",
        href: "/services/web-development",
        description: "Create powerful web applications and websites"
      },
      {
        name: "Graphics Design",
        href: "/services/graphics-design",
        description: "Professional design services for your brand"
      },
      {
        name: "POS Solutions",
        href: "/services/pos-solutions",
        description: "Custom point-of-sale systems for your business"
      },
    ],
  },
  { name: "Testimonials", href: "/testimonials" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [pathname])

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center justify-start">
          <Link href="/" className="flex items-center -mr-4">
            <div className="relative h-12 w-12">
              <Image
                src={logo}
                alt="Commit Software Solutions Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center h-12 -ml-4"> {/* Ensure vertical alignment is good */}
              <span className="font-bold text-sm text-primary leading-tight">Commit</span>
              <span className="font-bold text-sm text-primary leading-tight -mt-0.5">Software</span>
              <span className="font-bold text-sm text-primary leading-tight -mt-0.5">Solutions</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={cn(
                      "flex items-center text-sm font-medium transition-colors hover:text-primary",
                      pathname.startsWith(`/${item.name.toLowerCase()}`) ? "text-primary" : "text-foreground",
                    )}
                    aria-expanded={activeDropdown === item.name}
                    aria-label={`${item.name} menu - click to expand options`}
                  >
                    {item.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 h-4 w-4"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  {/* Add an invisible bridge element to maintain hover state */}
                  <div className="absolute h-2 w-full left-0 top-full" />
                  <div
                    className={cn(
                      "absolute left-0 top-[calc(100%+0.5rem)] w-48 rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5 transition-all",
                      isMobile ? (activeDropdown === item.name ? "block" : "hidden") : "hidden group-hover:block",
                    )}
                  >
                    <div className="py-1">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={cn(
                            "block px-4 py-2 text-sm hover:bg-muted",
                            pathname === subItem.href ? "text-primary font-medium" : "text-foreground",
                          )}
                          title={`Learn about our ${subItem.name} services`}
                        >
                          <span className="font-medium">{subItem.name}</span>
                          {subItem.description && (
                            <span className="block text-xs text-muted-foreground mt-0.5">
                              {subItem.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary" : "text-foreground",
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild>
            <Link
              href="/contact"
              title="Request a free quote for your project"
            >
              Get a Quote
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex w-full items-center justify-between rounded-md py-2 text-base font-medium text-foreground hover:bg-muted hover:text-primary"
                    >
                      {item.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={cn("h-4 w-4 transition-transform", activeDropdown === item.name ? "rotate-180" : "")}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={cn(
                              "block rounded-md py-2 pl-3 pr-4 text-base font-medium hover:bg-muted",
                              pathname === subItem.href ? "text-primary" : "text-foreground",
                            )}
                            title={`Learn about our ${subItem.name} services`}
                          >
                            <span>{subItem.name}</span>
                            {subItem.description && (
                              <span className="block text-xs text-muted-foreground mt-0.5">
                                {subItem.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-md py-2 text-base font-medium hover:bg-muted hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

