'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '20+', label: 'שנים' },
  { number: '500+', label: 'מתאמנים' },
  { number: '9', label: 'מדריכות' },
  { number: '∞', label: 'אהבה' }
]

export default function AboutCommunity() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-[#F5F0E5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3A3837] mb-6">
            הקהילה שלנו במספרים
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-light text-[#DDB55D] mb-4">
                {stat.number}
              </div>
              <div className="text-xl md:text-2xl font-light text-[#3A3837]/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}