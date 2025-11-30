import { createFileRoute } from '@tanstack/react-router'
import { LANDING_BACKGROUND } from '@/configs/landing'
import Player from '@/components/Spotify/Player'
import styles from '@/styles/Landing.module.css'

export const Route = createFileRoute('/(public)/')({
  component: App,
})

export default function App() {
  return (
    <section
      className={`${styles['landing-background']}`}
      style={{
        backgroundImage: `url(${LANDING_BACKGROUND})`,
      }}
    >
      <Player />
    </section>
  )
}
