import { fetchAlbumTracks, fetchArtistAlbums } from './fetchSpotify'

import type { ArtistAlbumItem, ArtistAlbums } from '@/types/ArtistAlbums'
import type { ALBUM_TYPE } from '@/types/Shared'
import type { TrackItem } from '@/types/AlbumTracks'

export type AlbumWithTracks = ArtistAlbumItem & { tracks: Array<TrackItem> }

export async function getLatestAlbumByArtist(
  album_type?: ALBUM_TYPE,
): Promise<ArtistAlbums> {
  const albumsData = await fetchArtistAlbums(true, album_type)
  return albumsData
}

export async function getLatestAlbumTracks(): Promise<AlbumWithTracks> {
  const latestAlbum = await getLatestAlbumByArtist('album')

  const album = latestAlbum.items.at(0)
  const albumId = album?.id

  if (!album || !albumId) {
    throw new Error('No latest album available')
  }

  const tracksData = await fetchAlbumTracks(albumId)
  const tracks = tracksData.items

  const response: AlbumWithTracks = {
    ...album,
    tracks: tracks,
  }

  return response
}
