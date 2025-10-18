'use client'

import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/layout/section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { caseStudies } from '@/data/case-studies'
import { SlideIn } from '@/components/animations/slide-in'

export function CaseStudySection() {
  const featuredStudy = caseStudies.find((cs) => cs.id === 'go-load-balancer')

  if (!featuredStudy) return null

  return (
    <Section background="white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="left">
            <Badge variant="primary" className="mb-4">
              Featured Project
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
              {featuredStudy.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              {featuredStudy.description}
            </p>

            {/* Metrics Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {featuredStudy.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-cream-50 rounded-lg p-4 border border-neutral-200"
                >
                  <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                  <div className="text-sm text-neutral-600 mt-1">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {featuredStudy.technologies.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              {featuredStudy.githubUrl && (
                <Button variant="outline" asChild>
                  <a
                    href={featuredStudy.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              )}
              {featuredStudy.liveUrl && (
                <Button asChild>
                  <Link href={featuredStudy.liveUrl}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Link>
                </Button>
              )}
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-video bg-neutral-100 rounded-xl overflow-hidden border border-neutral-200">
                <div className="p-8 font-mono text-sm">
                  <div className="space-y-2">
                    <div className="text-blue-600">package main</div>
                    <div className="text-neutral-700">
                      <span className="text-purple-600">import</span> (
                    </div>
                    <div className="pl-4 space-y-1 text-neutral-600">
                      <div>&quot;fmt&quot;</div>
                      <div>&quot;net/http&quot;</div>
                      <div>&quot;sync&quot;</div>
                    </div>
                    <div className="text-neutral-700">)</div>
                    <div className="mt-4 text-purple-600">
                      func <span className="text-blue-600">main</span>() {'{'}
                    </div>
                    <div className="pl-4 text-neutral-600">
                      lb := NewLoadBalancer()
                    </div>
                    <div className="pl-4 text-neutral-600">
                      lb.Start(<span className="text-green-600">&quot;:8080&quot;</span>)
                    </div>
                    <div className="text-neutral-700">{'}'}</div>
                  </div>
                </div>
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-xs">Performance</div>
                <div className="text-2xl font-bold">&lt;50ms</div>
              </div>
            </div>
          </SlideIn>
        </div>
      </Container>
    </Section>
  )
}