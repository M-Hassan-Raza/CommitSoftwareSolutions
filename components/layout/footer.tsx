import Link from "next/link"
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Commit</span>
              <span className="text-primary font-bold text-xl">Software</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Delivering innovative software solutions and digital services to help businesses thrive in the modern
              world.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/business-automations"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Business Automations
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-devops" className="text-sm text-muted-foreground hover:text-primary">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-sm text-muted-foreground hover:text-primary">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/graphics-design" className="text-sm text-muted-foreground hover:text-primary">
                  Graphics Design
                </Link>
              </li>
              <li>
                <Link href="/services/pos-solutions" className="text-sm text-muted-foreground hover:text-primary">
                  POS Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-sm text-muted-foreground mb-2">
                Lahore
                <br />
                Punjab, 55000
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <a href="tel:+923350706014" className="hover:text-primary">
                  (92) 335-0706014
                </a>
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <a href="mailto:info@commitsoftware.com" className="hover:text-primary">
                  info@commitsoftware.com
                </a>
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/commit-software-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {currentYear} Commit Software Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

