import { useEffect, useRef, useState } from 'react'
import useScreen from '@/utils/useScreen'

interface UseStackToCarouselProps {
  deck: Array<{
    id: number
    title: string
    img: string
  }>
}

export default function useStackToCarousel(props: UseStackToCarouselProps) {
  const { deck } = props

  const { isMobile } = useScreen()
  const containerRef = useRef<HTMLDivElement>(null)
  const [spread, setSpread] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const count = deck.length
  const spacing = isMobile ? 410 : 640
  const isCarouselMode = spread >= 0.7
  const isStackMode = spread < 0.2

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const scrolledDistance = -rect.top
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight
      const spreadLimit = Math.max(viewportHeight * 0.1, 1)
      const rawProgress = Math.min(
        Math.max(scrolledDistance / spreadLimit, 0),
        1,
      )

      const newSpread = 1 - Math.pow(1 - rawProgress, 3)

      setSpread(newSpread)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const xPercent = (x / rect.width) * 100
    const yPercent = (y / rect.height) * 100

    card.style.setProperty('--mouse-x', `${xPercent}%`)
    card.style.setProperty('--mouse-y', `${yPercent}%`)

    // 3d tilt on hover
    const rotateY = (xPercent - 50) / 10
    const rotateX = -(yPercent - 50) / 10
    card.style.transform = `
      ${card.style.transform
        .replace(/rotateX\([^)]*\)/, '')
        .replace(/rotateY\([^)]*\)/, '')
        .trim()} 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg)
    `
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const currentTransform = card.style.transform
    // remove rotate
    card.style.transform = currentTransform
      .replace(/rotateX\([^)]*\)/g, '')
      .replace(/rotateY\([^)]*\)/g, '')
      .trim()
  }

  return {
    containerRef,
    spread,
    currentIndex,
    setCurrentIndex,
    count,
    spacing,
    isCarouselMode,
    isStackMode,
    handleMouseMove,
    handleMouseLeave,
  }
}
