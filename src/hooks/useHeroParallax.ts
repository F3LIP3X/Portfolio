import { useEffect, useRef } from 'react'

/** Drives the hero's --hp CSS var directly (no re-render) as the user scrolls past it. */
export function useHeroParallax<Hero extends HTMLElement, Inner extends HTMLElement>() {
  const heroRef = useRef<Hero>(null)
  const innerRef = useRef<Inner>(null)

  useEffect(() => {
    const hero = heroRef.current
    const inner = innerRef.current
    if (!hero || !inner) return

    function onScroll() {
      const p = Math.min(window.scrollY / (hero!.offsetHeight * 0.75), 1)
      inner!.style.setProperty('--hp', p.toFixed(3))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { heroRef, innerRef }
}
