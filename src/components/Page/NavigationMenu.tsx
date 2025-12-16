import { Menu } from 'lucide-react'

interface NavigationMenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function NavigationMenu(props: NavigationMenuProps) {
  const { isMenuOpen, setIsMenuOpen } = props

  return (
    <div className="flex gap-4 items-center md:hidden block">
      <button
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="md:hidden flex cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu />
      </button>
    </div>
  )
}
