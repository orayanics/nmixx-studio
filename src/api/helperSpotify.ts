import { useQuery } from '@tanstack/react-query'

import { fetchAlbumTracks, fetchArtistAlbums } from './fetchSpotify'

import type { ArtistAlbumItem, ArtistAlbums } from '@/types/ArtistAlbums'
import type { ALBUM_TYPE } from '@/types/Shared'
import type { GetAlbumTracks, TrackItem } from '@/types/AlbumTracks'

export type AlbumWithTracks = ArtistAlbumItem & { tracks: Array<TrackItem> }

export async function getLatestAlbumByArtist(
  album_type?: ALBUM_TYPE,
): Promise<ArtistAlbums> {
  return fetchArtistAlbums(true, album_type)
}

export async function getLatestAlbumTracks(
  albumId: string,
): Promise<GetAlbumTracks> {
  return fetchAlbumTracks(albumId)
}

export function useAlbumWithTracks() {
  const {
    data: albumsData,
    error: albumsError,
    isLoading: albumsLoading,
  } = useQuery({
    queryKey: ['artist-albums'],
    queryFn: () => fetchArtistAlbums(true, 'album'),
  })

  const latestAlbum = albumsData?.items.at(0)
  const albumId = latestAlbum?.id

  const {
    data: tracksData,
    error: tracksError,
    isLoading: tracksLoading,
  } = useQuery({
    queryKey: ['album-tracks', albumId],
    queryFn: () => {
      return fetchAlbumTracks(albumId as string)
    },
    enabled: !!albumId,
  })

  const combined = latestAlbum
    ? {
        ...latestAlbum,
        tracks: tracksData?.items ?? [],
      }
    : null

  return {
    data: combined,
    isLoading: albumsLoading || tracksLoading,
    error: albumsError || tracksError,
  }
}
