'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroCTASection() {
  return (
    <section className="py-16 md:py-20 bg-[#E9D692] border-y-2 border-[#DDB55D]/30">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            איזה סוג אימון מתאים לי?
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-light">
            גלו את השיטה המושלמת עבורכם - מותאמת אישית לגוף, לנפש ולמטרות שלכם
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/questionnaire"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-light bg-[#DDB55D] text-white rounded-full hover:bg-[#C99F4A] transition-all duration-300 shadow-lg hover:shadow-xl border border-[#C99F4A]/20"
            >
              גלו מה מתאים לי
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-light border-2 border-[#DDB55D] text-[#C99F4A] rounded-full hover:bg-[#DDB55D]/10 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              רוצה לשמוע עוד
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}