'use client'

import { useState, useEffect, useRef } from 'react'

interface UseIntersectionOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export function useIntersection(options: UseIntersectionOptions = {}) {
  const { threshold = 0.1, root = null, rootMargin = '0px', freezeOnceVisible = false } = options
  const [isIntersecting, setIsIntersecting] = useState(false)
  const targetRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const target = targetRef.current
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting
        setIsIntersecting(isVisible)

        if (isVisible && freezeOnceVisible) {
          observer.unobserve(target)
        }
      },
      { threshold, root, rootMargin }
    )

    observer.observe(target)

    return () => {
      observer.disconnect()
    }
  }, [threshold, root, rootMargin, freezeOnceVisible])

  return { targetRef, isIntersecting }
}