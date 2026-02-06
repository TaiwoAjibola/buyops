'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '@/media/logo/Buyops Logo.svg'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Inventory', href: '#inventory' },
    { label: 'The Trail', href: '#trail' },
    { label: 'FAQ', href: '#faq' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Image 
              src={logo} 
              alt="BuyOps Logo" 
              width={107} 
              height={32} 
              className="h-8 w-auto" 
              style={{ height: '32px', width: 'auto', maxHeight: '32px' }} 
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-brand-gray hover:text-brand-blue transition-colors font-secondary"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#waitlist"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 bg-brand-blue text-white rounded-lg hover:bg-blue-700 transition-colors font-secondary font-semibold"
            >
              Secure Early Access
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
