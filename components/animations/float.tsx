'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

interface FloatProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
}

export function Float({
  children,
  className,
  delay = 0,
  duration = 3,
  distance = 10
}: FloatProps) {
  return (
    <motion.div
      className={cn(className)}
      animate={{
        y: [0, -distance, 0]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  )
}