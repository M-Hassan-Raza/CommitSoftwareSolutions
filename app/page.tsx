import { PageWrapper } from '@/components/layout/page-wrapper'
import { Hero } from '@/components/sections/hero'
import { ServicesSection } from '@/components/sections/services-section'
import { TechStackSection } from '@/components/sections/tech-stack-section'
import { CaseStudySection } from '@/components/sections/case-study-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { StatsSection } from '@/components/sections/stats-section'
import { CTASection } from '@/components/sections/cta-section'

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <ServicesSection />
      <TechStackSection />
      <CaseStudySection />
      <TestimonialsSection />
      <StatsSection />
      <CTASection />
    </PageWrapper>
  )
}
