import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config } from "@fortawesome/fontawesome-svg-core"
import pslogo from "@/public/photoshop.png"
import ailogo from "@/public/illustrator.png"
import idlogo from "@/public/indesign.png"
import xdlogo from "@/public/xd.png"
import aelogo from "@/public/aftereffects.png"
import lrlogo from "@/public/lightroom.png"
import {
     faFigma,
     faSketch,
     faInvision,
     faDribbble,
     faBehance
} from "@fortawesome/free-brands-svg-icons"
// Prevents Font Awesome from adding its CSS since we'll handle it
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

export const metadata = {
     title: "Graphic Design Services",
     description:
          "Professional graphic design services including branding, print design, digital assets, and visual identity creation.",
}

const DesignToolIcon = ({ tech }) => {
     // Map Adobe products to imported PNG files
     const adobeIcons = {
          "Adobe Photoshop": pslogo,
          "Adobe Illustrator": ailogo,
          "Adobe InDesign": idlogo,
          "Adobe XD": xdlogo,
          "Adobe After Effects": aelogo,
          "Adobe Lightroom": lrlogo
     }

     // For Adobe products, use PNG images
     if (tech.includes("Adobe")) {
          const icon = adobeIcons[tech]
          return icon ? (
               <Image
                    src={icon}
                    alt={tech}
                    width={80}
                    height={80}
                    className="object-contain"
               />
          ) : null
     }

     // For non-Adobe products, use FontAwesome
     const faIcons = {
          "Figma": faFigma,
          "Sketch": faSketch,
          "InVision": faInvision,
          "Dribbble": faDribbble,
          "Behance": faBehance,
     }

     const getIconColor = (tech) => {
          const colorMap = {
               "Adobe Photoshop": "#31A8FF",
               "Adobe Illustrator": "#FF9A00",
               "Adobe InDesign": "#FF3366",
               "Adobe XD": "#FF61F6",
               "Adobe After Effects": "#9999FF",
               "Figma": "#F24E1E",
               "Sketch": "#F7B500",
               "InVision": "#FF3366",
               "Dribbble": "#EA4C89",
               "Behance": "#1769FF",
          }

          return colorMap[tech] || "#000000"
     }

     return (
          <FontAwesomeIcon
               icon={faIcons[tech] || faBehance}
               style={{ color: getIconColor(tech) }}
               className="text-7xl"
          />
     )
}

