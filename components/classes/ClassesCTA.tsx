'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ClassesCTA() {
  return (
    <section className="py-32 md:py-40 bg-gradient-to-b from-[#E9D692] to-[#DDB55D]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
            בואו לנסות<br />בלי התחייבות
          </h2>
          
          <p className="text-xl md:text-2xl font-light text-white/90 mb-4 leading-relaxed">
            התחילו את המסע שלכם איתנו.
          </p>
          
          <p className="text-lg font-light text-white/80 mb-12 max-w-2xl mx-auto">
            מלאו שאלון היכרות קצר, נמצא לכם את השיעור המתאים, 
            ותבואו לנסות. אם תאהבו - נשמח לראות אתכם שוב. 
            אם לא - לא נעלב 💚
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/questionnaire">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white hover:bg-[#FAF7F0] text-[#C99F4A] text-xl font-medium rounded-full shadow-2xl transition-all duration-300"
              >
                מלאו שאלון היכרות
              </motion.button>
            </Link>

            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 border-2 border-white text-white hover:bg-white/10 text-xl font-medium rounded-full transition-all duration-300"
              >
                למדו עלינו עוד
              </motion.button>
            </Link>
          </div>

          <p className="mt-8 text-sm font-light text-white/70">
            יש שאלות? <Link href="/contact" className="text-white hover:text-white/90 underline">צרו איתנו קשר</Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}