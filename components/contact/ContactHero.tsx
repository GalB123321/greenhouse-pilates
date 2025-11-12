'use client'

import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#E9D692] to-[#DDB55D] px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-6">
            בואו נדבר
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed max-w-2xl mx-auto">
            יש לכם שאלות? רוצים להתחיל לתרגל? אנחנו כאן בשבילכם.
          </p>
        </motion.div>
      </div>
    </section>
  )
}