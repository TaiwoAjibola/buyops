'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Edges, Grid, PerspectiveCamera, Html } from '@react-three/drei'
import { motion } from 'framer-motion'

interface BuildingBlockProps {
  position: [number, number, number]
  args: [number, number, number]
  color?: string
  edgeColor?: string
}

function BuildingBlock({ position, args, color = "white", edgeColor = "black" }: BuildingBlockProps) {
  return (
    <mesh position={position}>
      <boxGeometry args={args} />
      <meshStandardMaterial 
        color={color} 
        polygonOffset 
        polygonOffsetFactor={1}
        emissive={color === "white" ? "#ffffff" : color}
        emissiveIntensity={color === "white" ? 0.2 : 0}
      />
      <Edges threshold={15} color={edgeColor} />
    </mesh>
  )
}

function ApartmentLineArt() {
  return (
    <>
      {/* 1. MAIN BUILDING CORE */}
      <BuildingBlock position={[0, 4.5, 0]} args={[10, 9, 8]} />

      {/* 2. RECESSED BALCONY FRAMES (The Dark Grey Sections) */}
      {/* Ground level dark base */}
      <BuildingBlock position={[0, 1, 0.5]} args={[10.2, 2, 8.2]} color="#333" />
      
      {/* Balcony Stack (Left side of image) */}
      <group position={[2.5, 5, 4.2]}>
        {/* Bottom Balcony Frame */}
        <BuildingBlock position={[0, -1, 0]} args={[4.5, 3.5, 1]} color="#444" />
        {/* Top Balcony Frame */}
        <BuildingBlock position={[0, 2.8, 0]} args={[4.5, 3.5, 1]} color="#444" />
      </group>

      {/* 3. SIDE BOX WINDOWS (The cantilevered units on the left) */}
      <group position={[-5.2, 4, 0]}>
        {[0, 2.5, 5].map((y) => (
          <BuildingBlock key={y} position={[0, y - 1, 2]} args={[1, 1.5, 1.5]} />
        ))}
      </group>

      {/* 4. TALL VERTICAL WINDOW (Center Feature) */}
      <BuildingBlock position={[-1, 5, 4.05]} args={[1.5, 6, 0.1]} color="#eee" />

      {/* 5. GROUND FEATURES (Signage wall & Gate) */}
      <BuildingBlock position={[4, 0.5, 6]} args={[4, 1.5, 0.2]} color="#555" />
    </>
  )
}

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-3 border-brand-blue border-t-transparent rounded-full animate-spin" />
        <p className="text-brand-gray font-secondary text-sm">Loading...</p>
      </div>
    </Html>
  )
}

export default function HouseModel() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full"
      style={{ minHeight: '400px' }}
    >
      <Canvas
        shadows
        camera={{ position: [20, 15, 25], fov: 70, near: 0.1, far: 1000 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<Loader />}>
          <PerspectiveCamera makeDefault position={[20, 15, 25]} fov={70} />
          
          {/* Bright Lighting Setup */}
          <ambientLight intensity={2} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <directionalLight position={[-10, 10, -5]} intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          
          <ApartmentLineArt />
          
          <Grid 
            infiniteGrid 
            fadeDistance={40} 
            cellColor="#ccc" 
            sectionColor="#999" 
            cellSize={1}
            sectionSize={5}
          />
          
          <OrbitControls
            makeDefault
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            autoRotate={false}
            minDistance={10}
            maxDistance={40}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  )
}
