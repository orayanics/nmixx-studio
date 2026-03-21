import { useEffect, useRef } from 'react'

export default function useSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const handleWheel = (e: WheelEvent) => {
      const raw = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
      if (raw === 0) return

      const { scrollLeft, scrollWidth, clientWidth } = slider
      const atStart = scrollLeft <= 0
      const atEnd = scrollLeft + clientWidth >= scrollWidth - 1

      if ((raw > 0 && atEnd) || (raw < 0 && atStart)) return

      e.preventDefault()

      let delta = raw
      if (e.deltaMode === 1) delta *= 40 // Firefox: line → px
      if (e.deltaMode === 2) delta *= clientWidth // page → px
      delta = Math.sign(delta) * Math.min(Math.abs(delta), 120) // clamp wheel spikes

      slider.scrollLeft += delta
    }

    // Drag scroll desktop
    let isDragging = false
    let startPageX = 0
    let startScroll = 0
    let lastPageX = 0
    let lastTs = 0
    let momentumV = 0 // px/ms, positive = scrolling right
    let rafId = 0

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true
      startPageX = e.pageX
      startScroll = slider.scrollLeft
      lastPageX = e.pageX
      lastTs = performance.now()
      momentumV = 0
      cancelAnimationFrame(rafId)
      slider.style.cursor = 'grabbing'
      document.body.style.userSelect = 'none'
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      const now = performance.now()
      const dt = now - lastTs
      if (dt > 0) momentumV = (lastPageX - e.pageX) / dt
      lastPageX = e.pageX
      lastTs = now
      slider.scrollLeft = startScroll + (startPageX - e.pageX)
    }

    const stopDrag = () => {
      if (!isDragging) return
      isDragging = false
      slider.style.cursor = 'grab'
      document.body.style.userSelect = ''

      let v = momentumV * 16 // scale px/ms → px/frame @ 60 fps
      const decay = () => {
        if (Math.abs(v) < 0.5) return
        slider.scrollLeft += v
        v *= 0.9
        rafId = requestAnimationFrame(decay)
      }
      rafId = requestAnimationFrame(decay)
    }

    slider.addEventListener('wheel', handleWheel, { passive: false })
    slider.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', stopDrag)

    return () => {
      slider.removeEventListener('wheel', handleWheel)
      slider.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', stopDrag)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return sliderRef
}
