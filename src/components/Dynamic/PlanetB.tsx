import styles from './PlanetB.module.css'

export default function PlanetB() {
  const STARS = [
    { id: 'star1', name: 'Lily', style: { top: '15%', left: '20%' } },
    { id: 'star2', name: 'Haewon', style: { top: '25%', right: '15%' } },
    { id: 'star3', name: 'Sullyoon', style: { bottom: '20%', left: '10%' } },
    { id: 'star4', name: 'Bae', style: { bottom: '35%', right: '25%' } },
    { id: 'star5', name: 'Jiwoo', style: { top: '10%', left: '50%' } },
    { id: 'star6', name: 'Kyujin', style: { bottom: '10%', right: '45%' } },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.noise}></div>

      {/* Background Stars */}
      <div className={styles.stars}></div>

      {/* Big Stars with Unique IDs */}
      {STARS.map(({ id, name, style }) => (
        <div key={id} id={id} className={styles.bigStar} style={style}>
          <span className={styles.tooltip}>{name}</span>
        </div>
      ))}

      <div className={styles.scene}>
        {/* Radiating Lines (Fan) */}
        <div className={styles.radiatingLines}></div>

        {/* Outer Orbit Ring */}
        <div className={styles.orbitRing}></div>

        {/* The Planet */}
        <div className={styles.planet}>
          <div className={styles.planetShadow}></div>
          <div className={styles.planetRim}></div>
        </div>

        {/* Central Cross/Star */}
        <div className={styles.cross}>
          <div className={styles.vertical}></div>
          <div className={styles.horizontal}></div>
          <div className={styles.text}>B L U E V A L E N T I N E</div>
        </div>
      </div>
    </div>
  )
}
