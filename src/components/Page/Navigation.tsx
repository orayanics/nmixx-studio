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
    <nav
      className={`${styles['navigation--public']} px-4 mt-6 fixed top-0 start-0 z-50`}
    >
      <div
        className={`${styles['navigation--public-content']} liquid-glass rounded-full flex md:gap-3 gap-6 px-10 py-2 justify-between items-center`}
      >
        <div>
          <Logo />
        </div>

        <div className="flex gap-6 text-lg items-center md:flex hidden">
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
          className="absolute top-15 right-5 p-4 flex flex-col gap-4 items-end"
          id="navigation-menu"
        >
          {links.map((link, index) => (
            <Link
              key={link.to}
              className={`${styles['menu-item']} ${
                isClosing ? styles['menu-item--closing'] : ''
              } liquid-glass rounded-full px-4 py-2 text-right`}
              to={link.to}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
