'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Extensive photo collection
const galleryImages = [
  '/images/Pics 1/A70A8260.JPG',
  '/images/Pics 1/A70A8263.JPG',
  '/images/Pics 1/A70A8269.JPG',
  '/images/Pics 1/A70A8276.JPG',
  '/images/Pics 1/A70A8284.JPG',
  '/images/Pics 1/A70A8297.JPG',
  '/images/Pics 1/A70A8305.JPG',
  '/images/Pics 1/A70A8314.JPG',
  '/images/Pics 1/A70A8316.JPG',
  '/images/Pics 1/A70A8326.JPG',
  '/images/Pics 1/A70A8331.JPG',
  '/images/Pics 1/A70A8333.JPG',
  '/images/Pics 1/A70A8342.JPG',
  '/images/Pics 1/A70A8349.JPG',
  '/images/Pics 1/A70A8351.JPG',
  '/images/Pics 1/A70A8364.JPG',
  '/images/Pics 1/A70A8373.JPG',
  '/images/Pics 1/A70A8378.JPG',
  '/images/Pics 1/A70A8411.JPG',
  '/images/Pics 1/A70A8425.JPG',
  '/images/Pics 1/A70A8431.JPG',
  '/images/Pics 1/A70A8433.JPG',
  '/images/Pics 1/A70A8441.JPG',
  '/images/Pics 1/A70A8460.JPG',
]

export default function PhotoGallerySection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#E9D692] via-[#F5F0E5] to-[#DDB55D] border-t-2 border-[#DDB55D]/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-shel-text mb-4">
            הסטודיו שלנו בתמונות
          </h2>
          <p className="text-lg text-shel-text/60 font-light">
            רגעים של תנועה, חיבור וקהילה
          </p>
        </motion.div>

        {/* Masonry Grid Gallery */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="relative break-inside-avoid-column group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.03,
                duration: 0.6
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-[#DDB55D]/25 hover:border-[#DDB55D]/50 transition-all duration-300">
                <Image
                  src={img}
                  alt={`גלריה ${index + 1}`}
                  width={400}
                  height={index % 3 === 0 ? 500 : index % 3 === 1 ? 400 : 450}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-sm font-light">תמונה {index + 1}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-shel-text/70 font-light mb-6">
            רוצים לראות עוד? בואו להיות חלק מהקהילה שלנו
          </p>
          <button className="px-8 py-3 bg-[#DDB55D] text-white rounded-full hover:bg-[#C99F4A] transition-colors duration-300 font-light">
            צרו קשר
          </button>
        </motion.div>
      </div>
    </section>
  )
}