import { useEffect, useState } from 'react'

export default function useNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const closeMenu = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsMenuOpen(false)
      setIsClosing(false)
    }, 400)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const menu = document.getElementById('navigation-menu')
      if (menu && !menu.contains(event.target as Node)) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return { isMenuOpen, isClosing, setIsMenuOpen, closeMenu }
}
