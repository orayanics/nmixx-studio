import styles from './Planet.module.css'

export default function Planet() {
  const STARS = [
    { id: 'star1', name: 'Lily', style: { top: '20%', left: '10%' } },
    { id: 'star2', name: 'Haewon', style: { top: '15%', right: '15%' } },
    { id: 'star3', name: 'Sullyoon', style: { bottom: '25%', left: '12%' } },
    { id: 'star4', name: 'Bae', style: { bottom: '30%', right: '10%' } },
    { id: 'star5', name: 'Jiwoo', style: { top: '5%', left: '45%' } },
    { id: 'star6', name: 'Kyujin', style: { bottom: '8%', right: '40%' } },
  ]

  return (
    <div className={styles.container}>
      {/* Background scanlines/grid effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {STARS.map(({ id, name, style }) => (
        <div key={id} className={styles.starWrapper} style={style}>
          <svg
            id={id}
            className={styles.starSvg}
            viewBox="0 0 100 100"
            width="30"
            height="30"
          >
            {/* Brutalist 4-point star/cross */}
            <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
          </svg>
          <span className={styles.tooltip}>{name}</span>
        </div>
      ))}

      <div className="flex items-center justify-center h-full">
        <div className={styles.scene}>
          <div className={styles.radiatingLines}></div>

          {/* Orbit with a glitch-diamond marker */}
          <div className={styles.orbitRing}>
            <div className={styles.orbitRingDot} />
          </div>

          {/* The Central Core */}
          <div className={styles.planet}>
            <div className="text-blue-500 font-black text-6xl italic z-10 select-none">
              CORE
            </div>
            {/* Halftone / Static overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://base-designs.com/halftone.png')] mix-blend-screen" />
          </div>
        </div>
      </div>

      {/* Heavy Screen Border */}
      <div className={styles.planetRim} />

      {/* Bottom Status Readout */}
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-blue-500">
        SYSTEM.STATUS: ACTIVE // SECTOR_04 // BRUTALIST_REVOLUTION
      </div>
    </div>
  )
}
