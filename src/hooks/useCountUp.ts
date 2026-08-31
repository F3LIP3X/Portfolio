import { useEffect, useRef, useState } from 'react'

export function useCountUp(target: number, prefix = '') {
  const ref = useRef<HTMLElement>(null)
  const [display, setDisplay] = useState(prefix + '0')

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        const dur = 1100
        function step(now: number) {
          const k = Math.min((now - t0) / dur, 1)
          const eased = 1 - Math.pow(1 - k, 3)
          setDisplay(prefix + Math.round(target * eased))
          if (k < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      })
    }, { threshold: 0.6 })

    io.observe(el)
    return () => io.disconnect()
  }, [target, prefix])

  return { ref, display }
}
