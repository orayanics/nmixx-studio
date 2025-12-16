import styles from './Planet.module.css'

export default function Planet() {
  return (
    // <div className={styles.container}>
    //   <div className={styles.logo}>
    //     <div className="text-center leading-tight">
    //       <p>Blue</p>
    //       <p>Valentine</p>
    //     </div>
    //     <div className={styles.orbit + ' ' + styles['orbit-a']}></div>
    //     <div className={styles.orbit + ' ' + styles['orbit-b']}></div>
    //   </div>
    // </div>
    <div className={styles.container}>
      <div className={styles.logo}>
        <p className={styles.title}>STARGLOW</p>
        <div className={`${styles.orbit} ${styles.orbitA}`}></div>
        <div className={`${styles.orbit} ${styles.orbitB}`}></div>
      </div>
    </div>
  )
}
