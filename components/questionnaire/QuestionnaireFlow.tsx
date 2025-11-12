'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import QuestionnaireIntro from './QuestionnaireIntro'
import QuestionnaireQuestion from './QuestionnaireQuestion'
import QuestionnaireResults from './QuestionnaireResults'
import QuestionnaireProgress from './QuestionnaireProgress'

interface Answer {
  questionId: number
  answer: string | string[]
}

const questions = [
  {
    id: 1,
    question: 'מה מביא אותך אל הפילאטיס דווקא עכשיו?',
    type: 'single' as const,
    options: [
      'חיפוש אחר תרגול שקט ועמוק',
      'חיזוק הגוף ושיפור יציבה',
      'שחרור מתחים או כאבים',
      'חזרה לכושר אחרי תקופה',
      'פשוט סקרנות ורצון לנסות משהו חדש'
    ]
  },
  {
    id: 2,
    question: 'איך היית רוצה להרגיש בגוף שלך אחרי כמה שבועות של תרגול?',
    type: 'single' as const,
    options: [
      'חזק/ה ומיוצב/ת',
      'קל/ה ופתוח/ה',
      'רגוע/ה ושליו/ה',
      'מלא/ת אנרגיה',
      'מחובר/ת לעצמי'
    ]
  },
  {
    id: 3,
    question: 'האם התנסית בעבר בפילאטיס או בתרגול אחר?',
    type: 'single' as const,
    options: [
      'כן, פילאטיס מכשירים',
      'כן, פילאטיס מזרן',
      'כן, יוגה / תנועה אחרת',
      'לא, זו תהיה הפעם הראשונה שלי'
    ]
  },
  {
    id: 4,
    question: 'מה הכי חשוב לך במקום כמו הסטודיו?',
    type: 'single' as const,
    options: [
      'יחס אישי ותשומת לב',
      'מקצועיות ודיוק',
      'אווירה רגועה ונעימה',
      'תוצאות ושיפור ממשי',
      'קהילה וחיבור אנושי'
    ]
  },
  {
    id: 5,
    question: 'האם יש בגוף שלך אזור שמבקש תשומת לב מיוחדת?',
    subtitle: '(ניתן לסמן יותר מתשובה אחת)',
    type: 'multiple' as const,
    options: [
      'גב תחתון',
      'צוואר / כתפיים',
      'ברכיים',
      'מפרקי ירך',
      'אחר'
    ],
    hasOther: true
  },
  {
    id: 6,
    question: 'מתי את/ה מעדיף/ה להתאמן?',
    type: 'single' as const,
    options: [
      'בוקר מוקדם',
      'שעות הבוקר המאוחרות',
      'אחר הצהריים',
      'ערב'
    ]
  },
  {
    id: 7,
    question: 'איזה סגנון תרגול את/ה אוהב/ת?',
    type: 'single' as const,
    options: [
      'איטי, מדויק ועמוק',
      'זורם, בינוני בקצב',
      'דינמי ואנרגטי',
      'שילוב של עומק ותנועה'
    ]
  },
  {
    id: 8,
    question: 'האם את/ה מרגיש/ה קשר בין פעילות גופנית למצב רגשי?',
    type: 'single' as const,
    options: [
      'כן, קשר חזק ומשמעותי',
      'כן, במידה מסוימת',
      'לפעמים, תלוי בתקופה',
      'לא ממש, אני בעיקר בא/ה בשביל הגוף'
    ]
  },
  {
    id: 9,
    question: 'מה הציפיות שלך מהתרגול בבית הירוק?',
    type: 'single' as const,
    options: [
      'שחרור מתחים וחיזוק הגוף',
      'יציבה טובה ובריאות לאורך זמן',
      'שינוי באורח חיים',
      'זמן לעצמי בתוך השגרה',
      'אחר'
    ],
    hasOther: true
  }
]

export default function QuestionnaireFlow() {
  const [step, setStep] = useState<'intro' | 'questions' | 'results'>('intro')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward')

  const handleStart = () => {
    setStep('questions')
  }

  const handleAnswer = (answer: string | string[]) => {
    const newAnswer: Answer = {
      questionId: questions[currentQuestion].id,
      answer
    }

    // Update or add answer
    const updatedAnswers = answers.filter(a => a.questionId !== questions[currentQuestion].id)
    setAnswers([...updatedAnswers, newAnswer])

    // Move to next question after short delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setDirection('forward')
        setCurrentQuestion(currentQuestion + 1)
      } else {
        // Submit and show results
        handleSubmit([...updatedAnswers, newAnswer])
      }
    }, 300)
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setDirection('backward')
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = async (finalAnswers: Answer[]) => {
    // TODO: Send to API/Sanity/Email
    console.log('Submitting answers:', finalAnswers)
    
    // Show results
    setStep('results')
  }

  const getCurrentAnswer = () => {
    const answer = answers.find(a => a.questionId === questions[currentQuestion].id)
    return answer?.answer
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl">
        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <QuestionnaireIntro key="intro" onStart={handleStart} />
          )}

          {step === 'questions' && (
            <motion.div
              key="questions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <QuestionnaireProgress
                current={currentQuestion + 1}
                total={questions.length}
              />

              <QuestionnaireQuestion
                question={questions[currentQuestion]}
                currentAnswer={getCurrentAnswer()}
                onAnswer={handleAnswer}
                onBack={handleBack}
                canGoBack={currentQuestion > 0}
                direction={direction}
              />
            </motion.div>
          )}

          {step === 'results' && (
            <QuestionnaireResults key="results" answers={answers} questions={questions} />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}