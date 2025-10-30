'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const navLinks = [
    { href: '/', label: 'דף הבית' },
    { href: '/about', label: 'אודות' },
    { href: '/classes', label: 'שיעורים' },
    { href: '/contact', label: 'צור קשר' },
  ]

  const socialLinks = [
    { name: 'Instagram', icon: '📷', href: 'https://instagram.com' },
    { name: 'Facebook', icon: 'f', href: 'https://facebook.com' },
    { name: 'WhatsApp', icon: '💬', href: 'https://wa.me/972541234567' },
  ]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  }

  return (
    <footer className="bg-[#D1E1CA] text-[#3A3837]">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Column 1 - Studio Info (Right in RTL) */}
          <motion.div 
            className="text-center md:text-right"
            {...fadeIn}
          >
            <h3 className="text-2xl font-light tracking-wide text-[#3A3837] mb-2">
              הבית הירוק
            </h3>
            <p className="text-sm tracking-widest text-[#3A3837]/70 mb-4">
              גוף בלב
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed">
              מקום של תנועה, נשימה ויציבות. בואו להרגיש בבית בגוף שלכם.
            </p>
          </motion.div>

          {/* Column 2 - Navigation */}
          <motion.div 
            className="text-center md:text-right"
            {...fadeIn}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-lg md:text-xl font-medium mb-4 text-[#3A3837]">
              ניווט
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm md:text-base font-light hover:text-[#C99F4A] transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Contact Info */}
          <motion.div 
            className="text-center md:text-right"
            {...fadeIn}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg md:text-xl font-medium mb-4 text-[#3A3837]">
              יצירת קשר
            </h4>
            <div className="space-y-2 text-sm md:text-base font-light">
              <p>אביחיל, ישראל</p>
              <p dir="ltr" className="text-right">054-XXX-XXXX</p>
              <p>info@greenhouse.co.il</p>
            </div>
          </motion.div>

          {/* Column 4 - Social Media (Left in RTL) */}
          <motion.div 
            className="text-center md:text-right"
            {...fadeIn}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-lg md:text-xl font-medium mb-4 text-[#3A3837]">
              עקבו אחרינו
            </h4>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#3A3837]/10 hover:bg-[#3A3837]/20 flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-lg">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Section - Copyright */}
        <motion.div 
          className="border-t border-[#3A3837]/20 pt-8 mt-12"
          {...fadeIn}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="text-center space-y-2">
            <p className="text-xs md:text-sm text-[#3A3837]/60">
              © 2025 הבית הירוק. כל הזכויות שמורות
            </p>
            <p className="text-xs text-[#3A3837]/40">
              בנוי על ידי{' '}
              <a 
                href="https://github.com/galbaumel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#3A3837]/60 transition-colors"
              >
                Gal Baumel
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}