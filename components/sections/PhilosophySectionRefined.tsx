'use client'

import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function PhilosophySectionRefined() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5])
  
  return (
    <section 
      ref={containerRef}
      className="relative py-20 md:py-28 bg-gradient-to-b from-[#FAF7F0] to-[#F5F0E5] overflow-hidden"
    >
      <motion.div 
        className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 relative z-10"
        style={{ opacity }}
      >
        {/* Simple Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#3A3837] mb-6">
            הגישה שלנו
          </h2>
        </motion.div>

        {/* Main Content - Simple and Clean */}
        <div className="max-w-4xl mx-auto">
          {/* Central Philosophy */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-[#3A3837]/80 font-light leading-relaxed mb-8">
              בהבית הירוק, אנחנו מאמינים שכל גוף מספר סיפור ייחודי. 
              התנועה היא השפה שבה אנחנו מקשיבים לסיפור הזה ועוזרים לו להתפתח.
            </p>
            
            <p className="text-lg md:text-xl text-[#3A3837]/70 font-light leading-relaxed">
              אנחנו לא רק מלמדים תרגילים - אנחנו מלווים אתכם במסע אישי 
              לגילוי הכוח, הגמישות והשקט הפנימי שכבר קיימים בכם.
            </p>
          </motion.div>

          {/* Three Pillars - Simple Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤸‍♀️</div>
              <h3 className="text-xl font-medium text-[#3A3837] mb-3">
                גוף חזק ומאוזן
              </h3>
              <p className="text-[#3A3837]/60 font-light">
                בניית כוח פנימי שתומך בכם בכל רגע ביום
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🧘‍♀️</div>
              <h3 className="text-xl font-medium text-[#3A3837] mb-3">
                נפש רגועה
              </h3>
              <p className="text-[#3A3837]/60 font-light">
                מרחב של שקט ונשימה בתוך חיי היומיום
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-medium text-[#3A3837] mb-3">
                קהילה תומכת
              </h3>
              <p className="text-[#3A3837]/60 font-light">
                מקום בטוח לצמוח ולהתפתח יחד
              </p>
            </div>
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="text-2xl md:text-3xl font-extralight text-[#C99F4A] italic">
              "התנועה מתחילה מבפנים"
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}