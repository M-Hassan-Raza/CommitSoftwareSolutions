import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Quote, Star, ArrowRight, Building, ShoppingBag, Briefcase, Store, Coffee, Utensils } from "lucide-react"

export const metadata = {
  title: "Testimonials",
  description: "Read what our clients say about our software solutions and services.",
}

// Testimonial data
const testimonials = [
  {
    name: "Usman Ghany",
    position: "Retail Store Owner",
    company: "Fashion Emporium",
    industry: "Retail",
    image: "/placeholder.svg?height=300&width=300",
    quote:
      "Polaris transformed how we manage our retail stores. Errors are down, and efficiency is up! The inventory management system has been a game-changer for us, allowing us to track stock across multiple locations in real-time. Customer checkout times have been reduced by 40%, and our staff training time has been cut in half due to the intuitive interface.",
    rating: 5,
    featured: true,
    tags: ["retail", "inventory", "pos"],
  },
  {
    name: "Muhammad Inam",
    position: "Wholesale Manager",
    company: "Global Distributors",
    industry: "Distribution",
    image: "/placeholder.svg?height=300&width=300",
    quote:
      "Managing suppliers and sales used to be a nightmare. Polaris saved us hours every week. The supplier management module has streamlined our ordering process, and the reporting features give us insights we never had before. We've been able to optimize our inventory levels and reduce waste by 25% since implementing the system.",
    rating: 5,
    featured: true,
    tags: ["wholesale", "supply-chain", "reporting"],
  },
  {
    name: "Sarah Ahmed",
    position: "Operations Director",
    company: "Gourmet Delights",
    industry: "Restaurant",
    image: "/placeholder.svg?height=300&width=300",
    quote:
      "As a restaurant chain with multiple locations, keeping track of inventory and sales was challenging. Commit Software's POS solution has given us complete visibility across all our branches. The real-time reporting helps us make quick decisions, and the cloud-based system means I can check performance from anywhere.",
    rating: 5,
    featured: false,
    tags: ["restaurant", "multi-location", "cloud"],
  },
  {
    name: "Amir Khan",
    position: "CEO",
    company: "TechRetail Solutions",
    industry: "Technology",
    image: "/placeholder.svg?height=300&width=300",
    quote:
      "We evaluated several POS systems before choosing Commit Software. Their solution stood out for its flexibility and robust feature set. The implementation was smooth, and their support team has been exceptional. We've seen a 30% increase in operational efficiency since deployment.",
    rating: 5,
    featured: false,
    tags: ["technology", "implementation", "support"],
  },
  {
    name: "Fatima Zaidi",
    position: "Store Manager",
    company: "Elegant Boutique",
    industry: "Fashion",
    image: "/placeholder.svg?height=300&width=300",
    quote:
      "The customer loyalty program in Polaris has revolutionized our marketing efforts. We've seen repeat business increase by 35% since implementation. The system is also incredibly reliable - we haven't experienced any downtime in over a year of use.",
    rating: 4,
    featured: false,
    tags: ["fashion", "loyalty", "marketing"],
  },
  {
    name: "Hassan Mahmood",
    position: "Finance Manager",
    company: "Citywide Pharmacy",
    industry: "Healthcare",
    image: "/placeholder.svg?height=300&width=300",
    quote:
      "The financial reporting capabilities of Commit Software's POS system have made my job significantly easier. Month-end reconciliation that used to take days now takes hours. The system's accuracy has also eliminated discrepancies that were common with our previous solution.",
    rating: 5,
    featured: false,
    tags: ["healthcare", "finance", "reporting"],
  },
  {
    name: "Zainab Ali",
    position: "Owner",
    company: "Brew & Bean",
    industry: "Cafe",
    image: "/placeholder.svg?height=300&width=300",
    quote:
      "As a small cafe owner, I needed an affordable but powerful POS system. Polaris has been perfect - easy to use for my staff, with all the features I need without overwhelming complexity. The customer support has been outstanding whenever I've had questions.",
    rating: 5,
    featured: false,
    tags: ["cafe", "small-business", "support"],
  },
  {
    name: "Tariq Malik",
    position: "IT Director",
    company: "Retail Conglomerate",
    industry: "Multi-industry",
    image: "/placeholder.svg?height=300&width=300",
    quote:
      "From a technical perspective, Commit Software's solutions are well-architected and secure. The API integrations allowed us to connect with our existing systems seamlessly. Their development team was responsive to our customization needs, delivering a solution that fits our unique business processes.",
    rating: 5,
    featured: false,
    tags: ["enterprise", "integration", "customization"],
  },
]

