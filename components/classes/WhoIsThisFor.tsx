'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const audiences = [
  {
    title: 'מתחילים לגמרי',
    description: 'אף פעם לא עשיתם פילאטיס? מושלם. אנחנו מתחילים מההתחלה, בקצב שלכם.',
    icon: '🌱',
    color: 'from-[#E9D692] to-[#DDB55D]'
  },
  {
    title: 'מתאוששים מפציעה',
    description: 'עבודה שיקומית מדויקת שמכבדת את הגוף ומסייעת בהחלמה.',
    icon: '💚',
    color: 'from-[#DDB55D] to-[#C99F4A]'
  },
  {
    title: 'ספורטאים',
    description: 'רוצים לשפר ביצועים, למנוע פציעות ולבנות כוח פנימי? בואו.',
    icon: '💪',
    color: 'from-[#C99F4A] to-[#DDB55D]'
  },
  {
    title: 'נשים בהריון ואחרי לידה',
    description: 'עבודה מותאמת שמחזקת, מרגיעה ומכינה את הגוף.',
    icon: '🤰',
    color: 'from-[#E9D692] to-[#DDB55D]'
  },
  {
    title: 'גיל הזהב',
    description: 'תנועה עדינה שמחזקת, משפרת איזון ומעלה את איכות החיים.',
    icon: '✨',
    color: 'from-[#DDB55D] to-[#E9D692]'
  },
  {
    title: 'כאבי גב וכתפיים',
    description: 'עבודה ממוקדת שמשחררת, מחזקת ומפחיתה כאבים כרוניים.',
    icon: '🌿',
    color: 'from-[#C99F4A] to-[#DDB55D]'
  }
]

export default function WhoIsThisFor() {
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
            למי זה מתאים?
          </h2>
          <p className="text-xl font-light text-[#3A3837]/80 max-w-2xl mx-auto">
            התשובה הקצרה: לכולם. התשובה הארוכה:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#DDB55D]/30"
            >
              <div className="text-5xl mb-4">{audience.icon}</div>
              
              <h3 className="text-2xl font-medium text-[#3A3837] mb-3">
                {audience.title}
              </h3>
              
              <p className="text-base font-light text-[#3A3837]/70 leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-xl font-light text-[#3A3837]/80 mb-6">
            לא בטוחים אם זה בשבילכם? מלאו את השאלון ונמצא את השיעור המתאים.
          </p>
          <Link href="/questionnaire">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-[#DDB55D] to-[#C99F4A] hover:from-[#C99F4A] hover:to-[#DDB55D] text-white font-medium rounded-full transition-all duration-300 shadow-lg"
            >
              מלאו שאלון היכרות
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}