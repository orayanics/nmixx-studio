import { motion } from 'framer-motion'

import LANDING_VIDEO from '@/assets/v2/hv_main.webm'
import LogoV2 from '@/components/Logo/LogoV2'

export default function Hero() {
  const title = 'studio'.split('')

  return (
    <>
      <div
        className="relative z-10 w-full min-w-screen px-10 h-svh min-h-screen
      flex flex-col items-center justify-center"
      >
        <LogoV2 />

        <motion.div>
          {title.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + index * 0.1,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className="text-4xl md:text-6xl font-bold inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-1"
      >
        <source src={LANDING_VIDEO} type="video/webm" />
      </video>
    </>
  )
}
