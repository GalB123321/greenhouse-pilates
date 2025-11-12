'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Question {
  id: number
  question: string
  subtitle?: string
  type: 'single' | 'multiple'
  options: string[]
  hasOther?: boolean
}

interface Props {
  question: Question
  currentAnswer?: string | string[]
  onAnswer: (answer: string | string[]) => void
  onBack: () => void
  canGoBack: boolean
  direction: 'forward' | 'backward'
}

export default function QuestionnaireQuestion({
  question,
  currentAnswer,
  onAnswer,
  onBack,
  canGoBack,
  direction
}: Props) {
  const [selectedSingle, setSelectedSingle] = useState<string>(
    typeof currentAnswer === 'string' ? currentAnswer : ''
  )
  const [selectedMultiple, setSelectedMultiple] = useState<string[]>(
    Array.isArray(currentAnswer) ? currentAnswer : []
  )
  const [otherText, setOtherText] = useState('')

  const handleSingleSelect = (option: string) => {
    setSelectedSingle(option)
    if (option !== 'אחר') {
      onAnswer(option)
    }
  }

  const handleMultipleToggle = (option: string) => {
    const newSelection = selectedMultiple.includes(option)
      ? selectedMultiple.filter(o => o !== option)
      : [...selectedMultiple, option]
    
    setSelectedMultiple(newSelection)
  }

  const handleMultipleSubmit = () => {
    const finalAnswer = otherText && selectedMultiple.includes('אחר')
      ? [...selectedMultiple.filter(o => o !== 'אחר'), `אחר: ${otherText}`]
      : selectedMultiple

    if (finalAnswer.length > 0) {
      onAnswer(finalAnswer)
    }
  }

  const handleOtherSubmit = () => {
    if (otherText.trim()) {
      onAnswer(`אחר: ${otherText}`)
    }
  }

  const slideVariants = {
    enter: (direction: 'forward' | 'backward') => ({
      x: direction === 'forward' ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: 'forward' | 'backward') => ({
      x: direction === 'forward' ? -50 : 50,
      opacity: 0
    })
  }

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-[#DDB55D]/20"
    >
      {/* Back Button */}
      {canGoBack && (
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mb-6 text-[#C99F4A]/60 hover:text-[#C99F4A] transition-colors flex items-center gap-2"
        >
          <span className="text-xl">→</span>
          <span className="text-sm font-light">חזור</span>
        </motion.button>
      )}

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#3A3837] mb-3 leading-tight">
          {question.question}
        </h2>
        {question.subtitle && (
          <p className="text-base font-light text-[#3A3837]/60">
            {question.subtitle}
          </p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = question.type === 'single'
            ? selectedSingle === option
            : selectedMultiple.includes(option)

          const isOther = option === 'אחר' && question.hasOther

          return (
            <motion.div
              key={option}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <motion.button
                onClick={() => {
                  if (question.type === 'single') {
                    handleSingleSelect(option)
                  } else {
                    handleMultipleToggle(option)
                  }
                }}
                whileHover={{ scale: 1.01, x: -4 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full text-right p-5 rounded-2xl border-2 transition-all ${
                  isSelected
                    ? 'border-[#DDB55D] bg-gradient-to-l from-[#E9D692]/20 to-[#DDB55D]/10'
                    : 'border-[#DDB55D]/20 hover:border-[#DDB55D]/40 bg-white'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Checkbox/Radio */}
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected
                      ? 'border-[#DDB55D] bg-[#DDB55D]'
                      : 'border-[#C99F4A]/40'
                  }`}>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 bg-white rounded-full"
                      />
                    )}
                  </div>

                  {/* Text */}
                  <span className={`text-lg font-light ${
                    isSelected ? 'text-[#3A3837]' : 'text-[#3A3837]/70'
                  }`}>
                    {option}
                  </span>
                </div>
              </motion.button>

              {/* Other Text Input */}
              {isOther && isSelected && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 mr-10"
                >
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={otherText}
                      onChange={(e) => setOtherText(e.target.value)}
                      placeholder="פרט/י בקצרה..."
                      className="flex-1 px-4 py-3 border border-[#DDB55D]/30 rounded-xl focus:border-[#DDB55D] focus:ring-2 focus:ring-[#DDB55D]/20 outline-none transition-all bg-white/80"
                      autoFocus
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && question.type === 'single') {
                          handleOtherSubmit()
                        }
                      }}
                    />
                    {question.type === 'single' && (
                      <motion.button
                        onClick={handleOtherSubmit}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!otherText.trim()}
                        className={`px-6 py-3 rounded-xl font-medium transition-all ${
                          otherText.trim()
                            ? 'bg-[#DDB55D] text-white hover:bg-[#C99F4A]'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        המשך
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Submit for Multiple Choice */}
      {question.type === 'multiple' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <motion.button
            onClick={handleMultipleSubmit}
            disabled={selectedMultiple.length === 0}
            whileHover={selectedMultiple.length > 0 ? { scale: 1.02 } : {}}
            whileTap={selectedMultiple.length > 0 ? { scale: 0.98 } : {}}
            className={`w-full py-4 rounded-full font-medium text-lg transition-all ${
              selectedMultiple.length > 0
                ? 'bg-gradient-to-r from-[#DDB55D] to-[#C99F4A] hover:from-[#C99F4A] hover:to-[#DDB55D] text-white shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            המשך ←
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  )
}