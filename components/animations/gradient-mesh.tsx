'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

interface GradientMeshProps {
  className?: string
}

export function GradientMesh({ className }: GradientMeshProps) {
  return (
    <svg className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}>
      <defs>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
        </filter>
        <linearGradient id="gradient1">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="gradient2">
          <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <motion.circle
        r="300"
        fill="url(#gradient1)"
        filter="url(#blur)"
        initial={{ cx: '20%', cy: '30%' }}
        animate={{
          cx: ['20%', '80%', '20%'],
          cy: ['30%', '70%', '30%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.circle
        r="400"
        fill="url(#gradient2)"
        filter="url(#blur)"
        initial={{ cx: '80%', cy: '70%' }}
        animate={{
          cx: ['80%', '20%', '80%'],
          cy: ['70%', '30%', '70%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </svg>
  )
}