'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const schedule = {
  'ראשון': [
    { time: '08:00', class: 'פילאטיס מכשירים', instructor: 'רונית' },
    { time: '17:00', class: 'יוגה', instructor: 'שלומית' },
    { time: '18:00', class: 'פילאטיס מזרן', instructor: 'דפנה' }
  ],
  'שני': [
    { time: '07:30', class: 'פילאטיס מכשירים', instructor: 'עידן' },
    { time: '16:00', class: 'צ׳יקונג', instructor: 'נועה' },
    { time: '19:00', class: 'פילאטיס מכשירים', instructor: 'כרמית' }
  ],
  'שלישי': [
    { time: '08:00', class: 'פילאטיס מזרן', instructor: 'מור' },
    { time: '17:30', class: 'פילאטיס מכשירים', instructor: 'רונית' },
    { time: '19:00', class: 'יוגה', instructor: 'שלומית' }
  ],
  'רביעי': [
    { time: '07:30', class: 'פילאטיס מכשירים', instructor: 'ריקי' },
    { time: '16:00', class: 'פילאטיס שיקומי', instructor: 'אורית' },
    { time: '18:00', class: 'פילאטיס מזרן', instructor: 'דפנה' }
  ],
  'חמישי': [
    { time: '08:00', class: 'פילאטיס מכשירים', instructor: 'עידן' },
    { time: '17:00', class: 'צ׳יקונג', instructor: 'נועה' },
    { time: '19:00', class: 'פילאטיס מכשירים', instructor: 'כרמית' }
  ],
  'שישי': [
    { time: '08:00', class: 'יוגה', instructor: 'שלומית' },
    { time: '09:00', class: 'פילאטיס מכשירים', instructor: 'רונית' }
  ]
}

export default function ClassSchedule() {
  return (
    <section id="schedule" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#3A3837] mb-4">
            לוח שיעורים
          </h2>
          <p className="text-xl font-light text-[#3A3837]/80 max-w-2xl mx-auto">
            מערכת השעות השבועית שלנו
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <div className="min-w-[768px]">
            <div className="grid grid-cols-7 gap-4">
              {Object.entries(schedule).map(([day, classes], dayIndex) => (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: dayIndex * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-b from-[#FAF7F0] to-white rounded-xl p-4 border border-[#DDB55D]/20"
                >
                  <h3 className="text-lg font-medium text-[#3A3837] mb-4 text-center border-b border-[#DDB55D]/30 pb-2">
                    {day}
                  </h3>
                  
                  <div className="space-y-3">
                    {classes.map((classItem, index) => (
                      <div
                        key={index}
                        className="bg-white/80 rounded-lg p-3 hover:bg-[#E9D692]/30 transition-colors cursor-pointer"
                      >
                        <p className="text-sm font-medium text-[#C99F4A]">
                          {classItem.time}
                        </p>
                        <p className="text-sm text-[#3A3837] font-light">
                          {classItem.class}
                        </p>
                        <p className="text-xs text-[#3A3837]/60 font-light">
                          {classItem.instructor}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
              
              {/* Sunday placeholder for Saturday */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-[#FAF7F0] to-white rounded-xl p-4 border border-[#DDB55D]/20"
              >
                <h3 className="text-lg font-medium text-[#3A3837] mb-4 text-center border-b border-[#DDB55D]/30 pb-2">
                  שבת
                </h3>
                <div className="text-center text-[#3A3837]/60 font-light text-sm py-8">
                  יום מנוחה 🌿
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm font-light text-[#3A3837]/60 mb-4">
            * ייתכנו שינויים במערכת. מומלץ לאשר הגעה מראש
          </p>
          
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#DDB55D] to-[#C99F4A] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              הירשמו לשיעור
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}