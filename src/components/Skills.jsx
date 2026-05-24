import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, Zap } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'from-blue-500 to-blue-600',
    skills: ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Flutter', 'Animations & Interactions'],
  },
  {
    title: 'Backend',
    icon: Zap,
    color: 'from-purple-500 to-purple-600',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Real-time Database', 'Supabase', 'Firebase', 'Cloud Deployment'],
  },
  {
    title: 'Design & Tools',
    icon: Palette,
    color: 'from-pink-500 to-pink-600',
    skills: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems', 'Git/GitHub', 'Vercel', 'Netlify'],
  },
]

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="text-center mb-20"
        >
          <motion.span variants={item} className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm border border-blue-100 mb-4">
            Expertise
          </motion.span>
          <motion.h2 variants={item} className="section-title text-center">
            Skills & Technologies
          </motion.h2>
          <motion.p variants={item} className="text-xl text-gray-700 max-w-2xl mx-auto">
            I leverage modern tools and technologies to build scalable, performant digital products.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                variants={item}
                whileHover={{ y: -10 }}
                className="group card-glass"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900 text-sm font-medium border border-gray-200 hover:border-blue-300 transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Build Philosophy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="mt-24 card-glass max-w-4xl mx-auto"
        >
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">My Build Philosophy</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              I focus on building products that balance <span className="font-semibold text-blue-600">performance</span>, <span className="font-semibold text-blue-600">usability</span>, and <span className="font-semibold text-blue-600">visual quality</span>. Every line of code and design decision is made with the end-user in mind.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond development, I'm passionate about exploring scalable startup ideas in <span className="font-semibold text-purple-600">education</span>, <span className="font-semibold text-purple-600">creator tools</span>, <span className="font-semibold text-purple-600">communities</span>, and <span className="font-semibold text-purple-600">AI-powered platforms</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
