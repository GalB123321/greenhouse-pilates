'use client'

import { motion } from 'framer-motion'

export default function AboutPhilosophy() {
  return (
    <section className="py-24 md:py-40 bg-gradient-to-b from-[#F5F0E5] to-[#E9D692]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-base font-light text-[#C99F4A] tracking-widest uppercase mb-6">
            הפילוסופיה שלנו
          </p>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#3A3837] mb-12 leading-tight">
            הדרך שבה אנחנו מלמדים
          </h2>

          <div className="space-y-8 text-xl md:text-2xl font-light text-[#3A3837]/80 leading-loose">
            <p>
              בפילאטיס, כמו בחיים, אין צורך לבחור בין כוח לגמישות. 
              אנחנו מחפשים את ההרמוניה שביניהם – את העבודה המדויקת שנעשית 
              ללא מאמץ מיותר, אבל כן דורשת נוכחות והתמדה.
            </p>

            <p>
              השיעורים בהבית הירוק נבנים בהדרגה: מתחילים מהנשימה, 
              מתארגנים סביב המרכז, ומאפשרים לגוף לנוע באופן טבעי וזורם.
            </p>

            <p>
              אנחנו רואות את כל אדם כעולם שלם – עם הגוף שלו, הסיפור שלו, 
              הקצב שלו. בכל שיעור יש מקום להקשבה, לתיקון, לדיוק ולשמחה.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}