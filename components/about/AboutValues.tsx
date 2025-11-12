'use client'

import { motion } from 'framer-motion'

const values = [
  {
    number: '01',
    title: 'נשימה קודם כל',
    description: 'כל תנועה מתחילה ונגמרת בנשימה. זו המנועה שלנו, המקור לכוח ולשקט.'
  },
  {
    number: '02',
    title: 'התמדה על פני שלמות',
    description: 'אנחנו לא מחפשים שלמות, אנחנו מחפשים להופיע, להתאמן, לצמוח.'
  },
  {
    number: '03',
    title: 'קהילה לא תחרות',
    description: 'כאן כולם עובדים יחד. אין מקום לתחרות, רק לתמיכה ולעידוד.'
  },
  {
    number: '04',
    title: 'הקשבה לגוף',
    description: 'הגוף שלכם הוא המורה הכי טוב. אנחנו כאן כדי לעזור לכם להקשיב לו.'
  }
]

export default function AboutValues() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#FAF7F0] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base font-light text-[#C99F4A] tracking-widest uppercase mb-4">
            הערכים שלנו
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3A3837]">
            במה אנחנו מאמינים
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {values.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex gap-6">
                <span className="text-6xl md:text-7xl font-light text-[#DDB55D]/30 leading-none">
                  {value.number}
                </span>
                
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl md:text-3xl font-medium text-[#3A3837] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-lg md:text-xl font-light text-[#3A3837]/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}