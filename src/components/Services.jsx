import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Smartphone, Palette, Rocket, Zap, Users } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Web Development',
    description: 'Building scalable web applications with modern frontend and robust backend architecture.',
    features: [
      'React & Next.js development',
      'REST API & backend systems',
      'Database design & optimization',
      'Cloud deployment & DevOps',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications with native-like performance and beautiful UI.',
    features: [
      'Flutter development',
      'iOS & Android deployment',
      'Real-time features',
      'App store optimization',
    ],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design creating beautiful and functional digital experiences.',
    features: [
      'Wireframing & prototyping',
      'Design systems creation',
      'User research & testing',
      'Figma design files',
    ],
  },
  {
    icon: Rocket,
    title: 'MVP Development',
    description: 'Fast-tracked MVP development to validate your idea and reach market quickly.',
    features: [
      'Rapid prototyping',
      'Startup-focused approach',
      'MVP to production',
      'Iteration & scaling',
    ],
  },
  {
    icon: Zap,
    title: 'Startup Prototyping',
    description: 'Turn your startup idea into a working prototype with full product thinking.',
    features: [
      'Product strategy',
      'Technical architecture',
      'User-focused iteration',
      'Launch preparation',
    ],
  },
  {
    icon: Users,
    title: 'Product Design Consultation',
    description: 'Strategic guidance on building products that users love and businesses scale.',
    features: [
      'Product strategy sessions',
      'Technical feasibility review',
      'Growth recommendations',
      'Ongoing mentorship',
    ],
  },
]

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

export default function Services() {
  return (
    <section id="services" className="relative bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="text-center mb-20"
        >
          <motion.span variants={item} className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm border border-blue-200 mb-4">
            Services
          </motion.span>
          <motion.h2 variants={item} className="section-title text-center">
            What I Can Do For You
          </motion.h2>
          <motion.p variants={item} className="text-xl text-gray-700 max-w-2xl mx-auto">
            Open to projects, collaborations, and startup opportunities. Let's build something impactful together.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{ y: -8 }}
                className="card-glass group"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                  <Icon size={32} />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-3 items-start text-sm">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mt-24 card-glass"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">My Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand your goals and requirements' },
              { step: '02', title: 'Strategy', desc: 'Plan the technical & product approach' },
              { step: '03', title: 'Build', desc: 'Develop with quality and best practices' },
              { step: '04', title: 'Iterate', desc: 'Launch and improve based on feedback' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-4xl font-bold text-blue-600/20 mb-2">{item.step}</div>
                <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 text-2xl text-blue-300">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
