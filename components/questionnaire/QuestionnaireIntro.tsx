'use client'

import { motion } from 'framer-motion'

interface Props {
  onStart: () => void
}

export default function QuestionnaireIntro({ onStart }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
        className="text-7xl mb-8"
      >
        🌿
      </motion.div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3A3837] mb-6">
        שאלון היכרות
      </h1>

      <p className="text-xl md:text-2xl font-light text-[#3A3837]/80 mb-4">
        היי וברוך/ה הבא/ה אל הבית הירוק – גוף בלב 💚
      </p>

      <p className="text-lg font-light text-[#3A3837]/60 mb-8 max-w-2xl mx-auto leading-relaxed">
        נשמח להכיר אותך קצת יותר כדי להתאים לך את התרגול המדויק עבורך.
        <br />
        אין תשובות נכונות – רק מה שמרגיש לך נכון 🌿
      </p>

      <div className="bg-gradient-to-br from-[#FAF7F0] to-[#E9D692]/30 rounded-2xl p-6 mb-10 max-w-md mx-auto border border-[#DDB55D]/20">
        <div className="flex items-center justify-center gap-8 text-sm font-light text-[#3A3837]/70">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⏱</span>
            <span>3 דקות</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">📝</span>
            <span>9 שאלות</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <span>המלצה אישית</span>
          </div>
        </div>
      </div>

      <motion.button
        onClick={onStart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-12 py-5 bg-gradient-to-r from-[#DDB55D] to-[#C99F4A] hover:from-[#C99F4A] hover:to-[#DDB55D] text-white text-xl font-medium rounded-full shadow-xl transition-all duration-300"
      >
        בואו נתחיל ✨
      </motion.button>

      <p className="mt-6 text-sm font-light text-[#3A3837]/50">
        לוקח בערך 3 דקות להשלמה
      </p>
    </motion.div>
  )
}