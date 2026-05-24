export const starAnimation = {
  initial: { opacity: 0, scale: 0.3 },
  whileInView: { opacity: 1, scale: 1 },
  animate: { rotate: 360 },
  transition: {
    opacity: { duration: 0.6, ease: 'easeOut' as const },
    scale: { duration: 0.6, ease: 'easeOut' as const },
    rotate: { duration: 8, ease: 'linear' as const, repeat: Infinity },
  },
  viewport: { margin: '-100px' },
}
