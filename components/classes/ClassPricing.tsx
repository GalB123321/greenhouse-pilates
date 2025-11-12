'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const pricingOptions = [
  {
    name: 'כרטיסייה בודדת',
    description: 'מושלם לנסות או לתרגל מדי פעם',
    price: '₪100',
    unit: 'לשיעור',
    features: [
      'שיעור אחד',
      'תקף 30 יום',
      'כל סוגי השיעורים',
      'ביטול עד 24 שעות'
    ],
    highlight: false,
    cta: 'קנו כרטיסייה',
    link: '/contact'
  },
  {
    name: 'מנוי חודשי',
    description: 'הכי משתלם - תרגלו כמה שרוצים',
    price: '₪450',
    unit: 'לחודש',
    features: [
      'שיעורים ללא הגבלה',
      'כל סוגי השיעורים',
      'קדימות בהרשמה',
      'גמישות מלאה',
      '10% הנחה על פרטיים'
    ],
    highlight: true,
    popular: true,
    cta: 'הצטרפו למנוי',
    link: '/contact'
  },
  {
    name: 'כרטיסייה 10 שיעורים',
    description: 'גמישות עם מחיר טוב',
    price: '₪800',
    unit: '10 שיעורים',
    features: [
      '10 שיעורים',
      'תקף 3 חודשים',
      'כל סוגי השיעורים',
      '₪80 לשיעור'
    ],
    highlight: false,
    cta: 'קנו כרטיסייה',
    link: '/contact'
  },
  {
    name: 'שיעור פרטי',
    description: 'התאמה אישית מלאה',
    price: '₪250',
    unit: 'לשיעור',
    features: [
      'שעה מלאה 1:1',
      'תוכנית מותאמת',
      'זמנים גמישים',
      'התקדמות מהירה'
    ],
    highlight: false,
    cta: 'הזמינו שיעור',
    link: '/contact'
  }
]

export default function ClassPricing() {
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
          <h2 className="text-4xl md:text-5xl font-light text-[#3A3837] mb-4">
            מחירים ומנויים
          </h2>
          <p className="text-xl font-light text-[#3A3837]/80 max-w-2xl mx-auto">
            בחרו את האופציה המתאימה לכם ולתקציב שלכם
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 ${
                option.highlight
                  ? 'bg-gradient-to-br from-[#DDB55D] to-[#C99F4A] text-white shadow-2xl scale-105 md:scale-110'
                  : 'bg-white border border-[#DDB55D]/30'
              }`}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#C99F4A] text-white text-sm font-medium px-4 py-1 rounded-full">
                    הכי פופולרי
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-medium mb-2 ${
                  option.highlight ? 'text-white' : 'text-[#3A3837]'
                }`}>
                  {option.name}
                </h3>
                <p className={`text-sm font-light ${
                  option.highlight ? 'text-white/90' : 'text-[#3A3837]/60'
                }`}>
                  {option.description}
                </p>
              </div>

              <div className="mb-6">
                <div className={`text-4xl font-light mb-1 ${
                  option.highlight ? 'text-white' : 'text-[#C99F4A]'
                }`}>
                  {option.price}
                </div>
                <div className={`text-sm font-light ${
                  option.highlight ? 'text-white/80' : 'text-[#3A3837]/60'
                }`}>
                  {option.unit}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {option.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 text-sm font-light ${
                      option.highlight ? 'text-white/90' : 'text-[#3A3837]/70'
                    }`}
                  >
                    <span className={option.highlight ? 'text-white' : 'text-[#DDB55D]'}>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={option.link}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-full font-medium transition-colors ${
                    option.highlight
                      ? 'bg-white text-[#C99F4A] hover:bg-[#FAF7F0]'
                      : 'bg-gradient-to-r from-[#DDB55D] to-[#C99F4A] text-white hover:from-[#C99F4A] hover:to-[#DDB55D]'
                  }`}
                >
                  {option.cta}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center space-y-4"
        >
          <p className="text-[#C99F4A] font-medium text-lg">
            💚 כל המנויים כוללים גישה לכל סוגי השיעורים
          </p>
          <p className="text-[#3A3837]/60 font-light text-sm max-w-2xl mx-auto">
            * כל המחירים כוללים מע"מ. ביטול שיעור עד 24 שעות מראש ללא עלות. 
            מנוי חודשי מתחדש אוטומטית, ניתן לבטל בכל עת.
          </p>
        </motion.div>
      </div>
    </section>
  )
}