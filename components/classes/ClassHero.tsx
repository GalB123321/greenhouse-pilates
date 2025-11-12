'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ClassHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#E9D692] to-[#DDB55D]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight mb-6 leading-tight">
            השיעורים שלנו
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
            פילאטיס, יוגה וצ׳יקונג - מגוון שיעורים לכל הרמות
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/questionnaire">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 md:px-12 md:py-5 bg-white/95 text-[#C99F4A] text-lg md:text-xl font-light rounded-full shadow-2xl backdrop-blur-sm"
              >
                מלאו שאלון היכרות
              </motion.button>
            </Link>

            <Link href="#schedule">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 md:px-12 md:py-5 border-2 border-white text-white text-lg md:text-xl font-light rounded-full backdrop-blur-sm hover:bg-white/10"
              >
                לוח שיעורים
              </motion.button>
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  )
}