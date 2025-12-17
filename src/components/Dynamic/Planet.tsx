import styles from './Planet.module.css'

export default function Planet() {
  const STARS = [
    { id: 'star1', name: 'Lily', style: { top: '30%', left: '15%' } },
    { id: 'star2', name: 'Haewon', style: { top: '25%', right: '10%' } },
    { id: 'star3', name: 'Sullyoon', style: { bottom: '20%', left: '10%' } },
    { id: 'star4', name: 'Bae', style: { bottom: '35%', right: '18%' } },
    { id: 'star5', name: 'Jiwoo', style: { top: '12%', left: '50%' } },
    { id: 'star6', name: 'Kyujin', style: { bottom: '10%', right: '35%' } },
  ]

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {STARS.map(({ id, name, style }) => (
        <div key={id} className={styles.starWrapper} style={style}>
          <svg
            id={id}
            className={styles.starSvg}
            viewBox="0 0 100 100"
            width="20"
            height="20"
            aria-label={name}
          >
            <polygon points="50,0 61,35 100,50 61,65 50,100 39,65 0,50 39,35" />
          </svg>

          <span className={styles.tooltip}>{name}</span>
        </div>
      ))}

      <div className={styles.scene}>
        <div className={styles.radiatingLines}></div>

        <div className={styles.orbitRing}></div>
        <div className={styles.orbitRingDot} />

        <div className={styles.planet}>
          <div className={styles.planetShadow}></div>
        </div>

        <div className={styles.center}>
          <div className={styles.text}>
            B L U E<br />V A L E N T I N E
          </div>
        </div>
      </div>

      <div className={styles.planetRim} />
    </div>
  )
}
