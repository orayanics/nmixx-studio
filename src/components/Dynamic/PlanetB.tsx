import styles from './PlanetB.module.css'

export default function PlanetB() {
  return (
    <div className={styles.container}>
      <div className={styles.noise}></div>

      {/* Background Stars */}
      <div className={styles.stars}></div>

      {/* Big Stars with Unique IDs */}
      <div
        id="star1"
        className={styles.bigStar}
        style={{ top: '15%', left: '20%' }}
      >
        <span className={styles.tooltip}>Lily</span>
      </div>
      <div
        id="star2"
        className={styles.bigStar}
        style={{ top: '25%', right: '15%' }}
      >
        <span className={styles.tooltip}>Haewon</span>
      </div>
      <div
        id="star3"
        className={styles.bigStar}
        style={{ bottom: '20%', left: '10%' }}
      >
        <span className={styles.tooltip}>Sullyoon</span>
      </div>
      <div
        id="star4"
        className={styles.bigStar}
        style={{ bottom: '35%', right: '25%' }}
      >
        <span className={styles.tooltip}>Bae</span>
      </div>
      <div
        id="star5"
        className={styles.bigStar}
        style={{ top: '10%', left: '50%' }}
      >
        <span className={styles.tooltip}>Jiwoo</span>
      </div>
      <div
        id="star6"
        className={styles.bigStar}
        style={{ bottom: '10%', right: '45%' }}
      >
        <span className={styles.tooltip}>Kyujin</span>
      </div>

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
