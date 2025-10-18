import * as React from 'react'
import { Navbar } from './navbar'
import { Footer } from './footer'
import PixelBlast from '@/components/ui/pixel-blast'

interface PageWrapperProps {
  children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* PixelBlast Background - covers entire page */}
      <div className="fixed inset-0 -z-10">
        <PixelBlast
          variant="circle"
          pixelSize={2}
          color="#3B82F6"
          patternScale={1.5}
          patternDensity={0.8}
          enableRipples={true}
          rippleIntensityScale={0.6}
          rippleThickness={0.15}
          rippleSpeed={0.2}
          speed={0.3}
          transparent={true}
          edgeFade={0.3}
          className="opacity-40"
        />
      </div>
      
      <Navbar />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  )
}