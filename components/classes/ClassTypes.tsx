'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const classTypes = [
  {
    title: 'פילאטיס מכשירים',
    description: 'עבודה על הריפורמר והקדילאק. מתאים לכל הרמות, מעולה לחיזוק ויציבה.',
    image: '/images/Pics 2/5A44AABD-7937-443A-9168-3C8A8863731F_1_105_c.jpg',
    features: ['חיזוק מרכז הגוף', 'שיפור יציבה', 'גמישות'],
    duration: '55 דקות',
    level: 'כל הרמות'
  },
  {
    title: 'פילאטיס מזרן',
    description: 'תרגילי מזרן קלאסיים עם אביזרים. בונה כוח ושליטה.',
    image: '/images/Pics 2/3BE7FB6F-B9D1-49AC-8E1C-28FC39516EF0_4_5005_c.jpg',
    features: ['חיזוק שרירי ליבה', 'שיפור קואורדינציה', 'נשימה'],
    duration: '50 דקות',
    level: 'מתחילים-מתקדמים'
  },
  {
    title: 'יוגה',
    description: 'שיעורי האטה יוגה וויניאסה. זרימה, כוח ושקט בתנועה.',
    image: '/images/Pics 2/377A8AE5-E56A-483F-97A1-E161A358D970_1_105_c.jpg',
    features: ['גמישות', 'כוח', 'מדיטציה בתנועה'],
    duration: '60 דקות',
    level: 'כל הרמות'
  },
  {
    title: 'צ׳יקונג',
    description: 'אומנות תנועה סינית עתיקה. תנועות איטיות, נשימה עמוקה ומדיטציה.',
    image: '/images/Pics 2/3850FE29-814E-4F82-A7DB-7F446651952C_1_105_c.jpg',
    features: ['איזון אנרגיה', 'שקט מנטלי', 'חיזוק עדין'],
    duration: '45 דקות',
    level: 'כל הרמות'
  }
]

export default function ClassTypes() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#3A3837] mb-4">
            סוגי השיעורים
          </h2>
          <p className="text-xl font-light text-[#3A3837]/80 max-w-2xl mx-auto">
            מגוון שיעורים שמתאימים לכל אחד, בכל רמה, בכל גיל
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classTypes.map((classType, index) => (
            <motion.div
              key={classType.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#DDB55D]/20"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={classType.image}
                  alt={classType.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-3xl font-light text-white mb-2">
                    {classType.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-white/90 font-light">
                    <span>⏱ {classType.duration}</span>
                    <span>📊 {classType.level}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-base font-light text-[#3A3837]/80 mb-4 leading-relaxed">
                  {classType.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {classType.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-[#E9D692]/50 text-[#3A3837] rounded-full text-sm font-light"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}