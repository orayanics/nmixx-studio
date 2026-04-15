import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { NMIXX_MEMBERS } from '@/configs/landing'
import { ScrambleText } from './components/ScrambleText'
import BorderSquare from '@/components/Layout/BorderSquare'

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
      className="relative min-h-screen flex flex-col items-center justify-center z-10
      max-w-7xl mx-auto"
    >
      <motion.div
        style={{
          y: smoothTextY,
          opacity: textOpacity,
          filter: `blur(${blur})`,
        }}
        className="relative w-full h-full px-10 py-20
        flex flex-col items-center justify-center gap-12
        border border-blue-500/40 backdrop-blur-md"
      >
        <BorderSquare />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative text-center space-y-2"
        >
          <h1 className="text-blue-500 text-7xl md:text-[2rem] font-mono font-bold uppercase">
            <ScrambleText text="NMIXX" delay={50} />{' '}
            <span className="uppercase block md:inline">Studio</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative text-center space-y-2"
        >
          <p className="text-3xl md:text-5xl text-center max-w-3xl tracking-tight mx-auto">
            At the end of this infinite imagination is a utopia where all dreams
            and wishes come true.
          </p>

          <p className="text-lg text-center max-w-3xl tracking-tight mx-auto text-neutral-400">
            Many adventurers, some with malicious goals, others with goals of
            goodwill and some with peculiar but lovely goals, set out to find
            MIXXTOPIA to achieve their dreams.
          </p>
        </motion.div>

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
      </motion.div>
    </div>
  )
}
