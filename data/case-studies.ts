export interface Metric {
  value: string
  label: string
}

export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  description: string
  metrics: Metric[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'go-load-balancer',
    title: 'High-Performance Load Balancing Solution',
    subtitle: 'Built from scratch in Go',
    description: 'A production-ready load balancer built in Go to efficiently handle massive concurrent connections with intelligent routing algorithms and real-time health monitoring.',
    metrics: [
      { value: '10K+', label: 'Concurrent Connections' },
      { value: '99.9%', label: 'Uptime' },
      { value: '<50ms', label: 'Latency' },
      { value: '30s', label: 'Health Checks' }
    ],
    technologies: ['Go', 'WebSockets', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/M-Hassan-Raza/go-load-balancer-dash',
    featured: true
  },
  {
    id: 'polaris-erp',
    title: 'Polaris ERP System',
    subtitle: 'Complete business management platform',
    description: 'Enterprise Resource Planning system designed for modern businesses with real-time inventory, advanced analytics, and cloud-based architecture.',
    metrics: [
      { value: 'PKR 2.5M+', label: 'Monthly Transactions' },
      { value: '50+', label: 'Active Businesses' },
      { value: '99.95%', label: 'System Uptime' },
      { value: '<100ms', label: 'Response Time' }
    ],
    technologies: ['Django', 'PostgreSQL', 'Vue.js', 'Redis', 'Celery'],
    liveUrl: '/products/polaris',
    featured: true
  },
  {
    id: 'ai-chatbot',
    title: 'Intelligent Customer Service Bot',
    subtitle: 'LangChain-powered automation',
    description: 'AI-powered chatbot using LangChain and Claude AI to provide 24/7 customer support with context-aware responses and seamless escalation.',
    metrics: [
      { value: '70%', label: 'Response Time Reduction' },
      { value: '85%', label: 'Resolution Rate' },
      { value: '1000+', label: 'Daily Queries' },
      { value: '4.8/5', label: 'Customer Rating' }
    ],
    technologies: ['LangChain', 'Claude AI', 'FastAPI', 'PostgreSQL'],
    featured: false
  }
]