import { useEffect, useState } from 'react'
import { BREAKPOINTS, SIZES } from '@/configs/screen'

export default function useScreen() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS[SIZES.md])
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { isMobile }
}
