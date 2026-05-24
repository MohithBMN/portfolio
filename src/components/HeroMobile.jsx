import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
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

// Mobile-only version with NO scroll animations or heavy animations
export default function HeroMobile() {
  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 flex items-center relative overflow-hidden bg-[#fff7ea]">
      <div className="absolute inset-0 -z-10 opacity-50 [background-image:linear-gradient(rgba(214,120,49,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(214,120,49,0.22)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,239,221,0.5)_28%,rgba(194,65,12,0.08)_100%)]" />
      
      <div className="section-container w-full relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-10 max-w-2xl"
        >
          <motion.div variants={item} className="space-y-6">
            <h1 className="text-5xl font-bold text-[#1f1308] leading-[0.92] tracking-tight">
              Developer
              <br />
              <span className="animated-designer-gradient bg-clip-text text-transparent">
                • Designer
              </span>
              <br />
              Founder
            </h1>

            <p className="text-lg text-[#5b341a] leading-8">
              I design, build, and launch modern web & mobile products. Full-stack developer creating scalable apps with clean UI and strong user experience.
            </p>

            <p className="text-base text-[#7c2d12] leading-7">
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
                <div className="text-sm font-bold text-[#c2410c]">{stat.value}</div>
                <div className="text-[0.62rem] uppercase tracking-[0.16em] text-[#7c2d12]/75 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col gap-4 pt-2"
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
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-[#fff3e6] hover:bg-[#c2410c] text-[#2d1606] hover:text-white flex items-center justify-center transition-colors group border border-[#f2c9a4]"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-[#fff3e6] hover:bg-[#c2410c] text-[#2d1606] hover:text-white flex items-center justify-center transition-colors group border border-[#f2c9a4]"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-[#fff3e6] hover:bg-[#c2410c] text-[#2d1606] hover:text-white flex items-center justify-center transition-colors group border border-[#f2c9a4]"
            >
              <Twitter size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
