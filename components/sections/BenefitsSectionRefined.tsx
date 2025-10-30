'use client'

import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "גמישות מוגברת",
    description: "שיפור טווח התנועה והגמישות הכללית של הגוף",
    gradient: "from-stone-50 to-stone-100",
    delay: 0.1
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "חיזוק השרירים",
    description: "בניית כוח פונקציונלי ושרירי ליבה חזקים",
    gradient: "from-neutral-50 to-neutral-100",
    delay: 0.2
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "יציבה משופרת",
    description: "תיקון יציבה והפחתת כאבי גב וצוואר",
    gradient: "from-zinc-50 to-zinc-100",
    delay: 0.3
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "מיקוד מנטלי",
    description: "שיפור הריכוז והקשר בין הגוף והנפש",
    gradient: "from-gray-50 to-gray-100",
    delay: 0.4
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "אנרגיה מחודשת",
    description: "הגברת רמות האנרגיה והחיוניות היומיומית",
    gradient: "from-amber-50 to-amber-100",
    delay: 0.5
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "הפחתת מתח",
    description: "שחרור מתחים ורגיעה עמוקה של הגוף והנפש",
    gradient: "from-sand-light to-sand",
    delay: 0.6
  }
]

export default function BenefitsSectionRefined() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])
  
  return (
    <section 
      ref={containerRef}
      className="relative py-32 md:py-40 bg-gradient-to-b from-[#E9D692] to-[#DDB55D]"
    >
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header - Refined Typography */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-extralight text-shel-text mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 1 }}
          >
            השינוי מתחיל
            <span className="block text-golden-dark mt-2">מהתנועה הראשונה</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-shel-text/60 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
          >
            גישה הוליסטית המשלבת כוח, גמישות ומודעות
          </motion.p>
        </motion.div>
        
        {/* Benefits Grid - Sophisticated Cards */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ y }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0
              } : {}}
              transition={{ 
                delay: benefit.delay,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-[#F5F0E5] to-[#E9D692] border-2 border-[#DDB55D]/30 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#DDB55D]/50">
                {/* Subtle gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Icon container */}
                <div className="relative z-10 mb-6">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-golden-dark/5 flex items-center justify-center text-golden-dark group-hover:bg-golden-dark/10 transition-colors duration-500"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {benefit.icon}
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-light text-shel-text mb-3 group-hover:text-golden-dark transition-colors duration-500">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-shel-text/60 font-light leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                  
                  {/* Refined hover indicator */}
                  <motion.div
                    className="mt-6 flex items-center text-golden-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: -10 }}
                    whileHover={{ x: -5 }}
                  >
                    <span className="text-xs tracking-wider font-light">למידע נוסף</span>
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
                
                {/* Elegant bottom border animation */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-golden-dark"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Marketing CTA */}
        <motion.div
          className="text-center mt-20 p-10 bg-gradient-to-r from-[#DDB55D]/10 to-[#C99F4A]/10 rounded-2xl border border-[#DDB55D]/30"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-xl text-shel-text mb-4 font-light">
            מוכנים לחוות את השינוי?
          </p>
          <p className="text-lg text-shel-text/60 mb-8 font-light max-w-2xl mx-auto">
            בואו נמצא ביחד את סוג האימון שיתאים בדיוק לצרכים שלכם, לגוף שלכם ולמטרות שלכם
          </p>
          <motion.button
            className="group relative px-12 py-4 overflow-hidden bg-[#DDB55D] text-white rounded-full shadow-lg hover:shadow-xl border border-[#C99F4A]/30 transition-all duration-500 hover:border-[#C99F4A]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 text-white font-light tracking-wider flex items-center gap-3">
              מצאו את הדרך שלכם לתנועה
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ x: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}