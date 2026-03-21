import { createFileRoute } from '@tanstack/react-router'
import PlayerSpinner from '@/components/Spotify/PlayerSpinner'
import Planet from '@/components/Dynamic/Planet'
import { useAlbum } from '@/api/lastfm'

import LoaderSpinner from '@/components/Loader/LoaderSpinner'
import LoaderError from '@/components/Loader/LoaderError'

export const Route = createFileRoute('/(public)/')({
  component: App,
})

function App() {
  const { data, isPending, isError } = useAlbum('NMIXX', 'Blue Valentine')

  return (
    <>
      <main className="h-screen w-full">
        <div className="bg-stars" />
        <Planet />
      </main>
      {isPending && <LoaderSpinner />}
      {isError && <LoaderError />}
      {data && (
        <section className="h-screen w-full" id="player">
          <div className="bg-stars" />
          <PlayerSpinner album={data} />
        </section>
      )}
    </>
  )
}
