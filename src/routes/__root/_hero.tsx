import { LANDING_BACKGROUND } from '@/configs/landing'
import Player from '@/components/Spotify/Player'
import styles from '@/styles/Landing.module.css'

export function Hero() {
  return (
    <section
      className={`${styles['landing-backround']}`}
      style={{
        backgroundImage: `url(${LANDING_BACKGROUND})`,
      }}
    >
      <Player />
    </section>
  )
}
