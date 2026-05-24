import React from 'react'
import { motion } from 'framer-motion'

export default function FloatingOrbs({ scrollY }) {
  // Disable parallax on mobile to prevent flickering
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const parallaxValue = isMobile ? 0 : scrollY

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(255,190,94,0.28),_transparent_28%),linear-gradient(180deg,_#fff3de_0%,_#fff8ef_38%,_#fffdf9_100%)]">
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(214,120,49,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(214,120,49,0.22)_1px,transparent_1px)] [background-size:36px_36px]" />

      {/* Retro sun */}
      <motion.div
        animate={{ scale: [1, 1.03, 1], y: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ y: parallaxValue * 0.08 }}
        className="absolute -top-8 right-10 w-56 h-56 rounded-full bg-gradient-to-b from-amber-300 via-orange-300 to-rose-300 blur-[2px] opacity-95 shadow-[0_0_120px_rgba(251,146,60,0.5)]"
      />

      {/* Neon horizon */}
      <motion.div
        animate={{ x: [0, 12, 0], opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 right-0 h-[34vh] bg-[linear-gradient(180deg,rgba(248,113,113,0)_0%,rgba(244,114,182,0.2)_38%,rgba(251,146,60,0.28)_100%)]"
      />

      {/* Floating lights */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ y: parallaxValue * 0.25 }}
        className="absolute top-24 left-16 w-80 h-80 rounded-full bg-gradient-to-br from-rose-300 to-orange-200 blur-3xl opacity-45 mix-blend-multiply"
      />

      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ y: parallaxValue * 0.18 }}
        className="absolute top-1/3 right-1/4 w-[26rem] h-[26rem] rounded-full bg-gradient-to-br from-amber-200 to-rose-200 blur-3xl opacity-45 mix-blend-multiply"
      />

      {/* Subtle scanline */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_50%,rgba(0,0,0,0)_50%)] bg-[size:100%_6px] opacity-20" />

      {/* Orb 1 */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          y: parallaxValue * 0.5,
        }}
        className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-300 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
      />

      {/* Orb 2 */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          y: parallaxValue * 0.3,
        }}
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-rose-300 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-22"
      />

      {/* Orb 3 */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          y: parallaxValue * 0.4,
        }}
        className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-28"
      />

      {/* Subtle dots pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="50" y="50" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="2" fill="#7c2d12" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  )
}
