'use client'

import { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Quote } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/layout/section'
import { testimonials } from '@/data/testimonials'
import { FadeIn } from '@/components/animations/fade-in'

export function TestimonialsSection() {
  const autoplayRef = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }))
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplayRef.current])

  return (
    <Section background="white">
      <Container>
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Real feedback from real businesses
          </p>
        </FadeIn>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
              >
                <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200 h-full">
                  <Quote className="h-8 w-8 text-blue-500 mb-4" />

                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-neutral-700 mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  <div className="mt-auto">
                    <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                    <p className="text-sm text-neutral-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="h-2 w-2 rounded-full bg-neutral-300"
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}