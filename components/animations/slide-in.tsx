'use client'

import * as React from 'react'
import { motion, type Variants } from 'framer-motion'
import { useAnimateInView } from '@/composables/use-animation'
import { cn } from '@/lib/utils/cn'

interface SlideInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'left' | 'right' | 'up' | 'down'
  distance?: number
}

export function SlideIn({
  children,
  className,
  delay = 0,
  direction = 'left',
  distance = 50
}: SlideInProps) {
  const { ref, controls } = useAnimateInView()

  const directionVariants = {
    left: { x: -distance },
    right: { x: distance },
    up: { y: -distance },
    down: { y: distance }
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directionVariants[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
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