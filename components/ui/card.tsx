'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import { useAnimateInView } from '@/composables/use-animation'

export interface CardProps {
  children?: React.ReactNode
  hover?: boolean
  delay?: number
  className?: string
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, hover = true, delay = 0, className }, forwardedRef) => {
    const { ref, controls } = useAnimateInView()

    return (
      <motion.div
        ref={(node) => {
          ref(node)
          if (typeof forwardedRef === 'function') {
            forwardedRef(node)
          } else if (forwardedRef) {
            forwardedRef.current = node
          }
        }}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, delay }}
        whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : undefined}
        className={cn(
          'group relative bg-white rounded-xl p-6 shadow-sm border border-neutral-200',
          hover && 'hover:shadow-lg hover:border-neutral-300 transition-all duration-300',
          className
        )}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'