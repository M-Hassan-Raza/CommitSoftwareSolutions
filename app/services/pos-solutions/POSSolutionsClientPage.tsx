"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Zap, Scale, LineChart, X } from "lucide-react"

// Placeholder for screenshots
const screenshots = [
  {
    src: "/dashboard.jpeg?height=600&width=800",
    alt: "Polaris Dashboard",
    caption: "Real-time business insights with an intuitive dashboard.",
  },
  {
    src: "/edit_product.jpeg?height=600&width=800",
    alt: "Editing a Product",
    caption: "Edit an existing product with great control",
  },
  {
    src: "/product_database.jpeg?height=600&width=800",
    alt: "Product Database",
    caption: "Manage products, units, and pricing efficiently.",
  },
  {
    src: "/low_inventory.jpeg?height=600&width=800",
    alt: "Low Inventory",
    caption: "Never run out of things with real-time inventory tracking.",
  },
  {
    src: "/generate_order.jpeg?height=600&width=800",
    alt: "Generate Order",
    caption: "Quickly create orders for your suppliers.",
  },
  {
    src: "/refunds.jpeg?height=600&width=800",
    alt: "Returns Management",
    caption: "Minimize errors with an automated returns process.",
  },
  {
    src: "/customer_record.jpeg?height=600&width=800",
    alt: "Customer Record",
    caption: "Keep detailed records of all your customers.",
  },
  {
    src: "/customer_ledger.jpeg?height=600&width=800",
    alt: "Customer Ledger",
    caption: "Track transactions and manage customer balances easily.",
  },
]

export default function POSSolutionsClientPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev + 1) % screenshots.length)
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Revolutionize Your Business with Polaris</h1>
              <p className="text-xl opacity-90 mb-8">
                The All-in-One POS System Built for Speed, Security, and Scalability
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-3 bg-primary-foreground/10 rounded-lg">
                  <p className="text-xl font-bold">Rs. 68M+</p>
                  <p className="text-sm">Transactions</p>
                </div>
                <div className="text-center p-3 bg-primary-foreground/10 rounded-lg">
                  <p className="text-xl font-bold">24/7</p>
                  <p className="text-sm">Reliability</p>
                </div>
                <div className="text-center p-3 bg-primary-foreground/10 rounded-lg">
                  <p className="text-xl font-bold">99.9%</p>
                  <p className="text-sm">Uptime</p>
                </div>
                <div className="text-center p-3 bg-primary-foreground/10 rounded-lg">
                  <p className="text-xl font-bold">100%</p>
                  <p className="text-sm">Cloud Updates</p>
                </div>
              </div>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Started →</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/POS_Hero.jpg?height=600&width=800"
                alt="Polaris Interface"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Polaris */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Polaris?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4 bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Lightning-Fast Transactions</h3>
                <p className="text-muted-foreground">
                  Process sales instantly with our optimized system. No more waiting in lines!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4 bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Scale className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Multi-User</h3>
                <p className="text-muted-foreground">Manage multiple users seamlessly. Grow without limits.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4 bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <LineChart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Insightful Analytics</h3>
                <p className="text-muted-foreground">
                  Make data-driven decisions with real-time sales and customer insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Powerful Features for Your Business</h2>

          <Tabs defaultValue="inventory" className="w-full">
            <TabsList className="grid w-full md:w-fit mx-auto grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="inventory">Inventory Management</TabsTrigger>
              <TabsTrigger value="sales">Sales & Finance</TabsTrigger>
              <TabsTrigger value="security">Security & Users</TabsTrigger>
            </TabsList>

            <TabsContent value="inventory" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Smart Inventory Management</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Real-time stock tracking across multiple locations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Automated low-stock alerts and reorder notifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Bulk import/export functionality for easy data management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Barcode scanning and generation for efficient inventory control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Product variants, categories, and custom attributes</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <Image
                    src="/inventory_tracking.jpg?height=600&width=800"
                    alt="Inventory Management"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sales" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Sales & Financial Tools</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Customizable invoicing with your branding and details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Detailed profit & loss calculations and reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Multiple payment methods including cash, card, and digital wallets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Customer credit management and payment tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Tax calculation and reporting for compliance</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <Image
                    src="/sales_tracking.jpg?height=600&width=800"
                    alt="Sales & Finance"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="security" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Advanced Security</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Role-based permissions for different staff levels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Comprehensive audit logging of all system activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>End-to-end encryption for sensitive data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Password protection for sensitive operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Regular backups and data recovery options</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <Image
                    src="/security.jpg?height=600&width=800"
                    alt="Security & Users"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Visual Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Visual Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="cursor-pointer group" onClick={() => openModal(index)}>
                <div className="relative overflow-hidden rounded-lg shadow-md aspect-[4/3]">
                  <Image
                    src={screenshot.src || "/placeholder.svg"}
                    alt={screenshot.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">View Larger</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground text-center">{screenshot.caption}</p>
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {modalOpen && (
            <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-auto">
              <div className="relative bg-background rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
                <button
                  onClick={closeModal}
                  className="absolute right-4 top-4 z-10 rounded-full bg-primary/10 p-1 text-primary hover:bg-primary/20"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="p-6 overflow-auto">
                  <div className="relative">
                    <Image
                      src={screenshots[currentImageIndex].src || "/placeholder.svg"}
                      alt={screenshots[currentImageIndex].alt}
                      width={1200}
                      height={800}
                      className="w-full h-auto rounded-md object-contain max-h-[70vh]"
                    />
                  </div>
                  <p className="mt-4 text-center text-lg">{screenshots[currentImageIndex].caption}</p>

                  <div className="flex justify-between mt-4">
                    <Button variant="outline" onClick={() => navigateImage("prev")} className="flex items-center">
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
                        className="mr-2 h-4 w-4"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                      Previous
                    </Button>

                    <Button variant="outline" onClick={() => navigateImage("next")} className="flex items-center">
                      Next
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
                        className="ml-2 h-4 w-4"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Customers Say</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-md">
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
                <p className="text-muted-foreground mb-4 italic">
                  "Polaris transformed how we manage our retail stores. Errors are down, and efficiency is up!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="font-medium text-primary">UG</span>
                  </div>
                  <div>
                    <p className="font-medium">Usman Ghany</p>
                    <p className="text-sm text-muted-foreground">Retail Store Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
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
                <p className="text-muted-foreground mb-4 italic">
                  "Managing suppliers and sales used to be a nightmare. Polaris saved us hours every week."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="font-medium text-primary">MI</span>
                  </div>
                  <div>
                    <p className="font-medium">Muhammad Inam</p>
                    <p className="text-sm text-muted-foreground">Wholesale Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Simple, Transparent Pricing</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="border-0 shadow-md relative overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="text-4xl font-bold mb-6">
                  $49<span className="text-lg font-normal text-muted-foreground">/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Single Store</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Basic Reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Email Support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Cloud Backups</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-medium">
                Popular
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-6">
                  $99<span className="text-lg font-normal text-muted-foreground">/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Multi-Store</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Advanced Analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Customer Loyalty Program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Unlimited Users</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join dozens of businesses using Polaris to streamline operations and boost sales.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Started →</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

