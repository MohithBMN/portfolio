import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
import RetroBackground from './FloatingOrbs'
import MagneticButton from './MagneticButton'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function Hero() {
  const { scrollY } = useScroll()
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  
  // Only use scroll transforms on desktop - avoid re-renders on mobile
  const contentY = isMobile ? 0 : useTransform(scrollY, [0, 600], [0, -24])
  const panelY = isMobile ? 0 : useTransform(scrollY, [0, 600], [0, 18])

  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 flex items-center relative overflow-hidden">
      <RetroBackground />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-[conic-gradient(from_180deg,_rgba(194,65,12,0.22),_rgba(249,115,22,0.08),_rgba(139,92,246,0.2),_rgba(194,65,12,0.22))] blur-3xl opacity-70"
        />
        <motion.div
          animate={{ x: [0, 16, 0], y: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 right-20 w-72 h-72 rounded-full bg-[radial-gradient(circle,_rgba(251,146,60,0.42)_0%,_rgba(251,146,60,0.14)_40%,_transparent_72%)] blur-2xl"
        />
        <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,239,221,0.5)_28%,rgba(194,65,12,0.08)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[28vh] opacity-50 [background-image:linear-gradient(to_top,rgba(194,65,12,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(194,65,12,0.6)_1px,transparent_1px)] [background-size:100%_22px,48px_100%] [mask-image:linear-gradient(to_top,black,transparent_92%)]" />
      </div>
      
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{ y: contentY }}
            className="space-y-10 max-w-2xl relative z-10"
          >
            <motion.div variants={item} className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-[4.35rem] font-bold text-[#1f1308] leading-[0.92] tracking-tight">
                Developer
                <br />
                <span className="animated-designer-gradient bg-clip-text text-transparent">
                  • Designer
                </span>
                <br />
                Founder
              </h1>

              <p className="text-xl text-[#5b341a] max-w-xl leading-8">
                I design, build, and launch modern web & mobile products. Full-stack developer creating scalable apps with clean UI and strong user experience.
              </p>

              <p className="text-base sm:text-lg text-[#7c2d12] max-w-xl leading-7">
                I turn rough startup ideas into shipped products with clear UX, robust systems, and measurable product momentum.
              </p>
            </motion.div>

            <motion.div variants={item} className="grid grid-cols-3 gap-3 max-w-xl">
              {[
                { value: '03', label: 'Core Products' },
                { value: 'End-to-End', label: 'Build Ownership' },
                { value: 'Live', label: 'Execution Style' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#f2c9a4] bg-[#fff7ea]/90 px-4 py-3 shadow-sm">
                  <div className="text-sm sm:text-base font-bold text-[#c2410c]">{stat.value}</div>
                  <div className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.16em] text-[#7c2d12]/75 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <MagneticButton
                href="#projects"
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Get In Touch
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={item}
              className="flex gap-6 pt-6"
            >
              <motion.a
                href="https://github.com/MohithBMN"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-12 h-12 rounded-full bg-[#fff3e6] hover:bg-[#c2410c] text-[#2d1606] hover:text-white flex items-center justify-center transition-colors group border border-[#f2c9a4]"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohithreddybmn/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-12 h-12 rounded-full bg-[#fff3e6] hover:bg-[#c2410c] text-[#2d1606] hover:text-white flex items-center justify-center transition-colors group border border-[#f2c9a4]"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a
                href="https://x.com/MohithRbmn"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-12 h-12 rounded-full bg-[#fff3e6] hover:bg-[#c2410c] text-[#2d1606] hover:text-white flex items-center justify-center transition-colors group border border-[#f2c9a4]"
              >
                <Twitter size={20} className="group-hover:scale-110 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Retro visual panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ y: panelY }}
            className="hidden lg:flex justify-center relative z-10"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-xl rounded-[2rem] border border-[#f2c9a4] bg-[#fff7ea]/80 backdrop-blur-md shadow-[0_24px_80px_rgba(180,83,9,0.12)] p-6 overflow-hidden"
            >
              <div className="relative h-[25rem] rounded-[1.75rem] border border-[#f2c9a4] bg-[linear-gradient(180deg,rgba(255,247,234,0.95)_0%,rgba(255,239,219,0.92)_100%)] overflow-hidden">
                <motion.div
                  animate={{ x: [0, 10, 0], y: [0, -6, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(194,65,12,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(194,65,12,0.16)_1px,transparent_1px)] [background-size:44px_44px]"
                />

                <motion.div
                  animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.05, 1] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-14 top-20 w-80 h-52 rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.35)_0%,rgba(251,146,60,0.09)_62%,transparent_100%)] blur-3xl"
                />

                <motion.div
                  animate={{ y: [0, -8, 0], scale: [1, 1.03, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-8 top-10 w-28 h-28 rounded-full bg-gradient-to-br from-[#f59e0b] via-[#fb923c] to-[#f97316] shadow-[0_0_60px_rgba(249,115,22,0.35)]"
                />

                <motion.div
                  animate={{ x: [0, 12, 0], opacity: [0.45, 0.75, 0.45] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-28 top-16 w-64 h-40 rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.35)_0%,rgba(251,146,60,0.08)_70%,transparent_100%)] blur-2xl"
                />

                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-10 right-8 bottom-14 h-24 rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(233,202,175,0.85),rgba(242,221,197,0.85))] border border-[#e8c9ab] shadow-[0_10px_30px_rgba(194,65,12,0.12)] backdrop-blur-sm"
                />

                <motion.div
                  animate={{ x: [0, 16, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute right-6 bottom-10 h-28 w-44 rounded-full border-4 border-[#c2410c] bg-transparent blur-[0.4px]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0))] pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [2, 6, 2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
