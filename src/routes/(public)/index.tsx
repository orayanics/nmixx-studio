import { createFileRoute } from '@tanstack/react-router'

import { useAlbumWithTracks } from '@/api/helperSpotify'

import LoaderSpinner from '@/components/Loader/LoaderSpinner'
import LoaderError from '@/components/Loader/LoaderError'
import PlayerSpinner from '@/components/Spotify/PlayerSpinner'
import Planet from '@/components/Dynamic/Planet'

export const Route = createFileRoute('/(public)/')({
  component: App,
})

function App() {
  const { data, isLoading, error } = useAlbumWithTracks()

  if (isLoading) return <LoaderSpinner isFullScreen />
  if (error || !data) return <LoaderError isFullScreen />

  return (
    <>
      <main className="h-screen w-full">
        <div className="bg-stars" />
        <Planet />
      </main>
      <section className="h-screen w-full" id="player">
        <div className="bg-stars" />
        <PlayerSpinner album={data} />
      </section>
    </>
  )
}
