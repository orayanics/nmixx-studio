import { motion } from 'framer-motion'

interface NavigationMenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function NavigationMenu({
  isMenuOpen,
  setIsMenuOpen,
}: NavigationMenuProps) {
  const variantTop = {
    closed: { rotate: 0, y: 0, stroke: '#000000' },
    opened: { rotate: 45, y: 6, stroke: '#3b82f6' },
  }

  const variantMiddle = {
    closed: { opacity: 1, x: 0, stroke: '#000000' },
    opened: { opacity: 0, x: 20, stroke: '#3b82f6' },
  }

  const variantBottom = {
    closed: { rotate: 0, y: 0, stroke: '#000000' },
    opened: { rotate: -45, y: -6, stroke: '#3b82f6' },
  }

  return (
    <div className="relative z-60 flex gap-4 items-center md:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex flex-col justify-center items-center p-2 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top Line */}
          <motion.path
            d="M4 6H20"
            strokeWidth="2"
            strokeLinecap="round"
            variants={variantTop}
            animate={isMenuOpen ? 'opened' : 'closed'}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          />
          {/* Middle Line */}
          <motion.path
            d="M4 12H20"
            strokeWidth="2"
            strokeLinecap="round"
            variants={variantMiddle}
            animate={isMenuOpen ? 'opened' : 'closed'}
            transition={{ duration: 0.3 }}
          />
          {/* Bottom Line */}
          <motion.path
            d="M4 18H20"
            strokeWidth="2"
            strokeLinecap="round"
            variants={variantBottom}
            animate={isMenuOpen ? 'opened' : 'closed'}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          />
        </svg>
      </button>
    </div>
  )
}
