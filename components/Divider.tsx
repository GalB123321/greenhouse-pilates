import React from 'react'
import { motion } from 'framer-motion'

interface DividerProps {
  type?: 'gradient' | 'solid' | 'wave' | 'dots'
  color?: string
  className?: string
}

export default function Divider({ 
  type = 'gradient', 
  color = 'green-light',
  className = '' 
}: DividerProps) {
  
  if (type === 'wave') {
    return (
      <div className={`relative h-16 w-full overflow-hidden ${className}`}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-green-light/10"
          />
        </svg>
      </div>
    )
  }
  
  if (type === 'dots') {
    return (
      <motion.div 
        className={`flex justify-center items-center py-8 ${className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex gap-3">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-green-light"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </motion.div>
    )
  }
  
  if (type === 'solid') {
    return (
      <motion.div 
        className={`h-1 bg-${color} ${className}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
    )
  }
  
  // Default gradient type
  return (
    <motion.div 
      className={`h-2 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="h-full bg-gradient-to-r from-transparent via-green-light/30 to-transparent" />
    </motion.div>
  )
}