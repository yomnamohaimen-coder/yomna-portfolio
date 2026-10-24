import { useEffect, useRef, useState } from 'react'

// Fades its content in with a small upward move, once, when it enters the
// screen. With reduced motion, the content is simply shown.
export default function Reveal({ children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!element || reduce || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={visible ? 'reveal is-visible' : 'reveal'}>
      {children}
    </div>
  )
}
