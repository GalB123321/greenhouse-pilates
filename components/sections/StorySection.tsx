'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { defaultImages } from '@/lib/images'

export default function StorySection() {
  const tag = "OUR STORY"
  const title = "הסיפור שלנו"
  const pullQuote = "תנועה שמדברת בשפה אחרת, מדויקת, קשובה, מלאה שכל ורגש"
  const paragraphs = [
    {
      text: "הכול התחיל מאהבה גדולה לתנועה. עוד לפני שהכרתי את המילה 'פילאטיס', הגוף שלי כבר חיפש איזון. הייתי ילדה שאוהבת לזוז, לרקוד, לרוץ על החול ולחקור את הגבולות של הכוח והקלילות.",
      isIntro: true
    },
    {
      text: "שנים אחר כך, כשנכנסתי במקרה לסטודיו פילאטיס בתל אביב, משהו בי נדלק. זה היה רגע של בהירות – תנועה שמדברת בשפה אחרת, מדויקת, קשובה, מלאה שכל ורגש.",
      isIntro: false
    },
    {
      text: "כך נולד הבית הירוק – מתוך בית ילדותי, בין שדות אביחיל, מתוך רצון אחד פשוט: להביא תנועה, נשימה ויציבות לחיים של אנשים.",
      isIntro: false
    }
  ]

  return (
    <section id="story-section" className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-20 items-center">
          
          {/* Image with better treatment */}
          <motion.div 
            className="order-1 lg:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative h-[400px] md:h-[500px] lg:h-[700px] w-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={defaultImages.story}
                alt="רונית - מייסדת הבית הירוק"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
          
          {/* Text Content with better hierarchy */}
          <motion.div 
            className="order-2 lg:order-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Section Tag */}
            <motion.p
              className="text-sm tracking-[0.3em] uppercase text-green-light font-light mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {tag}
            </motion.p>
            
            {/* Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-green-dark mb-12 leading-[0.95]">
              {title}
            </h2>
            
            {/* Pull Quote with decorative quotes */}
            <motion.blockquote
              className="relative mb-12 py-8 border-r-2 border-green-light pr-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute -top-4 right-0 text-8xl text-green-pale opacity-50 font-serif leading-none">"</span>
              <p className="text-2xl md:text-3xl font-light text-green-primary leading-relaxed italic">
                {pullQuote}
              </p>
            </motion.blockquote>
            
            {/* Paragraphs with better spacing */}
            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className={`font-light text-gray-700 leading-loose ${
                    paragraph.isIntro ? 'text-xl' : 'text-lg'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.3 + (index * 0.1),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  viewport={{ once: true }}
                >
                  {paragraph.text}
                </motion.p>
              ))}
            </div>
            
            {/* Read More Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-green-dark hover:text-green-primary transition-all duration-300 text-lg font-light"
              >
                <span className="relative">
                  קראו עוד
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-primary transition-all duration-300 group-hover:w-full" />
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}