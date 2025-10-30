'use client'

import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const philosophyPrinciples = [
  {
    title: "תנועה מודעת",
    description: "כל תנועה מתחילה מכוונה ומודעות עמוקה",
    gradient: "from-[#E9D692]/20 to-[#DDB55D]/20"
  },
  {
    title: "איזון וקרקוע",
    description: "חיבור עמוק בין גוף, נפש ונשימה",
    gradient: "from-[#DDB55D]/20 to-[#C99F4A]/20"
  },
  {
    title: "גישה הוליסטית",
    description: "ראייה כוללת של האדם השלם",
    gradient: "from-[#D1E1CA]/30 to-[#B8D2A7]/20"
  }
]

export default function PhilosophySectionRefined() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  
  return (
    <section 
      ref={containerRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#E9D692]/30 via-[#F5F0E5] to-[#DDB55D]/20 overflow-hidden"
    >
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #DDB55D 25%, transparent 25%), 
                           linear-gradient(-45deg, #DDB55D 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, #DDB55D 75%), 
                           linear-gradient(-45deg, transparent 75%, #DDB55D 75%)`,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 0 15px, 15px 15px, 15px 0'
        }} />
      </div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10"
        style={{ opacity }}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: "auto" } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-[#DDB55D] to-transparent mb-6" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#3A3837] mb-2">
              הגישה שלנו
            </h2>
            <p className="text-2xl md:text-3xl text-[#C99F4A] font-light">
              לתנועה ולחיים
            </p>
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-[#3A3837]/70 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            אנו מאמינים שתנועה היא שפה של הגוף, וכל אחד מאיתנו יכול ללמוד לדבר אותה בדרכו הייחודית
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Left Side - Quote and Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ y }}
          >
            {/* Quote Card - More Professional */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#DDB55D]/20 mb-8">
              <blockquote>
                <svg className="w-8 h-8 text-[#DDB55D]/30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-xl md:text-2xl font-light text-[#3A3837] leading-relaxed mb-4">
                  בפילאטיס, אנחנו לא רק מחזקים את הגוף - אנחנו בונים מחדש את הקשר בינינו לבין עצמנו
                </p>
                <cite className="text-sm text-[#C99F4A] font-light not-italic">
                  — ג'וזף פילאטיס
                </cite>
              </blockquote>
            </div>
            
            {/* Additional Text */}
            <div className="space-y-4 text-[#3A3837]/70 font-light leading-relaxed">
              <p>
                הבית הירוק הוא מרחב בו כל אדם מוזמן לגלות את הפוטנציאל הטמון בגופו. אנו יוצרים סביבה תומכת ומעצימה, שבה התנועה הופכת לכלי לצמיחה אישית.
              </p>
              <p>
                הגישה שלנו משלבת את עקרונות הפילאטיס הקלאסי עם הבנה עמוקה של הצרכים האישיים של כל מתרגל.
              </p>
            </div>
          </motion.div>
          
          {/* Right Side - Professional Principles */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {philosophyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              >
                <div className={`p-6 bg-gradient-to-r ${principle.gradient} backdrop-blur-sm rounded-lg border border-[#DDB55D]/15 transition-all duration-300 hover:shadow-lg hover:border-[#DDB55D]/30 hover:translate-x-1`}>
                  <h3 className="text-xl font-medium text-[#3A3837] mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-[#3A3837]/70 font-light">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          className="text-center py-12 border-t border-[#DDB55D]/20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-2xl md:text-3xl font-extralight text-[#C99F4A] italic">
            "שינוי מתרחש כשאנחנו נעים בכוונה"
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}