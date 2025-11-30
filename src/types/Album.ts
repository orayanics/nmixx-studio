import type {
  Artist,
  Copyright,
  ExternalIds,
  ExternalUrls,
  Image,
  LinkedFrom,
  Restrictions,
} from './Shared'

export interface GetAlbum {
  album_type: string
  total_tracks: number
  available_markets: Array<string>
  external_urls: ExternalUrls
  href: string
  id: string
  images: Array<Image>
  name: string
  release_date: string
  release_date_precision: string
  restrictions: Restrictions
  type: string
  uri: string
  artists: Array<Artist>
  tracks: Tracks
  copyrights: Array<Copyright>
  external_ids: ExternalIds
  genres: Array<string>
  label: string
  popularity: number
}

export interface Tracks {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items: Array<TrackItem>
}

export interface TrackItem {
  artists: Array<Artist>
  available_markets: Array<string>
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_urls: ExternalUrls
  href: string
  id: string
  is_playable: boolean
  linked_from: LinkedFrom
  restrictions: Restrictions
  name: string
  preview_url: string | null
  track_number: number
  type: string
  uri: string
  is_local: boolean
}
