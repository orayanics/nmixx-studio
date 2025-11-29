import { useQuery } from '@tanstack/react-query'

import PlayerSpinner from './PlayerSpinner'

import { fetchAlbumTracks, getLatestAlbumByArtist } from '@/api/fetchSpotify'

export default function Player() {
  const {
    data: latestAlbumData,
    isLoading: isLoadingLatestAlbum,
    error: errorLatestAlbum,
  } = useQuery({
    queryKey: ['latest-album'],
    queryFn: () => getLatestAlbumByArtist('album'),
    staleTime: 60_000,
  })

  const latestAlbum = latestAlbumData?.items[0]
  const latestAlbumId = latestAlbum?.id || ''

  const {
    data: albumTracksData,
    isLoading: isLoadingAlbumTracks,
    error: errorAlbumTracks,
  } = useQuery({
    queryKey: ['album-tracks', latestAlbumId],
    queryFn: () => fetchAlbumTracks(latestAlbumId),
    enabled: !!latestAlbumId,
  })

  if (isLoadingLatestAlbum || isLoadingAlbumTracks)
    return <div>Loading NMIXX albums…</div>
  if (errorLatestAlbum || errorAlbumTracks)
    return <div>Failed to load albums.</div>

  const response = {
    artists: latestAlbum?.artists || [],
    album_type: latestAlbum?.album_type || '',
    total_tracks: latestAlbum?.total_tracks || 0,
    name: latestAlbum?.name || '',
    release_date: latestAlbum?.release_date || '',
    href: latestAlbum?.href || '',
    images: latestAlbum?.images || [],
    external_urls: latestAlbum?.external_urls || { spotify: '' },
    uri: latestAlbum?.uri || '',
    tracks: albumTracksData?.items || [],
  }

  return <PlayerSpinner album={response} />
}
