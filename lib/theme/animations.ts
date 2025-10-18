export const animations = {
  spring: {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
  },
  smooth: {
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96] as const,
  },
  fast: {
    duration: 0.2,
    ease: "easeOut" as const,
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.98,
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
} as const