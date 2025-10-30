'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'דף הבית' },
  { href: '/about', label: 'אודות' },
  { href: '/classes', label: 'שיעורים' },
  { href: '/contact', label: 'צור קשר' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    // Prevent body scroll when menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [pathname, isMobileMenuOpen])

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  }

  const logoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.6
      }
    }
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + (i * 0.1),
        duration: 0.6
      }
    })
  }

  const ctaVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.9,
        duration: 0.6
      }
    }
  }

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/20 shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="px-6 md:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            
            {/* Logo - Right side for RTL */}
            <motion.div variants={logoVariants}>
              <Link
                href="/"
                className="relative block transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                  <Image
                    src="/images/logo.png"
                    alt="הבית הירוק"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    className={`text-sm lg:text-base font-normal tracking-wide transition-all duration-300 ${
                      isScrolled 
                        ? pathname === link.href 
                          ? 'text-green-primary' 
                          : 'text-gray-700 hover:text-green-primary'
                        : pathname === link.href 
                          ? 'text-white' 
                          : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop CTA Button - Left side for RTL */}
            <motion.div 
              variants={ctaVariants}
              className="hidden md:block"
            >
              <Link
                href="/questionnaire"
                className={`inline-flex items-center px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-normal rounded-full border transition-all duration-300 ${
                  isScrolled
                    ? 'border-green-primary text-green-primary hover:bg-green-light/10'
                    : 'border-white/40 text-white hover:bg-white/10'
                }`}
              >
                שאלון היכרות
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              variants={ctaVariants}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden relative w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
                isScrolled ? 'text-green-primary' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex flex-col justify-center">
                <span className="block h-[2px] w-full bg-current mb-1.5" />
                <span className="block h-[2px] w-full bg-current mb-1.5" />
                <span className="block h-[2px] w-full bg-current" />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Full Screen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 z-50 bg-green-primary md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header with close button */}
              <div className="flex items-center justify-between px-6 py-8">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative block"
                >
                  <div className="relative w-20 h-20">
                    <Image
                      src="/images/logo.png"
                      alt="הבית הירוק"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative w-10 h-10 flex items-center justify-center text-white"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Centered Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center items-center px-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.6,
                      ease: 'easeOut'
                    }}
                    className="w-full text-center"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-4 text-4xl md:text-5xl font-light text-white hover:text-white/70 transition-colors duration-300 ${
                        pathname === link.href ? 'text-white' : 'text-white/90'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA Button */}
              <div className="px-6 pb-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-center"
                >
                  <Link
                    href="/questionnaire"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex items-center px-8 py-3 text-lg font-normal rounded-full border border-white text-white hover:bg-white/10 transition-all duration-300"
                  >
                    שאלון היכרות
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}