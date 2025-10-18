export interface Technology {
  name: string
  category: string
  proficiency: number
  icon?: string
}

export interface TechStackCategory {
  backend: Technology[]
  frontend: Technology[]
  cloud: Technology[]
  aiml: Technology[]
  databases: Technology[]
}

export const techStack: TechStackCategory = {
  backend: [
    { name: 'Django', category: 'Framework', proficiency: 95 },
    { name: 'FastAPI', category: 'Framework', proficiency: 90 },
    { name: 'Flask', category: 'Framework', proficiency: 85 },
    { name: 'Celery', category: 'Task Queue', proficiency: 85 },
    { name: 'WebSockets', category: 'Real-time', proficiency: 80 },
  ],
  frontend: [
    { name: 'Vue.js', category: 'Framework', proficiency: 95 },
    { name: 'React', category: 'Framework', proficiency: 85 },
    { name: 'Next.js', category: 'Framework', proficiency: 80 },
    { name: 'Tailwind CSS', category: 'Styling', proficiency: 95 },
    { name: 'Framer Motion', category: 'Animation', proficiency: 85 },
  ],
  cloud: [
    { name: 'AWS', category: 'Platform', proficiency: 90 },
    { name: 'GCP', category: 'Platform', proficiency: 85 },
    { name: 'Azure', category: 'Platform', proficiency: 75 },
    { name: 'Docker', category: 'Container', proficiency: 90 },
    { name: 'Nginx', category: 'Server', proficiency: 85 },
  ],
  aiml: [
    { name: 'LangChain', category: 'Orchestration', proficiency: 95 },
    { name: 'LangGraph', category: 'Orchestration', proficiency: 90 },
    { name: 'OpenAI API', category: 'LLM', proficiency: 90 },
    { name: 'Claude AI', category: 'LLM', proficiency: 85 },
    { name: 'Hugging Face', category: 'Platform', proficiency: 80 },
  ],
  databases: [
    { name: 'PostgreSQL', category: 'Relational', proficiency: 95 },
    { name: 'Redis', category: 'Cache', proficiency: 90 },
    { name: 'BigQuery', category: 'Analytics', proficiency: 80 },
    { name: 'Supabase', category: 'BaaS', proficiency: 85 },
    { name: 'MongoDB', category: 'NoSQL', proficiency: 75 },
  ]
}

export const techCategories = ['Backend', 'Frontend', 'Cloud', 'AI/ML', 'Databases'] as const
export type TechCategory = typeof techCategories[number]