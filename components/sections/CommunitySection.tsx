'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
// Use actual photos from Pics folder
const communityImages = [
  '/images/Pics 1/A70A8464.JPG',
  '/images/Pics 1/A70A8465.JPG',
  '/images/Pics 1/A70A8470.JPG',
  '/images/Pics 1/A70A8478.JPG',
  '/images/Pics 1/A70A8481.JPG',
  '/images/Pics 1/A70A8492.JPG',
  '/images/Pics 1/A70A8497.JPG',
  '/images/Pics 1/A70A8501.JPG',
  '/images/Pics 1/A70A8506.JPG'
]

export default function CommunitySection() {
  const title = "הקהילה שלנו"
  const paragraphs = [
    "הבית הירוק הוא לא רק סטודיו – הוא בית אמיתי. במשך עשרים שנה צמחה כאן קהילה של אנשים שמגיעים לתרגל, ומגלים שהם נשארים גם בשביל הלב.",
    "יש כאן מקום לכל אחד – נשים וגברים, צעירים וגיל הזהב, מתחילים ומנוסים. כולם עובדים זה לצד זה, באווירה חמה, מקצועית ולא תחרותית.",
    "זהו הלב של הבית הירוק – קהילה נושמת, מחבקת, שמבינה שתנועה היא לא רק תרגול, היא דרך להיות בחיים."
  ]

  // Community images are defined above

  return (
    <section className="py-32 md:py-40 bg-gradient-to-b from-[#F5F0E5] to-[#E9D692]">
      <div className="container mx-auto px-4">
        
        {/* Text Content - Single Column */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-green-dark mb-12">
            {title}
          </h2>
          
          <div className="space-y-8">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-xl font-light text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.2 + (index * 0.1)
                }}
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Image Gallery - Multiple Rows */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {communityImages.map((imageSrc, index) => (
            <motion.div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg border-2 border-[#DDB55D]/30 hover:border-[#DDB55D]/60 transition-all duration-300 shadow-lg hover:shadow-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 0.4 + (index * 0.1)
              }}
              viewport={{ once: true }}
            >
              <Image
                src={imageSrc}
                alt={`קהילת הבית הירוק ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Green border on hover */}
              <div className="absolute inset-0 border-4 border-green-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              {/* Subtle green overlay on hover */}
              <div className="absolute inset-0 bg-green-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}