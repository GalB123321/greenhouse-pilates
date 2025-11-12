'use client'

import { motion } from 'framer-motion'

export default function ContactMap() {
  return (
    <section id="map" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-green-primary mb-4">
            היכן אנחנו נמצאים
          </h2>
          <p className="text-lg md:text-xl font-light text-gray-700">
            בואו לבקר אותנו באביחיל
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px]"
        >
          {/* Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13514.123456789!2d34.9!3d32.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDI0JzAwLjAiTiAzNMKwNTQnMDAuMCJF!5e0!3m2!1sen!2sil!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="מיקום הבית הירוק"
          />
        </motion.div>

        {/* Directions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 font-light mb-4">
            חניה זמינה ליד הסטודיו
          </p>
          
          <a
            href="https://www.waze.com/ul?ll=32.4,34.9&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-primary hover:text-green-light transition-colors font-medium"
          >
            פתחו ב-Waze →
          </a>
        </motion.div>
      </div>
    </section>
  )
}