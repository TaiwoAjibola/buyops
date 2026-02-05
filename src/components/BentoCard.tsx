'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface BentoCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hoverable?: boolean
}

export default function BentoCard({ 
  children, 
  className, 
  delay = 0,
  hoverable = false 
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={hoverable ? { y: -4 } : {}}
      className={clsx(
        'card-modern p-8',
        hoverable && 'cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
