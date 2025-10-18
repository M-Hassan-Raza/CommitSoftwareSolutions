import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/layout/section'
import { FadeIn } from '@/components/animations/fade-in'

export function CTASection() {
  return (
    <Section background="white" className="!py-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-16 lg:px-16 lg:py-20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

          <FadeIn className="relative text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you leverage technology for growth
            </p>
            <Button
              size="lg"
              className="mt-8 bg-white text-blue-600 hover:bg-blue-50"
              asChild
            >
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}