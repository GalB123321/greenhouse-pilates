'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const contactMethods = [
  {
    title: 'טלפון',
    value: '054-XXX-XXXX',
    description: 'התקשרו אלינו בכל שאלה',
    href: 'tel:054XXXXXXX',
    icon: '📞'
  },
  {
    title: 'אימייל',
    value: 'info@greenhouse.co.il',
    description: 'נשמח לענות על כל שאלה',
    href: 'mailto:info@greenhouse.co.il',
    icon: '✉️'
  },
  {
    title: 'WhatsApp',
    value: 'שלחו הודעה',
    description: 'התכתבו איתנו ישירות',
    href: 'https://wa.me/972XXXXXXXXX',
    icon: '💬'
  },
  {
    title: 'כתובת',
    value: 'אביחיל, ישראל',
    description: 'בואו לבקר אותנו',
    href: '#map',
    icon: '📍'
  }
]

export default function ContactInfo() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link 
                href={method.href}
                className="block group"
              >
                <div className="bg-gradient-to-br from-[#FAF7F0] to-[#E9D692]/50 hover:from-[#E9D692]/50 hover:to-[#DDB55D]/30 transition-all duration-300 rounded-2xl p-8 h-full border border-[#DDB55D]/20">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  
                  <h3 className="text-xl font-medium text-[#3A3837] mb-2">
                    {method.title}
                  </h3>
                  
                  <p className="text-lg text-[#3A3837] mb-2 group-hover:text-[#C99F4A] transition-colors">
                    {method.value}
                  </p>
                  
                  <p className="text-sm font-light text-[#3A3837]/60">
                    {method.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}