import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, url: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, url: 'mailto:hello@mohith.dev', label: 'Email' },
  ]

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="border-t border-[#efd6bd] bg-[#fff7ea]/70 backdrop-blur-md">
      <div className="section-container py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-4"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-[#c2410c] to-[#f97316] bg-clip-text text-transparent mb-2">
              Mohith
            </div>
            <p className="text-[#5b341a] text-sm">
              Developer • Designer • Graphic Designer •{' '}
              <span>Founder, </span>
              <a
                href="https://quantumloopsc.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c2410c] hover:text-[#9a3412] hover:underline transition-colors"
              >
                Quantum LooP
              </a>
            </p>
            <p className="text-[#7c2d12] text-sm mt-2 leading-7">
              Building digital products from idea to production.
            </p>

            <div className="rounded-2xl border border-[#f2c9a4]/80 bg-white/70 p-4">
              <p className="text-sm text-[#5b341a] leading-7">
                Product-focused full-stack engineer crafting modern web and mobile experiences with startup-level execution.
              </p>
            </div>

            <div className="rounded-2xl border border-[#f2c9a4]/80 bg-[#fff3e6]/75 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[#c2410c] font-semibold mb-2">Current Focus</p>
              <ul className="space-y-1.5 text-sm text-[#7c2d12]">
                <li>Scalable product architecture</li>
                <li>Mobile-first UX systems</li>
                <li>Fast MVP experimentation</li>
              </ul>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h3 className="font-semibold text-[#2d1606] mb-4">Navigation</h3>
            <ul className="space-y-2">
              {links.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#5b341a] hover:text-[#c2410c] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="font-semibold text-[#2d1606] mb-4">More</h3>
            <ul className="space-y-2">
              {links.slice(3).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#5b341a] hover:text-[#c2410c] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5b341a] hover:text-[#c2410c] transition-colors text-sm"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social + Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 space-y-4"
          >
            <h3 className="font-semibold text-[#2d1606] mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="w-10 h-10 rounded-full bg-[#fff3e6] hover:bg-[#c2410c] text-[#2d1606] hover:text-white flex items-center justify-center transition-colors border border-[#f2c9a4]"
                    title={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>

            <div className="rounded-2xl border border-[#f2c9a4]/80 bg-white/75 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[#c2410c] font-semibold mb-2">Availability</p>
              <p className="text-sm text-[#7c2d12] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for select product collaborations
              </p>
            </div>

            <div className="rounded-2xl border border-[#f2c9a4]/80 bg-white/75 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[#c2410c] font-semibold mb-3">Built With</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Framer Motion', 'Tailwind CSS', 'Vite'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-full bg-[#fff3e6] text-[#7c2d12] text-xs font-semibold border border-[#f2c9a4]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#efd6bd] pt-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[#7c2d12]"
          >
            <p className="flex items-center gap-1">
              Made with
              <Heart size={16} className="text-red-500 fill-red-500" />
              by Mohith • {currentYear}
            </p>
            <motion.img
              src="/assets/bmohith.svg"
              alt="Mohith Signature"
              className="h-8 opacity-80 hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-xs">
              A modern portfolio built with React, Tailwind CSS & Vite
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
