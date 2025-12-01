import { createFileRoute } from '@tanstack/react-router'

import LANDING_BACKGROUND from '@/assets/images/test.webp'

import PlayerSpinner from '@/components/Spotify/PlayerSpinner'
import HeroImage from '@/components/Page/HeroImage'

export const Route = createFileRoute('/(public)/')({
  component: App,
})

function App() {
  return (
    <>
      <HeroImage BACKGROUND={LANDING_BACKGROUND} scrollId="player" />

      <PlayerSpinner />
    </>
  )
}
