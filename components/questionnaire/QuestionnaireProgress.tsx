'use client'

import { motion } from 'framer-motion'

interface Props {
  current: number
  total: number
}

export default function QuestionnaireProgress({ current, total }: Props) {
  const progress = (current / total) * 100

  return (
    <div className="mb-12">
      {/* Progress Bar */}
      <div className="relative h-2 bg-[#E9D692]/30 rounded-full overflow-hidden mb-3">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute inset-y-0 right-0 bg-gradient-to-l from-[#DDB55D] to-[#C99F4A] rounded-full"
        />
      </div>

      {/* Counter */}
      <div className="flex justify-between items-center text-sm font-light text-[#3A3837]/60">
        <span>שאלה {current} מתוך {total}</span>
        <span>{Math.round(progress)}%</span>
      </div>
    </div>
  )
}