'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '@/media/logo/Buyops Logo.svg'
import WaitlistForm from './WaitlistForm'

export default function CTAFooter() {
  const stats = [
    { value: '₦2.5B+', label: 'Total Assets Under Management' },
    { value: '10,000+', label: 'Active Investors' },
    { value: '500+', label: 'Properties Listed' },
    { value: '18%', label: 'Average ROI' }
  ]

  const footerLinks = [
    {
      title: 'Product',
      links: ['BuyOps Admin', 'BuyOps Sales', 'BuyOps Investor', 'Features', 'Pricing']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Blog', 'Press Kit', 'Contact']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'API Reference', 'Tutorials', 'Case Studies', 'FAQs']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance', 'Security']
    }
  ]

  return (
    <footer id="waitlist" className="bg-gray-50">
      <div className="section-padding">
        <div className="container-custom">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 py-20 px-8 card-modern bg-gradient-to-br from-brand-blue to-blue-700"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-primary">
              Ready to build your fractional portfolio?
            </h2>

            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-secondary">
              Join the 1,000+ agents and investors already scaling on the BuyOps infrastructure.
            </p>

            <div className="max-w-md mx-auto">
              <WaitlistForm />
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center p-6 card-modern"
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-brand-gray">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Links */}
          <div className="grid md:grid-cols-4 gap-10 mb-16 pb-16 border-b border-gray-200">
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <h3 className="text-brand-dark font-bold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-brand-gray hover:text-brand-blue transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="flex items-center gap-3">
              <Image src={logo} alt="BuyOps Logo" width={120} height={40} className="h-10 w-auto" />
            </div>

            <div className="text-brand-gray">
              © 2026 BuyOps. Built for Nigeria's smartest investors.
            </div>

            <div className="flex gap-6">
              {['Twitter', 'LinkedIn', 'Instagram', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-brand-gray hover:text-brand-blue transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
