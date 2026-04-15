import BorderSquare from '@/components/Layout/BorderSquare'
import { NMIXX_MEMBERS } from '@/configs/landing'
import { motion } from 'framer-motion'

export default function LandingZineHeading() {
  return (
    <div
      className="h-full max-w-7xl mx-auto relative p-10
      border border-blue-500/40 bg-linear-to-t from-blue-500/5 to-transparent"
    >
      <BorderSquare />
      <div>
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-9xl"
        >
          meet the
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-9xl"
        >
          <span
            className="lowercase block md:inline
          font-bold text-blue-500"
          >
            members
          </span>
        </motion.p>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {NMIXX_MEMBERS.map((name, i) => (
          <motion.span
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-xs md:text-xl lowercase font-mono"
          >
            {name}
          </motion.span>
        ))}
      </div>
    </div>
  )
}
