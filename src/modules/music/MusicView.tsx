// import { motion } from 'framer-motion'
import MusicDiscography from './MusicDiscography'
import MusicHeroImage from './MusicHeroImage'
import { LANDING_BACKGROUND } from '@/configs/landing'

export default function MusicView() {
  return (
    <>
      {/* <div className="relative w-screen h-screen">
        <svg
          viewBox="30 0 800 400" // x, y, width, height
          preserveAspectRatio="xMidYMid meet"
          className="w-full"
        >
          <motion.path
            d="M0 300 Q 300 0 600 200 T 900 200"
            // d="M0 100 Q 100 0 200 100 T 400 100"
            strokeLinecap="round"
            stroke="black"
            fill="transparent"
            strokeWidth="50"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="stroke-blue-500"
          />
        </svg>
      </div> */}
      <MusicHeroImage BACKGROUND={LANDING_BACKGROUND} scrollId="discography" />
      <MusicDiscography />
    </>
  )
}
