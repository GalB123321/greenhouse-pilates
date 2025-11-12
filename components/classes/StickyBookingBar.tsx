'use client'

import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      // Show bar after scrolling 500px
      setIsVisible(latest > 500)
    })
  }, [scrollY])

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-[#DDB55D]/30 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Text */}
        <div className="text-center sm:text-right">
          <p className="text-lg font-medium text-[#3A3837]">
            מוכנים להתחיל?
          </p>
          <p className="text-sm font-light text-[#3A3837]/60">
            מצאו את השיעור המושלם עבורכם 🎯
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link href="/questionnaire">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#DDB55D] to-[#C99F4A] hover:from-[#C99F4A] hover:to-[#DDB55D] text-white font-medium rounded-full transition-all duration-300 shadow-lg"
            >
              מלאו שאלון
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#DDB55D] text-[#C99F4A] hover:bg-[#DDB55D] hover:text-white font-medium rounded-full transition-all duration-300"
            >
              צרו קשר
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}