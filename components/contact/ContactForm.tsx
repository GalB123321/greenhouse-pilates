'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // TODO: Connect to actual form handler (Formspree, SendGrid, etc.)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#F5F0E5] to-[#E9D692]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#3A3837] mb-4">
            שלחו לנו הודעה
          </h2>
          <p className="text-lg md:text-xl font-light text-[#3A3837]/80">
            נשמח לשמוע מכם ונחזור אליכם בהקדם
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-[#DDB55D]/20"
        >
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-[#DDB55D]/30 focus:border-[#DDB55D] focus:ring-2 focus:ring-[#DDB55D]/20 outline-none transition-all bg-white/80"
                placeholder="איך קוראים לכם?"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                אימייל
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-[#DDB55D]/30 focus:border-[#DDB55D] focus:ring-2 focus:ring-[#DDB55D]/20 outline-none transition-all bg-white/80"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                טלפון
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#DDB55D]/30 focus:border-[#DDB55D] focus:ring-2 focus:ring-[#DDB55D]/20 outline-none transition-all bg-white/80"
                placeholder="054-XXX-XXXX"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                הודעה
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-[#DDB55D]/30 focus:border-[#DDB55D] focus:ring-2 focus:ring-[#DDB55D]/20 outline-none transition-all resize-none bg-white/80"
                placeholder="ספרו לנו קצת על עצמכם ומה אתם מחפשים..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 px-8 bg-gradient-to-r from-[#DDB55D] to-[#C99F4A] hover:from-[#C99F4A] hover:to-[#DDB55D] text-white font-medium rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {status === 'loading' ? 'שולח...' : 'שלחו הודעה'}
            </motion.button>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-[#C99F4A] font-medium"
              >
                ההודעה נשלחה בהצלחה! נחזור אליכם בקרוב 💚
              </motion.p>
            )}

            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-red-600 font-medium"
              >
                משהו השתבש. אנא נסו שוב או צרו קשר בטלפון.
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}