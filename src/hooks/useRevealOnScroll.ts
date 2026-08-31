import { useEffect } from 'react'

/**
 * Page-wide scroll-reveal + stagger timing for .reveal/.pop/.section-head elements.
 * Cross-cutting presentational behaviour (not any one component's state), so it
 * runs once for the whole tree rather than being duplicated per section.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
      const step = parseInt(group.dataset.stagger || '60', 10) || 60
      Array.prototype.forEach.call(group.children, (child: HTMLElement, i: number) => {
        child.style.setProperty('--d', `${i * step}ms`)
      })
    })

    document.querySelectorAll<HTMLElement>('.grid, .timeline, .skills-grid').forEach((group) => {
      let i = 0
      Array.prototype.forEach.call(group.children, (child: HTMLElement) => {
        if (child.classList.contains('reveal') && !child.style.getPropertyValue('--d')) {
          child.style.setProperty('--d', `${i * 70}ms`)
          i++
        }
      })
    })

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -70px 0px' })

    document.querySelectorAll('.reveal, .pop, .section-head').forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])
}
