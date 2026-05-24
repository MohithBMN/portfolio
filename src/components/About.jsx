import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import videoSrc from '../../assets/video1.mp4'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  const videoRef = useRef(null)

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return
        }

        if (entry.isIntersecting) {
          const playPromise = videoElement.play()
          if (playPromise?.catch) {
            playPromise.catch(() => {})
          }
        } else {
          videoElement.pause()
          videoElement.currentTime = 0
        }
      },
      { threshold: 0.45 },
    )

    observer.observe(videoElement)

    return () => observer.disconnect()
  }, [])

  const highlights = [
    'Full-stack developer specializing in modern web & mobile',
    'Product-focused with startup experience',
    'UI/UX designer creating scalable interfaces',
    'Graphic designer crafting visual identities for web & print',
    'Hands-on builder from design to deployment',
  ]

  return (
    <section id="about" className="relative">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center"
        >
          {/* Left - Video */}
          <motion.div
            variants={fadeInUp}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/20 bg-gray-100">
                <motion.video
                  ref={videoRef}
                  whileHover={{ scale: 1.02 }}
                  src={videoSrc}
                  aria-label="Mohith introduction video"
                  className="relative w-full h-full object-cover aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5]"
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-16 h-6 rounded-md bg-white/95 border border-white/70 shadow-sm pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={fadeInUp} className="order-1 lg:order-2 space-y-10">
            <div className="space-y-5">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm border border-blue-100">
                About Me
              </span>
              <h2 className="section-title">
                Building Digital Products From Idea to Production
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a product-focused full-stack developer specializing in modern web and mobile applications. My work combines clean UI/UX design, scalable backend systems, and startup-oriented product thinking.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I enjoy building complete digital products — from interface design and frontend engineering to backend development, deployment, and iteration. I love the entire process of taking an idea from concept to production and continuously improving it based on user feedback.
            </p>

            {/* Highlights */}
            <div className="space-y-5 pt-2">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-3 items-start"
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* Identity badges */}
            <div className="flex flex-wrap gap-3 pt-6">
              {[
                'Full-Stack Developer',
                'UI/UX Designer',
                'Graphic Designer',
                'Product Builder',
                'Indie Hacker',
              ].map((badge) => (
                <motion.span
                  key={badge}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900 font-semibold text-sm border border-blue-100/50"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
