'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  const [scrollPercentage, setScrollPercentage] = useState(0)
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollPercentage(Math.round(latest * 100))
    })
    
    return unsubscribe
  }, [scrollYProgress])

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-golden origin-left z-[100] shadow-lg"
        style={{ scaleX }}
      />
      
      {/* Percentage Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: scrollPercentage > 5 ? 1 : 0, scale: scrollPercentage > 5 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          {/* Circular Progress */}
          <svg className="w-16 h-16 transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-golden/20"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-golden"
              strokeLinecap="round"
              style={{
                pathLength: scaleX,
                strokeDasharray: "176",
                strokeDashoffset: 0,
              }}
            />
          </svg>
          
          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-golden font-light text-sm">{scrollPercentage}%</span>
          </div>
        </div>
        
        {/* Scroll to top button */}
        <motion.button
          className="mt-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg className="w-5 h-5 text-golden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      </motion.div>
      
      {/* Section Dots Navigator */}
      <motion.div
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <nav className="flex flex-col gap-4">
          {['hero', 'story', 'philosophy', 'benefits', 'classes', 'community', 'contact'].map((section, i) => (
            <motion.button
              key={section}
              className="group relative p-2"
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                const element = document.getElementById(section)
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + (i * 0.1) }}
            >
              <div className="w-2 h-2 rounded-full bg-golden/30 group-hover:bg-golden transition-colors duration-300" />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs text-golden opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {section === 'hero' && 'בית'}
                {section === 'story' && 'הסיפור'}
                {section === 'philosophy' && 'פילוסופיה'}
                {section === 'benefits' && 'יתרונות'}
                {section === 'classes' && 'שיעורים'}
                {section === 'community' && 'קהילה'}
                {section === 'contact' && 'צור קשר'}
              </span>
            </motion.button>
          ))}
        </nav>
      </motion.div>
    </>
  )
}