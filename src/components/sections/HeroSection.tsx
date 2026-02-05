'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const GridBackground = dynamic(() => import('@/components/3D/GridBackground'), {
  ssr: false,
})

const MapMarkers3D = dynamic(() => import('@/components/3D/MapMarkers3D'), {
  ssr: false,
})

export default function HeroSection() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* 3D Grid Background with X, Y, Z perspective */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <GridBackground />
      </div>

      {/* 3D Map Markers with true depth */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <MapMarkers3D />
      </div>

      {/* Color Reveal Cursor */}
      <motion.div
        className="fixed w-[150px] h-[150px] rounded-full pointer-events-none hidden lg:block"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%)',
          mixBlendMode: 'difference',
          left: cursorPos.x - 75,
          top: cursorPos.y - 75,
          zIndex: 4,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Content Container */}
      <div className="container-custom relative" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Headline */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tight font-primary">
              <span className="text-brand-dark">Real Estate Wealth,</span>
              <br />
              <span className="bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-green bg-clip-text text-transparent">
                Unlocked.
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-brand-gray leading-relaxed max-w-3xl mx-auto font-secondary">
              Nigeria's premier ecosystem connecting asset owners, agents, and investors.
            </p>

            {/* Primary CTA */}
            <motion.a
              href="#waitlist"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(37, 99, 235, 0.3)',
                  '0 0 40px rgba(37, 99, 235, 0.5)',
                  '0 0 20px rgba(37, 99, 235, 0.3)',
                ],
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity },
                scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="inline-block px-10 py-5 card-glass text-brand-blue font-bold text-lg rounded-xl font-secondary hover:bg-brand-blue/10 transition-colors"
            >
              Join the Waitlist
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ zIndex: 10 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-brand-gray text-sm font-secondary flex flex-col items-center gap-2"
        >
          <span>Scroll to explore</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
