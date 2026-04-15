import { useEffect, useRef } from 'react'

export default function useScrolled() {
  const scrolledRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = scrolledRef.current
    if (!el) return

    const onScroll = () => {
      if (window.scrollY > 0) {
        el.classList.add('fixed')
        el.classList.remove('relative')
      } else {
        el.classList.add('relative')
        el.classList.remove('fixed')
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return {
    isScrolled: scrolledRef.current?.classList.contains('fixed') || false,
    scrolledRef,
  }
}
