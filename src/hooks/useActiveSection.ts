import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    function compute() {
      setScrolled(window.scrollY > 40)
      if (!sections.length) return

      if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 12)) {
        setActiveId(sections[sections.length - 1].id)
        return
      }

      const line = window.innerHeight * 0.35
      let id: string | null = null
      for (const s of sections) {
        const r = s.getBoundingClientRect()
        if (r.top <= line && r.bottom > line) id = s.id
      }
      setActiveId(id)
    }

    let ticking = false
    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => { compute(); ticking = false })
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds])

  return { activeId, scrolled }
}
