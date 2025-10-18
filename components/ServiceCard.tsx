'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(15, 1, 0.1, 1000);
    camera.position.set(0, 0, 20);
    cameraRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create glass geometry and material
    const geometry = new THREE.CylinderGeometry(1, 1, 0.5, 32);
    const material = new THREE.MeshPhysicalMaterial({
      transmission: 1,
      roughness: 0,
      thickness: 5,
      ior: 1.15,
      color: '#ffffff',
      attenuationColor: '#ffffff',
      attenuationDistance: 0.25,
      chromaticAberration: 0.1,
      anisotropy: 0.01
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.setScalar(0.25);
    scene.add(mesh);
    meshRef.current = mesh;

    // Mouse tracking
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current || !mesh) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      const destX = x * 2;
      const destY = y * 2;
      
      // Smooth movement
      mesh.position.x += (destX - mesh.position.x) * 0.1;
      mesh.position.y += (destY - mesh.position.y) * 0.1;
      
      // Add rotation
      mesh.rotation.x = y * Math.PI / 4;
      mesh.rotation.y = x * Math.PI / 4;
    };

    // Animation loop
    const animate = () => {
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
        animationIdRef.current = requestAnimationFrame(animate);
      }
    };
    animate();

    // Add event listeners
    containerRef.current.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (renderer) {
        renderer.dispose();
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <Link href={href} className="block group">
      <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
        <div ref={containerRef} className="absolute inset-0" />
        
        {/* Overlay content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <div className="pointer-events-none">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              {title}
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              {description}
            </p>
          </div>
          <div className="mt-4 flex items-center text-purple-300 font-medium group-hover:text-white transition-colors pointer-events-auto">
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
