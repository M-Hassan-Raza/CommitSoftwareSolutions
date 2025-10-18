import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: 'white' | 'cream' | 'gradient' | 'grid'
  overflow?: boolean
}

const backgrounds = {
  white: 'bg-white',
  cream: 'bg-cream-50',
  gradient: 'bg-gradient-to-br from-blue-50 to-cream-50',
  grid: 'bg-cream-50 bg-grid-pattern'
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, background = 'white', overflow = false, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'relative py-24',
          backgrounds[background],
          !overflow && 'overflow-hidden',
          className
        )}
        {...props}
      >
        {children}
      </section>
    )
  }
)

Section.displayName = 'Section'