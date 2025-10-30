'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface HeroEnhancedProps {
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

// Removed motivational bubbles for cleaner design

export default function HeroEnhanced({
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
}: HeroEnhancedProps) {
  const [animationPhase, setAnimationPhase] = useState<'text1' | 'text2' | 'content'>('text1')

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase('text2'), 2500)
    const timer2 = setTimeout(() => setAnimationPhase('content'), 4500)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
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

      {/* Removed floating bubbles for cleaner design */}

      {/* Center Content - Animated Text Sequence */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <AnimatePresence mode="wait">
          {/* Phase 1: Inspirational Text */}
          {animationPhase === 'text1' && (
            <motion.div
              key="text1"
              className="text-center"
              initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateX: 0
              }}
              exit={{ 
                opacity: 0,
                scale: 1.1,
                rotateX: 30,
                transition: { duration: 0.6 }
              }}
              transition={{ 
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mb-4"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {inspirationalText.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mx-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.2) }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>
          )}

          {/* Phase 2: Transition Text */}
          {animationPhase === 'text2' && (
            <motion.div
              key="text2"
              className="text-center"
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateY: 0
              }}
              exit={{ 
                opacity: 0,
                scale: 1.1,
                rotateY: 30,
                transition: { duration: 0.6 }
              }}
              transition={{ 
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.h2 
                className="text-5xl md:text-7xl lg:text-8xl font-thin text-white"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {transitionText}
              </motion.h2>
              <motion.div
                className="mt-8 w-32 h-1 mx-auto bg-golden"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </motion.div>
          )}

          {/* Phase 3: Content Box */}
          {animationPhase === 'content' && (
            <motion.div
              key="content"
              className="w-full max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 100 }}
              animate={{ 
                opacity: 1, 
                y: 0
              }}
              transition={{ 
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {/* Redesigned Content Section */}
              <div className="relative">
                {/* Split Design with Glass Effect */}
                <motion.div
                  className="relative flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Left Side - Logo and Info */}
                  <motion.div
                    className="flex-1 relative bg-gradient-to-br from-[#E9D692]/95 to-[#DDB55D]/90 backdrop-blur-md p-8 md:p-12 rounded-tr-[100px] rounded-bl-[100px] shadow-2xl border border-[#DDB55D]/30"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    {/* Decorative corner elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-[#DDB55D]/40 rounded-tr-[50px]" />
                    <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-[#DDB55D]/40 rounded-bl-[50px]" />
                    
                    <motion.div
                      className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Image
                        src={logoUrl}
                        alt="הבית הירוק"
                        fill
                        className="object-contain drop-shadow-xl"
                        priority
                      />
                    </motion.div>
                    
                    <div className="text-center">
                      <h3 className="text-2xl md:text-3xl font-extralight text-shel-text mb-3">
                        הבית הירוק
                      </h3>
                      <p className="text-lg text-shel-text/70 font-light">
                        {location}
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* Right Side - Info and CTAs */}
                  <motion.div
                    className="flex-1 relative bg-gradient-to-bl from-[#F5F0E5]/95 to-[#E9D692]/90 backdrop-blur-md p-8 md:p-12 rounded-tl-[100px] rounded-br-[100px] shadow-2xl border border-[#DDB55D]/30"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    {/* Decorative corner elements */}
                    <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-[#DDB55D]/40 rounded-tl-[50px]" />
                    <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-[#DDB55D]/40 rounded-br-[50px]" />
                    
                    <div className="space-y-6">
                      {/* Services */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                      >
                        <p className="text-xl md:text-2xl text-shel-text text-center font-light leading-relaxed">
                          {subtitle}
                        </p>
                      </motion.div>
                      
                      {/* Divider */}
                      <motion.div 
                        className="w-24 h-[1px] bg-[#DDB55D]/40 mx-auto"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                      />
                      
                      {/* CTAs */}
                      <motion.div 
                        className="flex flex-col gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.6 }}
                      >
                        <Link href={ctaButtonLink}>
                          <motion.button
                            className="w-full px-8 py-4 bg-gradient-to-r from-[#DDB55D] to-[#C99F4A] text-white rounded-2xl shadow-lg font-light tracking-wide"
                            whileHover={{ 
                              scale: 1.03,
                              boxShadow: "0 15px 30px rgba(201, 169, 97, 0.4)"
                            }}
                            whileTap={{ scale: 0.97 }}
                          >
                            {ctaButtonText}
                          </motion.button>
                        </Link>
                        
                        <Link href={secondaryCtaLink}>
                          <motion.button
                            className="w-full px-8 py-3 bg-[#E9D692]/50 backdrop-blur-sm border border-[#DDB55D]/40 text-shel-text rounded-2xl font-light"
                            whileHover={{ 
                              backgroundColor: "rgba(201, 169, 97, 0.1)",
                              scale: 1.03
                            }}
                            whileTap={{ scale: 0.97 }}
                          >
                            {secondaryCtaText}
                          </motion.button>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating accent shapes */}
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 bg-[#DDB55D]/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#E9D692]/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </div>

              {/* Scroll Indicator */}
              <motion.div
                className="mt-12 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <motion.div
                  className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="w-1 h-3 bg-white/70 rounded-full mt-2"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <motion.p
                  className="text-white/70 text-sm mt-2 font-light"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  גללו למטה
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}