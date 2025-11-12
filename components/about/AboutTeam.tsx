'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const instructors = [
  {
    name: 'רונית ליבנת',
    role: 'מייסדת ומדריכה ראשית',
    bio: '20 שנה של אהבה לתנועה. מגשרת בין פילאטיס קלאסי לגישה מודרנית ומודעת.',
    image: '/images/Pics 2/E61A916F-FAE6-436C-832E-7CC09E75396E_1_105_c.jpg'
  },
  {
    name: 'דפנה לוי',
    role: 'מדריכת פילאטיס',
    bio: 'מתמחה בפילאטיס שיקומי ועבודה עם מבוגרים. רכה, קשובה, מדויקת.',
    image: '/images/Pics 2/83CEEF51-728F-4118-9B51-EC03B423160F_1_105_c.jpg'
  },
  {
    name: 'עידן ריישר שקד',
    role: 'מדריכת פילאטיס',
    bio: 'אנרגיה, דיוק וחיוך. מביאה את השמחה של התנועה לכל שיעור.',
    image: '/images/Pics 2/F6C42845-6328-4E8C-ADB5-3260CDAF83F3_1_105_c.jpg'
  },
  {
    name: 'כרמית שחר',
    role: 'מדריכת פילאטיס',
    bio: 'מתמחה בעבודה עם ספורטאים ופילאטיס דינמי. מאתגרת אבל תומכת.',
    image: '/images/Pics 2/9C4A46F7-15C9-4DDD-8D1E-61713AE22787_1_105_c.jpg'
  },
  {
    name: 'מור שאער',
    role: 'מדריכת פילאטיס',
    bio: 'גישה עדינה ומדויקת. מתמחה בעבודה עם נשים בהריון ואחרי לידה.',
    image: '/images/Pics 2/297949B7-9E07-4BD6-8800-CBEA3883BBC7_1_105_c.jpg'
  },
  {
    name: 'ריקי גול',
    role: 'מדריכת פילאטיס',
    bio: 'משלבת פילאטיס עם עבודת נשימה. מחברת בין גוף לנפש.',
    image: '/images/Pics 2/3EFB7271-D2D3-411F-8ACB-15EF3773ACBF_1_105_c.jpg'
  },
  {
    name: 'אורית בר עזרא',
    role: 'מדריכת פילאטיס',
    bio: 'מתמחה בעבודה טיפולית ושיקומית. עובדת בעדינות ובדיוק.',
    image: '/images/Pics 2/CA2DB3BF-FE30-4E4D-B2A3-4682226171DC_1_105_c.jpg'
  },
  {
    name: 'שלומית שאה',
    role: 'מדריכת יוגה',
    bio: 'מביאה את היוגה לבית הירוק. זרימה, כוח ושקט בתנועה.',
    image: '/images/Pics 2/F4DAF9B2-7BB8-4A77-A37E-A1CE88E971AB_1_105_c.jpg'
  },
  {
    name: 'נועה גת',
    role: 'מדריכת צ\'יקונג',
    bio: 'מלמדת צ\'יקונג ותנועה מודעת. עבודה עדינה עם אנרגיה.',
    image: '/images/Pics 2/A121C72D-9DE0-420D-98C6-E3B74904562B_1_105_c.jpg'
  }
]

export default function AboutTeam() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#FAF7F0] to-[#E9D692]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base font-light text-[#C99F4A] tracking-widest uppercase mb-4">
            הצוות שלנו
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3A3837] mb-6">
            המדריכות שלנו
          </h2>

          <p className="text-xl md:text-2xl font-light text-[#3A3837]/80 max-w-3xl mx-auto">
            צוות ההדרכה שלנו גדל והתעצב לאורך השנים, והוא נבנה מאנשים שמביאים 
            איתם מקצועיות עמוקה, חום, אנושיות וסקרנות אמיתית.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#FAF7F0] to-[#E9D692] border-2 border-[#DDB55D]/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#DDB55D]/50 transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-[#3A3837] mb-1">
                    {instructor.name}
                  </h3>
                  
                  <p className="text-sm text-[#C99F4A] font-light mb-3 tracking-wide">
                    {instructor.role}
                  </p>
                  
                  <p className="text-base font-light text-[#3A3837]/70 leading-relaxed">
                    {instructor.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}