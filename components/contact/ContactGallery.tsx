'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  {
    src: '/images/Pics 2/2788EFF4-5FF5-46F5-B639-3268D86F024A_1_105_c.jpg',
    alt: 'סטודיו פילאטיס'
  },
  {
    src: '/images/Pics 2/F93268D8-2F55-4450-A380-157A3E9BF3CC_4_5005_c.jpg',
    alt: 'אימון פילאטיס'
  },
  {
    src: '/images/Pics 2/23C0B1A6-D4AD-4303-9B5E-AAE7A748591A_1_105_c.jpg',
    alt: 'מכשירי פילאטיס'
  },
  {
    src: '/images/Pics 2/92F1DA73-6375-44C2-95E9-DACED5027B67_1_105_c.jpg',
    alt: 'חלל הסטודיו'
  },
  {
    src: '/images/Pics 2/002C26EE-22CC-4762-A2B9-336F07CC3842_1_105_c.jpg',
    alt: 'שיעור קבוצתי'
  },
  {
    src: '/images/Pics 2/DC9BA8E2-E17C-43F3-B79C-D057574EC44D_1_105_c.jpg',
    alt: 'אווירת הבית הירוק'
  }
]

export default function ContactGallery() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#3A3837] mb-4">
            הסטודיו שלנו
          </h2>
          <p className="text-lg md:text-xl font-light text-[#3A3837]/70">
            הצצה לחלל המיוחד שיצרנו עבורכם
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-light text-lg">
                    {image.alt}
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