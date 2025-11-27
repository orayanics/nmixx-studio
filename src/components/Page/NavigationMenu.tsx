import { Menu } from 'lucide-react'

interface NavigationMenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function NavigationMenu(props: NavigationMenuProps) {
  const { isMenuOpen, setIsMenuOpen } = props

  return (
    <div className="flex gap-4 items-center">
      <button className="md:flex hidden">
        <a href="/(public)/login">Login</a>
      </button>

      <button
        className="md:hidden flex"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu />
      </button>
    </div>
  )
}
