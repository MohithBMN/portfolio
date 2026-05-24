import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react'
import FloatingOrbs from './FloatingOrbs'
import { featuredProjects } from '../data/projects'

const uiDesignProjects = [
  {
    title: 'Momento UI',
    folder: 'momento_UI',
    images: [
      '/assets/momento_UI/add_place_bottom_sheet/screen.png',
      '/assets/momento_UI/empty_state_memories/screen.png',
      '/assets/momento_UI/empty_state_saved/screen.png',
      '/assets/momento_UI/momento_home_refined_map_view/screen.png',
      '/assets/momento_UI/momento_list_timeline_screen/screen.png',
      '/assets/momento_UI/profile_settings/screen.png',
      '/assets/momento_UI/saved_memory_detail/screen.png',
      '/assets/momento_UI/search_filters/screen.png',
    ],
    summary: 'A soft, map-led memory app built around personal places, saved moments, and an intentionally calm visual hierarchy.',
    proof: 'The screenshot proves the core direction: a refined map view, floating search and profile controls, and an airy shell that keeps the memory content emotionally centered.',
    highlights: ['Map-first discovery', 'Glassmorphism chrome', 'Personal journaling flow'],
    accent: 'from-sky-50 via-white to-indigo-50',
  },
  {
    title: 'Rhythmiq UI',
    folder: 'rhythmiq_UI',
    images: [
      '/assets/rhythmiq_UI/artist_view/screen.png',
      '/assets/rhythmiq_UI/edit_profile/screen.png',
      '/assets/rhythmiq_UI/equalizer/screen.png',
      '/assets/rhythmiq_UI/music_library/screen.png',
      '/assets/rhythmiq_UI/now_playing/screen.png',
      '/assets/rhythmiq_UI/playlist_view/screen.png',
      '/assets/rhythmiq_UI/profile/screen.png',
      '/assets/rhythmiq_UI/search/screen.png',
      '/assets/rhythmiq_UI/settings/screen.png',
    ],
    summary: 'A dark, neon music experience tuned for album browsing, playback, and expressive artist storytelling.',
    proof: 'The proof screen shows the music library shell, floating playback controls, and the layered gradient treatment that gives the interface its immersive studio feel.',
    highlights: ['Immersive music library', 'Neon gradient lighting', 'Playback-first layout'],
    accent: 'from-fuchsia-50 via-white to-cyan-50',
  },
  {
    title: 'GradeForward UI',
    folder: 'gradeforward_UI',
    images: [
      '/assets/gradeforward_UI/ai_processing/screen.png',
      '/assets/gradeforward_UI/ai_study_dashboard/screen.png',
      '/assets/gradeforward_UI/ai_study_notes/screen.png',
      '/assets/gradeforward_UI/authentication/screen.png',
      '/assets/gradeforward_UI/file_upload/screen.png',
      '/assets/gradeforward_UI/flashcards/screen.png',
      '/assets/gradeforward_UI/onboarding/screen.png',
      '/assets/gradeforward_UI/quiz_interface/screen.png',
      '/assets/gradeforward_UI/quiz_results/screen.png',
      '/assets/gradeforward_UI/settings/screen.png',
      '/assets/gradeforward_UI/splash_screen/screen.png',
      '/assets/gradeforward_UI/subject_workspace/screen.png',
    ],
    summary: 'An AI learning platform that turns study materials into quizzes, flashcards, summaries, and guided progress flows.',
    proof: 'The screenshot validates the dashboard direction with an AI status visualization, study tools, and active subject cards that make the workflow feel intelligent and structured.',
    highlights: ['AI study dashboard', 'Progress-driven learning', 'Quiz and flashcard tooling'],
    accent: 'from-cyan-50 via-white to-violet-50',
  },
  {
    title: 'StudySync UI',
    folder: 'studysync_UI',
    images: [
      '/assets/studysync_UI/discover_groups/screen.png',
      '/assets/studysync_UI/edit_profile/screen.png',
      '/assets/studysync_UI/group_information_updated/screen.png',
      '/assets/studysync_UI/group_members_list/screen.png',
      '/assets/studysync_UI/login_screen/screen.png',
      '/assets/studysync_UI/onboarding_group_chat/screen.png',
      '/assets/studysync_UI/onboarding_resource_sharing/screen.png',
      '/assets/studysync_UI/onboarding_study_rooms/screen.png',
      '/assets/studysync_UI/onboarding_video_meetings/screen.png',
      '/assets/studysync_UI/signup_screen/screen.png',
      '/assets/studysync_UI/studysync_group_chat/screen.png',
      '/assets/studysync_UI/studysync_home_available_groups/screen.png',
      '/assets/studysync_UI/studysync_my_groups/screen.png',
      '/assets/studysync_UI/studysync_profile_updated/screen.png',
      '/assets/studysync_UI/studysync_video_meeting/screen.png',
    ],
    summary: 'A collaborative study ecosystem for finding groups, joining rooms, and keeping academic work organized.',
    proof: 'The proof screen shows the discover flow with subject filters, recommended groups, and a strong bottom navigation pattern designed for repeat usage.',
    highlights: ['Group discovery', 'Study-room onboarding', 'Community navigation'],
    accent: 'from-emerald-50 via-white to-sky-50',
  },
  {
    title: 'Opinly UI',
    folder: 'opinly_UI',
    images: [
      '/assets/opinly_UI/category_feed/screen.png',
      '/assets/opinly_UI/create_review/screen.png',
      '/assets/opinly_UI/edit_review/screen.png',
      '/assets/opinly_UI/entity_detail_zenith_phone_pro_max/screen.png',
      '/assets/opinly_UI/home_feed/screen.png',
      '/assets/opinly_UI/landing_page/screen.png',
      '/assets/opinly_UI/login_screen/screen.png',
      '/assets/opinly_UI/media_gallery_zenith_phone_pro_max/screen.png',
      '/assets/opinly_UI/my_profile/screen.png',
      '/assets/opinly_UI/review_detail/screen.png',
      '/assets/opinly_UI/search_results/screen.png',
      '/assets/opinly_UI/signup_screen/screen.png',
      '/assets/opinly_UI/similar_items_smartphones/screen.png',
      '/assets/opinly_UI/universal_search/screen.png',
    ],
    summary: 'A trust-first review platform for product discovery, comparison, and community-driven recommendations.',
    proof: 'The landing page screenshot proves the editorial tone, clear review hierarchy, and polished call-to-action structure that support the wider product story.',
    highlights: ['Review-first storytelling', 'Trust-centric product pages', 'Search and discovery flows'],
    accent: 'from-blue-50 via-white to-green-50',
  },
]

