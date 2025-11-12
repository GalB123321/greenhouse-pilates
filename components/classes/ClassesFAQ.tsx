'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    question: 'צריך ניסיון קודם בפילאטיס?',
    answer: 'בכלל לא! השיעורים שלנו מתאימים לכל הרמות. המדריכות שלנו יודעות לתת התאמות אישיות ולוודא שכל אחד עובד ברמה שלו.'
  },
  {
    question: 'מה ההבדל בין פילאטיס ליוגה?',
    answer: 'פילאטיס מתמקד יותר בחיזוק הליבה, שליטה ודיוק בתנועה. יוגה משלבת יותר גמישות, נשימה ומדיטציה. שניהם מעולים ומשלימים אחד את השני!'
  },
  {
    question: 'האם פילאטיס מתאים למי שיש לו כאבי גב?',
    answer: 'בהחלט! פילאטיס ידוע ביכולת שלו לעזור עם כאבי גב. יש לנו גם שיעורים שיקומיים ספציפיים. חשוב להגיד למדריכה על הכאב כדי שתתאים את התרגילים.'
  },
  {
    question: 'כמה פעמים בשבוע מומלץ להגיע?',
    answer: 'אידיאלי זה 2-3 פעמים בשבוע. אבל גם פעם בשבוע זה טוב! העיקר היא עקביות - עדיף פעם בשבוע באופן קבוע מאשר 5 פעמים ואז חודש הפסקה.'
  },
  {
    question: 'צריך להביא ציוד?',
    answer: 'לא צריך כלום! יש לנו מזרנים, כדורים, רצועות וכל הציוד. רק תביאו בגדים נוחים ובקבוק מים.'
  },
  {
    question: 'מה קורה אם אני צריך לבטל שיעור?',
    answer: 'אפשר לבטל עד 24 שעות לפני השיעור ללא עלות. ביטול באיחור של פחות מ-24 שעות - השיעור נספר.'
  },
  {
    question: 'האם יש מקלחות ומלתחות?',
    answer: 'כן! יש לנו מלתחות נפרדות עם מקלחות. אפשר להגיע ישר מהעבודה ולהתקלח אחרי.'
  },
  {
    question: 'האם השיעורים מתאימים לגברים?',
    answer: 'בהחלט! פילאטיס פותח על ידי גבר (ג\'וזף פילאטיס) ומתאים לגברים ונשים באותה מידה. יש לנו הרבה גברים בשיעורים.'
  },
  {
    question: 'אפשר להגיע בהריון?',
    answer: 'כן! יש לנו שיעורים מותאמים להריון וגם אחרי לידה. חשוב להגיד למדריכה שאת בהריון כדי שתתאים את התרגילים.'
  },
  {
    question: 'איך אני יודע/ת איזה שיעור מתאים לי?',
    answer: 'מלאו את שאלון ההיכרות שלנו ונמליץ לכם על השיעור המתאים ביותר. תמיד אפשר גם להתייעץ איתנו טלפונית או לבוא לשיעור ניסיון כדי להרגיש את האווירה.'
  }
]

export default function ClassesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#FAF7F0] to-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#3A3837] mb-4">
            שאלות נפוצות
          </h2>
          <p className="text-xl font-light text-[#3A3837]/80">
            התשובות לכל מה ששאלתם (ומה שלא העזתם לשאול)
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#DDB55D]/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-right hover:bg-[#E9D692]/20 transition-colors"
              >
                <span className="text-lg font-medium text-[#3A3837] pr-4">
                  {faq.question}
                </span>
                <span className={`text-2xl text-[#C99F4A] transition-transform flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  ↓
                </span>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 md:px-8 pb-6 text-base font-light text-[#3A3837]/70 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
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
          <p className="text-[#3A3837]/70 font-light mb-4">
            יש לכם שאלה אחרת?
          </p>
          
          <Link
            href="/contact"
            className="text-[#C99F4A] hover:text-[#DDB55D] font-medium transition-colors"
          >
            צרו איתנו קשר →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}