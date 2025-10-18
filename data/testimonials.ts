export interface Testimonial {
  id: number
  content: string
  author: string
  role: string
  company: string
  rating: number
  image?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Polaris ERP transformed our retail operations. The real-time inventory tracking reduced our stock discrepancies by 80%, and the intuitive interface meant our staff was up and running in just days.",
    author: "Ahmed Khan",
    role: "CEO",
    company: "Lahore Electronics Mart",
    rating: 5
  },
  {
    id: 2,
    content: "The automation solutions Commit built for us saved over 500 hours annually. Their expertise in Django and cloud infrastructure delivered exactly what we needed.",
    author: "Sarah Malik",
    role: "Operations Director",
    company: "Punjab Textiles",
    rating: 5
  },
  {
    id: 3,
    content: "Outstanding POS system that handles our peak hours flawlessly. The 99.95% uptime speaks for itself. Commit's support team is always responsive.",
    author: "Hassan Ali",
    role: "Owner",
    company: "City Hypermarket",
    rating: 5
  },
  {
    id: 4,
    content: "Their AI integration for customer service reduced our response time by 70%. The LangChain implementation was seamless and scaled perfectly with our growth.",
    author: "Fatima Sheikh",
    role: "CTO",
    company: "TechVenture Solutions",
    rating: 5
  },
  {
    id: 5,
    content: "Working with Commit on our cloud migration was a game-changer. They moved our entire infrastructure to AWS with zero downtime and 40% cost reduction.",
    author: "Imran Qureshi",
    role: "IT Manager",
    company: "National Trading Co.",
    rating: 5
  }
]