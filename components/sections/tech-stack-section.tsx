'use client'

import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/layout/section'
import { techStack, techCategories } from '@/data/tech-stack'
import { FadeIn } from '@/components/animations/fade-in'
import { Float } from '@/components/animations/float'

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>('backend')

  const getCategoryData = (category: string) => {
    return techStack[category as keyof typeof techStack] || []
  }

  return (
    <Section background="cream">
      <Container>
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900">Our Technology Stack</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Modern tools for modern solutions
          </p>
        </FadeIn>

        <Tabs.Root value={activeCategory} onValueChange={setActiveCategory}>
          <Tabs.List className="flex flex-wrap justify-center gap-2 mb-12">
            {techCategories.map((category) => (
              <Tabs.Trigger
                key={category}
                value={category.toLowerCase().replace('/', '')}
                className="px-6 py-2 rounded-lg font-medium text-sm transition-all data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-neutral-700 data-[state=inactive]:hover:bg-neutral-50"
              >
                {category}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            >
              {getCategoryData(activeCategory).map((tech, index) => (
                <Float key={tech.name} delay={index * 0.05} duration={3 + index * 0.2}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, rotateZ: 2 }}
                    className="relative group"
                  >
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 hover:shadow-lg hover:border-blue-200 transition-all text-center">
                      <p className="text-sm font-medium text-neutral-700">{tech.name}</p>
                      <p className="text-xs text-neutral-500 mt-1">{tech.category}</p>

                      {/* Proficiency indicator */}
                      <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          {tech.proficiency}%
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Float>
              ))}
            </motion.div>
          </AnimatePresence>
        </Tabs.Root>
      </Container>
    </Section>
  )
}