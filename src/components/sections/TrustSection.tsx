'use client'

import { motion } from 'framer-motion'

export default function TrustSection() {
  const features = [
    {
      title: 'Native Currency',
      description: 'Everything is priced and settled in Nigerian Naira (₦).'
    },
    {
      title: 'Zero-Cash Policy',
      description: '100% digital payment trails for maximum security and transparency.'
    },
    {
      title: 'Role-Based Access',
      description: 'Distinct dashboards for Team Leads, Agents, and Admins.'
    },
    {
      title: 'Data-Driven',
      description: '7-section asset analysis covering ROI, Risk, and Legal status.'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 font-primary">
            Engineered for Trust.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="card-glass p-8 text-center hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-brand-dark mb-4 font-primary">
                {feature.title}
              </h3>
              <p className="text-brand-gray leading-relaxed font-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