export default function ProjectsPage({ onNavigateHome, onNavigate, scrollY = 0 }) {
  const goHome = () => {
    if (onNavigateHome) {
      onNavigateHome('/')
      return
    }

    window.history.pushState({}, '', '/')
    window.dispatchEvent(new PopStateEvent('popstate'))
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const totalCaseStudies = featuredProjects.length + uiDesignProjects.length
  const pageStats = [
    { value: String(totalCaseStudies).padStart(2, '0'), label: 'case studies' },
    { value: String(uiDesignProjects.length).padStart(2, '0'), label: 'ui systems' },
    { value: String(featuredProjects.length).padStart(2, '0'), label: 'featured builds' },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      <FloatingOrbs scrollY={scrollY} />

      <div className="relative z-10">
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
              All Projects
            </span>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-end">
            <div className="max-w-2xl space-y-6">
              <span className="inline-flex px-4 py-2 rounded-full bg-[#fff1df]/95 border border-[#f2c9a4] text-[#c2410c] font-semibold text-sm shadow-sm">
                Selected Work
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1f1308] leading-[0.94] tracking-tight">
                Projects that feel
                <span className="block bg-gradient-to-r from-[#c2410c] via-[#fb923c] to-[#8b5cf6] bg-clip-text text-transparent">
                  designed, built, and shipped.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#5b341a] leading-8 max-w-xl">
                A fuller look at the products I’ve worked on across mobile, startup, and realtime product experiences.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {pageStats.map((stat) => (
                <div key={stat.label} className="card-glass text-center">
                  <div className="text-3xl font-bold text-[#c2410c] mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#7c2d12]/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-container pb-20 sm:pb-28">
          <div className="space-y-10 lg:space-y-14">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}
              >
                <div className="group relative overflow-hidden rounded-[2rem] border border-[#f2c9a4] bg-[#fff7ea]/80 shadow-[0_24px_80px_rgba(180,83,9,0.10)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(194,65,12,0.08)_100%)]" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#7c2d12] shadow-sm">
                      {project.category}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <span className="inline-flex px-3 py-1.5 rounded-full bg-[#fff1df]/90 border border-[#f2c9a4] text-[#c2410c] text-xs font-semibold uppercase tracking-[0.18em]">
                      Project {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full px-3 py-1.5 bg-white/90 border border-[#f2c9a4] text-xs font-semibold text-[#7c2d12]">
                        {project.role}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                        <ShieldCheck size={12} />
                        {project.status}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1f1308] leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-lg text-[#5b341a] leading-8">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-[#f2c9a4]/80 bg-white/75 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-[#c2410c] font-semibold mb-2">Challenge</p>
                      <p className="text-sm text-[#7c2d12] leading-6">{project.challenge}</p>
                    </div>
                    <div className="rounded-2xl border border-[#f2c9a4]/80 bg-white/75 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-[#c2410c] font-semibold mb-2">Approach</p>
                      <p className="text-sm text-[#7c2d12] leading-6">{project.approach}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#f2c9a4]/80 bg-[#fff3e6]/75 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#c2410c] font-semibold mb-2">Product Outcome</p>
                    <p className="text-sm text-[#7c2d12] leading-6">{project.outcome}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 rounded-2xl bg-white/70 border border-[#f2c9a4]/70 p-4 min-w-0">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#c2410c] flex-shrink-0" />
                        <span className="text-sm sm:text-base text-[#5b341a] leading-6 break-words whitespace-normal">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-[#fff3e6] text-[#7c2d12] text-sm font-semibold border border-[#f2c9a4]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-[#f2c9a4]/80 bg-white/75 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#c2410c] font-semibold mb-3">Proof</p>
                    <ul className="space-y-2">
                      {project.proof.map((point) => (
                        <li key={point} className="text-sm text-[#7c2d12] leading-6 flex items-start gap-2">
                          <Sparkles size={14} className="text-[#c2410c] mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    {!project.ctaHidden && (project.hasDetailPage && project.slug && onNavigate ? (
                      <motion.button
                        onClick={() => onNavigate(project.slug)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#c2410c] text-white font-semibold shadow-[0_14px_32px_rgba(194,65,12,0.22)] hover:bg-[#9a3412] transition-colors"
                      >
                        View Product
                        <ExternalLink size={16} />
                      </motion.button>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#c2410c] text-white font-semibold shadow-[0_14px_32px_rgba(194,65,12,0.22)] hover:bg-[#9a3412] transition-colors"
                      >
                        View Product
                        <ExternalLink size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="mt-20 sm:mt-28 mb-10 space-y-4"
          >
            <span className="inline-flex px-4 py-2 rounded-full bg-[#fff1df]/95 border border-[#f2c9a4] text-[#c2410c] font-semibold text-sm shadow-sm">
              UI Designs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f1308] tracking-tight max-w-4xl leading-tight">
              Five separate UI systems, each backed by folder screenshots as proof.
            </h2>
            <p className="text-lg sm:text-xl text-[#5b341a] leading-8 max-w-3xl">
              This section groups the concepts by product so each design reads independently, with its own visual language, rationale, and screenshot evidence from the attached UI folders.
            </p>
          </motion.div>

          <div className="space-y-8 sm:space-y-10">
            {uiDesignProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-[2rem] border border-[#e7d8c6] bg-white/85 shadow-[0_24px_80px_rgba(180,83,9,0.08)]"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
                  <div className={`p-6 sm:p-8 lg:p-10 bg-gradient-to-br ${project.accent} border-b lg:border-b-0 lg:border-r border-[#eee2d2]`}>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-[#7c2d12]/70 font-semibold">Screenshot gallery</p>
                        <p className="text-sm text-[#7c2d12]">{project.images.length} screens from the {project.folder} folder</p>
                      </div>
                      <a
                        href={project.images[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#f2c9a4] bg-white/90 px-4 py-2 text-sm font-semibold text-[#7c2d12] shadow-sm hover:shadow-md transition-all"
                      >
                        Open first proof
                        <ExternalLink size={15} />
                      </a>
                    </div>

                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
                      {project.images.map((image, imageIndex) => (
                        <a
                          key={image}
                          href={image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group relative overflow-hidden rounded-2xl border border-white/85 bg-white shadow-[0_14px_40px_rgba(17,24,39,0.12)] ${imageIndex === 0 ? 'col-span-2 xl:col-span-3' : ''}`}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screen ${imageIndex + 1}`}
                            className="w-full aspect-[9/16] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-[#fff1df]/90 border border-[#f2c9a4] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c2410c]">
                        UI design proof
                      </span>
                      <span className="inline-flex items-center rounded-full bg-[#f8fafc] border border-[#d9e3ef] px-3 py-1.5 text-xs font-semibold text-[#475569]">
                        Source folder: {project.folder}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#1f1308] tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-lg text-[#5b341a] leading-8">
                        {project.summary}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="rounded-2xl border border-[#edd9c0] bg-[#fffaf3] px-4 py-3 text-sm font-semibold text-[#7c2d12] shadow-sm">
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl border border-[#f2c9a4]/80 bg-[#fff7ea]/85 p-5 sm:p-6">
                      <p className="text-xs uppercase tracking-[0.18em] text-[#c2410c] font-semibold mb-2">What this proof shows</p>
                      <p className="text-sm sm:text-base text-[#7c2d12] leading-7">
                        {project.proof}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="mt-16 card-glass text-center"
          >
            <p className="text-lg sm:text-xl text-[#5b341a] mb-6 max-w-2xl mx-auto">
              Want to collaborate on a product, MVP, or mobile app? I’m open to building more work like this.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                type="button"
                onClick={goHome}
                className="btn-primary inline-flex items-center justify-center"
              >
                Back to Home
              </button>
              <a
                href="mailto:hello@mohith.dev"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
