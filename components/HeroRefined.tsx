'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface HeroRefinedProps {
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

export default function HeroRefined({
  videoUrl,
  imageUrl,
  imageAlt = 'Hero background',
  inspirationalText = 'תנועו מתוך אהבה, לא מתוך פחד',
  transitionText = 'זוזו בדרך שלכם',
  ctaButtonText = 'מלאו שאלון היכרות',
  ctaButtonLink = '/questionnaire',
  logoUrl = '/images/LOGO.png',
  subtitle = 'פילאטיס • יוגה • תנועה • קהילה',
  location = 'אביחיל',
  secondaryCtaText = 'צרו קשר',
  secondaryCtaLink = '/contact'
}: HeroRefinedProps) {
  const [animationPhase, setAnimationPhase] = useState<'text1' | 'text2' | 'button'>('text1')

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase('text2'), 2000)
    const timer2 = setTimeout(() => setAnimationPhase('button'), 3500)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-warm-white">
      {/* Background Media - Refined Treatment */}
      <div className="absolute inset-0">
        {videoUrl ? (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            >
              <source src={videoUrl} type="video/mp4" />
              <source src={videoUrl} type="video/quicktime" />
            </video>
            {/* Sophisticated overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          </>
        ) : imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          </>
        ) : null}
        
        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Main Content - Refined Animation */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Text Section */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-12">
          <AnimatePresence mode="wait">
            {/* Phase 1: Inspirational Text - Elegant Fade */}
            {animationPhase === 'text1' && (
              <motion.div
                key="text1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white leading-relaxed tracking-wide">
                  {inspirationalText}
                </h1>
              </motion.div>
            )}

            {/* Phase 2: Transition Text - Subtle Scale */}
            {animationPhase === 'text2' && (
              <motion.div
                key="text2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white tracking-wide">
                  {transitionText}
                </h2>
              </motion.div>
            )}

            {/* Phase 3: CTA Button - Refined Entry */}
            {animationPhase === 'button' && (
              <motion.div
                key="button"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={ctaButtonLink}>
                  <motion.button
                    className="group relative px-14 py-5 overflow-hidden border border-white/30 backdrop-blur-sm bg-white/5 transition-all duration-500 hover:border-white/60"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Elegant hover fill */}
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                    
                    {/* Button text */}
                    <span className="relative z-10 text-white group-hover:text-shel-text transition-colors duration-500 font-light tracking-wider text-sm md:text-base flex items-center gap-4">
                      {ctaButtonText}
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </motion.button>
                </Link>
                
                {/* Elegant scroll indicator */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 bottom-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="text-white/60 text-xs tracking-widest font-light">גלול</span>
                    <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content Box - Refined Design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 3,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="relative bg-gradient-to-b from-shel-top to-shel-bottom backdrop-blur-xl border-2 border-golden-dark/30 shadow-2xl"
        >
          {/* Top border accent */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-16 md:py-20">
            {/* Logo - Subtle animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 3.5,
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative w-32 h-32 md:w-40 md:h-40 mb-8"
            >
              <Image
                src={logoUrl}
                alt="הבית הירוק"
                fill
                className="object-contain opacity-90"
                priority
              />
            </motion.div>
            
            {/* Subtitle - Refined typography */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 3.7,
                duration: 0.8,
              }}
              className="text-lg md:text-xl font-extralight text-white/90 text-center tracking-wide mb-4"
            >
              {subtitle}
            </motion.p>
            
            {/* Location - Minimal */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 3.9,
                duration: 0.8,
              }}
              className="text-xs font-light text-white/70 tracking-[0.3em] uppercase mb-10"
            >
              {location}
            </motion.p>

            {/* Secondary CTA - Refined */}
            {secondaryCtaText && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 4.1,
                  duration: 0.8
                }}
              >
                <Link href={secondaryCtaLink}>
                  <motion.button
                    className="group relative px-10 py-3 text-sm font-light text-white/90 border border-white/20 overflow-hidden transition-all duration-500 hover:border-white/40"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10 tracking-wider">{secondaryCtaText}</span>
                  </motion.button>
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}