'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface HeroSimpleProps {
  videoUrl?: string
  imageUrl?: string
  imageAlt?: string
  inspirationalText?: string
  transitionText?: string
  ctaButtonText?: string
  ctaButtonLink?: string
  logoUrl?: string
  subtitle?: string
  location?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export default function HeroSimple({
  videoUrl,
  imageUrl,
  imageAlt = 'Hero background',
  inspirationalText = 'תנועו מתוך אהבה, לא מתוך פחד',
  transitionText = 'זוזו בדרך שלכם',
  ctaButtonText = 'גלו איזה אימון מתאים לכם',
  ctaButtonLink = '/questionnaire',
  logoUrl = '/images/LOGO.png',
  subtitle = 'פילאטיס • יוגה • תנועה • קהילה',
  location = 'אביחיל',
  secondaryCtaText = 'רוצה לשמוע עוד',
  secondaryCtaLink = '/contact'
}: HeroSimpleProps) {
  const [showFirstText, setShowFirstText] = useState(false)
  const [showSecondText, setShowSecondText] = useState(false)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    // Start animations - text 20% faster
    setTimeout(() => setShowFirstText(true), 300)
    setTimeout(() => setShowSecondText(true), 2000)  // Was 2500, now 20% faster
    setTimeout(() => setShowLogo(true), 3600)  // Was 4500, now 20% faster
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#E9D692] to-[#DDB55D]">
      {/* Background Media */}
      <div className="absolute inset-0">
        {videoUrl ? (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-85"
            >
              <source src={videoUrl} type="video/mp4" />
              <source src={videoUrl} type="video/quicktime" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
          </>
        ) : imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover opacity-85"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
          </>
        ) : null}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        
        {/* First Text Animation */}
        <AnimatePresence>
          {showFirstText && !showSecondText && (
            <motion.div
              key="text1"
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.64, ease: "easeOut" }}  // Was 0.8, now 20% faster
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mb-4">
                {inspirationalText}
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Second Text Animation */}
        <AnimatePresence>
          {showSecondText && !showLogo && (
            <motion.div
              key="text2"
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.64, ease: "easeOut" }}  // Was 0.8, now 20% faster
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-thin text-white">
                {transitionText}
              </h2>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Final Content - Logo, Subtitle and Button */}
        <AnimatePresence>
          {showLogo && (
            <motion.div
              key="content"
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Logo */}
              <motion.div
                className="relative w-40 h-40 md:w-52 md:h-52 mb-8"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 1,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <Image
                  src={logoUrl}
                  alt="הבית הירוק"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {subtitle}
              </motion.p>

              {/* Single CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Link href={ctaButtonLink}>
                  <motion.button
                    className="px-10 py-4 md:px-12 md:py-5 bg-white/95 text-[#C99F4A] text-lg md:text-xl font-light rounded-full shadow-2xl backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 1)",
                      boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {ctaButtonText}
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button appears immediately with first text */}
        <AnimatePresence>
          {showFirstText && !showLogo && (
            <motion.div
              className="absolute bottom-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.64, delay: 0.4 }}  // Text animation 20% faster
            >
              <Link href={ctaButtonLink}>
                <motion.button
                  className="px-8 py-3 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-light"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="flex items-center gap-2"
                    animate={{ x: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {ctaButtonText}
                    <span>←</span>
                  </motion.span>
                </motion.button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll indicator - only shows with final content */}
        <AnimatePresence>
          {showLogo && (
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                  <motion.div
                    className="w-1 h-3 bg-white/50 rounded-full mt-2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <span className="text-white/50 text-xs font-light">גללו למטה</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}