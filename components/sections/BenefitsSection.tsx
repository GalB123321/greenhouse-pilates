'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Benefit {
  id: number
  title: string
  description: string
}

export default function BenefitsSection() {
  const sectionTitle = "למה לתרגל פילאטיס?"
  const subtitle = "לא רק בשביל הגוף – בשביל החיים שלכם"

  const benefits: Benefit[] = [
    {
      id: 1,
      title: "תרגישו חזקים",
      description: "לא חזקים כמו במכון כושר – חזקים מבפנים. החוזק שמגיע מהמרכז שלכם."
    },
    {
      id: 2,
      title: "תנשמו לראשונה",
      description: "נשימה שמחברת, מרגיעה, ומזינה. תגלו כמה כוח יש בנשימה אחת עמוקה."
    },
    {
      id: 3,
      title: "תשחררו מתחים",
      description: "אותם מתחים שנצמדים לכתפיים, לגב, לצוואר. פה זה משתחרר, בעדינות."
    },
    {
      id: 4,
      title: "תשפרו את היציבה",
      description: "לא עוד כאבי גב. לא עוד תחושה של 'משהו לא בסדר'. פשוט לעמוד זקוף ולהרגיש טוב."
    },
    {
      id: 5,
      title: "תתמידו בקלות",
      description: "כשהתרגול מרגיש טוב, לא צריך להכריח את עצמכם. אתם פשוט רוצים לחזור."
    },
    {
      id: 6,
      title: "תהיו חלק מקהילה",
      description: "פה לא מתחרים. פה תומכים, מחייכים, וצומחים ביחד."
    }
  ]

  return (
    <section className="py-32 md:py-40 bg-sand-light relative">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-green-dark mb-6">
            {sectionTitle}
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Benefits Cards - Enhanced with Color */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative bg-white backdrop-blur-sm border border-sand hover:border-golden rounded-2xl p-10 md:p-12 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Colored Number Background */}
              <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-golden/10 flex items-center justify-center">
                <span className="text-3xl font-light text-golden">
                  {String(benefit.id).padStart(2, '0')}
                </span>
              </div>
              
              {/* Number Circle */}
              <div className="w-16 h-16 rounded-full bg-golden flex items-center justify-center mb-6 group-hover:bg-golden-dark transition-colors duration-300">
                <span className="text-xl font-light text-white">{String(benefit.id).padStart(2, '0')}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-light text-green-dark mb-4">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-lg font-light leading-relaxed text-gray-600">
                {benefit.description}
              </p>
              
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-golden/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}