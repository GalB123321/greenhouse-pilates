'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface HeroSmoothProps {
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

export default function HeroSmooth({
  videoUrl,
  imageUrl,
  imageAlt = 'Hero background',
  inspirationalText = 'תנועו מתוך אהבה, לא מתוך פחד',
  transitionText = 'זוזו בדרך שלכם',
  ctaButtonText = 'הדרך שמתאימה לי',
  ctaButtonLink = '/questionnaire',
  logoUrl = '/images/LOGO.png',
  subtitle = 'פילאטיס • יוגה • תנועה • קהילה',
  location = 'אביחיל',
  secondaryCtaText = 'רוצה לשמוע עוד',
  secondaryCtaLink = '/contact'
}: HeroSmoothProps) {
  const [animationPhase, setAnimationPhase] = useState(0) // 0: nothing, 1: first text, 2: second text, 3: final

  useEffect(() => {
    // Smooth progression through phases
    const timers = [
      setTimeout(() => setAnimationPhase(1), 300),    // First text
      setTimeout(() => setAnimationPhase(2), 1800),   // Second text (overlaps slightly)
      setTimeout(() => setAnimationPhase(3), 3200)    // Final content - appears faster
    ]
    
    return () => timers.forEach(timer => clearTimeout(timer))
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

      {/* Main Content Container - Always centered */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        
        {/* Animation Container with crossfade */}
        <div className="relative w-full max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            
            {/* Phase 1: First Text */}
            {animationPhase === 1 && (
              <motion.div
                key="text1"
                className="text-center"
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  filter: 'blur(0px)',
                }}
                exit={{ 
                  opacity: 0, 
                  y: -20,
                  filter: 'blur(10px)',
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut"
                }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mb-4">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {inspirationalText}
                  </motion.span>
                </h1>
              </motion.div>
            )}

            {/* Phase 2: Second Text */}
            {animationPhase === 2 && (
              <motion.div
                key="text2"
                className="text-center"
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  filter: 'blur(0px)'
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 1.05,
                  filter: 'blur(8px)',
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut"
                }}
              >
                <motion.h2 
                  className="text-5xl md:text-7xl lg:text-8xl font-thin text-white"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {transitionText}
                </motion.h2>
              </motion.div>
            )}

            {/* Phase 3: Final Content */}
            {animationPhase === 3 && (
              <motion.div
                key="content"
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Logo with smooth entrance */}
                <motion.div
                  className="relative w-40 h-40 md:w-52 md:h-52 mb-8"
                  initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ 
                    duration: 1,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                >
                  <motion.div
                    className="w-full h-full"
                    animate={{ 
                      rotate: [0, 1, -1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src={logoUrl}
                      alt="הבית הירוק"
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 768px) 160px, 208px"
                    />
                  </motion.div>
                </motion.div>

                {/* Subtitle with stagger */}
                <motion.div
                  className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-10 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                >
                  {subtitle.split(' • ').map((part, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 0.4 + (i * 0.1),
                        duration: 0.5
                      }}
                    >
                      {i > 0 && ' • '}
                      {part}
                    </motion.span>
                  ))}
                </motion.div>

                {/* CTA Button with smooth entrance */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.6, 
                    duration: 0.6,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
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
                      <motion.span
                        className="flex items-center gap-2"
                      >
                        {ctaButtonText}
                        <motion.span
                          animate={{ x: [0, -3, 0] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          ←
                        </motion.span>
                      </motion.span>
                    </motion.button>
                  </Link>
                </motion.div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Button that appears with first text - smooth transition */}
        <AnimatePresence>
          {animationPhase === 1 && (
            <motion.div
              className="absolute bottom-20"
              initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
              animate={{ 
                opacity: 1, 
                y: 0,
                filter: 'blur(0px)'
              }}
              exit={{ 
                opacity: 0, 
                y: 20,
                filter: 'blur(5px)'
              }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4,
                ease: "easeOut"
              }}
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
                  >
                    {ctaButtonText}
                    <motion.span
                      animate={{ x: [0, -3, 0] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ←
                    </motion.span>
                  </motion.span>
                </motion.button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator - positioned at the very bottom of the hero */}
      <AnimatePresence>
        {animationPhase === 3 && (
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="flex flex-col items-center gap-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-white/50 rounded-full mt-2"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <span className="text-white/50 text-xs font-light">גללו למטה</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}