import { useEffect, useRef } from 'react'

export default function useSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return

      const { scrollLeft, scrollWidth, clientWidth } = slider
      const isScrollingDown = e.deltaY > 0
      const isScrollingUp = e.deltaY < 0

      const canScrollRight = scrollLeft + clientWidth < scrollWidth - 1
      const canScrollLeft = scrollLeft > 0

      if (
        (isScrollingDown && canScrollRight) ||
        (isScrollingUp && canScrollLeft)
      ) {
        e.preventDefault()
        slider.scrollLeft += e.deltaY * 1
      }
    }

    slider.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      slider.removeEventListener('wheel', handleWheel)
    }
  })

  return sliderRef
}
