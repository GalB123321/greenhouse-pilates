'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { images } from '@/lib/images'

interface ClassType {
  id: number
  number: string
  title: string
  description: string
  image: string
}

export default function ClassesSection() {
  const classes: ClassType[] = [
    {
      id: 1,
      number: "01",
      title: "פילאטיס קלאסי",
      description: "תרגול מדויק ושיטתי המתמקד בשליטה, יציבה ונשימה. השיעור הקלאסי שלנו בנוי על העקרונות המקוריים של ג'וזף פילאטיס, עם התאמות מודרניות לכל רמה.",
      image: images.classes[0]
    },
    {
      id: 2,
      number: "02",
      title: "פילאטיס דינאמי",
      description: "תרגול אנרגטי ומאתגר בקצב מהיר וזורם. שיעור שמשלב תנועות פילאטיס עם אלמנטים של כוח וקרדיו, מושלם למי שמחפש אתגר.",
      image: images.classes[1]
    },
    {
      id: 3,
      number: "03",
      title: "פילאטיס שיקומי",
      description: "עבודה מדויקת עם התאמה אישית מלאה. מיועד לאנשים עם פציעות, כאבים כרוניים או מגבלות תנועה. כל תרגיל מותאם אישית.",
      image: images.classes[2]
    },
    {
      id: 4,
      number: "04",
      title: "שיעורים פרטיים",
      description: "התעמקות אישית במטרות האישיות שלך. שיעור אחד על אחד שמאפשר התקדמות מהירה ועבודה ממוקדת על הצרכים הספציפיים שלך.",
      image: images.classes[3]
    },
    {
      id: 5,
      number: "05",
      title: "שיעורים זוגיים",
      description: "תרגול משותף באווירה תומכת. מושלם לזוגות, חברים או בני משפחה שרוצים להתאמן יחד תוך קבלת הדרכה אישית.",
      image: images.classes[4]
    }
  ]

  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-green-dark">
            השיעורים שלנו
          </h2>
        </motion.div>

        {/* Classes List - Alternating Layout */}
        <div className="max-w-7xl mx-auto">
          {classes.map((classItem, index) => (
            <motion.div
              key={classItem.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32 last:mb-0 items-center`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Image with colored overlay */}
              <div className={`relative h-[400px] lg:h-[500px] overflow-hidden group ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <Image
                  src={classItem.image}
                  alt={classItem.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Colored gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  index === 0 ? 'from-green-primary/70 to-green-light/50' :
                  index === 1 ? 'from-green-light/70 to-green-pale/50' :
                  index === 2 ? 'from-green-dark/70 to-green-primary/50' :
                  index === 3 ? 'from-green-light/60 to-green-primary/40' :
                  'from-green-primary/60 to-green-light/40'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-golden text-white text-4xl font-light mb-6">
                  {classItem.number}
                </div>
                
                {/* Title */}
                <h3 className="text-4xl md:text-5xl font-light text-green-dark mb-8">
                  {classItem.title}
                </h3>
                
                {/* Description */}
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  {classItem.description}
                </p>
                
                {/* Link */}
                <Link
                  href={`/classes#${classItem.id}`}
                  className="inline-flex items-center text-green-dark hover:text-green-primary transition-colors duration-300 font-light text-lg"
                >
                  למידע נוסף
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}