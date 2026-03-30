import { useEffect, useRef, useState } from 'react'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

import { PortraitCard } from './components/PortraitCard'
import { LANDING_BACKGROUND } from '@/configs/landing'
import TextFade from '@/components/Dynamic/TextFade'
import LoaderSpinner from '@/components/Loader/LoaderSpinner'

export default function LandingZine() {
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  useEffect(() => {
    if (imgRef.current?.complete) setIsLoaded(true)
  }, [])

  return (
    <div className="relative w-full p-4 md:p-8 flex items-center justify-center z-20">
      <motion.div
        initial={{ opacity: 0, borderColor: 'rgba(255, 255, 255, 0)' }}
        whileInView={{ opacity: 1, borderColor: 'rgba(255, 255, 255, 0.2)' }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="h-[96vh] md:h-full flex flex-col gap-2 w-full mx-auto rounded-sm shadow-2xl backdrop-blur-sm border border-white/10 p-2 md:p-4"
      >
        {/* Section 1: Triple Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.05,
            margin: '0px 0px -120px 0px',
          }}
          className="grid grid-cols-3 gap-2"
        >
          <motion.div
            variants={itemVariants}
            className="relative group zine-group"
          >
            <TextFade position="center">
              <p className="text-sm md:text-4xl lowercase italic font-serif bg-clip-text text-transparent bg-linear-to-r from-rose-600 to-rose-800">
                Lily
              </p>
            </TextFade>
            <PortraitCard
              name="LILY"
              zoom={2.2}
              focus={{ x: '23%', y: '1%' }}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative group zine-group"
          >
            <TextFade position="center">
              <p className="text-sm md:text-4xl lowercase italic font-serif bg-clip-text text-transparent bg-linear-to-r from-rose-600 to-rose-800">
                Haewon
              </p>
            </TextFade>
            <PortraitCard
              name="HAEWON"
              zoom={2.2}
              focus={{ x: '12%', y: '0%' }}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative group zine-group"
          >
            <TextFade position="center">
              <p className="text-sm md:text-4xl lowercase italic font-serif bg-clip-text text-transparent bg-linear-to-r from-rose-600 to-rose-800">
                Sullyoon
              </p>
            </TextFade>
            <PortraitCard
              name="SULLYOON"
              zoom={2.2}
              focus={{ x: '13%', y: '1%' }}
            />
          </motion.div>
        </motion.div>

        {/* Section 2: Full Width Banner */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.05,
            margin: '0px 0px -120px 0px',
          }}
          className="flex-1 group zine-group relative border border-white/30 border-border overflow-hidden aspect-21/9"
        >
          <motion.div variants={itemVariants}>
            <div className="overflow-hidden absolute z-10 inset-0 halftone-aura opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
            {!isLoaded && <LoaderSpinner isFullScreen />}
            <img
              ref={imgRef}
              onLoad={() => setIsLoaded(true)}
              onError={() => setIsLoaded(true)}
              src={LANDING_BACKGROUND}
              className="
                zine-image
                w-auto md:w-full
                h-auto md:h-full
                transform
                object-cover
                md:rotate-0 rotate-90
                scale-240 md:scale-[1.1]
                translate-x-[110%] md:-translate-x-[9%]
                translate-y-[-40%] md:-translate-y-[6%]
                origin-[0%_0%] md:origin-[-2%_0%]"
              alt="Full Group"
            />
          </motion.div>
        </motion.div>

        {/* Section 3: Triple Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.05,
            margin: '0px 0px -120px 0px',
          }}
          className="grid grid-cols-3 gap-2"
        >
          <motion.div
            variants={itemVariants}
            className="relative group zine-group"
          >
            <TextFade position="center">
              <p className="text-sm md:text-4xl lowercase italic font-serif bg-clip-text text-transparent bg-linear-to-r from-rose-600 to-rose-800">
                Jinsol
              </p>
            </TextFade>
            <PortraitCard name="BAE" zoom={3} focus={{ x: '20%', y: '8%' }} />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative group zine-group"
          >
            <TextFade position="center">
              <p className="text-sm md:text-4xl lowercase italic font-serif bg-clip-text text-transparent bg-linear-to-r from-rose-600 to-rose-800">
                Jiwoo{' '}
              </p>
            </TextFade>
            <PortraitCard
              name="JIWOO"
              zoom={2.2}
              focus={{ x: '25%', y: '15%' }}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative group zine-group"
          >
            <TextFade position="center">
              <p className="text-sm md:text-4xl lowercase italic font-serif bg-clip-text text-transparent bg-linear-to-r from-rose-600 to-rose-800">
                Kyujin
              </p>
            </TextFade>
            <PortraitCard
              name="KYUJIN"
              zoom={5}
              focus={{ x: '20%', y: '3%' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
