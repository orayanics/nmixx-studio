import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface RouteLoadingOverlayProps {
  children: React.ReactNode
  triggerKey: string
  text?: string
  durationMs?: number
}

export default function RouteLoadingOverlay({
  children,
  triggerKey,
  text = 'loading',
  durationMs = 780,
}: RouteLoadingOverlayProps) {
  const prefersReducedMotion = useReducedMotion()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    setIsVisible(true)

    const timeout = window.setTimeout(() => {
      setIsVisible(false)
    }, prefersReducedMotion ? 1 : durationMs)

    return () => window.clearTimeout(timeout)
  }, [durationMs, prefersReducedMotion, triggerKey])

  return (
    <>
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: '-100%',
              opacity: 0,
              transition: {
                duration: prefersReducedMotion ? 0.001 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="fixed inset-0 z-[9999] grid place-items-center bg-yellow-400 text-gray-900 pointer-events-none"
          >
            <p className="font-mono text-base md:text-2xl font-bold tracking-[0.22em] uppercase">
              {text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
