# Commit Software Solutions

A modern, interactive landing page for Commit Software Solutions built with Next.js, React Three Fiber, and Tailwind CSS. Features 3D interactive service cards and comprehensive service detail pages.

## Services

- **Business Automations** - Streamline operations with smart automation solutions
- **Cloud & DevOps** - Scalable cloud infrastructure and DevOps practices  
- **Web Development** - Modern web applications with cutting-edge technologies
- **Graphics Design** - Creative UI/UX and brand identity design
- **POS Solutions** - Custom point-of-sale systems for retail businesses

## Features

- 🎨 3D Interactive Service Cards using React Three Fiber
- 📱 Fully responsive design with mobile-first approach
- ⚡ Lightning-fast performance with Next.js 15
- 🎭 Beautiful animations and transitions
- 🔧 Modern development stack (TypeScript, Tailwind CSS)
- 📊 SEO optimized with proper metadata

## Prerequisites

Before running this project, you need to set up the required 3D assets:

### Required 3D Models

The FluidGlass component requires 3D models to function correctly. Place these files in the `public/assets/3d/` directory:

- `lens.glb` - For the lens mode service cards
- `bar.glb` - For the bar mode (if used)
- `cube.glb` - For the cube mode (if used)

### Service Images

Place service images in the `public/assets/demo/` directory:

- `business-automation.webp`
- `cloud-devops.webp`
- `web-development.webp`
- `graphics-design.webp`
- `pos-solutions.webp`

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Set up 3D assets:**
   - Create the directories: `public/assets/3d/` and `public/assets/demo/`
   - Add the required 3D model files (.glb format)
   - Add service images (.webp format recommended)

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
├── app/
│   ├── services/           # Service detail pages
│   │   ├── business-automations/
│   │   ├── cloud-devops/
│   │   ├── web-development/
│   │   ├── graphics-design/
│   │   └── pos-solutions/
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage with services gallery
├── components/
│   ├── FluidGlass.tsx     # 3D interactive component
│   ├── ServiceCard.tsx    # Service card wrapper
│   ├── ServiceHero.tsx    # Reusable hero component
│   ├── Hero.tsx           # Homepage hero
│   └── Navbar.tsx         # Navigation component
└── public/
    └── assets/
        ├── 3d/            # 3D model files (.glb)
        └── demo/          # Service images (.webp)
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React Three Fiber** - 3D graphics and animations
- **Three.js** - 3D library
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **@react-three/drei** - Useful helpers for React Three Fiber

## Customization

### Adding New Services

1. Add service data to the `services` array in `app/page.tsx`
2. Create a new directory under `app/services/`
3. Add a `page.tsx` file with the service content
4. Update navigation links in `components/Navbar.tsx`

### Modifying 3D Effects

The FluidGlass component supports different modes and properties. Modify the `lensProps`, `barProps`, or `cubeProps` in `components/ServiceCard.tsx` to customize the 3D effects.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

Make sure to include the 3D assets and images in your deployment.

## License

This project is private and proprietary to Commit Software Solutions.
