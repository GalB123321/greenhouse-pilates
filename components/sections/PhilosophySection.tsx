'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function PhilosophySection() {
  const tag = "OUR PHILOSOPHY"
  const title = "הדרך שלנו"
  const paragraphs = [
    {
      text: "בפילאטיס, כמו בחיים, אין צורך לבחור בין",
      highlight: "כוח לגמישות",
      continuation: ". אנחנו מחפשים את ההרמוניה שביניהם – את העבודה המדויקת שנעשית ללא מאמץ מיותר, אבל כן דורשת נוכחות והתמדה."
    },
    {
      text: "השיעורים בהבית הירוק נבנים בהדרגה: מתחילים מהנשימה, מתארגנים סביב",
      highlight: "המרכז",
      continuation: ", ומאפשרים לגוף לנוע באופן טבעי וזורם."
    },
    {
      text: "אנחנו רואות את כל אדם כ",
      highlight: "עולם שלם",
      continuation: " – עם הגוף שלו, הסיפור שלו, הקצב שלו. בכל שיעור יש מקום להקשבה, לתיקון, לדיוק ולשמחה."
    }
  ]

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-golden relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      {/* Large decorative circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white opacity-10 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {/* Section Tag */}
          <motion.p
            className="text-sm tracking-[0.3em] uppercase text-black/60 font-light mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {tag}
          </motion.p>
          
          {/* Large decorative quotation marks */}
          <div className="relative">
            <span className="absolute -top-16 right-0 text-[200px] text-black opacity-10 font-serif leading-none select-none">״</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-black mb-20 leading-[0.95] relative z-10">
              {title}
            </h2>
          </div>
          
          <div className="space-y-8 md:space-y-12">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-xl md:text-2xl lg:text-3xl font-light text-black/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.2 + (index * 0.15),
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true }}
              >
                {paragraph.text}
                <span className="font-medium text-black mx-2">
                  {paragraph.highlight}
                </span>
                {paragraph.continuation}
              </motion.p>
            ))}
          </div>
          
          {/* Decorative line element */}
          <motion.div
            className="mt-20 mx-auto w-24 h-[1px] bg-black/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
  )
}