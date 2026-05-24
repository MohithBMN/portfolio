import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingOrbs from './components/FloatingOrbs'
import ProjectsPage from './components/ProjectsPage'
import KITEProductPage from './components/KITEProductPage'
import PlayTIXProductPage from './components/PlayTIXProductPage'
import BuildLoopSection from './components/BuildLoopSection'

export default function App() {
  const [scrollY, setScrollY] = useState(0)
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    // Sync pathname with actual URL on mount
    setPathname(window.location.pathname)
  }, [])

  useEffect(() => {
    // Skip scroll tracking on mobile to prevent flickering
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    let lastScrollUpdate = 0
    const THROTTLE_MS = 32 // ~30fps for throttle

    const handleScroll = () => {
      if (isMobile) return // Don't track scroll on mobile
      
      const now = Date.now()
      if (now - lastScrollUpdate >= THROTTLE_MS) {
        setScrollY(window.scrollY)
        lastScrollUpdate = now
      }
    }

    const handlePopState = () => {
      setPathname(window.location.pathname)
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const navigateTo = (nextPath) => {
    if (window.location.pathname === nextPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    window.history.pushState({}, '', nextPath)
    setPathname(nextPath)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  if (pathname === '/projects') {
    return (
      <ProjectsPage
        scrollY={scrollY}
        onNavigateHome={navigateTo}
        onNavigate={navigateTo}
      />
    )
  }

  if (pathname === '/kite') {
    return (
      <KITEProductPage
        scrollY={scrollY}
        onNavigateHome={navigateTo}
      />
    )
  }

  if (pathname === '/playtix') {
    return (
      <PlayTIXProductPage
        scrollY={scrollY}
        onNavigateHome={navigateTo}
      />
    )
  }

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Floating 3D orbs background */}
      <FloatingOrbs scrollY={scrollY} />
      
      {/* Navigation */}
      <Navbar scrollY={scrollY} />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <BuildLoopSection />
        <Projects onViewAllProjects={() => navigateTo('/projects')} onNavigate={navigateTo} />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
