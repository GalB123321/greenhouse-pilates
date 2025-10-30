'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
// Use actual photos from Pics folder
const classImages = [
  '/images/Pics 1/A70A8470.JPG',
  '/images/Pics 1/A70A8481.JPG',
  '/images/Pics 1/A70A8492.JPG',
  '/images/Pics 1/A70A8501.JPG',
  '/images/Pics 1/A70A8513.JPG',
  '/images/Pics 1/A70A8520.JPG'
]

const classes = [
  {
    id: 1,
    title: "פילאטיס מכשירים",
    level: "כל הרמות",
    duration: "50 דקות",
    description: "אימון על מכשירי פילאטיס מקצועיים לחיזוק ועיצוב הגוף",
    image: classImages[0],
    spots: 6,
    time: "09:00"
  },
  {
    id: 2,
    title: "פילאטיס מזרן",
    level: "מתחילים",
    duration: "45 דקות",
    description: "תרגילי פילאטיס קלאסיים על מזרן לחיזוק שרירי הליבה",
    image: classImages[1],
    spots: 12,
    time: "10:00"
  },
  {
    id: 3,
    title: "יוגה ויניאסה",
    level: "מתקדמים",
    duration: "60 דקות",
    description: "זרימה דינמית המשלבת נשימה ותנועה",
    image: classImages[2],
    spots: 15,
    time: "18:00"
  },
  {
    id: 4,
    title: "פילאטיס בהריון",
    level: "מותאם",
    duration: "45 דקות",
    description: "אימון בטוח ומותאם לנשים בהריון",
    image: classImages[3],
    spots: 8,
    time: "11:00"
  },
  {
    id: 5,
    title: "שיקום ופיזיותרפיה",
    level: "אישי",
    duration: "30 דקות",
    description: "תרגילים ממוקדים לשיקום ומניעת פציעות",
    image: classImages[4],
    spots: 1,
    time: "לפי תיאום"
  }
]

export default function ClassesSectionRefined() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const [selectedClass, setSelectedClass] = useState(0)
  
  return (
    <section 
      ref={containerRef}
      className="relative py-32 md:py-40 bg-warm-white"
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.01]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-8 mb-8"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: "auto", opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-golden-dark/30" />
            <span className="text-golden-dark text-xs tracking-[0.3em] uppercase font-light">השיעורים</span>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-golden-dark/30" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-extralight text-shel-text mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 1 }}
          >
            מצאו את השיעור
            <span className="block text-golden-dark mt-2">המושלם עבורכם</span>
          </motion.h2>
        </motion.div>
        
        {/* Main Content - Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Class List */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {classes.map((classItem, index) => (
              <motion.div
                key={classItem.id}
                className={`p-6 border transition-all duration-500 cursor-pointer ${
                  selectedClass === index 
                    ? 'bg-gradient-to-r from-cream to-warm-white border-2 border-golden shadow-xl' 
                    : 'bg-cream/70 border border-golden-dark/20 hover:bg-cream hover:border-golden-dark/40'
                }`}
                onClick={() => setSelectedClass(index)}
                whileHover={{ x: 4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-light text-shel-text mb-2">
                      {classItem.title}
                    </h3>
                    <p className="text-sm text-shel-text/60 font-light mb-3">
                      {classItem.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-shel-text/50">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {classItem.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {classItem.spots} מקומות
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-golden-dark font-light tracking-wider uppercase mb-1">
                      {classItem.level}
                    </div>
                    <div className="text-sm text-shel-text/70 font-light">
                      {classItem.time}
                    </div>
                  </div>
                </div>
                
                {/* Selection indicator */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-golden-dark"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: selectedClass === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Selected Class Detail */}
          <motion.div
            className="sticky top-24"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              key={selectedClass}
              className="bg-gradient-to-br from-warm-white to-cream border-2 border-golden/30 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Image */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={classes[selectedClass].image}
                  alt={classes[selectedClass].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Class Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-light mb-2">
                    {classes[selectedClass].title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm font-light">
                    <span>{classes[selectedClass].time}</span>
                    <span>•</span>
                    <span>{classes[selectedClass].duration}</span>
                    <span>•</span>
                    <span>{classes[selectedClass].level}</span>
                  </div>
                </div>
              </div>
              
              {/* Details */}
              <div className="p-8">
                <p className="text-shel-text/70 font-light mb-6 leading-relaxed">
                  {classes[selectedClass].description}
                </p>
                
                {/* Spots Available Indicator */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-shel-text/50 font-light">מקומות פנויים</span>
                    <span className="text-xs text-golden-dark">{classes[selectedClass].spots} מתוך 15</span>
                  </div>
                  <div className="h-1 bg-golden-dark/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-golden to-golden-dark"
                      initial={{ width: 0 }}
                      animate={{ width: `${(classes[selectedClass].spots / 15) * 100}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
                
                {/* CTA Button */}
                <motion.button
                  className="group relative w-full px-8 py-4 overflow-hidden border border-golden-dark/30 transition-all duration-500 hover:border-golden-dark"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-golden-dark"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                  
                  <span className="relative z-10 text-shel-text group-hover:text-white transition-colors duration-500 font-light tracking-wider flex items-center justify-center gap-3">
                    הרשמה לשיעור
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* View Schedule CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            className="group relative px-10 py-3 text-sm font-light text-shel-text/70 border-b border-golden-dark/30 transition-all duration-500 hover:border-golden-dark hover:text-golden-dark"
            whileHover={{ y: -2 }}
          >
            צפו במערכת השעות המלאה
            <motion.span
              className="inline-block mr-2"
              animate={{ x: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ←
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}