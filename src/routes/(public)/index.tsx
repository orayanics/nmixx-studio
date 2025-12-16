import { createFileRoute } from '@tanstack/react-router'

import { useAlbumWithTracks } from '@/api/helperSpotify'

// import LANDING_BACKGROUND from '@/assets/images/blue-valentine-1.webp'

// import HeroImage from '@/components/Page/HeroImage'
import LoaderSpinner from '@/components/Loader/LoaderSpinner'
import LoaderError from '@/components/Loader/LoaderError'
// import PlayerSpinner from '@/components/Spotify/PlayerSpinner'
// import Planet from '@/components/Dynamic/Planet'
import PlanetB from '@/components/Dynamic/PlanetB'

export const Route = createFileRoute('/(public)/')({
  component: App,
})

function App() {
  const { data, isLoading, error } = useAlbumWithTracks()

  if (isLoading) return <LoaderSpinner isFullScreen />
  if (error || !data) return <LoaderError isFullScreen />

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <div
          id="planet"
          className="absolute inset-0 flex items-center justify-center"
        >
          <PlanetB />
        </div>
      </section>
      {/* <HeroImage BACKGROUND={LANDING_BACKGROUND} scrollId="player" /> */}
      {/* <section id="player" className="!mb-[var(--section-spacing)]">
        <PlayerSpinner album={data} />
      </section> */}
    </>
  )
}
