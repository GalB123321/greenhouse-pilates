'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { defaultImages } from '@/lib/images'

const classes = [
  {
    id: 1,
    title: "פילאטיס מכשירים",
    level: "כל הרמות",
    duration: "50 דקות",
    description: "אימון על מכשירי פילאטיס מקצועיים לחיזוק ועיצוב הגוף",
    image: defaultImages.reformer,
    color: "from-purple-500 to-pink-500",
    spots: 6,
    time: "09:00"
  },
  {
    id: 2,
    title: "פילאטיס מזרן",
    level: "מתחילים",
    duration: "45 דקות",
    description: "תרגילי פילאטיס קלאסיים על מזרן לחיזוק שרירי הליבה",
    image: defaultImages.matClass,
    color: "from-blue-500 to-cyan-500",
    spots: 12,
    time: "10:00"
  },
  {
    id: 3,
    title: "יוגה ויניאסה",
    level: "מתקדמים",
    duration: "60 דקות",
    description: "זרימה דינמית המשלבת נשימה ותנועה",
    image: defaultImages.yoga,
    color: "from-green-500 to-emerald-500",
    spots: 15,
    time: "18:00"
  },
  {
    id: 4,
    title: "פילאטיס בהריון",
    level: "מותאם",
    duration: "45 דקות",
    description: "אימון בטוח ומותאם לנשים בהריון",
    image: defaultImages.pregnancy,
    color: "from-pink-500 to-rose-500",
    spots: 8,
    time: "11:00"
  },
  {
    id: 5,
    title: "שיקום ופיזיותרפיה",
    level: "אישי",
    duration: "30 דקות",
    description: "תרגילים ממוקדים לשיקום ומניעת פציעות",
    image: defaultImages.rehab,
    color: "from-orange-500 to-red-500",
    spots: 1,
    time: "לפי תיאום"
  }
]

export default function ClassesSectionEnhanced() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const [activeClass, setActiveClass] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  return (
    <section 
      ref={containerRef}
      className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white via-cream to-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: [
              "radial-gradient(circle at 20% 50%, rgba(221, 185, 98, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(221, 185, 98, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(221, 185, 98, 0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 10,
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
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="w-12 h-[1px] bg-golden" />
            <span className="text-golden text-sm tracking-widest uppercase">השיעורים שלנו</span>
            <div className="w-12 h-[1px] bg-golden" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              מגוון שיעורים
            </motion.span>
            <br />
            <motion.span
              className="text-golden-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              לכל רמה ומטרה
            </motion.span>
          </h2>
        </motion.div>
        
        {/* 3D Carousel */}
        <div className="relative h-[600px] mb-16">
          <AnimatePresence mode="wait">
            {classes.map((classItem, index) => {
              const isActive = index === activeClass
              const offset = index - activeClass
              
              return (
                <motion.div
                  key={classItem.id}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{
                    opacity: Math.abs(offset) <= 1 ? 1 : 0,
                    scale: isActive ? 1 : 0.85,
                    x: offset * 320,
                    z: isActive ? 50 : -Math.abs(offset) * 100,
                    rotateY: offset * -15,
                  }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ 
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    perspective: 1000,
                    pointerEvents: Math.abs(offset) <= 1 ? 'auto' : 'none'
                  }}
                >
                  <motion.div
                    className="relative w-[300px] h-[450px] cursor-pointer"
                    whileHover={{ scale: 1.05, rotateY: 0 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    onClick={() => setActiveClass(index)}
                  >
                    {/* Card */}
                    <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden">
                      {/* Image */}
                      <div className="relative h-1/2 overflow-hidden">
                        <Image
                          src={classItem.image}
                          alt={classItem.title}
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${classItem.color} opacity-60 mix-blend-multiply`} />
                        
                        {/* Level Badge */}
                        <motion.div
                          className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <span className="text-xs font-medium text-gray-700">
                            {classItem.level}
                          </span>
                        </motion.div>
                        
                        {/* Time & Duration */}
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-sm opacity-90">{classItem.time}</p>
                          <p className="text-xs opacity-75">{classItem.duration}</p>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-2xl font-medium text-gray-900 mb-3">
                          {classItem.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {classItem.description}
                        </p>
                        
                        {/* Spots Available */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                              {[...Array(Math.min(classItem.spots, 5))].map((_, i) => (
                                <div
                                  key={i}
                                  className="w-8 h-8 rounded-full bg-gradient-to-br from-golden to-golden-dark flex items-center justify-center text-white text-xs font-medium"
                                  style={{ zIndex: 5 - i }}
                                >
                                  {i === 4 && classItem.spots > 5 ? `+${classItem.spots - 4}` : ''}
                                </div>
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">
                              {classItem.spots} מקומות פנויים
                            </span>
                          </div>
                        </div>
                        
                        {/* CTA Button */}
                        <motion.button
                          className="w-full py-3 rounded-full bg-gradient-to-r from-golden to-golden-dark text-white font-light"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          הרשמה לשיעור
                        </motion.button>
                      </div>
                      
                      {/* Hover Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center gap-3">
          {classes.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeClass 
                  ? 'w-8 bg-golden' 
                  : 'bg-golden/30 hover:bg-golden/50'
              }`}
              whileHover={{ scale: 1.2 }}
              onClick={() => setActiveClass(index)}
            />
          ))}
        </div>
        
        {/* View All Classes Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            className="group relative px-10 py-4 overflow-hidden rounded-full border-2 border-golden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-golden"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 text-golden group-hover:text-white transition-colors font-light flex items-center gap-3">
              צפו בכל השיעורים
              <span>←</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}