'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'

interface HeroProps {
  // Media
  videoUrl?: string
  imageUrl?: string
  imageAlt?: string
  images?: string[] // For carousel option
  
  // Animation texts
  inspirationalText?: string
  transitionText?: string
  ctaButtonText?: string
  ctaButtonLink?: string
  
  // Content box
  logoUrl?: string
  subtitle?: string
  location?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export default function Hero({
  videoUrl,
  imageUrl,
  imageAlt = 'Hero background',
  images = [],
  inspirationalText = 'תנועו מתוך אהבה, לא מתוך פחד',
  transitionText = 'זוזו בדרך שלכם',
  ctaButtonText = 'מלאו שאלון היכרות',
  ctaButtonLink = '/questionnaire',
  logoUrl = '/images/logo.png',
  subtitle = 'פילאטיס • יוגה • תנועה • קהילה',
  location = 'אביחיל',
  secondaryCtaText = 'צרו קשר',
  secondaryCtaLink = '/contact'
}: HeroProps) {
  const [animationPhase, setAnimationPhase] = useState<'text1' | 'text2' | 'button'>('text1')

  // Ensure page loads at top position on refresh
  useEffect(() => {
    // Set scroll position to top before page renders
    if (typeof window !== 'undefined') {
      // Force browser to start at top on page load
      window.history.scrollRestoration = 'manual';
    }
  }, [])

  useEffect(() => {
    // Phase 1 → Phase 2: After 1.5 seconds
    const timer1 = setTimeout(() => setAnimationPhase('text2'), 1500)
    
    // Phase 2 → Phase 3: After 2.2 seconds
    const timer2 = setTimeout(() => setAnimationPhase('button'), 2200)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Video/Image Container - Shrinks after 2 seconds */}
      <motion.div
        initial={{ height: '100vh' }}
        animate={{ height: '60vh' }}
        transition={{
          delay: 2.5, // Slightly delayed to show button transformation
          duration: 1.5,
          ease: [0.4, 0.0, 0.2, 1]
        }}
        className="sticky top-0 w-full overflow-hidden z-0"
      >
        {videoUrl ? (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
              <source src={videoUrl} type="video/quicktime" />
            </video>
            {/* Gentle overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
          </>
        ) : images.length > 1 ? (
          <>
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{ 
                delay: 5000, 
                disableOnInteraction: false 
              }}
              loop={true}
              className="h-full w-full"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full">
                    <Image
                      src={image}
                      alt={`Hero image ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Gentle overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
          </>
        ) : (imageUrl || images.length === 1) ? (
          <>
            <Image
              src={imageUrl || images[0]}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
            {/* Gentle overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
          </>
        ) : null}

        {/* Animated Text → Button Transformation */}
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <AnimatePresence mode="wait">
            {/* Phase 1: Inspirational Text */}
            {animationPhase === 'text1' && (
              <motion.p
                key="text1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl md:text-4xl lg:text-5xl font-light text-white text-center tracking-wide leading-relaxed drop-shadow-2xl"
              >
                {inspirationalText}
              </motion.p>
            )}

            {/* Phase 2: Transition Text */}
            {animationPhase === 'text2' && (
              <motion.p
                key="text2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-3xl md:text-4xl lg:text-5xl font-light text-white text-center tracking-wide drop-shadow-2xl"
              >
                {transitionText}
              </motion.p>
            )}

            {/* Phase 3: CTA Button */}
            {animationPhase === 'button' && (
              <motion.div
                key="button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.34, 1.56, 0.64, 1], // Bouncy ease
                }}
              >
                <Link href={ctaButtonLink}>
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-10 py-4 md:px-14 md:py-5 text-lg md:text-xl font-medium text-white bg-gradient-to-r from-[#4A5D4F] to-[#6B8A6E] rounded-full shadow-2xl overflow-hidden group"
                  >
                    {/* Animated background shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      animate={{
                        x: ['-200%', '200%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Button text */}
                    <span className="relative z-10 flex items-center gap-3">
                      {ctaButtonText}
                      <motion.span
                        animate={{ x: [0, -5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        ←
                      </motion.span>
                    </span>

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                  </motion.button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Content Box - Slides up after video shrinks */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{
          delay: 2.5,
          duration: 1.5,
          ease: [0.4, 0.0, 0.2, 1]
        }}
        className="relative bg-shel-top min-h-[50vh] flex flex-col items-center justify-start px-6 md:px-12 lg:px-16 py-8 md:py-10"
      >
        {/* Logo - Fades in during slide */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 3.3,
            duration: 0.8,
            ease: [0.4, 0.0, 0.2, 1]
          }}
          className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 mb-6 md:mb-8"
        >
          <Image
            src={logoUrl}
            alt="הבית הירוק"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
        
        {/* Subtitle - Appears slightly after logo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 3.5,
            duration: 0.8,
            ease: [0.4, 0.0, 0.2, 1]
          }}
          className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-white/90 text-center tracking-wide mb-4 md:mb-6"
        >
          {subtitle}
        </motion.p>
        
        {/* Location - Appears last */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 3.7,
            duration: 0.8,
            ease: [0.4, 0.0, 0.2, 1]
          }}
          className="text-xs md:text-sm lg:text-base font-light text-white/80 tracking-[0.2em] uppercase"
        >
          {location}
        </motion.p>

        {/* Additional CTA in content box */}
        {secondaryCtaText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 3.9,
              duration: 0.8
            }}
            className="mt-10"
          >
            <Link href={secondaryCtaLink}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 text-base md:text-lg font-light text-white/90 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                {secondaryCtaText}
              </motion.button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}