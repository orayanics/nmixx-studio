import { Link } from '@tanstack/react-router'
import styles from './Navigation.module.css'

import useNavigation from './useNavigation'

import Logo from '@/components/Logo/Logo'
import NavigationMenu from '@/components/Page/NavigationMenu'

type NavigationLink = {
  to: string
  label: string
}

interface NavigationProps {
  links: Array<NavigationLink>
}

export default function Navigation(props: NavigationProps) {
  const { links } = props
  const { isMenuOpen, isClosing, setIsMenuOpen, closeMenu } = useNavigation()

  return (
    <header className="fixed top-0 inset-s-0 z-100 w-full backdrop-blur-2xl">
      <div className="text-white container flex md:gap-3 gap-6 justify-between items-center mx-auto py-3 px-5">
        <div>
          <Logo className="invert" />
        </div>

        <div className="gap-6 text-lg items-center md:flex hidden">
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>

        <NavigationMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={(isOpen) => {
            if (isOpen) {
              setIsMenuOpen(true)
            } else {
              closeMenu()
            }
          }}
        />
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden flex absolute top-16 right-6 flex-col gap-4 items-end"
          id="navigation-menu"
        >
          {links.map((link, index) => (
            <Link
              key={link.to}
              className={`${styles['menu-item']} ${
                isClosing ? styles['menu-item--closing'] : ''
              } frosted-glass--bg rounded-full px-4 py-2 text-right`}
              to={link.to}
              onClick={closeMenu}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
