import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import useScreen from '@/utils/useScreen'

export default function Cassette() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.5 })
  const { isMobile } = useScreen()

  const positionsY = {
    top: isMobile ? -150 : -100,
    middle: isMobile ? -50 : 100,
    bottom: isMobile ? 80 : 300,
  }

  const positionsX = {
    top: isMobile ? -10 : 0,
    middle: isMobile ? -10 : -20,
    bottom: isMobile ? -10 : 0,
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-125 aspect-443/283 mt-20"
    >
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ x: positionsX.top, y: 0 }}
        animate={
          isInView ? { x: positionsX.top, y: positionsY.top } : { x: 0, y: 0 }
        }
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={
            isInView ? { y: [0, -10, 0], x: [0, -4, 0] } : { y: 0, x: 0 }
          }
          transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            className="block w-full h-auto"
            viewBox="0 0 443 283"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M222.5 1.14844L442 123.648V146.648V161.082L234 281.171L1 146.648V127.648L21 116.226L41 104.804L194.832 16.9499L208.926 8.90083L222.5 1.14844Z"
              fill="black"
            />
            <path
              d="M1 127.648L234 265.148M21 116.226L1 127.648V146.648L234 281.171L442 161.082V146.648M194.832 16.9499L208.926 8.90083L222.5 1.14844L442 123.648V146.648M442 146.648L234 265.148M234 265.148V281.171M41 104.804L157 171.777L310 83.4422L194.832 16.9499M21 116.226L41 104.804L194.832 16.9499M21 116.226L144.707 187.648H164.5L328 94.1484V77.6484L208.926 8.90083"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </motion.div>

      <motion.div
        className="z-9 absolute left-1/2 top-1/2 w-[67.268%] -translate-x-1/2 -translate-y-1/2"
        initial={{ x: positionsX.middle, y: 0 }}
        animate={
          isInView
            ? { x: positionsX.middle, y: positionsY.middle }
            : { x: -20, y: 0 }
        }
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={isInView ? { y: [0, 8, 0], x: [0, 5, 0] } : { y: 0, x: 0 }}
          transition={{ duration: 5.1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            className="block w-full h-auto"
            viewBox="0 0 298 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M292.81 103.051C286.343 118.556 272.68 132.489 253.853 143.534C227.068 159.248 189.999 169 149 169C108.001 169 70.9325 159.248 44.1475 143.534C25.3198 132.489 11.6561 118.556 5.18945 103.051C12.3234 116.008 25.3344 127.672 42.7041 137.104C69.8567 151.849 107.436 161 149 161C190.564 161 228.143 151.849 255.296 137.104C272.665 127.672 285.676 116.007 292.81 103.051ZM149 1C190.296 1 227.534 10.0963 254.341 24.6533C281.241 39.2613 296.973 58.9423 296.999 79.9473H296.934C295.794 101.627 279.128 121.368 252.424 135.736C225.755 150.086 189.273 158.952 149 158.952C108.727 158.952 72.2447 150.086 45.5752 135.736C18.8708 121.368 2.20457 101.627 1.06543 79.9473H1C1.02629 58.9423 16.7592 39.2613 43.6592 24.6533C70.4658 10.0963 107.704 1 149 1Z"
              fill="black"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </motion.div>

      <motion.div
        className="z-8 absolute inset-0"
        initial={{ x: positionsX.bottom, y: 0 }}
        animate={
          isInView
            ? { x: positionsX.bottom, y: positionsY.bottom }
            : { x: 0, y: 0 }
        }
        transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={isInView ? { y: [0, 9, 0], x: [0, 4, 0] } : { y: 0, x: 0 }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            className="block w-full h-auto"
            viewBox="0 0 443 283"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M222.5 1.14844L442 123.648V146.648V161.082L234 281.171L1 146.648V127.648L222.5 1.14844Z"
              fill="black"
            />
            <path
              d="M382 131.148C382 179.197 312.156 218.148 226 218.148C139.844 218.148 70 179.197 70 131.148C70 83.0997 139.844 44.1484 226 44.1484C312.156 44.1484 382 83.0997 382 131.148Z"
              fill="black"
            />
            <path
              d="M442 146.648V161.082L234 281.171L1 146.648V127.648L222.5 1.14844L442 123.648V146.648ZM442 146.648L234 265.148M234 265.148L1 127.648M234 265.148V281.171M382 131.148C382 179.197 312.156 218.148 226 218.148C139.844 218.148 70 179.197 70 131.148C70 83.0997 139.844 44.1484 226 44.1484C312.156 44.1484 382 83.0997 382 131.148Z"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}
