'use client';

import Link from 'next/link';
import FluidGlass from './FluidGlass';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageUrl?: string;
  mode?: 'lens' | 'bar' | 'cube';
}

export default function ServiceCard({ 
  title, 
  description, 
  href, 
  mode = 'lens'
}: ServiceCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
        <FluidGlass 
          mode={mode}
          lensProps={{
            scale: 0.25,
            ior: 1.15,
            thickness: 5,
            chromaticAberration: 0.1,
            anisotropy: 0.01  
          }}
        />
        
        {/* Overlay content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
            {title}
          </h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            {description}
          </p>
          <div className="mt-4 flex items-center text-purple-300 font-medium group-hover:text-white transition-colors">
            Learn more
            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
