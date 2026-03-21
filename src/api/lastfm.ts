import { useQuery } from '@tanstack/react-query'
import type { LastFMAlbumResponse } from '@/types/LastFm'

const LAST_FM_URL = 'https://ws.audioscrobbler.com/2.0'
const LAST_FM_KEY = import.meta.env.VITE_LAST_FM_API_KEY

if (!LAST_FM_KEY) {
  console.log('SET LAST FM KEY')
}

async function fetchAlbum(
  artist: string,
  album: string,
): Promise<LastFMAlbumResponse> {
  const url = new URL(LAST_FM_URL)
  url.searchParams.set('method', 'album.getinfo')
  url.searchParams.set('artist', artist)
  url.searchParams.set('album', album)
  url.searchParams.set('api_key', LAST_FM_KEY)
  url.searchParams.set('format', 'json')
  url.searchParams.set('autocorrect', '1')

  const res = await fetch(url.toString())
  if (!res.ok) throw new Error(`LastFM API error: ${res.status}`)

  return res.json() as Promise<LastFMAlbumResponse>
}

export function useAlbum(artist: string, album: string) {
  return useQuery({
    queryKey: ['album', artist, album],
    queryFn: () => fetchAlbum(artist, album),
    enabled: Boolean(artist && album),
    staleTime: 1000 * 60 * 5,
    select: (data) => data.album,
    retry: false,
  })
}
