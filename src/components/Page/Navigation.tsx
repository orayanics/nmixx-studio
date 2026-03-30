import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import {
  motion,
  AnimatePresence,
  type Variants,
  type Easing,
} from 'framer-motion'
import useNavigation from './useNavigation'
import Logo from '@/components/Logo/Logo'
import NavigationMenu from '@/components/Page/NavigationMenu'
import useScrolled from '@/utils/useScrolled'

type NavigationLink = {
  to: string
  label: string
}

interface NavigationProps {
  links: Array<NavigationLink>
}

const smoothEase: Easing = [0.76, 0, 0.24, 1]

export default function Navigation(props: NavigationProps) {
  const { links } = props
  const { isMenuOpen, setIsMenuOpen, closeMenu } = useNavigation()
  const { scrolledRef } = useScrolled()

  const menuVariants: Variants = {
    hidden: { y: '-100%' },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: smoothEase },
    },
    exit: {
      y: '-100%',
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: smoothEase,
      },
    },
  }

  const textVariants: Variants = {
    hidden: { y: '100%', opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.08,
        duration: 0.6,
        ease: smoothEase,
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      transition: {
        delay: (links.length - 1 - i) * 0.08 + 0.25,
        duration: 0.01,
      },
    }),
  }

  const overlayVariants: Variants = {
    hidden: { scaleX: 0, transformOrigin: 'left' },

    visible: {
      scaleX: 0,
      transition: { duration: 0 },
    },

    exit: (i: number) => ({
      scaleX: [0, 1, 1, 0],
      transformOrigin: ['left'],
      transition: {
        delay: (links.length - 1 - i) * 0.08,
        duration: 0.8,
        ease: smoothEase,
        times: [0, 0.4, 0.6, 1],
      },
    }),
  }

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')

    const handleResize = () => {
      if (media.matches) closeMenu()
    }

    handleResize()
    media.addEventListener('change', handleResize)

    return () => media.removeEventListener('change', handleResize)
  }, [closeMenu])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header
      ref={scrolledRef}
      className="top-0 inset-s-0 z-50 w-full bg-blue-500 border-b-2 border-black"
    >
      {/* --- HEADER BAR --- */}
      <div className="text-black container flex md:gap-3 gap-6 justify-between items-center px-4 relative z-50">
        <div>
          <Logo className="h-12! py-2" />
        </div>
        <div className="text-xs uppercase font-semibold items-center md:flex hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="border-r-2 first:border-l-2 border-black h-12 flex items-center px-6 hover:bg-blue-800 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <NavigationMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={(isOpen) => {
            if (isOpen) setIsMenuOpen(true)
            else closeMenu()
          }}
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="navigation-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex md:hidden flex-col items-center justify-center topographic-bg w-screen h-dvh overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-4 mt-12">
              {links.map((link, i) => (
                <div
                  key={link.to}
                  className="relative overflow-hidden px-2 py-1"
                >
                  <motion.div
                    custom={i}
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute inset-0 bg-blue-500 z-10 pointer-events-none"
                  />

                  <motion.div
                    custom={i}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Link
                      to={link.to}
                      onClick={closeMenu}
                      className="block text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] transition-colors duration-300 relative z-0"
                      activeProps={{
                        className: 'text-blue-500',
                      }}
                      inactiveProps={{
                        className: 'text-white hover:text-blue-500',
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.8, duration: 0.4 },
              }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="absolute bottom-12 flex flex-col items-center gap-2"
            >
              <p className="text-blue-500 text-xs tracking-[0.2em] font-bold uppercase">
                NMIXX Studio
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
