import { Code, Cloud, Bot, Cpu, Database, Smartphone } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: any
  features: string[]
  slug: string
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Custom Software Development',
    description: 'Tailored solutions built with cutting-edge technologies to meet your unique business needs.',
    icon: Code,
    features: [
      'Full-stack web applications',
      'Enterprise software solutions',
      'API development & integration',
      'Legacy system modernization'
    ],
    slug: 'custom-software-development'
  },
  {
    id: '2',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services on AWS, Azure, and GCP.',
    icon: Cloud,
    features: [
      'Cloud architecture design',
      'Infrastructure as Code',
      'Containerization & orchestration',
      'Cloud migration & optimization'
    ],
    slug: 'cloud-solutions'
  },
  {
    id: '3',
    title: 'AI & Automation',
    description: 'Intelligent automation solutions leveraging LLMs, ML, and modern AI frameworks.',
    icon: Bot,
    features: [
      'LangChain & LangGraph integration',
      'Process automation',
      'Intelligent chatbots',
      'Predictive analytics'
    ],
    slug: 'ai-automation'
  },
  {
    id: '4',
    title: 'System Architecture',
    description: 'Design and implement robust, scalable system architectures for high-performance applications.',
    icon: Cpu,
    features: [
      'Microservices architecture',
      'Load balancing & optimization',
      'Real-time systems',
      'Performance tuning'
    ],
    slug: 'system-architecture'
  },
  {
    id: '5',
    title: 'Database Solutions',
    description: 'Expert database design, optimization, and management for relational and NoSQL systems.',
    icon: Database,
    features: [
      'PostgreSQL & MySQL optimization',
      'Redis caching strategies',
      'BigQuery analytics',
      'Database migration'
    ],
    slug: 'database-solutions'
  },
  {
    id: '6',
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications with native performance and modern UX.',
    icon: Smartphone,
    features: [
      'React Native development',
      'Progressive Web Apps',
      'Native iOS & Android',
      'Mobile-first design'
    ],
    slug: 'mobile-development'
  }
]