export default function GraphicDesignPage() {
     return (
          <>
               {/* Hero Section */}
               <section className="py-16 md:py-24 bg-muted/50">
                    <div className="container">
                         <div className="grid md:grid-cols-2 gap-12 items-center">
                              <div>
                                   <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Graphic Design</h1>
                                   <p className="text-xl text-muted-foreground mb-6">
                                        Elevate your brand with visually stunning designs that capture attention and communicate your message effectively.
                                   </p>
                                   <Button size="lg" asChild>
                                        <Link href="/contact">Start Your Design Project</Link>
                                   </Button>
                              </div>
                              <div className="relative">
                                   <Image
                                        src="/placeholder.svg?height=600&width=800"
                                        alt="Graphic Design"
                                        width={800}
                                        height={600}
                                        className="rounded-lg shadow-lg"
                                   />
                              </div>
                         </div>
                    </div>
               </section>

               {/* Detailed Description */}
               <section className="py-16 md:py-24">
                    <div className="container">
                         <div className="max-w-3xl mx-auto">
                              <h2 className="text-3xl font-bold mb-6">Design That Makes an Impact</h2>
                              <p className="text-lg text-muted-foreground mb-6">
                                   In today's visually-driven world, compelling design is essential for standing out and creating meaningful connections
                                   with your audience. Our graphic design services help you establish a strong visual identity that resonates with your
                                   target market and strengthens your brand recognition.
                              </p>
                              <p className="text-lg text-muted-foreground mb-6">
                                   From logo design and brand identity to marketing materials and digital assets, our team of experienced designers
                                   combines creativity with strategic thinking to deliver designs that not only look impressive but also support your
                                   business objectives.
                              </p>
                              <p className="text-lg text-muted-foreground">
                                   We take the time to understand your brand values, target audience, and industry to create custom designs that
                                   reflect your unique identity and effectively communicate your message across all touchpoints.
                              </p>
                         </div>
                    </div>
               </section>

               {/* Key Features/Benefits */}
               <section className="py-16 md:py-24 bg-muted/50">
                    <div className="container">
                         <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>

                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                              <Card className="border-0 shadow-md">
                                   <CardContent className="p-6">
                                        <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
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
                                                  className="h-6 w-6 text-primary"
                                             >
                                                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                                  <path d="M2 17l10 5 10-5" />
                                                  <path d="M2 12l10 5 10-5" />
                                             </svg>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Brand Identity Design</h3>
                                        <p className="text-muted-foreground mb-4">
                                             Create a cohesive visual identity with logo design, color palettes, typography, and brand guidelines that capture your essence.
                                        </p>
                                   </CardContent>
                              </Card>

                              <Card className="border-0 shadow-md">
                                   <CardContent className="p-6">
                                        <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
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
                                                  className="h-6 w-6 text-primary"
                                             >
                                                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                                  <circle cx="9" cy="9" r="2" />
                                                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                                             </svg>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Print Design</h3>
                                        <p className="text-muted-foreground mb-4">
                                             Professional design for business cards, brochures, flyers, packaging, and other printed materials that make a lasting impression.
                                        </p>
                                   </CardContent>
                              </Card>

                              <Card className="border-0 shadow-md">
                                   <CardContent className="p-6">
                                        <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
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
                                                  className="h-6 w-6 text-primary"
                                             >
                                                  <rect width="18" height="18" x="3" y="3" rx="2" />
                                                  <path d="M3 9h18" />
                                                  <path d="M9 21V9" />
                                             </svg>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                                        <p className="text-muted-foreground mb-4">
                                             Create intuitive, engaging user interfaces for websites, mobile apps, and digital products that enhance user experience.
                                        </p>
                                   </CardContent>
                              </Card>

                              <Card className="border-0 shadow-md">
                                   <CardContent className="p-6">
                                        <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
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
                                                  className="h-6 w-6 text-primary"
                                             >
                                                  <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
                                                  <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
                                             </svg>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Illustration</h3>
                                        <p className="text-muted-foreground mb-4">
                                             Custom illustrations, infographics, and visual elements that simplify complex concepts and add personality to your brand.
                                        </p>
                                   </CardContent>
                              </Card>

                              <Card className="border-0 shadow-md">
                                   <CardContent className="p-6">
                                        <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
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
                                                  className="h-6 w-6 text-primary"
                                             >
                                                  <circle cx="8" cy="8" r="2" />
                                                  <path d="M10.4 10.4 20 20" />
                                                  <path d="M8 12h8" />
                                                  <path d="M12 16V8" />
                                                  <rect width="20" height="20" x="2" y="2" rx="5" />
                                             </svg>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Social Media Graphics</h3>
                                        <p className="text-muted-foreground mb-4">
                                             Eye-catching graphics for social platforms that increase engagement and maintain brand consistency across channels.
                                        </p>
                                   </CardContent>
                              </Card>

                              <Card className="border-0 shadow-md">
                                   <CardContent className="p-6">
                                        <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
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
                                                  className="h-6 w-6 text-primary"
                                             >
                                                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                                                  <path d="M19 17v.5a2.5 2.5 0 0 1-5 0v-3a2.5 2.5 0 0 1 5 0V17Z" />
                                             </svg>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Motion Graphics</h3>
                                        <p className="text-muted-foreground mb-4">
                                             Animated logos, explainer videos, and dynamic content that bring your brand to life and increase audience engagement.
                                        </p>
                                   </CardContent>
                              </Card>
                         </div>
                    </div>
               </section>

               {/* Process/Methodology */}
               <section className="py-16 md:py-24">
                    <div className="container">
                         <h2 className="text-3xl font-bold mb-12 text-center">Our Design Process</h2>

                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                              <div className="text-center">
                                   <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-primary text-2xl font-bold">1</span>
                                   </div>
                                   <h3 className="text-xl font-bold mb-2">Discovery</h3>
                                   <p className="text-muted-foreground">
                                        We learn about your brand, goals, target audience, and competitors to establish a solid foundation for the design.
                                   </p>
                              </div>

                              <div className="text-center">
                                   <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-primary text-2xl font-bold">2</span>
                                   </div>
                                   <h3 className="text-xl font-bold mb-2">Concept Development</h3>
                                   <p className="text-muted-foreground">
                                        Our designers create initial concepts and explore different directions to best represent your brand visually.
                                   </p>
                              </div>

                              <div className="text-center">
                                   <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-primary text-2xl font-bold">3</span>
                                   </div>
                                   <h3 className="text-xl font-bold mb-2">Design Refinement</h3>
                                   <p className="text-muted-foreground">
                                        Based on your feedback, we refine and iterate on the chosen concepts until they perfectly align with your vision.
                                   </p>
                              </div>

                              <div className="text-center">
                                   <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-primary text-2xl font-bold">4</span>
                                   </div>
                                   <h3 className="text-xl font-bold mb-2">Finalization & Delivery</h3>
                                   <p className="text-muted-foreground">
                                        We prepare and deliver the final design assets in all necessary formats for your immediate use.
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Technology Stack */}
               <section className="py-16 md:py-24 bg-muted/50">
                    <div className="container">
                         <h2 className="text-3xl font-bold mb-12 text-center">Design Tools We Use</h2>

                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                              {[
                                   "Adobe Photoshop",
                                   "Adobe Illustrator",
                                   "Adobe InDesign",
                                   "Adobe XD",
                                   "Adobe After Effects",
                                   "Adobe Lightroom",
                                   "Figma",
                                   "Sketch",
                                   "InVision",
                                   "Dribbble",
                                   "Behance",
                              ].map((tech, index) => (
                                   <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                                        <CardContent className="p-4 text-center">
                                             <div className="h-24 flex items-center justify-center mb-2">
                                                  <DesignToolIcon tech={tech} />
                                             </div>
                                             <p className="font-medium">{tech}</p>
                                        </CardContent>
                                   </Card>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Benefits */}
               <section className="py-16 md:py-24">
                    <div className="container">
                         <div className="grid md:grid-cols-2 gap-12 items-center">
                              <div>
                                   <h2 className="text-3xl font-bold mb-6">Why Choose Our Design Services?</h2>

                                   <div className="space-y-6">
                                        <div className="flex gap-4">
                                             <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                                             <div>
                                                  <h3 className="text-xl font-medium mb-2">Strategic Approach</h3>
                                                  <p className="text-muted-foreground">
                                                       Our designs are not just aesthetically pleasing but strategically crafted to meet your business objectives.
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="flex gap-4">
                                             <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                                             <div>
                                                  <h3 className="text-xl font-medium mb-2">Brand Consistency</h3>
                                                  <p className="text-muted-foreground">
                                                       We ensure your visual identity remains consistent across all platforms and touchpoints to strengthen brand recognition.
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="flex gap-4">
                                             <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                                             <div>
                                                  <h3 className="text-xl font-medium mb-2">Expert Designers</h3>
                                                  <p className="text-muted-foreground">
                                                       Our team consists of experienced designers with diverse expertise across various design disciplines and industries.
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="flex gap-4">
                                             <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                                             <div>
                                                  <h3 className="text-xl font-medium mb-2">Collaborative Process</h3>
                                                  <p className="text-muted-foreground">
                                                       We value your input throughout the design process, ensuring the final product aligns perfectly with your vision.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="relative">
                                   <Image
                                        src="/placeholder.svg?height=600&width=800"
                                        alt="Graphic Design Benefits"
                                        width={800}
                                        height={600}
                                        className="rounded-lg shadow-lg"
                                   />
                              </div>
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-16 md:py-24 bg-primary text-primary-foreground">
                    <div className="container">
                         <div className="max-w-3xl mx-auto text-center">
                              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Brand Visually?</h2>
                              <p className="text-xl opacity-90 mb-8">
                                   Let's discuss how our graphic design services can help strengthen your brand identity and communicate your message effectively.
                              </p>
                              <div className="flex flex-col sm:flex-row justify-center gap-4">
                                   <Button size="lg" variant="secondary" asChild>
                                        <Link href="/contact">Start Your Project</Link>
                                   </Button>
                                   <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-primary-foreground hover:bg-primary-foreground hover:text-primary text-primary-foreground"
                                        asChild
                                   >
                                        <Link href="/services">Explore Other Services</Link>
                                   </Button>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}