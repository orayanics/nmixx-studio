import type { Artist, Image, Restrictions } from './Shared'

export interface ArtistAlbums {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items: Array<ArtistAlbumItem>
}

export interface ArtistAlbumItem {
  album_type: string
  total_tracks: number
  available_markets: Array<string>
  external_urls: { spotify: string }
  href: string
  id: string
  images: Array<Image>
  name: string
  release_date: string
  release_date_precision: string
  restrictions?: Restrictions
  type: string
  uri: string
  artists: Array<Artist>
  album_group: string
}
