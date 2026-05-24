import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ShieldCheck, Sparkles } from 'lucide-react'
import { featuredProjects } from '../data/projects'
import MagneticButton from './MagneticButton'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Projects({ onViewAllProjects, onNavigate }) {
  const handleProjectClick = (project) => {
    if (project.hasDetailPage && onNavigate) {
      if (project.slug) {
        onNavigate(project.slug)
        return
      }
    }

    // Fallback: open external link if present
    if (project.link) {
      window.open(project.link, '_blank')
    }
  }
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-end mb-16 sm:mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={container}
            className="space-y-4"
          >
            <motion.span variants={item} className="inline-block px-4 py-2 rounded-full bg-[#fff1df] text-[#c2410c] font-semibold text-sm border border-[#f2c9a4] shadow-sm">
              Portfolio
            </motion.span>
            <motion.h2 variants={item} className="section-title">
              Featured Projects
            </motion.h2>
            <motion.p variants={item} className="text-lg sm:text-xl text-[#5b341a] max-w-2xl leading-8">
              A selection of projects showcasing my ability to design and build scalable digital products.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-3 gap-3"
          >
            {[
              { value: '03', label: 'shipped products' },
              { value: '02', label: 'mobile-first builds' },
              { value: '01', label: 'realtime system' },
            ].map((stat) => (
              <div key={stat.label} className="card-glass text-center py-6">
                <div className="text-3xl font-bold text-[#c2410c] mb-1">{stat.value}</div>
                <div className="text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] text-[#7c2d12]/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -8 }}
              className="group card-glass overflow-hidden flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-[1.5rem] mb-6 aspect-[4/3] bg-gradient-to-br from-white to-gray-50">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(194,65,12,0.12)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#7c2d12] shadow-sm">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col min-h-0">
                <h3 className="text-2xl font-bold text-[#1f1308] mb-3">{project.title}</h3>
                <p className="text-[#5b341a] mb-6 leading-7 max-h-[4.5rem] overflow-hidden">{project.description}</p>

                <div className="rounded-2xl border border-[#f2c9a4]/80 bg-white/75 p-4 mb-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#c2410c] font-semibold mb-2">Problem</p>
                  <p className="text-sm text-[#7c2d12] leading-6">{project.challenge}</p>
                </div>

                <div className="rounded-2xl border border-[#f2c9a4]/80 bg-white/75 p-4 mb-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#c2410c] font-semibold mb-2">Outcome</p>
                  <p className="text-sm text-[#7c2d12] leading-6">{project.outcome}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-28 overflow-auto pr-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex gap-3 rounded-2xl border border-[#f2c9a4]/70 bg-white/70 px-4 py-2 min-w-0">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#c2410c] flex-shrink-0" />
                        <span className="text-sm text-[#5b341a] leading-5 break-words whitespace-normal">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                    <ShieldCheck size={13} />
                    {project.status}
                  </span>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-[#fff3e6] text-[#7c2d12] text-xs font-semibold border border-[#f2c9a4]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                  <div className="mb-6 rounded-2xl border border-[#f2c9a4]/75 bg-[#fff3e6]/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#c2410c] font-semibold mb-3">Proof Points</p>
                  <ul className="space-y-2">
                    {project.proof.map((point) => (
                      <li key={point} className="text-sm text-[#7c2d12] leading-6 flex items-start gap-2">
                        <Sparkles size={14} className="text-[#c2410c] mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="mt-auto pt-6 border-t border-[#efd6bd]">
                  {project.hasDetailPage && (
                    <div className="mb-3">
                      <span className="inline-block px-2 py-1 rounded-full bg-[#eef2ff] text-[#4f46e5] text-xs font-semibold border border-[#e6e6ff]">Case study</span>
                    </div>
                  )}

                  {!project.ctaHidden && (project.hasDetailPage && project.slug && onNavigate ? (
                    <motion.button
                      onClick={() => onNavigate(project.slug)}
                      whileHover={{ scale: 1.03 }}
                      type="button"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#c2410c] text-white font-semibold hover:bg-[#9a3412] transition-colors group"
                    >
                      View Product
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  ) : (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#c2410c] text-white font-semibold hover:bg-[#9a3412] transition-colors group"
                    >
                      View Project
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 pt-10 border-t border-[#efd6bd]"
        >
          <p className="text-[#5b341a] mb-5">Want to see full case-study depth including challenge, approach, and product outcomes?</p>
          <MagneticButton
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c2410c] text-white font-semibold hover:bg-[#9a3412] transition-all group shadow-[0_14px_32px_rgba(194,65,12,0.22)]"
          >
            View All Projects
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
