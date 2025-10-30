'use client'

import React, { useState, useRef } from 'react'
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

const weekDays = [
  { id: 'sunday', label: 'ראשון' },
  { id: 'monday', label: 'שני' },
  { id: 'tuesday', label: 'שלישי' },
  { id: 'wednesday', label: 'רביעי' },
  { id: 'thursday', label: 'חמישי' },
  { id: 'friday', label: 'שישי' },
  { id: 'saturday', label: 'שבת' }
]

const classSchedule = {
  sunday: [
    { time: "08:00", title: "פילאטיס בוקר", level: "כל הרמות", duration: "50 דק'", instructor: "טל" },
    { time: "10:00", title: "יוגה זרימה", level: "מתחילים", duration: "60 דק'", instructor: "רונית" },
    { time: "18:00", title: "פילאטיס מכשירים", level: "מתקדמים", duration: "50 דק'", instructor: "דפנה" }
  ],
  monday: [
    { time: "07:30", title: "פילאטיס בוקר מוקדם", level: "כל הרמות", duration: "45 דק'", instructor: "עידן" },
    { time: "09:30", title: "פילאטיס לאמהות אחרי לידה", level: "מותאם", duration: "45 דק'", instructor: "טל" },
    { time: "17:00", title: "פילאטיס נוער", level: "נוער", duration: "45 דק'", instructor: "כרמית" },
    { time: "19:00", title: "פילאטיס ערב", level: "מתקדמים", duration: "60 דק'", instructor: "רונית" }
  ],
  tuesday: [
    { time: "08:30", title: "יוגה בוקר", level: "כל הרמות", duration: "60 דק'", instructor: "דפנה" },
    { time: "10:30", title: "פילאטיס גיל הזהב", level: "גיל הזהב", duration: "45 דק'", instructor: "טל" },
    { time: "18:30", title: "פילאטיס מזרן", level: "מתחילים", duration: "50 דק'", instructor: "עידן" }
  ],
  wednesday: [
    { time: "07:00", title: "פילאטיס זריחה", level: "מתקדמים", duration: "50 דק'", instructor: "רונית" },
    { time: "09:00", title: "פילאטיס מכשירים", level: "כל הרמות", duration: "50 דק'", instructor: "כרמית" },
    { time: "16:30", title: "פילאטיס ילדים", level: "ילדים", duration: "40 דק'", instructor: "דפנה" },
    { time: "19:30", title: "יוגה ערב", level: "כל הרמות", duration: "60 דק'", instructor: "טל" }
  ],
  thursday: [
    { time: "08:00", title: "פילאטיס בוקר", level: "כל הרמות", duration: "50 דק'", instructor: "עידן" },
    { time: "10:00", title: "פילאטיס הריון", level: "הריון", duration: "45 דק'", instructor: "טל" },
    { time: "17:30", title: "פילאטיס אחר הצהריים", level: "מתחילים", duration: "50 דק'", instructor: "רונית" },
    { time: "20:00", title: "יוגה רגיעה", level: "כל הרמות", duration: "60 דק'", instructor: "דפנה" }
  ],
  friday: [
    { time: "08:30", title: "פילאטיס שישי בוקר", level: "כל הרמות", duration: "50 דק'", instructor: "כרמית" },
    { time: "10:00", title: "יוגה משפחות", level: "משפחות", duration: "45 דק'", instructor: "טל" }
  ],
  saturday: [
    { time: "09:00", title: "סדנת פילאטיס מיוחדת", level: "כל הרמות", duration: "90 דק'", instructor: "צוות" }
  ]
}

export default function ClassesSectionWithTabs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const [selectedDay, setSelectedDay] = useState('sunday')
  
  return (
    <section 
      ref={containerRef}
      className="relative py-32 md:py-40 bg-gradient-to-b from-[#F5F0E5] to-[#E9D692] border-t-2 border-[#DDB55D]/25"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
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
            <span className="text-golden-dark text-xs tracking-[0.3em] uppercase font-light">מערכת השיעורים</span>
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
          
          <motion.p
            className="text-lg text-shel-text/60 max-w-2xl mx-auto font-light leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
          >
            "פילאטיס הוא לא רק אימון - זו דרך חיים שמחברת בין הגוף, הנפש והרוח"
          </motion.p>

          <motion.p
            className="text-md text-golden-dark font-light italic"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
          >
            - ג'וזף פילאטיס
          </motion.p>
        </motion.div>

        {/* Day Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {weekDays.map((day) => (
            <button
              key={day.id}
              onClick={() => setSelectedDay(day.id)}
              className={`px-6 py-3 rounded-full font-light transition-all duration-300 ${
                selectedDay === day.id
                  ? 'bg-[#DDB55D] text-white shadow-lg scale-105'
                  : 'bg-[#E9D692]/70 text-shel-text hover:bg-[#E9D692] border border-[#DDB55D]/30'
              }`}
            >
              {day.label}
            </button>
          ))}
        </motion.div>

        {/* Classes for Selected Day */}
        <motion.div
          key={selectedDay}
          className="grid gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {classSchedule[selectedDay as keyof typeof classSchedule].map((classItem, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-[#FAF7F0] to-[#E9D692] border border-[#DDB55D]/30 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#DDB55D]/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-2xl font-light text-golden-dark">{classItem.time}</span>
                    <h3 className="text-xl font-medium text-shel-text">{classItem.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-shel-text/70">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-golden rounded-full"></span>
                      {classItem.level}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-golden rounded-full"></span>
                      {classItem.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-golden rounded-full"></span>
                      מדריכה: {classItem.instructor}
                    </span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-[#DDB55D]/15 text-[#C99F4A] rounded-full hover:bg-[#DDB55D] hover:text-white transition-all duration-300 text-sm font-light border border-[#DDB55D]/40">
                  הרשמה לשיעור
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marketing CTA */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-[#DDB55D]/15 to-[#C99F4A]/15 rounded-2xl border border-[#DDB55D]/40"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-xl text-shel-text mb-6 font-light">
            לא בטוחים איזה שיעור מתאים לכם?
          </p>
          <p className="text-lg text-shel-text/70 mb-8 font-light">
            מלאו שאלון קצר ונעזור לכם למצוא את השיעור המושלם בהתאם ליכולות, למטרות ולזמנים שלכם
          </p>
          <motion.button
            className="group relative px-12 py-4 overflow-hidden bg-[#DDB55D] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 font-light tracking-wider flex items-center gap-3">
              מצאו את השיעור המתאים לכם
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