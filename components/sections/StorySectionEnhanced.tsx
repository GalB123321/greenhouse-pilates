'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
// Use actual photos from Pics folder
const studioImages = [
  '/images/Pics 1/A70A8260.JPG',
  '/images/Pics 1/A70A8297.JPG',
  '/images/Pics 1/A70A8331.JPG',
  '/images/Pics 1/A70A8364.JPG',
  '/images/Pics 1/A70A8373.JPG'
]

export default function StorySectionEnhanced() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  
  const text = `
    ברוכים הבאים לבית הירוק, המקום שבו תנועה פוגשת נשימה, 
    ונשימה פוגשת את הנשמה. כאן, בלב אביחיל, יצרנו מרחב שהוא יותר מסתם סטודיו - 
    זהו בית עבור כל מי שמחפש להתחבר מחדש לגוף שלו, לנשימה שלו, ולעצמו.
  `
  
  // Removed statistics section for cleaner design
  
  return (
    <section 
      ref={containerRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-[#DDB55D] to-[#E9D692] border-t-2 border-b-2 border-[#DDB55D]/30"
    >
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DDB962' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div 
            style={{ opacity }}
            className="space-y-8"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-3"
            >
              <div className="w-12 h-[1px] bg-golden" />
              <span className="text-golden text-sm tracking-widest uppercase">הסיפור שלנו</span>
            </motion.div>
            
            {/* Main Title with Split Animation */}
            <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              {["נוצר", "מתוך", "אהבה", "לתנועה"].map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-3"
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    y: 0,
                    rotateX: 0
                  } : {}}
                  transition={{ 
                    delay: i * 0.1,
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            
            {/* Story Text with Typewriter */}
            <motion.p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {text.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 + (i * 0.01) }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
            
            {/* Philosophy Quote */}
            <motion.div 
              className="pt-8 border-r-4 border-golden/30 pr-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <p className="text-lg italic text-gray-600 leading-relaxed">
                "התנועה היא לא רק אימון - היא דרך חיים, פילוסופיה של חיבור בין הגוף, הנפש והרוח."
              </p>
              <p className="text-sm text-golden-dark mt-4 font-light">
                רונית ליבנת, מייסדת הבית הירוק
              </p>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <button className="group relative px-8 py-4 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-golden to-golden-dark transition-transform duration-300 group-hover:scale-105" />
                <span className="relative z-10 text-white font-light tracking-wide flex items-center gap-3">
                  קראו עוד על המסע שלנו
                  <motion.span
                    animate={{ x: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ←
                  </motion.span>
                </span>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Images Grid */}
          <motion.div 
            style={{ scale }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <motion.div
                className="col-span-2 relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={studioImages[0]}
                  alt="הסטודיו שלנו"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <motion.div
                  className="absolute bottom-6 left-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-xl font-light">הסטודיו שלנו</p>
                  <p className="text-sm opacity-80">מרחב של שקט ותנועה</p>
                </motion.div>
              </motion.div>
              
              {/* Small Image 1 */}
              <motion.div
                className="relative h-48 md:h-64 rounded-3xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <Image
                  src={studioImages[1]}
                  alt="הקהילה שלנו"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-golden/50 to-transparent mix-blend-multiply" />
              </motion.div>
              
              {/* Small Image 2 */}
              <motion.div
                className="relative h-48 md:h-64 rounded-3xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <Image
                  src={studioImages[2]}
                  alt="שיעור פילאטיס"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-golden-dark/50 to-transparent mix-blend-multiply" />
              </motion.div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-10 -right-10 w-32 h-32 bg-golden/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-golden-dark/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}