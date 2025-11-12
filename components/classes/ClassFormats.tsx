'use client'

import { motion } from 'framer-motion'

const formats = [
  {
    title: 'שיעור קבוצתי',
    size: '6-8 משתתפים',
    description: 'קבוצות קטנות ואינטימיות שמאפשרות יחס אישי ותיקונים מדויקים',
    benefits: ['אווירה חברתית', 'מחיר נוח', 'מוטיבציה הדדית'],
    icon: '👥'
  },
  {
    title: 'שיעור פרטי',
    size: '1:1',
    description: 'תשומת לב מלאה, תוכנית אישית והתקדמות מהירה',
    benefits: ['התאמה מושלמת', 'קצב אישי', 'פרטיות מלאה'],
    icon: '🎯'
  },
  {
    title: 'דואט',
    size: '2 משתתפים',
    description: 'המיטב משני העולמות - יחס אישי עם חבר/ה לאימון',
    benefits: ['חצי מחיר פרטי', 'מוטיבציה משותפת', 'גמישות'],
    icon: '👫'
  }
]

export default function ClassFormats() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#F5F0E5] to-[#E9D692]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#3A3837] mb-4">
            פורמטים של שיעורים
          </h2>
          <p className="text-xl font-light text-[#3A3837]/80 max-w-2xl mx-auto">
            בחרו את הפורמט שמתאים לכם
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formats.map((format, index) => (
            <motion.div
              key={format.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#DDB55D]/30"
            >
              <div className="text-5xl mb-4">{format.icon}</div>
              
              <h3 className="text-2xl font-medium text-[#3A3837] mb-2">
                {format.title}
              </h3>
              
              <p className="text-sm font-light text-[#C99F4A] mb-4">
                {format.size}
              </p>
              
              <p className="text-base font-light text-[#3A3837]/80 mb-6 leading-relaxed">
                {format.description}
              </p>

              <ul className="space-y-2">
                {format.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-2 text-sm font-light text-[#3A3837]/70"
                  >
                    <span className="text-[#DDB55D]">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}