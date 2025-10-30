'use client'

import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const benefits = [
  {
    icon: "🧘‍♀️",
    title: "גמישות מוגברת",
    description: "שיפור טווח התנועה והגמישות הכללית של הגוף",
    color: "from-purple-400 to-pink-400",
    delay: 0.1
  },
  {
    icon: "💪",
    title: "חיזוק השרירים",
    description: "בניית כוח פונקציונלי ושרירי ליבה חזקים",
    color: "from-blue-400 to-cyan-400",
    delay: 0.2
  },
  {
    icon: "🌟",
    title: "יציבה משופרת",
    description: "תיקון יציבה והפחתת כאבי גב וצוואר",
    color: "from-green-400 to-emerald-400",
    delay: 0.3
  },
  {
    icon: "🧠",
    title: "מיקוד מנטלי",
    description: "שיפור הריכוז והקשר בין הגוף והנפש",
    color: "from-yellow-400 to-orange-400",
    delay: 0.4
  },
  {
    icon: "⚡",
    title: "אנרגיה מחודשת",
    description: "הגברת רמות האנרגיה והחיוניות היומיומית",
    color: "from-red-400 to-pink-400",
    delay: 0.5
  },
  {
    icon: "🌊",
    title: "הפחתת סטרס",
    description: "שחרור מתחים ורגיעה עמוקה של הגוף והנפש",
    color: "from-indigo-400 to-purple-400",
    delay: 0.6
  }
]

export default function BenefitsSectionEnhanced() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  
  return (
    <section 
      ref={containerRef}
      className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-cream via-white to-sand-light overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 -left-20 w-96 h-96 bg-golden/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 -right-20 w-96 h-96 bg-golden-dark/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block text-golden text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
          >
            היתרונות שלנו
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            {["למה", "פילאטיס", "ישנה", "את", "חייך"].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mx-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + (i * 0.1) }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            גלו את השינוי המדהים שפילאטיס יכול להביא לגוף ולנפש שלכם
          </motion.p>
        </motion.div>
        
        {/* Benefits Grid with 3D Cards */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ y }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                rotateX: 0
              } : {}}
              transition={{ 
                delay: benefit.delay,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              className="group relative perspective-1000"
            >
              <div className="relative h-full p-8 bg-white rounded-3xl shadow-lg overflow-hidden transform-gpu transition-all duration-500 group-hover:shadow-2xl">
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Animated Icon */}
                <motion.div
                  className="text-5xl mb-4"
                  animate={{
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  {benefit.icon}
                </motion.div>
                
                {/* Title */}
                <h3 className="text-2xl font-medium text-gray-900 mb-3 group-hover:text-golden-dark transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Learn More Link */}
                <motion.div
                  className="mt-6 inline-flex items-center text-golden group-hover:text-golden-dark transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ x: -5 }}
                >
                  <span className="text-sm font-medium">למידע נוסף</span>
                  <span className="mr-2">←</span>
                </motion.div>
                
                {/* Corner Decoration */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 opacity-20"
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1, rotate: 90 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${benefit.color} rounded-bl-full`} />
                </motion.div>
                
                {/* Bottom Wave */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-2"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`h-full bg-gradient-to-r ${benefit.color}`} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            className="relative group px-12 py-5 text-lg font-light overflow-hidden rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-golden via-golden-dark to-golden bg-size-200"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Button Text */}
            <span className="relative z-10 text-white flex items-center gap-3">
              התחילו את המסע שלכם
              <motion.span
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ←
              </motion.span>
            </span>
            
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              animate={{
                x: ["-200%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}