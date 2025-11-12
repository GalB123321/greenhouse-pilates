'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'

interface Answer {
  questionId: number
  answer: string | string[]
}

interface Question {
  id: number
  question: string
  type: 'single' | 'multiple'
  options: string[]
}

interface Props {
  answers: Answer[]
  questions: Question[]
}

export default function QuestionnaireResults({ answers, questions }: Props) {
  // Calculate recommendation based on answers
  const getRecommendation = () => {
    // Simple logic - can be made more sophisticated
    const answer1 = answers.find(a => a.questionId === 1)?.answer
    const answer7 = answers.find(a => a.questionId === 7)?.answer

    if (typeof answer7 === 'string') {
      if (answer7.includes('איטי, מדויק')) {
        return {
          class: 'פילאטיס קלאסי',
          description: 'תרגול מדויק ועמוק שמתאים בדיוק למה שחיפשת',
          instructor: 'רונית או דפנה',
          schedule: 'ימים ראשון ושלישי בשעה 08:00'
        }
      } else if (answer7.includes('דינמי')) {
        return {
          class: 'פילאטיס דינמי',
          description: 'תרגול אנרגטי ומאתגר שיתאים לקצב שלך',
          instructor: 'כרמית או עידן',
          schedule: 'ימים שני ורביעי בשעה 19:00'
        }
      } else if (answer7.includes('זורם')) {
        return {
          class: 'יוגה',
          description: 'זרימה עדינה שמחברת בין נשימה לתנועה',
          instructor: 'שלומית',
          schedule: 'ימים ראשון ושלישי בשעה 17:00'
        }
      }
    }

    // Check for rehabilitation needs
    const answer5 = answers.find(a => a.questionId === 5)?.answer
    if (Array.isArray(answer5) && answer5.length > 0) {
      return {
        class: 'פילאטיס שיקומי',
        description: 'עבודה טיפולית ומדויקת שמתמקדת באזורים שציינת',
        instructor: 'אורית',
        schedule: 'ימי רביעי בשעה 16:00'
      }
    }

    // Default
    return {
      class: 'פילאטיס מכשירים למתחילים',
      description: 'נקודת התחלה מושלמת למסע שלך',
      instructor: 'רונית',
      schedule: 'ימים ראשון ורביעי בשעה 08:00'
    }
  }

  const recommendation = getRecommendation()

  useEffect(() => {
    // TODO: Send to backend/Sanity/Email service
    console.log('Final submission:', answers)
  }, [answers])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      {/* Success Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.6, times: [0, 0.6, 1] }}
        className="text-8xl mb-8"
      >
        ✨
      </motion.div>

      <h1 className="text-4xl md:text-5xl font-light text-[#3A3837] mb-6">
        תודה על הזמן והפתיחות שלך 💚
      </h1>

      <p className="text-xl font-light text-[#3A3837]/80 mb-12 max-w-2xl mx-auto">
        על סמך התשובות שלך, נראה לנו שיש התאמה מושלמת:
      </p>

      {/* Recommendation Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-10 max-w-2xl mx-auto border border-[#DDB55D]/20"
      >
        <div className="inline-block bg-gradient-to-r from-[#E9D692] to-[#DDB55D] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          ההמלצה שלנו
        </div>

        <h2 className="text-3xl md:text-4xl font-light text-[#C99F4A] mb-4">
          {recommendation.class}
        </h2>

        <p className="text-lg font-light text-[#3A3837]/70 mb-8 leading-relaxed">
          {recommendation.description}
        </p>

        <div className="space-y-4 text-right">
          <div className="flex items-start gap-3">
            <span className="text-2xl">👤</span>
            <div>
              <p className="font-medium text-[#3A3837]">מדריכה</p>
              <p className="font-light text-[#3A3837]/60">{recommendation.instructor}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">📅</span>
            <div>
              <p className="font-medium text-[#3A3837]">זמנים מומלצים</p>
              <p className="font-light text-[#3A3837]/60">{recommendation.schedule}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">🎁</span>
            <div>
              <p className="font-medium text-[#3A3837]">שיעור ניסיון</p>
              <p className="font-light text-[#3A3837]/60">בואו לנסות את השיעור המומלץ</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[#DDB55D] to-[#C99F4A] hover:from-[#C99F4A] hover:to-[#DDB55D] text-white text-lg font-medium rounded-full shadow-xl transition-all duration-300"
          >
            צרו קשר לתיאום שיעור
          </motion.button>
        </Link>

        <Link href="/classes">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-[#DDB55D] text-[#C99F4A] hover:bg-[#DDB55D]/10 text-lg font-medium rounded-full transition-all duration-300"
          >
            ראו את כל השיעורים
          </motion.button>
        </Link>
      </div>

      <p className="text-sm font-light text-[#3A3837]/50">
        נחזור אליכם בהקדם עם פרטים נוספים 🌿
      </p>
    </motion.div>
  )
}