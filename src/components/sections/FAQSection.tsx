'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
  index: number
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-modern overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-semibold text-brand-dark font-primary pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl text-brand-blue flex-shrink-0"
        >
          ↓
        </motion.span>
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-brand-gray font-secondary leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FAQSection() {
  const faqs = [
    {
      question: 'Is this a “Contribution” scheme?',
      answer: 'No. This is Direct Ownership. You are buying a legal fraction of a physical asset, documented with a PR-HRL Registration Code.'
    },
    {
      question: 'Why Naira (₦)?',
      answer: 'To protect our ecosystem from currency volatility and ensure that Nigerian real estate remains accessible to the people driving our economy.'
    },
    {
      question: 'How does the PR-HRL code protect me?',
      answer: 'Every purchase generates a unique Registration Code (PR-HRL-####) tied to your identity and the specific asset fraction. It acts as a verifiable ownership reference across the BuyOps digital trail.'
    },
    {
      question: 'How do payments work (and why “zero-cash”)?',
      answer: 'Security is non-negotiable. Payments are encrypted and routed directly through secure payment links—no middleman, no cash handling. Your confirmation is recorded instantly.'
    },
    {
      question: 'What happens after I purchase a fraction?',
      answer: 'Upon successful payment, the system issues your PR-HRL Registration Code and a Digital Deed. You get immediate access to the asset’s due diligence pack, projected returns, and portfolio tracking.'
    },
    {
      question: 'What fees are involved?',
      answer: 'We believe in transparency. All fees are clearly displayed before purchase, including platform fees, transaction fees, and any property management costs. There are no hidden charges. Everything is priced and settled in Nigerian Naira (₦).'
    }
  ]

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 font-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto font-secondary">
            Everything you need to know about fractional real estate investment
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-brand-gray mb-4 font-secondary">Still have questions?</p>
          <button className="px-8 py-3 border-2 border-brand-blue text-brand-blue font-semibold rounded-lg hover:bg-brand-blue hover:text-white transition-all font-secondary">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  )
}
