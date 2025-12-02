import { Await, createFileRoute } from '@tanstack/react-router'
// import { queryOptions } from '@tanstack/react-query'

import LANDING_BACKGROUND from '@/assets/images/blue-valentine-1.webp'

import HeroImage from '@/components/Page/HeroImage'
import LoaderSpinner from '@/components/Loader/LoaderSpinner'
import PlayerSpinner from '@/components/Spotify/PlayerSpinner'

import { getLatestAlbumTracks } from '@/api/helperSpotify'

// const playerQuery = () =>
//   queryOptions({
//     queryKey: ['latest-album-tracks'],
//     queryFn: getLatestAlbumTracks,
//     staleTime: 60 * 1000, // 1 minute
//   })

export const Route = createFileRoute('/(public)/')({
  loader: async () => {
    const slowData = getLatestAlbumTracks()
    return { slowData }
  },
  component: App,
})

function App() {
  const { slowData: data } = Route.useLoaderData()
  return (
    <>
      <HeroImage BACKGROUND={LANDING_BACKGROUND} scrollId="player" />
      <Await promise={data} fallback={<LoaderSpinner />}>
        {(data) => {
          return <PlayerSpinner album={data} />
        }}
      </Await>
    </>
  )
}
