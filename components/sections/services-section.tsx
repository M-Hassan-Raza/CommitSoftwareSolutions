'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/layout/section'
import { services } from '@/data/services'
import { FadeIn } from '@/components/animations/fade-in'

export function ServicesSection() {
  return (
    <Section background="white">
      <Container>
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900">Services We Offer</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your needs
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={service.id} delay={index * 0.1}>
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="ml-3 text-lg font-semibold text-neutral-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 mb-4 flex-1">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-neutral-600 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}