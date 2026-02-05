'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface AppPreviewProps {
  title: string
  subtitle: string
  description: string
  children: ReactNode
  delay?: number
  slideDirection?: 'left' | 'right'
}

export default function AppPreview({
  title,
  subtitle,
  description,
  children,
  delay = 0,
  slideDirection = 'right'
}: AppPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: slideDirection === 'right' ? 200 : -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 50
      }}
      className="grid lg:grid-cols-2 gap-8 items-center mb-32"
    >
      <div className={clsx(
        "space-y-4",
        slideDirection === 'left' && "lg:order-2"
      )}>
        <h3 className="text-5xl font-bold bg-gradient-to-r from-teal-accent to-royal-blue bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-2xl text-teal-accent/80">{subtitle}</p>
        <p className="text-lg text-white/60 leading-relaxed">{description}</p>
      </div>
      
      <div className={clsx(
        slideDirection === 'left' && "lg:order-1"
      )}>
        {children}
      </div>
    </motion.div>
  )
}
