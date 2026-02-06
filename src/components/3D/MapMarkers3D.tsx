'use client'

import { Canvas } from '@react-three/fiber'
import { OrthographicCamera, Text } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

interface Marker3DProps {
  position: [number, number, number] // X, Y, Z coordinates
  color: string
  label: string
}

function Marker3D({ position, color, label }: Marker3DProps) {
  const colorMap: { [key: string]: string } = {
    'brand-green': '#10B981',
    'brand-blue': '#2563EB',
    'brand-indigo': '#4338CA',
    'brand-dark': '#0F172A'
  }
  
  const hexColor = colorMap[color] || '#2563EB'
  
  return (
    <group position={position}>
      {/* Pin stick */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
        <meshStandardMaterial color={hexColor} opacity={0.6} transparent />
      </mesh>
      
      {/* Pin head */}
      <mesh position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color={hexColor} emissive={hexColor} emissiveIntensity={0.3} />
      </mesh>

      {/* 3D Label (kept inside the canvas so it can't overlay the hero text) */}
      <group position={[0.7, 2.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <Text
          fontSize={0.55}
          color={hexColor}
          anchorX="left"
          anchorY="middle"
          outlineWidth={0.03}
          outlineColor="#ffffff"
        >
          {label}
        </Text>
      </group>
    </group>
  )
}

function Markers() {
  const { viewport } = useThree()

  // In top-down view: screen X maps to world X, screen Y maps to world Z.
  const x = viewport.width * 0.42
  const z = viewport.height * 0.32

  return (
    <>
      <Marker3D position={[-x, 0, z]} color="brand-green" label="✓ Asset-Backed Security" />
      <Marker3D position={[x, 0, z * 0.6]} color="brand-blue" label="Entry from ₦850K" />
      <Marker3D position={[-x * 0.75, 0, -z]} color="brand-indigo" label="18% Target Yield" />
      <Marker3D position={[x * 0.7, 0, -z * 0.75]} color="brand-dark" label="Institutional Grade Compliance" />
    </>
  )
}

export default function MapMarkers3D() {
  return (
    <Canvas
      camera={{ position: [0, 50, 0] }}
      style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: 'high-performance'
      }}
    >
      <OrthographicCamera 
        makeDefault 
        position={[0, 50, 0]} 
        rotation={[-Math.PI / 2, 0, 0]}
        zoom={20}
      />
      
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 20, 10]} intensity={1} />

      <Markers />
    </Canvas>
  )
}
