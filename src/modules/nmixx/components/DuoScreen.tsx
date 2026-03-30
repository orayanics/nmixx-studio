import { useEffect, useRef, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import LoaderSpinner from '@/components/Loader/LoaderSpinner'
import type { IndividualImage } from '@/configs/landing'
import { Link } from '@tanstack/react-router'

type Align = 'left' | 'center' | 'right'

interface DuoScreenProps {
  align?: Align
  index: string
  title: string
  description: string
  names: string
  img: string
  indivs?: IndividualImage | IndividualImage[]
}

export default function DuoScreen(props: DuoScreenProps) {
  const {
    align = 'left',
    index,
    title,
    description,
    names,
    img,
    indivs,
  } = props
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
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
      width: 'w-screen',
    },
    center: {
      container: 'items-center',
      text: 'text-center items-center',
      width: 'w-screen',
    },
    right: {
      container: 'items-end',
      text: 'text-right items-end',
      width: 'w-screen',
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

  useEffect(() => {
    if (imgRef.current?.complete) setIsLoaded(true)
  }, [])

  return (
    <div className="relative h-full w-full overflow-hidden group">
      {!isLoaded && <LoaderSpinner isFullScreen />}
      {/* overlays */}
      <div className="absolute z-10 inset-0 bg-linear-to-t from-blue-600/40 to-transparent opacity-50 pointer-events-none" />
      <div className="absolute z-10 inset-0 halftone-aura opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

      {indivArray.length > 0 && (
        <div
          className={`w-screen items-center justify-center h-full absolute z-20 flex gap-4 md:gap-10`}
        >
          {indivArray.map((item) => (
            <div key={item.title} className="relative w-70 h-100">
              {/* Invisible hover zone */}
              <Link
                to="/nmixx/$member"
                params={{ member: item.title.toLowerCase() }}
                className="absolute inset-0 cursor-pointer"
              >
                <motion.img
                  initial={{ opacity: 0, scale: 1 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  whileTap={{ opacity: 1, scale: 1.05 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover border-2 border-white saturate-[0.5] contrast-[1.2]"
                />
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
        flex flex-col justify-center ${styles.container} gap-6`}
      >
        <div className={`relative w-full flex flex-col gap-2 ${styles.text}`}>
          <motion.p
            variants={itemVariants}
            className="uppercase tracking-widest text-xs md:text-md"
          >
            {index}. blue valentine
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="font-serif text-sm md:text-4xl lg:text-7xl capitalize max-w-40 md:max-w-md lg:max-w-lg"
          >
            {description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="w-fit border text-xs md:text-lg my-1 md:my-2 p-1 md:p-2"
          >
            <p>{title}</p>
          </motion.div>
        </div>

        <div className={`relative w-full flex flex-col ${styles.text}`}>
          <motion.h1
            variants={itemVariants}
            className="font-serif italic text-md md:text-xl capitalize"
          >
            {names}
          </motion.h1>
        </div>
      </motion.div>

      {/* image */}
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={imgRef}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        src={img}
        alt={names}
        className="grayscale-100 contrast-[1.2]"
      />
    </div>
  )
}
