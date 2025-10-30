'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
// Use actual photos from Pics folder
const instructorImages = [
  '/images/Pics 1/A70A8545.JPG',
  '/images/Pics 1/A70A8550.JPG',
  '/images/Pics 1/A70A8552.JPG',
  '/images/Pics 1/A70A8555.JPG'
]

interface Instructor {
  id: number
  name: string
  role: string
  bio: string
  image: string
}

export default function InstructorsSection() {
  const sectionTitle = "המדריכות שלנו"
  const introText = "צוות של מדריכות מנוסות, חמות ומקצועיות. כל אחת עם הגישה שלה, כולן עם אותה אהבה לתנועה ולקהילה שלנו."

  const instructors: Instructor[] = [
    {
      id: 1,
      name: "רונית ליבנת",
      role: "מייסדת ומדריכה ראשית",
      bio: "20 שנה של אהבה לתנועה",
      image: instructorImages[0]
    },
    {
      id: 2,
      name: "דפנה לוי",
      role: "מדריכת פילאטיס",
      bio: "מתמחה בפילאטיס שיקומי",
      image: instructorImages[1]
    },
    {
      id: 3,
      name: "עידן ריישר שקד",
      role: "מדריכת פילאטיס",
      bio: "אנרגיה, דיוק וחיוך",
      image: instructorImages[2]
    },
    {
      id: 4,
      name: "כרמית שחר",
      role: "מדריכת פילאטיס",
      bio: "מתמחה בעבודה עם ספורטאים",
      image: instructorImages[3]
    }
  ]

  return (
    <section className="py-32 md:py-40 bg-gradient-to-b from-[#DDB55D] to-[#C99F4A]">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black mb-8">
            {sectionTitle}
          </h2>
          <p className="text-xl font-light text-black/80 max-w-3xl mx-auto">
            {introText}
          </p>
        </motion.div>

        {/* Instructors Grid - Cleaner, More Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Card Container */}
              <div className="bg-gradient-to-br from-[#FAF7F0] to-[#E9D692] border-2 border-[#DDB55D]/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#DDB55D]/50 transition-all duration-300">
                {/* Image */}
                <div className="aspect-[2/3] relative overflow-hidden">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                
                {/* Content - Minimal */}
                <div className="text-center p-6">
                  <h3 className="text-2xl font-light text-green-dark mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                    {instructor.role}
                  </p>
                  <p className="text-base font-light text-gray-600">
                    {instructor.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Minimal */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/about"
            className="inline-flex items-center text-black hover:text-black/60 transition-colors duration-300 font-light text-lg"
          >
            הכירו את כל הצוות
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-6 h-6 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}