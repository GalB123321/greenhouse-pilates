'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutStory() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <p className="text-sm md:text-base font-light text-[#C99F4A] tracking-widest uppercase mb-4">
              הסיפור שלנו
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3A3837] mb-8 leading-tight">
              מאהבה לתנועה<br />לבית שלם
            </h2>

            <div className="space-y-6 text-lg md:text-xl font-light text-[#3A3837]/80 leading-loose">
              <p>
                הכול התחיל מאהבה גדולה לתנועה. עוד לפני שהכרתי את המילה 'פילאטיס', 
                הגוף שלי כבר חיפש איזון. הייתי ילדה שאוהבת לזוז, לרקוד, לרוץ על החול 
                ולחקור את הגבולות של הכוח והקלילות.
              </p>

              <p>
                שנים אחר כך, כשנכנסתי במקרה לסטודיו פילאטיס בתל אביב, משהו בי נדלק. 
                זה היה רגע של בהירות – תנועה שמדברת בשפה אחרת, מדויקת, קשובה, 
                מלאה שכל ורגש.
              </p>

              <p>
                כך נולד הבית הירוק – מתוך בית ילדותי, בין שדות אביחיל, מתוך רצון 
                אחד פשוט: להביא תנועה, נשימה ויציבות לחיים של אנשים.
              </p>

              <p className="text-2xl md:text-3xl font-light text-[#C99F4A] italic pt-4">
                "פילאטיס לא שינה רק את הגוף שלי – הוא שינה את הדרך שבה אני חיה."
              </p>

              <p className="text-base text-[#3A3837]/60 font-light">
                — רונית ליבנת, מייסדת
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Pics 2/04CA8C0F-D028-4B14-AF30-7B83B84EF108_1_105_c.jpg"
                alt="רונית ליבנת"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}