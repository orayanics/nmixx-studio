import { createFileRoute } from '@tanstack/react-router'

import { useAlbumWithTracks } from '@/api/helperSpotify'

import LANDING_BACKGROUND from '@/assets/images/blue-valentine-1.webp'

import HeroImage from '@/components/Page/HeroImage'
import LoaderSpinner from '@/components/Loader/LoaderSpinner'
import LoaderError from '@/components/Loader/LoaderError'
import PlayerSpinner from '@/components/Spotify/PlayerSpinner'

export const Route = createFileRoute('/(public)/')({
  component: App,
})

function App() {
  const { data, isLoading, error } = useAlbumWithTracks()

  if (isLoading) return <LoaderSpinner isFullScreen />
  if (error || !data) return <LoaderError isFullScreen />

  return (
    <>
      <HeroImage BACKGROUND={LANDING_BACKGROUND} scrollId="player" />
      <PlayerSpinner album={data} />
    </>
  )
}
