import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Sparkles, Check } from 'lucide-react'
import FloatingOrbs from './FloatingOrbs'

export default function KITEProductPage({ onNavigateHome, scrollY = 0 }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [expandedImage, setExpandedImage] = useState(null)

  const kiteImages = [
    '/assets/Kite/ Client%20managemet.png',
    '/assets/Kite/Privacy.png',
    '/assets/Kite/Revenue.png',
    '/assets/Kite/Tracking.png',
    '/assets/Kite/Smart%20insights.png',
    '/assets/Kite/DashBoard.png',
    '/assets/Kite/Agreements%20and%20invoices.png',
  ]

  const goHome = () => {
    if (onNavigateHome) {
      onNavigateHome('/')
      return
    }

    window.history.pushState({}, '', '/')
    window.dispatchEvent(new PopStateEvent('popstate'))
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const features = [
    { title: 'Payment Tracking', description: 'Monitor all payments with detailed transaction history and status updates' },
    { title: 'Client Management', description: 'Organize client information, contacts, and communication history in one place' },
    { title: 'Expense Monitoring', description: 'Track business expenses and maintain accurate financial records' },
    { title: 'Legal Documents', description: 'Generate professional legal documents for contracts and agreements' },
    { title: 'WhatsApp Reminders', description: 'Send automated payment reminders directly via WhatsApp' },
    { title: 'Secure Data Exchange', description: 'Export and import data in encrypted format for complete data security' },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      <FloatingOrbs scrollY={scrollY} />

      <div className="relative z-10">
        {/* Header */}
        <div className="section-container pt-8 sm:pt-10 pb-8 sm:pb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between gap-4"
          >
            <button
              type="button"
              onClick={goHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fff7ea]/95 border border-[#f2c9a4] text-[#7c2d12] font-semibold shadow-sm hover:shadow-md transition-all"
            >
              <ArrowLeft size={16} />
              Back Home
            </button>

            <span className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fff1df]/90 border border-[#f2c9a4] text-[#c2410c] text-sm font-semibold">
              <Sparkles size={14} />
              Product Showcase
            </span>
          </motion.div>
        </div>

        {/* Hero Section */}
        <div className="section-container pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-2 lg:order-1"
            >
              <span className="inline-flex px-4 py-2 rounded-full bg-[#fff1df]/95 border border-[#f2c9a4] text-[#c2410c] font-semibold text-sm shadow-sm">
                Product
              </span>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1f1308] leading-[0.94] tracking-tight">
                KITE:
                <span className="block bg-gradient-to-r from-[#c2410c] via-[#fb923c] to-[#8b5cf6] bg-clip-text text-transparent">
                  Business Manager
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#5b341a] leading-8 max-w-xl">
                A fully local, free CRM built for small businesses and freelancers. Manage payments, clients, expenses, and documents all in one place—no subscription, no external dependencies.
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href="https://indusapp.store/qxoauons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c2410c] text-white font-semibold shadow-[0_14px_32px_rgba(194,65,12,0.22)] hover:bg-[#9a3412] transition-all group"
                >
                  View Product
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="rounded-2xl border border-[#f2c9a4] bg-[#fff7ea]/80 shadow-[0_24px_80px_rgba(180,83,9,0.10)] overflow-hidden">
                <div className="aspect-[1/1.2] bg-gradient-to-br from-[#fff7ea] to-[#f2c9a4] flex items-center justify-center p-8">
                  <img
                    src="/assets/Kite/logo.png"
                    alt="KITE Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="section-container pb-12 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f1308]">Product Gallery</h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {kiteImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  whileHover={{ scale: 1.08 }}
                  className={`rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedImage === index
                      ? 'border-[#c2410c] shadow-[0_14px_32px_rgba(194,65,12,0.22)]'
                      : 'border-[#f2c9a4] hover:border-[#c2410c]/50'
                  }`}
                >
                  <div className="aspect-[9/16] bg-gradient-to-br from-[#fff7ea] to-[#f2c9a4] flex items-center justify-center overflow-hidden">
                    <img
                      src={image}
                      alt={`KITE feature ${index + 1}`}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={() => setExpandedImage(selectedImage)}
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full rounded-2xl border border-[#f2c9a4] bg-[#fff7ea]/80 shadow-[0_24px_80px_rgba(180,83,9,0.10)] overflow-hidden hover:shadow-[0_30px_90px_rgba(194,65,12,0.25)] transition-shadow"
            >
              <div className="relative w-full bg-gradient-to-br from-[#fff7ea] to-[#f2c9a4] flex items-center justify-center p-4 cursor-pointer group">
                <img
                  src={kiteImages[selectedImage]}
                  alt="KITE app feature"
                  className="max-h-[70vh] w-auto object-contain group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                  <span className="text-white/0 group-hover:text-white/100 transition-all text-sm font-semibold">Click to expand</span>
                </div>
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="section-container pb-12 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1f1308] mb-2">Key Features</h2>
              <p className="text-lg text-[#5b341a]">Everything you need to run your business efficiently</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-[#f2c9a4] bg-white/70 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-[#fff1df]">
                      <Check size={20} className="text-[#c2410c]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#1f1308] mb-2">{feature.title}</h3>
                      <p className="text-sm text-[#5b341a] leading-6">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="section-container pb-12 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="card-glass space-y-8 p-8 sm:p-10"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1f1308] mb-2">Why KITE</h2>
              <p className="text-lg text-[#5b341a]">Built specifically for SMBs and freelancers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#c2410c]">100% Local</h3>
                <p className="text-[#5b341a] leading-7">Your data stays on your machine. No cloud dependencies, no external servers.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#c2410c]">Completely Free</h3>
                <p className="text-[#5b341a] leading-7">No subscriptions, no hidden fees. Build your business without recurring costs.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#c2410c]">Secure & Encrypted</h3>
                <p className="text-[#5b341a] leading-7">Industry-standard encryption for all data exports and imports.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#c2410c]">WhatsApp Integrated</h3>
                <p className="text-[#5b341a] leading-7">Send payment reminders and notifications directly through WhatsApp.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#c2410c]">Simple & Fast</h3>
                <p className="text-[#5b341a] leading-7">Intuitive interface built for quick workflows. No learning curve.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#c2410c]">Made for SMBs</h3>
                <p className="text-[#5b341a] leading-7">Every feature designed with small business and freelancer workflows in mind.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="section-container pb-20 sm:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="card-glass text-center p-10 sm:p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f1308] mb-4">Ready to Manage Your Business?</h2>
            <p className="text-lg text-[#5b341a] mb-8 max-w-2xl mx-auto">
              Download KITE today and start building a better way to manage your payments, clients, and business operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://indusapp.store/qxoauons"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#c2410c] text-white font-semibold shadow-[0_14px_32px_rgba(194,65,12,0.22)] hover:bg-[#9a3412] transition-all group"
              >
                View Product
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                type="button"
                onClick={goHome}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#d6a57a] bg-[#fff7ea] text-[#7c2d12] font-semibold hover:border-[#c2410c] transition-colors"
              >
                <ArrowLeft size={18} />
                Back to Home
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Expanded Image Modal */}
      {expandedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setExpandedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full"
          >
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#c2410c] transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="bg-[#fff7ea]/95 rounded-2xl border border-[#f2c9a4] overflow-auto shadow-2xl flex items-center justify-center p-4">
              <img
                src={kiteImages[expandedImage]}
                alt="Expanded view"
                className="max-w-full max-h-[80vh] object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-between items-center mt-6 gap-4">
              <button
                onClick={() => setExpandedImage((prev) => (prev === 0 ? kiteImages.length - 1 : prev - 1))}
                className="px-4 py-2 rounded-full bg-[#c2410c] text-white hover:bg-[#9a3412] transition-colors"
              >
                ← Previous
              </button>
              <span className="text-white font-semibold text-center flex-1">
                {expandedImage + 1} / {kiteImages.length}
              </span>
              <button
                onClick={() => setExpandedImage((prev) => (prev === kiteImages.length - 1 ? 0 : prev + 1))}
                className="px-4 py-2 rounded-full bg-[#c2410c] text-white hover:bg-[#9a3412] transition-colors"
              >
                Next →
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
