import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import profilePhoto from '../../assets/mohithillus.png'

export default function Navbar({ scrollY }) {
  const [isOpen, setIsOpen] = useState(false)
  // Only track scroll on desktop
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const isFloating = !isMobile && scrollY > 120

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-5 inset-x-0 z-50 flex justify-center transition-all duration-300"
    >
      <div
        className={`relative w-[calc(100%-1rem)] max-w-6xl transition-all duration-300 ${
          isFloating
            ? 'rounded-full border border-amber-200/80 bg-[#fff7ea]/92 backdrop-blur-xl shadow-[0_18px_60px_rgba(180,83,9,0.16)]'
            : 'rounded-full border border-transparent bg-white/45 backdrop-blur-md shadow-none'
        }`}
      >
        <div className={`section-container flex items-center justify-between ${isFloating ? 'py-2 sm:py-2.5' : 'py-4 sm:py-5'}`}>
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-3"
        >
          <img
            src={profilePhoto}
            alt="Mohith profile"
            className="w-10 h-10 rounded-full object-cover border border-white shadow-sm ring-1 ring-blue-100"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-500 bg-clip-text text-transparent">
            Mohith
          </span>
        </motion.div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ color: '#2563eb' }}
              className="text-gray-700 hover:text-[#c2410c] transition-colors font-medium"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Let's Talk
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ? (
            <X size={24} className="text-gray-900" />
          ) : (
            <Menu size={24} className="text-gray-900" />
          )}
        </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute left-0 right-0 top-full mt-3 rounded-[2rem] bg-[#fff7ea]/85 backdrop-blur-xl border border-amber-200/60 section-container py-4 shadow-[0_16px_50px_rgba(180,83,9,0.08)] z-40"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary text-center">
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
