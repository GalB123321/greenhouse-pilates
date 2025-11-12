'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'לפני השיעור',
    items: [
      'הגיעו 10 דקות לפני - נרשום אתכם ונסביר',
      'לבשו בגדים נוחים שמאפשרים תנועה',
      'אין צורך בנעליים - עובדים יחפים או בגרביים',
      'הביאו בקבוק מים'
    ]
  },
  {
    number: '02',
    title: 'במהלך השיעור',
    items: [
      'המדריכה תכיר אתכם ותשאל על מגבלות/פציעות',
      'נתחיל בחימום עדין ונשימה',
      'נעבור על התרגילים בהדרגה',
      'תמיד אפשר לעצור, לשאול, להתאים'
    ]
  },
  {
    number: '03',
    title: 'אחרי השיעור',
    items: [
      'תרגישו עייפות נעימה אבל לא שחוקים',
      'זה נורמלי להרגיש שרירים שלא ידעתם שיש',
      'שתו הרבה מים',
      'תוצאות באות עם התמדה - תנו לזה זמן'
    ]
  }
]

export default function WhatToExpect() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#3A3837] mb-4">
            מה לצפות בפעם הראשונה?
          </h2>
          <p className="text-xl font-light text-[#3A3837]/80 max-w-2xl mx-auto">
            קצת עצבנות לפני השיעור הראשון? לגמרי נורמלי. הנה מה שיקרה:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-6xl font-light text-[#DDB55D]/30 mb-4">
                {step.number}
              </div>
              
              <h3 className="text-2xl font-medium text-[#3A3837] mb-6">
                {step.title}
              </h3>

              <ul className="space-y-3">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base font-light text-[#3A3837]/70 leading-relaxed"
                  >
                    <span className="text-[#DDB55D] mt-1 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Pro Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-[#FAF7F0] to-[#E9D692]/30 rounded-2xl p-8 md:p-12 border border-[#DDB55D]/20"
        >
          <h3 className="text-2xl font-medium text-[#3A3837] mb-6 text-center">
            💡 טיפים שיעזרו לכם
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base font-light text-[#3A3837]/70">
            <div className="flex gap-3">
              <span className="text-2xl">🍎</span>
              <p>אל תאכלו ארוחה כבדה לפני - ארוחה קלה עד שעתיים לפני זה מושלם</p>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">💬</span>
              <p>אל תתביישו לשאול - אין שאלות טיפשיות, רק אנשים שלא שואלים</p>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🎯</span>
              <p>התמקדו בעצמכם, לא במה שאחרים עושים - זה לא תחרות</p>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🌟</span>
              <p>תהיו סבלניים עם עצמכם - כולם היו מתחילים פעם</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}