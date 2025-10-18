'use client'

import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/layout/section'
import { companyStats } from '@/data/stats'
import { useIntersection } from '@/composables/use-intersection'

export function StatsSection() {
  const { targetRef, isIntersecting } = useIntersection({ threshold: 0.3, freezeOnceVisible: true })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isIntersecting, hasAnimated])

  return (
    <Section background="cream">
      <Container>
        <div
          ref={targetRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
        >
          {companyStats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-2">
                {hasAnimated ? (
                  <>
                    {stat.prefix}
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                    {stat.suffix}
                  </>
                ) : (
                  <>
                    {stat.prefix}0{stat.suffix}
                  </>
                )}
              </div>
              <p className="text-neutral-600 text-sm lg:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}