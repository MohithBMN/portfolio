import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Rocket, Sparkles } from 'lucide-react'

export default function BuildLoopSection() {
  return (
    <section id="build-loop" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-[2rem] border border-[#f2c9a4] bg-[#fff7ea]/90 shadow-[0_24px_80px_rgba(180,83,9,0.12)] p-7 sm:p-8 lg:p-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(194,65,12,0.08),transparent_35%,rgba(139,92,246,0.08))]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-10 items-start">
            <div className="space-y-4">
              <span className="inline-flex px-4 py-2 rounded-full bg-[#fff1df]/95 border border-[#f2c9a4] text-[#c2410c] font-semibold text-sm shadow-sm">
                Execution Framework
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f1308] leading-tight">
                Current Build Loop
              </h2>
              <p className="text-base sm:text-lg text-[#7c2d12] leading-7 max-w-2xl">
                I run a focused loop across design, engineering, and iteration to ship products that are both fast and reliable.
              </p>
              <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open for Projects
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[#f2c9a4] bg-white/75 p-5 space-y-4">
              {[
                { icon: Sparkles, title: 'Design with product intent', desc: 'UX flows mapped to actual user behavior before shipping.' },
                { icon: Rocket, title: 'Build fast, maintain quality', desc: 'Frontend polish + backend architecture built together.' },
                { icon: ArrowRight, title: 'Launch and iterate weekly', desc: 'Ship, measure, and improve with focused product loops.' },
              ].map((step) => {
                const Icon = step.icon
                return (
                  <div key={step.title} className="flex gap-3 items-start">
                    <div className="w-9 h-9 rounded-full bg-[#fff1df] border border-[#f2c9a4] text-[#c2410c] flex items-center justify-center flex-shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#2d1606]">{step.title}</h3>
                      <p className="text-sm text-[#7c2d12] leading-6">{step.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative mt-6 rounded-[1.25rem] border border-[#f2c9a4] bg-[#fff3e6]/90 p-4">
            <p className="text-sm text-[#7c2d12] leading-6">
              Currently building modern web and mobile experiences from Bangalore, India.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
