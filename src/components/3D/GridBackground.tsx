'use client'

import { Canvas } from '@react-three/fiber'
import { Grid, OrthographicCamera } from '@react-three/drei'

export default function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 50, 0], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        {/* Orthographic camera for top-down view */}
        <OrthographicCamera 
          makeDefault 
          position={[0, 50, 0]} 
          rotation={[-Math.PI / 2, 0, 0]}
          zoom={20}
        />
        
        {/* Ambient light for visibility */}
        <ambientLight intensity={0.8} />
        
        {/* Flat 3D Grid on XZ plane (viewed from top/Z-axis) */}
        <Grid 
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          infiniteGrid 
          fadeDistance={100} 
          cellColor="#cbd5e1" 
          sectionColor="#94a3b8" 
          cellSize={2}
          sectionSize={10}
          fadeStrength={0.2}
          followCamera={false}
        />
      </Canvas>
    </div>
  )
}
