import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useRef } from 'react'
import { BLUE_VALENTINE_TRACKS } from '@/configs/landing'

const TAPE_CONFIG = BLUE_VALENTINE_TRACKS.map((_, i) => ({
  x: ((i * 137.508) % 80) - 40,
  parallax: 20 + (i % 4) * 12,
  stackOffset: i * -7,
}))

interface TapeItemProps {
  track: {
    title: string
    img: string
  }
  index: number
  scrollYProgress: MotionValue<number>
  total: number
}

interface TapeItemProps {
  track: {
    title: string
    img: string
  }
  index: number
  scrollYProgress: MotionValue<number>
  total: number
  config: {
    parallax: number
    stackOffset: number
    x: number
  }
}

export function TapeItem({
  track,
  index,
  scrollYProgress,
  total,
  config,
}: TapeItemProps) {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [config.parallax, -config.parallax],
  )

  return (
    <motion.div
      className="relative w-[90vw] md:w-full flex justify-center"
      style={{ y, x: config.x, zIndex: total - index }}
      initial={{ opacity: 0, y: 60 + index * 8, scale: 0.94 }}
      whileInView={{
        opacity: 1,
        y: config.stackOffset,
        scale: 1,
        transition: {
          duration: 0.75,
          delay: index * 0.08, // optional per-item cascade
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        scale: 1.04,
        zIndex: total + 2,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
    >
      <img
        src={track.img}
        alt={`BL cassette – ${track.title}`}
        className="relative w-full pointer-events-none object-cover -mt-1"
      />

      {/* Optional title overlay */}
      {/* <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold tracking-widest font-serif italic text-black pointer-events-none select-none">
        {track.title}
      </span> */}
    </motion.div>
  )
}
export default function LandingTapes() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  return (
    <>
      <div className="h-[40vh] my-40 text-center flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-7xl md:text-9xl font-bold tracking-tighter leading-none"
          >
            listen to
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-7xl md:text-9xl font-bold tracking-tighter leading-none"
          >
            <span className="font-serif italic font-normal lowercase block md:inline">
              blue valentine
            </span>
          </motion.p>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative w-full pt-20 flex justify-center"
        style={{ position: 'relative' }}
      >
        <div className="relative flex flex-col items-center justify-center">
          {BLUE_VALENTINE_TRACKS.map((track, i) => (
            <TapeItem
              key={i}
              track={track}
              index={i}
              scrollYProgress={scrollYProgress}
              total={BLUE_VALENTINE_TRACKS.length}
              config={TAPE_CONFIG[i]}
            />
          ))}
        </div>
      </div>
    </>
  )
}
