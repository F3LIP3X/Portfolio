import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const root = document.documentElement

    /* ---- Tema claro / oscuro ---- */
    const themeBtn = document.getElementById('themeBtn')!
    const themeIcon = document.getElementById('themeIcon')!

    function paintTheme() {
      const dark = root.getAttribute('data-theme') === 'dark'
      themeIcon.className = dark ? 'fa-solid fa-moon' : 'fa-solid fa-sun'
      const meta = document.querySelector('meta[name="theme-color"]')
      if (meta) meta.setAttribute('content', dark ? '#06070a' : '#eef1f6')
    }
    paintTheme()

    function onThemeClick() {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
      root.setAttribute('data-theme', next)
      try { localStorage.setItem('theme', next) } catch { /* storage unavailable */ }
      paintTheme()
    }
    themeBtn.addEventListener('click', onThemeClick)

    /* ---- Menú móvil ---- */
    const navToggle = document.getElementById('navToggle')!
    const navLinks = document.getElementById('navLinks')!

    function onNavToggleClick() {
      const open = navLinks.classList.toggle('open')
      navToggle.setAttribute('aria-expanded', String(open))
      navToggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>'
    }
    function onNavLinksClick(e: Event) {
      if ((e.target as HTMLElement).tagName === 'A') {
        navLinks.classList.remove('open')
        navToggle.setAttribute('aria-expanded', 'false')
        navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>'
      }
    }
    navToggle.addEventListener('click', onNavToggleClick)
    navLinks.addEventListener('click', onNavLinksClick)

    /* ---- Nav: estado scrolled + enlace activo ---- */
    const nav = document.getElementById('nav')!
    const links = Array.prototype.slice.call(navLinks.querySelectorAll('a')) as HTMLAnchorElement[]
    const sections = links
      .map((a) => document.querySelector(a.getAttribute('href')!))
      .filter(Boolean) as HTMLElement[]

    function currentSection(): string | null {
      if (!sections.length) return null
      if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 12)) {
        return sections[sections.length - 1].id
      }
      const line = window.innerHeight * 0.35
      let id: string | null = null
      sections.forEach((s) => {
        const r = s.getBoundingClientRect()
        if (r.top <= line && r.bottom > line) id = s.id
      })
      return id
    }

    function setActive(id: string | null) {
      links.forEach((a) => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id)
      })
    }

    /* ---- Barra de progreso + parallax del hero ---- */
    const progress = document.getElementById('progress')
    const heroInner = document.querySelector<HTMLElement>('.hero-inner')
    const hero = document.getElementById('hero')

    function onFrame() {
      if (!progress) return
      const max = document.documentElement.scrollHeight - window.innerHeight
      progress.style.setProperty('--p', max > 0 ? (window.scrollY / max).toFixed(4) : '0')
      if (heroInner && hero) {
        const p = Math.min(window.scrollY / (hero.offsetHeight * 0.75), 1)
        heroInner.style.setProperty('--hp', p.toFixed(3))
      }
    }

    let ticking = false
    function onScroll() {
      nav.classList.toggle('scrolled', window.scrollY > 40)
      setActive(currentSection())
      onFrame()
      ticking = false
    }
    function onScrollRaf() {
      if (!ticking) { requestAnimationFrame(onScroll); ticking = true }
    }
    window.addEventListener('scroll', onScrollRaf, { passive: true })
    onScroll()

    /* ---- Escalonado automático ---- */
    document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
      const step = parseInt(group.dataset.stagger || '60', 10) || 60
      Array.prototype.forEach.call(group.children, (child: HTMLElement, i: number) => {
        child.style.setProperty('--d', (i * step) + 'ms')
      })
    })

    document.querySelectorAll<HTMLElement>('.grid, .timeline, .skills-grid').forEach((group) => {
      let i = 0
      Array.prototype.forEach.call(group.children, (child: HTMLElement) => {
        if (child.classList.contains('reveal') && !child.style.getPropertyValue('--d')) {
          child.style.setProperty('--d', (i * 70) + 'ms')
          i++
        }
      })
    })

    /* ---- Reveal al hacer scroll ---- */
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -70px 0px' })
    document.querySelectorAll('.reveal, .pop, .section-head').forEach((el) => io.observe(el))

    /* ---- Contadores animados ---- */
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        counterIO.unobserve(el)
        const raw = el.textContent!.trim()
        const prefix = raw.charAt(0) === '+' ? '+' : ''
        const target = parseInt(raw.replace(/\D/g, ''), 10) || 0
        const t0 = performance.now()
        const dur = 1100
        function step(now: number) {
          const k = Math.min((now - t0) / dur, 1)
          const eased = 1 - Math.pow(1 - k, 3)
          el.textContent = prefix + Math.round(target * eased)
          if (k < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      })
    }, { threshold: 0.6 })
    document.querySelectorAll('.stat b').forEach((el) => counterIO.observe(el))

    /* ---- Filtro de habilidades ---- */
    const filterBtns = Array.from(document.querySelectorAll<HTMLButtonElement>('.filter-btn'))
    const skills = Array.from(document.querySelectorAll<HTMLElement>('#skillsGrid .skill'))
    function onFilterClick(this: HTMLButtonElement) {
      filterBtns.forEach((b) => b.classList.remove('active'))
      this.classList.add('active')
      const f = this.dataset.filter
      skills.forEach((s) => {
        s.classList.toggle('hide', f !== 'all' && s.dataset.cat !== f)
      })
    }
    filterBtns.forEach((btn) => btn.addEventListener('click', onFilterClick))

    /* ---- Datos dinámicos ---- */
    const footerYear = document.getElementById('footer-year')
    if (footerYear) footerYear.textContent = String(new Date().getFullYear())

    const start = new Date('2026-06-01')
    const now = new Date()
    const days = Math.floor((now.getTime() - start.getTime()) / 86400000)
    const months = Math.floor(days / 30.44)
    const durationText = days < 30
      ? (days === 1 ? '1 día' : days + ' días')
      : (months === 1 ? '1 mes' : months + ' meses')
    const durationEl = document.getElementById('quantia-duration')
    if (durationEl) durationEl.textContent = durationText

    const first = new Date('2024-03-01')
    const years = Math.max(1, Math.floor((now.getTime() - first.getTime()) / (86400000 * 365.25)))
    const yearsEl = document.getElementById('statYears')
    if (yearsEl) yearsEl.textContent = '+' + years

    return () => {
      themeBtn.removeEventListener('click', onThemeClick)
      navToggle.removeEventListener('click', onNavToggleClick)
      navLinks.removeEventListener('click', onNavLinksClick)
      window.removeEventListener('scroll', onScrollRaf)
      filterBtns.forEach((btn) => btn.removeEventListener('click', onFilterClick))
      io.disconnect()
      counterIO.disconnect()
    }
  }, [])

  return (
    <>
      <div className="ambient" aria-hidden="true">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
      </div>

      <div className="progress" id="progress" aria-hidden="true"></div>

      <Nav />
      <Hero />

      <main>
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
