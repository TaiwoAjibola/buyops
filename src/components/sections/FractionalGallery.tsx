'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface PropertyCardProps {
  name: string
  location: string
  price: string
  roi: string
  risk: string
  status?: string
  isHotDeal?: boolean
  fractions: {
    total: number
    available: number
  }
}

function PropertyCard({ name, location, price, roi, risk, status, isHotDeal, fractions }: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const riskColor = risk === 'Low' ? 'text-green-600' : risk === 'Mid' ? 'text-yellow-600' : 'text-red-600'

  return (
    <motion.div
      className="relative flex-shrink-0 w-[380px] mx-4"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-modern overflow-hidden">
        {/* Property Image */}
        <div className="relative h-56 bg-gradient-to-br from-blue-50 to-gray-100 mb-6 overflow-hidden">
          {/* Hot Deal Badge */}
          {isHotDeal && (
            <motion.div
              className="absolute top-4 right-4 z-10"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="relative">
                <div className="px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                  🔥 HOT DEAL
                </div>
                <motion.div
                  className="absolute inset-0 bg-red-500 rounded-full opacity-50"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>
          )}
          
          <div className="absolute inset-0 flex items-center justify-center text-brand-gray">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <div className="text-sm">Property Image</div>
            </div>
          </div>
        </div>

        {/* Property Info */}
        <div className="p-6 pt-0 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-1">{name}</h3>
            <p className="text-brand-gray text-sm">{location}</p>
          </div>

          {/* Price */}
          <div>
            <p className="text-2xl font-bold text-brand-blue">₦{price}</p>
            <p className="text-sm text-brand-gray">per fraction</p>
          </div>

          {/* Metadata - Appears on Hover */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-gray-50 rounded-lg space-y-3">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-sm text-brand-gray mb-1">Expected ROI</div>
                  <div className="text-lg font-bold text-green-600">{roi}</div>
                </div>
                <div>
                  <div className="text-sm text-brand-gray mb-1">Risk Level</div>
                  <div className={`text-lg font-bold ${riskColor}`}>{risk}</div>
                </div>
                <div>
                  <div className="text-sm text-brand-gray mb-1">Available</div>
                  <div className="text-lg font-bold text-brand-dark">
                    {fractions.available}/{fractions.total}
                  </div>
                </div>
              </div>

              <button className="w-full py-2.5 bg-brand-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function FractionalGallery() {
  const properties = [
    {
      name: 'The Grandeur Suites',
      location: 'Lekki Phase 1',
      price: '5,000,000',
      roi: '18%',
      risk: 'Low',
      status: 'Under Construction',
      isHotDeal: true,
      fractions: { total: 20, available: 8 }
    },
    {
      name: 'Emerald Garden',
      location: 'Epe, Lagos',
      price: '850,000',
      roi: '15%',
      risk: 'Low',
      status: 'Land/Development',
      fractions: { total: 30, available: 22 }
    },
    {
      name: 'Abuja Smart Hub',
      location: 'Maitama',
      price: '12,500,000',
      roi: '12%',
      risk: 'Low',
      status: 'Completed',
      fractions: { total: 10, available: 3 }
    },
  ]

  const duplicatedProperties = [...properties, ...properties]

  return (
    <section id="inventory" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 font-primary">
            Active Inventory
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto font-secondary">
            Premium real estate opportunities, one fraction at a time
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <motion.div
          className="flex"
          animate={{
            x: [0, -1600 * 2],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedProperties.map((property, index) => (
            <PropertyCard key={`${property.name}-${index}`} {...property} />
          ))}
        </motion.div>
      </div>

      <div className="container-custom mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-brand-gray mb-6 font-secondary">Hover over any property to reveal detailed insights</p>
          <button className="px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors font-secondary">
            Explore All Properties
          </button>
        </motion.div>
      </div>
    </section>
  )
}
