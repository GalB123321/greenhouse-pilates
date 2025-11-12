import ClassHero from '@/components/classes/ClassHero'
import ClassTypes from '@/components/classes/ClassTypes'
import ClassFormats from '@/components/classes/ClassFormats'
import ClassSchedule from '@/components/classes/ClassSchedule'
import ClassPricing from '@/components/classes/ClassPricing'
import WhoIsThisFor from '@/components/classes/WhoIsThisFor'
import WhatToExpect from '@/components/classes/WhatToExpect'
import ClassesFAQ from '@/components/classes/ClassesFAQ'
import ClassesCTA from '@/components/classes/ClassesCTA'
import StickyBookingBar from '@/components/classes/StickyBookingBar'

export const metadata = {
  title: 'שיעורים | הבית הירוק - פילאטיס, יוגה, צ\'יקונג',
  description: 'מגוון שיעורי פילאטיס, יוגה וצ\'יקונג לכל הרמות. שיעורים קבוצתיים ופרטיים. השיעור הראשון חינם!',
}

export default function ClassesPage() {
  return (
    <main className="min-h-screen">
      <ClassHero />
      <ClassTypes />
      <ClassFormats />
      <ClassSchedule />
      <ClassPricing />
      <WhoIsThisFor />
      <WhatToExpect />
      <ClassesFAQ />
      <ClassesCTA />
      <StickyBookingBar />
    </main>
  )
}