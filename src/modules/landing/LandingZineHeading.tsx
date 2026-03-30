import { NMIXX_MEMBERS } from '@/configs/landing'
import { motion } from 'framer-motion'

export default function LandingZineHeading() {
  return (
    <div className="h-[40vh] mb-40 text-center flex flex-col items-center justify-center">
      <div className="flex flex-col ">
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-7xl md:text-9xl font-bold tracking-tighter  leading-none"
        >
          meet the
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-7xl md:text-9xl font-bold tracking-tighter  leading-none"
        >
          <span className="font-serif italic font-normal lowercase block md:inline">
            members
          </span>
        </motion.p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-4">
          {NMIXX_MEMBERS.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-xs md:text-xl lowercase italic font-serif"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}
