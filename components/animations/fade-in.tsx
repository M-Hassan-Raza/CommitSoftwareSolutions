'use client'

import * as React from 'react'
import { motion, type Variants } from 'framer-motion'
import { useAnimateInView } from '@/composables/use-animation'
import { cn } from '@/lib/utils/cn'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.5
}: FadeInProps) {
  const { ref, controls } = useAnimateInView()

  const directionOffset = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {}
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}