'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutCTA() {
  return (
    <section className="py-32 md:py-40 bg-gradient-to-b from-[#E9D692] to-[#DDB55D]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8">
            בואו להצטרף אלינו
          </h2>
          
          <p className="text-xl md:text-2xl font-light text-white/90 mb-12 leading-relaxed">
            אנחנו מזמינים אתכם להתחיל את המסע שלכם איתנו.
            מלאו שאלון היכרות קצר ונמצא את השיעור המושלם בשבילכם.
          </p>

          <Link href="/questionnaire">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 text-xl font-medium text-[#3A3837] bg-white hover:bg-[#F5F0E5] rounded-full shadow-xl transition-all duration-300"
            >
              מלאו שאלון היכרות
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}