'use client';

import { cn } from '../lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'compact' | 'hero' | 'section';
  className?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  border?: boolean;
}

export default function GlassCard({
  children,
  variant = 'default',
  className,
  padding = 'md',
  rounded = '2xl',
  border = true,
}: GlassCardProps) {
  const baseClasses = 'backdrop-blur-[1px]';
  
  const variantClasses = {
    default: 'bg-black/15',
    compact: 'bg-black/10',
    hero: 'bg-black/25',
    section: 'bg-black/15',
  };
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };
  
  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
  };
  
  const borderClasses = border ? 'border border-white/10' : '';
  
  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        paddingClasses[padding],
        roundedClasses[rounded],
        borderClasses,
        className
      )}
    >
      {children}
    </div>
  );
}
