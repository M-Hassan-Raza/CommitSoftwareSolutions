# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the landing page for Commit Software Solutions, built with Next.js 15.5.4, React 19, and Tailwind v4. The project is designed with a Zed.dev-inspired aesthetic featuring a cream background (#FAFAF8), subtle design elements, and sophisticated animations.

## Commands

- `npm run dev` - Start development server with Turbopack (opens on http://localhost:3000)
- `npm run build` - Build production-ready application with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks

## Architecture & Design System

### Centralized Theme System

All design tokens are centralized in `lib/theme/`:
- `colors.ts` - Color palette (blue, cream, neutral scales)
- `typography.ts` - Font families, sizes, and text styles
- `animations.ts` - Reusable animation configurations for Framer Motion
- `spacing.ts` - Spacing scale and layout constants

This centralized approach ensures consistency across the entire application. Import theme values rather than hardcoding colors or animations.

### Component Organization

- **`components/ui/`** - Reusable base components (Button, Card, Badge, etc.) with variant support
- **`components/layout/`** - Layout wrappers (Navbar, Footer, Section, Container)
- **`components/sections/`** - Page-specific sections (Hero, Services, TechStack, etc.)
- **`components/animations/`** - Animation wrappers and effects (GradientMesh, FadeIn, etc.)

### Composables (Custom Hooks)

React hooks in `composables/` provide shared functionality:
- `use-scroll.ts` - Scroll position, direction, and scroll state detection
- `use-intersection.ts` - Intersection Observer for visibility detection
- `use-animation.ts` - Framer Motion animation controls with IntersectionObserver
- `use-media-query.ts` - Responsive breakpoint detection
- `use-parallax.ts` - Parallax scroll effects

### Data Layer

Static content is stored in `data/` directory:
- `services.ts` - Service offerings data
- `tech-stack.ts` - Technology stack with proficiency levels
- `testimonials.ts` - Client testimonials
- `case-studies.ts` - Featured projects and case studies

## Key Design Patterns

### Seamless Navbar Design

The navbar uses **no border-bottom divider**. Instead, it has:
- Transparent background when at page top
- `backdrop-blur-xl` effect when scrolled
- Subtle shadow that appears on scroll
- Smooth transition between states using the `useScroll` composable

### DRY Component Architecture

All UI components accept:
- `className` prop for customization (merged with base styles using `cn()` utility)
- Standard HTML props via spread operators
- Variant props for different visual styles

Use `clsx` and `tailwind-merge` via the `cn()` utility for proper class merging.

### Animation Strategy

- Use Framer Motion for complex animations (stagger, orchestration, gestures)
- Use CSS transitions for simple hover effects
- All animations use GPU-accelerated properties (transform, opacity)
- Centralized animation configs in `lib/theme/animations.ts`

## Tailwind v4 Configuration

Tailwind v4 uses inline `@theme` directive in `globals.css` for theme extension. Custom utilities include:
- `.gradient-text` - Blue gradient text effect
- `.scrollbar-hide` - Hide scrollbar while maintaining scroll functionality
- Grid pattern background via SVG data URL

## Path Aliases

TypeScript path alias `@/*` maps to project root, enabling clean imports:
```typescript
import { Button } from '@/components/ui/button'
import { colors } from '@/lib/theme/colors'
```

## Performance Considerations

- Lazy load images using Next.js `Image` component
- Use dynamic imports for heavy components
- Implement proper loading states for async data
- Ensure animations don't block main thread (use transform/opacity only)