// Industry icons mapping
const industryIcons = {
  Retail: <ShoppingBag className="h-5 w-5" />,
  Distribution: <Building className="h-5 w-5" />,
  Restaurant: <Utensils className="h-5 w-5" />,
  Technology: <Briefcase className="h-5 w-5" />,
  Fashion: <ShoppingBag className="h-5 w-5" />,
  Healthcare: <Building className="h-5 w-5" />,
  Cafe: <Coffee className="h-5 w-5" />,
  "Multi-industry": <Store className="h-5 w-5" />,
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h1>
            <p className="text-xl opacity-90 mb-8">
              Discover how businesses across industries are achieving success with our software solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Quote className="h-12 w-12 opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Testimonials</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials
              .filter((t) => t.featured)
              .map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-primary/5 p-8">
                      <div className="flex items-center mb-6">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{testimonial.name}</h3>
                          <p className="text-muted-foreground">{testimonial.position}</p>
                          <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                      <blockquote className="text-lg italic relative">
                        <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
                        <p className="pl-4">{testimonial.quote}</p>
                      </blockquote>
                      <div className="flex items-center mt-6">
                        <div className="flex items-center text-sm text-muted-foreground">
                          {industryIcons[testimonial.industry]}
                          <span className="ml-2">{testimonial.industry}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Testimonials by Industry */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Stories by Industry</h2>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-12">
              <TabsTrigger value="all">All Industries</TabsTrigger>
              <TabsTrigger value="retail">Retail</TabsTrigger>
              <TabsTrigger value="restaurant">Food & Beverage</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="retail" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials
                  .filter((t) => t.industry === "Retail" || t.industry === "Fashion")
                  .map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="restaurant" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials
                  .filter((t) => t.industry === "Restaurant" || t.industry === "Cafe")
                  .map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="healthcare" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials
                  .filter((t) => t.industry === "Healthcare")
                  .map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="technology" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials
                  .filter((t) => t.industry === "Technology")
                  .map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Video Testimonials</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted aspect-video rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-lg mb-4">Video testimonial from Usman Ghany</p>
                <p className="text-sm text-muted-foreground">Video placeholder - Add your video content here</p>
              </div>
            </div>

            <div className="bg-muted aspect-video rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-lg mb-4">Video testimonial from Muhammad Inam</p>
                <p className="text-sm text-muted-foreground">Video placeholder - Add your video content here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Detailed Case Studies</h2>
            <p className="text-lg text-muted-foreground">
              Explore in-depth success stories and learn how our solutions solved specific business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">Fashion Emporium Success Story</h3>
                  <p className="text-muted-foreground mb-4">
                    How a multi-location retail chain increased efficiency by 40% with Polaris.
                  </p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">Global Distributors Transformation</h3>
                  <p className="text-muted-foreground mb-4">
                    Streamlining wholesale operations and reducing waste by 25%.
                  </p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">Citywide Pharmacy Network</h3>
                  <p className="text-muted-foreground mb-4">
                    How a healthcare provider improved financial reporting and compliance.
                  </p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Success Stories</h2>
            <p className="text-xl opacity-90 mb-8">
              Ready to transform your business with our innovative software solutions?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Testimonial Card Component
function TestimonialCard({ testimonial }) {
  return (
    <Card className="border-0 shadow-md h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
            <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold">{testimonial.name}</h3>
            <p className="text-sm text-muted-foreground">
              {testimonial.position}, {testimonial.company}
            </p>
          </div>
        </div>

        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
          ))}
        </div>

        <blockquote className="text-muted-foreground italic flex-grow">
          <p className="line-clamp-4">{testimonial.quote}</p>
        </blockquote>

        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <div className="flex items-center text-xs text-muted-foreground">
            {industryIcons[testimonial.industry]}
            <span className="ml-1">{testimonial.industry}</span>
          </div>
          <Button variant="ghost" size="sm" className="text-xs">
            Read More
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

