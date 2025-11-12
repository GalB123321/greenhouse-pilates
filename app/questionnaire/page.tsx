import QuestionnaireFlow from '@/components/questionnaire/QuestionnaireFlow'

export const metadata = {
  title: 'שאלון היכרות | הבית הירוק',
  description: 'בואו נכיר - מלאו שאלון קצר ונמצא את השיעור המושלם בשבילכם'
}

export default function QuestionnairePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FAF7F0] to-[#E9D692]/30">
      <QuestionnaireFlow />
    </main>
  )
}