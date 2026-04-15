import { motion, type Variants } from 'framer-motion'
import type { IndividualImage } from '@/configs/landing'
import { Link } from '@tanstack/react-router'
import BorderSquare from '@/components/Layout/BorderSquare'

type Align = 'left' | 'center' | 'right'

interface DuoScreenProps {
  align?: Align
  index: string
  title?: string
  description: string
  names: string
  img: string
  indivs?: IndividualImage | IndividualImage[]
}

export default function DuoScreen(props: DuoScreenProps) {
  const { align = 'left', description, names, img, indivs } = props
  const indivArray = Array.isArray(indivs) ? indivs : indivs ? [indivs] : []

  const alignmentStyles: Record<
    Align,
    {
      container: string
      text: string
      width: string
    }
  > = {
    left: {
      container: 'items-start',
      text: 'text-left items-start',
      width: 'w-full max-w-7xl mx-auto',
    },
    center: {
      container: 'items-center',
      text: 'text-center items-center',
      width: 'w-full max-w-7xl mx-auto',
    },
    right: {
      container: 'items-end',
      text: 'text-right items-end',
      width: 'w-full max-w-7xl mx-auto',
    },
  }

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: '20%',
    },
    show: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const styles = alignmentStyles[align]

  return (
    <div className="relative h-full w-full md:overflow-visible overflow-hidden group">
      {/* overlays */}
      <div className="absolute z-10 inset-0 bg-linear-to-t from-blue-600/40 to-transparent opacity-50 pointer-events-none" />
      <div className="absolute z-10 inset-0 halftone-aura opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

      {indivArray.length > 0 && (
        <div
          className={`w-full items-center justify-center h-full absolute z-20 flex gap-4 md:gap-10 md:p-0 p-2`}
        >
          {indivArray.map((item) => (
            <div key={item.title} className="relative w-70 md:h-100 h-60">
              <Link
                to="/nmixx/$member"
                params={{ member: item.title }}
                className="absolute inset-0 cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 1 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  whileTap={{ opacity: 1, scale: 1.05 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="w-full h-full group relative border border-white"
                >
                  <div className="absolute z-10 inset-0 bg-linear-to-t from-blue-600/20 to-blue-400/30 opacity-50 pointer-events-none" />
                  <div className="absolute z-10 inset-0 halftone-aura opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

                  <motion.img
                    src={item.img}
                    alt={item.title}
                    fetchPriority="high"
                    className="w-full h-full object-cover saturate-0 contrast-[2] zine-image"
                  />
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      )}
      {/* content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05, margin: '-100px' }}
        className={`h-full ${styles.width} absolute z-10 inset-0 p-8
        flex flex-col justify-center ${styles.container} gap-2 border border-blue-500/40`}
      >
        <BorderSquare />

        <div className={`relative w-full flex flex-col gap-2 ${styles.text}`}>
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-4xl lg:text-6xl capitalize max-w-50 md:max-w-2xl font-bold"
          >
            {description}
          </motion.p>
        </div>

        <div className={`relative w-full flex flex-col ${styles.text}`}>
          <motion.h1
            variants={itemVariants}
            className="font-mono text-sm md:text-xl capitalize"
          >
            {names}
          </motion.h1>
        </div>
      </motion.div>

      {/* image */}
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        src={img}
        alt={names}
        className="grayscale-100 contrast-[1.2] h-screen w-full object-cover"
        fetchPriority="high"
      />
    </div>
  )
}
