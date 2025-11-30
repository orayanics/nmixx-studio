import { useQuery } from '@tanstack/react-query'

import LoaderSpinner from '../Loader/LoaderSpinner'
import PlayerSpinner from './PlayerSpinner'

import type { AlbumWithTracks } from '@/api/helperSpotify'
import { getLatestAlbumTracks } from '@/api/helperSpotify'

export default function Player() {
  const { data, isFetching, isError } = useQuery<AlbumWithTracks>({
    queryKey: ['latest-album-tracks'],
    queryFn: getLatestAlbumTracks,
  })

  if (isFetching) return <LoaderSpinner isFullScreen={true} />
  if (isError) return <div>Failed to load albums.</div>

  if (!data) return <div>No albums available.</div>

  return <PlayerSpinner album={data} />
}
