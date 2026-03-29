import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { NMIXX_MEMBERS } from '@/configs/landing'
import { ScrambleText } from './components/ScrambleText'

export default function LandingTextHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress of the entire hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Text Parallax: Fades and slides up faster
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -50])
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const smoothTextY = useSpring(textY, { stiffness: 100, damping: 20 })
  const blur = useTransform(scrollYProgress, [0, 0.4], ['0px', '10px'])

  return (
    <div
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden z-10"
    >
      <motion.div
        style={{
          y: smoothTextY,
          opacity: textOpacity,
          filter: `blur(${blur})`,
        }}
        className="relative flex flex-col items-center gap-6"
      >
        {/* Member Names Row - Entrance Stagger */}
        <div className="relative flex flex-wrap justify-center gap-x-6 gap-y-2 px-4">
          {NMIXX_MEMBERS.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-xs md:text-xl font-bold tracking-[0.3em] uppercase text-muted-foreground"
            >
              {name}
            </motion.span>
          ))}
        </div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative text-center space-y-2"
        >
          <h1 className="text-blue-500 text-7xl md:text-9xl font-bold tracking-tighter uppercase leading-none">
            <ScrambleText text="NMIXX" delay={50} />{' '}
            <span className="font-serif italic font-normal lowercase block md:inline">
              Studio
            </span>
          </h1>
          <p className="mx-auto text-sm md:text-xl tracking-[0.5em] uppercase opacity-60 max-w-xs md:max-w-xl">
            The MIXX Pop Wave Starts Now
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
