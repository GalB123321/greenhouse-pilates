'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#E9D692] to-[#DDB55D]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-sm md:text-base font-light text-white/90 tracking-widest uppercase mb-6">
            אודות
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight mb-6 leading-tight">
            הבית הירוק
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed">
            20 שנה של תנועה, נשימה וקהילה
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/70 text-sm font-light"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}