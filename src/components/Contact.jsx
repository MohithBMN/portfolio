import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, MessageSquare, Send } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Contact() {
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzdwdwob'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (error) {
      setSubmitError('Could not send message right now. Please try again in a moment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/MohithBMN',
      color: 'hover:text-gray-900',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohithreddybmn/',
      color: 'hover:text-blue-700',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: 'https://x.com/MohithRbmn',
      color: 'hover:text-blue-400',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:mohithreddybmn16@gmail.com',
      color: 'hover:text-red-600',
    },
  ]

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="text-center mb-20"
        >
          <motion.span variants={item} className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm border border-blue-100 mb-4">
            Contact
          </motion.span>
          <motion.h2 variants={item} className="section-title text-center">
            Let's Build Something Together
          </motion.h2>
          <motion.p variants={item} className="text-xl text-gray-700 max-w-2xl mx-auto">
            Interested in collaborating or building something impactful? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={item}
            className="card-glass"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MessageSquare size={28} className="text-blue-600" />
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors duration-300 bg-white/50"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors duration-300 bg-white/50"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors duration-300 bg-white/50 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    ✓ Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>

              {submitError && (
                <p className="text-sm text-red-600 font-medium">{submitError}</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={item}
            className="space-y-10"
          >
            {/* Direct Contact */}
            <div className="card-glass">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:hello@mohith.dev" className="text-blue-600 hover:text-blue-700 transition-colors">
                      mohithreddybmn16@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card-glass">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`flex items-center gap-3 p-4 rounded-lg bg-gray-50 text-gray-900 font-semibold hover:bg-blue-50 transition-all duration-300 group ${social.color}`}
                    >
                      <Icon size={24} className={`${social.color} transition-colors`} />
                      <span className="hidden sm:inline">{social.label}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 text-white"
            >
              <p className="text-lg font-semibold mb-4">Ready to start a project?</p>
              <p className="text-blue-100 mb-6">
                Whether you have a specific project or just want to chat, feel free to reach out!
              </p>
              <motion.a
                href="mailto:mohithreddybmn16@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="inline-block px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get Started
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
