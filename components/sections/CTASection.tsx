'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTASection() {
  const heading = "גיליתם מה הסגנון שלכם?"
  const subheading = "נהדר! עכשיו בואו נמצא את השיעור המושלם בשבילכם"
  const socialProof = "כל אחד יכול למצוא את הדרך שלו לתנועה"
  const buttonText = "גלו את האימון המתאים לכם"
  const buttonLink = "/questionnaire"
  const trustIndicator1 = "שאלון קצר שיעזור לנו להכיר אתכם"
  const trustIndicator2 = "תוצאות מותאמות אישית"

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-[#E9D692] to-[#DDB55D] relative overflow-hidden border-t-2 border-[#DDB55D]/30">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div 
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Social Proof */}
          <motion.p
            className="text-golden-dark text-lg md:text-xl font-light mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {socialProof}
          </motion.p>
          
          {/* Main Heading - HUGE */}
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-golden-dark mb-8 leading-[0.9]">
            {heading}
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-golden font-light mb-16">
            {subheading}
          </p>
          
          {/* CTA Button with pulse animation */}
          <motion.div
            className="relative inline-block"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Link
              href={buttonLink}
              className="group relative inline-flex items-center justify-center px-16 py-7 text-2xl tracking-wider uppercase font-light bg-golden text-white overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-4">
                {buttonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 transition-transform duration-300 group-hover:-translate-x-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </span>
              {/* Hover effect */}
              <div className="absolute inset-0 bg-green-pale transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
            </Link>
            
            {/* Pulsing glow behind button */}
            <div className="absolute inset-0 bg-white/30 blur-xl animate-pulse" />
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-golden-dark/70">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg font-light">{trustIndicator1}</span>
            </div>
            <div className="flex items-center gap-2 text-golden-dark/70">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg font-light">{trustIndicator2}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}